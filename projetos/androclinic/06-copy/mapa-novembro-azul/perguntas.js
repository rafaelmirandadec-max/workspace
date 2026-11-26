// Mapa de Risco completo (abertura, 15 perguntas, tela final, carregando e resultado V2).
// O mesmo desenhador serve o protótipo (um celular clicável) e o quadro (todas as telas paradas).
// Texto: window.MAPA, gerado do md da Duda pelo build_perguntas.py. Pontuação: pontuacao.js.
// É referência de comportamento pro Vini, não o código de produção.
//
// Estrutura da tela (22/10, pedido do Elias: o corpo acompanha o formulário inteiro, com a câmera indo parte por parte):
//   .tela[data-tela]          abertura | pergunta | final | carregando | resultado
//     .brilho                 (só na V2 original)
//     .cab                    logo (abertura, carregando) ou Voltar + contador + barra (perguntas, final)   <- fica
//     .janela[data-foco]      o corpo em raio-x; a câmera (camera.css) muda com data-foco                <- fica
//     .miolo                  o conteúdo da tela: é a única parte que troca
//     .painel                 "Como usamos suas respostas" (tela final)                                   <- fica
// Como a .cab e a .janela não são recriadas, a barra anda e a câmera se move de uma tela pra outra sem corte.
(() => {
  const D = window.MAPA;
  const M = D.micro;
  const P = window.MAPA_PONTOS;
  const TOTAL = D.perguntas.length;
  const RAIO = '/mapa/resultado-animado/raio/';
  const TEMAS = { original: '', azul: 'tema-azul', laudo: 'tema-laudo', escuro: 'tema-escuro', preto: 'tema-escuro tema-preto' };
  const NOME_TEMA = { original: 'V2 original (com degradê)', azul: 'A · Azul da marca', laudo: 'B · Laudo', escuro: 'C · Escuro', preto: 'D · Preto e amarelo' };
  const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const CHECK = '<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>';
  const CAMADAS = ['circulacao', 'hormonio', 'sono', 'emocional', 'masculino'];

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ic = (n) => `<svg class="ic" aria-hidden="true"><use href="#i-${n}"/></svg>`;
  // produção (versão Meta): a cor é a variante do A/B sorteada na entrada pelo /mapa/app/integra.js — nunca a URL nem o resultado
  const temaDaUrl = () => { const t = window.MAPA_AB_TEMA; return typeof t === 'string' && Object.hasOwn(TEMAS, t) ? t : 'azul'; };
  const classeTema = (t) => (t === 'original' ? '' : `tema-solido ${TEMAS[t]}`);
  // o Elias gostou da A e da C (22/10): o painel do protótipo mostra só essas duas; as outras seguem pela URL (?tema=)
  const TEMAS_PAINEL = ['azul', 'escuro'];
  // opções de fonte (fontes.css); mulish = a de hoje, sem classe
  const FONTES = {
    mulish: { nome: 'Mulish', classe: '', sobre: 'A de hoje. Redonda e leve.' },
    atkinson: { nome: 'Atkinson Hyperlegible', classe: 'fonte-atkinson', sobre: 'Feita pra quem enxerga pouco. A mais fácil de ler.' },
    source: { nome: 'Source Sans 3', classe: 'fonte-source', sobre: 'Clássica, cara de instituição médica.' },
    figtree: { nome: 'Figtree', classe: 'fonte-figtree', sobre: 'Amigável e firme. A mais parecida com a de hoje.' },
    manrope: { nome: 'Manrope', classe: 'fonte-manrope', sobre: 'Moderna, cara de app de exame.' },
    lexend: { nome: 'Lexend', classe: 'fonte-lexend', sobre: 'Larga e espaçada, feita pra leitura fácil.' },
  };
  // o Elias escolheu a Lexend (22/10): é a fonte padrão; as outras seguem pela URL (?fonte=) e pelo painel do lado
  const fonteDaUrl = () => { const f = new URLSearchParams(location.search).get('fonte'); return f in FONTES ? f : 'lexend'; };
  // Resultado "modo alerta" (Elias, 30/10, via Duda): cópia do resultado, mais incisiva pra consulta. Só entra com ?modo=alerta
  // ou na página alerta.html (body.modo-alerta); o resultado de sempre não muda. O cronômetro e o "válida por 24h" aparecem
  // no protótipo pra decisão do Elias (?prazo=0 esconde); no app só entram quando o Vini fizer o prazo valer de verdade.
  // produção: o resultado modo alerta é o principal (Elias 30/10) — liga sempre, sem depender de URL nem de classe
  const MODO_ALERTA = true;
  const PRAZO_REAL = new URLSearchParams(location.search).get('prazo') === '1';   // Novembro Azul: sem cronômetro de 5 min
  const classeTela = (t, f) => [classeTema(t), FONTES[f].classe].filter(Boolean).join(' ');
  // produção: a barra de endereço é do /mapa/app/integra.js (só a lista fixa); o desenhador não escreve nela
  const poeNaUrl = () => {};
  const hojeTx = () => { const d = new Date(); return `${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`; };

  // ---------- peças fixas ----------
  const logo = () => '<img class="logo logo--p logo--cor" src="/mapa/assets/logo-novembro-azul.png" alt="Novembro Azul AndroClinic">'
    + '<img class="logo logo--p logo--branca" src="/mapa/assets/logo-novembro-azul-branca.png" alt="Novembro Azul AndroClinic">';

  // Uma barra só, que vai enchendo (Elias, 22/10). A largura vem de data-p (0 a 15) por regra no CSS: sem style inline.
  // Na tela final (n = 0) ela aparece cheia. Sem o contador "x de 15" na tela (Elias, 22/10: "não precisa do número de
  // perguntas"): só a barra mostra o progresso; pra leitor de tela ela continua com aria-valuetext "x de 15".
  function topo(n) {
    const feitos = n || TOTAL;
    const texto = n ? ` aria-valuetext="${n} ${M.de} ${TOTAL}"` : '';
    return `<header class="topo"><button type="button" class="voltar" data-acao="voltar">${ic('voltar')}${esc(M.voltar)}</button></header>`
      + `<div class="progresso barra" role="progressbar" aria-valuemin="0" aria-valuemax="${TOTAL}" aria-valuenow="${feitos}"${texto}>`
      + `<i class="barra__fill" data-p="${feitos}"><i class="barra__cor"></i><i class="barra__ponta"></i></i></div>`;
  }
  const cabecalho = (n) => `<div class="cab"><div class="cab__logo">${logo()}</div><div class="cab__nav">${topo(n)}</div></div>`;

  // A janela do corpo. As camadas "neutras" acendem a parte que a pergunta olha; as de nível acendem no carregando.
  function janela(foco, niveis, acesos) {
    const neutras = CAMADAS.map((k) => `<img class="cam__img neutro neutro--${k}" src="${RAIO}corpo-${k}-neutro.webp" alt="" decoding="async">`).join('');
    return `<div class="janela" aria-hidden="true" data-foco="${foco}"><div class="cam">`
      + `<img class="cam__img cam__base" src="${RAIO}corpo-base.webp" alt="" decoding="async">${neutras}`
      + `<span class="cam__niveis">${niveis ? camadasNivel(niveis, acesos) : ''}</span></div><span class="raio__scan"></span></div>`;
  }
  const camadasNivel = (niveis, acesos = 0) => D.pilares.map((p, i) => `<img class="cam__img nivel nivel--${p.k}${i < acesos ? ' aceso' : ''}" `
    + `data-nv="${niveis[p.k]}" src="${RAIO}corpo-${p.k}-${niveis[p.k]}.webp" alt="" decoding="async">`).join('');

  function painel() {
    return '<div class="painel-fundo" id="painel-fundo" hidden></div>'
      + '<div class="painel" id="painel" role="dialog" aria-modal="true" aria-labelledby="priv-titulo" hidden>'
      + `<div class="painel__topo"><button type="button" class="voltar" data-fechar>${ic('voltar')}${esc(M.voltar)}</button></div>`
      + `<div class="painel__corpo">${D.privacidade}<button type="button" class="btn btn--secundario priv__voltar" data-fechar>${ic('voltar')}${esc(M.voltar)}</button></div></div>`;
  }

  const rodape = (texto, acao, ativo, cls = '', attrs = '') => `<div class="rodape${cls}"><button type="button" class="btn btn--primario" data-acao="${acao}" aria-disabled="${!ativo}"${attrs}>${esc(texto)}${ic('seta')}</button></div>`;

  // ---------- conteúdo de cada tela (vai no .miolo) ----------
  // Ícones da abertura = a lente do card do resultado, com objetos no lugar do corpo (Elias, 22/10: "ícones acho que têm que ser
  // tipo isso, mas não do corpo humano"): objeto em raio-x cinza com uma parte acesa em vermelho (imagens do gera_icones.py);
  // o anel e o movimento ficam no CSS.
  const lente = (k) => `<span class="lente-ic lente-ic--${k}"><img class="lente-ic__base" src="${RAIO}icone-${k}-base.webp" alt="" decoding="async">`
    + `<img class="lente-ic__luz" src="${RAIO}icone-${k}-parte.webp" alt="" decoding="async">`
    + `<img class="lente-ic__parte" src="${RAIO}icone-${k}-parte.webp" alt="" decoding="async"><span class="lente-ic__scan"></span></span>`;

  function abertura() {
    const a = D.abertura;
    const tit = esc(a.titulo).replace(esc(a.destaque), `<span class="grad-tx">${esc(a.destaque)}</span>`);
    // modo alerta (Elias, 02/11): ícones realistas em fundo branco, no mesmo estilo da seção da consulta (motivos/motivo-*.webp)
    const REAL = { celular: 'online', raio: 'resultado', cadeado: 'sigilo' };   // Elias, 02/11: celular = videochamada do doutor; raio = folha de resultado com check
    const icone = (k) => (MODO_ALERTA && REAL[k] ? `<img class="selo-ab__real" src="/mapa/perguntas-v2/motivos/motivo-${REAL[k]}.webp" alt="" decoding="async">` : lente(k));
    const selos = a.selos.map((s) => `<li><span class="selo-ab__ic${MODO_ALERTA && REAL[s.ic] ? ' selo-ab__ic--real' : ''}" aria-hidden="true">${icone(s.ic)}</span>`
      + `<span class="selo-ab__tx">${s.linhas.map(esc).join('<br>')}</span></li>`).join('');
    // preço cortado (Elias, 22/10): o risco atravessa o "R$ 200,00" e o "Grátis hoje" entra; pra leitor de tela, "De R$ 200,00"
    const p = a.preco;
    const preco = p ? `<p class="preco-ab"><s class="preco-ab__de"><span class="so-leitor">${esc(p.leitor)}</span>${esc(p.de)}</s>`
      + `<span class="preco-ab__por">${esc(p.por)}</span></p>` : '';
    return `<div class="corpo abre"><h1 class="titulo">${tit}</h1>${preco}<ul class="selos-ab">${selos}</ul></div>`
      + `<div class="rodape"><button type="button" class="btn btn--primario" data-acao="comecar">${esc(a.botao)}${ic('seta')}</button></div>`;
  }

  const marcada = (p, r, i) => (p.multi ? r.sel instanceof Set && r.sel.has(i) : r.sel === i);

  function valida(p, r) {
    if (!p.multi) return typeof r.sel === 'number';
    if (!(r.sel instanceof Set) || !r.sel.size) return false;
    const iCampo = p.opcoes.findIndex((o) => o.campo);
    if (iCampo >= 0 && r.sel.has(iCampo)) return (r.campo || '').trim().length >= p.opcoes[iCampo].campo.min;
    return true;
  }

  function opcao(p, o, i, sel, campo) {
    const cls = `opcao${sel ? ' sel' : ''}${o.exclusivo ? ' opcao--nenhum' : ''}`;
    const btn = `<button type="button" class="${cls}" role="${p.multi ? 'checkbox' : 'radio'}" aria-checked="${sel}" data-i="${i}">`
      + `<span class="marca">${p.multi ? CHECK : ''}</span>${esc(o.tx)}</button>`;
    if (!o.campo) return btn;
    return `<div class="opcao-grupo${sel ? ' aberto' : ''}">${btn}<div class="opcao__campo">`
      + `<input type="text" data-campo="${i}" maxlength="${o.campo.max}" placeholder="${esc(o.campo.placeholder)}" aria-label="${esc(o.campo.placeholder)}" `
      + `autocomplete="off" autocapitalize="sentences" enterkeyhint="done" value="${esc(campo || '')}"></div></div>`;
  }

  // Escolha única: tocou, segue sozinho (sem "Continuar", pedido do Elias em 22/10). Múltipla: continua com o botão.
  function pergunta(p, r) {
    const ajuda = p.multi ? `<p class="ajuda">${ic('check')}${esc(M.ajuda_multi)}</p>` : '';
    const apoio = p.apoio ? `<p class="apoio">${esc(p.apoio)}</p>` : '';
    const ops = p.opcoes.map((o, i) => opcao(p, o, i, marcada(p, r, i), r.campo)).join('');
    return `<div class="corpo${p.multi ? '' : ' corpo--solto'}"><h1 class="pergunta" id="q${p.n}">${esc(p.titulo)}</h1>${ajuda}${apoio}`
      + `<div class="opcoes${p.multi ? ' opcoes--multi' : ''}" role="${p.multi ? 'group' : 'radiogroup'}" aria-labelledby="q${p.n}">${ops}</div></div>`
      + (p.multi ? rodape(M.continuar, 'continuar', valida(p, r)) : '');
  }

  function mascaraData(v) {
    const d = String(v || '').replace(/\D/g, '').slice(0, 8);
    if (d.length > 4) return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
    if (d.length > 2) return `${d.slice(0, 2)}/${d.slice(2)}`;
    return d;
  }
  function dataOk(v) {
    const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(v || '');
    if (!m) return false;
    const dd = +m[1], mm = +m[2], aa = +m[3];
    const dt = new Date(aa, mm - 1, dd);
    if (dt.getFullYear() !== aa || dt.getMonth() !== mm - 1 || dt.getDate() !== dd) return false;
    const idade = P.idadeDe(v);
    return idade >= D.idade[0] && idade <= D.idade[1];
  }
  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || '').trim());
  // Telefone: só na versão Meta (Elias, 23/10: "coloque um campo a mais de telefone, só nessa versão"). Aparece quando os dados
  // trazem final.telefone (perguntas-dados-meta.js). Máscara (11) 99999-9999 ou (11) 9999-9999; vale com DDD, 10 ou 11 dígitos,
  // como na v1. Quem cola com +55 ou com o 0 da operadora não erra.
  const TEL = D.final.telefone || null;
  const digitosTel = (v) => {
    let d = String(v || '').replace(/\D/g, '');
    if (d.length > 11 && d.startsWith('55')) d = d.slice(2);
    return d.replace(/^0+/, '').slice(0, 11);
  };
  function mascaraTel(v) {
    const d = digitosTel(v);
    if (d.length > 10) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
    if (d.length > 6) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    if (d.length > 2) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    return d.length ? `(${d}` : '';
  }
  const telOk = (v) => /^[1-9]{2}\d{8,9}$/.test(digitosTel(v));
  // Caixa de autorização (LGPD) fora: o Elias pediu "tira aquele consentimento do final também" (22/10). No lugar, a
  // autorização pelo botão (consentimento v3, seção 1b do md da Duda; o Igor aprovou o modelo no mesmo dia). O código da caixa
  // fica; pra voltar, é só COM_CONSENTIMENTO = true.
  const COM_CONSENTIMENTO = false;
  // E-mail: só quando a tela final traz o rótulo dele. Enquanto o envio por e-mail não existir em produção, nenhuma das duas
  // versões pede (seção 1c do consentimento, 23/10): a do 0800 fica com Nome e Data de nascimento; a Meta, com o WhatsApp também.
  const COM_EMAIL = D.final.campos.length > 2;
  const podeVer = (f) => !!(String(f.nome || '').trim() && String(f.nasc || '').length === 10
    && (!COM_EMAIL || String(f.email || '').includes('@'))
    && (!TEL || digitosTel(f.tel).length >= 10) && (f.consent || !COM_CONSENTIMENTO));

  // A linha fica colada acima do botão, no mesmo tamanho e cor do texto normal, com o link visível, e o toque no botão é o ato
  // (regras do Igor). O nome do botão vai em negrito na linha, pra ligar uma coisa à outra. Nesta tela o botão não fica fixo
  // embaixo: vem no fim do conteúdo, logo depois da linha. Fixo, com as ~6 linhas junto, o rodapé tomaria uns 200px e, com o
  // teclado aberto em tela baixa, quase não sobraria espaço pros campos.
  function linhaAutoriza() {
    const A = D.autoriza, fa = A.formas[A.forma], trecho = esc(A.trecho);
    const tx = esc(fa.linha).replace(trecho, `<a class="link-dados" href="#privacidade" data-acao="privacidade">${trecho}</a>`)
      .replace(esc(fa.botao), `<strong>${esc(fa.botao)}</strong>`);
    return `<p class="autoriza" id="autoriza" data-versao="${esc(A.versao)}" data-forma="${esc(A.forma)}">${tx}</p>`;
  }

  function final(f) {
    const F = D.final, e = f.erros || {};
    const campo = (id, rotulo, attrs, valor, erroTx, erro) => `<label class="campo"><span class="campo__rotulo">${esc(rotulo)}</span>`
      + `<span class="campo__caixa${erro ? ' campo__caixa--erro' : ''}" id="cx-${id}"><input id="${id}" ${attrs} value="${esc(valor || '')}"`
      + `${erroTx ? ` aria-describedby="erro-${id}"` : ''} aria-invalid="${!!erro}"></span>`
      + (erroTx ? `<span class="campo__erro" id="erro-${id}" role="alert"${erro ? '' : ' hidden'}>${esc(erroTx)}</span>` : '') + '</label>';
    const [rNome, rNasc, rEmail] = F.campos;
    const [eNome, eNasc, eEmail] = F.erros;
    const campos = campo('nome', rNome, `autocomplete="given-name" placeholder="${esc(M.ph_nome)}" maxlength="60" enterkeyhint="next"`, f.nome, eNome, e.nome)
      + campo('nasc', rNasc, `inputmode="numeric" autocomplete="bday" placeholder="${esc(D.mascara)}" maxlength="10" enterkeyhint="${TEL || COM_EMAIL ? 'next' : 'done'}"`, f.nasc, eNasc, e.nasc)
      + (TEL ? campo('tel', TEL.rotulo, `type="tel" inputmode="tel" autocomplete="tel-national" placeholder="${esc(TEL.placeholder)}" maxlength="16" enterkeyhint="${COM_EMAIL ? 'next' : 'done'}"`, f.tel, TEL.erro, e.tel) : '')
      + (COM_EMAIL ? campo('email', rEmail, 'type="email" inputmode="email" autocomplete="email" autocapitalize="off" spellcheck="false" maxlength="80" enterkeyhint="done"', f.email, eEmail, e.email) : '');
    const c = D.consent, trecho = esc(c.trecho);
    const texto = esc(c.caixa).replace(trecho, `<a class="link-dados" href="#privacidade" data-acao="privacidade">${trecho}</a>`);
    const consent = `<div class="consent-wrap" id="consent-wrap"><label class="consent${f.consent ? ' sel' : ''}${e.consent ? ' consent--erro' : ''}" id="consent-card">`
      + `<input type="checkbox" id="consent" name="consentimento" autocomplete="off" data-versao="${esc(c.versao)}" aria-describedby="erro-consent"${f.consent ? ' checked' : ''}>`
      + `<span class="consent__caixa" aria-hidden="true">${CHECK}</span><span class="consent__texto">${texto}</span></label>`
      + `<span class="campo__erro" id="erro-consent" role="alert"${e.consent ? '' : ' hidden'}>${esc(c.erro)}</span></div>`;
    const topo = `<h1 class="pergunta">${esc(F.titulo)}</h1><form class="campos" novalidate>${campos}</form>`
      + `<p class="nota">${ic('cadeado')}<span>${esc(F.nota)}</span></p>`;
    if (COM_CONSENTIMENTO) return `<div class="corpo">${topo}${consent}</div>` + rodape(F.botao, 'ver', podeVer(f));
    return `<div class="corpo corpo--fluxo">${topo}${linhaAutoriza()}`
      + rodape(F.botao, 'ver', podeVer(f), ' rodape--fluxo', ' aria-describedby="autoriza"') + '</div>';
  }

  function carregando(feitos) {
    const itens = D.pilares.map((p, i) => `<li class="${i < feitos ? 'ok' : i === feitos ? 'agora' : ''}"><span class="st">${i < feitos ? CHECK : ''}</span>${esc(p.nome)}</li>`).join('');
    return `<div class="corpo carrega"><h1 class="carregando__titulo">${esc(M.carregando)}</h1><ul class="checklist">${itens}</ul></div>`;
  }

  // respostas guardadas por índice -> textos marcados, como a pontuação espera
  function respostasTexto(resp) {
    const out = {};
    D.perguntas.forEach((p) => {
      const r = resp[p.n];
      if (!r || r.sel === undefined) return;
      const idx = p.multi ? [...r.sel].sort((a, b) => a - b) : [r.sel];
      out[p.n] = idx.map((i) => p.opcoes[i].tx);
    });
    return out;
  }
  function calculo(resp, nasc) {
    const iOutro = D.perguntas[8].opcoes.findIndex((o) => o.campo);
    const r9 = resp[9] || {};
    return P.calcula(respostasTexto(resp), iOutro >= 0 ? r9.campo : '', P.idadeDe(nasc) || 0);
  }

  const ORDEM_NIVEL = ['baixo', 'atencao', 'alto'];
  const piorNivel = (niv) => D.pilares.map((p) => niv[p.k]).reduce((a, n) => (ORDEM_NIVEL.indexOf(n) > ORDEM_NIVEL.indexOf(a) ? n : a), 'baixo');

  // Resultado V2: corpo no topo (com a região masculina e as linhas convergindo pra ela), linha de destaque e os cards.
  function resultado(calc, nome) {
    const R = D.resultado, N = R.novos, niv = calc.niveis;
    const H = R.novosHtml;   // textos do md com as palavras-chave marcadas (build_perguntas.py)
    const cab = R.cabeca.replace('§NOME§', esc(nome)).replace('§DATA§', esc(hojeTx()));
    const acesos = D.pilares.map((p) => p.k).filter((k) => niv[k] !== 'baixo');
    const orgs = R.pilha.filter((k) => niv[k] !== 'baixo').map((k) => R.orgHero[k][niv[k]]).join('');
    const pior = piorNivel(niv);
    const masc = R.orgHero.masculino[pior];
    const conv = acesos.length ? R.conv.svgAbre + acesos.map((k) => R.conv.linha[k][niv[k]]).join('') + R.conv.svgFecha
      + acesos.map((k) => R.conv.gotas[k][niv[k]]).join('') + R.conv.alvo[pior] : '';
    const pinos = D.pilares.map((p) => R.pinos[p.k][niv[p.k]]).join('');
    const hero = R.heroAbre + orgs + masc + conv + R.heroMeio + pinos + R.heroFecha;
    // linha de destaque (v10 da Duda): pilar do topo em ALTO = "Principal suspeita"; só em ATENÇÃO = "Ponto de atenção"; tudo BAIXO = "nenhum pilar grita"
    // Emocional nunca sozinho (Elias, 22/10: "o motivo nunca pode ser só emocional, sempre tem que ter outra coisa junto pra ele
    // não achar que é só coisa da cabeça"): se o primeiro é o Emocional, o pilar do corpo mais forte entra junto, na frente
    // ("Circulação + Emocional"). Se nenhum pilar do corpo subiu, a linha leva a frase de que quase sempre tem causa física junto.
    let susp;
    if (calc.principal) {
      const nv = niv[calc.principal];
      const [antes, depois] = (nv === 'alto' ? N.principal : N.atencao).split('[pilar]');
      let nomes = `<b>${esc(R.nomes[calc.principal])}</b>`, junto = '';
      if (calc.principal === 'emocional') {
        if (niv[calc.fisico] !== 'baixo') nomes = `<b>${esc(R.nomes[calc.fisico])}</b><i class="suspeita__mais" aria-hidden="true">+</i><b>${esc(R.nomes.emocional)}</b>`;
        else junto = `<span class="suspeita__junto">${esc(M.corpo_junto)}</span>`;
      }
      susp = `<p class="suspeita suspeita--${nv}"><span>${esc(antes.trim())}</span> ${nomes}${esc(depois || '')}${junto}</p>`;
    } else {
      susp = `<p class="suspeita suspeita--nenhum">${ic('info')}<span>${esc(N.nenhum)}</span></p>`;
    }
    const cards = D.pilares.map((p) => {
      const h = R.cards[p.k][niv[p.k]];
      return p.k === 'hormonio' && calc.hormonioExtra ? h.replace('</p></article>', `</p><p class="pilar__texto pilar__extra">${H.hormonio_extra}</p></article>`) : h;
    }).join('');
    const notas = [calc.notas.ejaculacao && H.ejaculacao].filter(Boolean);
    const investigar = notas.length ? `<article class="bloco bl"><div class="bloco__cab"><span class="bloco__ic">${ic('estetoscopio')}</span>`
      + `<h2 class="bloco__titulo">${esc(N.investigar)}</h2></div>${notas.map((t) => `<p class="bloco__texto">${t}</p>`).join('')}</article>` : '';
    const remedios = calc.remedios.length ? R.remedios.replace('§CHIPS§', calc.remedios.map((t) => R.chip.replace('§CHIP§', esc(t))).join('')) : '';
    const tentou = calc.tentou ? R.tentou[calc.tentou] : '';
    if (MODO_ALERTA) return resultadoAlerta({ calc, cab, hero, cards, investigar, remedios, tentou });
    return `<div class="corpo corpo--fim res" data-rola>${logo()}${cab}${hero}${susp}`
      + `<div class="cards">${cards}${investigar}${remedios}${tentou}${R.cta}</div><p class="legal">${R.legal}</p></div>${R.barra}`
      + `<button type="button" class="seta-desce" aria-label="Rolar para baixo" hidden>${ic('desce')}</button>`;
  }

  // ---------- resultado "modo alerta" (Elias, 30/10, via Duda): 5 blocos de até duas linhas, o mais visual possível ----------
  // 1 alerta (é o NÍVEL do mapa, nunca diagnóstico) · corpo do raio-x · 2 os dois caminhos (ilustrativo, sem número) · 3 a consulta
  // · 4 condição do Mapa de Risco · 5 botão fixo desde o início. Os 4 cards por pilar ficam recolhidos em "Ver o detalhe".
  // Tudo BAIXO: sem alerta e sem gráfico. Emocional nunca sozinho: o pilar do corpo entra na frente ("Circulação + Emocional").
  const DESTAQUE_ALERTA = { alto: 'Quanto mais tempo sem tratar', atencao: 'Tratar no começo' };   // destaque em prazo, nunca em promessa
  function resultadoAlerta(x) {
    const A = D.alerta, R = D.resultado, calc = x.calc, niv = calc.niveis;
    const forte = (t, trecho) => { const e = esc(t), p = esc(trecho); return e.includes(p) ? e.replace(p, `<strong>${p}</strong>`) : e; };
    let alerta, grafico = '';
    if (calc.principal) {
      const nv = niv[calc.principal] === 'alto' ? 'alto' : 'atencao', t = A[nv];
      // Emocional e Sono e estresse nunca sozinhos (Elias, 30/10: "nunca pode ser só sono e estresse, senão a pessoa pensa que pode
      // resolver sozinha em casa"): o pilar do corpo que precisa de médico (Circulação ou Hormônio, o mais forte) entra na frente.
      // Se os dois estão em BAIXO, vai a linha de que quase sempre tem causa física junto (texto da Duda já aprovado).
      let pilar = esc(R.nomes[calc.principal]), junto = '';
      if (calc.principal === 'emocional' || calc.principal === 'sono') {
        const pts = calc.pontos || {}, L = P.LIMITES;
        const corpo = (pts.C || 0) / L.C[1] >= (pts.H || 0) / L.H[1] ? 'circulacao' : 'hormonio';
        if (niv[corpo] !== 'baixo') pilar = `${esc(R.nomes[corpo])} + ${pilar}`;
        else junto = `<p class="alerta__junto">${esc(M.corpo_junto)}</p>`;
      }
      // o pilar numa linha só, grande; o que vem antes e depois dele no briefing fica em linhas próprias (Elias, 30/10: "muito desalinhado")
      const [antes, depois] = t.titulo.split('[PILAR]');
      const linhaTx = (s) => (s && s.trim() ? `<span class="alerta__tx">${esc(s.trim()).replace('nível ALTO', '<em>nível ALTO</em>')}</span>` : '');
      alerta = `<section class="alerta alerta--${nv}"><span class="alerta__selo">${ic(nv === 'alto' ? 'alerta' : 'info')}${esc(t.selo)}</span>`
        + `<h2 class="alerta__titulo">${linhaTx(antes)}<b class="alerta__pilar">${pilar}</b>${linhaTx(depois)}</h2>`
        + `<p class="alerta__linha">${forte(t.linha, DESTAQUE_ALERTA[nv])}</p>${junto}</section>`;
      grafico = graficoCaminhos(A.caminhos);
    } else {
      alerta = `<p class="suspeita suspeita--nenhum">${ic('info')}<span>${esc(A.nenhum)}</span></p>`;
    }
    // "Por que você precisa agendar a sua consulta?" (Elias, 30/10): motivos com ícone realista, entrando um a um
    const motivos = A.consulta.chips.map((c, i) => `<li class="motivo" data-i="${i}"><span class="motivo__ic">`
      + `<img src="/mapa/perguntas-v2/motivos/motivo-${c.img}.webp" alt="" decoding="async"></span><span class="motivo__tx">${esc(c.tx)}</span></li>`).join('');
    const consulta = `<section class="bloco bl consulta"><h2 class="consulta__titulo">${esc(A.consulta.titulo)}</h2><ul class="motivos">${motivos}</ul></section>`;
    const C = A.condicao;
    const prazo = PRAZO_REAL ? `<p class="condicao__linha">${esc(C.linha)}</p><div class="condicao__timer"><span class="condicao__timer-tx">${esc(C.timer)}</span>`
      + `<b data-timer>${String(C.minutos || 5).padStart(2, '0')}:00</b><span class="condicao__barra"><i data-timer-barra></i></span></div>` : '';
    const condicao = `<section class="bloco bl condicao"><svg class="condicao__borda" aria-hidden="true"><rect x="0" y="0" width="100%" height="100%" rx="22"/></svg>`
      + `<span class="condicao__selo">${esc(C.selo)}</span><h2 class="condicao__titulo">${esc(C.titulo)}</h2>`
      + `<p class="condicao__de">de <s class="risca">R$&nbsp;${esc(C.valorCheio)}</s> por</p>`
      + `<p class="condicao__por"><span class="condicao__so">${esc(C.so)}</span><span class="condicao__valor"><small>R$</small>${esc(C.por)}</span></p>${(C.extras || []).length ? `<ul class="condicao__extras">${C.extras.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}${prazo}</section>`;
    const G = A.garantia;
    const garantia = G ? `<section class="bloco bl garantia"><svg class="garantia__selo" viewBox="0 0 220 220" aria-hidden="true"><defs><path id="gTop" d="M 44 110 A 66 66 0 0 1 176 110"/><path id="gBot" d="M 38 110 A 72 72 0 0 0 182 110"/></defs><polygon points="110.0,4.0 124.7,17.2 142.8,9.2 152.7,26.2 172.3,24.2 176.5,43.5 195.8,47.7 193.8,67.3 210.8,77.2 202.8,95.3 216.0,110.0 202.8,124.7 210.8,142.8 193.8,152.7 195.8,172.3 176.5,176.5 172.3,195.8 152.7,193.8 142.8,210.8 124.7,202.8 110.0,216.0 95.3,202.8 77.2,210.8 67.3,193.8 47.7,195.8 43.5,176.5 24.2,172.3 26.2,152.7 9.2,142.8 17.2,124.7 4.0,110.0 17.2,95.3 9.2,77.2 26.2,67.3 24.2,47.7 43.5,43.5 47.7,24.2 67.3,26.2 77.2,9.2 95.3,17.2" fill="#facc15"/><circle cx="110" cy="110" r="88" fill="#111827"/><circle cx="110" cy="110" r="82" fill="none" stroke="#facc15" stroke-width="2.5" stroke-dasharray="3 5"/><text font-family="inherit" font-weight="800" font-size="16" letter-spacing="3" fill="#facc15"><textPath href="#gTop" startOffset="50%" text-anchor="middle">GARANTIA</textPath></text><text x="110" y="126" text-anchor="middle" font-family="inherit" font-weight="900" font-size="44" fill="#facc15">100%</text><text font-family="inherit" font-weight="800" font-size="12" letter-spacing="1.5" fill="#fff"><textPath href="#gBot" startOffset="50%" text-anchor="middle" side="left">SEU DINHEIRO DE VOLTA</textPath></text></svg><h2 class="garantia__titulo">${esc(G.titulo)}</h2>`
      + `<p class="garantia__tx">${esc(G.texto)}</p><p class="garantia__tx">${esc(G.texto2)}</p><p class="garantia__risco">${esc(G.risco)}</p></section>` : '';
    const detalhe = `<div class="cards cards--alerta">${x.cards}${x.investigar}${x.remedios}${x.tentou}</div>`;
    const url = (R.barra.match(/href="([^"]+)"/) || [])[1] || '#';
    const barra = `<div class="barra-cta barra-cta--alerta" hidden><a class="btn btn--primario" href="${url}">${esc(A.botao)}${ic('seta')}</a>`
      + `<p class="barra-cta__micro">${esc(A.micro)}</p></div>`;
    const cta = R.cta.replace(/<a class="btn btn--wa"[\s\S]*?<\/a>/, '')   // sem o WhatsApp (Elias, 30/10)
      .replace(/(<use href="#i-agendar"\/><\/svg>)[^<]*<\/a>/, `$1${esc(A.botao)}</a>`);   // mesmo texto do botão fixo
    return `<div class="corpo corpo--fim res res--alerta" data-rola>${logo()}${x.cab}${alerta}${x.hero}${grafico}${consulta}${condicao}${garantia}${detalhe}`
      + `${cta}<p class="legal">${R.legal}</p></div>${barra}`
      + `<button type="button" class="seta-desce" aria-label="Rolar para baixo" hidden>${ic('desce')}</button>`;
  }

  // gráfico "Os dois caminhos a partir de hoje" (Elias, 30/10: "tecnológico e saúde ao mesmo tempo, ter animação"): um monitor preto como
  // o corpo do raio-x, com grade fina, traço de ECG, a linha verde neon se desenhando e um ponto correndo nela, a vermelha tracejada
  // andando pra baixo e uma varredura. Ilustração: sem escala, sem número.
  let camSeq = 0;
  function graficoCaminhos(c) {
    const id = `cam${++camSeq}`;
    const legenda = (t) => { const i = t.indexOf(':'); return i > 0 ? `<b>${esc(t.slice(0, i + 1))}</b>${esc(t.slice(i + 1))}` : esc(t); };
    // viewBox 340x236: as linhas ficam na faixa do meio (y 46-176); a legenda verde mora na faixa de cima, junto da bolinha verde,
    // e a vermelha na de baixo, junto da bolinha vermelha (Elias, 02/11: "o verde lá em cima e o vermelho ali embaixo")
    const grade = [...Array(6)].map((_, i) => `<line class="cam-grade" x1="24" y1="${46 + i * 26}" x2="322" y2="${46 + i * 26}"/>`).join('')
      + [...Array(7)].map((_, i) => `<line class="cam-grade" x1="${24 + i * 49.67}" y1="46" x2="${24 + i * 49.67}" y2="176"/>`).join('');
    const BOM = 'M24 116 C 110 98, 200 68, 318 52', RUIM = 'M24 116 C 110 134, 200 154, 318 166';
    const svg = `<svg class="caminhos__svg" viewBox="0 0 340 236" aria-hidden="true">`
      + `<defs><linearGradient id="${id}-v" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3EE089" stop-opacity="0"/><stop offset="1" stop-color="#3EE089" stop-opacity=".28"/></linearGradient>`
      + `<linearGradient id="${id}-r" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FF5A4E" stop-opacity="0"/><stop offset="1" stop-color="#FF5A4E" stop-opacity=".24"/></linearGradient></defs>`
      + grade
      + `<path class="cam-area" d="${BOM} L318 176 L24 176 Z" fill="url(#${id}-v)"/><path class="cam-area" d="${RUIM} L318 176 L24 176 Z" fill="url(#${id}-r)"/>`
      + `<line class="cam-eixo" x1="24" y1="176" x2="322" y2="176"/><line class="cam-eixo" x1="24" y1="44" x2="24" y2="176"/>`
      + `<text class="cam-rot" x="24" y="228">${esc(c.hoje).toUpperCase()}</text><text class="cam-rot" x="322" y="228" text-anchor="end">${esc(c.meses).toUpperCase()}</text>`
      + `<path class="cam-brilho cam-brilho--bom" d="${BOM}"/><path id="${id}-bom" class="cam-linha cam-linha--bom" pathLength="1" d="${BOM}"/>`
      + `<path class="cam-linha cam-linha--ruim" d="${RUIM}"/>`
      + `<circle class="cam-ponta cam-ponta--bom" cx="318" cy="52" r="6"/><circle class="cam-ponta cam-ponta--ruim" cx="318" cy="166" r="6"/>`
      + `<circle class="cam-corre" r="5"><animateMotion dur="2.6s" begin="1.9s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines=".4 0 .6 1"><mpath href="#${id}-bom"/></animateMotion></circle>`
      + `<circle class="cam-voce" cx="24" cy="116" r="6"/><line class="cam-voce-fio" x1="24" y1="108" x2="24" y2="88"/>`
      + `<rect class="cam-voce-pill" x="12" y="64" width="78" height="23" rx="11.5"/>`
      + `<text class="cam-voce-tx" x="51" y="79.5" text-anchor="middle">${esc(c.voce)}</text></svg>`;
    const ecg = '<svg class="monitor__ecg" viewBox="0 0 120 24" aria-hidden="true"><path pathLength="1" d="M0 12 H28 L34 12 L39 3 L45 21 L50 12 H62 L68 12 L73 6 L78 17 L83 12 H120"/></svg>';
    return `<section class="bloco bl caminhos monitor"><div class="monitor__cab"><h2 class="monitor__titulo">${esc(c.titulo)}</h2>${ecg}</div>`
      + `<div class="monitor__tela"><span class="monitor__scan"></span>${svg}`
      + `<p class="cam-leg cam-leg--bom">${ic('sobe')}<span>${legenda(c.bom)}</span></p><p class="cam-leg cam-leg--ruim">${ic('cai')}<span>${legenda(c.ruim)}</span></p></div>`
      + '</section>';
  }

  // ---------- estado de cada tela: tipo, foco da câmera e o número na barra ----------
  const tipoDe = (a) => (typeof a === 'number' ? 'pergunta' : a);
  const focoDe = (a) => (typeof a === 'number' ? `q${a}` : a);
  const telaHTML = (a, conteudo, extra = {}) => `<div class="brilho"></div>${cabecalho(typeof a === 'number' ? a : 0)}`
    + `${janela(focoDe(a), extra.niveis, extra.acesos)}<div class="miolo">${conteudo}</div>${extra.painel ? painel() : ''}`;

  // ---------- protótipo ----------
  function prototipo(palco) {
    let tema = temaDaUrl();
    let fonte = fonteDaUrl();
    const ordem = ['abertura', ...D.perguntas.map((p) => p.n), 'final', 'carregando', 'resultado'];
    const novoEstado = () => ({ i: 0, resp: {}, f: { nome: '', nasc: '', tel: '', email: '', consent: false, erros: {} } });
    let est = novoEstado();
    let timers = [], painelAberto = false, voltarPara = null, travado = false, primeira = true, deJanela = null;
    const semMovimento = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const temasPainel = TEMAS_PAINEL.includes(tema) ? TEMAS_PAINEL : [...TEMAS_PAINEL, tema];
    palco.innerHTML = '<div class="fone"><section class="tela" id="tela"></section></div>'
      + '<aside class="lado"><h1>Mapa de Risco</h1><p>O fluxo inteiro, clicável: abertura, 15 perguntas, dados, carregando e o resultado V2, montado com a pontuação da Duda.</p>'
      + '<h2 class="lado__rot">Cores</h2>'
      + `<div class="lado__temas" role="group" aria-label="Cores">${temasPainel.map((t) => `<button type="button" data-tema="${t}">${NOME_TEMA[t]}</button>`).join('')}</div>`
      + '<h2 class="lado__rot">Fonte</h2>'
      + `<div class="lado__temas lado__fontes" role="group" aria-label="Fonte">${Object.entries(FONTES).map(([k, f]) => `<button type="button" data-fonte="${k}" class="${f.classe}">${f.nome}${k === 'lexend' ? ' (escolhida)' : ''}</button>`).join('')}</div>`
      + '<button type="button" class="lado__reset" data-reset>Recomeçar</button>'
      + '<p class="lado__obs">Trocar a cor ou a fonte não perde as respostas.</p></aside>';
    const tela = palco.querySelector('#tela');
    // esqueleto fixo: a abertura começa com a câmera em "inicio" (órgãos apagados) e passa pra "abertura" no quadro seguinte,
    // pra os órgãos acenderem com transição (no primeiro desenho o CSS não anima)
    tela.innerHTML = telaHTML('inicio', '', { painel: true });
    const janelaEl = tela.querySelector('.janela');
    // decodifica as camadas do corpo logo no começo: as que estão apagadas (opacidade 0) só seriam decodificadas
    // na hora de aparecer, e isso dava um tranco na primeira viagem da câmera
    tela.querySelectorAll('.cam__img').forEach((img) => { if (img.decode) img.decode().catch(() => {}); });
    const miolo = tela.querySelector('.miolo');
    const atual = () => ordem[est.i];
    const corpo = () => miolo.querySelector('.corpo');
    const botao = () => miolo.querySelector('.rodape .btn--primario');

    function aplicaTema() {
      tela.className = `tela ${classeTela(tema, fonte)}${atual() === 'resultado' ? ' estilo-lente' : ''}${MODO_ALERTA ? ' modo-alerta' : ''}`;
      palco.querySelectorAll('[data-tema]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.tema === tema)));
      palco.querySelectorAll('[data-fonte]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.fonte === fonte)));
      poeNaUrl({ tema, fonte });
    }

    // barra e contador: o elemento é o mesmo de uma tela pra outra, então a largura anda sozinha pela transição do CSS
    function atualizaCab(a) {
      const n = typeof a === 'number' ? a : 0;
      const p = typeof a === 'number' ? a : (a === 'abertura' ? 0 : TOTAL);
      const barra = tela.querySelector('.progresso.barra');
      tela.querySelector('.barra__fill').dataset.p = String(p);
      barra.setAttribute('aria-valuenow', String(p));
      if (n) barra.setAttribute('aria-valuetext', `${n} ${M.de} ${TOTAL}`); else barra.removeAttribute('aria-valuetext');
    }

    function desenha(dir) {
      timers.forEach(clearTimeout);
      timers = [];
      painelAberto = false;
      travado = false;
      tela.querySelector('#painel').hidden = true;
      tela.querySelector('#painel-fundo').hidden = true;
      const a = atual();
      if (a === 'final') est.f.consent = false;   // a caixa nunca chega marcada (regra do Igor), nem voltando pra tela
      aplicaTema();
      tela.dataset.tela = tipoDe(a);
      if (a !== 'carregando') tela.querySelector('.cam__niveis').innerHTML = '';
      const primeiraVez = primeira && a === 'abertura';
      if (primeiraVez) {
        primeira = false;
        requestAnimationFrame(() => requestAnimationFrame(() => { janelaEl.dataset.foco = 'abertura'; }));
      } else janelaEl.dataset.foco = focoDe(a);
      atualizaCab(a);
      if (a === 'abertura') miolo.innerHTML = abertura();
      else if (a === 'final') miolo.innerHTML = final(est.f);
      else if (a === 'carregando') miolo.innerHTML = carregando(0);
      else if (a === 'resultado') miolo.innerHTML = resultado(calculo(est.resp, est.f.nasc), String(est.f.nome).trim().split(/\s+/)[0]);
      else miolo.innerHTML = pergunta(D.perguntas[a - 1], est.resp[a] || {});
      if (dir) {
        void tela.offsetWidth;
        if (dir !== 'chega') tela.classList.add(dir === 'volta' ? 'entra-volta' : 'entra');
        // a tela troca sozinha: o foco vai pro título novo, pro leitor de tela anunciar a pergunta e o teclado seguir dali
        const titulo = miolo.querySelector('.pergunta, .titulo, .carregando__titulo, .mapa-titulo');
        if (titulo) { titulo.setAttribute('tabindex', '-1'); titulo.focus({ preventScroll: true }); }
      }
      // na primeira pintura a janela já nasce no tamanho calculado, sem crescer na frente da pessoa
      if (primeiraVez) tela.classList.add('sem-anima');
      ajustaJanela(a);
      if (primeiraVez) { void janelaEl.offsetHeight; tela.classList.remove('sem-anima'); }
      if (typeof a === 'number') ligaMaisOpcoes();
      if (a === 'carregando') rodaCarregando();
      if (a === 'resultado') {
        if (dir === 'chega' && deJanela) chegaCorpo();
        else if (window.raioRepetir) window.raioRepetir(corpo());
        ligaBarraAgendar();
        ligaSeta();
        ligaCronometro();
      }
      // produção: avisa o /mapa/app/integra.js que a tela trocou (o rastro anônimo: só o índice da tela, nada da resposta)
      document.dispatchEvent(new CustomEvent('mapa:tela', { detail: { i: est.i } }));
    }

    // Corpo com todo o espaço que sobra (Elias, 22/10: "joga as perguntas pra baixo e deixa o corpo lá em cima, animado com o zoom").
    // Em cada pergunta, mede a altura do conteúdo (título, apoio e opções, mais o botão nas múltiplas) e a janela do corpo
    // fica com o resto da tela: as perguntas ficam embaixo e o corpo, o maior possível. Mínimo de 130px (100 em tela baixa)
    // e máximo de 340; arredonda de 10 em 10 pra não ficar mexendo à toa. A altura e o zoom da câmera andam juntos (transição).
    // O --jh vai pelo CSSOM (style.setProperty), que a CSP deixa. Nas outras telas vale o --jh do CSS.
    // Abertura (Elias, 22/10: o corpo "maiorzinho"): a janela fica com a sobra da tela. O título e os selos têm margem automática
    // (ficam no meio da sobra); aqui a sobra vai pra janela e fica só um respiro em volta deles.
    const RESPIRO_ABERTURA = 14;
    function alturaAbertura() {
      const c = corpo(), filhos = c ? [...c.children] : [];
      if (!filhos.length) return 0;
      const px = (el, p) => parseFloat(getComputedStyle(el)[p]) || 0;
      // altura do conteúdo sem as duas margens automáticas (em cima do título e embaixo dos selos)
      const conteudo = filhos.reduce((t, el, i) => t + el.offsetHeight + (i ? px(el, 'marginTop') : 0)
        + (i < filhos.length - 1 ? px(el, 'marginBottom') : 0), 0);
      const livre = tela.clientHeight - tela.querySelector('.cab').offsetHeight - px(janelaEl, 'marginTop')
        - px(c, 'paddingTop') - px(c, 'paddingBottom') - conteudo - 2 * RESPIRO_ABERTURA;
      return Math.floor(Math.max(120, Math.min(360, livre)) / 10) * 10;
    }

    function ajustaJanela(a) {
      if (a === 'abertura') {
        const jh = alturaAbertura();
        if (jh) tela.style.setProperty('--jh', String(jh));
        return;
      }
      if (typeof a !== 'number') { tela.style.removeProperty('--jh'); return; }
      const c = corpo(), ult = c && c.lastElementChild;
      if (!ult) return;
      const conteudo = ult.offsetTop + ult.offsetHeight;
      const rod = miolo.querySelector('.rodape');
      const folga = rod ? rod.offsetHeight + 8 : 28;
      const cab = tela.querySelector('.cab').offsetHeight;
      const margem = parseFloat(getComputedStyle(janelaEl).marginTop) || 0;
      const livre = tela.clientHeight - cab - margem - conteudo - folga;
      const min = tela.clientHeight < 620 ? 100 : 130;
      const jh = Math.round(Math.max(min, Math.min(340, livre)) / 10) * 10;
      tela.style.setProperty('--jh', String(jh));
    }

    // "Tem mais opções abaixo": só aparece quando a última opção está escondida atrás do botão
    function ligaMaisOpcoes() {
      const rod = miolo.querySelector('.rodape');
      if (!rod) return;   // escolha única não tem botão embaixo: nada fica escondido
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'mais-opcoes';
      b.innerHTML = ic('desce') + esc(M.mais_opcoes);
      b.hidden = true;
      rod.prepend(b);
      corpo().addEventListener('scroll', atualizaMais, { passive: true });
      atualizaMais();
      timers.push(setTimeout(atualizaMais, 950));   // de novo depois que a janela do corpo termina de mudar de tamanho
    }
    function atualizaMais() {
      const rod = miolo.querySelector('.rodape'), b = rod && rod.querySelector('.mais-opcoes');
      const ops = miolo.querySelectorAll('.opcao');
      if (!b || !ops.length) return;
      const fim = ops[ops.length - 1].closest('.opcao-grupo') || ops[ops.length - 1];
      b.hidden = !(fim.getBoundingClientRect().bottom > rod.getBoundingClientRect().top + 1);
    }

    // Seta "tem mais embaixo" no resultado (Elias, 22/10: "tem que aparecer que tem coisa pra baixo, uma seta pulsando talvez").
    // Aparece depois que o corpo assenta e some assim que ele começa a rolar (antes da barra "Agendar" entrar).
    // Tocar rola até a linha de destaque.
    function ligaSeta() {
      const c = corpo(), seta = miolo.querySelector('.seta-desce');
      if (!c || !seta) return;
      const some = () => {
        if (c.scrollTop <= 40) return;
        c.removeEventListener('scroll', some);
        seta.classList.remove('mostra');
        timers.push(setTimeout(() => { seta.hidden = true; }, 350));
      };
      c.addEventListener('scroll', some, { passive: true });
      timers.push(setTimeout(() => {
        if (c.scrollTop > 40 || c.scrollHeight <= c.clientHeight + 40) return;
        seta.hidden = false;
        requestAnimationFrame(() => requestAnimationFrame(() => seta.classList.add('mostra')));
      }, semMovimento ? 0 : 1900));
      seta.addEventListener('click', () => {
        const alvo = miolo.querySelector('.caminhos') || miolo.querySelector('.suspeita') || miolo.querySelector('.cards');
        c.scrollTo({ top: alvo ? alvo.offsetTop - 16 : c.clientHeight * 0.8, behavior: semMovimento ? 'auto' : 'smooth' });
      });
    }

    // barra "Agendar" do resultado (Elias, 23/10: "o botão de agendar consulta faz pra só aparecer quando rolar até o último
    // card desse que tem ponteiro ou depois de 10 segundos"): escondida até a pessoa chegar no último card de pilar (o topo
    // dele passa da metade da tela) ou até 10 s de resultado, o que vier primeiro. Liberada, ela fica, menos quando o bloco
    // de agendar do fim está na tela (pra não ter dois botões iguais).
    const LIBERA_AGENDAR_MS = 10000;
    function ligaBarraAgendar() {
      const c = corpo(), barra = miolo.querySelector('.barra-cta'), cta = miolo.querySelector('.cta');
      const pilares = miolo.querySelectorAll('.cards .pilar'), ultimo = pilares[pilares.length - 1];
      if (!barra || !cta) return;
      let liberada = MODO_ALERTA;   // modo alerta: o botão aparece desde o início e acompanha a rolagem
      const atualiza = () => {
        const cr = c.getBoundingClientRect();
        if (!liberada && ultimo && ultimo.getBoundingClientRect().top <= cr.top + cr.height / 2) liberada = true;
        barra.hidden = !(liberada && cta.getBoundingClientRect().top > cr.bottom - 10);
      };
      c.addEventListener('scroll', atualiza, { passive: true });
      timers.push(setTimeout(() => { liberada = true; atualiza(); }, LIBERA_AGENDAR_MS));
      atualiza();
    }

    // cronômetro da condição (modo alerta): 5 minutos a partir do primeiro resultado nesta aba (Elias, 30/10: "o tempo tem que ser
    // 5 minutos até zerar"). A barra esvazia junto e fica vermelha no último minuto. No app, só quando o Vini fizer o prazo valer de
    // verdade (link e preço expiram de fato); no protótipo é pro Elias ver a ideia.
    function ligaCronometro() {
      const el = miolo.querySelector('[data-timer]'), barra = miolo.querySelector('[data-timer-barra]'), caixa = miolo.querySelector('.condicao');
      if (!el) return;
      const total = (D.alerta.condicao.minutos || 5) * 60 * 1000;
      let fim = 0;
      try { fim = +sessionStorage.getItem('mapa_prazo') || 0; } catch (e) { /* sem storage */ }
      if (!fim || fim > Date.now() + total) {
        fim = Date.now() + total;
        try { sessionStorage.setItem('mapa_prazo', String(fim)); } catch (e) { /* sem storage */ }
      }
      const dois = (n) => String(n).padStart(2, '0');
      const tique = () => {
        const ms = Math.max(0, fim - Date.now()), s = Math.round(ms / 1000);
        el.textContent = `${dois(Math.floor(s / 60))}:${dois(s % 60)}`;
        if (barra) barra.style.transform = `scaleX(${(ms / total).toFixed(4)})`;
        if (caixa) { caixa.classList.toggle('condicao--fim', s <= 60); caixa.classList.toggle('condicao--zero', s === 0); }
      };
      tique();
      timers.push(setInterval(tique, 1000));
    }

    function marca(i) {
      if (travado) return;   // já tocou numa escolha única e a tela está saindo: ignora o segundo toque
      const n = atual(), p = D.perguntas[n - 1];
      const r = est.resp[n] || (est.resp[n] = {});
      if (!p.multi) r.sel = i;
      else {
        const s = r.sel instanceof Set ? r.sel : (r.sel = new Set());
        if (s.has(i)) s.delete(i);
        else {
          if (p.opcoes[i].exclusivo) s.clear();
          else p.opcoes.forEach((o, j) => { if (o.exclusivo) s.delete(j); });
          s.add(i);
        }
      }
      miolo.querySelectorAll('.opcao').forEach((b) => {
        const j = +b.dataset.i, on = marcada(p, r, j);
        b.classList.toggle('sel', on);
        b.setAttribute('aria-checked', String(on));
        const g = b.closest('.opcao-grupo');
        if (g) g.classList.toggle('aberto', on);
      });
      if (!p.multi) {
        // escolha única: segue sozinho depois de um instante, pra pessoa ver a opção marcada (voltando, tocar de novo também segue)
        travado = true;
        timers.push(setTimeout(avanca, 320));
        return;
      }
      ajustaJanela(n);   // o campo do "Outro" abre ou fecha: o conteúdo muda de altura
      if (p.opcoes[i].campo && marcada(p, r, i)) miolo.querySelector(`[data-campo="${i}"]`).focus();
      botao().setAttribute('aria-disabled', String(!valida(p, r)));
      atualizaMais();
    }

    function avanca() { est.i += 1; desenha('vai'); }
    function volta() { if (est.i > 0) { est.i -= 1; desenha('volta'); } }

    function continuar(b) {
      const n = atual(), p = D.perguntas[n - 1], r = est.resp[n] || {};
      if (b.getAttribute('aria-disabled') === 'true') {
        // apagado mas responde: se falta o nome do remédio, leva até o campo
        const iCampo = p.opcoes.findIndex((o) => o.campo);
        if (iCampo >= 0 && marcada(p, r, iCampo)) miolo.querySelector(`[data-campo="${iCampo}"]`).focus();
        return;
      }
      avanca();
    }

    function erroCampo(id, on) {
      const cx = miolo.querySelector(`#cx-${id}`), er = miolo.querySelector(`#erro-${id}`), inp = miolo.querySelector(`#${id}`);
      if (!cx) return;
      cx.classList.toggle('campo__caixa--erro', on);
      if (er) er.hidden = !on;
      inp.setAttribute('aria-invalid', String(on));
    }
    function erroConsent(on) {
      if (!COM_CONSENTIMENTO) return;
      miolo.querySelector('#consent-card').classList.toggle('consent--erro', on);
      miolo.querySelector('#erro-consent').hidden = !on;
      miolo.querySelector('#consent').setAttribute('aria-invalid', String(on));
    }
    function ver() {
      const f = est.f;
      const semNome = String(f.nome).trim().length < 2, dataRuim = !dataOk(f.nasc), emailRuim = COM_EMAIL && !emailOk(f.email);
      const telRuim = !!TEL && !telOk(f.tel);
      const semConsent = COM_CONSENTIMENTO && !f.consent;
      erroCampo('nome', semNome);
      erroCampo('nasc', dataRuim);
      erroCampo('tel', telRuim);
      erroCampo('email', emailRuim);
      erroConsent(semConsent);
      if (semNome) return miolo.querySelector('#nome').focus();
      if (dataRuim) return miolo.querySelector('#nasc').focus();
      if (telRuim) return miolo.querySelector('#tel').focus();
      if (emailRuim) return miolo.querySelector('#email').focus();
      if (semConsent) {
        miolo.querySelector('#consent-wrap').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        miolo.querySelector('#consent').focus({ preventScroll: true });
        return;
      }
      // o toque no botão é o ato de autorização: é daqui que a produção manda o lead. O app/integra.js do Vini ouve no
      // DOCUMENT (document.addEventListener('mapa:ver')): disparado no window, ele não ouviria e o lead se perderia calado.
      // Nada sai do aparelho antes disso (regra do Igor).
      document.dispatchEvent(new CustomEvent('mapa:ver', { detail: { resp: est.resp, f: est.f } }));
      avanca();
    }

    // Carregando: a câmera volta pro corpo inteiro e cada pilar acende na cor do nível quando o item dele fica pronto.
    function rodaCarregando() {
      const niv = calculo(est.resp, est.f.nasc).niveis;
      const camadas = tela.querySelector('.cam__niveis');
      camadas.innerHTML = camadasNivel(niv, 0);
      const passo = (k) => {
        miolo.querySelectorAll('.checklist li').forEach((li, i) => {
          li.className = i < k ? 'ok' : i === k ? 'agora' : '';
          li.querySelector('.st').innerHTML = i < k ? CHECK : '';
        });
        camadas.querySelectorAll('.nivel').forEach((img, i) => img.classList.toggle('aceso', i < k));
      };
      for (let k = 1; k <= 4; k += 1) timers.push(setTimeout(() => passo(k), 700 * k));
      timers.push(setTimeout(entrega, 700 * 4 + 350));
    }

    // Do carregando pro resultado sem corte (Elias, 22/10: "cortou muito seco, tem que ter uma transição melhor").
    // 1) o texto do carregando e o logo saem, os pilares em BAIXO apagam e a janela cresce até o tamanho do corpo do resultado,
    //    já com o enquadramento dele; 2) troca pro resultado e o mesmo corpo desce pro lugar dele (chegaCorpo), enquanto o título
    //    e o resto aparecem em volta; 3) quando ele assenta, começa a revelação (alfinetes, linhas e a região masculina).
    function entrega() {
      if (semMovimento) { avanca(); return; }
      tela.classList.add('entregando');
      tela.style.setProperty('--jh', String(Math.round(janelaEl.getBoundingClientRect().width * 4 / 3)));
      janelaEl.dataset.foco = 'entrega';
      timers.push(setTimeout(() => {
        deJanela = janelaEl.getBoundingClientRect();
        est.i += 1;
        desenha('chega');
      }, 1100));
    }

    // FLIP: o corpo do resultado nasce exatamente onde a janela estava e desliza até o lugar dele
    function chegaCorpo() {
      const hero = miolo.querySelector('.corpo-hero'), res = corpo();
      const para = hero.getBoundingClientRect(), de = deJanela;
      deJanela = null;
      hero.classList.add('chega');
      res.classList.add('chegando');
      hero.style.transformOrigin = '0 0';
      hero.style.transform = `translate(${de.left - para.left}px,${de.top - para.top}px) scale(${de.width / para.width},${de.height / para.height})`;
      void hero.offsetWidth;
      hero.style.transition = 'transform .9s cubic-bezier(.65,.05,.35,1)';
      hero.style.transform = '';
      timers.push(setTimeout(() => {
        hero.style.removeProperty('transition');
        hero.style.removeProperty('transform-origin');
        if (window.raioRepetir) window.raioRepetir(res);
      }, 900));
    }

    // painel "Como usamos suas respostas": por cima, o formulário continua preenchido
    function abrePainel() {
      if (painelAberto) return;
      painelAberto = true;
      voltarPara = document.activeElement;
      tela.querySelector('#painel-fundo').hidden = false;
      tela.querySelector('#painel').hidden = false;
      tela.querySelector('.painel__corpo').scrollTop = 0;
      const t = tela.querySelector('#priv-titulo');
      if (t) t.focus({ preventScroll: true });
    }
    function fechaPainel() {
      if (!painelAberto) return;
      painelAberto = false;
      tela.querySelector('#painel-fundo').hidden = true;
      tela.querySelector('#painel').hidden = true;
      const alvo = voltarPara && voltarPara.isConnected ? voltarPara : miolo.querySelector('.link-dados');
      if (alvo) alvo.focus({ preventScroll: true });
    }

    tela.addEventListener('click', (ev) => {
      const t = ev.target;
      if (t.closest('[data-fechar]') || t.id === 'painel-fundo') return fechaPainel();
      const op = t.closest('.opcao');
      if (op) return marca(+op.dataset.i);
      if (t.closest('.mais-opcoes')) { const c = corpo(); c.scrollTo({ top: c.scrollHeight, behavior: 'smooth' }); return; }
      if (t.closest('a[href="#agendar"], .cta a[href="#"]')) { ev.preventDefault(); return; }   // link do agendamento ainda não definido
      const a = t.closest('[data-acao]');
      if (!a) return;
      const acao = a.dataset.acao;
      if (acao === 'privacidade') { ev.preventDefault(); abrePainel(); }   // link dentro do label: não marca a caixa
      else if (acao === 'voltar') volta();
      else if (acao === 'comecar') avanca();
      else if (acao === 'continuar') continuar(a);
      else if (acao === 'ver') ver();
    });
    tela.addEventListener('input', (ev) => {
      const t = ev.target;
      if (t.dataset.campo !== undefined) {
        const n = atual(), r = est.resp[n];
        r.campo = t.value;
        botao().setAttribute('aria-disabled', String(!valida(D.perguntas[n - 1], r)));
        return;
      }
      if (t.id === 'nasc') {
        t.value = ev.inputType && ev.inputType.startsWith('delete') ? t.value.replace(/\/$/, '') : mascaraData(t.value);
        erroCampo('nasc', false);
      }
      if (t.id === 'tel') { t.value = mascaraTel(t.value); erroCampo('tel', false); }
      if (t.id === 'email') erroCampo('email', false);
      if (t.id === 'nome') erroCampo('nome', false);
      if (t.id in est.f) est.f[t.id] = t.value;
      if (botao()) botao().setAttribute('aria-disabled', String(!podeVer(est.f)));
    });
    tela.addEventListener('change', (ev) => {
      if (ev.target.id !== 'consent') return;
      est.f.consent = ev.target.checked;
      miolo.querySelector('#consent-card').classList.toggle('sel', est.f.consent);
      if (est.f.consent) erroConsent(false);
      botao().setAttribute('aria-disabled', String(!podeVer(est.f)));
    });
    tela.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && painelAberto) fechaPainel();
      if (ev.key === 'Enter' && ev.target.dataset && ev.target.dataset.campo !== undefined) { ev.preventDefault(); continuar(botao()); }
    });
    window.addEventListener('resize', () => { ajustaJanela(atual()); atualizaMais(); });
    // a altura da abertura depende da altura do título: refaz quando a fonte termina de carregar
    if (document.fonts) document.fonts.ready.then(() => { if (atual() === 'abertura') ajustaJanela('abertura'); });

    palco.querySelector('.lado').addEventListener('click', (ev) => {
      const b = ev.target.closest('button');
      if (!b) return;
      if (b.dataset.tema) { tema = b.dataset.tema; desenha(); }
      if (b.dataset.fonte) { fonte = b.dataset.fonte; desenha(); }
      if (b.hasAttribute('data-reset')) { est = novoEstado(); desenha('volta'); }
    });

    desenha();
  }

  // ---------- quadro (todas as telas paradas, num exemplo coerente: perto do perfil vascular da Duda) ----------
  const EXEMPLO = {
    1: ['Dificuldade pra ter ou manter a ereção'], 2: ['De 2 a 5 anos'], 3: ['Raramente'], 4: [], 5: ['Funciona só às vezes'],
    6: ['Mais de 5 minutos'], 7: ['Pressão alta', 'Colesterol alto'], 8: ['Algumas vezes por mês'],
    9: ['Pra pressão, colesterol ou diabetes', 'Outro'], 10: ['Fumo'], 11: ['Nenhuma'],
    12: ['Queda de energia e cansaço constante', 'Aumento de gordura na barriga'], 13: ['Ronco alto'], 14: ['7 a 8 horas'], 15: ['Nenhum desses'],
  };
  const EX_FINAL = { nome: 'José', nasc: '15/08/1968', tel: '(11) 98765-4321', email: 'jose.silva@email.com', consent: true };
  function respostaExemplo(p) {
    const idx = (EXEMPLO[p.n] || []).map((t) => p.opcoes.findIndex((o) => o.tx === t)).filter((i) => i >= 0);
    return p.multi ? { sel: new Set(idx), campo: 'Omeprazol' } : (idx.length ? { sel: idx[0] } : {});
  }

  // quadro no modo alerta: ?caso=atencao (maior pilar só em ATENÇÃO), ?caso=baixo (tudo BAIXO) ou ?caso=emocional (Emocional
  // em ALTO com Circulação em ATENÇÃO) pra ver as variantes do alerta sem mudar as respostas de exemplo
  function casoQuadro(calc) {
    const caso = new URLSearchParams(location.search).get('caso');
    if (caso === 'atencao') return { ...calc, principal: 'hormonio', fisico: 'hormonio', niveis: { circulacao: 'baixo', hormonio: 'atencao', sono: 'baixo', emocional: 'baixo' } };
    if (caso === 'baixo') return { ...calc, principal: null, niveis: { circulacao: 'baixo', hormonio: 'baixo', sono: 'baixo', emocional: 'baixo' } };
    if (caso === 'emocional') return { ...calc, principal: 'emocional', fisico: 'circulacao', niveis: { circulacao: 'atencao', hormonio: 'baixo', sono: 'baixo', emocional: 'alto' } };
    if (caso === 'sono') return { ...calc, principal: 'sono', fisico: 'sono', pontos: { ...calc.pontos, C: 4, H: 0 }, niveis: { circulacao: 'atencao', hormonio: 'baixo', sono: 'alto', emocional: 'baixo' } };
    if (caso === 'sono-so') return { ...calc, principal: 'sono', fisico: 'sono', niveis: { circulacao: 'baixo', hormonio: 'baixo', sono: 'alto', emocional: 'baixo' } };
    return calc;
  }

  function quadro(raiz) {
    let tema = temaDaUrl();
    let fonte = fonteDaUrl();
    const resp = {};
    D.perguntas.forEach((p) => { resp[p.n] = respostaExemplo(p); });
    const calc = casoQuadro(calculo(resp, EX_FINAL.nasc));
    const telas = [['Abertura', 'Antes da pergunta 1', 'abertura', abertura(), '']]
      .concat(D.perguntas.map((p) => [`Pergunta ${p.n}`, (p.multi ? 'Múltipla escolha, com Continuar' : 'Escolha única: tocou, já segue') + (p.n === 4 ? ' (ainda sem resposta)' : ''),
        p.n, pergunta(p, resp[p.n]), '']))
      .concat([['Tela final', 'Não conta na barra (16ª tela)', 'final', final(EX_FINAL), ''],
        ['Carregando', '3 segundos, depois o resultado', 'carregando', carregando(2), ''],
        [MODO_ALERTA ? 'Resultado (modo alerta)' : 'Resultado (V2)', 'Montado com a pontuação da Duda a partir das respostas acima', 'resultado',
          resultado(calc, EX_FINAL.nome), `tela--longa estilo-lente${MODO_ALERTA ? ' modo-alerta' : ''}`]]);
    const botoesTema = Object.keys(TEMAS).map((t) => `<button type="button" data-tema="${t}" aria-pressed="${t === tema}">${NOME_TEMA[t]}</button>`).join('');
    const botoesFonte = Object.entries(FONTES).map(([k, f]) => `<button type="button" data-fonte="${k}" class="${f.classe}" aria-pressed="${k === fonte}">${f.nome}</button>`).join('');
    raiz.innerHTML = '<header class="cab-quadro"><h1>Mapa de Risco completo: 15 perguntas + resultado V2</h1>'
      + '<p>Texto do Word do Elias, igual ao arquivo da Duda. Múltipla escolha só na 7, 9, 12, 13 e 15. Em cada pergunta a câmera vai até a parte do corpo dela. '
      + 'Os botões trocam as cores e a fonte de todas as telas.</p>'
      + `<div class="trocar"><span>Cores:</span>${botoesTema}</div><div class="trocar"><span>Fonte:</span>${botoesFonte}</div></header>`
      + `<div class="quadro-telas">${telas.map(([t, s, a, h, extra], k) => `<figure><figcaption>${esc(t)}<span>${esc(s)}</span></figcaption>`
        + `<section class="tela ${classeTela(tema, fonte)} ${extra}" data-tela="${tipoDe(a)}" data-extra="${extra}" id="tela-${k}">`
        + `${telaHTML(a, h, a === 'carregando' ? { niveis: calc.niveis, acesos: 2 } : {})}</section></figure>`).join('')}</div>`;
    raiz.addEventListener('click', (ev) => {
      const b = ev.target.closest('.trocar button');
      if (!b) return;
      if (b.dataset.tema) tema = b.dataset.tema;
      if (b.dataset.fonte) fonte = b.dataset.fonte;
      raiz.querySelectorAll('.trocar [data-tema]').forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.tema === tema)));
      raiz.querySelectorAll('.trocar [data-fonte]').forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.fonte === fonte)));
      raiz.querySelectorAll('.quadro-telas .tela').forEach((t) => { t.className = `tela ${classeTela(tema, fonte)} ${t.dataset.extra}`; });
      if (window.raioRepetir) window.raioRepetir(raiz);
      poeNaUrl({ tema, fonte });
    });
    if (window.raioRepetir) window.raioRepetir(raiz);
  }

  // ---------- comparação das fontes (fontes.html): a mesma amostra em cada fonte, em A e em C ----------
  function comparaFontes(raiz) {
    let tema = TEMAS_PAINEL.includes(temaDaUrl()) ? temaDaUrl() : 'azul';
    const p2 = D.perguntas[1];
    const amostraPergunta = () => {
      const r = { sel: 2 };
      const ops = p2.opcoes.slice(1, 3).map((o, j) => opcao(p2, o, j + 1, j + 1 === r.sel, '')).join('');
      return `<div class="corpo corpo--amostra">${topo(p2.n)}<h1 class="pergunta">${esc(p2.titulo)}</h1>`
        + `<div class="opcoes" role="radiogroup">${ops}</div></div>`;
    };
    const card = D.resultado.cards.circulacao.alto;
    const cartoes = Object.entries(FONTES).map(([k, f]) => `<article class="fonte-cartao">`
      + `<header class="fonte-cartao__cab"><h2 class="${f.classe}">${esc(f.nome)}${k === 'mulish' ? ' <small>(a de hoje)</small>' : ''}</h2><p>${esc(f.sobre)}</p>`
      + `<a class="fonte-cartao__abrir" href="prototipo.html?tema=${tema}&fonte=${k}" data-fonte-link="${k}">Testar o fluxo com esta fonte</a></header>`
      + `<section class="tela tela--longa ${classeTela(tema, k)} estilo-lente" data-fonte="${k}">${amostraPergunta()}`
      + `<div class="corpo corpo--amostra"><div class="cards">${card}</div></div></section></article>`).join('');
    raiz.innerHTML = '<header class="cab-quadro"><h1>5 opções de fonte (e a de hoje)</h1>'
      + '<p>A mesma pergunta e o mesmo card em cada fonte, no tamanho real do celular. Toque em "Testar o fluxo" pra passar pelas 15 perguntas com ela.</p>'
      + `<div class="trocar"><span>Cores:</span>${TEMAS_PAINEL.map((t) => `<button type="button" data-tema="${t}" aria-pressed="${t === tema}">${NOME_TEMA[t]}</button>`).join('')}</div></header>`
      + `<div class="fontes-grade">${cartoes}</div>`;
    raiz.addEventListener('click', (ev) => {
      const b = ev.target.closest('.trocar button');
      if (!b) return;
      tema = b.dataset.tema;
      raiz.querySelectorAll('.trocar [data-tema]').forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.tema === tema)));
      raiz.querySelectorAll('.fontes-grade .tela').forEach((t) => { t.className = `tela tela--longa ${classeTela(tema, t.dataset.fonte)} estilo-lente`; });
      raiz.querySelectorAll('[data-fonte-link]').forEach((a) => { a.href = `prototipo.html?tema=${tema}&fonte=${a.dataset.fonteLink}`; });
      if (window.raioRepetir) window.raioRepetir(raiz);
      poeNaUrl({ tema });
    });
    if (window.raioRepetir) window.raioRepetir(raiz);
  }

  const palco = document.getElementById('palco');
  if (palco) prototipo(palco);
  const q = document.getElementById('quadro');
  if (q) quadro(q);
  const cf = document.getElementById('fontes');
  if (cf) comparaFontes(cf);
})();
