# Parecer: página de captura "O mês da luz"

Peças revisadas: `06-copy/pagina-mes-da-luz.md` (texto) e `06-copy/pagina-mes-da-luz/index.html` (página montada, é o que vai ao ar).
Fontes cruzadas: `00-briefing.md` (Bloco 13, tabela "O que NÃO pode ser dito", pendências 1 a 16), parecer anterior `revisoes/big-ideas-black-november-2026-11-03.md` (G1 a G4), skill `conformidade`.
Revisor: independente, 03/11/2026.
Além da leitura, abri o HTML num navegador de teste (Chromium sem cabeça) em tela de celular (390 x 844) para medir contraste, alvos de toque, foco, rolagem, JavaScript desligado e "reduzir movimento".

## Veredito: BLOQUEADO para publicar

O texto está bem construído e resolve G2 e G4. G3 está resolvido no texto, mas não no que o HTML faz com os dados. G1 continua aberto, como tem de ficar, porque depende de advogado. Além disso, o HTML tem três defeitos próprios que o texto não previa: o formulário não envia nada e mostra "Pronto" mesmo assim; sem JavaScript, o envio põe nome e WhatsApp na barra de endereço; e os botões do dicionário ficam sem indicação de foco no teclado.

Legenda: **bloqueio** impede publicar; **aviso** enfraquece; **ok** conferido.

---

## 1. Os quatro bloqueios do parecer anterior

**G1. Ponte para o produto depende de art. 74, registro/rótulo e parecer (pendências 3, 4 e 16). BLOQUEIO mantido.**
O texto (`.md`) trata do jeito certo: lista 3, 4 e 16 nas pendências, pinta o risco de vermelho e diz que, se o advogado vetar, os trechos 4b e o aviso do estágio 5 saem. Mas a página continua anunciando que a Giovanna apresenta produtos da marca com desconto, e usa o nome dela no título de compartilhamento, na descrição e em dois blocos da página. Isso é exatamente o que a pendência 3 trava ("qualquer peça de suplemento com a imagem da Giovanna"). Nenhuma das três pendências tem marcador no HTML, então um desenvolvedor que preencher os amarelos e publicar não recebe nenhum sinal de que falta o parecer. Os trechos que precisam sair se a apresentação for vetada estão espalhados e sem comentário que os identifique: `meta description`, `og:description`, aviso do formulário, bloco "E o que acontece no final" do estágio 4, item (2) do consentimento ("incluindo as da Black"), segundo parágrafo do rodapé. Correção sugerida: marcar esses seis pontos no HTML (comentário e marcador visível de pendência 3/4/16) para que saiam juntos.

**G2. Página não avisa que a live termina em venda. OK, resolvido.**
A oferta aparece declarada em cinco lugares: descrição da página, aviso em corpo 19 px logo acima do botão, bloco do estágio 4b, consentimento e rodapé. O aviso diz "suplementos alimentares da marca com desconto de Black" e "Suplemento alimentar não é medicamento". Não há promessa de efeito. Ressalva: a declaração só chega depois do dicionário (estágio 4); quem usa o link fixo vai direto ao formulário, onde o aviso está. Ok nos dois caminhos.

**G3. Consentimento e dado de saúde. Parcialmente resolvido; BLOQUEIO de publicação por consentimento e envio (ver B1 e B2).**
Resolvido: a finalidade comercial está dita no consentimento; a caixa vem desmarcada; só se pede nome e WhatsApp; não há pixel nem script de terceiros na página (zero requisições externas no teste); o comentário do código manda usar só o evento padrão de lead. Não resolvido: texto jurídico, controlador, política (todos com marcador amarelo) e o amarrar das duas finalidades numa caixa obrigatória.

**G4. "Pode subir amanhã". OK, resolvido.**
O texto declara risco vermelho, diz "Não publica" para data, consentimento, médico e controlador, e não repete a aposta.

---

## 2. Bloqueios próprios desta entrega

**B1. O formulário não envia nada e a página diz que enviou.**
Trecho (HTML, rotina de envio): `// ENVIO: ligar aqui ao sistema de captura...` seguido de `areaForm.hidden = true` e da tela "Pronto. O link da aula chega no seu WhatsApp."
Motivo: a pessoa deixa nome e telefone, recebe a promessa de que o link chega, e o dado vai para lugar nenhum. É promessa que a operação não sustenta (Protocolo, seção 2, caso 3) e engana quem se cadastra (CDC, art. 37, não conferido no texto oficial). Para quem testa a página, ela parece pronta, e a única pista de que não está é um comentário de código.
Segundo defeito no mesmo ponto, testado: com JavaScript desligado, o formulário não tem `action` nem `method`, então o envio recarrega a página com `?nome=Maria&whatsapp=11999990000&consentimento=on` na barra de endereço. Nome e telefone ficam no histórico do navegador, no registro do servidor e em qualquer ferramenta de análise que leia a URL (LGPD, segurança e minimização; art. 6º não conferido no texto oficial).
Correção sugerida (sem reescrever a peça): só mostrar a confirmação depois da resposta de um servidor; definir `action` e `method="post"` para o caso sem JavaScript; enquanto não houver destino, a página não sobe.

**B2. Consentimento único, obrigatório e amarrado ao link da aula.**
Trecho: caixa única "Autorizo [...] (1) me enviar o link e os lembretes desta aula e (2) me enviar mensagens comerciais com ofertas [...]", obrigatória; mensagem de erro "Para receber o link, marque a autorização."
Motivo: a pessoa só recebe o link se aceitar mensagem comercial. A LGPD exige consentimento para finalidades determinadas e livre (art. 5º, XII, e art. 8º, §4º; li o art. 8º, §4º só reproduzido em fontes secundárias, e o Planalto bloqueou a abertura do texto oficial; o art. 9º, §3º não consegui conferir). O texto do `.md` já traz a opção B (duas caixas, a segunda opcional) para o advogado; o HTML implementou só a opção A. Este parecer recomenda a opção B como ponto de partida, mas a decisão é do advogado. Também: a mensagem de erro repete a amarração e deveria acompanhar a decisão.
Marcadores presentes: controlador, política de privacidade, texto revisto por advogado. Sem eles, bloqueio.

**B3. Conferência médica dos três pares, e a frase "revisado por médico".**
A pendência está marcada no HTML (um marcador amarelo no estágio 3) e no `.md`. Enquanto não houver conferência por médico, é trava. Detalhe de cada par na seção 4.
Ponto separado: o estágio 4 afirma como fato "Um glossário com dez termos, revisado por médico." O marcador de confirmação está num parágrafo à parte; quem apagar o marcador porque o glossário existe, mas sem revisão feita, deixa no ar uma credencial médica anônima que não existe. Ver aviso A6.

**B4. Identificação da profissional e dados do controlador (pendências 2 e 14).**
Os marcadores existem (CRN10 duas vezes, razão social/CNPJ, política). Sem CRN10 conferido, o texto deve sair como "Giovanna Agostini, nutricionista" (briefing, Bloco 13). É trava de publicação, não defeito. Ver aviso A13 sobre a palavra "CRN10" ficar fora do marcador.

---

## 3. Itens pedidos, um por um

**Conformidade (CFN, Anvisa, CDC, LGPD, Meta, atributo pessoal)**

- CFN 856/2026, arts. 69 e 74: não conferidos no texto oficial (as referências vêm do briefing, que as marca PARCIAL). A página não mostra resultado de cliente, não garante resultado e não mostra imagem da Giovanna (ok). Uso do nome e da apresentação de produtos: bloqueio G1.
- Anvisa RDC 243/2018 e IN 28/2018: a página não alega efeito, não cita ingrediente nem produto, não usa alegação do Anexo V, e diz "não é medicamento" e "não trata nem previne doença". **Ok.** Não abri o texto oficial; a frase "não é um medicamento" do art. 14 é exigência de rótulo, e a página a usa como aviso extra, o que não faz mal.
- CDC: oferta declarada (G2, ok); preço/percentual do desconto em aberto (aviso A8); sem urgência falsa (ok); promessa de envio sem envio (B1, bloqueio). Artigos 31, 36, 37 e 49 não conferidos no texto oficial.
- LGPD: B1 e B2. O Planalto devolveu "Esta requisição foi bloqueada." ao leitor. Não consegui conferir no texto oficial.
- Políticas da Meta: não consultei. A página de destino usa "calorão" só em citação e em terceira pessoa no estágio 2; ver A1 sobre o rótulo em primeira pessoa. O anúncio ainda precisa de teste de aprovação, como o `.md` já diz.
- Atributo pessoal: ver A1.

**Promessas ocultas**

- "Receba o link da aula" e "O que fica com quem assiste" sem preço em lugar nenhum: a página nunca diz "gratuita", mas todo o desenho sugere. Se a live for paga, é omissão de preço. A suposição (live gratuita) está no `.md` sem marcador no HTML. **Aviso A7.**
- "Ajuda o médico a anotar", "ajuda mais do que a palavra sozinha", "entender o que anotar": promessas pequenas de eficácia de comunicação, sem fonte. **Aviso A3.**
- "Um glossário [...] revisado por médico": credencial implícita. **A6.**
- "A aula não recomenda suplemento" ao lado de "a Giovanna apresenta produtos [...] com desconto": coerente na leitura (aula primeiro, oferta depois), mas quem lê rápido pode achar contraditório. **Ok**, depende do desenho da live.
- Nenhuma promessa de alívio, de resultado ou de prazo. **Ok.**

**Urgência.** Nenhum contador, nenhum "últimas vagas", nenhum prazo falso. "Novembro" e "desconto de Black" aparecem sem data de término; é permitido, e o "mais de 50%" não voltou. **Ok.**

**Consentimento comercial.** Declara a finalidade, dá forma de sair ("SAIR"), a caixa vem desmarcada. Problemas: B2, e a frase "Não peço dado de saúde" (A5).

---

## 4. Os três pares do dicionário (afirmação médica)

Todos têm cobertura de proteção boa: o texto de 3b ("Exemplos de linguagem. Cada médico anota de um jeito. [...] Quem diz o que é cada coisa é o médico, na consulta") está no HTML dentro do mesmo cartão, sem rolar para achar. Isso reduz o risco de interpretação clínica. Mesmo assim, cada par é uma equivalência médica dita por nutricionista e o `.md` reconhece que não foi conferida (PISTA).

**"Calorão" para "Fogacho". Aviso.** É a equivalência mais firme: "fogachos" consta entre os sintomas listados pela Febrasgo (briefing, objeção 1, VERIFICADO) e "calorão" e "fogacho" são sugestões de busca do público (Bloco 2, sem ranking). Ainda assim, o briefing só prova que os dois termos existem, não que o prontuário escreve "fogacho"; o médico pode escrever "ondas de calor" ou "sintomas vasomotores". O texto hedgeia ("cada médico anota de um jeito"), mas a abertura do estágio 2 ("O prontuário escreve outra palavra") e a headline A ("O que 'calorão' vira no prontuário?") afirmam resposta única. A frase de ajuda ("Dizer em que hora do dia acontece ajuda o médico a anotar") é conselho clínico de bastidor; precisa de visto médico.

**"Neblina mental" para "Queixa de memória e de concentração". Aviso forte, o mais frágil dos três.** "Neblina mental" não é termo diagnóstico, e a tradução fixa um significado (memória/concentração) que a mulher pode não querer dizer: o briefing registra que muitas relatam sensação de ficar "menos inteligentes" e que um médico (Mazzutti) chama alguns desses sintomas de "pouco ligados à causa hormonal". Há dois riscos: o par vira definição médica; e "queixa de memória" para mulher de 45 a 60 anos pode alarmar sem encaminhamento nenhum na página (o briefing proíbe gancho de medo de doença grave; aqui não é gancho, mas falta uma frase de "converse com o médico se isso incomoda"). A frase de ajuda "ajuda mais do que a palavra sozinha" é comparação sem fonte. Médico decide se o par fica.

**"Cansaço que não passa" para "Fadiga". Aviso.** A tradução é plausível, mas "fadiga" tem uso clínico mais específico (cansaço persistente que não melhora com repouso) e cobre causas muito diferentes. Duas observações do texto: (a) o termo do vocabulário de busca do briefing é só "cansaço"; "que não passa" foi acrescentado pela copy e aparece em "Na minha boca" como se fosse fala do público, o que o briefing não sustenta; (b) o briefing lista "fadiga como alerta do coração" entre os ganchos de medo proibidos; a página não faz isso, mas convém o médico ver se a palavra "fadiga" sozinha na tela não puxa essa leitura. "Contar desde quando ajuda o médico a entender o que anotar" é orientação clínica; mesma exigência.

Conclusão: nenhum par diagnostica, e nenhum afirma que a leitora tem o sintoma. O conjunto continua como trava de publicação até o médico revisor assinar (B3).

---

## 5. O que o HTML faz com dados, e se segue o texto

**Dados.** Coleta nome e WhatsApp, ambos digitados pela pessoa. Com JavaScript: valida nome (2+ letras), telefone (10 a 13 dígitos) e a caixa, esconde o formulário e mostra "Pronto". Nada é enviado, nada é guardado, não há rede (conferi: zero requisições externas, nenhum pixel, nenhum script de terceiro, nenhuma fonte externa). Sem JavaScript: envio por GET com os dados na URL (B1). Não pede dado de saúde. **Bloqueio B1.**

**Segue o texto?** Em quase tudo, palavra por palavra (estágios 1 a 5, aviso, consentimento, rodapé, confirmação, as três headlines por `?h=a|b|c`). Diferenças:

- Estágio 3: o `.md` diz que, sem toque, os pares ficam visíveis numa versão estática. No HTML, a tradução fica escondida (`display: none`) até a pessoa tocar, ou até o estágio 4 entrar 20% na tela, ou até tocar em "Mostrar as três traduções" (botão extra, não previsto no `.md`; boa ideia). Quem usa leitor de tela com JavaScript ligado não recebe a tradução no carregamento, ao contrário do que diz a regra de montagem ("todo o texto [...] existe no HTML desde o carregamento"). **Aviso.**
- O `.md` diz que sem JavaScript ou com "reduzir movimento" a página "abre já acesa". Testado: o halo e a chama acendem, mas o fundo fica preto do começo ao fim (cor `rgb(0,0,0)`), porque o código que clareia o fundo não roda. O texto é legível (os cartões têm fundo próprio), mas a "luz plena" não existe nesses dois casos. **Aviso.**
- O `.md` pede ícone de chama no canto (estágio 4) e raio de sol (estágio 5); o HTML não tem os dois. Cor do salto no estágio 3: `.md` #F2E6D0, HTML #F5EBD9. Frase sobre as terças às 19h30 foi omitida no HTML. Todas **ok/irrelevantes**.
- Mensagens de erro do formulário não existem no `.md`. "Para receber o link, marque a autorização." entra na análise do B2.
- Cabeçalho do `.md` diz que o link fixo é "o mesmo botão do fim, com a mesma ação". No HTML o link rola até o formulário e o botão envia: o `.md` se contradiz aqui. **Aviso leve** (corrigir a frase do `.md`).

**Marcadores de pendência no HTML que poderiam ir ao ar sem querer.**

Os 13 marcadores `[A PREENCHER ...]` estão em amarelo vivo (`.pendente`, fundo #ffe14d, texto preto), não somem por acidente e qualquer pessoa que abrir a página vê. É boa prática. O risco está no que **não tem** marcador e no que fica ao redor dos marcadores.

Sem marcador (pode ir ao ar sem querer):
1. Formulário sem destino e confirmação falsa (B1): só um comentário de código.
2. Pendências 3, 4 e 16 (art. 74, registro, parecer): nenhuma indicação no HTML (G1).
3. Live gratuita ou paga (suposição do `.md`): a página nem diz "gratuita".
4. Loja com "Esgotado" e botão de compra (briefing, Bloco 12): a live leva à loja e a página não tem como saber.
5. Decisão de audiência (frio e base veem a mesma página): decisão do Rafael.
6. `noindex` no `<head>`: é correto agora; se um dia a página precisar aparecer em busca, tem de sair. Não é erro.

Ao redor dos marcadores: "CRN10" e "Data:" ficam fora do marcador. Se alguém apagar o amarelo sem preencher, sobra "CRN10 ." e "Data: " vazios na página. Os marcadores também não têm o rótulo `[A PREENCHER]` verificável por máquina antes do envio; vale um `grep "A PREENCHER"` obrigatório antes de subir. O comentário `// ENVIO: ligar aqui ao sistema de captura...` fica visível no código-fonte (inofensivo, mas é nota interna). Falta `og:image` (o `.md` prevê imagem de compartilhamento).

---

## 6. Acessibilidade básica (medida no navegador de teste)

- **Contraste do texto. Ok, com margem curta.** Em 390 x 844 o texto do estágio 1 (#b5b5b5) fica entre 10,2 e 4,8 para 1 ao longo da rolagem; o do estágio 2 (#e8dcc8) entre 15,5 e 5,2 para 1, incluindo o brilho laranja do topo. As linhas do estágio 2 ainda apagadas (opacidade 55%) ficam entre 4,9 e 4,7 para 1 enquanto estão apagadas, perto do limite de 4,5. O `.md` fala em 40% de opacidade mínima; o HTML usa 55%, melhor. Não medi outros tamanhos de tela com a rolagem inteira (a medição varrida por vários tamanhos não terminou), então o contraste em telas muito diferentes fica sem conferir. Cartões, formulário e rodapé têm fundo próprio e passam com folga (botão branco sobre #b35f00 dá cerca de 4,8 para 1 em 19 px em negrito).
- **Indicação de foco nos botões do dicionário. BLOQUEIO de acessibilidade** (corrige-se em uma linha). Testado com o teclado: nos três botões "Na minha boca" o contorno de foco é `none`. A regra `.par button { all: unset }` vem depois da regra de foco e a anula. Quem navega por teclado ou por voz não vê onde está. As outras peças (link fixo, fósforo, "Mostrar as três traduções", campos) mostram contorno.
- **Cor do contorno de foco nas áreas claras. Aviso.** O contorno é #ffb347 sobre o creme-claro dos estágios 4 e 5: cerca de 1,7 para 1, abaixo dos 3 para 1 recomendados para indicadores de foco. Os campos têm borda escura e o botão é escuro, o que ameniza.
- **Alvos de toque. Ok.** Fósforo 150 x 230; botões do dicionário 304 x 74; "Mostrar as três traduções" 207 x 72; link fixo 205 x 48; campos 52 de altura; botão de envio 56. A caixa de consentimento tem 28 px, mas o rótulo inteiro é clicável (label envolve o campo), então o alvo real é maior que 48.
- **Tamanho de letra. Aviso.** O `.md` pede corpo de 18 px ou mais. O corpo é 19 px (ok), mas ficam abaixo de 18: o texto do consentimento (16 px), o "Exemplos de linguagem. Cada médico anota de um jeito..." (16), os avisos do rodapé, incluindo "Suplemento alimentar não é medicamento..." (15), "Toque no fósforo" e "Segue para ver..." (17), rótulos dos campos (16), e os marcadores (12 a 15). O aviso crítico acima do botão está em 19 px (ok). Os avisos de rodapé e o consentimento, que são o texto de proteção, merecem 18 px para o público de 45 a 60.
- **Reduzir movimento. Ok.** O CSS desliga animações e transições, a rolagem suave e o rolar automático. Com a opção ligada, o fósforo fica aceso e a página não se mexe.
- **Sem JavaScript e com "reduzir movimento". Aviso.** O texto é legível e a leitura completa fica disponível (todas as traduções aparecem, testado). Mas ficam três controles mortos: o fósforo (o texto "Toque no fósforo." continua na tela), os botões do dicionário e "Mostrar as três traduções". O link fixo fica sempre na tela (inclusive sobre o formulário) porque o código que o esconde não roda. O formulário falha (B1).
- **Animação contínua.** A chama treme sem parar e o fósforo pulsa enquanto espera; passam de 5 segundos sem botão de pausa. Respeita "reduzir movimento", o que cobre a maioria dos casos. **Aviso leve.**
- **Leitor de tela.** Tradução oculta até o toque (ver acima); os botões usam `aria-expanded` mas sem `aria-controls`, então o leitor não liga o botão ao texto que aparece. **Aviso leve.**
- Ok: idioma `pt-BR`, zoom permitido (sem `user-scalable=no`), títulos em ordem (h1, depois h2), campos com rótulo e `autocomplete`, sem rolagem lateral em 390 px, `aria-hidden` nos enfeites.

---

## 7. Avisos (enfraquecem, não impedem)

**A1. Atributo pessoal: rótulo em primeira pessoa.** No estágio 3 a coluna chama-se "Na minha boca" e abre com "Calorão", "Neblina mental" e "Cansaço que não passa". Em primeira pessoa, a leitora fala por esses termos: a página insinua que ela os sente. A skill pede terceira pessoa e proíbe afirmar a condição de quem lê; o anúncio do `.md` cumpre isso, a página não. O `.md` só tratou o anúncio. A Meta olha a página de destino; não consultei a política vigente. Sugestão de direção: "Na boca de quem fala" ou equivalente.

**A2. Referente ambíguo (texto e HTML).** "Cada médico anota de um jeito. Eles não servem para saber o que alguém tem." O "Eles" lê como "os médicos", o contrário do que se quer dizer (são os exemplos). Aparece igual no `.md` e no HTML.

**A3. Promessas pequenas de eficácia e resposta única** (seção 4): "ajuda o médico a anotar", "ajuda mais do que a palavra sozinha", "O prontuário escreve outra palavra".

**A4. Fala do público inventada.** "Cansaço que não passa" não vem do vocabulário de busca do briefing (que traz "cansaço") e entra em "Na minha boca" como se fosse a voz do público.

**A5. "Não peço dado de saúde."** A frase é verdadeira para o formulário, mas nome e WhatsApp de uma mulher de 45 a 60 anos que se inscreve numa aula de menopausa podem revelar condição de saúde por inferência (LGPD, art. 5º, II, e art. 11, não conferidos no texto oficial). A frase promete mais do que o advogado talvez aceite. Deixar para ele decidir se mantém.

**A6. "Revisado por médico", sem nome.** Afirma credencial médica sem identificar o médico. Só pode ficar se existir e for verdadeira; se o médico for citado nominalmente, a identificação segue as regras do conselho dele (CFM 2.336/2023 não conferida). Também: o cartão de 3 perguntas e o glossário de dez termos não existem ainda (suposição 3 do `.md`).

**A7. Gratuidade.** Ver seção 3. Se for paga, mudam estágios 4 e 5 e o anúncio.

**A8. Desconto de Black.** Sem percentual, sem preço de referência: permitido, como o `.md` diz. Lembrete já feito no parecer anterior: a loja mostra o colágeno "de R$ 139,00 por R$ 118,90" (14,5%, cálculo meu); qualquer percentual da página exige preço de referência real e histórico.

**A9. Coerência do tom.** O `.md` diz ter tirado a crítica ao mercado ("a metáfora fica na luz, sem inimigo"). A abertura mantém "Novembro vem cheio de barulho. Aqui, o combinado é outro": "barulho" é o inimigo, e a página termina em oferta de Black. Quem lê pode sentir contradição entre o "combinado" e a venda no fim. É decisão de tom do Rafael, não de conformidade.

**A10. Português.**
- "Segue para ver o resto da aula" mistura o imperativo de "você" (todo o resto: "Toque", "Role", "Escreva") com "segue", forma de "tu" ou terceira pessoa. Pede "Siga" ou "Role". Também: "o resto da aula" faz parecer que a página é a aula, o que é falso (a aula é a live).
- Acentuação, crase e concordância no resto estão corretas.
- Marcas de texto de IA: poucas. Paralelismo no "Quem quiser, olha. Quem não quiser, já tem a aula." e repetição do aviso de "aula educativa" cinco vezes (necessária pela conformidade; pode soar defensiva). Sem travessão, sem "não é X, é Y", sem abertura padronizada.

**A11. Título e compartilhamento.** O `.md` exige "URL, nome da página e eventos de pixel neutros" sem "menopausa", mas o título da página, o `og:title` e as descrições têm "consulta de menopausa". A contradição está no próprio `.md` (que aprova esse título). Quando houver pixel, decidir qual regra vale e conferir se ele não lê título e campos do formulário (Meta: não consultada). Falta `og:image`.

**A12. Carregados do parecer anterior e ainda abertos.** Audiência: a página é uma só para público frio (nível 2) e para a base (nível 4); o Rafael decide. Loja: defeitos do Bloco 12 ("Esgotado" com botão de compra, parcelas) precisam estar corrigidos antes de qualquer tráfego, e a live leva à loja. Pergunta 4 ("Cancelada"): usada só no rodapé como nome próprio; ok, mas a resposta continua pendente.

**A13. Marcadores.** "CRN10" e "Data:" fora do marcador (seção 5).

**A14. Detalhe de código.** `?h=constructor` na URL coloca texto de função no título (o código lê o nome da propriedade sem checar). Inofensivo; vale limitar às letras a, b e c.

---

## 8. Conferido

- Nenhum sintoma dirigido a quem lê ("você tem", "seu problema"): ausente na página, salvo A1.
- Nenhum depoimento, número de mulheres, "Nº 1", "50 mil", "últimas vagas", contador, "acabou", "cancele a menopausa", "Dra.", imagem da Giovanna, nome de produto ou alegação de suplemento: ausentes (busca no HTML e no `.md`).
- Captura só de nome e WhatsApp; caixa de consentimento desmarcada por padrão.
- Oferta declarada em cinco lugares, em corpo legível no ponto da decisão.
- Texto do HTML igual ao do `.md` nos estágios, no aviso, no consentimento, no rodapé e na confirmação.
- Zero requisições externas, nenhum pixel, nenhum link para fora (nem a política de privacidade, que ainda é marcador).
- Contagem de marcadores: 13 `[A PREENCHER]` no HTML, todos em amarelo, cobrindo CRN10 (2), data, cartão e glossário, percentual do desconto, controlador, política (2), texto do advogado, horário da confirmação, suporte, razão social do rodapé, conferência médica dos pares. Todos os marcadores do `.md` que têm lugar na página estão no HTML.
- Números do `.md` conferidos contra o briefing: CNPJ 47.019.967/0001-89, pendências 3, 4, 14 e 16, Bloco 2 (calorão, neblina mental, cansaço), Bloco 12.
- CVV 188: não necessário, a página não tem gancho de desesperança.

## 9. Não foi possível conferir

- Texto oficial de CFN 856/2026 (arts. 69 e 74 e vigência), CFM 2.336/2023, RDC 243/2018, IN 28/2018 (Anexo V), CDC (arts. 31, 36, 37, 49), LGPD (arts. 5º, 6º, 8º, 9º, 11): não abri nenhum no texto oficial. O Planalto bloqueou o leitor ("Esta requisição foi bloqueada"); o art. 8º, §4º da LGPD só vi reproduzido em fontes secundárias; o art. 9º, §3º não encontrei.
- Políticas de anúncios e de página de destino da Meta (atributo pessoal, suplementos, dados sensíveis em eventos).
- Originalidade de "dicionário" e "luz" na Biblioteca de Anúncios da Meta (suposição 4 do `.md`).
- Equivalência médica dos três pares (precisa de médico).
- Contraste em outros tamanhos de tela: medi só 390 x 844 de forma completa.
- Funcionamento em celulares reais (testei no Chromium de teste, não em aparelho).

## 10. Quem precisa aprovar

Advogado de direito sanitário e publicitário (G1, B2, A5, art. 74, consentimento e controlador); desenvolvedor (B1, foco, sem JavaScript); médico revisor (três pares, glossário, A6); Giovanna (CRN10, material da aula, data, nome no compartilhamento); responsável técnico (registro e rótulo, se algum produto for citado); Rafael (audiência, gratuidade, tom da abertura, resposta à pergunta 4).

---

## Resumo de retorno

1. **Entregue:** este parecer, em `/home/user/workspace/projetos/menopausa-cancelada/revisoes/pagina-mes-da-luz-2026-11-03.md`. Revisão do texto e do HTML, com teste de renderização num navegador.
2. **Decisões principais:** veredito **bloqueado**. G2 e G4 resolvidos; G3 resolvido no texto mas não nos dados; G1 aberto por depender de advogado. Bloqueios novos do HTML: (B1) o formulário não envia e a confirmação diz que enviou, e sem JavaScript o nome e o WhatsApp vão para a URL; (B2) consentimento único obrigatório que amarra a mensagem comercial ao link da aula (o HTML tem só a opção A; recomendo a opção B ao advogado); (B3 e B4) conferência médica dos três pares e identificação/controlador, já com marcador. Os três pares: "calorão/fogacho" aviso, "neblina mental/queixa de memória e concentração" aviso forte, "cansaço/fadiga" aviso; nenhum diagnostica. Defeito de acessibilidade: botões do dicionário sem indicação de foco no teclado. Aviso de atributo pessoal: o rótulo "Na minha boca".
3. **Pendências e o que dependem delas:** CRN10, data, percentual, controlador, política, texto do advogado, conferência médica, existência do cartão e do glossário (todas com marcador amarelo, 13 no HTML). Sem marcador e sujeitas a ir ao ar sem querer: formulário sem destino, pendências 3/4/16, gratuidade da live, defeitos da loja. As palavras "CRN10" e "Data:" estão fora do marcador. Recomendo bloquear o envio ao ar com um `grep "A PREENCHER"` e um teste de envio real.
4. **Fase seguinte recomendada:** copywriter/desenvolvedor corrigem B1, foco, A1, A2 e A10 e marcam os seis trechos da oferta; Rafael decide gratuidade, audiência e tom da abertura; advogado e médico revisor fecham B2, G1 e B3; depois nova passada do `revisor` na versão final.
