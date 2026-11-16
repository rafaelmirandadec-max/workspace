"""Prévia da capa e do resultado do Mapa de Risco com o Novembro Azul.
Roda o código do próprio quiz (andromens.com.br/mapa, lido em 16/11/2026) com as trocas aplicadas.
Gera também os dois arquivos JS alterados, prontos para o programador.
Uso: python3 -I mapa_previa.py <pasta src> <pasta saída>"""
import base64, re, sys
from pathlib import Path

src, out = Path(sys.argv[1]), Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
rd = lambda n: (src / n).read_text(encoding='utf8')
b64 = lambda p, m: f'data:{m};base64,' + base64.b64encode(Path(p).read_bytes()).decode()


def troca(s, a, b, n=1):
    c = s.count(a)
    if c != n:
        raise SystemExit(f'esperava {n}, achei {c}: {a[:70]!r}')
    return s.replace(a, b)


# ---------------------------------------------------------------- 1. dados (perguntas-dados-meta.js)
dados = rd('perguntas-v2_perguntas-dados-meta.js')
dados = troca(dados, '"selo": "CONSULTA COM A CONDIÇÃO DO MAPA DE RISCO"', '"selo": "CONDIÇÃO NOVEMBRO AZUL"')
dados = troca(dados, '"valorCheio": "1.000",\n   "por": "197",', '"valorCheio": "1.000",\n   "por": "97",\n   "extras": [\n    "Não gostou da consulta? Devolvemos 100%",\n    "R$ 97 abatidos no tratamento, se precisar"\n   ],')
dados = troca(dados, '"botao": "AGENDAR CONSULTA AGORA COM CONDIÇÃO ESPECIAL"', '"botao": "AGENDAR MINHA CONSULTA POR R$ 97"')

# ---------------------------------------------------------------- 2. código (perguntas.js)
cod = rd('perguntas-v2_perguntas.js')
# cronômetro de 5 minutos desligado por padrão (antes: ligado, a não ser com ?prazo=0)
cod = troca(cod, "const PRAZO_REAL = new URLSearchParams(location.search).get('prazo') !== '0';",
            "const PRAZO_REAL = new URLSearchParams(location.search).get('prazo') === '1';   // Novembro Azul: sem cronômetro de 5 min")
# garantia e cashback dentro do bloco da condição
cod = troca(cod, "<span class=\"condicao__valor\"><small>R$</small>${esc(C.por)}</span></p>${prazo}</section>`;",
            "<span class=\"condicao__valor\"><small>R$</small>${esc(C.por)}</span></p>"
            "${(C.extras || []).length ? `<ul class=\"condicao__extras\">${C.extras.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}${prazo}</section>`;")
# logo da campanha no lugar da logo AndroClinic (capa, resultado)
cod = troca(cod, 'src="/mapa/assets/androclinic-logo.png" alt="AndroClinic"', 'src="/mapa/assets/logo-novembro-azul.png" alt="Novembro Azul AndroClinic"')
cod = troca(cod, 'src="/mapa/resultado-animado/assets/androclinic-logo-branca.png" alt="AndroClinic"', 'src="/mapa/assets/logo-novembro-azul-branca.png" alt="Novembro Azul AndroClinic"')

CSS_NOVO = """
/* Novembro Azul: garantia e cashback na condição */
.condicao__extras{list-style:none;margin:14px auto 0;padding:0;display:flex;flex-direction:column;gap:8px;text-align:left;max-width:290px}
.condicao__extras li{position:relative;padding-left:28px;font-size:15px;line-height:1.4;font-weight:600}
.condicao__extras li::before{content:"";position:absolute;left:0;top:1px;width:20px;height:20px;border-radius:50%;background:#16a34a;
  -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='12'/%3E%3C/svg%3E") center/contain no-repeat}
.condicao__extras li::after{content:"";position:absolute;left:6px;top:6px;width:8px;height:5px;border-left:2.5px solid #fff;border-bottom:2.5px solid #fff;transform:rotate(-45deg)}
.tela .logo.logo--p{height:44px;width:auto}
"""
(out / 'perguntas-dados-meta.js').write_text(dados, encoding='utf8')
(out / 'perguntas.js').write_text(cod, encoding='utf8')
(out / 'novembro-azul.css').write_text(CSS_NOVO, encoding='utf8')

# ---------------------------------------------------------------- 3. prévia em arquivo único
logo_cor = b64(src / 'logo-nov-cor.png', 'image/png')
logo_branca = b64('/home/user/workspace/projetos/androclinic/06-copy/pagina-vsl-novembro-azul/imagens/logo-novembro-azul-branca.webp', 'image/webp')
fonte = b64(src / 'Lexend-wght.ttf', 'font/ttf')
cod_prev = cod.replace('src="/mapa/assets/logo-novembro-azul.png"', f'src="{logo_cor}"').replace('src="/mapa/assets/logo-novembro-azul-branca.png"', f'src="{logo_branca}"')

css = ''
for n in ['css_mapa.css', 'css_resultado-animado_raio.css', 'css_resultado-animado_tema-solido.css', 'css_perguntas-v2_perguntas.css',
          'css_perguntas-v2_camera.css', 'css_perguntas-v2_fontes.css', 'css_app_pagina.css']:
    c = rd(n)
    c = c.replace('url("../fonts/Lexend-wght.ttf")', f'url("{fonte}")')
    c = re.sub(r'url\("(?:\.\./)?fonts/(?!Lexend)[^"]+"\)', 'url("data:,")', c)   # outras fontes da comparação: não usadas aqui
    css += f'\n/* {n} */\n' + c
css += CSS_NOVO + """
/* prévia: só a capa e o resultado */
.quadro-telas figure{display:none}
.quadro-telas figure.mostra{display:block}
.cab-quadro .trocar{display:none}
html,body{overflow:auto!important;height:auto!important;position:static!important}
.cab-quadro{padding:16px}
"""
idx = rd('index.html')
i = idx.index('<svg width="0"'); j = idx.index('</svg>', i) + 6
defs = idx[i:j]
js = '\n'.join(rd(n) for n in ['perguntas-v2_pontuacao.js', 'resultado-animado_raio.js'])

doc = f"""<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Mapa de Risco Novembro Azul — prévia</title>
<base href="https://andromens.com.br/">
<script>try{{const r=history.replaceState.bind(history);history.replaceState=function(){{try{{r.apply(history,arguments)}}catch(e){{}}}}}}catch(e){{}}</script>
<style>{css}</style>
</head>
<body class="proto meta">
{defs}
<div id="quadro"></div>
<script>{dados}</script>
<script>{js}</script>
<script>{cod_prev}</script>
<script>
(function(){{
  const q=document.getElementById('quadro');
  const cab=q.querySelector('.cab-quadro');
  if(cab) cab.innerHTML='<h1>Mapa de Risco — Novembro Azul (prévia)</h1><p>Capa e resultado com as mudanças propostas, montados pelo próprio código do quiz. '
    +'O resultado usa respostas fictícias de exemplo (José). Este arquivo não envia nenhum dado.</p>';
  const figs=[...q.querySelectorAll('.quadro-telas figure')];
  const marca=(f,t,s)=>{{ if(!f) return; f.classList.add('mostra'); const c=f.querySelector('figcaption'); if(c) c.innerHTML=t+'<span>'+s+'</span>'; }};
  marca(figs[0],'Capa','Antes da pergunta 1');
  marca(figs[figs.length-1],'Resultado','Exemplo com respostas fictícias');
  // na página real os blocos aparecem conforme a tela rola; aqui a rolagem é a da página inteira
  q.querySelectorAll('[data-rola]').forEach(e=>e.removeAttribute('data-rola'));
  if (window.raioRepetir) window.raioRepetir(q);
  // garantia: depois de 2,5 s tudo fica visível, mesmo que a animação de entrada não dispare
  setTimeout(()=>q.querySelectorAll('.rc,.bl,.corpo-hero').forEach(e=>e.classList.add('visto')),2500);
}})();
</script>
</body>
</html>"""
(out / 'mapa-novembro-azul-previa.html').write_text(doc, encoding='utf8')
print('ok', len(doc))
