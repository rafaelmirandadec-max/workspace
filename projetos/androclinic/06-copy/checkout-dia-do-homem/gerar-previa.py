"""Prévia em HTML do checkout Hubla do Dia Internacional do Homem, 19/11 (arquivo único).
Uso: python3 -I checkout_html.py <saida.html>
É só layout: não envia dados nem processa pagamento."""
import base64, sys
from pathlib import Path

C = Path('/home/user/workspace/projetos/androclinic/06-copy/checkout-novembro-azul')
H = Path('/home/user/workspace/projetos/androclinic/06-copy/checkout-dia-do-homem')
def uri(p, mime): return f'data:{mime};base64,' + base64.b64encode(Path(p).read_bytes()).decode()
banner = uri(H / 'banner-checkout-dia-do-homem-cnpj-44877750.png', 'image/png')
foto = uri(C / 'foto-produto-dr-cristiano.jpg', 'image/jpeg')

CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'
LOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
SHIELD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>'
PIX = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2.5 21.5 12 12 21.5 2.5 12z"/><path d="M8 12h8M12 8v8"/></svg>'
CARD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>'
CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>'

doc = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>Checkout Dia do Homem</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<style>
:root{{--bg:#f6f3ee;--card:#fbfaf8;--line:#e6e2db;--txt:#1c1b19;--muted:#6b6862;--green:#18b82a;--green-d:#139523;--gold:#b88a00;--yellow:#facc15;--ink:#111827}}
*,*::before,*::after{{box-sizing:border-box;margin:0;padding:0}}
html,body{{background:var(--bg);color:var(--txt);font-family:'Inter',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;-webkit-font-smoothing:antialiased}}
button,input,select{{font:inherit;color:inherit}}
.aviso{{background:#111827;color:#facc15;font-size:12px;font-weight:700;letter-spacing:.06em;text-align:center;padding:7px 12px;text-transform:uppercase}}
.wrap{{max-width:580px;margin:0 auto;padding:0 16px 40px}}
.banner{{display:block;width:100%;height:auto;border-radius:0 0 14px 14px;box-shadow:0 8px 24px rgba(0,0,0,.18)}}
@media(min-width:620px){{.banner{{border-radius:14px;margin-top:16px}}}}
.box{{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px;margin-top:16px}}
@media(min-width:620px){{.box{{padding:24px}}}}
.prod{{display:flex;gap:14px;align-items:flex-start}}
.prod img{{width:72px;height:52px;object-fit:cover;border-radius:8px;flex-shrink:0}}
.prod h1{{font-size:17px;font-weight:600;line-height:1.3}}
.preco{{margin-top:4px;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}}
.preco s{{color:var(--muted);font-size:14px}}
.preco strong{{font-size:22px;font-weight:800;color:var(--txt)}}
.tag{{display:inline-flex;align-items:center;gap:6px;margin-top:8px;font-size:12px;font-weight:700;color:#1d4ed8;background:#e8efff;border:1px solid #c7d7fe;border-radius:999px;padding:4px 10px}}
.tag i{{width:8px;height:8px;border-radius:9px;background:#2563eb;display:inline-block}}
details{{margin-top:16px;border-top:1px solid var(--line);padding-top:12px}}
summary{{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-size:14px;font-weight:600}}
summary::-webkit-details-marker{{display:none}}
summary svg{{width:18px;height:18px;transition:transform .2s}}
details[open] summary svg{{transform:rotate(180deg)}}
.desc{{margin-top:12px;font-size:14px;line-height:1.6;color:#3b3934}}
.desc p+p{{margin-top:10px}}
.desc ul{{list-style:none;margin-top:6px}}
.desc li{{padding-left:14px;position:relative}}
.desc li::before{{content:"•";position:absolute;left:0}}
.pend{{background:#fff7d6;border:1px dashed #d9b400;border-radius:6px;padding:1px 6px;font-size:13px}}
.args{{list-style:none;margin-top:16px;display:flex;flex-direction:column;gap:9px}}
.args li{{display:flex;gap:10px;font-size:14px;line-height:1.45}}
.args svg{{width:18px;height:18px;color:var(--green);flex-shrink:0;margin-top:1px}}
.args b{{font-weight:700}}
h2{{font-size:16px;font-weight:700;margin-bottom:12px}}
.campos{{border:1px solid var(--line);border-radius:10px;overflow:hidden;background:#fff}}
.campo{{display:flex;align-items:center;gap:10px;padding:13px 14px;border-top:1px solid var(--line);font-size:15px}}
.campo:first-child{{border-top:0}}
.campo input{{border:0;outline:0;background:transparent;width:100%;font-size:15px}}
.campo input::placeholder{{color:#9b978f}}
.ddi{{font-size:14px;color:var(--muted);white-space:nowrap;border-right:1px solid var(--line);padding-right:10px}}
.split{{display:grid;grid-template-columns:1fr 1fr}}
.split .campo+.campo{{border-left:1px solid var(--line)}}
.metodos{{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px}}
.metodo{{border:1px solid var(--line);background:#fff;border-radius:10px;padding:12px 14px;text-align:left;cursor:pointer;display:flex;flex-direction:column;gap:6px;font-size:14px;font-weight:600}}
.metodo svg{{width:20px;height:20px}}
.metodo small{{font-size:12px;font-weight:500;color:var(--muted)}}
.metodo[aria-pressed="true"]{{border:2px solid var(--txt);padding:11px 13px}}
.pixinfo{{background:#eefbf0;border:1px solid #bfe9c5;border-radius:10px;padding:12px 14px;font-size:14px;line-height:1.5;color:#14532d}}
.total{{display:flex;justify-content:space-between;align-items:baseline;margin-top:18px;padding-top:14px;border-top:1px solid var(--line)}}
.total span{{font-size:14px;color:var(--muted)}}
.total strong{{font-size:22px;font-weight:800}}
.cta{{margin-top:14px;width:100%;border:0;border-radius:10px;background:var(--green);color:#fff;font-size:17px;font-weight:700;padding:16px;cursor:pointer;box-shadow:0 6px 16px rgba(24,184,42,.3)}}
.cta:hover{{background:var(--green-d)}}
.seguro{{margin-top:10px;display:flex;justify-content:center;align-items:center;gap:6px;font-size:13px;color:var(--muted)}}
.seguro svg{{width:15px;height:15px;color:var(--green)}}
.garantia{{display:flex;gap:14px;align-items:center;margin-top:16px;background:#111827;color:#e5e7eb;border-radius:12px;padding:14px 16px;border:1px solid #facc15}}
.garantia svg.selo{{width:64px;height:64px;flex-shrink:0}}
.garantia p{{font-size:13.5px;line-height:1.5}}
.garantia b{{color:#facc15;display:block;font-size:14.5px;margin-bottom:2px}}
.festa{{margin-top:16px;background:#111827;color:#e5e7eb;border-radius:14px;padding:18px 20px;border-left:5px solid #facc15}}
.festa small{{display:block;font-size:12px;font-weight:800;letter-spacing:.08em;color:#facc15;text-transform:uppercase;margin-bottom:6px}}
.festa h2{{color:#fff;font-size:19px;line-height:1.3;margin-bottom:6px}}
.festa p{{font-size:14px;line-height:1.55}}
.festa b{{color:#facc15}}
.tagh{{display:inline-flex;align-items:center;gap:6px;margin-top:8px;font-size:12px;font-weight:800;letter-spacing:.03em;color:#111827;background:#facc15;border-radius:999px;padding:4px 11px;white-space:nowrap}}
.rodape{{text-align:center;font-size:12.5px;color:var(--muted);margin-top:22px;line-height:1.7}}
.rodape b{{color:var(--txt)}}
:focus-visible{{outline:2px solid #2563eb;outline-offset:2px}}
</style>
</head>
<body>
<div class="aviso">Prévia de layout — este arquivo não processa pagamento</div>
<div class="wrap">
  <img class="banner" src="{banner}" alt="19 de novembro, Dia Internacional do Homem: consulta médica online com o Dr. Cristiano Estivalet de R$ 1.000 por R$ 97, com garantia de 100%" width="1600" height="900" />

  <section class="box" aria-label="Resumo do pedido">
    <div class="prod">
      <img src="{foto}" alt="Dr. Cristiano Estivalet" />
      <div>
        <h1>Consulta Online Dia do Homem | Saúde Sexual Masculina</h1>
        <div class="preco"><s>R$ 1.000,00</s><strong>R$ 97,00</strong></div>
        <span class="tagh">Condição especial Dia do Homem</span>
      </div>
    </div>
    <ul class="args">
      <li>{CHECK}<span><b>Atendimento médico 1:1 por vídeo:</b> 100% sigiloso e sem espera</span></li>
      <li>{CHECK}<span><b>Garantia Total:</b> devolução de 100% do valor se não gostar da consulta</span></li>
      <li>{CHECK}<span><b>Cashback:</b> os R$ 97 viram crédito no seu protocolo, se precisar de tratamento</span></li>
    </ul>
    <details>
      <summary>Detalhes da consulta {CHEV}</summary>
      <div class="desc">
        <p><b>O que você recebe:</b></p>
        <ul>
          <li>Consulta médica online 1:1 por vídeo com o Dr. Cristiano Estivalet (CRM-DF 15471), com duração média de 30 minutos.</li>
          <li>Atendimento 100% sigiloso, sem fila e no horário que você escolher.</li>
          <li>Nota fiscal com o CRM do médico, para pedir reembolso no seu plano de saúde conforme as regras dele.</li>
        </ul>
        <p><b>Garantia Total:</b> não gostou da consulta? Devolvemos 100% do valor.</p>
        <p><b>Cashback:</b> se o médico indicar tratamento e você decidir fazer com a AndroClinic, os R$ 97 viram crédito no seu protocolo. Se não precisar de tratamento, você sai com a orientação e pronto.</p>
        <p><b>Depois do pagamento:</b> <span class="pend">[A PREENCHER: como a pessoa agenda o horário]</span></p>
      </div>
    </details>
  </section>

  <form class="box" onsubmit="return false" aria-label="Dados e pagamento (prévia)">
    <h2>Seus dados</h2>
    <div class="campos">
      <label class="campo"><input type="email" placeholder="E-mail" autocomplete="off" disabled /></label>
      <label class="campo"><span class="ddi">🇧🇷 +55</span><input type="tel" placeholder="WhatsApp com DDD" autocomplete="off" disabled /></label>
      <label class="campo"><input type="text" placeholder="Nome completo" autocomplete="off" disabled /></label>
      <label class="campo"><input type="text" placeholder="CPF" autocomplete="off" disabled /></label>
    </div>

    <h2 style="margin-top:22px">Pagamento</h2>
    <div class="metodos" role="group" aria-label="Forma de pagamento">
      <button type="button" class="metodo" data-m="pix" aria-pressed="true">{PIX}Pix<small>Aprovação na hora</small></button>
      <button type="button" class="metodo" data-m="cartao" aria-pressed="false">{CARD}Cartão de crédito<small>Visa, Master, Amex, Hipercard</small></button>
    </div>
    <div id="m-pix" class="pixinfo">O código Pix aparece depois que você confirmar. A aprovação é na hora e você já pode agendar a consulta.</div>
    <div id="m-cartao" class="campos" hidden>
      <label class="campo"><input placeholder="Número do cartão" disabled /></label>
      <div class="split"><label class="campo"><input placeholder="Validade (MM/AA)" disabled /></label><label class="campo"><input placeholder="CVV" disabled /></label></div>
      <label class="campo"><input placeholder="Nome impresso no cartão" disabled /></label>
    </div>

    <div class="total"><span>Total</span><strong>R$ 97,00</strong></div>
    <button type="button" class="cta">Garantir minha consulta por R$ 97</button>
    <div class="seguro">{LOCK}Transação segura e criptografada</div>

    <div class="garantia">
      <svg class="selo" viewBox="0 0 220 220" aria-hidden="true"><circle cx="110" cy="110" r="104" fill="#facc15"/><circle cx="110" cy="110" r="88" fill="#111827"/><circle cx="110" cy="110" r="80" fill="none" stroke="#facc15" stroke-width="3" stroke-dasharray="3 5"/><text x="110" y="128" text-anchor="middle" font-family="Inter,Arial" font-weight="800" font-size="50" fill="#facc15">100%</text></svg>
      <p><b>Garantia Pós-Consulta</b>Se a consulta não atender às suas expectativas, é só avisar no WhatsApp e devolvemos 100% do valor, sem burocracia.</p>
    </div>
  </form>

  <div class="rodape">
    Ao confirmar, você concorda com os Termos de Uso da plataforma de pagamento.<br />
    <b>AndroClinic</b> · Médico responsável: Dr. Cristiano Estivalet, CRM-DF 15471<br />
    Pagamento processado pela Hubla
  </div>
</div>
<script>
document.querySelectorAll('.metodo').forEach(b => b.onclick = () => {{
  document.querySelectorAll('.metodo').forEach(x => x.setAttribute('aria-pressed', x === b));
  document.getElementById('m-pix').hidden = b.dataset.m !== 'pix';
  document.getElementById('m-cartao').hidden = b.dataset.m !== 'cartao';
}});
</script>
</body>
</html>
"""
Path(sys.argv[1]).write_text(doc, encoding='utf8')
print('ok', len(doc))
