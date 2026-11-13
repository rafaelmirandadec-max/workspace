# Página de VSL — Novembro Azul (AndroClinic)

Base: código-fonte de https://drestivalet.andromedicina.com/ (lido em 12/11/2026), com os ajustes do documento "Ajuste Página de VSL para Novembro Azul".

- `index.html` — a página. Abre direto no navegador.
- `imagens/` — imagens tiradas da página original (PNGs convertidos para WebP para a página carregar mais rápido).

## O que mudou em relação à original
1. Blocos retirados a pedido do Rafael: Porsche Cup (carrossel e "patrocinadores oficiais"), em 12/11; quiz "Será que você precisa de uma avaliação médica?" e selo do Reclame AQUI, em 13/11.
2. Dobra superior (2º modelo enviado pelo Rafael em 13/11): fundo azul-escuro (#08121e), logo Novembro Azul AndroClinic discreta (160 px, versão com letras brancas feita a partir da logo enviada), pré-headline em caixa alta "Enquanto outros lucram com a sua dor na Black Friday..." e headline "Recupere sua potência, confiança e desempenho com RISCO ZERO." (o subtítulo com o preço foi retirado a pedido do Rafael). Abaixo continuam o vídeo, os 3 itens (R$ 97, garantia, cashback), o botão "AGENDAR MINHA CONSULTA MÉDICA INDIVIDUAL POR APENAS R$ 97" e "Atendimento sigiloso · Sem fila · Escolha seu horário".
3. Bloco opcional "Novembro Azul: menos promoções vazias, mais saúde real" logo abaixo da dobra (3 cartões). Para tirar, apague a `<section class="manifesto">` inteira.
4. Bloco de oferta: R$ 197 por R$ 97, texto da Oferta Novembro Azul e os 4 itens novos.
5. Bloco novo de garantia "O risco é 100% da clínica" com selo de 100% (desenhado em SVG, não há imagem de selo na original), logo depois da oferta.
6. FAQ: as 5 perguntas novas entram no topo; as 6 antigas continuam abaixo.
7. Blocos "Destaque Nacional" (vídeo da reportagem) e "Craque Neto" juntos num só bloco, com headline única ("Destaque na TV e recomendada pelo Craque Neto") e carrossel de 2 slides, no lugar onde ficava o Destaque Nacional (pedido do Rafael em 13/11). A seção separada do Craque Neto saiu.
8. Blocos "Sua Satisfação é Nossa Prioridade" e "Sigilo total. Sempre." unidos num só bloco ("Sigilo total. Sempre."), com o texto dos dois e o depoimento de C.M. (pedido do Rafael em 13/11).
9. Coerência de preço no resto da página: "vagas promocionais por R$ 97" na última chamada.

## Atenção ao publicar
- Os vídeos da VTurb só tocam no domínio liberado no painel da VTurb. Fora dele aparece "This domain is not in the list of allowed domains".
- Pixels da Meta e o envio para `/api/capi` foram mantidos como na original; o `/api/capi` só funciona no servidor da página atual.
- O botão de agendamento continua com `utm_source=META-MARCOS`.
