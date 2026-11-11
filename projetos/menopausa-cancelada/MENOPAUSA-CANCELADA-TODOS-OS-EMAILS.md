# Menopausa Cancelada: todos os e-mails e o passo a passo

Documento único para o gerente de marketing. Cada e-mail tem assunto, pré-cabeçalho, corpo, botão e rodapé, prontos para colar no SendGrid.

**Conteúdo**

- Parte 1 · Passo a passo para montar no SendGrid
- Parte 2 · E-mails de base: boas-vindas, newsletter, live e promoção dos 4 produtos
- Parte 3 · Black November: quem viu a live e não comprou
- Parte 4 · Black November: quem comprou 2 potes
- Parte 5 · Black November: quem comprou 4 potes
- Parte 6 · Black November: quem comprou 6 potes


---

## Parte 1 · Passo a passo para montar no SendGrid

Para o gerente de marketing. Tudo o que você precisa está nesta pasta. Cada arquivo tem os e-mails prontos (assunto, pré-cabeçalho, corpo, botão e rodapé). É só colar.

### 1. Antes do primeiro envio (uma vez)
- **Remetente:** use o e-mail autorizado da empresa, com o nome "Menopausa Cancelada".
- **Domínio autenticado:** em Settings > Sender Authentication, confira se o domínio de envio está verificado (SPF e DKIM). Se não estiver, autentique antes de enviar, senão os e-mails caem no spam.
- **Descadastro:** todo e-mail já traz `{{{unsubscribe}}}` no rodapé. Se o editor oferecer o módulo "Unsubscribe", use o módulo no lugar. Teste o link.
- **Lista de envio:** só quem marcou a caixa de e-mail no formulário do grupo.

### 2. Listas e segmentos
Crie estes segmentos no SendGrid:
- **Opt-in:** todos que marcaram a caixa de e-mail.
- **Comprou 2 potes**, **Comprou 4 potes**, **Comprou 6 potes:** importe os e-mails dos compradores a partir da Hubla, por pacote.
- **Viu a live e não comprou:** Opt-in menos os três segmentos de compra.

Quando alguém comprar, tire da sequência "não comprou" na hora e coloque no segmento do pacote. Os dados dos clientes ficam só no SendGrid e na Hubla.

### 3. O que montar e para quem
| Arquivo | Quem recebe | Quando |
|---|---|---|
| `E-MAILS-PRONTOS.md`, seção 1 (boas-vindas) | Quem acabou de entrar na lista | Ao entrar |
| `E-MAILS-PRONTOS.md`, seção 2 (newsletter 1) | Toda a lista Opt-in | Primeira quinzena |
| `E-MAILS-PRONTOS.md`, seções 4 a 7 | Opt-in, um produto por vez | Quando quiser promover |
| `E-MAILS-BLACK-NOVEMBER-NAO-COMPROU.md` | Viu a live e não comprou | Dia 1 logo após a live, depois dias 2, 3, 4 e 5 |
| `E-MAILS-BLACK-NOVEMBER-COMPROU-2-POTES.md` | Comprou 2 potes | Dias 1, 2, 4 e 6 após a compra |
| `E-MAILS-BLACK-NOVEMBER-COMPROU-4-POTES.md` | Comprou 4 potes | Dias 0, 3, 14, 30 e 90 após a compra |
| `E-MAILS-BLACK-NOVEMBER-COMPROU-6-POTES.md` | Comprou 6 potes | Dias 0, 3, 7, 30 e 150 após a compra |

Cada sequência tem a linha "Quando enviar" no topo do arquivo. Se o seu plano tem **Automation**, monte cada sequência como automação que dispara quando a pessoa entra no segmento. Se não tem, agende os envios um a um.

### 4. Antes de enviar cada e-mail
1. Mande um **teste** para um Gmail e um Outlook.
2. Clique no botão: ele deve abrir `https://link.menopausacancelada.com.br/of-api` (oferta da Black November). Não troque pelo link da loja nem de shotdalibido.com.br, que mostram preço diferente.
3. Confira o rodapé e o descadastro.
4. Veja no celular.

### 5. Depois de enviar
Olhe **cliques, descadastros e reclamações de spam**. A abertura é só tendência (o Apple Mail conta abertura sem leitura). Se descadastros ou reclamações subirem depois de uma campanha, pare e avise.

### 6. O que preciso que você confirme
- Até quando a oferta `of-api` vale e se é a mesma para quem já comprou.
- Como a cliente de 6 potes **acessa cada brinde** (calculadora, agente de nutrição, curso e consulta) e como agenda a consulta.
- Se existe condição de recompra. Hoje os e-mails só dizem "veja a condição de hoje".
- O preço da loja e o dos checkouts da campanha, que estão diferentes.
- A data da próxima live, para a sequência de live (seção 3 de `E-MAILS-PRONTOS.md`).

---

## Parte 2 · E-mails de base: boas-vindas, newsletter, live e promoção dos 4 produtos

Já preenchidos com os dados da empresa (rótulo e loja, lidos em 11/11/2026). Em cada e-mail: **assunto**, **pré-cabeçalho** e **corpo**. É só colar.

**O que já está preenchido:** marca, identificação da empresa no rodapé (razão social, CNPJ, cidade, CEP e SAC do rótulo), assinatura "Equipe Menopausa Cancelada", frequência (um e-mail a cada 15 dias), links das lojas e preços de hoje.
**O que você faz no SendGrid, uma vez:**
- Escolha como remetente o e-mail que já está autorizado lá.
- Em cada e-mail, o link de descadastro é o `{{{unsubscribe}}}` (se o editor oferecer o módulo "Unsubscribe", use o módulo no lugar).
**O que não dá para preencher e fica entre colchetes:** só a **live** (tema, data, hora, plataforma, apresentador e link). Sem esses dados ainda não existe a live.
**Preços:** são os da loja em 11/11/2026. Se mudarem, atualize antes de enviar. Não coloquei prazo de promoção, porque não há prazo conhecido.
**Envie só para quem marcou a caixa de e-mail** no formulário.

---

### 1. Boas-vindas
**Assunto:** Você está na lista da Menopausa Cancelada
**Pré-cabeçalho:** Conteúdos, avisos de live e novidades, a cada 15 dias.

Olá,

A cada 15 dias você vai receber aqui conteúdos sobre suplementos e alimentação, avisos das nossas lives e, de vez em quando, novidades e promoções dos produtos.

**[BOTÃO: Conhecer a loja]** → https://menopausacancelada.com.br

Para não perder nossos e-mails, adicione este endereço aos seus contatos.

Equipe Menopausa Cancelada

—
Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque marcou a caixa de autorização de e-mails ao se cadastrar no formulário do grupo.
Não quer mais receber? {{{unsubscribe}}}

---

### 2. Newsletter, edição 1: o que é e o que não é suplemento
**Assunto:** Suplemento alimentar: o que é e o que não é
**Pré-cabeçalho:** A definição de suplemento alimentar e três coisas que ele não é, com as palavras da Anvisa.

**Newsletter Menopausa Cancelada · Edição 1**

Olá,

Esta é a primeira edição. Em vez de começar por produto, começamos pela definição: o que a Anvisa, que regula esses produtos no Brasil, diz que é um suplemento alimentar.

As frases entre aspas vêm do documento *Suplementos alimentares: perguntas e respostas*, 7ª edição, da Anvisa (5 de abril de 2021). O link está no fim.

**O que é**

Na pergunta 18 ("O que são suplementos alimentares?"), a Anvisa responde que suplementos alimentares são:

> "produtos para ingestão oral, apresentados em formas farmacêuticas, destinados a suplementar a alimentação de indivíduos saudáveis com nutrientes, substâncias bioativas, enzimas ou probióticos, isolados ou combinados."

Na pergunta 20, o documento lista as formas: cápsulas, comprimidos, líquidos, pós, barras, géis, pastilhas, gomas de mascar, entre outras.

**O que não é**

*Não é medicamento.* A pergunta 7 explica a diferença pelo tipo de frase: "alegações medicamentosas descrevem o efeito da substância no tratamento, cura ou profilaxia da doença". Por isso, segundo a pergunta 106, a rotulagem de um suplemento não pode afirmar ou sugerir que o produto "possui finalidade medicamentosa ou terapêutica".

A pergunta 104 diz que as regras de rotulagem valem também para a propaganda, em qualquer veículo. Isto inclui este e-mail.

*Não é um substituto da alimentação.* Na pergunta 109, a Anvisa descreve "o papel dos suplementos, que é de complementar a alimentação e não de substituir a alimentação saudável".

*Não foi pensado para quem tem doença, sem orientação.* A pergunta 19 diz que o suplemento destina-se a pessoas saudáveis e recomenda que "pessoas com doenças ou outras situações específicas de saúde somente consumam suplementos alimentares sob orientação de profissional de saúde habilitado".

**Em uma linha**

Suplemento alimentar é um produto para complementar a alimentação de pessoas saudáveis; não trata doença e não faz as vezes de comida. Em caso de dúvida de saúde, a conversa é com um profissional de saúde.

**Sobre esta edição**

Ela não fala de nenhum produto da Menopausa Cancelada.

**[BOTÃO: Ler o documento da Anvisa]** → https://bibliotecadigital.anvisa.gov.br/jspui/bitstream/anvisa/217/1/Suplementos%20alimentares_perguntas%20e%20respostas_7ed_2021.pdf

Equipe Menopausa Cancelada

—
Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada.
Não quer mais receber? {{{unsubscribe}}}

---

### 3. Live: quatro e-mails
Preencha também: `[TEMA DA LIVE]` · `[DATA E HORA DA LIVE]` (horário de Brasília) · `[HORA DA LIVE]` · `[PLATAFORMA DA LIVE]` · `[NOME DO APRESENTADOR]` · `[LINK DA LIVE]`.
A linha de **aviso** vale só se a live **não** tiver oferta. Se tiver oferta, apague a linha.
Rodapé de todos os quatro: igual ao abaixo.

> Rodapé: Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com · Você recebeu este e-mail porque se inscreveu na live da Menopausa Cancelada. Não quer mais receber? {{{unsubscribe}}}

#### 3.1 Confirmação da inscrição (envie na hora)
**Assunto:** Sua inscrição na live da Menopausa Cancelada está confirmada
**Pré-cabeçalho:** Dia, horário e o link para entrar.

Olá,

Sua inscrição está confirmada.

**Live:** [TEMA DA LIVE]
**Quando:** [DATA E HORA DA LIVE]
**Onde:** [PLATAFORMA DA LIVE]
**Quem apresenta:** [NOME DO APRESENTADOR]

**[BOTÃO: Link da live]** → [LINK DA LIVE]

Guarde este e-mail: o link é o mesmo no dia. Você vai receber mensagens só sobre esta live: lembretes antes do horário e o aviso de que ela começou.

*Aviso (só se não houver oferta):* A live tem caráter informativo e não substitui consulta nem orientação de profissional de saúde.

Equipe Menopausa Cancelada

#### 3.2 Lembrete de 24 horas (só para quem se inscreveu com 24 h ou mais de antecedência)
**Assunto:** Lembrete: a live da Menopausa Cancelada é amanhã
**Pré-cabeçalho:** Dia, horário e o link para entrar.

Olá,

A live é amanhã.

**Live:** [TEMA DA LIVE]
**Quando:** [DATA E HORA DA LIVE]
**Onde:** [PLATAFORMA DA LIVE]

**[BOTÃO: Link da live]** → [LINK DA LIVE]

Você vai receber mais um lembrete 1 hora antes.

*Aviso (só se não houver oferta):* A live tem caráter informativo e não substitui consulta nem orientação de profissional de saúde.

Equipe Menopausa Cancelada

#### 3.3 Lembrete de 1 hora
**Assunto:** A live começa em 1 hora
**Pré-cabeçalho:** O link para entrar está neste e-mail.

Olá,

A live começa hoje às [HORA DA LIVE], horário de Brasília.

**[BOTÃO: Entrar na live]** → [LINK DA LIVE]

Tema: [TEMA DA LIVE]. Plataforma: [PLATAFORMA DA LIVE].

*Aviso (só se não houver oferta):* A live tem caráter informativo e não substitui consulta nem orientação de profissional de saúde.

Equipe Menopausa Cancelada

#### 3.4 Estamos ao vivo (envie na hora de começar)
**Assunto:** A live da Menopausa Cancelada começou
**Pré-cabeçalho:** Entre por aqui.

Olá,

A live começou.

**[BOTÃO: Entrar agora]** → [LINK DA LIVE]

*Aviso (só se não houver oferta):* A live tem caráter informativo e não substitui consulta nem orientação de profissional de saúde.

Equipe Menopausa Cancelada

---

### 4. Shot da Libido
**Assunto:** Shot da Libido: R$ 187,90 na loja
**Pré-cabeçalho:** Dois sabores, 30 doses por pote. Veja o preço de hoje.

Olá,

**Preço na loja hoje:** de R$ 229,00 por R$ 187,90 (ou 12x de R$ 19,33).

**O produto**
- Suplemento alimentar em pó, 30 doses de 5 g por pote.
- Sabores: Melancia e Morango com Maracujá.
- Como usar (rótulo): consumir 1 dose dissolvida em 200 ml de água, pela manhã após a refeição.
- Cada dose tem, entre outros itens: zinco (10 mg), vitamina B6 (1,3 mg), L-citrulina (900 mg), L-tirosina (263 mg), L-triptofano (100 mg), procianidinas (100 mg), trans-resveratrol (100 mg), coenzima Q10 (100 mg) e ácido hialurônico (80 mg).

**O que dizem os nutrientes**
- O zinco é um antioxidante que auxilia na proteção dos danos causados pelos radicais livres.
- O zinco auxilia no funcionamento do sistema imune.
- A vitamina B6 auxilia no funcionamento do sistema imune.
- A vitamina B6 auxilia no metabolismo energético.

**[BOTÃO: Ver o produto]** → https://menopausacancelada.com.br/produtos/shot-da-libido/

**Avisos**
Produto indicado para o grupo populacional acima de 19 anos. Este produto não é um medicamento. Não exceder a recomendação diária de consumo indicada na embalagem. Mantenha fora do alcance de crianças. Este produto não deve ser consumido por gestantes e lactantes. Pode conter derivados do leite e soja. Não contém glúten.

Equipe Menopausa Cancelada

—
Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### 5. Femme Healthy
**Assunto:** Femme Healthy: R$ 98,90 na loja
**Pré-cabeçalho:** Óleo de linhaça, prímula e borragem com vitamina E. Veja o preço de hoje.

Olá,

**Preço na loja hoje:** de R$ 129,00 por R$ 98,90 (ou 12x de R$ 10,17).

**O produto**
- Suplemento alimentar em cápsulas de óleo de linhaça, óleo de prímula e óleo de borragem, com fonte de vitamina E.
- Como usar (loja): 1 cápsula antes do almoço e outra antes do jantar, ou conforme orientação de médico ou nutricionista.
- A vitamina E é um antioxidante que auxilia na proteção dos danos causados pelos radicais livres.

**[BOTÃO: Ver o produto]** → https://menopausacancelada.com.br/produtos/femme-healthy/

**Avisos**
Este produto não é um medicamento. Não deve ser consumido por gestantes, lactantes e crianças. Não exceder a recomendação diária. Manter fora do alcance de crianças. Contém derivados de peixe e soja. Não contém glúten.

Equipe Menopausa Cancelada

—
Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### 6. Ômega 3
**Assunto:** Ômega 3: R$ 128,90 na loja
**Pré-cabeçalho:** Óleo de peixe em cápsulas, com EPA, DHA e vitamina E. Veja o preço de hoje.

Olá,

**Preço na loja hoje:** de R$ 139,00 por R$ 128,90 (ou 12x de R$ 13,26).

**O produto**
- Suplemento alimentar de óleo de peixe com vitamina E, em cápsulas.
- Fonte de ômega 3: cada porção (2 cápsulas) tem 660 mg de EPA e 440 mg de DHA.
- Como usar (loja): 1 cápsula antes do almoço e outra antes do jantar, ou conforme orientação de médico ou nutricionista.
- A vitamina E é um antioxidante que auxilia na proteção dos danos causados pelos radicais livres.

**[BOTÃO: Ver o produto]** → https://menopausacancelada.com.br/produtos/omega-3/

**Avisos**
Este produto não é um medicamento. Não deve ser consumido por gestantes, lactantes e crianças. Não exceder a recomendação diária de consumo indicada na embalagem. Manter fora do alcance de crianças. Contém derivados de peixe. Pode conter derivados de soja e leite. Não contém glúten.

Equipe Menopausa Cancelada

—
Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### 7. Colágeno
**Assunto:** Colágeno: R$ 118,90 na loja
**Pré-cabeçalho:** Colágeno hidrolisado com vitamina C, biotina, zinco e mais. Veja o preço de hoje.

Olá,

**Preço na loja hoje:** de R$ 139,00 por R$ 118,90 (ou 12x de R$ 12,23).

**O produto**
- Suplemento alimentar em pó, 30 porções de 5 g. Sabores: Uva, Tangerina e Morango.
- Como usar (loja): dissolver 1 scoop (5 g) em 200 ml de água antes de dormir, ou conforme orientação de médico ou nutricionista.
- Cada porção tem: peptídeos de colágeno hidrolisado, vitamina C (200 mg), biotina (45 mcg), ácido pantotênico (5,5 mg), zinco (15 mg), ácido hialurônico (50 mg) e silício (15 mg).

**O que dizem os nutrientes**
- A vitamina C auxilia na formação do colágeno.
- A biotina contribui para a manutenção do cabelo e da pele.
- O zinco contribui para a manutenção do cabelo, da pele e das unhas.
- O ácido pantotênico auxilia no metabolismo energético.

**[BOTÃO: Ver o produto]** → https://menopausacancelada.com.br/produtos/colageno/

**Avisos**
Produto indicado para maiores de 19 anos. Gestantes, lactantes e crianças devem consultar o médico antes do consumo. Pessoas com enfermidades ou que fazem uso de medicamentos devem buscar orientação profissional. Produto não deve ser consumido por pessoas alérgicas aos componentes da fórmula. Este produto não é um medicamento. Contém derivados de peixe. Pode conter derivados de soja e leite. Não contém glúten.

Equipe Menopausa Cancelada

—
Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### 8. Black November: oferta do Shot da Libido na live
Preencha só: `[DATA E HORA DA LIVE]` e `[LINK DA LIVE]`.

**Assunto:** Black November: Shot da Libido a partir de R$ 99,90 o pote
**Pré-cabeçalho:** Condições só durante a live. Sedex grátis em todas as opções.

Olá,

Na live de [DATA E HORA DA LIVE] abrimos as condições da Black November para o Shot da Libido. Valem durante a live e enquanto durar o estoque.

**6 potes:** R$ 99,90 cada (total R$ 599,40)
**4 potes:** R$ 119,90 cada (total R$ 479,60)
**2 potes:** R$ 139,90 cada (total R$ 279,80)
Sedex grátis em todas as opções.

Quem leva os 6 potes ganha de brinde o Femme Healthy, a calculadora de alimentos, o agente de nutrição no WhatsApp e o curso Libido & Lubrificação. E mais uma consulta de R$ 1.000 para o seu marido na AndroClinic, de cortesia.

Se você comprasse separadamente os 6 potes, os brindes e os bônus, a soma chegaria a **R$ 3.336,00**. Na live, você leva tudo por **R$ 599,40**.

**[BOTÃO: Garantir minha condição]** → https://link.menopausacancelada.com.br/of-api
**[BOTÃO: Entrar na live]** → [LINK DA LIVE]

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Equipe Menopausa Cancelada

—
Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

## Parte 3 · Black November: quem viu a live e não comprou

Quando enviar: E-mail 1 logo depois da live · E-mail 2 no dia seguinte · E-mail 3 no dia 3 · E-mail 4 no dia 4 · E-mail 5 no dia 5.

---

### E-mail 1 · logo depois da live

**Assunto:** A condição da live, em poucas linhas
**Pré-cabeçalho:** 6, 4 ou 2 potes. Sedex grátis em todas.

Olá,

Você viu a live. Aqui está a condição da Black November do Shot da Libido, sem rodeio:

6 potes: R$ 99,90 cada (R$ 599,40 à vista), com brindes
4 potes: R$ 119,90 cada (R$ 479,60)
2 potes: R$ 139,90 cada (R$ 279,80)

Sedex grátis em todas.

É queima de estoque. Quando acabar, acabou, e o preço volta ao normal.

Escolha o pacote e finalize em poucos minutos.

**[BOTÃO: Quero ver os pacotes]** → https://link.menopausacancelada.com.br/of-api

Equipe Menopausa Cancelada

P.S. Nos próximos dias você recebe o que tem em cada dose, o que vem nos brindes e a conta por dia.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 2 · dia seguinte

**Assunto:** O que tem em cada dose
**Pré-cabeçalho:** Sem letra miúda: a lista completa e como usar.

Olá,

O Shot da Libido é um suplemento em pó. Cada pote tem 30 doses de 5 g, nos sabores Melancia e Morango com Maracujá.

Em cada dose:
zinco 10 mg, vitamina B6 1,3 mg, L-citrulina 900 mg, L-tirosina 263 mg, L-triptofano 100 mg, procianidinas 100 mg, trans-resveratrol 100 mg, coenzima Q10 100 mg e ácido hialurônico 80 mg.

O zinco é um antioxidante que auxilia na proteção dos danos causados pelos radicais livres. A vitamina B6 auxilia no metabolismo energético.

Como usar: 1 dose dissolvida em 200 ml de água, pela manhã, após a refeição.

**[BOTÃO: Quero o meu Shot]** → https://link.menopausacancelada.com.br/of-api

Equipe Menopausa Cancelada

P.S. A condição da live vale enquanto durar o estoque.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 3 · dia 3

**Assunto:** R$ 3.336,00 por R$ 599,40
**Pré-cabeçalho:** O que vem junto quando você leva 6 potes.

Olá,

Quem leva 6 potes ganha de brinde:

Femme Healthy
Calculadora de alimentos
Agente de nutrição no WhatsApp
Curso Libido & Lubrificação
Uma consulta de R$ 1.000 para o seu marido na AndroClinic, de cortesia

Somando os 6 potes, os brindes e os bônus comprados separadamente, dá R$ 3.336,00.

Na oferta da Black November, tudo isso sai por R$ 599,40 à vista.

Os brindes só vêm no pacote de 6 potes. Nos de 4 e 2, não.

**[BOTÃO: Quero o pacote de 6 com brindes]** → https://link.menopausacancelada.com.br/of-api

Equipe Menopausa Cancelada

P.S. Sedex grátis, como em todos os pacotes.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 4 · dia 4

**Assunto:** A conta por dose
**Pré-cabeçalho:** Quanto custa cada dia, em cada pacote.

Olá,

Uma dose por dia. Faça a conta:

6 potes = 180 doses = R$ 3,33 por dose
4 potes = 120 doses = R$ 4,00 por dose
2 potes = 60 doses = R$ 4,66 por dose

Quanto mais potes, menos cada dia custa, e só o pacote de 6 traz os brindes.

Em dúvida? Comece pelo de 2 potes. Já é a condição da live, com Sedex grátis.

Mas se você quer 180 doses em casa, o de 6 tem a menor conta e é o único com brindes.

**[BOTÃO: Escolher meu pacote]** → https://link.menopausacancelada.com.br/of-api

Equipe Menopausa Cancelada

P.S. O preço da live volta ao normal quando o estoque acabar.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 5 · dia 5

**Assunto:** Quando acabar, acabou
**Pré-cabeçalho:** Última chamada da Black November.

Olá,

Esta é a última chamada da Black November do Shot da Libido.

Não existe data marcada. A condição vale enquanto durar o estoque. Quando ele acabar, o preço volta ao normal.

Para decidir rápido:

6 potes por R$ 599,40, com brindes
4 potes por R$ 479,60
2 potes por R$ 279,80

Sedex grátis em todos.

Você já viu o que tem em cada dose, como usar e a conta por dia. Falta só escolher.

**[BOTÃO: Garantir a minha condição]** → https://link.menopausacancelada.com.br/of-api

Equipe Menopausa Cancelada

P.S. Quem deixa para depois corre o risco de encontrar só o preço normal.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

## Parte 4 · Black November: quem comprou 2 potes

Quando enviar: E-mail 1 no dia da compra · E-mail 2 no dia 2 · E-mail 3 no dia 4 · E-mail 4 no dia 6.

---

### E-mail 1 · dia da compra

**Assunto:** Obrigada pela compra
**Pré-cabeçalho:** Como usar o seu Shot, passo a passo.

Olá,

Obrigada por escolher o Shot da Libido. Seu pedido de 2 potes está a caminho, com Sedex grátis.

Quando chegar, é simples:

1. Meça 1 dose (5 g).
2. Dissolva em 200 ml de água.
3. Tome pela manhã, após a refeição.

Cada pote tem 30 doses, nos sabores Melancia e Morango com Maracujá.

O Shot é de uso diário. O que conta é a rotina: uma dose por dia, todos os dias.

**[BOTÃO: Ver o meu pedido]** → https://link.menopausacancelada.com.br/of-api

Equipe Menopausa Cancelada

P.S. Guarde o pote ao abrigo da luz, do calor e da umidade.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 2 · dia 2

**Assunto:** Uma dose, todo dia
**Pré-cabeçalho:** Como encaixar o Shot na sua manhã.

Olá,

O segredo do Shot é não pular dias.

Um jeito fácil: deixe o pote à vista, perto do café da manhã. Termine a refeição, dissolva a dose em 200 ml de água e tome.

Depois de aberto, mantenha a embalagem bem fechada, em local seco e arejado, e consuma em até 60 dias.

Seus 2 potes somam 60 doses, o que cobre justamente 60 dias de uso diário.

**[BOTÃO: Ver o meu pedido]** → https://link.menopausacancelada.com.br/of-api

Equipe Menopausa Cancelada

P.S. Escolha o sabor do dia: Melancia ou Morango com Maracujá.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 3 · dia 4

**Assunto:** Seus 2 potes acabam em 60 dias
**Pré-cabeçalho:** A conta para não ficar sem.

Olá,

Uma dose por dia: seus 2 potes duram 60 dias. Depois, o pote vazio.

A conta por dose:

2 potes = 60 doses = R$ 4,66 por dose
4 potes = 120 doses = R$ 4,00 por dose

Completar agora com 4 potes (R$ 119,90 cada, R$ 479,60 no total, Sedex grátis) sai mais barato por dia e evita a pausa no meio da rotina.

Você compra pelo mesmo link, enquanto durar o estoque.

**[BOTÃO: Quero completar com 4 potes]** → https://link.menopausacancelada.com.br/of-api

Equipe Menopausa Cancelada

P.S. Não ficar sem é o que mantém o hábito de pé.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 4 · dia 6

**Assunto:** Última chamada para completar
**Pré-cabeçalho:** Vale enquanto durar o estoque.

Olá,

Esta é a última chamada para completar o seu Shot da Libido.

A condição vale enquanto durar o estoque. Não há data marcada.

4 potes: R$ 119,90 cada (R$ 479,60), R$ 4,00 por dose
6 potes: R$ 99,90 cada (R$ 599,40), R$ 3,33 por dose, com brindes

Os brindes: Femme Healthy, calculadora de alimentos, agente de nutrição no WhatsApp, curso e uma consulta de R$ 1.000 na AndroClinic para o seu marido.

Sedex grátis nas duas opções. Os brindes só vêm no pacote de 6.

**[BOTÃO: Completar o meu Shot]** → https://link.menopausacancelada.com.br/of-api

Equipe Menopausa Cancelada

P.S. Quando o estoque acabar, a condição acaba junto.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

## Parte 5 · Black November: quem comprou 4 potes

Quando enviar: E-mail 1 no dia da compra · E-mail 2 no dia 3 · E-mail 3 no dia 14 · E-mail 4 no dia 30 · E-mail 5 no dia 90.

---

### E-mail 1 · dia da compra

**Assunto:** Obrigada pela sua escolha
**Pré-cabeçalho:** Seus 4 potes, como usar e como guardar.

Olá,

Obrigada por escolher o Shot da Libido. Seu pedido de 4 potes está a caminho, com Sedex grátis.

Quando chegar, é simples:

1. Meça 1 dose.
2. Dissolva em 200 ml de água.
3. Tome pela manhã, após a refeição.

Seus 4 potes somam 120 doses: 4 meses de uso diário. Guarde os potes fechados, ao abrigo da luz, do calor e da umidade, e abra um de cada vez.

Equipe Menopausa Cancelada

P.S. Uma dose por dia, todos os dias: é isso que faz os 4 meses valerem.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 2 · dia 3

**Assunto:** Onde deixar o seu pote
**Pré-cabeçalho:** Um detalhe que ajuda a não pular dias.

Olá,

O segredo do Shot é não pular dias, e o lugar do pote faz diferença.

Deixe-o à vista, perto do café da manhã. Termine a refeição, dissolva a dose em 200 ml de água e tome, sempre no mesmo horário.

Depois de aberto, mantenha o pote bem fechado, em local seco e arejado, e consuma em até 60 dias. Os outros potes ficam lacrados, ao abrigo da luz, do calor e da umidade, até chegar a vez deles.

Um pote por vez, uma dose por dia.

Equipe Menopausa Cancelada

P.S. Você tem 4 potes: o hábito de agora vai levar você até o fim.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 3 · dia 14

**Assunto:** Conheça o Colágeno
**Pré-cabeçalho:** Para tomar à noite, com o Shot de manhã.

Olá,

Com o Shot já na sua manhã, conheça o Colágeno da loja: pó em 30 porções de 5 g, nos sabores Uva, Tangerina e Morango.

Em cada porção: peptídeos de colágeno hidrolisado, vitamina C, biotina, ácido pantotênico, zinco, ácido hialurônico e silício.

A vitamina C auxilia na formação do colágeno. A biotina contribui para a manutenção do cabelo e da pele. O zinco contribui para a manutenção do cabelo, da pele e das unhas.

Como usar: dissolva 1 scoop (5 g) em 200 ml de água antes de dormir, ou conforme orientação de médico ou nutricionista.

**[BOTÃO: Veja o preço de hoje]** → https://menopausacancelada.com.br/produtos/colageno/

Equipe Menopausa Cancelada

P.S. O Shot é de manhã e o Colágeno é à noite: cada um no seu horário.

Colágeno: produto indicado para maiores de 19 anos. Gestantes, lactantes e crianças devem consultar o médico antes do consumo. Pessoas com enfermidades ou que fazem uso de medicamentos devem buscar orientação profissional. Produto não deve ser consumido por pessoas alérgicas aos componentes da fórmula. Não é um medicamento. Contém derivados de peixe. Pode conter derivados de soja e leite. Não contém glúten.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 4 · dia 30

**Assunto:** Um mês de constância
**Pré-cabeçalho:** Você já passou da parte mais difícil.

Olá,

Um mês de uso diário. O mais difícil de qualquer hábito é chegar até aqui. Faltam 3 meses.

Para manter o ritmo, deixe o pote à vista, perto do café da manhã.

Na loja, dois complementares, cada um com horário próprio: 1 cápsula antes do almoço e outra antes do jantar, ou conforme orientação de médico ou nutricionista.

Ômega 3: fonte de ômega 3, com 660 mg de EPA e 440 mg de DHA por porção (2 cápsulas).

**[BOTÃO: Conhecer o Ômega 3]** → https://menopausacancelada.com.br/produtos/omega-3/

Femme Healthy: óleo de linhaça, prímula e borragem com vitamina E. A vitamina E é um antioxidante que auxilia na proteção dos danos causados pelos radicais livres.

**[BOTÃO: Conhecer o Femme Healthy]** → https://menopausacancelada.com.br/produtos/femme-healthy/

Equipe Menopausa Cancelada

P.S. Abra o pote seguinte só quando o anterior acabar.

Ômega 3: este produto não é um medicamento. Não deve ser consumido por gestantes, lactantes e crianças. Não exceder a recomendação diária de consumo indicada na embalagem. Manter fora do alcance de crianças. Contém derivados de peixe. Pode conter derivados de soja e leite. Não contém glúten.

Femme Healthy: este produto não é um medicamento. Não deve ser consumido por gestantes, lactantes e crianças. Não exceder a recomendação diária. Manter fora do alcance de crianças. Contém derivados de peixe e soja. Não contém glúten.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 5 · dia 90

**Assunto:** Faltam cerca de 30 doses
**Pré-cabeçalho:** Hora de pensar na reposição.

Olá,

Você chegou ao último pote. Faltam cerca de 30 doses, o equivalente a mais um mês de uso diário.

Quem manteve o hábito por três meses sabe o valor de não interromper. Para não ficar sem, vale pensar na reposição agora, com calma, antes de o pote acabar.

Veja a condição de hoje na loja:

**[BOTÃO: Veja a condição de hoje]** → https://menopausacancelada.com.br/produtos/shot-da-libido/

Equipe Menopausa Cancelada

P.S. Obrigada por ter ficado com a gente até aqui.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

## Parte 6 · Black November: quem comprou 6 potes

Quando enviar: E-mail 1 no dia da compra · E-mail 2 no dia 3 · E-mail 3 no dia 7 · E-mail 4 no dia 30 · E-mail 5 no dia 150.

---

### E-mail 1 · dia da compra

**Assunto:** Obrigada pela sua escolha
**Pré-cabeçalho:** Seus 6 potes, como usar e como guardar.

Olá,

Obrigada por escolher o Shot da Libido. Seu pedido de 6 potes está a caminho, com Sedex grátis e com os seus brindes.

Quando chegar, é simples:

1. Meça 1 dose.
2. Dissolva em 200 ml de água.
3. Tome pela manhã, após a refeição.

Seus 6 potes somam 180 doses: 6 meses de uso diário. Guarde os potes fechados, ao abrigo da luz, do calor e da umidade, e abra um de cada vez.

Equipe Menopausa Cancelada

P.S. Nos próximos dias, vou explicar cada um dos seus brindes.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 2 · dia 3

**Assunto:** Os seus brindes
**Pré-cabeçalho:** O que veio junto com os seus 6 potes.

Olá,

Quem leva 6 potes recebe cinco brindes. Os seus são:

Femme Healthy: suplemento alimentar em cápsulas.
Calculadora de alimentos.
Agente de nutrição no WhatsApp.
Curso.
Uma consulta de R$ 1.000 para o seu marido na AndroClinic.

Eles são seus: use todos.

Ficou com dúvida para acessar algum deles? Escreva para o nosso SAC, em menofarma@gmail.com, e a nossa equipe ajuda você.

Equipe Menopausa Cancelada

P.S. Na próxima semana, vou explicar como usar o Femme Healthy.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 3 · dia 7

**Assunto:** Como usar o Femme Healthy
**Pré-cabeçalho:** O brinde em cápsulas, passo a passo.

Olá,

O Femme Healthy, que veio de brinde, é um suplemento alimentar em cápsulas.

Como usar: 1 cápsula antes do almoço e outra antes do jantar, ou conforme orientação de médico ou nutricionista.

A vitamina E é um antioxidante que auxilia na proteção dos danos causados pelos radicais livres.

Atenção: contém derivados de peixe e soja. Não deve ser consumido por gestantes, lactantes e crianças. Conserve ao abrigo da luz, calor e umidade.

Ele não substitui o Shot. Cada um tem o seu horário, então os dois cabem na mesma rotina.

Equipe Menopausa Cancelada

P.S. Dúvida sobre o Femme? Fale com o SAC: menofarma@gmail.com.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 4 · dia 30

**Assunto:** Um mês de constância
**Pré-cabeçalho:** Você já passou da parte mais difícil.

Olá,

Um mês de uso diário. Parabéns: o mais difícil de qualquer hábito é chegar até aqui.

Para manter o ritmo, deixe o pote à vista, perto do café da manhã. Termine a refeição, dissolva a dose em 200 ml de água e tome.

Dois lembretes:

1. Abra o pote seguinte só quando o anterior acabar.
2. Depois de aberto, mantenha o pote bem fechado, em local seco e arejado, e consuma em até 60 dias.

Faltam 5 meses. Uma dose por dia, todos os dias.

Equipe Menopausa Cancelada

P.S. Os brindes já estão em uso? Se algum acesso travou, fale com o SAC: menofarma@gmail.com.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}

---

### E-mail 5 · dia 150

**Assunto:** Faltam cerca de 30 doses
**Pré-cabeçalho:** Hora de pensar na reposição.

Olá,

Você chegou ao último pote. Faltam cerca de 30 doses, o equivalente a mais um mês de uso diário.

Quem manteve o hábito por cinco meses sabe o valor de não interromper. Para não ficar sem, vale pensar na reposição agora, com calma, antes de o pote acabar.

Veja a condição de hoje na loja:

**[BOTÃO: Ver a condição de hoje]** → https://menopausacancelada.com.br/produtos/shot-da-libido/

Equipe Menopausa Cancelada

P.S. Obrigada por ter ficado com a gente até aqui.

Suplemento alimentar. Não é um medicamento. Indicado para maiores de 19 anos. Não deve ser consumido por gestantes e lactantes.

Menopausa Cancelada LTDA · CNPJ 47.019.967/0001-89 · Florianópolis/SC · CEP 88.137-100 · SAC: menofarma@gmail.com
Você recebeu este e-mail porque autorizou o envio de e-mails da Menopausa Cancelada. Este é um e-mail comercial.
Não quer mais receber? {{{unsubscribe}}}
