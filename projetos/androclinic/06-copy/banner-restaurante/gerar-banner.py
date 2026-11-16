"""Banner "Restaurante reservado": 1080x1350 (feed) e 1080x1920 (stories). Gera HTML; o render é feito com Playwright.
Cena de jantar desenhada em CSS/SVG (luzes desfocadas + duas taças brindando), sem foto de banco de imagens.
Uso: python3 -I banner_jantar.py <pasta saída>"""
import random, sys
from pathlib import Path

out = Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)

def bokeh(w, h, n, seed):
    r = random.Random(seed); cores = ['255,190,90', '255,160,70', '250,204,21', '255,220,150', '255,130,60']
    bolas = []
    for _ in range(n):
        d = r.randint(40, 190); x = r.randint(-60, w); y = r.randint(int(h*.18), int(h*.72))
        a = r.uniform(.10, .38); c = r.choice(cores); bl = r.choice([2, 4, 8, 14])
        bolas.append(f'<i style="left:{x}px;top:{y}px;width:{d}px;height:{d}px;filter:blur({bl}px);'
                     f'background:radial-gradient(circle,rgba({c},{a:.2f}) 0%,rgba({c},{a*.75:.2f}) 55%,rgba({c},0) 72%)"></i>')
    return ''.join(bolas)

# Taça de vinho em traço dourado; a da direita é espelhada.
TACA = ('<path d="M-62 0 C-66 70 -48 128 0 140 C48 128 66 70 62 0 Z" fill="rgba(120,10,30,.0)" />'
        '<path d="M-58 62 C-54 108 -36 128 0 136 C36 128 54 108 58 62 Z" fill="rgba(150,20,45,.55)" stroke="none"/>'
        '<path d="M-62 0 C-66 70 -48 128 0 140 C48 128 66 70 62 0" />'
        '<path d="M-62 0 L62 0" opacity=".55"/>'
        '<path d="M0 140 L0 250" /><path d="M-46 258 C-30 248 30 248 46 258" />')
CENA = f'''<svg class="cena" viewBox="-300 -60 600 380" fill="none" stroke="#f5c76b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
  <g transform="translate(-74 0) rotate(-13 0 0)">{TACA}</g>
  <g transform="translate(74 0) rotate(13 0 0)">{TACA}</g>
  <g stroke="#facc15" stroke-width="4" opacity=".95"><path d="M0 -14 L0 -44"/><path d="M-16 -8 L-34 -30"/><path d="M16 -8 L34 -30"/></g>
</svg>'''

FORMATOS = {
    'feed-1080x1350': (1080, 1350, 42, """
      body{padding:78px 70px 40px} .pre{font-size:62px} h1{font-size:64px} .cena{height:380px} .pergunta{font-size:40px} .chamada{font-size:38px;padding:34px 40px}"""),
    'stories-1080x1920': (1080, 1920, 60, """
      body{padding:250px 70px 300px} .pre{font-size:72px} h1{font-size:76px} .cena{height:500px} .pergunta{font-size:48px} .chamada{font-size:44px;padding:42px 44px}
      .rodape{margin-top:26px}"""),
}

for nome, (w, h, n, extra) in FORMATOS.items():
    html = f"""<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&family=Playfair+Display:ital,wght@1,600;1,700;1,800&display=swap" rel="stylesheet">
<style>
*{{margin:0;padding:0;box-sizing:border-box}}
body{{width:{w}px;height:{h}px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;position:relative;display:flex;flex-direction:column;
  background:radial-gradient(ellipse 70% 38% at 50% 50%,#3a1d0c 0%,#1c0e07 55%,#0a0604 100%)}}
.luzes{{position:absolute;inset:0;z-index:0}} .luzes i{{position:absolute;border-radius:50%}}
.veu{{position:absolute;inset:0;z-index:0;background:linear-gradient(180deg,rgba(6,4,3,.92) 0%,rgba(6,4,3,.55) 26%,rgba(6,4,3,.15) 45%,rgba(6,4,3,.35) 62%,rgba(6,4,3,.95) 80%,#060403 100%)}}
.conteudo{{position:relative;z-index:1;display:flex;flex-direction:column;height:100%}}
.risco{{display:block;width:84px;height:6px;background:#facc15;border-radius:3px;margin-bottom:26px}}
.pre{{font-family:'Playfair Display',serif;font-style:italic;font-weight:700;line-height:1.12;color:#fff;margin-bottom:24px;text-shadow:0 3px 14px rgba(0,0,0,.6)}}
h1{{font-weight:900;line-height:1.04;letter-spacing:-.01em;text-transform:uppercase;text-shadow:0 4px 18px rgba(0,0,0,.5)}}
h1 em{{font-style:normal;color:#facc15}}
.meio{{flex:1;display:flex;align-items:center;justify-content:center}}
.cena{{filter:drop-shadow(0 0 14px rgba(250,190,80,.55))}}
.pergunta{{font-weight:600;line-height:1.22;border-left:6px solid #facc15;padding-left:26px;margin-bottom:34px;color:rgba(255,255,255,.95)}}
.chamada{{background:#facc15;color:#111;border-radius:18px;font-weight:600;line-height:1.25;box-shadow:0 12px 30px rgba(0,0,0,.45)}}
.chamada b{{font-weight:900}}
.rodape{{margin-top:22px;text-align:center;font-size:21px;font-weight:600;color:rgba(255,255,255,.66);letter-spacing:.02em}}
{extra}
</style></head><body>
<div class="luzes">{bokeh(w, h, n, 7)}</div><div class="veu"></div>
<div class="conteudo">
  <div><span class="risco"></span>
    <p class="pre">Restaurante reservado,<br>perfume escolhido…</p>
    <h1>Mas o medo de falhar na <em>hora H</em> insistiu em ir junto?</h1></div>
  <div class="meio">{CENA}</div>
  <p class="pergunta">A ansiedade de desempenho tomou conta dos seus pensamentos?</p>
  <div class="chamada">Cuide disso com a <b>AndroClinic</b> em uma consulta médica <b>ONLINE</b> e <b style="white-space:nowrap">100% sigilosa.</b></div>
  <div class="rodape">AndroClinic · Dr. Cristiano Estivalet · CRM-DF 15471</div>
</div>
</body></html>"""
    (out / f'banner-jantar-{nome}.html').write_text(html, encoding='utf8')
print('ok')
