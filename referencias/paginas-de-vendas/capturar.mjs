// Captura de página inteira (desktop 1440 e celular 390) para a biblioteca de referências.
// Uso:
//   node referencias/paginas-de-vendas/capturar.mjs <slug> <url> [--so=desktop|mobile] [--altura-max=N] [--qualidade=70] [--modo=costura]
//   node referencias/paginas-de-vendas/capturar.mjs --lista=arquivo.txt      (uma linha por página: "slug url")
// Pop-ups: o script tenta fechar avisos de cookies e janelas com "×"/"Fechar". Para outros botões, use --clicar="No|Agora não";
// para pop-ups que não fecham por clique, use --esconder="seletor CSS" (ex.: --esconder=".cozy-crd, .needsclick").
// Atenção: o ambiente sai para a internet por fora do Brasil; alguns sites mostram aviso de região ("Dear customer...").
// Salva em referencias/paginas-de-vendas/capturas/<slug>-desktop.jpg e <slug>-mobile.jpg.
// Rola a página até o fim antes de capturar (carrega imagens com lazy load e dispara animações de entrada),
// tenta fechar avisos de cookies e, se o arquivo passar de ~3 MB, reduz a qualidade e depois a altura.
// Altura máxima padrão: 30000 px no desktop e 45000 px no celular (páginas maiores são cortadas e o log avisa).
// --modo=costura: para páginas com animação presa à rolagem (seções que saem em branco na captura normal).
//   Tira uma foto da tela a cada rolagem e junta as fotos num canvas; esconde menus fixos depois da primeira tela.
//   Limite de 32000 px de altura nesse modo.
import { createRequire } from 'module';
import { statSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const require = createRequire('/opt/node22/lib/node_modules/');
const { chromium, devices } = require('playwright');

const args = process.argv.slice(2);
const opt = (k, d) => { const a = args.find(x => x.startsWith(`--${k}=`)); return a ? a.split('=').slice(1).join('=') : d; };
const pasta = join(dirname(fileURLToPath(import.meta.url)), 'capturas');
mkdirSync(pasta, { recursive: true });
const LIMITE = 3 * 1024 * 1024;
const alturaMaxOpt = opt('altura-max', '');
const alturaMaxDe = tipo => Number(alturaMaxOpt || (tipo === 'mobile' ? 45000 : 30000));
const modo = opt('modo', 'inteira');
const qualidade0 = Number(opt('qualidade', 70));
const so = opt('so', '');

let alvos = [];
if (opt('lista', '')) {
  alvos = readFileSync(opt('lista'), 'utf8').split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#')).map(l => l.split(/\s+/));
} else {
  const pos = args.filter(a => !a.startsWith('--'));
  if (pos.length < 2) { console.log('Uso: node capturar.mjs <slug> <url>  |  --lista=arquivo.txt'); process.exit(1); }
  alvos = [[pos[0], pos[1]]];
}

const perfis = {
  desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, isMobile: false, hasTouch: false,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36' },
  mobile: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true,
    userAgent: devices['iPhone 13'].userAgent },
};

async function fecharAvisos(page) {
  // Botões ou links curtos de aviso de cookies/LGPD ("Aceitar", "Ok, entendi", "Permitir cookies"...)
  const nome = /^\s*(aceitar( todos| cookies| e fechar)?|aceito|concordo|concordar|entendi|ok(,? entendi)?|permitir( todos| cookies)?|prosseguir|got it|accept( all)?)\s*!?\s*$/i;
  // Pop-ups: botão de fechar ("×", "Fechar", "Close") e textos extras passados em --clicar="No|Agora não"
  const fechar = /^\s*(×|✕|x|fechar|close|fechar (janela|modal)|close (dialog|modal))\s*$/i;
  const extras = opt('clicar', '') ? new RegExp(`^\\s*(${opt('clicar', '')})\\s*$`, 'i') : null;
  for (const re of [extras, fechar].filter(Boolean)) {
    const bs = page.getByRole('button', { name: re });
    const n = Math.min(await bs.count().catch(() => 0), 4);
    for (let i = 0; i < n; i++) {
      const b = bs.nth(i);
      if (await b.isVisible({ timeout: 300 }).catch(() => false)) { await b.click({ timeout: 1500 }).catch(() => {}); await page.waitForTimeout(400); }
    }
  }
  await page.keyboard.press('Escape').catch(() => {});
  // --esconder="seletor CSS": some com pop-ups que não fecham por clique (ex.: aviso de região, formulário de desconto)
  if (opt('esconder', '')) await page.addStyleTag({ content: `${opt('esconder', '')}{display:none!important} html,body{overflow:auto!important}` }).catch(() => {});
  for (const papel of ['button', 'link']) {
    const bs = page.getByRole(papel, { name: nome });
    const n = Math.min(await bs.count().catch(() => 0), 4);
    for (let i = 0; i < n; i++) {
      const b = bs.nth(i);
      if (await b.isVisible({ timeout: 300 }).catch(() => false)) { await b.click({ timeout: 1500 }).catch(() => {}); await page.waitForTimeout(400); }
    }
  }
}

async function rolarAteOFim(page) {
  let ultimo = 0;
  for (let i = 0; i < 80; i++) {
    const { y, h } = await page.evaluate(() => { window.scrollBy(0, Math.round(window.innerHeight * 0.8)); return { y: window.scrollY + window.innerHeight, h: document.documentElement.scrollHeight }; });
    await page.waitForTimeout(450);
    if (y >= h - 5) { if (h === ultimo) break; ultimo = h; }
  }
  await page.evaluate(() => {
    document.querySelectorAll('img[loading="lazy"]').forEach(i => i.setAttribute('loading', 'eager'));
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1500);
}

async function costurar(page, arq, largura, altura, q) {
  const vh = page.viewportSize().height, telas = [];
  for (let y = 0; y < altura; y += vh) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(900);
    if (y > 0) await page.evaluate(() => {
      for (const el of document.querySelectorAll('body *')) {
        const p = getComputedStyle(el).position;
        if (p === 'fixed' || p === 'sticky') el.style.setProperty('visibility', 'hidden', 'important');
      }
    });
    const yReal = await page.evaluate(() => window.scrollY);
    telas.push({ y: yReal, d: (await page.screenshot({ type: 'png' })).toString('base64') });
  }
  const tela = await page.context().newPage();
  const dataUrl = await tela.evaluate(async ({ telas, largura, altura, q }) => {
    const c = document.createElement('canvas'); c.width = largura; c.height = altura;
    const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, largura, altura);
    for (const t of telas) { const im = new Image(); im.src = 'data:image/png;base64,' + t.d; await im.decode(); g.drawImage(im, 0, t.y); }
    return c.toDataURL('image/jpeg', q / 100);
  }, { telas, largura, altura, q });
  await tela.close();
  writeFileSync(arq, Buffer.from(dataUrl.split(',')[1], 'base64'));
  await page.evaluate(() => window.scrollTo(0, 0));
}

async function capturar(browser, slug, url, tipo) {
  const ctx = await browser.newContext({ ...perfis[tipo], locale: 'pt-BR' });
  const page = await ctx.newPage();
  const arq = join(pasta, `${slug}-${tipo}.jpg`);
  try {
    const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    await page.waitForTimeout(1500);
    await fecharAvisos(page);
    await rolarAteOFim(page);
    await fecharAvisos(page);
    const alturaTotal = await page.evaluate(() => document.documentElement.scrollHeight);
    const largura = perfis[tipo].viewport.width;
    let altura = Math.min(alturaTotal, alturaMaxDe(tipo)), q = qualidade0, tam = Infinity;
    if (modo === 'costura') altura = Math.min(altura, 32000);
    for (let tentativa = 0; tentativa < 6; tentativa++) {
      if (modo === 'costura') await costurar(page, arq, largura, altura, q);
      else await page.screenshot({ path: arq, type: 'jpeg', quality: q, clip: { x: 0, y: 0, width: largura, height: altura }, fullPage: true, animations: 'disabled' });
      tam = statSync(arq).size;
      if (tam <= LIMITE) break;
      if (q > 50) q -= 10; else altura = Math.round(altura * 0.8);
    }
    const corte = altura < alturaTotal ? ` (cortada: página tem ${alturaTotal}px)` : '';
    console.log(`OK ${slug}-${tipo} | ${modo} | status ${resp?.status()} | ${altura}px${corte} | q${q} | ${(tam / 1024 / 1024).toFixed(2)} MB | ${new Date().toISOString()} | ${page.url()}`);
  } catch (e) {
    console.log(`ERRO ${slug}-${tipo} | ${url} | ${e.message.split('\n')[0]}`);
  } finally { await ctx.close(); }
}

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(() => chromium.launch());
for (const [slug, url] of alvos) {
  for (const tipo of ['desktop', 'mobile']) if (!so || so === tipo) await capturar(browser, slug, url, tipo);
}
await browser.close();
