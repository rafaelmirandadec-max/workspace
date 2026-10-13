# Revisão — Perguntas para a GrandCare

13/10/2026 · @revisor · Peça: `01-pesquisa/perguntas-para-a-grandcare.md` (38 perguntas e 10 correções urgentes)
Leitor final: os sócios Edemilson Albarnas (enfermeiro, responsável técnico) e Larissa Pacheco Cordeiro de Moura, num documento enviado pelo Rafael.
Fontes conferidas: `dossie.md`, `frente-1` a `frente-5`, `00-briefing.md`. Normas reabertas hoje no texto oficial (lista em "Conferido").

**Veredito: bloqueado para envio ao cliente na forma atual.** O conteúdo está quase todo sustentado pela pesquisa, e como documento de trabalho interno ele serve. Mas foi escrito para o squad, não para a GrandCare. São três os problemas que impedem o envio: (1) a pergunta 1 e as menções à Androtech/andromedicina precisam ser resolvidas com o Rafael antes; (2) a parte 2 apresenta como fato e como conclusão jurídica coisas que a pesquisa trata como suposição forte, e as dirige ao próprio responsável técnico; (3) a linguagem é a interna do squad. Com a reescrita sugerida abaixo e o corte em duas levas, o documento fica liberado.

---

## Bloqueios

### B1. Pergunta 1 e a relação com a Androtech/Androclinic: resolver com o Rafael antes de enviar
**Trecho:** "Qual é a relação entre a GrandCare e a Androtech/Androclinic? Quem opera hoje o portal, o CRM, a página `grandcare.andromedicina.com`, as contas de anúncio e o Pixel? A equipe do Rafael já opera parte disso?" (pergunta 1). A mesma premissa aparece na pergunta 3 ("Por que a Receita tem o e-mail financeiro@androtech.com.br"), na correção 3 ("a página em andromedicina.com") e na correção 9 ("Ela fica no domínio de outra empresa").

**Motivo:**
- O `00-briefing.md` marca essa relação como `[A PREENCHER] (Rafael)`, não como pergunta para o cliente. O `CLAUDE.md` do espaço de trabalho cita um projeto "androclinic" do próprio Rafael. Há chance real de que o Rafael saiba a resposta, ou de que a estrutura seja operada por gente ligada a ele.
- "A equipe do Rafael já opera parte disso?" não pode ir num documento que o próprio Rafael envia: ou ele sabe a resposta, ou a pergunta expõe que não sabe.
- Se a Androtech for a parceira de tecnologia da GrandCare, ou do próprio Rafael, as correções 3 e 9 ("domínio de outra empresa", "contrato de tratamento de dados entre as empresas") soam como acusação a um parceiro que está lendo ou que é próximo do leitor.
- A pergunta 3 começa com "Por que", o que soa como interrogatório.

**Correção sugerida:**
1. O coordenador pergunta ao Rafael, antes do envio: qual é a relação entre a GrandCare e a Androtech/Androclinic e quem opera site, portal, CRM, página pós-formulário, contas de anúncio e Pixel.
2. Se o Rafael souber, a pergunta 1 sai, e as correções 3 e 9 são reescritas para quem de fato opera, em tom de ajuste técnico.
3. Se ele não souber, a pergunta vai ao cliente em versão neutra, sem citar o Rafael:
   > "Quem cuida hoje do site, do portal de agendamento, da página que aparece depois do formulário (grandcare.andromedicina.com) e das contas de anúncio no Google e no Meta? É alguém da GrandCare ou um parceiro? Pergunto para saber com quem combinar os ajustes técnicos."
4. Pergunta 3 reescrita:
   > "No cadastro do CNPJ aparecem o e-mail financeiro@androtech.com.br e o telefone (44) 9183-0285, e no Google Maps aparece o (48) 99841-8140. Quais são hoje o telefone, o e-mail e o endereço oficiais? Assim deixamos tudo igual no site, no Maps, no Instagram e no cadastro."

   Detalhe: o e-mail só aparece numa das bases públicas do CNPJ (cnpj.ws, segundo a frente 1). "No cadastro do CNPJ" é mais exato que "a Receita tem".

### B2. A parte 2 afirma como fato e como conclusão jurídica o que a pesquisa trata como suposição, e o leitor é o responsável técnico
**Trechos:**
- Correção 1: "Tirar do ar os quatro depoimentos de modelo. [...] Depoimento inventado, ainda mais de médico, é publicidade enganosa e expõe o responsável técnico (Código de Ética da Enfermagem, art. 86; Cofen 554/2017, art. 4º, I)."
- Correção 4: "Retirar números sem base."
- Correção 7: "A 'bomba-relógio' e a lista de riscos usam medo como motor, o que a Cofen 554/2017 trata como sensacionalismo (art. 2º, VIII)."

**Motivo:**
- **Fato x suposição.** A frente 1 e o dossiê classificam os depoimentos como "SUPOSIÇÃO forte de texto de modelo": nomes genéricos, mesma data ("5 meses atrás") e nenhuma foto. A peça transforma isso em fato ("inventado"). Ela também se contradiz: a pergunta 22 pergunta ao cliente de onde vêm os depoimentos e se algum é real, e a correção 1 já dá a resposta. Se um deles for real, o documento acusou o cliente sem razão.
- **Conclusão jurídica.** "É publicidade enganosa" é qualificação jurídica, coisa que a skill `conformidade` manda não fazer ("lista de pontos de atenção, não parecer jurídico"). Os artigos citados estão certos (conferi, ver abaixo), mas o que eles sustentam é "pode ser enquadrado como". Isso vale ainda mais quando o texto fala ao próprio enfermeiro que responde no Coren.
- **Tom.** "Inventado", "sem base" e "expõe o responsável técnico", lidos pelo Edemilson, soam como denúncia. A mesma informação, escrita como risco e com uma saída, tem mais chance de ser aceita e posta em prática.
- **Precisão da citação.** O sensacionalismo por medo está no art. 2º, VIII, **alínea "e"** ("a veiculação pública de informações que possam causar intranquilidade, pânico ou medo à sociedade"). O art. 2º apenas define o termo. A vedação está no art. 4º, VII (imagens sensacionalistas) e no art. 9º, parágrafo único.

**Correção sugerida (redação para o cliente):**
> **1. Retirar por enquanto os quatro depoimentos do site e da página que aparece depois do formulário.** Os de Maria Silva, João Santos, Ana Costa e Carlos Oliveira têm nomes genéricos, a mesma data e nenhuma foto, o que costuma indicar texto de exemplo que veio com o modelo do site. Se algum for de cliente real e houver autorização, ele volta com identificação. O mais sensível é o de "Médico referenciador": um depoimento atribuído a médico sem nome nem CRM pode ser lido pelo Coren como informação não comprovada (Código de Ética da Enfermagem, art. 86; Resolução Cofen 554/2017, art. 4º, I). Quem responde por isso é o enfermeiro responsável técnico. No lugar deles entram as avaliações reais do Google, com autorização.

> **4. Rever os números do site até termos a comprovação.** "15+ anos de experiência" corresponde à carreira do Edemilson, não à empresa (aberta em 2021); dá para manter, atribuído a ele, com o número exato. "250+ profissionais", "500+ pacientes" e "+500 famílias" ficam fora até sabermos a base (pergunta 23). "No Brasil", no título, pode sair, já que o site informa atendimento em Santa Catarina.

> **7. Rever o vídeo da "bomba-relógio" antes de pôr mais verba nele.** A imagem da bomba-relógio e a lista de riscos (queda, ferida, infecção, hospitalização) podem ser lidas como mensagem que causa medo, o que a Resolução Cofen 554/2017 trata como sensacionalismo (art. 2º, VIII, "e"). A mensagem funciona melhor falando da situação da família e do que a GrandCare faz. Os três vídeos e o site passam por uma revisão antes de receber mais verba, e o Edemilson aprova a versão final como responsável técnico.

Também falta "+500 famílias" na correção 4. A pergunta 23 cita esse número, mas a correção o deixa de fora.

### B3. Linguagem interna do squad em todo o documento
**Trechos e termos que não fazem sentido para o cliente ou que soam como jargão de marketing:**
- Cabeçalho: "@researcher · Base: `dossie.md` e as cinco frentes desta pasta". O documento é do Rafael para o cliente; deve trazer data, autor e uma linha sobre o objetivo.
- "Destrava:" em todas as 38 perguntas, quase sempre com vocabulário interno: "diagnóstico do funil" (1), "o centro da oferta", "não pode ir para peça" (5), "o mecanismo [...] contra a Ravivare" (7), "o ângulo" (9 e 15), "mecanismo declarável" (11), "âncoras de preço", "livre na praça" (15), "segmento de convênio entra no avatar" (20), "ticket médio", "quanto se pode pagar por contato" (21), "bloqueio do protocolo" (22), "prova de autoridade lícita" (25), "Perfil de Comunicação" (26), "gargalo do funil", "linha de base" (33), "hoje é hipótese entre três" (35), "o histórico do briefing" (37), "as metas do briefing" (38).
- "vídeo M1", "vídeo M2", "vídeo M3" (perguntas 9 e 11; correções 5, 6 e 7): são rótulos da pesquisa. O cliente conhece os vídeos pelo conteúdo.
- "devem passar pelo `revisor`" (correção 7): nome de agente.
- "A equipe do Rafael" (1): o Rafael falando de si na terceira pessoa (ver B1).
- "prova de autoridade lícita" (25) dá a entender que a prova atual é ilícita.
- Concorrentes nomeados nas perguntas 7 ("contra a Ravivare") e 17 (Nonno, Acuidar, Cuidare). Não é errado, mas mostrar ao cliente a régua de comparação é decisão do Rafael. Na pergunta 7 dá para dizer "algo concreto que nenhuma empresa da região diz".

Não há FATO, PISTA, SUPOSIÇÃO nem `[A PREENCHER]` no texto, o que é bom.

**Correção sugerida:**
- Trocar "Destrava:" por "Por que pergunto:", em uma frase e em linguagem de dono de empresa, ou cortar quando for óbvio. Exemplos:
  - 5: "Por que pergunto: a maior queixa das famílias é ficar sem cuidadora no dia da falta. Se a GrandCare tem uma regra para isso, ela vira o principal argumento de venda; sem regra escrita, não podemos prometer."
  - 21: "Por que pergunto: para saber quanto faz sentido investir em anúncio para conseguir cada cliente."
  - 26: "Por que pergunto: os vídeos ajudam a definir o jeito de falar da marca e rendem conteúdo."
- Nomear os vídeos pelo que mostram: "o vídeo do anúncio que fala com o filho que mora longe" (M1), "o vídeo da bomba-relógio" (M2), "o vídeo sobre como a cuidadora é contratada" (M3).
- Abrir com três linhas: quem escreve, para que servem as respostas e como responder (por escrito, por áudio ou numa conversa de 45 minutos), com prazo.

---

## Avisos

### A1. 38 perguntas é demais para uma leva só. Proposta de corte
Para dois sócios de uma microempresa, 38 perguntas por escrito, mais 10 correções, tendem a voltar respondidas pela metade e sem ordem. Parte das perguntas se responde mandando um documento, e outras podem se juntar numa só.

**Primeira leva: 11 blocos, para uma conversa de 45 a 60 minutos ou respostas por áudio**
1. **Falta e reposição** (5 + 8): o que acontece quando a cuidadora falta, em quanto tempo chega a substituta e se a família é avisada antes, com nome e horário.
2. **Como a equipe é contratada** (6).
3. **Enfermagem e supervisão** (7 + 12): quantos enfermeiros, frequência de visita, protocolo escrito, quem faz sonda, traqueostomia, curativo complexo e injetável, e quais serviços são prestados hoje.
4. **Dia a dia com a família** (9 + 10 + 11): relato do plantão, cuidadora fixa e troca, seleção e preparo.
5. **Formatos e preço** (15 + 21).
6. **Contrato**: no lugar das perguntas 16 a 19, pedir o modelo de contrato e perguntar só o que ele não responder (cobrança adiantada, experiência, cancelamento, reembolso, serviço doméstico, cuidadora que sai com a família).
7. **Depoimentos e números do site** (22 + 23 + 24).
8. **Registro da enfermagem** (27 + 28): pedir os documentos em vez de perguntar (número do Coren-SC e categoria, certidão de responsabilidade técnica, título de especialista, se houver, alvará sanitário, CNES), mais os anos exatos de profissão e de UTI.
9. **Cidades com equipe e horário de atendimento** (13 + 14).
10. **De onde vêm os clientes e quanto se investe** (33 + 34 + 36). Se as contas de anúncio forem operadas por gente próxima do Rafael (B1), parte disso sai daí, não do cliente.
11. **Quem aprova e contatos oficiais** (2 + 3).

**Segunda leva, depois da conversa:** 4 (tempo de atendimento antes do CNPJ), 20 (plano de saúde), 25 (médicos que indicam), 26 (podcast), 29, 30 e 31 (dados, advogado, histórico com Coren e plataformas; podem ir junto com a correção do formulário), 32 (imagens dos vídeos), 35 (amostra de WhatsApp), 37 e 38.

A pergunta 1 sai ou muda conforme B1. A lista "se der para fazer só dez" passa a ser os blocos 1, 2, 3, 5, 6, 7 e 8.

**Parte 2.** Mandar as 10 correções no mesmo arquivo das perguntas pesa no primeiro contato. Sugestão: uma página separada, "Ajustes recomendados antes de novas campanhas", com as correções 1, 2 e 3 em destaque. Os itens sensíveis (depoimentos, números, vídeo da bomba-relógio) vale apresentar primeiro na conversa e depois mandar por escrito.

### A2. Grau de certeza em afirmações regulatórias
- **Pergunta 28:** "Destrava: o uso de 'home care' e 'enfermagem domiciliar' nas peças". A RDC 917/2024 trata do funcionamento do serviço (alvará, art. 3º; responsável técnico, art. 4º; CNES, art. 5º; plano de atenção domiciliar, arts. 10 a 12), não do uso dessas palavras em anúncio. A ligação entre a regularidade e o vocabulário é leitura da frente 5. Além disso, a razão social da empresa já é "Especialista em Home Care". Sugestão: "Por que pergunto: com esses registros, a regularidade vira prova que a cuidadora autônoma não tem; e confirmamos que a parte de enfermagem está coberta pela RDC Anvisa 917/2024."
- **Pergunta 12:** "que é exigência do Coren-SC". O Parecer Coren-SC 002/2015 diz que o cuidador "não pertence à Enfermagem" e não pode exercer as atribuições dela. Ele não fala de peças publicitárias. Sugestão: "o Coren-SC (Parecer 002/2015) diz que o cuidador não faz o que é da enfermagem; por isso a comunicação precisa deixar claro quem faz o quê".
- **Pergunta 11:** "'cuidador certificado', que não existe oficialmente". Mais exato: "não existe registro ou certificação oficial de cuidador; o curso é livre". Vale lembrar que a bio antiga do Instagram da GrandCare dizia "Profissionais Certificados" (frente 1), e a frase pode soar como crítica a ela.
- **Correção 5:** "Não têm prova e todo concorrente diz o mesmo". "Todo concorrente" generaliza demais: o dossiê conta sete empresas com "referência" ou "a maior". Se quiser apoio normativo, a Resolução Cofen 554/2017, art. 2º, VIII, "a", trata como sensacionalismo a divulgação "feita de maneira exagerada [...] para individualizar e priorizar sua atuação ou a instituição". Use como "pode ser lido como", não como enquadramento.
- **Ponto não tratado:** os vídeos M1 e M2 oferecem "anamnese por videochamada" com o fundador. A Resolução Cofen 554/2017, art. 4º, V, veda "oferecer consultoria a pacientes e familiares por mídia social, como substituição da consulta de enfermagem presencial". Se a videochamada for só a conversa comercial antes da visita presencial (o FAQ diz que o enfermeiro visita), o risco é baixo, mas o nome "anamnese" puxa para a consulta. Vale incluir na correção 7 ou numa pergunta: "a videochamada substitui ou antecede a visita presencial?". A norma de telenfermagem do Cofen não foi conferida.

### A3. LGPD e Pixel (correção 2): um ponto da solução proposta não se sustenta sozinho
- **Trecho:** "aviso de que quem preenche responde pelo idoso (LGPD, art. 11, I)".
- **Motivo:** o art. 11, I, fala em consentimento do "titular ou seu responsável legal" (conferido no Planalto). Um filho só é responsável legal do idoso em casos como curatela. Um aviso de que "quem preenche responde pelo idoso" não torna o filho responsável legal. Lido pelo cliente, o trecho parece uma solução pronta. Existe ainda outra base possível para dado de saúde, a tutela da saúde em procedimento feito por profissional ou serviço de saúde (art. 11, II, "f"). Se ela cabe aqui, quem decide é o advogado.
- **Sugestão:** "Se os campos clínicos ficarem, o advogado define a base legal e o texto de consentimento; um ponto de atenção é que quem preenche costuma ser o filho, e o dado é do idoso." Manter a recomendação de pedir só nome, WhatsApp, cidade e tipo de serviço no primeiro contato. Essa é a saída mais segura e não depende de parecer.
- **Pixel:** a recomendação está certa e agora tem fonte conferida. A página "Sobre informações proibidas" da central de ajuda da Meta (lida hoje, 18:18 UTC) lista entre as informações proibidas "doenças, condições médicas", "tipos de dispositivos médicos", "procedimentos médicos, tratamentos" e medicamentos com receita. Ela inclui o envio por "parâmetros de URL" e nomes de eventos e conversões, e prevê restrição ou suspensão do uso das ferramentas. A frase da correção ("não disparar o Pixel do Meta nem enviar evento ou parâmetro que revele condição de saúde") pode ser lida como "não usar o Pixel em lugar nenhum". Sugestão: "na página do formulário, não disparar o Pixel do Meta, ou garantir que nenhum evento, nome de conversão ou parâmetro de endereço revele condição de saúde (a Meta proíbe e pode restringir a conta)".

### A4. Correção 3: precisão sobre onde está cada coisa
"Hoje diz que não há pixel nem dado de saúde no site, e há os dois." Pela frente 1, o **site** tem a tag do Google Ads; o **Pixel do Meta** e o **formulário com dado de saúde** estão no **portal**, que a política chama de "sistema externo". Escrito assim, o cliente pode responder que o Pixel não está no site. Sugestão: "A política diz que não há pixels de publicidade e que dados de saúde não passam pelo site. Hoje o site usa a tag de anúncios do Google, e o portal de agendamento, ligado ao site, usa o Pixel do Meta e coleta diagnóstico e medicação. A política precisa cobrir site e portal."

### A5. Números e afirmações que não batem com as frentes
- **Pergunta 10:** "troca constante, segunda dor mais citada". Pela frente 4, a troca aparece em 6 reclamações. "A empresa só avisa depois" e "pagou adiantado" aparecem em 7 cada. A troca é a segunda na numeração da frente, não em frequência. Trocar por "uma das queixas mais frequentes".
- **Pergunta 9:** "o ângulo do filho que mora longe, que só a GrandCare usa em SC". Vale só para **anúncios**. A Geração de Saúde, que atua em Florianópolis, tem uma página inteira para "Familiares que moram longe" (dossiê, seção 3). Se ficar, escrever "que nenhum anúncio de concorrente em SC usa".
- **Pergunta 5:** "a empresa assume as faltas" aparece entre aspas, mas a fala literal do vídeo é "A EMPRESA VAI FICAR RESPONSÁVEL PELAS FALTAS". Ou se usa a frase literal, ou se tiram as aspas.
- **Pergunta 18:** "escondida, vira reclamação (houve caso em Florianópolis)". O caso é de outra empresa (frente 4), mas a frase deixa margem para o cliente entender que foi com ele. Sugestão: "já vimos uma família de Florianópolis reclamar disso em público com outra empresa".
- **Pergunta 19:** "aparece no autocomplete e nas reclamações". Nas reclamações há um único caso, do lado da cuidadora (Said, BH). O resto vem do Reddit e da busca. Sugestão: "é dúvida frequente na busca do Google e causa atrito entre família e cuidadora".
- **Correção 8:** "trocar o telefone antigo (48) 99841-8140". Que o número é antigo é leitura da pesquisa (ele está no ND+ de 2022 e no Maps). A pergunta 3 pergunta qual é o oficial. Sugestão: "trocar, nas fichas do Maps, o (48) 99841-8140 pelo número oficial, se ele não for mais o principal". "Juntar as duas fichas": no Google, na prática, a ficha vazia é marcada como duplicada ou removida e se mantém a que tem as 5 avaliações. Vale dizer isso para o cliente não perder as avaliações.

### A6. Correção 10: duas salvaguardas
Pedir avaliação a todas as famílias, sem oferecer nada em troca e sem escolher só as satisfeitas: as políticas do Google vedam incentivo e seleção. Orientar a família a não citar diagnóstico nem detalhes clínicos do idoso na avaliação pública, porque é dado de saúde de terceiro e, se a GrandCare responder ou reaproveitar, toca o sigilo (Código de Ética, art. 52). As políticas do Google não foram conferidas nesta revisão.

### A7. Outros ajustes de texto
- Pergunta 16: "inclusive por falecimento" pode ficar como "inclusive em caso de óbito". O sentido é o mesmo, com um tom mais adequado para quem vive isso todo dia.
- Pergunta 27: "Resolve também a contradição de 15, 20 e 23 anos nos vídeos" pode virar "e deixa uma versão só, já que os vídeos falam em 15, 20 e 23 anos". As três versões estão nas fontes (M1, M2 e vídeo do site).
- Pergunta 32: "ou são imagens de banco ou geradas por IA?" está certa e é neutra. Pode ficar.
- Pergunta 31: "notificação do Coren" está certa. Vale explicar o motivo ("para sabermos que cuidado tomar ao voltar a anunciar") para não soar como auditoria.
- Lembrete do ND+ no fim: o cliente sabe que pagou pelo conteúdo. Para ele basta "nas próximas peças, o texto do ND+ de 2022 entra como 'conteúdo publicado no ND+'".

---

## Conferido

**Contagens.** 38 perguntas numeradas de 1 a 38, sem salto: 12 de P1, 20 de P2 e 6 de P3. Dez correções. A lista das "dez perguntas" tem de fato dez números.

**Afirmações conferidas contra as frentes, que passaram:**
- Abertura do CNPJ em 20/10/2021, e-mail financeiro@androtech.com.br (só no cnpj.ws) e telefone (44) 9183-0285 (frente 1).
- Os quatro depoimentos com nomes, papéis e "Médico referenciador" (frente 1). A classificação como modelo é suposição forte (ver B2).
- "15+", "250+", "500+", "+500 famílias" e "no Brasil" no site (frente 1).
- 15, 20 e 23 anos; "Albarnaz" no M2 (frentes 1 e 3).
- Superlativos, todos literais: "Os melhores profissionais para cuidar de idosos em casa ou hospitais." (frente 1, anúncios Google), "a melhor equipe de profissionais da região" (M2, frente 3), "SABEM QUE A MINHA ENTREGA HOJE É A MELHOR DA CIDADE" (vídeo do site, frente 1), "Referência em Cuidado Domiciliar" (site).
- "Com prescrição médica, a GrandCare organiza tudo" (Reels de 15/04/2026, frente 1); Reels do Sr. Carlos de 15/10/2024; podcast REICAST (frente 1).
- Três versões de horário; "Visite nossa sede" sem endereço; duas fichas no Maps e o (48) 99841-8140 (frente 1).
- Formulário com diagnóstico e medicação, sem aceite, com Pixel e API de Conversões; política de 03/08/2026 contrária à prática; página pós-formulário recebendo nome, telefone e e-mail no endereço (frente 1).
- 5 avaliações contra 48 a 273 (dossiê, seção 3).
- 7 reclamações de aviso tardio e 7 de pagamento adiantado (frente 4).
- Nonno com primeiro plantão pago depois e sem multa; Acuidar sem multa com 30 dias de aviso; Cuidare sem período mínimo (frente 2).
- Avaliação com "muitos anos" (frente 2); M1 com "registro do que aconteceu no plantão e um canal direto com você" (frente 3).
- ND+ como "Branded Studio ND" (frente 1).

**Normas reabertas hoje no texto oficial:**
- Resolução Cofen 554/2017 (cofen.gov.br, 18:17 UTC): art. 2º, VIII, alíneas "a" e "e"; art. 3º e §1º (nome, número de inscrição e categoria; especialista só com título registrado); art. 4º, I, IV, V, X e XII. As citações da peça estão corretas, com a ressalva da alínea "e" na correção 7.
- Código de Ética da Enfermagem, Resolução Cofen 564/2017 (cofen.gov.br, 18:17 UTC): arts. 52, 53, 66, 84 e 86. O art. 86 bate com a peça. O parágrafo único do art. 86 (citar casos ou inserir imagens que identifiquem pessoas sem autorização prévia) reforça as perguntas 24 e 32.
- Resolução Cofen 782/2025 (cofen.gov.br, 18:19 UTC): art. 4º (ERT e CRT afixada); ART com validade de 12 meses. A pergunta 27 está correta.
- RDC Anvisa 917/2024 (in.gov.br, 18:18 UTC): arts. 1º a 5º, 8º e 10 a 12. Alvará, RT, CNES e PAD por paciente estão corretos na pergunta 28; a consequência para o vocabulário das peças não está na norma (A2).
- LGPD, Lei 13.709/2018 (planalto.gov.br, 18:17 UTC): art. 5º, II; art. 11, I e II, "f"; art. 41. A citação do art. 11, I, está correta; a solução do "aviso" não (A3).
- CDC, Lei 8.078/1990 (planalto.gov.br, 18:19 UTC): art. 37, §§1º e 2º. A peça não cita artigo do CDC; "publicidade enganosa" é conceito do §1º, e a qualificação deve ficar como risco (B2). O §2º (publicidade abusiva que "explore o medo") também conversa com o vídeo M2.
- Meta, "Sobre informações proibidas" (central de ajuda, 18:18 UTC): renderizou hoje. Passa de PISTA forte, como estava na frente 5, para conferida.

**O que não foi possível conferir:**
- Inscrição do Edemilson no Coren-SC: a consulta pede login, segundo a frente 1, e não tentei de novo.
- Resolução Cofen 766/2024 e Pareceres Coren-SC 002/2015 e 004/2018: conferidos pela frente 5, não reabertos por mim.
- Norma de telenfermagem do Cofen (A2).
- Políticas do Google sobre avaliações (A6).
- Se o Pixel de fato envia campos do formulário à Meta (a frente 1 viu o Pixel na página, não o conteúdo enviado).
- Se a página em andromedicina.com tem tags de terceiros que leiam os dados do endereço.

**Texto.** Acentuação, crase e concordância corretas. Sem marcas fortes de texto de IA. O problema é de público e de registro (B3), não de português.

**Forma.** Documento em markdown com 168 linhas. Para o cliente, convém mandar em PDF ou Google Docs, com perguntas curtas e espaço para resposta, e a parte 2 em página separada (A1).

---

## Veredito

**Bloqueado** para envio ao cliente na forma atual. Libera quando:
1. o coordenador tiver resolvido com o Rafael a relação com a Androtech/Androclinic e reescrito ou cortado a pergunta 1 e as correções 3 e 9 (B1);
2. as correções 1, 4 e 7 estiverem reescritas como risco, com o grau de certeza da pesquisa (B2);
3. "Destrava", rótulos M1/M2/M3, nomes de agentes e jargão tiverem sido trocados por linguagem do cliente, e o documento abrir com autor, objetivo e forma de resposta (B3).

Os avisos A1 (duas levas) e A3 (LGPD) são os que mais pesam depois disso.

---

## Resumo para quem coordenou

1. **Entregue:** parecer em `/home/user/workspace/projetos/grandcare/revisoes/perguntas-para-a-grandcare-2026-10-13.md`. O documento revisado não foi editado.
2. **Decisões principais:** bloqueado para envio na forma atual. O conteúdo está sustentado pelas frentes, com seis imprecisões pontuais (A5). As citações de norma batem com o texto oficial, com a ressalva da alínea "e" do art. 2º, VIII, da Cofen 554. Os bloqueios são de destino e de grau de certeza: pergunta ao cliente o que é do Rafael (Androtech), suposição apresentada como fato e conclusão jurídica dirigida ao responsável técnico, e linguagem interna. Proposta de primeira leva com 11 blocos e o resto numa segunda.
3. **Pendências:** só o Rafael diz qual é a relação da GrandCare com a Androtech/Androclinic e quem opera site, portal, anúncios e Pixel. Disso dependem as perguntas 1, 3, 33 e 34 e as correções 3 e 9. O advogado define a base legal do formulário (A3). Ficou sem conferir o Coren do Edemilson e a norma de telenfermagem (videochamada nos anúncios).
4. **Próximo passo:** depois da resposta do Rafael sobre a Androtech, reescrever a peça para o cliente (pelo `researcher` ou pelo `copywriter`, em tom de carta do Rafael), separar perguntas (primeira leva) e "ajustes recomendados" e devolver ao `revisor` para liberação.
