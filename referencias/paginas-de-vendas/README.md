# Biblioteca de páginas de vendas brasileiras

Coletada em 25/11/2026 (leituras entre 15h40 e 16h10, horário de Brasília) · 14 páginas · Responsável: @researcher

## Para que serve

Referência de estrutura, copy e design para as próximas páginas do squad. Cada página tem uma ficha com a anatomia seção por seção (com headline e subheadline literais), o que o design faz bem, o que dá para modelar sem copiar, os pontos fracos e os sinais de que a página vende. As capturas em desktop (1440 px) e celular (390 px) estão em `capturas/`.

O resumo do que se repete nas melhores e um checklist para usar nas próximas páginas estão em [padroes.md](padroes.md).

## Como usar

- **Copywriter:** antes de escrever, abra as fichas do mesmo tipo de oferta (cartões abaixo) e leia a "Anatomia". A ordem das seções e as headlines literais são o material mais útil. Não copie frases; use a estrutura.
- **Quem desenha a página:** abra as capturas lado a lado (desktop e celular) e leia "O que o design faz bem". As capturas são longas; abra no navegador e use zoom.
- **Revisor:** as seções "Pontos fracos" e "Cuidado de conformidade" listam o que não deve ser modelado.
- **Para capturar uma página nova:** `node referencias/paginas-de-vendas/capturar.mjs <slug> <url>`. Opções no topo do arquivo `capturar.mjs` (modo "costura" para páginas com animação, `--clicar` e `--esconder` para pop-ups). Nesta coleta, O Novo Mercado, Fluency e Nuvemshop foram capturadas com `--modo=costura`; a Insider, com `--esconder='[class*="cozy-crd"], .needsclick, .cc-window'` e, no celular, também com `--modo=costura`. As demais, com o comando simples.

## Critérios de seleção

1. Página brasileira, em português, no ar na data da leitura (status 200, lida pelo navegador do ambiente).
2. Design profissional, julgado nas capturas: hierarquia clara, tipografia e espaçamento cuidados, boa versão no celular, seções bem resolvidas.
3. Pelo menos um sinal público de que a operação vende. Como taxa de conversão quase nunca é pública, os sinais são indiretos e vêm marcados:
   - **FATO**: dado com fonte verificável (lista Hotmart Galaxy 2026 dos 25 maiores faturamentos da Hotmart, resultados de empresa listada em bolsa, faturamento publicado pela imprensa, contagem de anúncios na Central de Transparência de Anúncios do Google).
   - **PISTA**: o que a empresa diz de si (número de alunos, nota, "a maior do Brasil") ou fonte única não conferida.
   - **SUPOSIÇÃO**: leitura do pesquisador, com o apoio indicado.
   - **Nenhuma ficha traz taxa de conversão.** Nenhuma das páginas publica esse número, e ele não foi estimado.
4. Variedade de tipos de oferta. A quantidade foi decidida pela qualidade (14), não por cota.

**Sobre a contagem de anúncios do Google:** a Central de Transparência mostra quantos anúncios já apontaram para o domínio (filtro "qualquer horário"). Mostra que há investimento em mídia, não que a página converte, e conta o domínio inteiro, não só a página.

## Contexto da coleta (importante)

A coleta foi feita na semana da Black Friday. Sete das 14 páginas estavam com faixa, preço ou campanha de Black Friday (Hashtag, O Novo Mercado, Fluency, G4, FIRE, Insider e Finclass). As fichas indicam isso. A estrutura das páginas é a de sempre, mas preços, contagens regressivas e bônus podem mudar depois de novembro.

## As páginas

### Infoproduto / curso

**Venda Todo Santo Dia (VTSD) — Leandro Ladeira**
Curso perpétuo com vídeo de vendas · https://www.vendatodosantodia.com.br/pv0622
Página longa e limpa: história do autor em capítulos, prova em volume e um "kit de CTA" repetido. Um dos 25 maiores faturamentos da Hotmart.
[Ficha](paginas/vtsd-leandro-ladeira.md)

**Excel Impressionador — Hashtag Treinamentos**
Curso de carreira com vídeo curto · https://www.hashtagtreinamentos.com/curso-de-excel-online
Tema escuro bem executado, prova de carreira (vaga, promoção) e segunda metade escrita para o Google. Cerca de 20 mil anúncios no Google; faturamento acima de R$ 75 milhões.
[Ficha](paginas/hashtag-excel-impressionador.md)

### Assinatura de conteúdo

**Reservatório de Dopamina — Eslen Delanogare**
Assinatura de saúde mental e hábitos · https://www.reservatoriodedopamina.com.br/
A página mais "de marca" dos infoprodutos: curta, preço exposto, entrada pelo problema do leitor e posicionamento contra promessa fácil. Tem cuidado de conformidade (saúde).
[Ficha](paginas/reservatorio-de-dopamina.md)

**O Novo Mercado — Ícaro de Carvalho**
Assinatura de escola de marketing com IA · https://onovomercado.com.br/
Vende a assinatura mostrando a plataforma por dentro, com visual de serviço de streaming. Melhor acabamento "de produto" da lista.
[Ficha](paginas/o-novo-mercado.md)

**Black Friday 2026 — Finclass**
Assinatura de educação financeira, lista de espera de Black Friday · https://www.finclass.com/
Melhor exemplo de pilha de valor em cartões numerados com preço riscado. Nicho regulado: o bloco de rentabilidade não deve ser modelado sem conformidade.
[Ficha](paginas/finclass-black-friday.md)

### Captura e lista de espera

**Comunidade Subido de Tráfego (lista de espera) — Pedro Sobral**
Captura de lançamento com página de vendas completa embaixo · https://go.pedrosobral.com.br/comunidade-subido-de-trafego/lista-de-espera
Ilustrações próprias, entregáveis agrupados por intenção e os melhores avisos de responsabilidade da lista.
[Ficha](paginas/comunidade-subido-lista-de-espera.md)

**Curso de Inglês (captura da Black Fluency) — Fluency Academy**
Captura de pré-venda com direção de arte de campanha · https://fluency.io/br/cursos/ingles/
Tipografia condensada, roxo e amarelo, garantia dupla. Empresa com meio bilhão de reais faturados na Hotmart.
[Ficha](paginas/fluency-ingles-black.md)

**Laboratório de Tráfego — Pedro Sobral**
Isca gratuita (newsletter semanal) · https://lp.pedrosobral.com.br/laboratorio-de-trafego
Captura curta que mostra exemplos reais do que a pessoa vai receber antes de pedir o e-mail.
[Ficha](paginas/laboratorio-de-trafego.md)

### High ticket / imersão

**G4 Gestão e Estratégia — G4 Educação**
Imersão presencial de 4 dias para empresários, venda consultiva · https://g4business.com/g4-gestao-e-estrategia
Visual de escola executiva (azul-petróleo, dourado, serifa), preço fora da página e qualificação do público no texto. Empresa com R$ 500 milhões de faturamento em 2025 (Veja).
[Ficha](paginas/g4-gestao-e-estrategia.md)

### Evento

**FIRE '27 — Hotmart**
Ingresso de festival presencial em lotes · https://fire.hotmart.app/
Identidade de festival, o crachá como imagem principal, comparação de ingressos com o que não está incluído riscado. Evento com 42 mil participantes em 11 edições.
[Ficha](paginas/fire-festival-2027.md)

### Serviço local por assinatura

**Planos e preços — Smart Fit**
Página de planos de academia · https://www.smartfit.com.br/planos
A página de planos mais limpa da lista: três cartões, um destacado por cor, comparação e FAQ de cancelamento. Empresa listada, 5,7 milhões de alunos.
[Ficha](paginas/smart-fit-planos.md)

### Saúde (nicho regulado)

**Plano de Saúde PME — Alice**
Plano de saúde empresarial para pequenas empresas · https://alice.com.br/plano-de-saude-pme
Página de saúde com tabela de preço por idade, comparação de reajuste com concorrentes e responsável técnico no rodapé. 100 mil membros e ARR de R$ 1,1 bilhão (Valor, 09/2026).
[Ficha](paginas/alice-plano-pme.md)

### Produto físico / DTC

**Tech T-Shirt® — Insider**
Página de produto de marca DTC · https://www.insiderstore.com.br/products/tech-t-shirt
Caixa de compra com kits e preço por unidade, redução de risco colada ao botão e avaliações estruturadas (26 mil). Faturamento de R$ 400 milhões em 2024 (Valor).
[Ficha](paginas/insider-tech-tshirt.md)

### SaaS / plataforma

**Nuvemshop**
Plataforma de loja virtual, página principal com planos · https://www.nuvemshop.com.br/
Fotografia de marca forte, produto mostrado em uso e tabela de planos com plano gratuito e teste de 7 dias. 180 mil marcas na plataforma.
[Ficha](paginas/nuvemshop.md)

## Avaliadas e deixadas de fora

- **Fórmula de Lançamento (lista de espera), Érico Rocha** — no ar e de player relevante (Hotmart Galaxy 2026), mas o design é mais genérico que o da lista de espera do Subido, que cumpre o mesmo papel.
- **Brasil Paralelo (página de planos de assinatura)** — oferta simples e direta, mas a captura no celular saiu com seções em branco e o design não acrescenta ao que Smart Fit e Finclass já mostram.
- **Zissou (página de produto de colchão)** — página de produto padrão de loja, com pouco a modelar além do que a Insider mostra.
- **Espaçolaser (página de promoção)** — a faixa da página ainda dizia "dia das mães" em novembro; design abaixo do critério.
- **Manual (saúde masculina)** — bloqueou o navegador do ambiente (verificação de segurança da Vercel, erro 429). Não foi lida; nada foi descrito sobre ela.

## Bloqueios e limites desta coleta

- **Biblioteca de Anúncios do Meta:** devolveu erro 403 e nenhum resultado para qualquer busca, inclusive "nubank", em 25/11/2026. Por isso nenhuma ficha traz tempo de veiculação de anúncio no Meta, que era o sinal preferido. Vale repetir a verificação com login de um computador do Brasil.
- **Wayback Machine (histórico das páginas):** a conexão com web.archive.org caiu no proxy do ambiente. Não deu para medir há quanto tempo cada página está no ar.
- **Região:** o ambiente acessa a internet por fora do Brasil. Alguns sites mostram aviso de região (Insider) e alguns conteúdos podem variar por país.
- **Seções animadas:** páginas que mostram conteúdo só durante a rolagem foram capturadas no modo "costura". Mesmo assim, uma seção do O Novo Mercado e o carrossel de vídeos da Fluency não aparecem nas imagens.
- **Checkout não aberto:** preços que só aparecem no checkout (VTSD, por exemplo) ficaram como "não aparece na página".
