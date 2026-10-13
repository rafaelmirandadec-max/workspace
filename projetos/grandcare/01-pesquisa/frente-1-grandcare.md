# Frente 1 — A própria GrandCare (Bloco 1: investigue o produto)

Coletado em: 13/10/2026 (2ª rodada, com o navegador do terminal) · Responsável: @researcher · Fontes abertas: 22 páginas e 4 bases públicas, listadas no fim

Horários de leitura em horário de Brasília. Os arquivos brutos estão em `/tmp/claude-0/gc/` (temporário, não versionado).

---

## Conclusão em cinco frases

A GrandCare é uma microempresa de Florianópolis aberta em 20/10/2021 (FATO, Receita), com dois sócios, o enfermeiro Edemilson Albarnas e a sócia-administradora Larissa Pacheco Cordeiro de Moura, que vende cuidador de idosos e enfermagem em casa ou no hospital, com avaliação inicial gratuita feita por enfermeiro e venda por WhatsApp ou formulário, sem preço público. Ela anuncia de fato: 8 anúncios de texto no Google desde abril de 2025, 5 deles exibidos até 8 a 11/10/2026, e 1 vídeo no Meta desde 29/09/2026 levando a um formulário que pergunta diagnóstico e medicação (FATO). A prova pública continua fraca e parte dela é inventada ou inflada: os 4 depoimentos do site são de modelo (um deles atribuído a "Médico referenciador"), o "15+ anos" aplicado à empresa vem da carreira do fundador, e "250+ profissionais" não tem base num negócio com capital de R$ 20 mil. O ativo real que nenhuma peça explora direito é o próprio Edemilson: o vídeo do site mostra o enfermeiro dizendo ter 23 anos de profissão, 15 de UTI, ter sido cuidador de idosos e ser especialista em feridas, com pacientes atendidos há 3, 5 e 6 anos e indicações de médicos. Há sinais fortes de que a estrutura digital (portal, CRM, página de destino, e-mail no cadastro da Receita) é operada pelo mesmo grupo da Androclinic, o que o Rafael precisa esclarecer antes de qualquer diagnóstico de funil.

---

## 1. O que a GrandCare vende

**Serviços declarados** — FATO (site, lido 11:13; código da página)
Quatro cartões: "Cuidadores de Idosos Especializados", "Assistência ao Idoso", "Cuidados Pós-Cirúrgicos" e "Assistência ao Alzheimer", "em domicílio ou em ambiente hospitalar". Textos dos cartões, literais: "Desenvolvemos uma metodologia de assistência personalizada que proporciona um atendimento único de acordo com as necessidades de cada um!"; "Os serviços de atendimento domiciliar para pacientes com Alzheimer permitem que seu ente querido mantenha a independência." A "metodologia" não é descrita em lugar nenhum.

**Fisioterapia e outros serviços** — FATO de que aparecem; PISTA de que são prestados
- O rodapé da página que recebe quem preenche o formulário (`grandcare.andromedicina.com/servico-v2`, lida 11:17) lista "Enfermagem 24h", "Fisioterapia", "Cuidadores" e "Pós-Cirúrgico". O site principal não cita fisioterapia.
- O cadastro na Receita tem como atividade principal "fornecimento de infraestrutura de apoio e assistência a paciente no domicílio" (CNAE 8712-3/00) e como secundárias enfermagem, fisioterapia, terapia ocupacional, fonoaudiologia, terapia de nutrição enteral e parenteral, comércio atacadista de medicamentos e de material médico-hospitalar (FATO, BrasilAPI e cnpj.ws, 11:31).
- Um Reels de 22/01/2026 fala em "Cuidado domiciliar com fisioterapia, fono..." (PISTA, trecho do Instagram devolvido pelo DuckDuckGo).
- Ter o CNAE não prova que o serviço é prestado. `[A PREENCHER]`: o que de fato se vende hoje.

**Escopo e tarefas** — PISTA (ND+, 08/04/2022, conteúdo pago, ver seção 3)
"podem ir de um banho diário, ajuda na alimentação, uma simples companhia até a assistência completa por 24 horas"; equipe treinada para "cuidados pessoais, preparação das refeições e tarefas domésticas simples", "banho, curativos, tratamento de feridas e manutenção de bolsas de cateter e colostomia".

**Como começa o atendimento** — FATO
- FAQ do site: "Um enfermeiro responsável faz uma visita para conhecer o paciente, o ambiente e a rotina da família. A partir dessa avaliação montamos o plano de cuidado individualizado."
- A página pós-formulário chama o botão de "Agendar Avaliação Gratuita": **a avaliação inicial é gratuita.**
- O agendamento (`portal.grandcarebrasil.com.br/agendamento/`, lido 11:17) marca "a anamnese da nossa equipe de enfermagem" e informa "Atendemos de seg a sex, das 09:00 às 20:00."

**O que o fundador diz que a empresa resolve** — FATO de que ele diz (legendas do vídeo do site, ver seção 2)
A empresa "vai selecionar", "vai ficar responsável pelas faltas" e "vai personalizar uma escala", para a família deixar de montar escala e cobrir falta de cuidador contratado "no particular". É a coisa mais próxima de uma garantia que existe em público, e não está escrita em nenhuma página.

**Formatos (plantão 12h, 24h, hora, mensal), preço, contrato, convênio** — não achado
Nenhum preço ou formato em site, portal, anúncios ou ND+. O formulário pergunta "Tem plano de saúde?" e "Qual é o plano?", e o Reels de 15/04/2026 diz "Com prescrição médica, a GrandCare organiza tudo" (PISTA). Isso sugere atendimento ligado a plano ou a prescrição, mas não confirma convênio. `[A PREENCHER]`

---

## 2. Quem é a empresa

**Cadastro na Receita** — FATO (BrasilAPI, publica.cnpj.ws atualizado em 12/09/2026, minhareceita.org e receitaws; lidos 11:31)
- Razão social: GRANDCARE ESPECIALISTA EM HOME CARE LTDA · Nome fantasia: GRANDCARE · Situação: ativa · Matriz.
- Abertura: 20/10/2021. Ou seja, a empresa tem 4 anos e menos de 12 meses.
- Porte: microempresa · Capital social: R$ 20.000 · Saiu do Simples em 31/12/2025.
- Endereço: Praça XV de Novembro, 312, 4º andar, Edifício Otília Eliza, Centro, Florianópolis, CEP 88010-400.
- Telefone no cadastro: (44) 9183-0285 (DDD do noroeste do Paraná). E-mail no cadastro (só no cnpj.ws): financeiro@androtech.com.br.
- Sócios, ambos desde 20/10/2021: Larissa Pacheco Cordeiro de Moura, sócia-administradora, faixa de 21 a 30 anos; Edemilson Albarnas, sócio, faixa de 41 a 50 anos.
- cnpj.biz bloqueou o acesso ("Detectamos uso de VPN, Proxy") e cnpja.com devolveu verificação de navegador (11:31). As quatro bases que abriram batem entre si.

**Edemilson Albarnas** — FATO de que é sócio; o resto é PISTA (autodeclaração)
- Site: "RESPONSÁVEL TÉCNICO", "Com vasta experiência em enfermagem domiciliar e hospitalar". Sem número de Coren, formação ou foto com nome além do vídeo.
- Vídeo do site (VSL, 5min13s, legendas lidas quadro a quadro a cada 1,5 s, então algumas frases podem ter ficado de fora; 11:29). Frases literais das legendas: "EU TENHO 15 ANOS DE UTI GERAL", "TRABALHEI NUM HOSPITAL MUITO CONHECIDO AQUI EM FLORIANÓPOLIS", "CORRER DE 23 ANOS QUE EU TENHO DE PROFISSÃO", "EU JÁ FUI CUIDADOR DE IDOSOS", "MUITOS MÉDICOS DA CIDADE ME CONHECEM", "HOJE TODOS ESSES MÉDICOS OS CLIENTES DELES SÃO PASSADOS PRA MIM", "SABEM QUE A MINHA ENTREGA HOJE É A MELHOR DA CIDADE", "ESPECIALISTA EM FERIDAS / ESSE É O NOSSO DIFERENCIAL". O jaleco tem bordado "Enf. Edemilson Albarnas" e a tarja do vídeo diz "EDEMILSON ALBARNAS · RESPONSÁVEL TÉCNICO" (FATO visual).
- Instagram pessoal @enf.edemilsonalbarnas: "Proprietário: @grandcarebr Especialista em lesões", 119 seguidores (PISTA, trecho do DuckDuckGo, 11:33).
- Podcast no YouTube "REICAST #038 /2026 EDEMILSON ALBARNAS (ESPECIALISTA EM FERIDAS)" (PISTA, trecho de busca; o YouTube pediu captcha, 11:33). O quadro de prévia do anúncio do Meta mostra um homem de jaleco diante de microfone de podcast. SUPOSIÇÃO: é corte desse episódio.
- Uma foto antiga do Facebook tem no endereço "conheça-edemilson-albarnas-nosso-enfermeiro-responsável-aqui-na-grandcare com 19-" (cortado). SUPOSIÇÃO: "com 19 anos de experiência", o que bateria com 23 anos hoje.
- **Coren:** a consulta pública do Cofen (`servicos.cofen.gov.br/consulta-profissional`) pede login, e o endereço de consulta do Coren-SC deu 404 (14:30). Inscrição **não verificada**. LinkedIn não procurado nesta rodada (o DuckDuckGo passou a pedir captcha na busca pelo nome).
- Observação: na Receita ele é "Sócio"; quem administra é Larissa. O site e o Instagram falam dele como fundador e "proprietário". Não é contradição, mas a copy não deve dizer "fundador e dono" sem confirmar.

**Tempo de existência** — FATO + leitura
A empresa existe desde 20/10/2021. O site diz "15+ Anos de Experiência" no bloco de números da empresa (valor no código da página, FATO), sob o título "Há Anos Elevando o Padrão da Assistência Domiciliar no Brasil". Pelo vídeo, os 15 anos são de UTI do fundador. No vídeo ele também diz "FAMÍLIAS QUE ESTÃO COM A GENTE DESDE O INÍCIO / 6 ANOS" e "TEMOS PACIENTES DE 5 / 3 ANOS QUE ESTAMOS ATENDENDO". Seis anos é mais que a idade do CNPJ. SUPOSIÇÃO: ele já atendia antes de abrir a empresa. Um Reels de 28/07/2026 conta "Foram 7 anos de banho, hidroginástica, barbeiro..." (PISTA), provavelmente da fase em que ele era cuidador.

**Área atendida** — FATO
- Site e FAQ: Grande Florianópolis, Porto Belo, Balneário Camboriú, Itajaí e Imbituba, "Consulte-nos sobre outras regiões de Santa Catarina." O rodapé do site e a página pós-formulário listam só as três primeiras.
- Formulário: a primeira pergunta só oferece "Grande Florianópolis" ou "Outra região".
- Anúncios do Google: "Cuidadores em Floripa e Região".
- **São Paulo: não atende pelo que é público.** `grandcarebrasil.com.br/sp/` devolve 404 (11:14). Nenhuma outra página fala em SP. O "Brasil" de "GrandCare Brasil" e de "no Brasil" é só nome.

**Endereços** — FATO de que existem três versões
1. Praça XV de Novembro, 312, 4º andar, Centro (Receita e rodapé da página pós-formulário).
2. Rua Lauro Linhares, 688, 6º andar, Trindade (blog antigo, ainda no índice do DuckDuckGo em `grandcarebrasil.com.br/tag/sequelas/`; Solutudo e HomeCare.net.br).
3. Site principal: nenhum. A seção "Nossa Localização" diz "Visite nossa sede" e não informa o endereço.

**A coincidência com fabiomartuscelli.com.br** — explicada em parte
O site não abriu (o proxy devolveu 502 na conexão, 11:32). Pela busca, é o site do publicitário Fabio Martuscelli (Martuscelli.co, São Paulo). A Rua Lauro Linhares, 688 é um prédio comercial com vários inquilinos ("Centro Executivo Trindade": Agência Empírico, Mencare, Inusittá, Armazém 3, segundo os resultados de busca). O endereço em comum se explica pelo prédio. O WhatsApp em comum não foi conferido e deixou de ser relevante.

**Ligação com a Androclinic / Androtech** — FATO nos pontos abaixo; a relação é SUPOSIÇÃO
- E-mail no cadastro da Receita: financeiro@androtech.com.br (cnpj.ws).
- O formulário, depois de enviado, leva a `https://grandcare.andromedicina.com/servico-v2` (código `destino.js`, lido 11:15). `andromedicina.com` e `androtech.com.br` abrem um quiz de "Principal Problema sexual" com "Avaliação GRATUITA" (11:18 e 11:32).
- Na Biblioteca do Meta, a busca "grandcare" devolve 1 anúncio da Grand Care Brasil e 4 da página "Androclinic Brasil" (ver seção 4).
- A Mencare ("tratamentos para homens que enfrentam problemas de disfunções") aparece com o mesmo endereço antigo da GrandCare, Lauro Linhares, 688 (PISTA, busca).
SUPOSIÇÃO: o mesmo grupo ou a mesma equipe cuida da tecnologia, do tráfego e talvez do financeiro da GrandCare e da Androclinic. `[A PREENCHER]` com o Rafael: qual é a relação, e se a equipe dele já opera esse funil.

**Tamanho** — PISTA e SUPOSIÇÃO
O site diz "250+ Profissionais Qualificadas" e "500+ Pacientes Atendidos" (FATO de que está escrito). A Receita mostra microempresa com R$ 20 mil de capital. SUPOSIÇÃO: 250 deve ser o banco de profissionais cadastrados, não equipe ativa. O formulário tem um caminho "Sou profissional de saúde" para recrutar (com currículo), o que confirma que a GrandCare recruta pelo próprio portal. `[A PREENCHER]`: equipe ativa, banco de cadastro, clientes ativos.

---

## 3. Promessa, provas e CTA

**Promessa** — FATO (site, lido 11:13)
Título "Cuidado que faz diferença."; faixa "Segurança e Profissionalismo · Referência em Cuidado Domiciliar · Atendimento 24h via WhatsApp"; descrição "Home Care com excelência, humanidade e profissionalismo. Cuidando de você e sua família." Título da aba: "GrandCare — Cuidado que faz diferença"; título de compartilhamento: "GrandCare — Enfermagem Domiciliar e Hospitalar".
SUPOSIÇÃO (cruzar com a frente 3): continua sendo promessa de categoria. A tese mais forte está escondida no vídeo: "A FAMÍLIA TAMBÉM MUITAS VEZES ESTÁ DOENTE", "VOCÊS ESTÃO SE PREOCUPANDO COM O CUIDADOR E NÃO COM O SEU FAMILIAR", "A EMPRESA VAI FICAR RESPONSÁVEL PELAS FALTAS". O Reels de 22/01/2026 repete: "Não é só o paciente que adoece. A família também sofre… e muitas vezes, em silêncio." (PISTA).

**Prova social — cartões**

> **Bloco de números do site**
> O que diz: "15+ Anos de Experiência", "500+ Pacientes Atendidos", "24h Atendimento Contínuo", "250+ Profissionais Qualificadas" (FATO, valores no código da página; quem lê o texto sem rolar vê "0+" até a animação rodar).
> Base: 15 anos é tempo de UTI do fundador, não da empresa (aberta em 2021). 500 e 250 não têm base pública. Ao lado, "+500 famílias confiam na GrandCare".
> Leitura: dois números contradizem o cadastro público. Em saúde, isso é risco de publicidade enganosa. Não usar em peça até o cliente comprovar.

> **Depoimentos do site**
> O que existe: Maria Silva ("Filha de paciente"), João Santos ("Familiar de paciente"), Ana Costa ("Paciente"), Carlos Oliveira ("Médico referenciador"), todos "5 meses atrás", cinco estrelas, sem foto (FATO; os papéis aparecem na página pós-formulário). O texto de Carlos: "Profissionais certificados e comprometidos. A GrandCare segue rigorosamente as recomendações clínicas. Parceria confiável."
> Leitura: SUPOSIÇÃO forte de texto de modelo (nomes de preenchimento, data idêntica, sem rosto). O depoimento de "Médico referenciador" é o mais delicado: depoimento de médico sobre um serviço de saúde, provavelmente fictício. Bloqueio do protocolo: não usar.

> **Depoimento real possível**
> Reels de 15/10/2024: "Neste vídeo, o Sr. Carlos compartilha como é ser atendido pela equipe da Grand Care" (PISTA, trecho do Instagram via busca, 11:33).
> Leitura: é o único indício de depoimento real. `[A PREENCHER]`: se existe autorização por escrito e se o paciente ainda é cliente.

> **Avaliações públicas**
> Google Maps (lido 11:34 e 14:29): duas fichas. "Grandcare Enfermagem Domiciliar e Hospitalar", **5,0 com 5 avaliações**; "GrandCare - Home Care", **nenhuma avaliação**, "Fecha 18:00". As duas usam o telefone antigo (48) 99841-8140. Para comparar: Anjos da Guarda Cuidadores, 4,9 com 273 avaliações; Home Mater Cuidadores Florianópolis, 5,0 com 55 (mesma busca).
> Facebook: não abriu sem login (11:32). A Biblioteca do Meta mostra a página "Grand Care Brasil" com **431 curtidas**, categoria "Medical Service" (FATO, dado do anúncio).
> Leitura: existe prova de terceiros, mas é mínima (5 avaliações) e fica numa ficha duplicada com telefone antigo.

> **Imprensa**
> ND+, "Grandcare: cuidados profissionais e humanizados na sua casa", 08/04/2022 às 09h51, assinado **"Branded Studio ND"** (FATO, lido 14:30). É conteúdo pago. Só pode ser citado como "conteúdo publicado no ND+", nunca como "matéria" ou "destaque na imprensa".

**CTA e para onde leva** — FATO
- Site: todos os botões abrem WhatsApp (48) 6136-9132, com mensagem pronta por serviço ("Olá! Gostaria de solicitar um profissional para: Assistência ao Alzheimer."). Há um botão específico para quem assistiu ao vídeo ("Olá! Assisti ao vídeo e gostaria de tirar algumas dúvidas.").
- Horário: o FAQ promete "24 horas por dia, 7 dias por semana, inclusive feriados"; o agendamento diz "seg a sex, das 09:00 às 20:00"; a ficha do Maps diz "Fecha 18:00". Três horários diferentes.

---

## 4. Funil atual

**Google Ads → site → WhatsApp** — FATO (Central de Transparência, lida 11:21 a 11:24)
- Anunciante verificado: **GRANDCARE ESPECIALISTA EM HOME CARE LTDA** (ID AR13903972317374971905), "A identidade do anunciante foi verificada". Nome exibido no anúncio: "GRAND CARE BRASIL". Só esse anunciante aparece no domínio, apesar do aviso genérico de "várias contas".
- 8 anúncios, todos de pesquisa em texto, todos para `www.grandcarebrasil.com.br/`. Nenhum mostra telefone na prévia.
- O site tem a tag de conversão do Google Ads (AW-11414930730), com conversões separadas para clique no WhatsApp e para o formulário (código `google-ads.js`).

Os 8 anúncios (primeira e última exibição; textos literais das prévias):

> **CR14226669239141400577** · 26/04/2025 a 11/10/2026 · ativo
> "GrandCare Brasil - Cuidadores em Florianópolis" / "Cuidadores de idosos atenciosos e qualificados para o atendimento domiciliar. Prezamos pelo carinho e cuidado a cada paciente que atendemos. Faça contato aqui.…" (com imagem de casal idoso e profissional de jaleco)

> **CR15306968825367363585** · 02/05/2025 a 08/10/2026 · ativo · 2 variações
> "GrandCare Brasil - Home Care" / "Cuidadores de idosos atenciosos e qualificados para o atendimento domiciliar 24h." · variação: "Cuidadores profissionais treinados para cuidar de idosos em casa ou hospitais."

> **CR16749549384047263745** · 15/07/2025 a 08/10/2026 · ativo · 3 variações
> "Cuidador 24h Para Idosos - Cuidadores em Floripa e Região" / "Cuidadores de idosos atenciosos e qualificados para o atendimento domiciliar 24h." · variações com "Cuidadores profissionais treinados para cuidar de idosos em casa ou hospitais." e o título "Cuidadores em Floripa e Região - Cuidadores de Idosos em Casa"

> **CR07635318719656230913** · 06/08/2025 a 08/10/2026 · ativo · 3 variações
> "Cuidadores Para Hospital - Cuidadores em Floripa e Região" / "Prezamos pelo carinho e cuidado a cada idoso que atendemos. Faça contato aqui." · variações: "Cuidadores em Floripa e Região - GrandCare Brasil" / "Os melhores profissionais para cuidar de idosos em casa ou hospitais."; e "Cuidadores Para Hospital…" / "Cuidadores profissionais treinados…"

> **CR11241546434459205633** · 06/08/2025 a 08/10/2026 · ativo · 3 variações
> "Cuidadores em Floripa e Região - Cuidadores de Idosos em Casa" / "Cuidadores de idosos atenciosos e qualificados para o atendimento domiciliar personalizado" · variações: "Cuidadores em Floripa e Região - Cuidados Especiais Em Casa" / "Os melhores profissionais para cuidar de idosos em casa ou hospitais."; e "Home Care - Cuidadores de Idosos em Casa" / "Cuidadores profissionais treinados…"

> **CR16952037464053121025** · 09/01/2026 a 27/05/2026 · encerrado
> "GrandCare Brasil - Home Care - Entre Em Contato" / "Prezamos pelo carinho e cuidado a cada paciente que atendemos. Faça contato aqui." · links: "Quem Somos", "Conheça Nossos Serviços", "Atendimento Domiciliar", "Faça seu Orçamento"

> **CR03522312351715950593** · 07/07/2025 a 12/12/2025 · encerrado
> "Enfermeiros Domiciliares - Cuidador de Idosos Domiciliar" / "Os melhores profissionais para cuidar de idosos em casa ou hospitais."

> **CR09765322469236801537** · 29/04/2025 a 12/12/2025 · encerrado
> "Cuidados Domiciliares Idosos - Cuidadores de Idosos em Casa" / "Cuidadores profissionais treinados para cuidar de idosos em casa ou hospitais."

Leitura: o Google vende **cuidador de idosos em Floripa, 24h, em casa ou hospital**. Nenhum anúncio fala do enfermeiro responsável, da avaliação gratuita, de feridas ou de Alzheimer; o único que cita enfermagem ("Enfermeiros Domiciliares") saiu do ar em 12/12/2025. "Os melhores profissionais" é superlativo sem prova (ponto para a skill `conformidade`).

**Meta Ads → formulário** — FATO (Biblioteca de Anúncios, busca "grandcare", Brasil, todos os status; leitura completa às 11:28, depois de 3 tentativas vazias ou com erro 403)
> **ID 1064531926404052** · página "Grand Care Brasil" (facebook.com/grandcarebr) · ativo desde 29/09/2026
> Formato: vídeo vertical, **sem texto principal**. Título "Grandcare BR", descrição "Agende o seu Orçamento", botão "Saiba mais", destino `portal.grandcarebrasil.com.br/formulariov1/`. Plataformas: Facebook, Instagram, Audience Network, Threads.
> Prévia do vídeo: homem de jaleco com microfone de podcast e idosa com andador apoiada por uma profissional. O áudio não foi transcrito.

Os outros 4 resultados da busca são da página "Androclinic Brasil" (Instagram, botão de WhatsApp, ativos desde 07/10/2026). A Biblioteca não mostra por que entram na busca "grandcare". A busca pela página da GrandCare (ID 154969534364950) devolveu "nenhum anúncio" numa tentativa e o anúncio acima em outra. A Biblioteca estava instável.

**O formulário** — FATO (`portal.grandcarebrasil.com.br/formulario/` e o arquivo de perguntas `perguntas.js`, lidos 11:14 e 11:15; nada foi enviado)
- Duas portas: "Preciso de cuidados — Para mim ou para um familiar" e "Sou profissional de saúde — Quero fazer parte da equipe GrandCare". Serve à família **e** ao recrutamento.
- Caminho da família, em 3 etapas: (1) localização (Grande Florianópolis ou outra região, bairro), "Para quem é o cuidado?" (Pai, Mãe, Irmão, Tio/Tia, Outro), idade; (2) **saúde**: "É acamado / Tem traqueostomia / Tem gastrostomia / Usa sonda/dispositivo / Nenhuma dessas", "Tem plano de saúde?" e qual, "**Diagnóstico / estado de saúde**" (obrigatório, "Descreva o diagnóstico, medicações e cuidados atuais…"), "Já contratou home care antes?", qual serviço e por quanto tempo; (3) nome, WhatsApp, e-mail opcional, "Para retornarmos com uma proposta de cuidado."
- Caminho do profissional: profissão, anos de experiência, certificações ("Ex.: COREN ativo, curso de traqueostomia"), disponibilidade, veículo, casos complexos, cidade e currículo (PDF/DOC até 5 MB).
- **Consentimento LGPD: não há.** Nenhuma caixa de aceite, nenhum link para a política. O único texto é "Suas respostas são usadas apenas para o atendimento da GrandCare."
- Os dados vão para um banco Supabase do próprio portal, e a página tem Pixel do Meta (930227000184776) com API de Conversões e a tag do Google Ads.
- Depois do envio, a pessoa é levada para `grandcare.andromedicina.com/servico-v2`, com nome, telefone, e-mail e parâmetros de campanha no endereço.
- Existe uma segunda versão, `/formulariov1/`, com as mesmas perguntas (comentários do código). É ela que o anúncio do Meta usa.
- A raiz `portal.grandcarebrasil.com.br` mostra publicamente "CRM GrandCare" com links para agendamento, formulário e "Painel administrativo" (não aberto).

**Política de Privacidade e Termos** — FATO (lidos 11:14, versões de 03/08/2026)
- A política diz: "Não usamos cookies de rastreamento de terceiros nem pixels de publicidade." **O site carrega a tag do Google Ads e o portal carrega o Pixel do Meta.** A política está errada.
- Diz que dados de saúde "não passam por este site", mas o formulário do portal, ligado pelo próprio site, pede diagnóstico e medicação.
- Controladora: GrandCare, CNPJ 43.946.737/0001-04, contato grandcare.atendimento@gmail.com. Cita o "portal de agendamento" como "sistema externo" e a hospedagem na Vercel.
- Os Termos dizem que o site "Não constitui diagnóstico" e que "Toda recomendação de cuidado é definida caso a caso, após a anamnese". Foro de Florianópolis.

**Página pós-formulário** (`grandcare.andromedicina.com/servico-v2`, lida 11:17)
Cópia do site com o botão "Agendar Avaliação Gratuita", o vídeo, os mesmos números e depoimentos, e endereço na Praça XV. É uma página do domínio de outra empresa entregando a marca GrandCare.

**Vídeo do site** — FATO
Arquivo de 626 MB, 5min13s, quadrado 1080×1080, numa pasta chamada "PAGINA BETA GC", modificado em 17/02/2026. SUPOSIÇÃO: pesado para quem chega pelo celular a partir do anúncio. Vale o `traffic-strategist` checar a velocidade.

**Blog e SEO** — FATO
Os artigos antigos devolvem 404 (`/idoso-nao-aceita-cuidados/`, `/atendimento-domiciliar-para-pacientes-com-alzheimer/`, `/9-estrategias-para-superar-as-sequelas-do-avc/`, lidos 11:18), sem redirecionamento. O site virou uma página única em Next.js na Vercel. O Bing não tem nenhuma página do domínio indexada (`site:grandcarebrasil.com.br`, 11:20). O tráfego orgânico de busca, se existia, se perdeu.

**Instagram @grandcarebr** — bloqueado (erro na abertura, 11:32); PISTA pelos trechos do DuckDuckGo
Nome "GrandCare | RT - Edemilson A.", 3.847 seguidores, 6 seguindo, 62 posts (data do trecho desconhecida; um trecho mais antigo mostrava 757 seguidores e 22 posts, com a bio "🥼Cuidadores Especializados ️Profissionais Certificados 🏠Atendimento Domiciliar📍Floripa"). Posts com 20 a 28 curtidas. Post de 02/07/2024 com "agende agora uma avaliação gratuita! WhatsApp: 48 9 9676-0234".

---

## 5. Inconsistências encontradas

**Quatro telefones e dois e-mails.** (48) 6136-9132 no site, portal e anúncios via site (FATO); (48) 99841-8140 nas duas fichas do Google Maps e no ND+ de 2022 (FATO); (48) 99676-0234 num post de 2024 (PISTA); (44) 9183-0285 na Receita (FATO). E-mail grandcare.atendimento@gmail.com no site e financeiro@androtech.com.br na Receita. Quem procura "GrandCare" no Maps cai no número antigo.

**Três endereços**, e nenhum no site principal (seção 2).

**Tempo de casa.** "15+ anos de experiência" no bloco da empresa contra CNPJ de 2021. Fica de pé se for atribuído ao Edemilson ("15 anos de UTI", "23 anos de profissão").

**Horário.** 24h todos os dias (FAQ) contra seg a sex, 9h às 20h (agenda) e fecha às 18h (Maps).

**Política de privacidade contra a prática** (pixels, dado de saúde, sem consentimento). Seção 4.

**Cidades.** Cinco no FAQ e no mapa, três no rodapé e na página pós-formulário, uma opção no formulário.

**Texto do blog com "Porto Alegre" e "24 anos".** A página da GrandCare dá 404 e o Arquivo da Internet está bloqueado neste ambiente (conexão recusada, 11:19), então não deu para ler a versão antiga. A frase atribuída a ela existe, idêntica, no artigo da Personale Cuidador: "A Personale Cuidador é sem dúvidas a melhor escolha para contratar cuidadores de idosos em Porto Alegre e região metropolitana. São 24 anos oferecendo a melhor experiência em cuidado domiciliar..." (FATO para a Personale Cuidador, lido 11:20). A versão da Personale Saúde, de 09/12/2021, fala em "25 anos" e não cita Porto Alegre (FATO, lido 11:20). Leitura: o resumo de busca da 1ª rodada copiou exatamente o texto da Personale Cuidador. Isso reforça a SUPOSIÇÃO de cópia, mas não a prova. Como a página saiu do ar, o risco hoje é só histórico.

---

## 6. Pontos fortes e fracos da presença digital

**Fortes**
- Enfermeiro sócio com história concreta e filmada: 23 anos de profissão, 15 de UTI, ex-cuidador, especialista em feridas (autodeclarado em vídeo).
- Avaliação inicial gratuita feita por enfermagem, com agenda online.
- Uma tese de comunicação que já existe na boca do fundador: a família também adoece, e a empresa assume as faltas e a escala.
- Anúncios de busca rodando desde abril de 2025 com anunciante verificado, mais Meta desde setembro de 2026.
- Formulário que qualifica bem o caso (acamado, traqueostomia, gastrostomia, plano, diagnóstico) e separa recrutamento de venda.
- Indícios de clientes antigos e de indicação médica (vídeo), ainda não comprovados.

**Fracos**
- Prova fabricada ou inflada no site (depoimentos de modelo, um deles de "médico"; 15+, 250+, 500+).
- Nenhum preço, formato ou condição de contrato.
- Contatos e endereços divergentes; ficha do Maps duplicada, com telefone antigo e só 5 avaliações, contra 55 e 273 de concorrentes diretos.
- Formulário coletando dado de saúde sem consentimento, política de privacidade contrária à prática e página de destino em domínio de outra empresa.
- Coren do responsável técnico ausente em todas as peças.
- Anúncios genéricos ("cuidadores em Floripa"), sem o diferencial do enfermeiro.
- SEO zerado depois da troca de site.

---

## 7. Feature → benefício (só com o que as fontes sustentam)

| Feature | Benefício funcional | Benefício dimensional | Benefício emocional |
|---|---|---|---|
| Avaliação gratuita por enfermagem (FATO) | Plano feito para o caso antes de pagar | Família decide com informação, sem custo | "Alguém que entende tá olhando pela minha mãe" (SUPOSIÇÃO) |
| Empresa responde por faltas e monta a escala (PISTA, vídeo) | Família não organiza plantão nem cobre falta | Para de ser gerente de cuidador | Volta a ser filho, não fiscal ("só por poder visitar o pai", fala do vídeo) |
| RT enfermeiro com 15 anos de UTI e foco em feridas (PISTA) | Cuidado técnico em lesão, sonda, traqueostomia | Menos ida ao hospital por complicação | Segurança de ter enfermeiro por trás do cuidador |
| Cuidador e enfermagem, casa ou hospital (FATO) | Um fornecedor da internação à rotina | Não troca de empresa quando o quadro muda | Continuidade, sem estranho novo a cada fase |

A coluna emocional é leitura minha, com exceção da frase entre aspas do vídeo. A frente de público deve substituir por falas reais de famílias.

---

## 8. O que isso muda para as próximas fases

**Para o avatar:** o formulário mostra para quem a empresa se prepara: filho ou filha de pai ou mãe com alto grau de dependência (acamado, traqueostomia, gastrostomia, sonda), às vezes com plano de saúde, às vezes que já contratou home care antes. A dor que o fundador descreve é a da família que contratou cuidador "no particular" e virou gerente de escala e de faltas. São duas hipóteses de perfil para validar: o caso complexo pós-alta (enfermagem) e o idoso dependente de longo prazo (cuidador).

**Para a oferta:** já existem três peças reais para montar a oferta: avaliação gratuita por enfermagem, empresa responsável por faltas e escala, e RT enfermeiro com foco em feridas. Falta transformar a responsabilidade pelas faltas em regra escrita (prazo de reposição, por exemplo) e definir formatos e preço. Tudo isso é `[A PREENCHER]`.

**Para a copy e o conteúdo:** proibido usar os 4 depoimentos do site, "+500", "250+" e "15+ anos" como da empresa, "os melhores profissionais", "a melhor da cidade" e o ND+ como "matéria". Permitido, com confirmação: "23 anos de enfermagem, 15 em UTI" atribuído ao Edemilson, com Coren visível; a tese "a família também adoece"; o vídeo do Sr. Carlos, se houver autorização. A matéria-prima de voz está no vídeo do site (legendas transcritas acima): passar ao `brand-architect`.

**Para mídia e funil:** antes de subir verba é preciso arrumar a base. (1) Unificar telefone no Maps, Instagram e Receita e juntar as duas fichas. (2) Pôr endereço no site. (3) Incluir aceite de LGPD específico para dado de saúde no formulário e corrigir a política de privacidade (pixels e dado de saúde). (4) Decidir se a página pós-formulário pode ficar em domínio de terceiro. (5) Testar anúncio de busca com o diferencial do enfermeiro e da avaliação gratuita. Tudo isso passa pela skill `conformidade` e pelo `revisor`.

**Gaps com mais evidência (desta frente):**
1. Prova verificável: site com prova inventada; Maps com 5 avaliações contra 55 e 273 dos concorrentes; Facebook com 431 curtidas (três fontes).
2. Diferencial do enfermeiro sem uso: presente no vídeo, no Instagram e no podcast, ausente dos 5 anúncios ativos do Google e do texto do anúncio do Meta.
3. Promessa de "não faltar cuidador" sem regra escrita: dita no vídeo, ausente do site e dos anúncios.

---

## 9. Bloqueios desta rodada (13/10/2026)

- Instagram @grandcarebr e Facebook: exigem login. Seguidores e posts vieram só de trechos de busca (PISTA).
- Coren: a consulta do Cofen pede login; o endereço do Coren-SC deu 404. Inscrição do RT não verificada.
- Arquivo da Internet (web.archive.org): conexão recusada pelo proxy. Versão antiga do blog e de `/sp/` não lida.
- YouTube e busca do Google: captcha. Podcast REICAST não aberto.
- cnpj.biz e cnpja.com: bloqueio por proxy (substituídos por BrasilAPI, cnpj.ws, minhareceita e receitaws).
- fabiomartuscelli.com.br: erro 502 na conexão.
- DuckDuckGo: passou a pedir captcha em parte das buscas (nome do Edemilson, telefone antigo). LinkedIn não pesquisado.
- Áudio do vídeo do Meta e do VSL: não transcrito (sem ferramenta de transcrição). O VSL foi lido pelas legendas na tela.

## 10. Pendências — só o cliente ou o Rafael respondem `[A PREENCHER]`

1. Formatos vendidos (hora, plantão 12h, 24h, mensal), faixa de preço e se há atendimento via plano de saúde.
2. Regra de reposição de cuidador em falta, contrato, período de experiência.
3. Número do Coren-SC do Edemilson, formação, hospital onde trabalhou, e se aceita aparecer com esses dados.
4. Base dos números do site (500 pacientes, 250 profissionais) e se há depoimentos reais com autorização, incluindo o vídeo do Sr. Carlos.
5. Telefone, e-mail e endereço oficiais, e qual das duas fichas do Maps fica.
6. Quais serviços são prestados de fato (fisioterapia, fono, nutrição) e em quais cidades há equipe hoje.
7. Relação da GrandCare com a Androclinic / Androtech: quem opera o portal, o CRM, os anúncios e a página `andromedicina.com`.
8. Papel da sócia-administradora Larissa na operação e na comunicação.
9. Verba atual em Google e Meta, e de onde vêm os clientes hoje (indicação médica, Google, Instagram).
10. `[medir]`: leads por formulário e por WhatsApp, taxa de agendamento da avaliação, taxa de fechamento, tempo de resposta.

**O que a falta delas muda:** sem 1 e 2, não há oferta, só "agende uma avaliação". Sem 3 e 4, o principal diferencial e qualquer prova social ficam fora das peças. Sem 5, todo tráfego novo continua chegando em números diferentes. Sem 7, o diagnóstico de funil pode recomendar mudanças numa estrutura que a própria equipe do Rafael já opera, ou que pertence a terceiros.

---

## Fontes (todas lidas em 13/10/2026; horário de Brasília)

1. Site — https://www.grandcarebrasil.com.br/ (11:13; texto, HTML e código `app/page-7fef66d60664d324.js` com números, FAQ e cartões)
2. Política de Privacidade e Termos — https://www.grandcarebrasil.com.br/politica-de-privacidade e /termos-de-uso (11:14)
3. Página SP — https://grandcarebrasil.com.br/sp/ → 404 (11:14)
4. Formulário — https://portal.grandcarebrasil.com.br/formulario/ (11:14) e scripts `perguntas.js`, `formulario.js`, `destino.js`, `backend.js`, `meta.js`, `google-ads.js` (11:15)
5. Agendamento — https://portal.grandcarebrasil.com.br/agendamento/ e raiz do portal (11:17)
6. Página pós-formulário — https://grandcare.andromedicina.com/servico-v2 (11:17)
7. Vídeo do site — arquivo "GrandCare - VSL.mp4" no Vercel Blob (11:29; legendas lidas quadro a quadro)
8. Blog antigo — três URLs, todas 404 (11:18)
9. Personale Saúde e Personale Cuidador — https://personalesaude.com.br/o-que-fazer-quando-o-idoso-nao-aceita-cuidados e https://personalecuidador.com.br/o-que-fazer-quando-o-idoso-nao-aceita-cuidados/ (11:20)
10. Central de Transparência do Google — https://adstransparency.google.com/?region=BR&domain=grandcarebrasil.com.br, página do anunciante AR13903972317374971905 e os 8 criativos com imagens de prévia (11:21 a 11:24)
11. Biblioteca de Anúncios do Meta — busca "grandcare", Brasil, todos os status (11:26 a 11:28)
12. CNPJ — https://brasilapi.com.br/api/cnpj/v1/43946737000104, https://publica.cnpj.ws/cnpj/43946737000104, https://minhareceita.org/43946737000104, https://receitaws.com.br/v1/cnpj/43946737000104 (11:31)
13. andromedicina.com e androtech.com.br (11:18 e 11:32)
14. Google Maps — buscas "grandcare florianopolis" e "GrandCare - Home Care Florianópolis" (11:34 e 14:29)
15. ND+ — https://ndmais.com.br/saude/grandcare-cuidados-profissionais-e-humanizados-na-sua-casa/ (14:30)
16. Buscas no DuckDuckGo (página html): "grandcarebr instagram", "Albarnas enfermeiro", "fabiomartuscelli.com.br", "Lauro Linhares 688 grandcare", "grandcarebrasil.com.br idoso não aceita cuidados" (11:20 a 11:33)
17. Bing — `site:grandcarebrasil.com.br` sem resultados (11:20)
18. Tentativas bloqueadas: facebook.com/grandcarebr, instagram.com/grandcarebr, cnpj.biz, cnpja.com, web.archive.org, YouTube, busca do Google, fabiomartuscelli.com.br, servicos.cofen.gov.br, corensc.gov.br
