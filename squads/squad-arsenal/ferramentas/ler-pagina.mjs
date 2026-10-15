// Lê páginas com o Chromium do ambiente (inclusive páginas montadas por JavaScript)
// e imprime o texto visível. Uso:
//   node squads/squad-arsenal/ferramentas/ler-pagina.mjs <url> [url...] [--max=20000] [--rolar=3] [--html]
// Use quando o WebFetch falhar (erro de endereço ou página vazia).
import { createRequire } from 'module';
const require = createRequire('/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const opt = (k, d) => { const a = args.find(x => x.startsWith(`--${k}=`)); return a ? Number(a.split('=')[1]) : d; };
const max = opt('max', 20000), rolar = opt('rolar', 3), html = args.includes('--html');
const urls = args.filter(a => !a.startsWith('--'));

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(() => chromium.launch());
const ctx = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36',
  locale: 'pt-BR', viewport: { width: 1366, height: 900 },
});
for (const url of urls) {
  const page = await ctx.newPage();
  try {
    const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    for (let i = 0; i < rolar; i++) { await page.mouse.wheel(0, 2500); await page.waitForTimeout(1200); }
    const texto = html ? await page.content() : (await page.innerText('body')).replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n');
    console.log(`=== ${url}\nstatus: ${resp?.status()} | url final: ${page.url()} | lido em: ${new Date().toISOString()}\n${texto.slice(0, max)}\n`);
  } catch (e) {
    console.log(`=== ${url}\nERRO: ${e.message.split('\n')[0]}\n`);
  } finally { await page.close(); }
}
await browser.close();
