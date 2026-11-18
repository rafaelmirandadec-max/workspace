/* /mapa — versão Meta (andromens.com.br/mapa, pedido do Elias 23/10): a parte de produção em volta do desenho da Bia
   (perguntas-v2/perguntas.js). Roda ANTES dele (scripts com defer rodam na ordem do HTML), por isso decide a cor antes
   de ele ler. Regras (Igor + Tracker, 23/10):
   - Sem pixel e sem script de terceiro: nada daqui fala com a Meta; tudo vai pro /mapa/api (mesma origem, CSP 'self').
   - Cor: SÓ AZUL desde 30/10 (Elias: "deixe só a versão azul no meta e no google, não precisa mais testar a versão
     escura"). O núcleo do sorteio (escolheCor) segue aqui pros testes, mas a página não sorteia mais. NUNCA depende do
     resultado do mapa — é decidida aqui, antes de existir qualquer resposta.
   - URL: na partida guarda os parâmetros de entrada da LISTA FIXA (utm_* e fbclid) e deixa na barra só eles; o resto
     (nome, telefone, resposta, ?tema, ?fonte...) sai antes de qualquer outro script ler a barra.
   - Visita: 1 por sessão, sem dado pessoal e sem UTM (o Railway grava só sessão, pergunta 0, total, versão+cor, origem).
   - Lead: no toque do "Ver meu Mapa de Risco" (evento mapa:ver, depois de o desenhador validar), 1x por lead_id.
   - Agendar → /vsl-3 montado de LISTA FIXA (form, ab_tema, utm_*, fbclid): nada do resultado, do nome ou do telefone.
   - Clique (Elias 27/10, "medir esses cliques, todo mundo"): no toque em "Agendar minha consulta" (site) ou "Falar no
     WhatsApp" (whatsapp) do resultado, manda pro /mapa/api/clique só sessão, lead_id, cor, qual botão e onde (cta|barra).
     Nada da pessoa; o Railway liga o clique ao lead pelo lead_id, do lado de lá.
   - Rastro (Elias 30/10, pergunta a pergunta, tempos, toques e mapa de calor): ANÔNIMO, com id aleatório só da aba (não é
     a sessão nem o lead_id): telas, tempo visível em cada uma, onde tocou (posição relativa) e rolagem do resultado, em
     lotes pro /mapa/api/rastro. Nada de nome, telefone, resposta, IP ou UTM. */
(() => {
  'use strict';
  const VARIANTES = ['azul', 'escuro'];
  const ENTRADA = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_place', 'fbclid'];
  const AGENDAR = 'https://pay.hub.la/xsvWVGbmQbri6iXyzlDb';   // Novembro Azul: resultado vai direto ao checkout
  const WHATSAPP = 'https://wa.me/';
  const FORM = 'mapa-meta';
  const VERSAO = 'mapa-meta-v1';
  const MAX_PARAM = 300;

  // ---------- núcleo puro (os testes carregam só ele) ----------
  const sorteia = (byte) => VARIANTES[byte & 1];   // 1 bit do gerador do navegador: 50/50 exato
  const escolheCor = (forcada, guardada, byte) => (VARIANTES.includes(forcada) ? forcada
    : VARIANTES.includes(guardada) ? guardada : sorteia(byte));
  const limpaValor = (v) => String(v).replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, MAX_PARAM);
  function entradaDe(busca) {
    const q = new URLSearchParams(busca), e = {};
    for (const k of ENTRADA) { const v = limpaValor(q.get(k) || ''); if (v) e[k] = v; }
    return e;
  }
  function urlLimpa(caminho, entrada) {
    const q = new URLSearchParams();
    for (const k of ENTRADA) if (entrada[k]) q.set(k, entrada[k]);
    const s = q.toString();
    return caminho + (s ? '?' + s : '');
  }
  function linkAgendar(entrada, cor) {
    const u = new URL(AGENDAR);
    u.searchParams.set('form', FORM);
    if (VARIANTES.includes(cor)) u.searchParams.set('ab_tema', cor);
    for (const k of ENTRADA) if (entrada[k]) u.searchParams.set(k, entrada[k]);
    return u.toString();
  }
  // o botão do resultado que a pessoa tocou (pelo destino do link): site = Agendar (vsl-3), whatsapp = Falar no WhatsApp;
  // lugar = o bloco do fim (cta) ou a barra fixa. Qualquer outro link (privacidade, e-mail) = null, não conta
  function botaoDe(href, naBarra) {
    const h = String(href || '');
    const botao = h.startsWith(AGENDAR) ? 'site' : h.startsWith(WHATSAPP) ? 'whatsapp' : '';
    return botao ? { botao, lugar: naBarra ? 'barra' : 'cta' } : null;
  }
  function cookie(todos, nome) {
    const m = new RegExp('(?:^|;\\s*)' + nome + '=([^;]*)').exec(todos || '');
    try { return m ? decodeURIComponent(m[1]) : ''; } catch { return ''; }
  }
  // _fbc: o cookie, se já existir (legível desde 11/10); senão, com fbclid na entrada, monta aqui (sem cookie, sem request)
  const fbcDe = (todos, fbclid, criado) => cookie(todos, '_fbc') || (fbclid ? `fb.1.${criado}.${fbclid}` : '');
  // estado do desenhador: escolha única = índice; múltipla = conjunto (pelo comportamento, não pelo instanceof)
  const conjunto = (s) => s != null && typeof s === 'object' && typeof s.has === 'function' && typeof s[Symbol.iterator] === 'function';
  const marcado = (r, i) => (conjunto(r.sel) ? r.sel.has(i) : r.sel === i);
  function respostasTexto(D, resp) {
    const out = {};
    for (const p of D.perguntas) {
      const r = resp[p.n];
      if (!r || r.sel == null) continue;
      const idx = conjunto(r.sel) ? [...r.sel].sort((a, b) => a - b) : [r.sel];
      out[p.n] = idx.map((i) => p.opcoes[i] && p.opcoes[i].tx).filter(Boolean);
    }
    return out;
  }
  function outroDe(D, resp) {
    const p = D.perguntas[8], i = p.opcoes.findIndex((o) => o.campo), r = resp[p.n];
    return i >= 0 && r && r.sel != null && marcado(r, i) ? String(r.campo || '').trim() : '';
  }
  function corpoLead(D, det, sessao, cor, cookies, pagina) {
    const e = sessao.entrada || {}, utm = {};
    for (const k of ENTRADA) if (k.startsWith('utm_') && e[k]) utm[k] = e[k];
    return {
      lead_id: sessao.lead, versao: VERSAO,
      respostas: respostasTexto(D, det.resp), outro: outroDe(D, det.resp),
      nome: det.f.nome, data_nascimento: det.f.nasc, telefone: det.f.tel,
      consent_versao: D.autoriza.versao, consent_botao: D.autoriza.forma,
      variante: cor, utm, fbclid: e.fbclid || '', fbc: fbcDe(cookies, e.fbclid, sessao.criado), fbp: cookie(cookies, '_fbp'),
      pagina,
    };
  }
  window.MAPA_INTEGRA = Object.freeze({ VARIANTES, ENTRADA, AGENDAR, WHATSAPP, FORM, VERSAO, sorteia, escolheCor, entradaDe, urlLimpa,
    linkAgendar, botaoDe, cookie, fbcDe, respostasTexto, outroDe, corpoLead });
  if (window.MAPA_INTEGRA_SO_NUCLEO || !window.document) return;

  // ---------- no navegador ----------
  const K_COR = 'mapa_meta_ab_tema', K_SESSAO = 'mapa_meta_sessao', API = '/mapa/api/';
  const ler = (area, k) => { try { return window[area].getItem(k); } catch { return null; } };
  const gravar = (area, k, v) => { try { window[area].setItem(k, v); } catch { /* aba anônima: segue sem guardar */ } };
  const byte = () => crypto.getRandomValues(new Uint8Array(1))[0];
  const uuid = () => (crypto.randomUUID ? crypto.randomUUID()
    : '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) => (c ^ (byte() & (15 >> (c / 4)))).toString(16)));

  let sessao = null;
  try { sessao = JSON.parse(ler('sessionStorage', K_SESSAO) || 'null'); } catch { sessao = null; }
  if (!sessao || typeof sessao !== 'object' || !sessao.id || !sessao.lead) {
    sessao = { id: uuid(), lead: uuid(), entrada: entradaDe(location.search), criado: Date.now(), visita: false, enviado: false };
  }
  const salva = () => gravar('sessionStorage', K_SESSAO, JSON.stringify(sessao));

  // a cor: decidida AQUI, antes de existir qualquer resposta (nunca pelo resultado). Só azul desde 30/10 (fim do teste de
  // cor): quem tinha "escuro" guardado também passa pro azul
  const cor = 'azul';
  gravar('localStorage', K_COR, cor);
  window.MAPA_AB_TEMA = cor;

  // a barra fica só com a lista fixa, antes de qualquer outro script ler
  history.replaceState(history.state, '', urlLimpa(location.pathname, sessao.entrada));
  salva();

  async function envia(rota, corpo, tentativas) {
    for (let t = 0; t < tentativas; t += 1) {
      try {
        const r = await fetch(API + rota, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(corpo),
          keepalive: true, credentials: 'same-origin' });
        if (r.ok) return true;
        if (r.status >= 400 && r.status < 500 && r.status !== 429) return false;   // recusado: repetir não muda nada
      } catch { /* sem rede: tenta de novo */ }
      if (t < tentativas - 1) await new Promise((res) => setTimeout(res, 1500 * 2 ** t * (0.5 + Math.random() / 2)));
    }
    return false;
  }

  // visita: 1 por sessão (o denominador do Téo). Leva o código do clique (fbc) pro PageView que o Railway manda à Meta
  // pela CAPI; IP e navegador o servidor pega sozinho. Nada de nome, telefone, resposta ou UTM.
  if (!sessao.visita) {
    const fbc = fbcDe(document.cookie, (sessao.entrada || {}).fbclid, sessao.criado);
    envia('visita', { session_id: sessao.id, variante: cor, ...(fbc ? { fbc } : {}) }, 2).then((ok) => { if (ok) { sessao.visita = true; salva(); } });
  }

  // lead: no toque do botão, depois de o desenhador validar; o mesmo lead_id em todas as tentativas
  let enviando = false;
  document.addEventListener('mapa:ver', (ev) => {
    if (sessao.enviado || enviando || !window.MAPA || !ev.detail) return;
    const corpo = corpoLead(window.MAPA, ev.detail, sessao, cor, document.cookie, location.origin + location.pathname);
    enviando = true;
    envia('lead', corpo, 3).then((ok) => { enviando = false; if (ok) { sessao.enviado = true; salva(); } });
  });

  // clique nos botões do resultado: só sessão, lead_id, cor, qual botão e onde. keepalive: o toque no Agendar troca de página
  document.addEventListener('click', (ev) => {
    const a = ev.target && ev.target.closest && ev.target.closest('a[href]');
    const c = a && botaoDe(a.getAttribute('href'), !!a.closest('.barra-cta'));
    if (c) envia('clique', { session_id: sessao.id, lead_id: sessao.lead, variante: cor, botao: c.botao, lugar: c.lugar }, 2);
  }, true);

  // Agendar: o desenhador põe https://andromens.com.br/vsl-3; aqui o link ganha a lista fixa (no clique e ao aparecer)
  const ajusta = () => document.querySelectorAll(`a[href^="${AGENDAR}"]`).forEach((a) => {
    const novo = linkAgendar(sessao.entrada, cor);
    if (a.href !== novo) a.href = novo;
  });
  document.addEventListener('click', (ev) => {
    const a = ev.target && ev.target.closest && ev.target.closest(`a[href^="${AGENDAR}"]`);
    if (a) a.href = linkAgendar(sessao.entrada, cor);
  }, true);
  new MutationObserver(ajusta).observe(document.documentElement, { childList: true, subtree: true });

  // rastro (Elias 30/10: "tudo tem que ser trackeado e todos os cliques em botões, mapa de calor e conversão de pergunta a
  // pergunta... tempo de preenchimento... tempo que a pessoa passa lendo o resultado e quanto demora pra clicar").
  // ANÔNIMO de propósito: um id aleatório SÓ desta aba (não é a sessão do lead nem o lead_id), sem IP, sem UTM, sem nome,
  // telefone ou resposta. Manda em que tela a pessoa está (o desenhador avisa pelo evento mapa:tela), quanto tempo a página
  // ficou VISÍVEL em cada tela, onde tocou (posição relativa: o mapa de calor) e, no resultado, até onde rolou. Em lotes pro
  // /mapa/api/rastro (mesma origem; a CSP connect-src 'self' já cobre). Qualquer erro aqui fica aqui: a página segue igual.
  try { (() => {
    const K = 'mapa_rastro', UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
    const ACOES = ['comecar', 'continuar', 'voltar', 'ver', 'privacidade'];
    const MAX_MS = 6 * 3600 * 1000, MAX_T = 30 * 24 * 3600 * 1000;
    let r = null;
    try { r = JSON.parse(ler('sessionStorage', K) || 'null'); } catch { r = null; }
    if (!r || typeof r !== 'object' || !UUID.test(String(r.id)) || !Number.isFinite(r.inicio)) r = { id: uuid(), inicio: Date.now() };
    gravar('sessionStorage', K, JSON.stringify(r));
    const fila = [];
    const agora = () => performance.now();
    const total = () => Math.max(0, Math.min(Math.round(Date.now() - r.inicio), MAX_T));
    const visivel = () => document.visibilityState !== 'hidden';
    let tela = null, acum = 0, desde = null, saiu = false, rolou = 0;
    // tempo com a página VISÍVEL na tela atual (aba em segundo plano não conta)
    const naTela = () => Math.max(0, Math.min(Math.round(acum + (desde !== null ? agora() - desde : 0)), MAX_MS));
    function manda(saindo) {
      while (fila.length) {
        const corpo = JSON.stringify({ id: r.id, w: Math.round(innerWidth), h: Math.round(innerHeight), ev: fila.splice(0, 40) });
        let foi = false;
        if (saindo && navigator.sendBeacon) {
          try { foi = navigator.sendBeacon(API + 'rastro', new Blob([corpo], { type: 'application/json' })); } catch { foi = false; }
        }
        if (!foi) fetch(API + 'rastro', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: corpo, keepalive: true, credentials: 'same-origin' }).catch(() => {});
      }
    }
    const poe = (ev) => { fila.push(ev); if (fila.length >= 30) manda(false); };
    const area = () => { const t = document.getElementById('tela'); return t && t.querySelector('.corpo'); };
    const fracao = () => { const c = area(); return c && c.scrollHeight ? Math.min(1, (c.scrollTop + c.clientHeight) / c.scrollHeight) : 0; };

    document.addEventListener('mapa:tela', (e) => {
      const p = Number(e.detail && e.detail.i);
      if (!Number.isInteger(p) || p < 0 || p > 18 || p === tela) return;
      poe(tela === null ? { e: 't', p, t: total() } : { e: 't', p, t: total(), de: tela, d: naTela() });
      tela = p; acum = 0; desde = visivel() ? agora() : null; rolou = 0;
      if (p === 16 || p === 18) manda(false);   // chegou nos dados / no resultado: manda o que juntou até aqui
    });

    // onde tocou: na área que rola (.corpo) = zona c; na janela do raio-x = j; no resto da tela do Mapa = f; fora dela (as
    // laterais no computador) = o. x = 0..1 da largura; y = altura ÷ largura (no resultado conta a rolagem). Teclado: sem posição
    function posicao(ev) {
      if (!ev.isTrusted || ev.detail === 0) return null;
      const t = ev.target instanceof Element ? ev.target : null, telaEl = document.getElementById('tela'), c = area();
      if (!t || !telaEl) return null;
      let z = 'o', base = telaEl, rol = 0;
      if (c && c.contains(t)) { z = 'c'; base = c; rol = c.scrollTop; }
      else if (t.closest('.janela')) { z = 'j'; base = t.closest('.janela'); }
      else if (telaEl.contains(t)) z = 'f';
      const b = base.getBoundingClientRect();
      if (!b.width) return null;
      const x = (ev.clientX - b.left) / b.width, y = (ev.clientY - b.top + rol) / b.width;
      return x >= 0 && x <= 1 && y >= 0 && y <= 30 ? { z, x: Math.round(x * 1000) / 1000, y: Math.round(y * 1000) / 1000 } : null;
    }
    function alvo(t) {
      const el = t instanceof Element ? t : null;
      if (!el) return 'fundo';
      const a = el.closest('a[href]');
      if (a && String(a.getAttribute('href')).startsWith(AGENDAR)) return a.closest('.barra-cta') ? 'agendar_barra' : 'agendar_cta';
      if (el.closest('[data-fechar]') || el.id === 'painel-fundo') return 'fechar';
      const ac = el.closest('[data-acao]');
      if (ac) return ACOES.includes(ac.dataset.acao) ? ac.dataset.acao : 'botao';
      if (el.closest('.opcao')) return 'opcao';
      if (el.closest('.mais-opcoes')) return 'mais';
      if (el.closest('input, select, textarea, label')) return 'campo';
      if (a) return 'link';
      return el.closest('button') ? 'botao' : 'fundo';
    }
    document.addEventListener('click', (ev) => {
      if (tela === null) return;
      const a = alvo(ev.target), pos = posicao(ev);
      poe({ e: 'k', p: tela, a, d: naTela(), ...(pos || {}) });
      if (a === 'agendar_barra' || a === 'agendar_cta') manda(true);   // a página vai trocar: manda já
    }, true);
    document.addEventListener('scroll', (ev) => {
      if (tela === 18 && ev.target === area()) rolou = Math.max(rolou, fracao());
    }, true);

    function sai() {
      if (tela === null || saiu) return;
      saiu = true;
      poe({ e: 'x', p: tela, d: naTela(), t: total() });
      if (tela === 18) {
        const blocos = document.querySelectorAll('#tela .bl');
        poe({ e: 'r', m: Math.round(Math.max(rolou, fracao()) * 100) / 100,
          b: Math.min(60, [...blocos].filter((b) => b.classList.contains('visto')).length), n: Math.min(60, blocos.length) });
      }
      manda(true);
    }
    document.addEventListener('visibilitychange', () => {
      if (!visivel()) { if (desde !== null) { acum += agora() - desde; desde = null; } sai(); }
      else { if (desde === null && tela !== null) desde = agora(); saiu = false; }
    });
    window.addEventListener('pagehide', sai);
    setInterval(() => manda(false), 15000);
  })(); } catch { /* sem o rastro a página segue igual */ }
})();
