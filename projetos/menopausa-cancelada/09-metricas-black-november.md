# Métricas — Campanha Black November (Menopausa Cancelada)

Versão 1.0, 2026-11-02. Responsável: metrics-analyst. Escopo: tarefas e números, sem parecer jurídico (as travas da seção 5 do briefing continuam valendo e o `revisor` passa antes de qualquer peça ir ao ar).

Marcas: FATO (número medido ou dado do briefing), PISTA, SUPOSIÇÃO, BENCHMARK (referência do método, não medido), `[A PREENCHER]` (só o Rafael responde), `[medir]` (ainda não existe).

## Conclusão em cinco linhas

1. Hoje não existe nenhum número medido do funil. Não dá para apontar gargalo, fixar meta nem projetar. Este documento entrega o painel, as contas para preencher e a ordem das tarefas.
2. Com 50% de desconto, a margem em reais por pedido cai exatamente metade do preço de lista (descontadas as taxas). No Shot, são R$ 93,95 a menos por pote antes das taxas. Quanto isso pesa depende do custo, que só o Rafael tem.
3. A conta que decide tudo: margem por pedido com desconto. Dela saem o CPA máximo, o CPL máximo e o ponto de equilíbrio da live. Sem ela, qualquer verba de mídia é aposta.
4. A live é amanhã (03/11). As tarefas de medição da seção 5 são para hoje, nesta ordem. Se não der tempo de tudo, as três primeiras (conta de margem, cupom/UTM e exportar a linha de base) são as que não se recuperam depois.
5. Primeira leitura útil: quinta 05/11 (parcial) e fechamento da semana 1 na segunda 09/11. Metas e projeção saem daí, não antes.

---

## 1. Painel de KPIs por etapa

Funil FATO (briefing seção 9): anúncio Meta → página de captura (lista de espera no WhatsApp) → live de terça → checkout. O Instagram orgânico (~1,4 mi de seguidores, PISTA) e o direct por palavra-chave também alimentam a lista (FATO, análise de 26/10). Por isso toda taxa abaixo deve ser lida por canal (pago e orgânico separados) antes de somar. Comparar canais de temperaturas diferentes é um erro conhecido do método.

Ferramentas: o briefing não diz qual plataforma de live, checkout/gateway ou ferramenta de WhatsApp o time usa. Onde aparece "plataforma X", o Rafael preenche o nome (pendência 6).

**Etapa 1. Impressão**
- CPM = custo ÷ impressões × 1.000. BENCHMARK: R$ 15 a R$ 60.
- Frequência = impressões ÷ alcance. Serve para saber quando o público satura (sem benchmark no método; observar a tendência).
- Onde medir: Gerenciador de Anúncios do Meta.

**Etapa 2. Clique**
- CTR de link = cliques no link ÷ impressões. BENCHMARK: 1% a 2,5%.
- Taxa de carregamento = visitas à página ÷ cliques no link. Se ficar bem abaixo de 100%, o problema é velocidade ou rastreio, não anúncio (sem benchmark no método).
- CPC de link = custo ÷ cliques no link.
- Onde medir: Gerenciador de Anúncios; visitas na página via pixel (Events Manager) e ferramenta de análise do site.

**Etapa 3. Lead na lista de espera**
- Opt-in = leads ÷ visitantes da página de captura. BENCHMARK: 25% a 45%.
- CPL pago = investimento ÷ leads vindos de anúncio.
- CPL misto = investimento ÷ todos os leads (pago + orgânico). O misto esconde o desempenho do anúncio; use só como visão geral.
- Lead válido = entrou no WhatsApp e permanece na lista no dia da live ÷ entradas. Saídas e números inválidos reduzem a lista real (sem benchmark; `[medir]`).
- Onde medir: evento Lead do pixel disparado na confirmação de entrada no WhatsApp (não no clique), mais a contagem da lista na ferramenta de WhatsApp (plataforma X, `[A PREENCHER]`). Conferir os dois: pixel e lista devem bater com margem pequena.

**Etapa 4. Presença na live**
- Presença = espectadores únicos ÷ leads na lista na hora da live. BENCHMARK do método: 40% a 75%, mas é referência de evento pago. Live gratuita tende a ficar abaixo (SUPOSIÇÃO: quem não pagou tem menos compromisso). Não trate 40% como piso.
- Retenção até a oferta = espectadores no minuto da oferta ÷ pico.
- Cliques no link da oferta ÷ espectadores únicos.
- Onde medir: relatório de audiência da plataforma de live (espectadores únicos, pico, tempo médio, cliques no link fixado). `[A PREENCHER]` qual plataforma.

**Etapa 5. Checkout**
- Início de checkout = checkouts iniciados ÷ cliques no link da oferta.
- Abandono = 1 − (pedidos criados ÷ checkouts iniciados).
- Onde medir: evento InitiateCheckout do pixel e relatório do checkout.

**Etapa 6. Pago**
- Aprovação = pedidos pagos ÷ pedidos criados (Pix e boleto pendentes ainda não contam; ler com atraso de 24 a 72 h).
- Conversão lead → pago = pedidos pagos ÷ leads na lista da semana. É a taxa que fecha a conta do CPL máximo.
- AOV (ticket médio) = receita paga ÷ pedidos pagos.
- % em kit = pedidos de kit ÷ pedidos pagos. O kit aumenta o AOV mas pesa no custo (bônus e frete grátis).
- Receita líquida de desconto e de reembolso, ROAS = receita ÷ mídia (BENCHMARK: mínimo 2x no front, ver seção 2 sobre por que isso fica difícil com 50%).
- Onde medir: gateway/checkout (fonte da verdade), conferido com o evento Purchase do pixel.

**Etapa 7. Recompra**
- Recompra 30/60/90 = clientes que compraram de novo em até 30/60/90 dias ÷ clientes da coorte.
- Dois alertas próprios desta campanha:
  - Canibalização = pedidos com cupom feitos por quem já era cliente nos últimos 90 dias ÷ pedidos com cupom. Cada um deles trocou venda a preço cheio por venda com 50%. Perda = esses pedidos × desconto em reais.
  - Antecipação: quem comprou kit de 6 meses só volta daqui a cerca de seis meses (potes têm 30 doses, FATO). A recompra de novembro não se lê em novembro; a primeira leitura de 30 dias das compras de 03/11 cai em 03/12.
- Onde medir: base de clientes do checkout, cruzada por e-mail ou telefone dentro da ferramenta (dado pessoal não sai de lá nem vai ao repositório ou ao Drive, só o agregado).

**Indicador de proteção (não é etapa)**
- Incremento = receita paga de novembro − (média semanal da linha de base × 4). Responde se a campanha vendeu a mais ou só antecipou e descontou o que já vendia. Depende da linha de base (`[medir]`).
- Suporte = chamados abertos por 100 pedidos, e reembolsos por 100 pedidos. A hipótese H-B do briefing (14 de 26 reclamações lidas tratam de acompanhamento e suporte, PISTA) diz que a operação já tem tensão. Um pico de pedidos com 50% pode piorar isso.

---

## 2. Contas que o Rafael precisa responder antes de gastar

Todas as contas partem de uma só: a margem de contribuição por pedido com o desconto. Primeiro a tabela para preencher, depois as fórmulas, depois o exemplo.

### 2.1 Variáveis (o Rafael ou o financeiro preenche)

- P = preço de lista do produto. Shot: pote R$ 187,90; kit 2 R$ 289; kit 4 R$ 548; kit 6 R$ 789 (FATO, VSL V2 de 29/10). Colágeno, Ômega 3, Femme Healthy: `[A PREENCHER]`.
- D = desconto, 50% (decisão do Rafael).
- C = custo do produto por pedido (fabricação, embalagem). `[A PREENCHER]`.
- t = taxas e impostos sobre a venda, em % do preço pago (gateway, parcelamento, imposto). `[A PREENCHER]`.
- F = frete pago pela marca. Kits do Shot têm frete grátis (FATO); a regra por faixa foi discutida no plano de 27/10. `[A PREENCHER]`.
- B = custo dos bônus embutidos no kit (Treinamento da Libido, Femme Healthy no kit 4, avaliação de exames no kit 6). `[A PREENCHER]`.
- M = mídia gasta na semana. `[A PREENCHER]`.
- X = custos fixos da live (equipe, produção, comissões). `[A PREENCHER]`.
- L→P = taxa de lead na lista que vira pedido pago. `[medir]`, vem da semana 1.
- Mix = participação de cada produto nos pedidos. `[medir]`.

### 2.2 Fórmulas

```
Preço com desconto        Pd = P × (1 − D)               (D = 0,50)
Margem por pedido         Mc = Pd × (1 − t) − C − F − B
Margem sem desconto       Mc0 = P × (1 − t) − C − F − B
Perda por pedido          Mc0 − Mc = P × D × (1 − t)
Volume para empatar       V = Mc0 ÷ Mc  (quantas vezes mais pedidos para
                          render o mesmo em reais que sem desconto)
CPA máximo (empate)       CPA_max = Mc médio ponderado pelo mix
CPA alvo                  CPA_max × (1 − lucro desejado após mídia)
CPL máximo                CPL_max = CPA_max × L→P
Empate da live (pedidos)  PE_ped = (M + X) ÷ Mc médio
Empate da live (leads)    PE_leads = PE_ped ÷ L→P
ROAS de empate            ROAS_eq = AOV ÷ Mc médio  (ignora X)
```

A fórmula do CPL máximo é a do método: (AOV × margem %) × conversão de lead em cliente. Aqui "AOV × margem %" é o Mc em reais. Duas observações:

- V é sempre maior que 2. Mesmo com custo zero, V = 2 (é a metade do preço). Com custo positivo ele cresce rápido e tende ao infinito quando o custo se aproxima do preço com desconto. Não há "ponto cego": se Mc ≤ 0, cada venda a mais aumenta o prejuízo.
- ROAS de empate = AOV ÷ Mc. Como Mc é bem menor que o preço, ROAS_eq sobe. O "mínimo 2x" do método (BENCHMARK) pressupõe margem alta o bastante; com 50% off, confira se 2x chega a cobrir o empate. Se ROAS_eq > 2, o 2x do método não basta e vale o seu.

### 2.3 Tabela para preencher (um bloco por produto)

Coluna "Pd" já preenchida só para o Shot. As demais células são do Rafael.

```
Produto            P (lista)    Pd (50%)     C    t    F    B    Mc    Mc %
Shot pote          187,90       93,95        []   []   []   0    []    []
Shot kit 2         289,00       144,50       []   []   []   []   []    []
Shot kit 4         548,00       274,00       []   []   []   []   []    []
Shot kit 6         789,00       394,50       []   []   []   []   []    []
Colágeno           []           []           []   []   []   0    []    []
Ômega 3            []           []           []   []   []   0    []    []
Femme Healthy      []           []           []   []   []   0    []    []
Kit Rotina (Shot+Colágeno+Ômega 3, se entrar)  []  []  []  []  []  []  []  []
```

Mc % = Mc ÷ Pd. Marque em vermelho qualquer linha com Mc ≤ 0. Esse produto não pode entrar na campanha com o desconto cheio, ou precisa de outra regra (limite de unidades, sem bônus, sem frete grátis).

Duas decisões que mudam a conta e precisam de resposta antes de abrir o checkout:
- O 50% vale sobre o preço do kit, ou sobre o pote? (Os preços de kit já têm desconto embutido sobre o pote: kit 2 sai a R$ 144,50 por pote, kit 4 a R$ 137,00, kit 6 a R$ 131,50. Com 50% sobre o kit, cai para R$ 72,25, R$ 68,50 e R$ 65,75 por pote. FATO aritmético.)
- Os bônus continuam nos kits com 50%? Cada bônus entra em B.

### 2.4 Exemplo numérico — ILUSTRATIVO, só com o Shot pote

Isto não é resultado nem estimativa. É a mecânica da conta com o preço de lista conhecido; C, t e F ficam como variáveis.

```
P  = 187,90
Pd = 187,90 × 0,50 = 93,95

Mc  (com 50%)  = 93,95 × (1 − t) − C − F
Mc0 (sem desc) = 187,90 × (1 − t) − C − F
Perda por pote = 187,90 × 0,50 × (1 − t) = 93,95 × (1 − t)

Custo máximo do pote para não ter prejuízo, antes de mídia:
C ≤ 93,95 × (1 − t) − F

Volume para empatar:  V = [187,90 × (1 − t) − C − F] ÷ [93,95 × (1 − t) − C − F]
```

Leitura:
- Cada pote vendido com 50% rende, em reais, menos que um pote a preço cheio em 93,95 × (1 − t). Isso vale qualquer que seja o custo.
- Se C + F ficar perto de 93,95 × (1 − t), o pote com desconto quase não deixa margem para pagar mídia. O CPA máximo vira o próprio Mc, que seria pequeno, e o CPL máximo (Mc × L→P) é menor ainda.
- Com Mc na mão, o CPL máximo é um produto: Mc × L→P. Exemplo da mecânica, sem números: se L→P for medido em 3% na semana 1 (valor do método usado só para mostrar a forma, BENCHMARK de conversão de lead, não medido), CPL_max = Mc × 0,03.

### 2.5 O que o Rafael responde, em ordem

1. C, t, F de cada produto (a tabela de 2.3).
2. B de cada bônus que fica.
3. Verba M da campanha e por semana, e X (custo fixo da live).
4. Se a regra do desconto é igual para todos os produtos, ou há limite.
5. Quantos clientes antigos (últimos 90 dias) podem usar o cupom. Se todos puderem, a canibalização é inevitável; ao menos fica medida.

---

## 3. Metas: método para fixar a partir dos primeiros 7 dias

Não há histórico. Meta com número hoje seria chute. O método abaixo transforma a semana 1 em linha de base.

**Semana 1 é calibração, não prova.** Janela: live de terça 03/11 até segunda 09/11. Leitura parcial na quinta 05/11 (48 h, Pix já compensado) e congelamento na segunda 09/11 (6 dias de cauda). Meta para a live 2 (10/11) sai do congelamento.

**Passo a passo:**

1. Congele o que foi medido na semana 1: opt-in, CPL pago, lista real no dia da live, presença, cliques na oferta, início de checkout, aprovação, AOV, L→P.
2. Compare cada taxa com o BENCHMARK da seção 1. Onde não há benchmark (cliques na oferta, início de checkout, L→P), a semana 1 vira o primeiro dado. Não invente referência.
3. **Meta de lista** (retroativa): leads necessários = pedidos desejados ÷ L→P medido. Os pedidos desejados vêm de M e X: o mínimo é PE_ped (empate); acima disso entra o lucro que o Rafael quiser.
4. **Meta de presença:** use a presença medida na semana 1 como piso da semana 2. A meta é manter ou subir. SUPOSIÇÃO de método: um aumento de 5 a 10 pontos relativos por ações de lembrete é plausível, mas só vale como meta de teste, não como projeção.
5. **Meta de conversão** (presença → pago): mesma regra. Piso é o que a semana 1 mediu; o que muda é o que se testa (oferta, ordem do pitch, prova). Teste uma coisa por semana.
6. **Metas por canal:** pago e orgânico separados. A meta de CPL vale só para o pago e nunca passa de CPL_max (seção 2).
7. Revise na 2ª, 3ª e 4ª lives. Só a partir da 2ª live há dois pontos; o cenário conservador (pior medida) só existe aí.

**Benchmarks do método para usar enquanto não há medição** (todos BENCHMARK, não medidos):
- CTR de link: 1% a 2,5%.
- CPM: R$ 15 a R$ 60.
- Opt-in da captura: 25% a 45%.
- Presença: 40% a 75% (evento pago; esperar abaixo numa live gratuita, SUPOSIÇÃO).
- Conversão de página de vendas a frio: 1% a 5%. Pouco aplicável aqui: a venda acontece na live, não numa página fria.
- Take rate de bump: 20% a 40%; upsell: 10% a 30%. Só valem se o checkout tiver bump ou upsell (`[A PREENCHER]`).
- Abertura de e-mail: 25% a 45%; clique: 2% a 6%. Só se houver e-mail.
- ROAS mínimo 2x no front e CAC abaixo de 1/3 do LTV: ler com cuidado, porque o LTV não está validado e a campanha pode antecipar compras.

**Projeção em três cenários: ainda não.** Para cada cenário, a projeção precisa destes números. Sem eles, qualquer tabela seria chute com cara de planilha.

1. Tamanho da lista de espera hoje (separando quem veio do orgânico). `[medir]`
2. Verba de mídia da campanha e por semana (M). `[A PREENCHER]`
3. CPL do pago na semana 1. `[medir]`
4. Presença da live de 27/10 e das lives de novembro. `[medir]`
5. Conversão de presente em pedido pago. `[medir]`
6. AOV e % em kit. `[medir]`
7. Mc médio (depende de C, t, F, B). `[A PREENCHER]`
8. Base de clientes e a parcela que compra com cupom (canibalização). `[medir]`

Com esses oito números, os cenários são: conservador (piores taxas observadas nas lives), provável (média das lives medidas), otimista (melhores taxas). Cada um calcula lista → presença → pedidos → receita → margem após mídia. Antes disso, só cabe uma faixa com benchmarks, marcada **não validada**, e nenhuma delas deve virar meta oficial. Data de revisão: segunda 09/11 (fechamento da semana 1). Segunda revisão: 16/11.

---

## 4. Plano de leitura semanal e teste A/B

### 4.1 Calendário (SUPOSIÇÃO pela rotina das terças às 19h30; confirmar)

```
S1  live 03/11   leitura parcial qua 04/11 e qui 05/11   fecha seg 09/11
S2  live 10/11   leitura qua 11/11                       fecha seg 16/11
S3  live 17/11   leitura qua 18/11                       fecha seg 23/11
S4  live 24/11   leitura qua 25/11                       Black Friday 27/11, fecha seg 30/11
```

Na quarta, Pix e boleto ainda estão pendentes: o que se lê é parcial. As decisões de quarta usam as etapas até o checkout; as decisões sobre venda paga esperam o fechamento de segunda. Para comparar lives, use sempre a mesma janela (por exemplo, 6 dias após a live).

### 4.2 Roteiro de leitura de quarta (30 minutos)

1. **Rastreio fecha?** Pedidos no checkout × evento Purchase do pixel; leads na lista × evento Lead; presença da plataforma × lista. Se divergir mais que o razoável, corrija a medição antes de ler resultado.
2. **Cascata em números absolutos**, da impressão ao pago, com a taxa de cada passagem, separando pago e orgânico. Compare com o BENCHMARK.
3. **Gargalo único:** a etapa com a maior distância negativa em relação à referência (ou à semana anterior, depois da semana 1). Escreva uma linha com a etapa e a causa provável.
4. **Conta de margem:** receita, desconto concedido, mídia, Mc total, margem após mídia, canibalização e suporte.
5. **Decisão:** uma ação por semana, no gargalo. O agente responsável fica registrado.

**Para quem mandar cada gargalo** (da skill, com adaptação para a live):
- CTR baixo: `traffic-strategist` (criativo e gancho).
- Opt-in baixo: `copywriter` (promessa da captura).
- Presença baixa: `funnel-architect` (lembretes, horário, aquecimento) com apoio do `copywriter` nas mensagens.
- Pouca gente clicando na oferta ou no checkout: `copywriter` e `offer-architect` (roteiro do pitch, oferta).
- AOV baixo ou pouco kit: `funnel-architect`.
- Suporte, reembolso, reclamação: operação do Rafael (hipótese H-B). Nenhum agente do squad corrige entrega.
- Lead desqualificado: `avatar-strategist` e `funnel-architect`.

### 4.3 Regras de decisão

Todos os limites abaixo valem só depois do volume mínimo (método). Abaixo dele a resposta é "dado insuficiente, medir mais".

**Volumes mínimos (método):** cortar criativo com 1.000 impressões ou gasto de 3x o CPA alvo; avaliar página de captura com 300 visitantes; avaliar página de vendas com 1.000 visitantes ou 30 checkouts; concluir A/B com 100 conversões por variação.

- **Manter** quando CPL pago ≤ CPL_max e L→P ≥ o usado no cálculo do CPL_max, e a margem após mídia da semana é positiva.
- **Ajustar** quando uma única etapa está fora da referência (ou pior que a semana anterior) e a conta ainda fecha. Mexer só nela. Mudar três coisas ao mesmo tempo apaga o aprendizado.
- **Cortar anúncio** quando já gastou 3x o CPL_max sem ficar abaixo dele, ou quando passou de CPL_max em duas leituras seguidas com volume. (O limite de 3x é do método; a regra das duas leituras é SUPOSIÇÃO minha.)
- **Cortar ou limitar produto** quando Mc ≤ 0 com o desconto, quando a canibalização anula a margem, ou quando o suporte passa do que a operação atende.
- **Pausar mídia paga (manter orgânico)** quando a margem acumulada após mídia fica negativa e o CPA real passa do CPA_max por duas semanas.
- **Não mexer** na etapa que ainda não atingiu o volume. Live com poucos presentes é amostra pequena, e a leitura de uma única live é ruído para comparar produtos.

### 4.4 Teste A/B possível na semana 1

**Quando roda de fato:** a live de amanhã (03/11) já vai com a lista que existe. O tráfego pago que dá para testar com tempo é o que alimenta a live 2 (10/11): de 04/11 a 09/11. Os dois anúncios precisam passar pelo `revisor` antes de subir (regra do squad, nicho regulado).

```
Hipótese: se o anúncio abrir pelo acolhimento (a mulher não é levada a
  sério, "não é da idade"), então o CPL cai em relação ao anúncio que abre
  pelo desconto de 50%, porque no orgânico o conteúdo de fé e acolhimento
  engaja de 4 a 15 vezes mais que o técnico (FATO, análise de 26/10) e
  oferta pura engaja pouco. Atenção: isso é do orgânico; no pago é
  SUPOSIÇÃO.
Variável alterada: o ângulo do gancho (A acolhimento × B desconto/escassez).
  Mesma página, mesma oferta, mesmo público, mesma verba, mesmo
  posicionamento, mesma duração. Rodar como teste A/B nativo do Meta
  (divisão do público sem sobreposição), não como dois anúncios soltos.
Métrica primária: CPL pago (uma só).
Métricas de proteção (não decidem, só alertam): opt-in da página,
  presença por variação (UTM de conteúdo) e L→P por variação.
Volume mínimo: 100 leads por variação (200 no total) para concluir.
  Verba necessária ≈ 200 × CPL esperado. Como o CPL é desconhecido, a
  verba é `[A PREENCHER]` e se calcula assim que o CPL das primeiras 24 h
  aparecer.
Critério de decisão: vence o ângulo com menor CPL, desde que a presença
  e a L→P dele não sejam menores. CPL menor com presença pior vira
  "ajustar", não vitória. Diferença mínima que importa: a que faz o CPL
  cair abaixo do CPL_max (seção 2); se os dois ficam acima, os dois
  falham e o problema está em outro ponto (oferta ou página).
Prazo máximo: segunda 09/11. Se a variação não chegar a 100 leads,
  declarar "não conclusivo", registrar a tendência e repetir na semana 2
  sem trocar a variável.
```

Observação: o método manda testar oferta antes de ângulo. Aqui a oferta (50%) já está decidida pelo Rafael, então o ângulo é o teste de maior impacto que sobra.

Presença e L→P por variação só aparecem depois da live 2, em 11/11 (quarta). O vencedor por CPL é decidido em 09/11; a confirmação por qualidade chega em 11/11.

---

## 5. Tarefas de medição antes de 03/11 (ordenadas)

Hoje é 02/11 e a live é amanhã. Ordem pelo que não se recupera depois: sem a linha de base, a campanha não tem comparação; sem UTM e cupom, as vendas ficam sem origem.

1. **Fechar a conta de margem (Rafael).** Preencher a tabela da seção 2.3 (C, t, F, B) para pelo menos o produto da semana 1 (colágeno, `[A PREENCHER]` preço e custo) e o Shot. Sem isso, não há CPA_max nem CPL_max e a verba não pode ser decidida.
2. **Exportar a linha de base do checkout (últimos 90 dias):** pedidos, receita, AOV, % em kit, reembolsos, e vendas por produto, por semana. Também a venda da live de 27/10 e da semana anterior. Só agregados. A planilha de 27/10 está com a linha de base em branco (briefing, seção 4); essa tarefa preenche.
3. **Exportar e contar a base:** tamanho atual da lista de espera (separando quem veio de orgânico, de anúncio e do direct, se a ferramenta registrar origem); número de clientes únicos nos últimos 30/60/90 dias; clientes com mais de uma compra. Dado pessoal fica na ferramenta; entra no repositório só o número.
4. **Padrão de UTM.** Um padrão único, minúsculo, sem acento:
   `utm_source` (meta, instagram, whatsapp, email), `utm_medium` (paid, organico, direct, lista), `utm_campaign` (black-nov-s1, black-nov-s2 ...), `utm_content` (a-acolhimento, b-desconto, reel-aula, bio, story), `utm_term` opcional. Aplicar em cada link da captura, da bio, dos stories, do direct e dos anúncios. Planilha de links com quem criou e quando.
5. **Pixel e eventos.** Conferir no Events Manager (modo de teste) em `black.menopausacancelada.com/v2` e no checkout: PageView, Lead (disparado na confirmação de entrada no WhatsApp), InitiateCheckout e Purchase com valor e moeda. Verificar domínio e prioridade de eventos do Meta. Se o checkout estiver em outro domínio, confirmar que o evento Purchase chega (pixel e, se existir, API de conversões). Fazer uma compra de teste com valor real baixo ou cupom de 100%, se a plataforma permitir.
6. **Cupom da live.** Um cupom por live (ex.: um código por semana), sem canal embutido, mais UTM no link. Motivo: o cupom diz qual live gerou o pedido, o UTM diz o canal. Registrar regras: produtos incluídos, validade, quantidade por CPF. Confirmar com compra de teste que o 50% aplica em todos os produtos e kits e como o bônus se comporta. Confirmar que o preço riscado mostra o preço de lista.
7. **Medir a presença.** Descobrir onde a plataforma de live mostra espectadores únicos, pico, tempo médio e cliques no link; testar o relatório antes. Fixar o link da oferta com UTM da live. Criar uma contagem manual de minuto a minuto no momento da oferta (anotar presentes às 19h30, no pitch e no encerramento) como reserva.
8. **Exportar a lista de espera na hora da live** (contagem, não nomes): leads totais, por origem, entradas do dia. Repetir no fim de cada live.
9. **Planilha do painel.** Uma aba por semana com a cascata (impressão até pago, pago e orgânico separados), a conta de margem e o registro de decisões da quarta. Colunas preenchidas conforme a seção 1.
10. **Registro de suporte.** Contar chamados e reembolsos por dia durante a campanha, pelo canal que a operação já usa (`[A PREENCHER]` qual). Dado para a hipótese H-B.
11. **Registrar a verba por semana** e quem autorizou, para a conta de equilíbrio (M).

Se só der para fazer parte hoje: 1, 4, 6 e 2. Itens 3, 7 e 8 podem ser feitos no dia da live.

---

## 6. Pendências e o que a falta delas muda

- **Custo, taxas, frete e bônus por produto (C, t, F, B).** Sem isso, margem, CPA_max, CPL_max e equilíbrio ficam em fórmula. Bloqueia a decisão de verba de mídia.
- **Preço de lista de Colágeno, Ômega 3 e Femme Healthy.** Sem eles, a tabela de produtos tem só o Shot. O colágeno é o produto da semana 1 e precisa disso para a live de 03/11.
- **Verba de mídia (M) e custos fixos da live (X).** Sem M, não há ponto de equilíbrio nem verba do teste A/B.
- **Linha de base (vendas, AOV, % kit, recompra 30/60/90, CPA atual).** Sem ela, não há incremento, nem meta, nem projeção. Fica tudo em benchmark, marcado não validado.
- **Resultado da live de 27/10.** É a única presença e conversão real que se tem. Sem ela, a semana 1 é o primeiro dado.
- **Tamanho da lista e base de clientes.** Sem a lista, a meta de leads não tem ponto de partida. Sem a base, não se mede a canibalização do cupom.
- **O 50% vale sobre kit ou pote? Bônus ficam?** Muda B e Mc, e portanto todo o resto.
- **Campanha termina quando, e vale na Black Friday?** O briefing diz novembro inteiro e Black Friday em 27/11. Se o desconto já é 50% o mês todo, a Black Friday não tem alavanca extra de preço (SUPOSIÇÃO: existe risco de ensinar o público a esperar). Define o calendário de leitura da semana 4 e o fechamento.
- **Qual produto em cada semana e se a live de 03/11 já vende a 50% ou só abre a lista** (o briefing diz que a semana do colágeno "abre" nessa aula). Se a venda começa só em 10/11, a primeira leitura de vendas muda de 05/11 para 12/11, e o teste A/B de ângulo passa a alimentar a lista de uma live que também é de abertura.
- **Plataformas usadas (live, WhatsApp, checkout).** Muda onde medir cada KPI e quais relatórios já existem.
- **Parecer do advogado sanitário e aprovação do `revisor` dos dois anúncios do A/B.** Mesmo com o jurídico fora do foco, o teste não sobe sem a revisão. Sem ela, o teste A/B começa depois da data prevista e a conclusão se desloca.

---

## Decisões que dependem do Rafael

1. Preencher a tabela de margem (seção 2.3) e a verba (M, X). É a decisão que destrava todo o resto.
2. Definir se o 50% vale sobre o preço do kit e se os bônus ficam.
3. Autorizar o teste A/B de ângulo na semana 1 (e a verba dele) ou adiar para a semana 2.
4. Dizer quem fica responsável por exportar a linha de base e os relatórios da live.
5. Confirmar o calendário das lives e o dia em que a campanha termina.
