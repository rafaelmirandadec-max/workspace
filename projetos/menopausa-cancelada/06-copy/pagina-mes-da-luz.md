# Página de captura "O mês da luz" (live Black November)

Data: 03/11/2026. Peça: página de captura (nome e WhatsApp) para a live. Escrita em cinco estágios de luz, para ser montada em HTML a partir de uma tela 100% preta.

## Cabeçalho

**Perfil e nível de consciência.** Mulheres de 45 a 60 anos que chegam pelo anúncio do fósforo ou pela base da marca (SUPOSIÇÃO do briefing, Bloco 2). Nível 2, consciente do problema, que é o predominante do público frio (briefing, Bloco 10, SUPOSIÇÃO). A base da marca, que já está no nível 4, vê a mesma página. **Decisão do Rafael em 03/11/2026: a página serve às duas audiências.** Risco registrado no parecer anterior (mistura de nível): o teste A/B deve medir frio e base em separado, por origem de tráfego (`[medir]`).

**Etapa do funil.** Captura para a live. A live é aula educativa e termina com apresentação de produtos da marca com desconto de Black, e a página diz isso.

**Big idea (uma só).** O mês da luz: em novembro a marca acende uma luz sobre o que o consultório diz. O dicionário entre "na minha boca" e "no prontuário" é a prova de que a luz serve para alguma coisa. Escuro é o mercado de novembro, luz é a aula.

**Ângulo.** Habilidade prática (saber dizer e entender na consulta), contada por uma página que muda de escuridão para claridade conforme a pessoa avança.

**Suposições declaradas.**
1. Nível 2 e dor "não ser levada a sério" como motor (briefing, PISTA).
2. A live é gratuita. **Confirmado pelo Rafael em 03/11/2026.** O HTML já diz "aula gratuita" nos estágios 4 e 5; o texto do anúncio ainda precisa da palavra.
3. O cartão de 3 perguntas e o glossário de dez termos existem ou serão feitos pela Giovanna e revistos por médico. Vêm da ideia 2 do arquivo `big-ideas-black-november.md`. Sem eles, o bloco "O que a pessoa leva" sai.
4. Ninguém usou "dicionário" ou "luz" em página de live do nicho. Não confirmei. O Rafael confere na Biblioteca de Anúncios da Meta.

**Marcadores de pendência desta peça.** Data da live, percentual de desconto e base do "de", CRN10, controlador dos dados, texto jurídico do consentimento, conferência médica dos três pares do dicionário, material que a pessoa leva. Lista completa no fim.

**Mudança em relação ao anúncio.** Tirei "Todo mundo grita Black" e o tom de crítica ao mercado. O parecer proíbe criticar lojas, e a página termina com oferta de Black, então ela não pode se declarar "anti-Black". A metáfora fica na luz, sem inimigo.

---

## Regras de montagem (valem para os cinco estágios)

- Todo o texto dos cinco estágios existe no HTML desde o carregamento (leitor de tela e versão sem JavaScript). O que muda é só a luz.
- Sem JavaScript, ou com "reduzir movimento" ativado no celular, a página abre já acesa e sem animação. O texto é o mesmo.
- Texto legível desde o primeiro segundo. Uma tela totalmente preta e vazia parece página quebrada e a pessoa sai. O estágio 1 tem texto visível em menos de 1 segundo.
- Link fixo, discreto, em todos os estágios: "Ir direto ao formulário". Ele leva ao estágio 5 e é o mesmo botão do fim, com a mesma ação.
- A luz nunca trava a rolagem depois do estágio 1, e o estágio 1 se resolve sozinho depois de 8 segundos sem toque.
- Troca de cor do texto no ponto em que o fundo passa da metade da luminosidade. Em nenhum momento do degradê o contraste fica abaixo de 4,5 para 1.
- Alvos de toque com no mínimo 48 px. Fonte de leitura de 18 px ou mais.
- Sem som. Sem vídeo automático além do fósforo do estágio 1, que pode ser animação curta de 2 segundos.
- URL, nome da página e eventos de pixel neutros: "luz" e o evento padrão de lead. Nenhum nome de evento ou parâmetro com "menopausa", "sintoma" ou condição de saúde (parecer, G3).
- Sem menu, sem link externo, exceto a política de privacidade no rodapé.
- O gesto "segurar" ficou de fora de propósito. Em muitos celulares, segurar abre menu do sistema, e o público de 45 a 60 anos tem fluência digital variável (SUPOSIÇÃO do briefing). Usei tocar e rolar.

---

## Estágio 1. Escuro

**Luz:** 0%. Fundo preto puro (#000000). Texto em cinza claro (#B5B5B5). Um fósforo desenhado no centro, apagado.

**Texto na tela (1 tela):**

> Novembro vem cheio de barulho.
>
> Aqui, o combinado é outro: acender uma luz.
>
> *Toque no fósforo.*

Link fixo no canto: *Ir direto ao formulário*

**O que a pessoa faz:** toca no fósforo. Se não tocar em 8 segundos, o fósforo se risca sozinho, devagar, e a página segue.

**Efeito de luz:** o fósforo risca, faísca por meio segundo e a chama acende no centro. A única coisa iluminada é um círculo pequeno em volta da chama, com raio de cerca de um quinto da largura da tela. O resto continua preto. Pulsa de leve a cada 3 segundos enquanto espera o toque.

**Variação de teste:** a primeira linha do texto troca pela headline A/B (ver seção própria).

---

## Estágio 2. Primeira luz

**Luz:** 25%. A chama cresce. O círculo de luz quente (#FFB347 com transparência) cobre cerca de metade da tela e o fundo passa a um marrom muito escuro (#140E08). O texto continua claro.

**Texto na tela (1 tela):**

> Mulher e consultório falam do mesmo corpo em línguas diferentes.
>
> Uma diz "calorão". O prontuário escreve outra palavra.
>
> Esta aula é um dicionário entre as duas.

**O que a pessoa faz:** rola a página. A luz sobe junto com a rolagem, de forma proporcional ao quanto a pessoa desceu.

**Efeito de luz:** o halo da chama se abre, e cada linha do texto "sai da sombra" quando entra no centro da tela. O texto fica apagado (cerca de 40% de opacidade) antes de chegar ao halo e nunca abaixo de 40%.

---

## Estágio 3. Luz de leitura (dicionário no meio da página)

**Luz:** 55%. Fundo âmbar escuro (#2A1B0C) clareando até #5A3A18. Os cartões do dicionário começam apagados.

**Texto na tela (2 telas):**

Tela 3a.

> Toque numa palavra. A tradução acende.

Os três pares, lado a lado, cada um com a coluna **Na minha boca** (acesa, legível) e a coluna **No prontuário** (apagada, com um ponto de luz no lugar do texto):

> **"Calorão"** → *Fogacho.* Dizer em que hora do dia acontece ajuda o médico a anotar.
>
> **"Neblina mental"** → *Queixa de memória e de concentração.* Dar um exemplo do dia a dia ajuda mais do que a palavra sozinha.
>
> **"Cansaço que não passa"** → *Fadiga.* Contar desde quando ajuda o médico a entender o que anotar.

`[A PREENCHER: os três pares são exemplos. A tradução de cada termo e a frase de ajuda dependem de conferência por médico antes de ir ao ar. Os termos da coluna esquerda vêm do vocabulário de busca do briefing (Bloco 2): calorão, neblina mental, cansaço.]`

Tela 3b.

> Exemplos de linguagem. Cada médico anota de um jeito.
>
> Eles não servem para saber o que alguém tem. Quem diz o que é cada coisa é o médico, na consulta.

**O que a pessoa faz:** toca em cada termo da esquerda. Quando toca nos três, aparece o convite: *Segue para ver o resto da aula.* (rolar).

**Efeito de luz:** cada toque acende a tradução como uma lamparina: o ponto de luz cresce até virar o texto, com meio segundo. O terceiro toque acende o ambiente inteiro de uma vez, e o fundo salta de âmbar para creme claro (#F2E6D0). Sem toque, os três pares ficam visíveis em versão estática, para quem rola direto (acessibilidade e quem não vê a dica).

---

## Estágio 4. Luz de sala (o que é a aula, o que ela não é, o que vem no fim)

**Luz:** 85%. Fundo creme (#F5EBD9). O texto passa a escuro (#2B1D0E). A chama vira ícone pequeno no canto.

**Texto na tela (2 telas):**

Tela 4a.

> **A aula**
>
> Ao vivo, com Giovanna Agostini, nutricionista, CRN10 [A PREENCHER após conferência no conselho].
>
> Data: [A PREENCHER: dia e horário desta live]. As lives da marca acontecem às terças, às 19h30. Confirmar se esta segue a cadência.
>
> É uma aula educativa. Ela explica palavras e sugere perguntas para levar à consulta.
>
> A aula não diagnostica, não interpreta exame e não troca o médico. A decisão sobre hormônio e tratamento é da consulta.

Tela 4b.

> **O que fica com quem assiste**
>
> Um cartão com 3 perguntas para qualquer consulta.
> Um glossário com dez termos, revisado por médico.
>
> `[A PREENCHER: confirmar que o cartão e o glossário existem, e a revisão médica.]`
>
> **E o que acontece no final, às claras**
>
> A parte de aula termina primeiro. Depois dela, a Giovanna apresenta produtos da marca, que são suplementos alimentares, com desconto de Black: [A PREENCHER: percentual e preço de referência do "de"]. Quem quiser, olha. Quem não quiser, já tem a aula.
>
> A aula não recomenda suplemento. Suplemento alimentar não é medicamento.

**O que a pessoa faz:** rola até o fim da tela 4b. Nenhum toque obrigatório.

**Efeito de luz:** a chama do estágio 3 recua para um ícone no canto e o creme se firma. Sem animação nova, para dar descanso a quem está lendo a parte jurídica.

---

## Estágio 5. Luz plena (captura)

**Luz:** 100%. Fundo creme-claro (#FFF8EC), texto escuro, campo com borda firme. Um raio de sol fino atravessa o topo da seção, em CSS, sem imagem pesada.

**Texto na tela (2 telas):**

Tela 5a.

> **A luz está acesa. Falta o seu nome.**
>
> Receba o link da aula no WhatsApp.

> Nome
> WhatsApp (com DDD)

Aviso acima do botão, em tamanho de leitura normal e não em letra miúda:

> Aula educativa. No final, apresentação de suplementos alimentares da marca com desconto de Black.

Caixa de consentimento, desmarcada por padrão, obrigatória para enviar:

> ☐ Autorizo [A PREENCHER: razão social e CNPJ de quem controla os dados, pendência 14 do briefing] a usar meu nome e meu WhatsApp para (1) me enviar o link e os lembretes desta aula e (2) me enviar mensagens comerciais com ofertas de produtos da marca, incluindo as da Black. Posso sair quando quiser respondendo SAIR. Não peço dado de saúde. Política de privacidade: [A PREENCHER: link].

`[A PREENCHER: revisão de advogado. O texto acima declara a finalidade comercial, como o parecer do revisor exige (G3). O advogado fecha a base legal, o prazo de guarda, o canal do titular e se o consentimento fica numa caixa só ou em duas. Opção B para o advogado avaliar: caixa 1 obrigatória (link e lembretes da aula) e caixa 2 opcional (ofertas comerciais). Na opção B, a pessoa que não marca a caixa 2 ainda assiste à aula e ouve a apresentação de produtos, mas não recebe oferta por mensagem.]`

Botão (único, a mesma ação do link fixo):

> **Quero participar da aula**

Tela 5b (rodapé).

> **Quem conduz:** Giovanna Agostini, nutricionista, CRN10 [A PREENCHER após conferência no conselho].
>
> Conteúdo educativo. Não substitui consulta médica. A aula não diagnostica nem interpreta exame. A decisão sobre hormônio e tratamento é do médico.
>
> A parte final da live apresenta suplementos alimentares da marca com desconto de Black. Suplemento alimentar não é medicamento e não trata nem previne doença.
>
> Menopausa Cancelada é o nome da marca. [A PREENCHER: razão social, CNPJ e endereço do controlador.] [A PREENCHER: link da política de privacidade.]

**O que a pessoa faz:** digita nome e WhatsApp, marca a caixa e toca no botão.

**Efeito de luz:** ao tocar no botão, o fósforo do estágio 1 aparece pequeno no meio da tela, acende e vira o ícone de confirmação (o "check" é a chama).

**Depois do envio (tela de confirmação):**

> Pronto. O link da aula chega no seu WhatsApp. [A PREENCHER: dia e horário.]
>
> Se não chegar, escreva para [A PREENCHER: canal oficial de suporte, pendência do briefing].

---

## Headlines alternativas para o teste A/B

Todas entram no lugar da primeira linha do estágio 1 (a de "Novembro vem cheio de barulho."), na tela preta. Cada uma segue um ângulo diferente.

**A. Curiosidade (tradução).**
> O que "calorão" vira no prontuário?

**B. Utilidade (habilidade).**
> Uma aula para falar e entender na consulta.

**C. Marca do mês (continuidade com o anúncio).**
> Em novembro, a gente acende uma luz.

**Ordem e motivo.**
1. **A.** A tela é preta e a pessoa só vê uma linha, então ela precisa de uma pergunta que gere o toque no fósforo. A pergunta fala de uma palavra e não de quem lê, o que respeita o parecer sobre sintoma dirigido. É também a ponte direta para o dicionário.
2. **B.** É a mais clara para o nível 2 e para o tráfego frio. Perde na curiosidade e se parece mais com outras páginas de aula.
3. **C.** Dá continuidade ao anúncio do fósforo e à fala da Giovanna, boa para a pessoa que vem do vídeo. Não diz o que a pessoa ganha, por isso fica por último. Pode ser o controle para medir se o encaixe com o anúncio pesa mais que a promessa.

A ordem é hipótese. Quem decide é o teste. Medir: toque no fósforo, chegada ao estágio 3, toque nos três pares, chegada ao estágio 5, envio (todos `[medir]`).

---

## Título e descrição de compartilhamento

**Título (até 60 caracteres):**
> Aula ao vivo: o dicionário da consulta de menopausa

Alternativa mais curta: *O que "calorão" vira no prontuário?*

**Descrição (até 150 caracteres):**
> Aula educativa com a nutricionista Giovanna Agostini, para mulheres de 45 a 60 anos. No final, produtos da marca com desconto de Black.

**Imagem de compartilhamento:** fundo preto, um fósforo aceso no centro, sem texto na imagem. Texto alternativo: "Fósforo aceso na escuridão." O fósforo substitui a foto da Giovanna enquanto o art. 74 da Resolução CFN 856/2026 estiver em aberto. **Atualização de 03/11/2026:** o Rafael mandou a foto da Giovanna e pediu a montagem na página. O HTML a usa no estágio 4 (retrato que acende), com marcador de pendência do advogado e chave `data-foto="nao"` para tirá-la. O risco do art. 74 continua aberto, e a foto é imagem da profissional numa página que termina em apresentação de suplementos da marca.

---

## Primeiro texto do anúncio (3 linhas, terceira pessoa)

> A mulher diz "calorão". O prontuário escreve outra palavra.
>
> Aula ao vivo com a nutricionista Giovanna Agostini, para mulheres de 45 a 60 anos: um dicionário entre o consultório e o dia a dia.
>
> Aula educativa em [A PREENCHER: data]. No final, produtos da marca com desconto de Black.

**Notas do anúncio.** Sem "você". "Calorão" aparece como palavra que alguém diz e não como sintoma de quem vê. Mesmo assim, é termo de saúde em anúncio da Meta, então o Rafael vê se o anúncio passa na aprovação antes de gastar. A terceira linha repete o que a página declara (a pessoa não chega à página sem saber da oferta). Se a live for paga, a linha 2 precisa dizer.

---

## Conformidade (skill `conformidade`, seção 9)

**Obrigatórios incluídos.** Identificação da profissional (nome, profissão, CRN10 como marcador). Aviso de aula educativa e de que não substitui consulta. Aviso de que a live termina com apresentação de produtos com desconto. Aviso de suplemento alimentar. Finalidade comercial no consentimento. Captura sem dado de saúde. A decisão sobre hormônio e tratamento é do médico.

**O que a página não tem.** Promessa de efeito de suplemento ou de alívio. Ponte para suplemento na parte educativa (o texto diz o contrário). "Dra." e Galisteu. LibidShot. Número de mulheres, "metade", "#1". Escassez, contador ou "acabou". Crítica a concorrente ou a loja. "Cancelada" fora do nome da marca. Sintoma dirigido a quem lê.

**Risco.** Vermelho enquanto as pendências 3, 4 e 16 e o consentimento estiverem abertos. A página só é honesta se a apresentação de produtos puder acontecer, e a apresentação com a Giovanna depende do art. 74 da Resolução CFN 856/2026 e de registro, rótulo e Anexo V. Se o advogado vetar a apresentação, o estágio 4b e o aviso do estágio 5 perdem o trecho do final, e a live passa a ser só aula. Sem as pendências, a página cai para laranja.

**Artigos citados.** CFN 856/2026 art. 74, LGPD art. 11 e CDC arts. 36, 37 e 49, todos tomados do briefing e do parecer do revisor. Não conferi nenhum no texto oficial nesta entrega.

**Quem aprova.** Advogado de direito sanitário e publicitário (consentimento, art. 74, apresentação de produtos). Médico revisor (os três pares e o glossário). Giovanna (CRN10, material da aula, data). Responsável técnico (registro e rótulo, se algum produto for citado). Rafael (separar ou não as audiências; confirmar que a live é gratuita).

---

## FATO, PISTA, SUPOSIÇÃO

**FATO (vem do pedido do Rafael ou do briefing).**
- Os ads usam a metáfora do fósforo no escuro e a fala "Todo mundo grita Black em novembro. Eu prefiro acender uma luz." (pedido do Rafael).
- As lives acontecem às terças às 19h30 (ads, informado pelo Rafael). A data desta live é `[A PREENCHER]`.
- CNPJ 47.019.967/0001-89 existe no rodapé das páginas da marca (briefing, VERIFICADO). Quem é o controlador dos dados é `[A PREENCHER]` (pendência 14).
- Calorão, neblina mental e cansaço aparecem no vocabulário de busca do público (briefing, Bloco 2, VERIFICADO como sugestão de busca, sem ranking nem frequência).

**PISTA.**
- Não ser levada a sério como dor principal (Ipsos/Bayer, pesquisa encomendada pela Bayer). A página não cita o número.
- A tradução entre "calorão" e "fogacho" aparece no vocabulário do briefing como termos de busca. A equivalência médica dos três pares não foi conferida.

**SUPOSIÇÃO.**
- Nível 2 para a maior parte de quem chega.
- A live é gratuita.
- A mecânica escura-clara aumenta o toque e a chegada ao formulário. Pode também aumentar a saída por parecer página quebrada. O teste mede.
- O cartão e o glossário existem ou serão feitos.
- O público de 45 a 60 anos usa o celular com conforto para tocar e rolar. Por isso o "segurar" saiu.
- "Dicionário" e "luz" não foram usados por outras páginas do nicho. Não conferi.
- Que o anúncio com "calorão" em terceira pessoa passa na aprovação da Meta.

---

## Pendências e o que a falta delas muda

- **Data e horário da live.** Sem eles, o estágio 4a, a tela de confirmação e o anúncio ficam sem data. Não publica.
- **Percentual de desconto e preço de referência histórico.** Sem eles, o estágio 4b e os avisos dizem só "desconto de Black". Isso é permitido. O "mais de 50%" das páginas anteriores não volta (parecer).
- **CRN10 conferido no conselho.** Sem ele, o texto sai como "Giovanna Agostini, nutricionista", sem número.
- **Texto jurídico do consentimento e controlador dos dados (pendência 14).** Trava de publicação. Sem advogado, a página não vai ao ar.
- **Pendências 3, 4 e 16 do briefing (art. 74, registro e rótulo, parecer geral).** Podem tirar a apresentação de produtos da live. Nesse caso, a página perde o aviso de oferta e a live passa a ser só aula, que é uma versão ainda mais simples da mesma página.
- **Conferência médica dos três pares do dicionário e do glossário.** Trava de publicação.
- **Cartão e glossário.** Se não existirem, o bloco do estágio 4b que lista o que a pessoa leva sai.
- **Live gratuita ou paga.** Muda o texto da página e do anúncio.
- **Decisão de audiência.** Se o Rafael separar frio e base, a página dos seguidores pode ganhar um parágrafo a mais sobre a apresentação. A do frio fica como está.
- **Loja.** Os defeitos da loja (produtos "Esgotado" com botão de compra, parcelas) precisam ser corrigidos antes de qualquer tráfego, como diz o Bloco 12. A página manda a pessoa à live, e a live leva à loja.
- **Pergunta 4 do briefing (o nome fica).** A página usa "Cancelada" só no rodapé como nome próprio.

---

## Resumo de retorno

1. **Entregue:** `/home/user/workspace/projetos/menopausa-cancelada/06-copy/pagina-mes-da-luz.md`. Cinco estágios de luz (escuro, primeira luz, luz de leitura com o dicionário, luz de sala, luz plena com o formulário), cada um com texto na tela, ação da pessoa e efeito de luz. Inclui consentimento comercial, botão e rodapé, três headlines em ângulos diferentes, texto de compartilhamento, texto do anúncio e regras de montagem.
2. **Decisões principais:** tirei o tom de crítica ao mercado do anúncio ("Todo mundo grita Black"), porque a página termina com oferta de Black e o parecer proíbe criticar lojas. A página declara a oferta duas vezes (estágio 4b e perto do botão). Usei tocar e rolar, sem "segurar". Há link fixo para o formulário e todo o texto existe sem JavaScript, para a tela preta não ser a causa de saída. O dicionário é o estágio 3 e fica no meio. Nenhum evento de pixel com condição de saúde.
3. **Pendências:** data, desconto e base do "de", CRN10, texto jurídico do consentimento, controlador dos dados, conferência médica dos três pares, existência do cartão e do glossário, se a live é gratuita. As pendências 3, 4 e 16 podem inviabilizar a apresentação de produtos com a Giovanna, e nesse caso a página fica só com a aula.
4. **Próxima fase:** enviar ao `revisor` (nicho regulado, sempre). Depois, o Rafael decide a audiência e a gratuidade, e o desenvolvedor monta o HTML a partir das regras de montagem.

---

## Alterações no HTML depois do parecer do revisor (03/11/2026)

- Consentimento em duas caixas (opção B): a primeira, obrigatória, cobre o link e os lembretes da aula; a segunda, opcional, cobre ofertas. A decisão final é do advogado.
- O formulário não confirma nada enquanto não houver destino de envio. Em modo de teste ele diz que nada foi enviado, e não põe dado na URL.
- Rótulo "Na minha boca" trocado por "Como se diz no dia a dia". "Eles não servem" trocado por "Esses exemplos não servem". "Segue para ver" trocado por "Role para ver".
- Foco visível por teclado no dicionário, letras de 18 px ou mais, traduções legíveis por leitor de tela, versão sem JavaScript e com "reduzir movimento" já acesa e legível.
- Título e descrição sem a palavra "menopausa", com "gratuita". CRN10 e data agora ficam dentro do marcador amarelo.
- Trechos da oferta marcados com `data-trecho="oferta"`, para tirar de uma vez se o advogado vetar a apresentação.
- Em aberto: abertura "Novembro vem cheio de barulho" (tom), og:image, pendências 3, 4 e 16, conferência médica dos pares.
