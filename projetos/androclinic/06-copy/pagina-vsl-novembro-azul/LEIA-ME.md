# Página de VSL — Novembro Azul (AndroClinic)

Base: código-fonte de https://drestivalet.andromedicina.com/ (lido em 12/11/2026), com os ajustes do documento "Ajuste Página de VSL para Novembro Azul".

- `index.html` — a página. Abre direto no navegador.
- `imagens/` — imagens tiradas da página original (PNGs convertidos para WebP para a página carregar mais rápido).

## O que mudou em relação à original
1. Blocos retirados a pedido do Rafael: Porsche Cup (carrossel e "patrocinadores oficiais"), em 12/11; quiz "Será que você precisa de uma avaliação médica?" e selo do Reclame AQUI, em 13/11.
2. Dobra superior (modelo enviado pelo Rafael em 13/11): fundo azul-escuro (#08121e), logo Novembro Azul AndroClinic discreta (versão com letras brancas, feita a partir da logo enviada, para aparecer no fundo escuro), pré-headline sem caixa ("risco zero" em branco), headline branca com "potência, confiança" em amarelo. Abaixo continuam o vídeo, os 3 itens (R$ 97, garantia, cashback), o botão "AGENDAR MINHA CONSULTA MÉDICA INDIVIDUAL POR APENAS R$ 97" e "Atendimento sigiloso · Sem fila · Escolha seu horário".
3. Bloco opcional "Novembro Azul: menos promoções vazias, mais saúde real" logo abaixo da dobra (3 cartões). Para tirar, apague a `<section class="manifesto">` inteira.
4. Bloco de oferta: R$ 197 por R$ 97, texto da Oferta Novembro Azul e os 4 itens novos.
5. Bloco novo de garantia "O risco é 100% da clínica" com selo de 100% (desenhado em SVG, não há imagem de selo na original), logo depois da oferta.
6. FAQ: as 5 perguntas novas entram no topo; as 6 antigas continuam abaixo.
7. Coerência de preço no resto da página: "vagas promocionais por R$ 97" na última chamada.

## Atenção ao publicar
- Os vídeos da VTurb só tocam no domínio liberado no painel da VTurb. Fora dele aparece "This domain is not in the list of allowed domains".
- Pixels da Meta e o envio para `/api/capi` foram mantidos como na original; o `/api/capi` só funciona no servidor da página atual.
- O botão de agendamento continua com `utm_source=META-MARCOS`.
