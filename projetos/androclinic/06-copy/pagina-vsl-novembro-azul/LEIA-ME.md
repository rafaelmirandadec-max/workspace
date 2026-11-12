# Página de VSL — Novembro Azul (AndroClinic)

Base: código-fonte de https://drestivalet.andromedicina.com/ (lido em 12/11/2026), com os ajustes do documento "Ajuste Página de VSL para Novembro Azul".

- `index.html` — a página. Abre direto no navegador.
- `imagens/` — imagens tiradas da página original (fotos da Porsche reduzidas para 1600 px; PNGs convertidos para WebP para a página carregar mais rápido).

## O que mudou em relação à original
1. Dobra superior: selo "Novembro Azul AndroClinic", pré-headline da Black Friday com RISCO ZERO, os 3 itens (R$ 97, garantia, cashback), botão "AGENDAR MINHA CONSULTA MÉDICA INDIVIDUAL POR APENAS R$ 97" e "Atendimento sigiloso · Sem fila · Escolha seu horário". O vídeo continua no mesmo lugar.
2. Bloco opcional "Novembro Azul: menos promoções vazias, mais saúde real" logo abaixo da dobra (3 cartões). Para tirar, apague a `<section class="manifesto">` inteira.
3. Bloco de oferta: R$ 197 por R$ 97, texto da Oferta Novembro Azul e os 4 itens novos.
4. Bloco novo de garantia "O risco é 100% da clínica" com selo de 100% (desenhado em SVG, não há imagem de selo na original), logo depois da oferta.
5. FAQ: as 5 perguntas novas entram no topo; as 6 antigas continuam abaixo.
6. Coerência de preço no resto da página: "vagas promocionais por R$ 97" na última chamada e "50% de desconto" no botão do quiz (antes dizia 60%).

## Atenção ao publicar
- Os vídeos da VTurb só tocam no domínio liberado no painel da VTurb. Fora dele aparece "This domain is not in the list of allowed domains".
- Pixels da Meta e o envio para `/api/capi` foram mantidos como na original; o `/api/capi` só funciona no servidor da página atual.
- O botão de agendamento continua com `utm_source=META-MARCOS`.
