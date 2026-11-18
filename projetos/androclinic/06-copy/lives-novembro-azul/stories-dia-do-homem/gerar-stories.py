"""Stories do Dia Internacional do Homem (19/11) — 7 telas 1080x1920. Gera HTML; o render é feito com Playwright.
Uso: python3 -I stories_dia_homem.py <pasta saída>
Área segura: texto entre y=250 e y=1580 (o Instagram cobre o topo e a base). Os espaços marcados como
'figurinha' ficam vazios para a figurinha do próprio Instagram (lembrete, enquete, link)."""
import base64, sys
from pathlib import Path

out = Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)
W = Path('/home/user/workspace/projetos/androclinic/06-copy')
def uri(p, mime): return f'data:{mime};base64,' + base64.b64encode(Path(p).read_bytes()).decode()
logo = uri(W / 'pagina-vsl-novembro-azul/imagens/logo-novembro-azul-branca.webp', 'image/webp')
foto = uri(W / 'pagina-vsl-padrao-original/imagens/dr-cristiano-estivalet.webp', 'image/webp')

CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'
SETA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>'
SELO = ('<svg class="selo" viewBox="0 0 220 220"><circle cx="110" cy="110" r="104" fill="#facc15"/><circle cx="110" cy="110" r="88" fill="#111827"/>'
        '<circle cx="110" cy="110" r="80" fill="none" stroke="#facc15" stroke-width="3" stroke-dasharray="3 5"/>'
        '<text x="110" y="128" text-anchor="middle" font-family="Inter" font-weight="900" font-size="50" fill="#facc15">100%</text></svg>')

CSS = """
*{margin:0;padding:0;box-sizing:border-box}
body{width:1080px;height:1920px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;position:relative;
  background:radial-gradient(ellipse 90% 45% at 50% 0%,#0b2a5c 0%,#05101f 55%,#000 100%)}
.foto{position:absolute;left:0;right:0;bottom:0;height:780px;background:url(FOTO) center 8%/cover}
.foto::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,#000 0%,rgba(0,0,0,.2) 22%,rgba(0,0,0,0) 50%,rgba(0,0,0,.5) 80%,#000 100%)}
.conteudo{position:absolute;left:80px;right:80px;top:250px;bottom:340px;display:flex;flex-direction:column}
.topo{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:44px}
.logo{width:300px;display:block}
.crm{font-size:22px;font-weight:600;color:rgba(255,255,255,.72);text-align:right;line-height:1.3}
.dia{align-self:flex-start;display:inline-flex;gap:12px;font-size:30px;font-weight:900;letter-spacing:.07em;color:#000;background:#facc15;
  border-radius:999px;padding:12px 26px;margin-bottom:36px;white-space:nowrap}
.dia i{font-style:normal;opacity:.6}
h1{font-size:92px;font-weight:900;line-height:1.02;letter-spacing:-.015em;text-transform:uppercase}
h1 em{font-style:normal;color:#facc15}
.sub{font-size:44px;font-weight:600;line-height:1.25;margin-top:30px;color:#e5e7eb}
.sub b{color:#facc15;font-weight:800}
.lista{list-style:none;margin-top:40px;display:flex;flex-direction:column;gap:22px}
.lista li{display:flex;gap:20px;font-size:40px;font-weight:600;line-height:1.2}
.lista svg{width:44px;height:44px;flex-shrink:0;margin-top:2px}
.lista b{color:#facc15;font-weight:800}
.preco{display:flex;align-items:baseline;gap:22px;margin-top:34px;white-space:nowrap}
.preco .de{font-size:54px;font-weight:700;color:#9ca3af} .preco .de s{text-decoration-thickness:5px}
.preco .por{font-size:46px;font-weight:700}
.preco .val{font-size:150px;font-weight:900;color:#facc15;line-height:.9;letter-spacing:-.02em}
.espaco{flex:1}
.figurinha{align-self:center;display:flex;flex-direction:column;align-items:center;gap:8px;font-size:34px;font-weight:800;color:#facc15;
  letter-spacing:.04em;text-shadow:0 2px 12px rgba(0,0,0,.7)}
.figurinha svg{width:56px;height:56px}
.vaga{height:230px}
.rodape{position:absolute;left:0;right:0;bottom:300px;text-align:center;font-size:24px;font-weight:600;color:rgba(255,255,255,.7)}
.aovivo{align-self:flex-start;display:inline-flex;align-items:center;gap:16px;font-size:44px;font-weight:900;letter-spacing:.08em;background:#e11d48;
  border-radius:14px;padding:14px 28px;margin-bottom:36px}
.aovivo i{width:22px;height:22px;border-radius:50%;background:#fff;display:inline-block}
.garantia{display:flex;align-items:center;gap:34px;margin-top:40px}
.selo{width:200px;height:200px;flex-shrink:0}
.garantia p{font-size:44px;font-weight:600;line-height:1.22}
.garantia b{color:#facc15;font-weight:900;display:block}
""".replace('FOTO', foto)

def pagina(nome, corpo, com_foto=False):
    html = f"""<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&display=swap" rel="stylesheet">
<style>{CSS}</style></head><body>
{'<div class="foto"></div>' if com_foto else ''}
<div class="conteudo"><div class="topo"><img class="logo" src="{logo}" alt=""><p class="crm">Dr. Cristiano Estivalet<br>CRM-DF 15471</p></div>{corpo}</div>
</body></html>"""
    (out / f'{nome}-1080x1920.html').write_text(html, encoding='utf8')

DIA = '<div class="dia">19/11 <i>·</i> DIA INTERNACIONAL DO HOMEM</div>'
def fig(txt): return f'<div class="espaco"></div><div class="figurinha">{txt}{SETA}</div><div class="vaga"></div>'
def fig_meio(txt): return f'<div class="figurinha" style="margin-top:44px">{txt}{SETA}</div>'

pagina('story-01-hoje-tem-live', DIA +
  '<h1>Hoje tem <em>live especial</em> do Dia do Homem</h1>'
  '<p class="sub">Às <b>13h</b>, aqui no Instagram, comigo.</p>' + fig_meio('ATIVE O LEMBRETE'), com_foto=True)

pagina('story-02-enquete', DIA +
  '<h1>Seja <em>sincero:</em></h1>'
  '<p class="sub" style="font-size:52px;line-height:1.22">Você cuida da sua saúde do mesmo jeito que cuida do trabalho, da família e das contas?</p>'
  + fig('RESPONDA AQUI'))

pagina('story-03-daqui-a-pouco', DIA +
  '<h1>Daqui a pouco, <em>às 13h,</em> ao vivo</h1>'
  '<p class="sub">E no final da live tem uma <b>condição especial</b> para comemorar o Dia do Homem.</p>' + fig_meio('ATIVE O LEMBRETE'), com_foto=True)

pagina('story-04-ao-vivo',
  '<div class="aovivo"><i></i>AO VIVO</div>'
  '<h1>A live do <em>Dia do Homem</em> começou</h1>'
  '<p class="sub">Toque na minha foto lá em cima para entrar.</p>', com_foto=True)

pagina('story-05-oferta', DIA +
  '<h1 style="font-size:78px">Para comemorar, a consulta online sai</h1>'
  '<div class="preco"><span class="de">de <s>R$ 1.000</s></span><span class="por">por</span></div>'
  '<div class="preco" style="margin-top:6px"><span class="val">R$ 97</span></div>'
  '<ul class="lista">'
  f'<li>{CHECK}<span><b>Consulta por vídeo,</b> só você e o médico, 100% sigilosa</span></li>'
  f'<li>{CHECK}<span><b>Não gostou da consulta?</b> Devolvemos 100%</span></li>'
  f'<li>{CHECK}<span><b>Cashback:</b> os R$ 97 viram crédito no seu protocolo, se precisar de tratamento</span></li>'
  '</ul>' + fig('TOQUE NO LINK'))

pagina('story-06-garantia', DIA +
  '<h1>O risco fica com <em>a clínica,</em> não com você</h1>'
  f'<div class="garantia">{SELO}<p><b>Não gostou da consulta?</b>Avise no WhatsApp e devolvemos 100% dos R$ 97.</p></div>'
  '<p class="sub">Consulta online de <b>R$ 1.000 por R$ 97</b> pelo Dia do Homem.</p>' + fig('TOQUE NO LINK'))

pagina('story-07-ultimas-horas', DIA +
  '<h1><em>Últimas horas</em> da condição do Dia do Homem</h1>'
  '<p class="sub">Consulta online comigo de <b>R$ 1.000 por R$ 97</b>, com devolução de 100% se não gostar. Vale até as <b>23h59 de hoje.</b></p>'
  + fig_meio('TOQUE NO LINK'), com_foto=True)
print('ok')
