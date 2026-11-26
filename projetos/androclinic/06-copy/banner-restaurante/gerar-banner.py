"""Banner "Restaurante reservado": 1080x1350 (feed) e 1080x1920 (stories). Gera HTML; o render é feito com Playwright.
Foto: "Elegant dinner table", Annie Spratt (Unsplash, 15/09/2016, CC0 — publicada antes da troca de licença do Unsplash em 05/06/2017).
Uso: python3 -I banner_jantar.py <foto.jpg> <pasta saída>"""
import base64, sys
from pathlib import Path

foto, out = Path(sys.argv[1]), Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
img = 'data:image/jpeg;base64,' + base64.b64encode(foto.read_bytes()).decode()

SETA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'

FORMATOS = {
    # nome: (largura, altura, css específico)
    'feed-1080x1350': (1080, 1350, """
      body{padding:72px 70px 34px} .foto{top:190px;background-position:50% 22%} .pre{font-size:58px} h1{font-size:62px}
      .pergunta{font-size:38px} .chamada{font-size:38px} .cta{height:104px;font-size:36px}"""),
    'stories-1080x1920': (1080, 1920, """
      body{padding:250px 70px 290px} .foto{top:340px;height:1520px!important;background-position:50% 0%} .pre{font-size:70px} h1{font-size:76px}
      .pergunta{font-size:46px} .chamada{font-size:46px} .cta{height:118px;font-size:40px}
      .sombra-base{height:58%;background:linear-gradient(0deg,#000 0%,rgba(0,0,0,.94) 58%,rgba(0,0,0,.55) 80%,rgba(0,0,0,0) 100%)}"""),
}

for nome, (w, h, extra) in FORMATOS.items():
    html = f"""<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&family=Playfair+Display:ital,wght@1,600;1,700;1,800&display=swap" rel="stylesheet">
<style>
*{{margin:0;padding:0;box-sizing:border-box}}
body{{width:{w}px;height:{h}px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;position:relative;display:flex;flex-direction:column;background:#000}}
.foto{{position:absolute;left:0;right:0;top:0;height:{h}px;background:url({img}) center/cover;filter:brightness(1.05) saturate(1.05);-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 240px);mask-image:linear-gradient(180deg,transparent 0,#000 240px)}}
.sombra-topo{{position:absolute;left:0;right:0;top:0;height:46%;background:linear-gradient(180deg,#000 0%,rgba(0,0,0,.92) 45%,rgba(0,0,0,0) 100%)}}
.sombra-base{{position:absolute;left:0;right:0;bottom:0;height:52%;background:linear-gradient(0deg,#000 0%,rgba(0,0,0,.92) 50%,rgba(0,0,0,.45) 78%,rgba(0,0,0,0) 100%)}}
.conteudo{{position:relative;z-index:1;display:flex;flex-direction:column;height:100%}}
.risco{{display:block;width:84px;height:6px;background:#facc15;border-radius:3px;margin-bottom:26px}}
.pre{{font-family:'Playfair Display',serif;font-style:italic;font-weight:700;line-height:1.12;color:#fff;margin-bottom:24px;text-shadow:0 3px 14px rgba(0,0,0,.6)}}
h1{{font-weight:900;line-height:1.04;letter-spacing:-.01em;text-transform:uppercase;text-shadow:0 4px 18px rgba(0,0,0,.5)}}
h1 em{{font-style:normal;color:#facc15}}
.meio{{flex:1}}
.pergunta{{font-weight:600;line-height:1.22;border-left:6px solid #facc15;padding-left:26px;margin-bottom:26px;text-shadow:0 2px 10px rgba(0,0,0,.6)}}
.chamada{{font-weight:500;line-height:1.25;margin-bottom:34px;color:rgba(255,255,255,.95)}}
.chamada b{{font-weight:900;color:#facc15}}
.cta{{border-radius:18px;background:#facc15;color:#111;display:flex;align-items:center;justify-content:center;gap:18px;
  font-weight:900;letter-spacing:.08em;box-shadow:0 12px 30px rgba(0,0,0,.45)}}
.cta svg{{width:40px;height:40px}}
.rodape{{margin-top:22px;text-align:center;font-size:21px;font-weight:600;color:rgba(255,255,255,.66);letter-spacing:.02em}}
{extra}
</style></head><body>
<div class="foto"></div><div class="sombra-topo"></div><div class="sombra-base"></div>
<div class="conteudo">
  <div><span class="risco"></span>
    <p class="pre">Restaurante reservado,<br>perfume escolhido…</p>
    <h1>Mas o medo de falhar na <em>hora H</em> insistiu em ir junto?</h1></div>
  <div class="meio"></div>
  <p class="pergunta">A ansiedade de desempenho tomou conta dos seus pensamentos?</p>
  <p class="chamada">Cuide disso com a <b>AndroClinic</b> em uma consulta médica <b>ONLINE</b> e <b style="white-space:nowrap">100% sigilosa.</b></p>
  <div class="cta">TOQUE EM SAIBA MAIS {SETA}</div>
  <div class="rodape">AndroClinic · Dr. Cristiano Estivalet · CRM-DF 15471</div>
</div>
</body></html>"""
    (out / f'banner-jantar-{nome}.html').write_text(html, encoding='utf8')
print('ok')
