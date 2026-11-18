"""Gera o banner do checkout do DIA DO HOMEM (19/11) (800x450, exportado em 1600x900) em duas versões de CNPJ.
Uso: python3 -I banner_checkout.py <pasta_saida>"""
import base64, math, sys, subprocess, json
from pathlib import Path
out = Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)
W = Path('/home/user/workspace/projetos/androclinic/06-copy')
def uri(p): return 'data:image/webp;base64,' + base64.b64encode(Path(p).read_bytes()).decode()
logo = uri(W/'pagina-vsl-novembro-azul/imagens/logo-novembro-azul-branca.webp')
foto = uri(W/'pagina-vsl-padrao-original/imagens/dr-cristiano-estivalet.webp')
pts=[]
for i in range(40):
    r=106 if i%2==0 else 94
    a=math.pi*2*i/40-math.pi/2
    pts.append(f"{110+r*math.cos(a):.1f},{110+r*math.sin(a):.1f}")
selo=('<svg class="selo" viewBox="0 0 220 220"><defs><path id="t" d="M 44 110 A 66 66 0 0 1 176 110"/><path id="b" d="M 38 110 A 72 72 0 0 0 182 110"/></defs>'
 f'<polygon points="{" ".join(pts)}" fill="#facc15"/><circle cx="110" cy="110" r="88" fill="#111827"/>'
 '<circle cx="110" cy="110" r="82" fill="none" stroke="#facc15" stroke-width="2.5" stroke-dasharray="3 5"/>'
 '<text font-family="Inter" font-weight="800" font-size="16" letter-spacing="3" fill="#facc15"><textPath href="#t" startOffset="50%" text-anchor="middle">GARANTIA</textPath></text>'
 '<text x="110" y="127" text-anchor="middle" font-family="Inter" font-weight="900" font-size="46" fill="#facc15">100%</text>'
 '<text font-family="Inter" font-weight="800" font-size="12.5" letter-spacing="1.5" fill="#fff"><textPath href="#b" startOffset="50%" text-anchor="middle" side="left">SEU DINHEIRO DE VOLTA</textPath></text></svg>')
LOCK='<svg viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
SHIELD='<svg viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>'
def html(cnpj): return f"""<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&display=swap" rel="stylesheet">
<style>
*{{margin:0;padding:0;box-sizing:border-box}}
body{{width:800px;height:450px;overflow:hidden;font-family:Inter,sans-serif;background:#000;color:#fff;position:relative}}
.foto{{position:absolute;right:0;top:0;width:360px;height:394px;background:url({foto}) center 18%/cover no-repeat}}
.foto::after{{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#000 0%,rgba(0,0,0,.55) 22%,rgba(0,0,0,0) 55%)}}
.esq{{position:absolute;left:36px;top:42px;width:470px}}
.logo{{width:170px;display:block;margin-bottom:16px}}
.dia{{display:inline-flex;align-items:center;gap:8px;font-size:15px;font-weight:900;letter-spacing:.08em;color:#000;background:#facc15;border-radius:999px;padding:6px 14px;margin-bottom:12px;white-space:nowrap}}
.dia i{{font-style:normal;font-weight:700;opacity:.75}}
.kick{{font-size:17px;font-weight:800;letter-spacing:.07em;color:#e5e7eb;white-space:nowrap}}
.preco{{margin-top:6px;display:flex;align-items:baseline;gap:12px;white-space:nowrap}}
.de{{font-size:28px;font-weight:700;color:#9ca3af}} .de s{{text-decoration-thickness:3px}}
.por{{font-size:26px;font-weight:700;color:#fff}}
.val{{font-size:76px;font-weight:900;color:#facc15;letter-spacing:-.02em;line-height:1}}
.prazo{{margin-top:12px;display:inline-block;font-size:17px;font-weight:700;color:#000;background:#facc15;border-radius:999px;padding:6px 16px}}
.garantia{{margin-top:16px;display:flex;align-items:center;gap:14px}}
.garantia p{{font-size:17px;font-weight:600;color:#e5e7eb;line-height:1.3}}
.garantia b{{color:#fff}}
.selo{{width:84px;height:84px;flex-shrink:0;filter:drop-shadow(0 4px 10px rgba(0,0,0,.6))}}
.barra{{position:absolute;left:0;right:0;bottom:0;height:56px;background:#111827;border-top:2px solid #facc15;
  display:flex;align-items:center;justify-content:center;gap:16px;font-size:13.5px;font-weight:600;color:#d1d5db}}
.barra span{{display:inline-flex;align-items:center;gap:7px;white-space:nowrap}}
.barra svg{{width:18px;height:18px}}
.barra .sep{{width:4px;height:4px;border-radius:9px;background:#4b5563}}
</style></head><body>
<div class="foto"></div>
<div class="esq">
  <img class="logo" src="{logo}" alt="">
  <div class="dia">19/11 <i>·</i> DIA INTERNACIONAL DO HOMEM</div>
  <div class="kick">CONSULTA MÉDICA ONLINE · 100% SIGILOSA</div>
  <div class="preco"><span class="de">de <s>R$ 1.000</s></span><span class="por">por</span><span class="val">R$ 97</span></div>
  <div class="garantia">{selo}<p>Não gostou da consulta?<br><b>Devolvemos 100% do seu dinheiro.</b></p></div>
</div>
<div class="barra">
  <span>{LOCK}Pagamento 100% seguro</span><i class="sep"></i>
  <span>Dr. Cristiano Estivalet · CRM-DF 15471</span><i class="sep"></i>
  <span>CNPJ {cnpj}</span>
</div>
</body></html>"""
for cnpj, nome in [("44.877.750/0001-11","banner-checkout-dia-do-homem-cnpj-44877750"),("25.178.600/0001-75","banner-checkout-dia-do-homem-cnpj-25178600")]:
    (out/f"{nome}.html").write_text(html(cnpj), encoding='utf8')
print("ok")
