# Funil de e-mail — Menopausa Cancelada

**Versão:** v0 PROVISÓRIA · 11/11/2026 · funnel-architect
**Escopo:** só o funil de e-mail (SendGrid). Não há oferta, avatar, pesquisa nem voz ainda; este desenho vale como estrutura e muda quando elas chegarem.
**Marcas:** FATO · PISTA · SUPOSIÇÃO · `[A PREENCHER]` · `[medir]`. Benchmarks são "referência do método", não dado.
**Conformidade:** nicho regulado (suplemento alimentar, Anvisa). A skill `conformidade` prevalece sobre qualquer regra deste mapa. Este documento não traz copy nem e-mail pronto; todo texto que sair dele passa pelo `revisor` e pelo responsável técnico do cliente antes de ir para a ferramenta.

---

## 0. Decisões em uma página

1. **O funil é de relacionamento e conversão por e-mail, sem funil de páginas pesado.** SUPOSIÇÃO: o produto é físico, de ticket baixo ou médio e de uso recorrente (briefing não informa). Por isso o desenho é leve: poucos e-mails por sequência, recompra no lugar de upsell de checkout.
2. **Nada de peça de venda sai antes de três travas:** alegação aprovada por constituinte (lista positiva da IN 28/2018 vigente), parecer sobre o nome "Menopausa Cancelada" e consentimento registrado da lista. Enquanto isso, só se desenha, configura o envio e se produz conteúdo educativo de informação geral.
3. **O pedido do Rafael ("mostrar e conscientizar os leads dos benefícios dos suplementos") não pode virar série de e-mails sobre o que o suplemento faz.** Falar de benefício de suplemento é alegação. Só vale a alegação da lista positiva, por constituinte, com a linha que a sustenta registrada. Até lá, "conscientizar" vira educação sobre alimentação e hábitos em informação geral (seção 5). Esta é a decisão que mais afasta o funil do que o Rafael descreveu, e precisa de ciência dele.
4. **Segmentação só por comportamento.** Nenhuma etiqueta de condição ou sintoma. Atenção extra: nesta marca, o simples fato de a pessoa estar na lista pode sugerir a condição dela (seção 2).
5. **Métrica de decisão é clique, resposta, descadastro, reclamação e conversão.** Abertura só como tendência.

---

## 1. Escada de valor (versão mínima, SUPOSIÇÃO)

Sem oferta definida, a escada abaixo é um esqueleto. Cada degrau tem o papel de e-mail que o sustenta.

- **Degrau 0, entrada na lista:** captação com isca de informação geral (guia ou aula sobre alimentação e hábitos, ver eixos da seção 5). A isca não pode prometer efeito nem tratar sintoma. Tipo de isca: `[A PREENCHER]` após pesquisa e avatar. Falta: não sabemos de onde a lista atual veio.
- **Degrau 1, primeira compra:** o produto de entrada (unidade ou kit inicial). Preço, kit, garantia: `[A PREENCHER]` (briefing, bloco 5).
- **Degrau 2, kit maior ou combinação de produtos:** só se houver mais de um produto. `[A PREENCHER]`.
- **Degrau 3, recompra e recorrência:** produto de uso contínuo pede recompra. Se existir assinatura ou "receba todo mês", é recorrência; se não, é e-mail de recompra por prazo estimado de uso. Duração de um frasco ou kit: `[A PREENCHER]`.
- **Eventos (lives):** funcionam como aquecimento e como ponto de venda para lista morna. Plataforma e datas: `[A PREENCHER]`.

**Não se aplica aqui:** order bump e upsell encadeado de checkout (só existem onde há checkout de produto desenhado; checkout não foi informado), página de aplicação e funil de call. Funil proporcional ao ticket: sem ticket, não se desenha mais que isto.

**Tipo de funil escolhido (SUPOSIÇÃO):** lista própria → sequência de boas-vindas → newsletter recorrente com campanhas de oferta e eventos ao vivo → carrinho/recompra. O que a falta de ticket muda: se o ticket for alto (acima de algumas centenas de reais, ou programa com acompanhamento), sobe o peso da live e da nutrição antes da oferta; se for baixo, a nutrição encurta e a recompra pesa mais.

---

## 2. Segmentação por comportamento (sem condição de saúde)

**Regra:** etiqueta descreve o que a pessoa **fez**, nunca o que ela **tem**. Base: LGPD, art. 5º, II e art. 11 (conferido em fonte secundária oficial; confirmar no texto do Planalto); skill `conformidade`, seção 6.

**Alerta específico deste projeto (SUPOSIÇÃO do squad, não parecer):** mesmo sem etiqueta, uma lista da marca "Menopausa Cancelada" pode indicar a fase de vida de cada pessoa só pelo nome da lista, pelo remetente ou pelo formulário. Pedir ao responsável jurídico se isso muda a base legal, o texto de consentimento e o nível de proteção da lista. Enquanto isso: não criar campo, etiqueta, lista ou nome de segmento com "menopausa", "fogacho", "sintoma" ou semelhante dentro do SendGrid; usar códigos neutros (ex.: S1, S2).

### Cartões de segmento

**S-ORIGEM · origem do lead**
- Define: qual isca, live, anúncio ou orgânico trouxe a pessoa.
- Usa para: escolher a sequência de boas-vindas e o primeiro conteúdo.
- Valores: `[A PREENCHER]` (origens reais ainda não informadas).

**S-ESTAGIO · estágio**
- Lead novo (entrou e não clicou em oferta) · lead que clicou em oferta · cliente · cliente que recomprou.
- Usa para: quem recebe e-mail de oferta e quem não (comprador sai da oferta que já comprou).

**S-ENGAJAMENTO · recência de clique**
- Clicou nos últimos 30, 60, 90 dias · sem clique há mais de 90 dias.
- Usa para: ritmo de envio, aquecimento do domínio e reativação.
- Janelas são referência do método; ajustar à frequência real da newsletter.

**S-LIVE · relação com live**
- Inscrito · presente · inscrito que faltou · presente que clicou na oferta.
- Usa para: pós-live diferente para quem viu e quem não viu. Presença vem do registro da plataforma, não de pergunta à pessoa.

**S-INTERESSE · tema de conteúdo clicado**
- Quais eixos de conteúdo (seção 5) a pessoa clicou. É comportamento, mas confira com o jurídico: agrupar cliques por tema pode, na prática, inferir condição. Começar sem este segmento e só ativar com orientação.

**S-COMPRA · compra**
- Comprou · comprou mais de uma vez · não comprou. Produto comprado, quando houver mais de um: `[A PREENCHER]`.

**Fora do desenho:** qualquer campo de formulário que pergunte sintoma, diagnóstico, medicamento em uso ou fase da vida. Formulário de captação pede e-mail e, se necessário, primeiro nome.

---

## 3. Mapa de e-mails por tipo

Cada cartão: objetivo único · gatilho · segmento · próximo passo · métrica de decisão · responsável. Responsável é quem escreve e quem libera: `copywriter` escreve, `funnel-architect` define gatilho e segmento, `metrics-analyst` lê a métrica, `revisor` libera. Operação na ferramenta: quem opera o SendGrid (`[A PREENCHER]` quem é).

**Regra para todos:** todo e-mail de marketing leva identificação de quem envia, motivo do recebimento e descadastro visível. Todo e-mail de oferta, de benefício de produto ou de promoção segue o registro da `conformidade`: alegação usada, linha da lista positiva, constituinte e dose, quem validou.

### 3.1 Boas-vindas (automação)
- **Objetivo único:** cumprir o que a pessoa pediu (entregar a isca) e combinar o que vem depois.
- **Gatilho:** inscrição confirmada (double opt-in recomendado).
- **Segmento:** todo lead novo, ramificado por S-ORIGEM.
- **Sequência (referência do método):** e-mail 1 na hora, só entrega e combinado de frequência, sem oferta; e-mail 2 no dia seguinte, quem escreve e um conteúdo útil, com pedido de resposta simples.
- **Próximo passo:** na primeira, o conteúdo prometido; na segunda, responder ou ler a primeira edição da newsletter.
- **Métrica de decisão:** clique no conteúdo entregue, taxa de resposta, descadastro e reclamação no e-mail 2.
- **Responsável:** copywriter (texto), funnel-architect (gatilho), revisor.
- **Depende de:** voz (`05-voz.md`) e porta-voz `[A PREENCHER]`.

### 3.2 Nutrição (automação)
- **Objetivo único:** educar até uma decisão, uma ideia por e-mail.
- **Gatilho:** término das boas-vindas, para quem não clicou em oferta.
- **Segmento:** S-ESTAGIO lead novo.
- **Tamanho (SUPOSIÇÃO):** 4 a 5 e-mails; a skill sugere 4 a 7 e ajuste ao ticket. Sem ticket e sem avatar, começar curto.
- **Conteúdo:** só eixos educativos de informação geral (seção 5). A ponte para produto só entra quando houver alegação aprovada; até lá a sequência termina em convite para a live ou para a newsletter, não em oferta.
- **Próximo passo:** última peça aponta para um único destino: a live, a página do produto (quando liberada) ou a newsletter.
- **Métrica de decisão:** clique por e-mail (para achar em qual se perde gente), descadastro por envio, conversão do último e-mail.
- **Responsável:** copywriter, funnel-architect, revisor.
- **Depende de:** avatar (objeções e consciência) e oferta. Sem elas, a nutrição fica genérica.

### 3.3 Newsletter recorrente
- **Objetivo único por edição:** manter relação e lembrança com um assunto principal bem resolvido.
- **Gatilho:** ritmo fixo (seção 4).
- **Segmento:** todos com clique nos últimos 90 dias (S-ENGAJAMENTO), exceto quem pediu para sair. Quem está sem clique há mais de 90 dias vai para reativação (3.8).
- **Próximo passo:** um link por edição.
- **Métrica de decisão:** clique, resposta, descadastro e reclamação por edição; abertura só como tendência.
- **Responsável:** content-strategist (pauta) ou copywriter (texto), a definir pelo Rafael; revisor.
- **Depende de:** eixos aprovados (seção 5) e voz.

### 3.4 Campanha de promoção ou lançamento
- **Objetivo único:** venda de uma oferta com data.
- **Gatilho:** data real de promoção ou lançamento (`[A PREENCHER]`; nenhuma data informada).
- **Segmento:** leads que ainda não compraram aquela oferta; compradores excluídos. Quem clicou em oferta antes entra primeiro.
- **Estrutura (referência do método):** 2 a 4 e-mails de aquecimento de conteúdo → abertura → 1 ou 2 lembretes → última chamada.
- **Regras da conformidade:** urgência, prazo, preço, bônus e escassez verdadeiros (CDC, art. 37). "De/por" só com o preço de referência praticado de fato. Nenhum e-mail afirma efeito do produto fora da lista positiva. Nome da campanha e assunto também são publicidade e entram na revisão.
- **Próximo passo:** uma página de compra por e-mail.
- **Métrica de decisão:** conversão por e-mail e por segmento; clique até a página; descadastro e reclamação depois de cada envio de oferta.
- **Responsável:** copywriter, funnel-architect (calendário e segmentos), revisor, responsável técnico do cliente.
- **Depende de:** oferta, alegações, preço, datas.

### 3.5 Sequência de live
- **Objetivo único:** presença e, depois, decisão de quem assistiu ou de quem faltou.
- **Gatilho:** inscrição; depois horários relativos à data da live.
- **Segmento:** S-LIVE.
- **Sequência (referência do método):** confirmação com link e data na inscrição; lembrete 24 h antes; lembrete 1 h antes; aviso "estamos ao vivo"; pós-live no mesmo dia com replay e prazo real; D+1 a D+3 respondendo dúvidas vistas na live.
- **Próximo passo:** na pré-live, entrar na live; na pós-live, o replay e depois a oferta (se houver) ou a newsletter.
- **Métrica de decisão:** clique no link de entrada, presença (registro da plataforma), clique no replay, conversão pós-live. Presença: medir na própria lista, sem usar média de mercado como meta (`[medir]`).
- **Responsável:** funnel-architect (roteiro de gatilhos), copywriter, revisor. O conteúdo falado da live segue as mesmas regras de conformidade, e a live passa pelo revisor antes de ir ao ar.
- **Depende de:** plataforma, data, tema e o que a live vai oferecer. Tudo `[A PREENCHER]`.

### 3.6 Carrinho e pós-compra
- **Carrinho abandonado**
  - Objetivo único: resolver a dúvida mais provável de quem começou e não concluiu.
  - Gatilho: início de checkout sem pagamento (exige integração entre checkout e SendGrid; checkout não informado, SUPOSIÇÃO de que existe).
  - Segmento: quem iniciou e não comprou. Quantidade (referência do método): 1 a 3 e-mails em 24 a 72 horas, sem culpar.
  - Próximo passo: voltar ao carrinho.
  - Métrica de decisão: recuperação (compras de quem recebeu), descadastro.
- **Pós-compra**
  - Objetivo único: o cliente saber receber, usar e pedir ajuda.
  - Gatilho: pagamento confirmado.
  - Segmento: S-COMPRA comprou.
  - Conteúdo: entrega, como usar conforme o rótulo, canal de ajuda. Não é lugar para nova alegação de efeito. Instruções de uso e advertências do rótulo: `[A PREENCHER]` com o responsável técnico.
  - Métrica de decisão: respostas e pedidos de suporte; reclamação.
  - Observação: e-mail transacional (recibo, confirmação) não leva banner de oferta.
- **Responsável:** copywriter, funnel-architect, operador do SendGrid; revisor.

### 3.7 Recompra
- **Objetivo único:** lembrar de repor perto do fim do produto.
- **Gatilho:** prazo estimado de uso desde a compra. Duração de um frasco ou kit: `[A PREENCHER]`.
- **Segmento:** S-COMPRA comprou, sem recompra no prazo.
- **Próximo passo:** página de compra do mesmo produto.
- **Métrica de decisão:** taxa de recompra no prazo, clique, descadastro.
- **Responsável:** funnel-architect (regra), copywriter, revisor.
- **Cuidado:** o lembrete não pode sugerir que parar de usar piora algo ou que a pessoa "precisa" continuar; é lembrete de reposição, sem dependência.

### 3.8 Reativação
- **Objetivo único:** descobrir quem ainda quer receber.
- **Gatilho:** sem clique há 60 a 90 dias (referência do método).
- **Segmento:** S-ENGAJAMENTO sem clique.
- **Sequência:** 2 a 3 e-mails de "ainda quer receber?". Quem não responde sai da lista de envio regular.
- **Próximo passo:** um clique para continuar.
- **Métrica de decisão:** clique de confirmação, descadastro; saúde de reputação do domínio (reclamação, bounce).
- **Responsável:** funnel-architect (regra), copywriter, operador do SendGrid.
- **Observação:** lista menor e engajada protege a reputação do domínio mais que lista grande e parada.

---

## 4. Proporção e ritmo da newsletter (hipótese a testar)

Tudo abaixo é **hipótese do método**, não resultado nem benchmark de mercado. Os números são ponto de partida para o primeiro mês e se corrigem pelo clique e pelo descadastro da própria lista.

- **Ritmo inicial:** quinzenal, se a equipe consegue manter qualidade; semanal só se houver pauta e revisão para isso. Cada edição passa pelo revisor, e esse tempo pesa na escolha. Anunciar o ritmo no primeiro e-mail e cumprir.
- **Proporção sugerida, de cada 4 edições:** 3 de conteúdo educativo (informação geral, seção 5) e 1 com chamada para algo comercial (produto, promoção, live). Ou seja, venda em no máximo uma a cada quatro edições, fora das campanhas com data.
- **Campanhas avulsas (promoção, lançamento, live)** somam por cima do ritmo regular, mas limite o total: evitar mais de duas mensagens de marketing por semana por pessoa fora de janelas de campanha. Limite é hipótese a testar, não regra.
- **Formato:** um assunto principal e um link. Nome fixo, dia fixo, mesma voz.
- **Como ajustar:** se o descadastro por envio ou a reclamação subirem depois de edição com venda, reduzir a proporção de venda; se o clique em edição educativa for baixo, revisar o eixo e o formato antes de aumentar a frequência. Decidir com volume suficiente (a skill `metricas-de-funil` sugere 500 entregas para julgar uma sequência) e comparar a lista com ela mesma, não com benchmark.
- **Teste A/B:** uma variável por vez, métrica primária o clique. Lista pequena não sustenta teste de assunto; acumular edições. Ordem de impacto do método: oferta, promessa, criativo, página, botão.
- **O que a falta de dado muda:** tamanho e engajamento da lista (`[A PREENCHER]`) definem se quinzenal ou semanal é viável e se o aquecimento do domínio (seção 6) limita o volume no início.

---

## 5. Eixos de conteúdo educativo para a newsletter

**Premissa:** são temas de **informação geral sobre alimentação e hábitos**, para público saudável. Nenhum eixo promete efeito de produto, trata sintoma, sugere que a alimentação comum não basta ou compara suplemento a alimento (RDC 243/2018, art. 17; Anvisa, perguntas 106 e 109). A conformidade vale mais que o método: se um eixo só funciona com promessa, ele sai.

**Regras comuns a todos os eixos:**
- Conteúdo em terceira pessoa ou informação geral; sem dizer "você tem" ou "seu sintoma".
- Sem nome de doença ou sintoma como gancho de assunto (ex.: ondas de calor, insônia, dor). Esses termos no assunto viram alegação terapêutica por sugestão.
- Fato nutricional ou de saúde: citar fonte oficial ou científica e a data. Número de estudo ou de mercado só com fonte conferida.
- Convite a procurar profissional de saúde quando o tema tocar condição médica. Pessoa com doença é orientada a procurar profissional (Anvisa, pergunta 19 e seguintes).
- Nenhum produto da marca no corpo de edição educativa, a menos que a edição seja marcada como comercial.
- Todo conteúdo passa pelo revisor; tema que toca fato de saúde passa também pelo responsável técnico. Quem valida do lado do cliente: `[A PREENCHER]`.

**Eixo A · Alimentação do dia a dia**
- Tema possível: composição de refeições, grupos de alimentos, leitura de rótulo e lista de ingredientes.
- Cuidado: não afirmar que a alimentação comum "não dá conta" e não dizer que o suplemento a complementa por falta (proibição (c) da RDC 243). Nada de "alimento X resolve Y".

**Eixo B · Hábitos de rotina**
- Tema possível: organização da rotina, planejamento de refeições, hidratação, atividade física em termos gerais de saúde pública.
- Cuidado: referenciar recomendação oficial (ex.: guia alimentar do Ministério da Saúde, a conferir); não prescrever dieta nem treino. Sem número de rotina "ideal" sem fonte.

**Eixo C · Sono e descanso como hábito**
- Tema possível: higiene do sono e rotina noturna em informação geral.
- Cuidado: alto risco de virar promessa de tratamento de insônia; não ligar o tema a nenhum produto, não usar "insônia" como gancho, e orientar a procurar profissional se persistir. Liberar só com o responsável técnico.

**Eixo D · O que é e o que não é um suplemento alimentar**
- Tema possível: suplemento é alimento, não medicamento; para pessoas saudáveis; como ler rótulo, porção e advertências; por que conversar com profissional antes.
- Cuidado: texto fiel à Anvisa (*Suplementos alimentares: perguntas e respostas*, 7ª ed., 2021; conferir versão vigente). Não afirmar segurança ("natural", "sem efeitos colaterais") sem base. Este é o eixo mais seguro para "conscientizar" e já cumpre parte do pedido do Rafael sem alegação de produto.

**Eixo E · Nutrientes em linguagem de função do nutriente**
- Tema possível: o papel de um nutriente no corpo, na forma que a lista positiva já aceita para ele (alegações de suplemento descrevem o papel do nutriente, não tratam doença; Anvisa, pergunta 7).
- Cuidado: **bloqueado até a lista de produtos e das alegações aprovadas por constituinte chegar.** Cada texto registra a linha da IN 28/2018 que sustenta. Ingrediente que não é fonte de nutriente não aparece como se fosse (pergunta 103). Sem número de dose sem fonte do rótulo.

**Eixo F · Bastidores e cuidados da marca**
- Tema possível: como o produto é feito, controle de qualidade, atendimento, rotina de quem escreve (só com fato confirmado).
- Cuidado: afirmação de qualidade, certificação ou origem precisa de comprovante. Nada inventado. Depende do porta-voz e do que a marca pode provar. `[A PREENCHER]`.

**Eixo G · Convites e avisos**
- Tema possível: lives, lançamentos, datas, novidades logísticas.
- Cuidado: edição comercial identificada como tal; datas e condições verdadeiras (CDC, art. 37).

**Fora de cardápio (não propor):** relato de sintoma, "sinais de que você precisa de X", antes e depois, depoimento com efeito terapêutico, comparação com alimento, qualquer uso do nome "Menopausa Cancelada" como afirmação de que a fase acabou. Sobre o nome, ver seção 7.

---

## 6. Configuração do envio: lista de verificação (para quem opera o SendGrid)

Base: skill `email-marketing`, seção 6 (Google, Email sender guidelines, lido em 11/11/2026; regras de plataforma mudam, confira a página oficial antes). Confirmar no painel do plano o que existe.

**Antes de tudo**
- [ ] Confirmar o plano e se inclui Marketing Campaigns, automação, segmentação e teste A/B. `[A PREENCHER]`.
- [ ] Definir o domínio de envio e quem controla o DNS. `[A PREENCHER]`.
- [ ] Definir o remetente: nome de pessoa (porta-voz) e endereço no domínio próprio, não endereço gratuito. Nome do remetente fixo. Atenção: nome do remetente e domínio também são publicidade e entram na revisão por causa da questão do nome da marca.

**Autenticação**
- [ ] Autenticar o domínio no SendGrid (SPF e DKIM pelos registros DNS que a ferramenta fornece). Chave DKIM de 1024 bits ou mais; o Google recomenda 2048.
- [ ] Publicar DMARC começando em `p=none`, com relatórios ligados para um endereço monitorado; endurecer depois de acompanhar os relatórios.
- [ ] Conferir que o endereço de retorno e os cabeçalhos estão alinhados ao domínio autenticado.
- [ ] Registrar quem configurou, quando e onde ficam as chaves.

**Descadastro e rodapé**
- [ ] Link de descadastro visível, que funciona sem login, testado.
- [ ] Descadastro em um clique via cabeçalhos `List-Unsubscribe` e `List-Unsubscribe-Post` (RFC 8058); obrigatório para quem envia 5.000 ou mais mensagens por dia ao Gmail, e boa prática abaixo disso. Confirmar se o plano suporta.
- [ ] Processar o descadastro na hora, não no prazo máximo.
- [ ] Rodapé com identificação de quem envia e motivo do recebimento. Texto exato: `[A PREENCHER]` com o responsável jurídico/técnico (ver Bloco 10 do briefing).

**Lista e consentimento**
- [ ] Antes de importar qualquer contato, confirmar origem e consentimento (data, origem, texto do aceite). Sem registro, a lista não é usada (briefing, bloco 6). Lista comprada, alugada ou raspada fica fora.
- [ ] Double opt-in nas novas inscrições, se o plano permitir.
- [ ] Os contatos ficam só no SendGrid. Nenhuma lista, e-mail ou nome entra neste repositório ou no Drive.
- [ ] Sem campos ou etiquetas de condição de saúde (seção 2).

**Aquecimento (referência do método, domínio sem histórico)**
- [ ] Começar pelos contatos mais engajados; dobrar o volume aos poucos conforme os resultados forem bons; só depois enviar à lista toda.
- [ ] Acompanhar bounce e reclamação a cada envio. Se subirem, pausar e reduzir.
- [ ] Cadastrar o domínio no Google Postmaster Tools e acompanhar a taxa de spam. As referências de fornecedores (limite crítico de 0,3%, meta abaixo de 0,1%) não são oficiais; conferir o valor vigente na documentação do Google.

**Teste e higiene**
- [ ] Teste de envio para Gmail, Outlook e Yahoo antes da primeira campanha, em celular também.
- [ ] Sempre versão em texto puro junto com o HTML; pré-cabeçalho escrito de propósito.
- [ ] Remover bounce permanente e quem reclamou.
- [ ] Excluir compradores das campanhas de oferta que já compraram.
- [ ] Reativação em dia (3.8) e saída da lista regular de quem não interage.

**Dono do quê**
- Domínio e DNS: `[A PREENCHER]`. Operação do SendGrid: `[A PREENCHER]`. Revisão antes de colar na ferramenta: revisor.

---

## 7. O que o funil precisa do Rafael, e o que cada falta muda

**1. Produtos (quais, fórmula, constituintes, dose).**
Sem isso não se sabe se há alegação permitida e o Eixo E fica bloqueado. Também define a recompra (duração) e a escada (um ou mais produtos).

**2. Alegações permitidas por constituinte (lista positiva da IN 28/2018 vigente), com validação do responsável técnico.**
Sem isso nenhum e-mail de benefício, oferta ou lançamento pode ser escrito. Só saem as edições dos eixos A, B, D, F, G, e C com liberação. A "conscientização dos benefícios" pedida pelo Rafael depende desta lista.

**3. Parecer regulatório sobre o nome "Menopausa Cancelada" (briefing, bloco 10).**
É risco alto (SUPOSIÇÃO do squad, não parecer). Se o nome for vetado, muda o nome da lista, o remetente, os assuntos e o rodapé; se for mantido, toda peça precisa trazer a alegação permitida e nenhuma pode sugerir que a fase acabou. Recomendação: resolver antes de investir em autenticar domínio e remetente com esse nome.

**4. Origem e consentimento da lista (tamanho, data, origem, texto do aceite).**
Define se a lista pode ser usada, quanto se pode enviar no início do aquecimento e qual sequência de boas-vindas cada origem recebe. Sem registro de consentimento, a lista não deve ser usada; recomeçar do zero com captação nova é uma saída.

**5. Domínio de envio, responsável pelo DNS e remetente (nome do porta-voz).**
Sem eles não há autenticação, nem aquecimento, nem primeira campanha. Também define a voz.

**6. Plano do SendGrid (recursos incluídos).**
Se não houver automação ou segmentação no painel, as sequências 3.1, 3.2, 3.5, 3.6 e 3.8 viram envios manuais agendados ou dependem de API/integração com o checkout e a plataforma de live, o que muda o custo e o prazo.

**7. Datas de lives, promoções e lançamentos, plataforma das lives.**
Sem datas, o mapa fica sem calendário e a sequência de live 3.5 e a campanha 3.4 ficam só como estrutura. Com datas, o funnel-architect entrega o calendário reverso (o que sai em cada dia).

**8. Preço, kits, garantia, forma de pagamento e onde o cliente compra (checkout próprio, marketplace, WhatsApp).**
Sem checkout não há evento de carrinho nem de compra para disparar 3.6 e 3.7. Muda a integração e as métricas de conversão.

**9. Ticket, meta e verba (briefing, bloco 8).**
Muda o tamanho da nutrição, o peso da live e se vale um funil maior. Sem meta, não há projeção; qualquer cenário sai marcado como não validado.

**10. Quem é o porta-voz e quem escreve a newsletter; quem aprova do lado do cliente (responsável técnico/regulatório).**
Sem aprovador definido, nada passa da fase de conteúdo para envio. Sem porta-voz, não há voz (`brand-architect`).

**11. Responsável jurídico para a pergunta da lista (seção 2) e o texto de consentimento.**
Define se existe risco de a lista em si ser dado sensível e se algum segmento (como S-INTERESSE) pode ser usado.

---

## 8. Métricas e responsáveis por etapa (resumo)

Referências são "referência do método", sem fonte de mercado; a lista se compara com ela mesma ao longo do tempo. Valores: `[medir]`.

- **Entrada na lista:** taxa de confirmação (double opt-in) e de cadastro por origem. Responsável: metrics-analyst.
- **Boas-vindas:** clique no conteúdo, resposta, descadastro e reclamação. Responsável: funnel-architect.
- **Nutrição:** clique por e-mail e queda entre e-mails. Responsável: funnel-architect e copywriter.
- **Newsletter:** clique, resposta, descadastro e reclamação por edição; abertura só tendência. Responsável: content-strategist ou copywriter.
- **Campanha:** conversão por e-mail e por segmento; descadastro e reclamação após oferta. Responsável: metrics-analyst.
- **Live:** clique de entrada, presença, conversão pós-live. Responsável: funnel-architect.
- **Recompra e carrinho:** recompra no prazo, recuperação. Responsável: funnel-architect.
- **Entregabilidade:** bounce, reclamação (Postmaster Tools). Responsável: operador do SendGrid.
- **Volume mínimo para decidir** (skill `metricas-de-funil`, referência do método): julgar sequência com 500 entregas; concluir teste A/B com 100 conversões por variação. Abaixo disso é ruído.

---

## 9. Lista de ativos, por prioridade

1. Decisão e parecer sobre o nome e sobre a lista (itens 3, 4, 11 da seção 7). Não é peça, mas trava as demais.
2. Autenticação do domínio e teste de envio (seção 6).
3. Pesquisa, avatar, oferta e voz (outros agentes) para destravar texto.
4. Sequência de boas-vindas (3.1) e primeira edição de newsletter com eixo D ou A.
5. Nutrição (3.2) e demais edições educativas liberadas.
6. Sequência de live (3.5) quando houver data.
7. Campanhas de promoção/lançamento (3.4), carrinho e pós-compra (3.6), recompra (3.7), só com alegações aprovadas.
8. Reativação (3.8) assim que a lista tiver histórico de clique.

---

## Pendências

`[A PREENCHER]`: itens 1 a 11 da seção 7; remetente/porta-voz; responsável pelo DNS e pelo SendGrid; rodapé; aprovador técnico; origem das iscas.
`[medir]`: linha de base de clique, descadastro, reclamação, presença em live, taxa de recompra, quando houver envios.
SUPOSIÇÕES abertas: produto físico de uso recorrente; checkout existente e integrável; ticket baixo/médio; ritmo quinzenal viável; lista na marca pode ser sensível por si (para o jurídico).
Conferência pendente: artigos da LGPD só lidos em fonte secundária oficial; IN 28/2018 vigente não conferida (a lista de alegações muda por atualização); todo o trecho de conformidade é leitura do squad, não parecer.

## Histórico
- v0 provisória · 11/11/2026 · funil de e-mail sem oferta, avatar, pesquisa ou voz.
