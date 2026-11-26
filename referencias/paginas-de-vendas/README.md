# Biblioteca de páginas de vendas brasileiras

Primeira leva coletada em 25/11/2026 (14 páginas de marcas fortes) e revisada no mesmo dia ([revisao.md](revisao.md)). Segunda leva coletada em 26/11/2026, entre 09h45 e 10h00, horário de Brasília (9 páginas), revisada no mesmo dia: 5 ficaram em "Páginas que vendem sem marca forte", 3 em "Sinal fraco ou não verificado" e 1 (Dr. Lucas Firmino) foi para "Marcas fortes" depois de conferida a audiência. Responsável: @researcher.

## Leia antes

O Rafael corrigiu o critério: **"quem tem autoridade não precisa de uma página bonita e bem feita para vender."** Por isso a biblioteca agora tem três grupos.

- **Páginas que vendem sem marca forte (seção principal).** Empresas ou especialistas com autoridade prévia baixa ou média (sem reconhecimento nacional, público próprio pequeno ou médio), que compram mídia para a página e mesmo assim se mantêm. Aqui a página faz mais trabalho de venda, então ela serve de referência de **conversão** e de design.
- **Sinal fraco ou não verificado.** Páginas sem marca forte cujo sinal de tráfego pago é fraco ou não pôde ser verificado. Ficam pelo design e pelo argumento.
- **Marcas fortes: referência de design, não de conversão.** As 14 páginas da primeira leva e o Dr. Lucas Firmino. A venda delas vem em boa parte da marca, então servem para acabamento e organização, não como prova de que a página converte sozinha.

O que os sinais provam, nos dois grupos: **nenhuma página tem taxa de conversão publicada, e nenhuma foi estimada.** O melhor sinal disponível para o grupo sem marca forte é **anúncio pago contínuo** para o domínio na Central de Transparência de Anúncios do Google, verificado em três janelas (novembro de 2025, maio de 2026 e os últimos 30 dias). Quem não tem marca vive de tráfego pago, e anúncio mantido por um ano costuma ser o que se paga; mas isso continua sendo indício, não medida. A Biblioteca de Anúncios do Meta, que mostraria o mesmo para Facebook e Instagram, segue bloqueada neste ambiente (ver "Bloqueios").

Cada ficha traz o campo **"Autoridade prévia"** (alta, média ou baixa, com a fonte do tamanho da audiência) e **"Quanto da conversão vem da marca"** (SUPOSIÇÃO, com o apoio indicado).

## Para que serve

Referência de estrutura, copy e design para as próximas páginas do squad. Cada página tem uma ficha com a anatomia seção por seção (com headline e subheadline literais), o que o design faz bem, o que dá para modelar sem copiar, os pontos fracos e os sinais de venda. As fichas de saúde, finanças e renda têm uma seção "Cuidado de conformidade" que deve ser lida antes de modelar. As capturas em desktop (1440 px) e celular (390 px) estão em `capturas/`.

O que se repete nos dois grupos, o que as páginas sem marca forte fazem a mais e um checklist estão em [padroes.md](padroes.md).

## Como usar

- **Copywriter:** antes de escrever, abra as fichas do mesmo tipo de oferta (cartões abaixo) e leia a "Anatomia". A ordem das seções e as headlines literais são o material mais útil. Não copie frases; use a estrutura.
- **Quem desenha a página:** abra as capturas lado a lado (desktop e celular) e leia "O que o design faz bem". As capturas são longas; abra no navegador e use zoom.
- **Revisor:** as seções "Pontos fracos" e "Cuidado de conformidade" listam o que não deve ser modelado.
- **Para capturar uma página nova:** `node referencias/paginas-de-vendas/capturar.mjs <slug> <url>`. Opções no topo do arquivo `capturar.mjs` (modo "costura" para páginas com animação, `--clicar` e `--esconder` para pop-ups). Na primeira leva, O Novo Mercado, Fluency e Nuvemshop foram capturadas com `--modo=costura`; a Insider, com `--esconder='[class*="cozy-crd"], .needsclick, .cc-window'` e, no celular, também com `--modo=costura`. Na segunda leva, todas foram capturadas com `--modo=costura` (a Macchi, no desktop, com o comando simples).

## Critérios de seleção

1. Página brasileira, em português, no ar na data da leitura (status 200, lida pelo navegador do ambiente).
2. Design profissional, julgado nas capturas: hierarquia clara, tipografia e espaçamento cuidados, boa versão no celular, seções bem resolvidas.
3. Pelo menos um sinal público de venda. Como taxa de conversão quase nunca é pública, os sinais são indiretos e vêm marcados assim:
   - **FATO (dado oficial de companhia aberta)**: número de release de resultados de empresa listada em bolsa (só a Smart Fit).
   - **FATO (lista oficial da Hotmart)** e **FATO (dado oficial da Hotmart)**: ranking Hotmart Galaxy 2026 dos 25 maiores faturamentos da plataforma e marcos de faturamento anunciados pela Hotmart. A Hotmart processa as vendas, então é a fonte oficial desses dados; mas não é auditoria independente, e a lista prova a posição no ranking, não um valor.
   - **FATO (contagem nesta pesquisa)**: número de anúncios na Central de Transparência de Anúncios do Google, consultado por nós em 25/11/2026 (primeira leva) e 26/11/2026 (segunda leva, com as três janelas de data).
   - **PISTA forte (número declarado pela empresa e publicado pela imprensa)**: faturamento, membros ou alunos que a empresa contou a um jornal. É declaração da empresa, sem auditoria, mesmo quando sai em veículo grande.
   - **PISTA**: o que a empresa diz de si na própria página (número de alunos, nota, "a maior do Brasil") ou fonte única não conferida.
   - **SUPOSIÇÃO**: leitura do pesquisador, com o apoio indicado.
   - **Nenhuma ficha traz taxa de conversão.** Nenhuma das páginas publica esse número, e ele não foi estimado.
4. Variedade de tipos de oferta (inclusive produto físico de marca que vende direto ao consumidor, chamado de DTC, e software por assinatura, chamado de SaaS). A quantidade foi decidida pela qualidade, não por cota.
5. **Segunda leva:** autoridade prévia baixa ou média e, de preferência, anúncio pago contínuo para a página. Prioridade para saúde e clínicas.

**Sobre a contagem de anúncios do Google:** a Central de Transparência mostra quantos anúncios já apontaram para o domínio (filtro "qualquer horário") e permite filtrar por período. Na segunda leva, contamos três janelas: 01 a 30/11/2025, 01 a 31/05/2026 e 26/10 a 25/11/2026. Anúncio nas três janelas é chamado de "contínuo" nas fichas. Isso mostra investimento em mídia ao longo do ano, não que a página converte, e conta o domínio inteiro, não só a página. A Central só cobre anúncios do Google (busca, YouTube, Shopping, display); quem anuncia só no Meta aparece com zero.

## Contexto da coleta (importante)

As duas levas foram feitas na semana da Black Friday. Na primeira, sete das 14 páginas estavam com faixa, preço ou campanha de Black Friday (Hashtag, O Novo Mercado, Fluency, G4, FIRE, Insider e Finclass). Na segunda, duas das 9 (Marcenaria 4.0 e a home da Macchi, com roleta de desconto). As fichas indicam isso. A estrutura das páginas é a de sempre, mas preços, contagens regressivas e bônus podem mudar depois de novembro.

## Páginas que vendem sem marca forte

Segunda leva (26/11/2026), já revisada. Autoridade prévia baixa ou média e anúncio pago para o domínio nas três janelas de um ano. São 5 páginas: 3 de saúde ou estética (com "Cuidado de conformidade") e 2 fora de saúde.

**Antes de modelar qualquer página de saúde:** avaliação ou consulta gratuita é vedada a médico (CFM 2.336/2023, art. 11, § 4º, "c") e a dentista (Código de Ética Odontológica, art. 20, IX, e art. 44, I). Em medicina, pode-se mostrar o valor da consulta e as formas de pagamento (art. 9º, VI), mas não o preço de procedimento que depende de avaliação; em odontologia, nem preço nem forma de pagamento (art. 44, I). Textos lidos pelo revisor: [CFM 2.336/2023](https://sistemas.cfm.org.br/normas/arquivos/resolucoes/BR/2023/2336_2023.pdf), [Código de Ética Odontológica (versão do CRO-MG)](https://cromg.org.br/wp-content/uploads/2023/12/codigodeetica2023.pdf), [CFO-196/2019](https://website.cfo.org.br/wp-content/uploads/2019/01/Resolu%c3%a7%c3%a3o-CFO-196-2019.pdf).

### Saúde e clínicas

**Harmony Transplante Capilar**
Rede regional de 8 unidades, captação com formulário na dobra · https://harmonytransplante.com/
Autoridade baixa (Instagram com cerca de 4,8 mil seguidores). Anúncios no Google nas três janelas (25 no total). Referência de design e de organização (preto e dourado, antes e depois com controle deslizante, unidades com foto da fachada). **Não modelar a "avaliação gratuita", que é a chamada principal, nem os títulos que insinuam resultado.**
[Ficha](paginas/harmony-transplante-capilar.md)

**Cirurgia refrativa — Centro Brasileiro de Laser**
Clínica de unidade única em São Paulo · https://centrobrasileirolaser.com.br/
Autoridade baixa (cerca de 3,2 mil seguidores). Anúncios no Google nas três janelas, mas com presença fina fora de maio (1, 9 e 1 anúncios; 12 no total). Vende por clareza: consulta de R$ 150, etapas e para quem é. **O preço do procedimento na headline ("a partir de R$ 3.500") não se modela em medicina;** o valor da consulta, sim.
[Ficha](paginas/centro-brasileiro-de-laser.md)

**Harmonização facial — Clínica Harmê**
Profissional local em Santa Maria (RS) · https://harmeclinica.com.br/
Autoridade baixa (cerca de 3,5 mil seguidores). Anúncios no Google nas três janelas (8, 10 e 8; 20 no total). Página simples e curta que se mantém com mídia; serve de estrutura mínima e de lista do que não copiar em conformidade (parcelamento, promessas, antes e depois).
[Ficha](paginas/harme-clinica-harmonizacao.md)

### Infoproduto de nicho

**Marcenaria 4.0**
Curso de marcenaria para iniciantes com ferramenta incluída · https://cursodemarcenaria.com/
Autoridade baixa a média (canal de nicho no YouTube). Anúncios no Google nas três janelas (33 no total, de ao menos duas contas anunciantes), e o rodapé cita anúncios no Facebook. A melhor página da biblioteca para infoproduto vendido a quem não conhece o autor: curta, preço na dobra, caso com números ("A marcenaria orçou R$ 9.000. O aluno fez por R$ 3.500.").
[Ficha](paginas/marcenaria-4-0.md)

### Produto físico de marca pequena (DTC)

**Par de alianças — Macchi**
Página de produto personalizado de joalheria online · https://www.macchi.com.br/produtos/flash-par-de-aliancas-joy-ouro-18k/
Autoridade média (cerca de 88 mil seguidores). O sinal de mídia mais forte da leva: anúncios no Google nas três janelas, crescendo (52, 61 e 72 anúncios). Design limpo mas simples; vale pela caixa de compra de produto personalizado.
[Ficha](paginas/macchi-aliancas.md)

## Sinal fraco ou não verificado

Também da segunda leva. Ficam pelo design e pela forma de argumentar, mas o sinal de que a página vende com tráfego pago é fraco ou não pôde ser verificado (o Meta segue bloqueado). Não usar como prova de conversão.

**Acompanhamento para emagrecimento — Instituto Balance**
Clínica médica em São Paulo, captação por WhatsApp · https://balanceinstitute.com.br/acompanhamento
Autoridade baixa (cerca de 6,9 mil seguidores). 12 anúncios no Google no total, 5 deles em maio de 2026; nenhum em novembro de 2025 nem nos últimos 30 dias. Design mais refinado da leva, tom contra a promessa fácil, diretor técnico com CRM e UF. **Não modelar a avaliação sem custo nem o "parecer clínico" por WhatsApp.**
[Ficha](paginas/instituto-balance-emagrecimento.md)

**Sou Coluna**
Rede de 13 clínicas de tratamento de coluna · https://soucoluna.com/
Autoridade média (cerca de 118 mil seguidores no perfil nacional). Nenhum anúncio no Google; sinal de mídia não verificado. Melhor experiência de leitura da coleta: mapa da coluna, história de paciente em capítulos, primeira consulta passo a passo. Cuidado com "97% de eficácia" e com frases que afirmam a condição do leitor.
[Ficha](paginas/sou-coluna.md)

**Imersão Imperium — Eduardo Arruda**
Imersão presencial de 2 dias, porta de entrada para mentoria high ticket · https://imersaoimperium.com.br/
Autoridade baixa (cerca de 6,3 mil seguidores). Nenhum anúncio no Google. A página diz "7ª edição"; a busca achou edições e eventos anteriores do mesmo ecossistema na Sympla (PISTA; a contagem de sete não foi confirmada). Preto e dourado, fotos reais de edições anteriores, programação por dia e dois ingressos. Cuidado com a promessa de renda na headline.
[Ficha](paginas/imersao-imperium.md)

## Marcas fortes: referência de design, não de conversão

Primeira leva (25/11/2026) e o Dr. Lucas Firmino (segunda leva, reclassificado). São páginas de empresas com autoridade prévia alta (14 de 15; a Alice é média a alta). Nelas, boa parte da venda provavelmente vem da marca, da audiência ou da base própria, e não da página (cada ficha diz quanto, como SUPOSIÇÃO). Use-as como referência de **design, organização e acabamento**, não como prova de que a página converte sozinha.

### Infoproduto / curso

**Venda Todo Santo Dia (VTSD) — Leandro Ladeira**
Curso perpétuo com vídeo de vendas · https://www.vendatodosantodia.com.br/pv0622
Página longa e limpa: história do autor em capítulos, prova em volume e um "kit de CTA" repetido. Um dos 25 maiores faturamentos da Hotmart. Nicho de renda: ver "Cuidado de conformidade" na ficha antes de modelar headline e depoimentos.
[Ficha](paginas/vtsd-leandro-ladeira.md)

**Excel Impressionador — Hashtag Treinamentos**
Curso de carreira com vídeo curto · https://www.hashtagtreinamentos.com/curso-de-excel-online
Tema escuro bem executado, prova de carreira (vaga, promoção) e segunda metade escrita para o Google. Cerca de 20 mil anúncios no Google; faturamento anual acima de R$ 75 milhões, segundo a empresa (PEGN, 03/2026).
[Ficha](paginas/hashtag-excel-impressionador.md)

### Assinatura de conteúdo

**Reservatório de Dopamina — Eslen Delanogare**
Assinatura de saúde mental e hábitos · https://www.reservatoriodedopamina.com.br/
A página mais "de marca" dos infoprodutos: curta, preço exposto, identidade visual própria e organização por temas. Saúde mental: para cliente de saúde, não modelar a pergunta ao leitor, o enquadramento de medo nem a promessa de resultado (ver "Cuidado de conformidade" na ficha).
[Ficha](paginas/reservatorio-de-dopamina.md)

**O Novo Mercado — Ícaro de Carvalho**
Assinatura de escola de marketing com IA · https://onovomercado.com.br/
Vende a assinatura mostrando a plataforma por dentro, com visual de serviço de streaming. Melhor acabamento "de produto" da lista.
[Ficha](paginas/o-novo-mercado.md)

**Black Friday 2026 — Finclass**
Assinatura de educação financeira, lista de espera de Black Friday · https://www.finclass.com/
Melhor exemplo visual de pilha de valor em cartões numerados. Modelar o formato, não os números: os preços "de" são valores de referência da própria empresa (a soma chega a R$ 12.632,80, e há item "Não disponível para compra" com preço), e preço de referência que nunca foi cobrado pode ser publicidade enganosa (CDC, art. 37, § 1º). Nicho regulado: o bloco de rentabilidade passada também não deve ser modelado sem a skill `conformidade`.
[Ficha](paginas/finclass-black-friday.md)

### Captura e lista de espera

**Comunidade Subido de Tráfego (lista de espera) — Pedro Sobral**
Captura de lançamento com página de vendas completa embaixo · https://go.pedrosobral.com.br/comunidade-subido-de-trafego/lista-de-espera
Ilustrações próprias, entregáveis agrupados por intenção e os melhores avisos de responsabilidade da lista. Nicho de renda: não modelar a promessa da dobra ("R$10.000 no bolso todo mês"); ver "Cuidado de conformidade" na ficha.
[Ficha](paginas/comunidade-subido-lista-de-espera.md)

**Curso de Inglês (captura da Black Fluency) — Fluency Academy**
Captura de pré-venda com direção de arte de campanha · https://fluency.io/br/cursos/ingles/
Tipografia condensada, roxo e amarelo, garantia dupla. A Fluency passou de meio bilhão de reais de faturamento líquido acumulado na Hotmart (anúncio da Hotmart em 28/08/2025).
[Ficha](paginas/fluency-ingles-black.md)

**Laboratório de Tráfego — Pedro Sobral**
Isca gratuita (newsletter semanal) · https://lp.pedrosobral.com.br/laboratorio-de-trafego
Captura curta que mostra exemplos reais do que a pessoa vai receber antes de pedir o e-mail.
[Ficha](paginas/laboratorio-de-trafego.md)

### High ticket / imersão

**G4 Gestão e Estratégia — G4 Educação**
Imersão presencial de 4 dias para empresários, venda consultiva · https://g4business.com/g4-gestao-e-estrategia
Visual de escola executiva (azul-petróleo, dourado, serifa), preço fora da página e qualificação do público no texto. Faturamento de cerca de R$ 500 milhões em 2025, segundo a empresa (Veja publicou como previsão de fechamento em 12/2025).
[Ficha](paginas/g4-gestao-e-estrategia.md)

### Evento

**FIRE '27 — Hotmart**
Ingresso de festival presencial em lotes · https://fire.hotmart.app/
Identidade de festival, o crachá como imagem principal, comparação de ingressos com o que não está incluído riscado. Evento com 42 mil participantes em 11 edições, segundo a Hotmart.
[Ficha](paginas/fire-festival-2027.md)

### Serviço local por assinatura

**Planos e preços — Smart Fit**
Página de planos de academia · https://www.smartfit.com.br/planos
A página de planos mais limpa da lista: três cartões, um destacado por cor, comparação e FAQ de cancelamento. Empresa listada em bolsa, 5,7 milhões de alunos diretos no 3º trimestre de 2026.
[Ficha](paginas/smart-fit-planos.md)

### Saúde (nicho regulado)

**Lentes de porcelana — Dr. Lucas Firmino** (segunda leva, reclassificado)
Clínica de odontologia estética em Belo Horizonte · https://drlucasfirmino.com.br/
Autoridade alta: o perfil do dentista aparece com cerca de 609 mil seguidores no resumo da busca de 26/11/2026 (a IstoÉ citava 243 mil). Anúncios no Google nas três janelas (17 no total). Fundo preto, grade de sorrisos e processo em três consultas. Cuidado: "satisfação garantida", crítica a outras técnicas, superlativos e a grade de "transformações" (CFO-196/2019).
[Ficha](paginas/lentes-dr-lucas-firmino.md)

**Plano de Saúde PME — Alice**
Plano de saúde empresarial para pequenas empresas · https://alice.com.br/plano-de-saude-pme
Página de saúde com tabela de preço por idade, comparação de reajuste com concorrentes e responsável técnico no rodapé. 100 mil membros e receita recorrente anual (ARR, o faturamento de assinaturas projetado para 12 meses) de R$ 1,1 bilhão, segundo a empresa (PEGN, 09/2026). Modelo de organização do rodapé, mas o CRM aparece sem UF.
[Ficha](paginas/alice-plano-pme.md)

### Produto físico / DTC

**Tech T-Shirt® — Insider**
Página de produto de marca que vende direto ao consumidor (DTC) · https://www.insiderstore.com.br/products/tech-t-shirt
Caixa de compra com kits e preço por unidade, redução de risco colada ao botão e avaliações estruturadas (26 mil). Faturamento de mais de R$ 500 milhões em 2025 e estimativa de R$ 800 milhões em 2026, segundo a empresa (Bloomberg Línea, 09/10/2026).
[Ficha](paginas/insider-tech-tshirt.md)

### SaaS / plataforma

**Nuvemshop**
Plataforma de loja virtual, página principal com planos · https://www.nuvemshop.com.br/
Fotografia de marca forte, produto mostrado em uso e tabela de planos com plano gratuito e teste de 7 dias. 180 mil marcas na plataforma, segundo a empresa.
[Ficha](paginas/nuvemshop.md)

## Avaliadas e deixadas de fora

**Segunda leva:**
- **Imersão SST (Joelma Kalil)** — evento de nicho para empresários de saúde e segurança do trabalho, bem desenhado, mas a anfitriã tem cerca de 420 mil seguidores (resumo de busca): autoridade alta no nicho, fora do critério. Foi capturada e depois retirada.
- **IMR 2026 (Enjoy Business, ES)** — evento já realizado (23 e 24/09/2026), mas a página ainda anunciava "lote 1 aberto" em 26/11/2026.
- **Mais Cabello** — rede de mais de 30 unidades com celebridades na página: autoridade alta.
- **ITC Vertebral** — muitos anúncios no Google (cerca de 700), mas é rede nacional conhecida; não foi analisada a fundo.
- **Vegpet (ração Bicho Green)** — anúncios contínuos no Google (21) e case da Nuvemshop, mas página de produto de loja padrão, abaixo do critério de design.
- **Afinemed, Aidoo, Clínica PACE, Sou Menos Peso, Medli (emagrecimento)** — bom design, mas sem anúncios no Google e sem outro sinal verificável. Aidoo cita nomes de medicamentos na página, o que a skill `conformidade` veta.
- **Do Zero ao Barbeiro, Patrícia Brüske (confeitaria), Danielle Morelli e Dentista Marketeiro (mentorias para dentistas), Imersão Mestre, Varejo Raiz** — sem anúncios no Google ou só em uma janela; sinal insuficiente.
- **Ocular Laser Brasil** — 20 anúncios contínuos no Google, mas a página entrou em loop de redirecionamento no navegador do ambiente e não foi lida.
- **Hair Fue, FUE Capilar, Capilclinic, Refrativa Clinic, Clínica Lorandi, Dra. Juliana Galan, Executive Checkup, Clínica Coluna SP, Dr. Haruo Nishimura** — sem anúncios (ou só um) no Google.

**Primeira leva:**

- **Fórmula de Lançamento (lista de espera), Érico Rocha** — no ar e de player relevante (Hotmart Galaxy 2026), mas o design é mais genérico que o da lista de espera do Subido, que cumpre o mesmo papel.
- **Brasil Paralelo (página de planos de assinatura)** — oferta simples e direta, mas a captura no celular saiu com seções em branco e o design não acrescenta ao que Smart Fit e Finclass já mostram.
- **Zissou (página de produto de colchão)** — página de produto padrão de loja, com pouco a modelar além do que a Insider mostra.
- **Espaçolaser (página de promoção)** — a faixa da página ainda dizia "dia das mães" em novembro; design abaixo do critério.
- **Manual (saúde masculina)** — bloqueou o navegador do ambiente (verificação de segurança da Vercel, erro 429). Não foi lida; nada foi descrito sobre ela.

## Bloqueios e limites desta coleta

- **Biblioteca de Anúncios do Meta:** devolveu erro 403 e nenhum resultado para qualquer busca, inclusive "nubank", em 25/11/2026. Em 26/11/2026 tentei de novo por outros caminhos (versão m.facebook.com com navegador de celular, pt-br.facebook.com e busca em inglês com país "ALL"): a página carrega, mas a consulta interna não devolve anúncios sem login. Por isso nenhuma ficha traz tempo de veiculação de anúncio no Meta, que era o sinal preferido. Vale repetir a verificação com login de um computador do Brasil. Para não repetir, as fichas não mencionam esse bloqueio uma a uma.
- **Wayback Machine (histórico das páginas):** a conexão com web.archive.org caiu no proxy do ambiente. Não deu para medir há quanto tempo cada página está no ar.
- **Região:** o ambiente acessa a internet por fora do Brasil. Alguns sites mostram aviso de região (Insider) e alguns conteúdos podem variar por país.
- **Seções animadas:** páginas que mostram conteúdo só durante a rolagem foram capturadas no modo "costura". Mesmo assim, uma seção do O Novo Mercado e o carrossel de vídeos da Fluency não aparecem nas imagens.
- **Lacunas da segunda leva:** depois da revisão, só 5 páginas atendem ao critério completo (sem marca forte e com anúncio contínuo verificado), mais 3 com sinal fraco; a faixa pedida era de 10 a 15 (teto, não cota). Faltaram uma página de captura de isca de marca pequena com sinal verificável, uma mentoria high ticket com página própria e sinal, e uma DTC pequena com design forte (a Macchi é simples). A principal causa é o bloqueio do Meta: muitos pequenos anunciam só no Facebook e no Instagram e aparecem com zero no Google. Estudos de caso de agências com taxa de conversão publicada não citavam o cliente ou a URL, então não serviram.
- **Audiência:** os números de seguidores vêm do resumo da busca (Instagram bloqueia sem login), sem data; são PISTA.
- **Checkout não aberto:** preços que só aparecem no checkout (VTSD, por exemplo) ficaram como "não aparece na página".
