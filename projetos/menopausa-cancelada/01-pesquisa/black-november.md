# Black November do Shot da Libido: fim da promoção, preços por canal e anúncios ativos

Coletado em 11/11/2026, entre 17:25 e 17:35 UTC (14:25 a 14:35 em Brasília). Responsável: researcher. Fontes todas públicas, sem login, sem compra e sem dado pessoal preenchido.

## RESUMO (6 linhas)

1. **Data de fim: NÃO ENCONTRADA.** Procurei em shotdalibido.com.br (texto e código-fonte), loja .com.br (home, listagem, Shot, Combo, carrinho), suplemento.menopausacancelada.com/v1 (texto e código), black.menopausacancelada.com, 7 páginas de checkout da Hubla e nos 8 textos de anúncio. O único prazo é "quando acabar, acabou" (estoque) e um contador de 15 min na Hubla que reinicia a cada visita (não é data de fim).
2. **Quadro de preços do Shot:** anúncio e página de checkout da campanha: 2 por R$279,80, 4 por R$479,60, 6 por R$599,40 (com brindes). shotdalibido.com.br: "compre 2 e leve 3" por R$394,00. Loja .com.br: R$187,90 cada, sem desconto por quantidade (1, 2, 4 e 6 potes = R$187,90 / 375,80 / 751,60 / 1.127,40).
3. **Anúncios:** 27 ativos lidos, 27 informados ("~27 resultados"), em 6 textos diferentes: 12 de "mais de 80% OFF", 6 de "mais de 50% OFF" (6/4/2 potes), 3 de "libido dos 20" (80%, sem preço), 1 do Shot sem promoção, 4 genéricos de suplemento e 1 de vinagre de maçã (2024).
4. **Conflito entre canais: sim.** O mesmo Shot tem 4 condições ativas ao mesmo tempo (ver quadro). O combo 6+brindes só existe no checkout dedicado; a loja não o vende nem cita brindes.
5. **Checkout:** a loja (Nuvemshop) cobra o preço cheio unitário em qualquer quantidade; os brindes não aparecem no carrinho. Parei antes de dados pessoais, então frete e tela final de pagamento da loja não foram vistos.
6. **O "80% OFF" tem base explicável, mas só no checkout:** a Hubla mostra "de R$3.336,00 por R$599,40" no combo de 6 (82%). A base inclui os brindes e usa R$239 por pote, não os R$229 da loja.

---

## 1. Quando a promoção termina

**Resultado: não encontrado.** FATO de ausência, com os lugares onde procurei (todos em 11/11/2026):

- shotdalibido.com.br, texto visível e código (`--html`): nenhuma data, contador, "até dia", "últimas unidades". Único preço: combo "Compre 2 e leve 3, De R$594,00 por R$394,00". Sem a palavra "Black". Rodapé "© 2026".
- Loja menopausacancelada.com.br (home, /produtos/, Shot, Combo, carrinho): sem banner de Black, sem barra de topo promocional, sem contador. Os campos de promoção da Nuvemshop vêm vazios no código (`promotional_offer: null`, `promotions: null`).
- suplemento.menopausacancelada.com/v1 (destino dos anúncios de 10/11, página-vitrine): selo "Black November" na imagem do topo e faixa "Frete grátis p/ todo o Brasil". Sem data nem contador no texto e no código.
- black.menopausacancelada.com (destino dos anúncios de 11/11, redireciona para /v1): é página de lista de espera para uma aula. Texto literal: "A MAIOR QUEIMA DE ESTOQUE DA NOSSA HISTÓRIA", "+50% de desconto na semana do Shot da Libido", "NÃO COMPRE NADA ATÉ DIA 09/11". "Semana" indica duração aproximada de 7 dias, mas não traz data de fim. É texto de pré-lançamento (a campanha começou 10/11), por isso não uso como prazo. PISTA, não fato.
- Checkouts da Hubla: o combo "Promoção de lançamento" (R$394) mostra "Compre em até 00:14:57 para não perder essa oferta". Nas duas leituras (17:25:52 e 17:33:40) o contador reiniciou em 00:14:58. O código traz `"seconds":900` e `"endsAt":[0]` vazio. Conclusão: é contador de 15 minutos por visita, não data de fim. Nos outros checkouts (2, 4, 6 potes e kits) `expiryDate` vem vazio e não há contador.
- Textos dos anúncios, só prazo por estoque: "É queima de estoque: quando acabar, acabou. E o preço volta ao normal."; "Quem perder essa Black vai se arrepender: é queima de estoque, e quando acabar, acabou."; "enquanto durar o estoque". Nenhum traz data.
- Biblioteca de Anúncios: todos os 27 estão "Ativo", sem data de término (a Biblioteca só mostra início).

**Quem tem a resposta:** o gerente de marketing, ou a configuração do contador/estoque na Hubla. Sem isso, o e-mail não pode citar data de fim (a tarefa de e-mail deve usar "enquanto durar o estoque" ou esperar a data).

---

## 2. Quais preços valem e onde

### 2.1 Quadro por canal (leitura em 11/11/2026)

| Canal | Condição e preço (literal ou lido) | URL | Lido em (UTC) |
|---|---|---|---|
| Anúncio do Meta (10/11) | "6 Shots por R$99,90 cada + 5 presentes; 4 Shots por R$119,90 cada; 2 Shots por R$139,90 cada; Sedex FULL por minha conta em todos". Presentes dos 6: Femme Healthy, calculadora de alimentos, agente de nutrição, curso Libido & Lubrificação e consulta de R$1.000 para o marido na AndroClinic | Biblioteca de Anúncios, ids 29080935288183438 e 2399626547465148 (6 anúncios) | 17:27 |
| Anúncio do Meta (10 e 11/11) | "Mais de 80% OFF no combo de 6"; "cada pote sai por R$99,90 e vão 5 presentes" | ids 1677217420508766 (12 anúncios), 1137074139142286 e 2015047512517378 (3 anúncios) | 17:27 |
| Checkout Hubla, 6 potes | "6 Shots da Libido + Femme, calculadora, agente, curso e consulta": R$599,40 à vista (6 x R$99,90), "de" R$3.336,00. Parcelamento em até 8x com juros ao comprador (2x de R$315,07, total R$630,14). Oferta extra no próprio checkout (order bump): "Leve + 6 Femme Healthy a preço de custo", R$441,00 (leitura do código, valor ligado ao bump é provável, não confirmado na tela) | https://pay.hub.la/uZEJ7PxpD6BotyLeBsYZ | 17:33 e 17:34 |
| Checkout Hubla, 4 potes | "Shot da Libido [combo 4 unid.]": R$479,60 (4 x R$119,90), "de" R$956,00 (R$239 por pote). Bump: "Leve + 4 Femme Healthy a preço de custo", R$294,00 | https://pay.hub.la/vguAXDJrzVvoqk8GEUpD | 17:33 e 17:34 |
| Checkout Hubla, 2 potes | "Shot da Libido [2unid.]": R$279,80 (2 x R$139,90), "de" R$478,00. Bump: "Leve + 2 Femme Healthy a preço de custo", R$147,00 | https://pay.hub.la/ZfunYGyEgwr8BZilhIqF | 17:33 e 17:34 |
| shotdalibido.com.br | "Combo Shot da Libido, compre 2 e leve 3: De R$594,00 por apenas R$394,00" (R$131,33 por pote). O botão leva ao checkout abaixo | https://www.shotdalibido.com.br | 17:25 |
| Checkout Hubla do combo da página | "[Shot da Libido] Promoção de lançamento": "De R$590,00, por R$394,00" (a página diz "de R$594,00"). Parcela de 2x a 8x com juros. Escolha de sabor: 6 combinações (Morango e Maracujá, Melancia, e misturas). Contador de 15 min por visita | https://pay.hub.la/kYEYCZsYkqreu85dObCn | 17:25, 17:33 e 17:34 |
| Loja .com.br, 1 pote | De R$229,00 por R$187,90 (18% OFF), 12x de R$19,33 | https://menopausacancelada.com.br/produtos/shot-da-libido/ | 17:25 e 17:28 |
| Loja, kits | Kit (Colágeno + Ômega 3 + Femme Healthy): de R$360,00 por R$328,90. Combo (Colágeno + Shot): de R$650,00 por R$447,00 | /produtos/kit-menopausa-cancelada/ e /produtos/combo-menopausa-cancelada/ | 17:25 e 17:29 |
| Vitrine suplemento.menopausacancelada.com/v1 | A página mostra só três cartões (Shot, Kit, Dúvidas). O código traz um catálogo próprio, que não vi exibido: 1 Shot R$189, 2 Shots R$297, 3 Shots R$397, Kit R$329, 2 Kits R$578, 3 Kits R$852. Os links são checkouts Hubla; os de 2, 4 e 6 potes têm preços diferentes do catálogo (279,80 / 479,60 / 599,40). Preços do catálogo = PISTA, podem estar desatualizados | https://suplemento.menopausacancelada.com/v1 | 17:31 a 17:34 |
| Checkout Hubla, kits | 1 Kit, 2 Kits, 3 Kits (conteúdo na nota abaixo). Preço **não lido** nessas páginas: o valor só aparece depois da etapa de dados pessoais, que não preenchi | pay.hub.la/Nh4Hxm00gUMr5OOiCvQZ, /WtfzBtgdw8Wszz99hQmy, /TshH3jfJCPVEeBPzZTZ2 | 17:33 |

Nota sobre os kits na Hubla: a descrição de cada um lista "2x Colágenos, 2x Ômega 3, 2x Femme" (1 Kit), "3x" (2 Kits) e "4x" (3 Kits), mais Shot da Libido [1 unid.] como item extra. Não consegui ver se o Shot vem junto ou é oferta adicional. Não afirmo.

### 2.2 Teste de carrinho na loja (Nuvemshop, sem comprar, sem dados pessoais)

Adicionei o produto ao carrinho com a quantidade indicada e li o carrinho (https://menopausacancelada.com.br/comprar/), em 11/11/2026, 17:28 a 17:29 UTC. Sabor Melancia (padrão).

| Item | Quantidade | Preço unitário | Total do carrinho (sem frete) |
|---|---|---|---|
| Shot da Libido | 1 | R$187,90 | R$187,90 |
| Shot da Libido | 2 | R$187,90 | R$375,80 |
| Shot da Libido | 4 | R$187,90 | R$751,60 |
| Shot da Libido | 6 | R$187,90 | R$1.127,40 |
| Kit Menopausa Cancelada | 1 | R$328,90 | R$328,90 |
| Combo Menopausa Cancelada | 1 | R$447,00 | R$447,00 |
| Combo Menopausa Cancelada | 2 | R$447,00 | R$894,00 |

- Não existe preço por quantidade na loja: 6 potes saem por R$1.127,40, contra R$599,40 no checkout da campanha (diferença de R$528,00).
- Nenhum brinde (Femme, calculadora, agente, curso, consulta) apareceu em qualquer carrinho.
- Frete: "Calcule para ver" (não informei CEP). A faixa da loja diz "Frete grátis Sedex acima de R$199,90"; o anúncio diz "Sedex FULL por minha conta em todos"; a vitrine diz "Frete grátis p/ todo o Brasil". Não verifiquei o frete real cobrado.
- Parei no carrinho. O checkout da loja e a etapa de pagamento da Hubla exigem dados pessoais; não testei.

### 2.3 As ofertas valem em canais diferentes ou conflitam?

Os dois, em partes:

- **Complementares (canais com função diferente):** os anúncios de 10 e 11/11 levam a suplemento.menopausacancelada.com/v1 e black.menopausacancelada.com. Os checkouts de 2, 4 e 6 potes batem exatamente com o preço dos anúncios (279,80 / 479,60 / 599,40). Ou seja, a oferta dos anúncios existe de verdade, num checkout próprio da Hubla.
- **Conflitantes (mesmo produto, mesmo dia, preço diferente):**
  - shotdalibido.com.br vende "2 e leve 3" por R$394,00 (R$131,33 o pote). O anúncio vende 2 por R$279,80, 4 por R$479,60 e 6 por R$599,40. O combo da página (3 potes, R$394,00) fica entre o de 2 e o de 4 e não bate com nenhum.
  - A loja vende 1 pote por R$187,90 (o checkout da campanha, 1 pote, aparece só no catálogo de código por R$189,00) e não oferece nenhum dos combos.
  - A base do "de" muda: R$229,00 (loja), R$239,00 por pote (Hubla 2 e 4 potes), R$198,00 por pote (594 ÷ 3, página), R$590,00 e R$594,00 para o mesmo combo.
- Qual canal é "oficial" para o e-mail: `[A PREENCHER]` pela empresa. O que posso afirmar é o quadro acima.

---

## 3. Anúncios ativos na Biblioteca de Anúncios do Meta

Busca: palavra-chave "Menopausa Cancelada", país Brasil, anúncios ativos. URL: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&q=Menopausa%20Cancelada&search_type=keyword_unordered&media_type=all. Lido em 11/11/2026, 17:27 UTC (rolagem até estabilizar, 8 cartões; releitura do código da página às 17:30).

**Contagem: 27 anúncios lidos, 27 informados ("~27 resultados").** A leitura anterior (6 de ~24) tinha parado antes. A Biblioteca mostra 8 cartões, e cada um agrupa os anúncios que usam o mesmo criativo e texto: 1 + 4 + 1 + 2 + 4 + 2 + 12 + 1 = 27. Contagem por id no código da página: 27 ids distintos, todos com `is_active: true`.

Como a Biblioteca só exibe o texto uma vez por grupo, cada grupo abaixo traz os ids.

### Grupo A, Black November, "mais de 80% OFF", combo de 6 (12 anúncios)
- Ids: 1677217420508766, 28019871187689138, 1862498755107285, 1102914062816497, 1793740621835876, 1608049547148322, 1585019996715255, 1572655641332366, 1104749132356931, 1106126892248856, 1379776517376808, 1782191073012171.
- Início: 10/11/2026 (tempo ativo de 17h na leitura). Produto: Shot da Libido. Oferta citada: combo de 6, "R$99,90 cada", 5 presentes.
- Plataformas (leitura do código; atribuição por anúncio aproximada): Facebook e Instagram em todos, e alguns também com Audience Network, WhatsApp e Threads; o id 1379776517376808 só Instagram.
- Link do anúncio: não aparece no código desses 12 (chamada é por comentário).
- Texto literal: "MAIS DE 80% OFF NO COMBO DO SHOT DA LIBIDO: É A BLACK NOVEMBER!!! 🖤 / Cansaço e falta de vontade não precisam virar o seu normal na menopausa. 🌶️ / No combo de 6, cada pote sai por R$99,90 e vão 5 presentes junto, até consulta de R$1.000 pro maridão. 🎁 / Quem perder essa Black vai se arrepender: é queima de estoque, e quando acabar, acabou. ⏳ / 📲 Comenta LIBIDO que eu te mando o link no direct. / #menopausa #libido #blacknovember #blackfriday"

### Grupo B, "super promoção", 6/4/2 potes (6 anúncios, 2 textos iguais em 2 criativos)
- Ids: 29080935288183438, 1467783801962081 (2 anúncios); 2399626547465148, 3007614502909927, 2033728013958189, 1126618293452672 (4 anúncios).
- Início: 10/11/2026. Produto: Shot da Libido. Plataformas: Facebook, Instagram, Audience Network, WhatsApp, Threads. Botão "Ver detalhes" para https://suplemento.menopausacancelada.com/v1.
- Texto literal (igual nos dois): "SUPER PROMOÇÃO DO SHOT DA LIBIDO VALENDOOOO: MAIS DE 50% OFF!!! 🖤 / Faz a conta: hoje o Shot da Libido sai por menos da metade, e quem leva o combo de 6 ganha 5 presentes. É a maior queima de estoque da nossa história. 😮‍💨 / 💥 6 Shots por R$99,90 cada + 5 presentes / 🔥 4 Shots por R$119,90 cada / 🌸 2 Shots por R$139,90 cada / 📦 Sedex FULL por minha conta em todos. / 🎁 Quem leva os 6 ganha: Femme Healthy, calculadora de alimentos, agente de nutrição e o curso Libido & Lubrificação. / 🩺 E mais uma consulta de R$1.000 pro maridão na AndroClinic, de cortesia. / 👉 Garante o seu aqui. / ⏰ É queima de estoque: quando acabar, acabou. E o preço volta ao normal."

### Grupo C, "A libido dos 20 transborda", Black November (3 anúncios)
- Ids: 1137074139142286 e 2088154921840631 (2 anúncios); 2015047512517378 (1 anúncio). Início: 11/11/2026 (2h ativos). Produto: Shot da Libido. Oferta: "mais de 80% de desconto no combo de 6" (sem preço). Plataformas: Facebook, Instagram, Audience Network, WhatsApp, Threads. Botão "Ver detalhes" para https://black.menopausacancelada.com/v1 (a página de lista de espera, não o checkout).
- Texto literal: "A LIBIDO DOS 20 TRANSBORDA. A DOS 50 QUASE SOME. E NÃO PRECISA SER ASSIM!!! 🌶️ / A vontade vai diminuindo a cada década, e na menopausa muita mulher acha que acabou de vez. 😮‍💨 / Na Black November, o Shot da Libido tá com mais de 80% de desconto no combo de 6. 🖤 / Com calculadora de alimentos, agente que lembra cada dose e mais presentes, enquanto durar o estoque. 🎁 / 📲 Comenta LIBIDO que eu te mando o link no direct. / #menopausa #libido #blacknovember #blackfriday"

### Grupo D, Shot da Libido sem promoção (1 anúncio)
- Id 1638220237816108. Início 31/08/2026. Plataformas: Facebook, Instagram, Audience Network, Messenger, Threads. Botão "Saiba mais" para https://www.shotdalibido.com.br/. Sem preço.
- Texto literal: "❤️‍🔥 E se o problema não for só a LIBIDO… mas também a falta de energia e lubrificação? / O Shot da Libido combina 10 ativos que dão suporte à disposição, à circulação e à saúde íntima feminina. / 🎥 No vídeo, eu te conto o que tem nessa fórmula e por que essa combinação pode fazer diferença na sua rotina. / 💬 Quer conhecer o Shot da Libido? Comente “LIBIDO” que eu te mando mais informações!"

### Grupo E, suplementos em geral, Colágeno e Ômega 3 (4 anúncios)
- Ids: 1584380816605970, 1582294046670876, 1069569402197417, 1596014178982266. Início entre 12/08/2026 e 19/08/2026 (o cartão mostra 12/08). Plataformas: Facebook, Instagram, Audience Network, Messenger, WhatsApp. Botão "Enviar mensagem pelo WhatsApp". Sem preço nem produto nomeado.
- Texto literal: "⚠️💊 Você compra qualquer SUPLEMENTO e espera ter resultado? / Nem todo colágeno ou ômega 3 entrega o que promete. Qualidade e concentração fazem diferença! 😳 / Na menopausa, o corpo precisa do suporte certo para realmente responder. ✨ / 💬 Quer sentir essa diferença? Comente “EU QUERO” ou clique no link da bio! 💜"

### Grupo F, conteúdo, vinagre de maçã (1 anúncio)
- Id 761532895846547. Início 05/06/2024. Plataforma: só Instagram. Botão "Acessar o perfil do Instagram". Não é produto da marca nem tem oferta.
- Texto: pergunta sobre benefícios do vinagre de maçã, lista de efeitos (glicose, colesterol, triglicerídeos, gordura no fígado, "ajuda a emagrecer" e outros), convite para o "Grupo VIP" por comentário "EU QUERO", assinatura de nutricionista/chef com CRN. Texto completo já transcrito em `produtos-da-marca.md`, seção 6.1 H.

### Agrupado por produto
- **Shot da Libido:** 22 anúncios (grupos A, B, C e D).
- **Suplementos sem produto nomeado (Colágeno/Ômega 3):** 4 (grupo E).
- **Conteúdo de vinagre de maçã:** 1 (grupo F).
- Nenhum anúncio ativo cita Kit ou Combo da loja.

### Agrupado por oferta
- **"Mais de 80% OFF, combo de 6" (R$99,90/pote, 5 presentes):** 15 anúncios (A e C; C sem preço).
- **"Mais de 50% OFF", 6/4/2 potes, com preços:** 6 anúncios (B).
- **Sem oferta de preço:** 6 anúncios (D, E, F).
- Destino por grupo: A não informa link no código; B vai para suplemento.menopausacancelada.com/v1; C para black.menopausacancelada.com/v1 (lista de espera, não compra); D para shotdalibido.com.br; E para WhatsApp; F para o perfil do Instagram. Os anúncios de 10/11 e 11/11 mandam o público a destinos diferentes.

### Pontos para olhar (só fato, sem parecer)
- O grupo A e o grupo C prometem "mais de 80% OFF"; o grupo B promete "mais de 50% OFF" para as mesmas condições de 6 potes. A conta de 82% só fecha com a base de R$3.336,00 mostrada no checkout.
- O destino do grupo C é uma página de espera com a frase "não compre nada até dia 09/11", data que já passou na leitura (11/11).
- O texto "queima de estoque" e "o preço volta ao normal" aparece em todos os grupos de oferta, sem data.

---

## 4. Limites desta leitura

- Instagram, perfil e stories: não verificados (login). Nada foi lido do que a marca divulga fora dos anúncios.
- Tela de preço dos checkouts de kit (Hubla) e etapa final de pagamento da loja: não lidas (dependem de dados pessoais).
- Plataformas por anúncio: vieram do código da página, e a atribuição de cada lista a um id é aproximada. O número total e os textos são do que a Biblioteca exibe.
- A Biblioteca mostra anúncios no momento da leitura; a lista muda ao longo do dia (novos de 11/11 já apareceram).
- Preço do catálogo no código da vitrine (1/2/3 Shots, kits) não foi visto na tela. Tratar como pista.

## 5. Fontes (todas lidas em 11/11/2026)

- https://www.facebook.com/ads/library/ (busca acima)
- https://www.shotdalibido.com.br e ?p=1570 (mesma página); /sl-v0/ respondeu 404
- https://menopausacancelada.com.br, /produtos/, /produtos/shot-da-libido/, /produtos/kit-menopausa-cancelada/, /produtos/combo-menopausa-cancelada/, /comprar/ (carrinho)
- https://suplemento.menopausacancelada.com/v1 (texto, código e imagem)
- https://black.menopausacancelada.com (redireciona para /v1)
- Checkouts Hubla: pay.hub.la/kYEYCZsYkqreu85dObCn, /ZfunYGyEgwr8BZilhIqF, /vguAXDJrzVvoqk8GEUpD, /uZEJ7PxpD6BotyLeBsYZ, /Nh4Hxm00gUMr5OOiCvQZ, /WtfzBtgdw8Wszz99hQmy, /TshH3jfJCPVEeBPzZTZ2
