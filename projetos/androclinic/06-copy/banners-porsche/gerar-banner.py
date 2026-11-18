"""Banner Porsche Cup: 1080x1350 (feed) e 1080x1920 (stories). Gera HTML; o render é feito com Playwright.
Uso: python3 -I banner_porsche.py <foto.jpg> <pasta saída>"""
import base64, sys
from pathlib import Path

foto, out = Path(sys.argv[1]), Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
img = 'data:image/jpeg;base64,' + base64.b64encode(foto.read_bytes()).decode()

X = '<svg viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="3" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>'
SETA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'

FORMATOS = {
    # nome: (largura, altura, tamanho da foto, deslocamento vertical da foto, css específico)
    'feed-1080x1350': (1080, 1350, 1500, -170, """
      .topo{top:64px} h1{font-size:66px} .lista{bottom:236px} .lista li{font-size:44px} .cta{bottom:96px}"""),
    'stories-1080x1920': (1080, 1920, 1560, 0, """
      .topo{top:200px} h1{font-size:74px} .lista{bottom:560px} .lista li{font-size:50px} .cta{bottom:380px}
      .sombra-base{height:60%;background:linear-gradient(0deg,#000 0%,#000 36%,rgba(0,0,0,.86) 58%,rgba(0,0,0,0) 100%)} .rodape{bottom:300px}"""),
}

for nome, (w, h, tam, dy, extra) in FORMATOS.items():
    html = f"""<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&display=swap" rel="stylesheet">
<style>
*{{margin:0;padding:0;box-sizing:border-box}}
body{{width:{w}px;height:{h}px;overflow:hidden;background:#000;font-family:Inter,sans-serif;color:#fff;position:relative}}
.foto{{position:absolute;left:50%;top:{dy}px;width:{tam}px;height:{tam}px;transform:translateX(-50%);background:url({img}) center/cover}}
.sombra-topo{{position:absolute;left:0;right:0;top:0;height:46%;background:linear-gradient(180deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.78) 45%,rgba(0,0,0,0) 100%)}}
.sombra-base{{position:absolute;left:0;right:0;bottom:0;height:50%;background:linear-gradient(0deg,rgba(0,0,0,.95) 0%,rgba(0,0,0,.85) 50%,rgba(0,0,0,0) 100%)}}
.topo{{position:absolute;left:64px;right:64px}}
.risco{{display:block;width:84px;height:6px;background:#facc15;border-radius:3px;margin-bottom:26px}}
h1{{font-weight:900;line-height:1.05;letter-spacing:-.01em;text-transform:uppercase;text-shadow:0 4px 18px rgba(0,0,0,.5)}}
h1 em{{font-style:normal;color:#facc15}}
.lista{{position:absolute;left:64px;right:64px;list-style:none;display:flex;flex-direction:column;gap:14px}}
.lista li{{display:flex;align-items:center;gap:18px;font-weight:600;line-height:1.15;text-shadow:0 2px 10px rgba(0,0,0,.6)}}
.lista li b{{font-weight:900;color:#facc15}}
.lista svg{{width:.9em;height:.9em;flex-shrink:0}}
.cta{{position:absolute;left:64px;right:64px;height:112px;border-radius:18px;background:#facc15;color:#111;display:flex;align-items:center;
  justify-content:center;gap:18px;font-size:38px;font-weight:900;letter-spacing:.08em;box-shadow:0 12px 30px rgba(0,0,0,.45)}}
.cta svg{{width:42px;height:42px}}
.rodape{{position:absolute;left:0;right:0;bottom:34px;text-align:center;font-size:21px;font-weight:600;color:rgba(255,255,255,.72);letter-spacing:.02em}}
{extra}
</style></head><body>
<div class="foto"></div><div class="sombra-topo"></div><div class="sombra-base"></div>
<div class="topo"><span class="risco"></span><h1>Homens de <em>alta performance</em> já tratam sua saúde sexual…</h1></div>
<ul class="lista">
  <li>{X}<span><b>SEM</b> precisar sair de casa.</span></li>
  <li>{X}<span><b>SEM</b> sala de espera.</span></li>
  <li>{X}<span><b>SEM</b> exposição.</span></li>
</ul>
<div class="cta">TOQUE EM SAIBA MAIS {SETA}</div>
<div class="rodape">AndroClinic · Dr. Cristiano Estivalet · CRM-DF 15471</div>
</body></html>"""
    (out / f'banner-porsche-{nome}.html').write_text(html, encoding='utf8')
print('ok')
