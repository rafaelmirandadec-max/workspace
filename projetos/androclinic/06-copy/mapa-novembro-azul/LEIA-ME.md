# Mapa de Risco (andromens.com.br/mapa) — Novembro Azul

Base: código público do quiz, lido em 16/11/2026. A prévia roda o próprio código do quiz com as mudanças aplicadas; o resultado usa as respostas fictícias de exemplo que já existem no código (José). A prévia não envia nenhum dado.

## Arquivos
- `mapa-novembro-azul-previa.html` — prévia da capa e do resultado. Abre no navegador; as imagens do corpo e dos ícones vêm do site da clínica, então precisa de internet.
- `perguntas-dados-meta.js` e `perguntas.js` — arquivos do quiz já com as mudanças, prontos para o programador trocar em `/mapa/perguntas-v2/`.
- `integra.js` — trocar em `/mapa/app/`: o rastreio de cliques e as UTMs passam a valer para o link do checkout.
- `mudancas.diff` — só as linhas que mudaram, para conferir.
- `novembro-azul.css` — estilos da lista de garantia e cashback na oferta e do bloco de garantia (acrescentar ao fim de `/mapa/perguntas-v2/perguntas.css`).
- `logo-novembro-azul.png` e `logo-novembro-azul-branca.png` — subir para `/mapa/assets/`.

## O que mudou
1. **Logo:** Novembro Azul AndroClinic no lugar da logo AndroClinic, na capa e no resultado.
2. **Bloco da oferta no resultado:** selo "CONDIÇÃO NOVEMBRO AZUL"; "de R$ 1.000 por só R$ 97" (antes R$ 197); entram "Não gostou da consulta? Devolvemos 100%" e "R$ 97 abatidos no tratamento, se precisar".
3. **Sem o cronômetro de 5 minutos** e sem "Válida por 5 minutos… depois volta ao valor normal". O código já tinha a chave para isso (`?prazo=0`); agora fica desligado por padrão e só liga com `?prazo=1`.
4. **Botão:** "AGENDAR MINHA CONSULTA POR R$ 97" (antes "AGENDAR CONSULTA AGORA COM CONDIÇÃO ESPECIAL"), no fim do resultado e na barra fixa.
5. **Destino do botão:** direto para o checkout Hubla (https://pay.hub.la/xsvWVGbmQbri6iXyzlDb), no lugar da /vsl-3 (pedido do Rafael em 16/11). O `integra.js` continua anexando a lista fixa de parâmetros (form, ab_tema, utm_*, fbclid) e medindo o clique.
6. **Bloco de garantia** logo depois da oferta (pedido do Rafael em 16/11): selo 100% e "Garantia Pós-Consulta: Satisfação ou Seu Dinheiro de Volta", com o mesmo texto da página de vendas e "Seu risco é zero."

## O que não mudou (decisões pendentes)
- O selo "De R$ 200,00 · Grátis agora" da capa continua. Só deve ficar se o mapa já foi cobrado R$ 200.
- O checkout precisa estar em R$ 97 antes de o quiz ir ao ar com este botão; hoje cobra o equivalente a R$ 197.
- Perguntas, cadastro e textos do mapa: sem mudança.

## Depois de 30/11
Voltar `"por": "97"` para o valor normal, tirar `"extras"` e `"garantia"` (se a garantia acabar junto), trocar o selo e o botão de volta, decidir se o botão volta para a /vsl-3 e trocar a logo de volta para a da AndroClinic.
