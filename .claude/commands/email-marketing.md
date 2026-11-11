---
description: "E-mail marketing — newsletter recorrente, automações (boas-vindas, nutrição, carrinho, reativação), e-mail de live e de promoção, segmentação, frequência, entregabilidade (SPF, DKIM, DMARC, descadastro, aquecimento), consentimento e métricas por clique"
---

# Skill: E-mail Marketing

```yaml
skill:
  id: email-marketing
  version: "1.0.0"
  updated: "2026-11-11"
  category: canais-e-retencao
  agents: ["funnel-architect", "copywriter", "metrics-analyst"]
```

> O que é **fato** (fonte oficial lida), o que é **referência de mercado** (blog de fornecedor) e o que é **heurística do método** está marcado em cada ponto. Regra de plataforma muda: confira a página oficial antes de configurar (links na seção 10).
> Nicho regulado (saúde, suplemento, finanças, jurídico): leia também a skill `conformidade`. E-mail é publicidade.

---

## 1. Qual e-mail é este

Antes de escrever ou desenhar, classifique. Cada tipo tem objetivo, frequência e tolerância própria.

| Tipo | Objetivo | Dispara | Exemplo |
|---|---|---|---|
| **Transacional** | Cumprir algo que a pessoa pediu | Ação dela | Entrega da isca, confirmação de inscrição, recibo |
| **Automação** | Conduzir a pessoa pelo funil sem você enviar na mão | Evento ou tempo | Boas-vindas, nutrição, carrinho abandonado |
| **Campanha avulsa** | Uma ação com data | Você, em data marcada | Promoção, lançamento, abertura de live |
| **Newsletter** | Manter a relação e a lembrança | Você, em ritmo fixo | Edição semanal ou quinzenal |

Transacional não vende e não leva banner de oferta. Misturar tudo numa lista só, sem etiqueta, é o erro mais comum.

---

## 2. Lista, consentimento e segmentação

### Consentimento
- Só entra na lista quem pediu para entrar, por formulário próprio ou por aceite claro. **Lista comprada, alugada ou raspada fica fora.** Além do risco legal, derruba a reputação do domínio.
- Guarde **quando, de onde e com qual texto** a pessoa aceitou. Sem esse registro você não prova nada.
- Confirmação por e-mail (double opt-in) reduz endereço falso e reclamação. O Google recomenda confirmar cada endereço antes de inscrever (Email sender guidelines, lido em 11/11/2026). Em volume baixo, vale a perda de alguns cadastros.
- Quem pede para sair, sai na hora e não volta por outra campanha.

### Segmentação
Comece com poucos segmentos e que mudem o que você escreve. Referência do método:

- **Origem** (qual isca, live ou anúncio trouxe o lead)
- **Estágio** (lead novo, lead que já clicou em oferta, cliente, cliente que recomprou)
- **Engajamento** (clicou nos últimos 30, 60, 90 dias)
- **Interesse declarado** (clicou no tema A ou no tema B)

**Atenção em saúde:** etiqueta que revela condição ou sintoma de uma pessoa identificada (ex.: "tem fogacho", "em menopausa") pode ser **dado pessoal sensível** (LGPD, art. 5º, II e art. 11; ver `conformidade`). Prefira segmentar por comportamento (clicou, comprou, veio da live) a segmentar por condição. Se a condição for necessária, trate com o responsável jurídico.

### Dado pessoal de lead
Lista de leads, e-mails e nomes **não vão para o repositório nem para o Drive** (regra do Rafael). Os arquivos do projeto guardam a *estrutura* (segmentos, regras, textos), não a lista.

---

## 3. Mapa de e-mails do funil

O `funnel-architect` define quais existem; o `copywriter` escreve. Peça por peça, com **objetivo único e um clique único**.

### Boas-vindas (disparo na inscrição)
- E-mail 1, na hora: entrega o que prometeu. Sem oferta. Avisa o que vem e com que frequência.
- E-mail 2, no dia seguinte: quem escreve, por que ouvir, um conteúdo útil.
- Peça uma resposta simples ("responda este e-mail com a sua dúvida"). Resposta de leitor ajuda a reputação e rende pesquisa.

### Nutrição (educar até a decisão)
- 4 a 7 e-mails, um tema por e-mail, cada um ligado a uma objeção ou a um degrau de consciência do avatar (skill `copywriting-resposta-direta`).
- A sequência de 7 dias da skill de copy é um ponto de partida. Ajuste ao ticket e à consciência da lista; ticket baixo e lista quente aguentam menos e-mails.
- Termine com uma oferta clara **ou** com o convite para a próxima etapa (live, consulta, grupo).

### Campanha de oferta ou lançamento
- Aquecimento (2 a 4 e-mails de conteúdo) → abertura do carrinho → 1 ou 2 lembretes → última chamada.
- **Urgência só real:** prazo, vaga, lote e bônus que existem de fato (CDC, art. 37; ver `conformidade`).
- Mande cada e-mail de oferta só para quem ainda **não comprou**. Exclua compradores por segmento.

### Live (webinário, aula ao vivo, desafio)
| Quando | E-mail | Objetivo |
|---|---|---|
| Na inscrição | Confirmação + link + data | Cumprir e reduzir ausência |
| 24 h antes | Lembrete + o que vai acontecer | Presença |
| 1 h antes | "Começa daqui a pouco" + link | Presença |
| Na hora | "Estamos ao vivo" | Última chamada para entrar |
| Pós-live (mesmo dia) | Replay com prazo real + próximo passo | Quem faltou |
| D+1 a D+3 | Resposta às dúvidas e objeções vistas na live | Decisão |
Presença em evento gratuito varia muito; use o histórico da própria lista, não média de mercado.

### Carrinho e pós-compra
- Carrinho abandonado: 1 a 3 e-mails em 24–72 h, sem culpar, resolvendo a dúvida mais provável.
- Pós-compra: entrega, como usar, o que esperar e como pedir ajuda. Em produto físico, e-mail de **recompra** perto do fim do estoque estimado do cliente, quando houver uso recorrente.

### Reativação
Quem não clica há 60–90 dias recebe 2 a 3 e-mails de "ainda quer receber?". Quem não responde sai da lista de envio regular. Lista menor e engajada entrega mais que lista grande e parada.

---

## 4. Newsletter recorrente

- **Frequência:** a que você consegue manter com qualidade. Semanal ou quinzenal costuma bastar para começar (heurística do método). Anuncie o ritmo no primeiro e-mail e cumpra.
- **Estrutura de uma edição:** um assunto principal, bem resolvido, mais um link ou chamada. Edição com cinco assuntos não ensina nenhum.
- **Proporção:** a maior parte educa e cria vínculo; a venda entra em parte das edições, nunca em todas (heurística; ajuste pelo clique e pelo descadastro).
- **Mesma voz sempre** (`05-voz.md`). Quem abre reconhece o jeito de escrever antes de ler o assunto.
- **Série vira hábito:** nome fixo, dia fixo, formato fixo.

---

## 5. Escrever o e-mail

O estilo geral está em `copywriting-resposta-direta`. Específico de e-mail:

- **Remetente:** nome de pessoa (o especialista) + domínio próprio. Não troque o nome do remetente a cada envio.
- **Assunto:** curto, específico, sem promessa que o corpo não cumpra. Teste 2 versões em campanha avulsa, quando a lista permitir (seção 8). Sem "Re:" ou "Fwd:" falsos, sem maiúscula gritada, sem emoji imitando botão ou alerta (o Google trata como enganoso nas diretrizes de formatação).
- **Pré-cabeçalho:** a segunda linha que aparece na caixa de entrada. Escreva de propósito; não deixe o sistema pegar o "ver no navegador".
- **Uma ideia, um botão (ou link), um próximo passo.** Repetir o mesmo link no meio e no fim é permitido; dois pedidos diferentes, não.
- **Texto simples vence enfeite.** Poucas imagens, nada importante só dentro de imagem, boa leitura no celular. Sempre inclua versão em texto puro junto com o HTML.
- **P.S.** é a parte mais lida depois do assunto: use para o pedido ou o prazo.
- **Rodapé obrigatório:** identificação de quem envia, motivo pelo qual a pessoa recebe, link de descadastro visível.
- Nicho regulado: o texto segue a `conformidade` **antes** de ser colado na ferramenta.

---

## 6. Entregabilidade (para o e-mail chegar na caixa de entrada)

### O que as grandes caixas exigem (fonte oficial lida)
O Google (Gmail pessoal), desde 2024, exige de todo remetente: **SPF ou DKIM** no domínio, conexão TLS, e-mail bem formatado e conteúdo/cabeçalhos que não enganem. De quem envia **5.000 ou mais mensagens por dia**, exige SPF, DKIM **e DMARC**, e que e-mail de marketing tenha **descadastro em um clique** (cabeçalhos `List-Unsubscribe` e `List-Unsubscribe-Post`). Chave DKIM de 1024 bits ou mais; o Google recomenda 2048. Fonte: Email sender guidelines, Gmail Help, lido em 11/11/2026.

Mesmo abaixo de 5.000 por dia, configure os três e o descadastro fácil. É o padrão do mercado e evita spam.

### Referências de mercado (blog de fornecedor, **não oficial**; confirme no Postmaster Tools)
- Taxa de reclamação de spam: o Google acompanha pelo Postmaster Tools. Fornecedores citam **0,3% como limite crítico** e **menos de 0,1% como meta**. Confira o valor vigente na documentação do Google antes de tratar como regra.
- Microsoft e Yahoo têm exigências próprias; consulte a documentação de cada um.

### Configuração mínima, nesta ordem
1. **Domínio próprio** para envio (não use endereço gratuito como remetente de campanha).
2. **Autenticação do domínio** na ferramenta (SPF + DKIM, pelos registros DNS que ela fornece).
3. **DMARC** publicado, começando com política `p=none` e relatórios ligados; endureça depois de acompanhar.
4. **Descadastro** funcionando, de preferência em um clique, e testado.
5. **Teste de envio** para Gmail, Outlook e Yahoo antes da primeira campanha.

### Aquecimento (reputação de domínio novo)
Domínio sem histórico que dispara para a lista inteira de uma vez perde reputação. Heurística do método: comece com os contatos mais engajados, dobre o volume aos poucos conforme os resultados forem bons e só então envie à lista toda. Se as reclamações e os e-mails que voltam (bounce) subirem, pare e reduza.

### Higiene
- Remova endereços que voltaram (bounce permanente) e quem reclamou de spam.
- Tire da lista de envio regular quem não interage há tempo (seção 3, reativação).
- Não envie a mesma peça em duplicidade nem a quem acabou de comprar a oferta anunciada.

---

## 7. Descadastro e pedidos do titular

- O link de descadastro é visível e funciona sem login.
- A pessoa pode **revogar o consentimento a qualquer momento, por procedimento gratuito e facilitado** (LGPD, art. 8º, §5º; art. 18, IX). Registre o pedido e pare os envios de marketing.
- Pedido de eliminação de dados: responda pelo canal do responsável da empresa e não mantenha a pessoa em nenhuma lista.
- O prazo de processamento do descadastro em um clique, exigido pelo Google, é **até dois dias** segundo fonte de fornecedor; trate como máximo, não como meta. Faça na hora.

---

## 8. Métricas e teste

Referências de valor ficam em `metricas-de-funil`. Aqui, a leitura.

- **Abertura é métrica fraca.** O recurso de privacidade do Apple Mail pré-carrega a imagem de rastreio e conta "abertura" sem leitura (fontes de fornecedores, convergentes). Use abertura só para tendência e para achar problema grosseiro (entrega, assunto). Não compare com benchmark antigo.
- **Priorize clique, resposta, descadastro, reclamação, conversão.** São os números que mudam decisão.
- **Descadastro e reclamação por envio:** se sobem depois de uma campanha, o conteúdo, a frequência ou a origem da lista estão errados.
- **Teste A/B:** uma variável por vez (assunto **ou** oferta **ou** horário), o critério de decisão definido antes (clique, não abertura) e volume mínimo na amostra (`metricas-de-funil`). Lista pequena não sustenta teste de assunto; use o bom senso e acumule.
- **Meça por e-mail e por segmento**, não só por campanha. É assim que se acha qual e-mail da sequência perde gente.

---

## 9. Ferramenta

O método vale para qualquer ferramenta. Para decidir:

- **Campanha, lista e automação no painel** (ex.: Marketing Campaigns do SendGrid, ou ferramentas de e-mail marketing): para newsletter, funil e lançamento.
- **API ou SMTP:** para o sistema da empresa (site, checkout, plataforma de curso) disparar e-mail sozinho.
- Confira no plano contratado se **automação, segmentação, descadastro em um clique e teste A/B** estão incluídos; isso muda de plano para plano e de época para época.
- Antes de importar contatos, confirme o consentimento e o tratamento de dado sensível (seção 2).

---

## 10. Fontes (lidas em 11/11/2026, salvo indicação)

- Google — Email sender guidelines: https://support.google.com/mail/answer/81126 (lida)
- Google — Postmaster Tools (taxa de spam e reputação): https://postmaster.google.com/
- Lei 13.709/2018 (LGPD), arts. 5º, 8º, 11 e 18: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm — **o Planalto bloqueou a leitura automática; os artigos foram conferidos em fontes secundárias oficiais (gov.br) e precisam ser conferidos no texto**
- Código de Defesa do Consumidor, art. 37: ver `conformidade`
- RFC 8058 (descadastro em um clique): https://www.rfc-editor.org/rfc/rfc8058

## 11. Checklist

- [ ] Tipo do e-mail identificado (transacional, automação, avulso, newsletter)
- [ ] Todos na lista deram consentimento e há registro de quando e de onde
- [ ] Lista de leads fora do repositório e do Drive
- [ ] Segmentação por comportamento; condição de saúde só com orientação jurídica
- [ ] Domínio próprio, SPF + DKIM + DMARC, descadastro testado
- [ ] Teste de envio feito em Gmail, Outlook e Yahoo
- [ ] Um objetivo e um clique por e-mail; versão em texto junto com o HTML
- [ ] Urgência, preço e prazo verdadeiros; compradores excluídos da oferta
- [ ] Nicho regulado: `conformidade` aplicada
- [ ] Métrica de decisão definida antes (clique, resposta, conversão, descadastro)
