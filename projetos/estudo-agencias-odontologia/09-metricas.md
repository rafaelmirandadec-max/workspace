# Métricas — Piloto "Orçamento com Dono"

Feito em: 20/11/2026 · Responsável: @metrics-analyst · Base: `00-briefing.md`, `02-avatar.md`, `03-oferta.md` e `01-pesquisa/agencias-odontologia.md` (19/11/2026), mais a LGPD conferida hoje no Planalto e duas buscas (calendário de 2027 e referências de taxas). Modelo da planilha em `09-metricas/` (um CSV por aba e um `LEIA-ME.md`).

**Decisões do Rafael já tomadas (20/11/2026), usadas aqui:** o piloto foi aceito, com 3 vagas (3 clínicas) e início em fevereiro de 2027; o preço é de R$ 1.000 por mês; a clínica pode sair ao fim de qualquer mês; e a garantia do diagnóstico está mantida. Seguem em aberto as horas disponíveis e o valor-hora desejado.

**Nenhum número deste documento foi medido.** O piloto ainda não começou e nenhuma clínica passou dados. Os números são de quatro tipos, sempre marcados: SUPOSIÇÃO (horas e volumes que vêm da oferta ou de leitura minha), PISTA (referência achada na busca, quase sempre de quem vende para clínica), EXEMPLO FICTÍCIO (inventado para mostrar a conta, não serve como expectativa) e conta (aritmética feita aqui, para o Rafael conferir).

---

## 0. Decisão em poucas linhas

1. **Troquei dois dos seis indicadores e ajustei outros dois.** Sai "orçamentos reativados que voltaram a conversar": não existe na linha de base (antes do piloto a reativação é zero por definição), acontece por rodada e não toda semana, e está suspensa até o parecer do advogado. A reativação passa a ser medida em aba própria, por rodada. Entra "avaliações que saíram com orçamento por escrito", que é a etapa da cascata que faltava. "Tempo até a primeira resposta" vira "respondidos em até 15 minutos", que a recepção anota sem cronômetro. "Orçamentos com ao menos um retorno" ganha prazo de 3 dias, sem o qual não dá para comparar antes e depois.
2. **A linha de base passa de 2 para 3 semanas de contagem, começando em 15/02/2027**, depois do Carnaval (6 a 10/02/2027). Ela soma o histórico do sistema da clínica nos mesmos meses de 2026. A devolutiva continua na semana 3, marcada para o último dia útil, e a condição da garantia continua sendo 10 dias úteis preenchidos.
3. **A planilha fica na conta Google da clínica e não tem nenhum campo que identifique paciente.** Os contatos entram como contagem por dia. Os orçamentos entram com um código sequencial (ORC-001) que só a cópia do orçamento guardada na clínica liga a uma pessoa. O Rafael nunca acessa o registro: recebe só o resumo semanal.
4. **O que 3 clínicas em 90 dias conseguem mostrar** é se o processo mudou, ou seja, se a recepção passou a responder rápido e a retornar orçamento. Com os volumes prováveis, uma mudança em marcação, comparecimento ou fechamento só aparece se for muito grande, e a causa não se prova em nenhum caso. O caso publicável diz o que aconteceu em cada clínica, com o tamanho da amostra, e publica as três.
5. **Unit economics (conta sobre as horas que a oferta estima, que são SUPOSIÇÃO):** o piloto de R$ 1.000, já confirmado, paga cerca de R$ 48 por hora. A oferta cheia de R$ 2.000 paga cerca de R$ 113 por hora nos 3 primeiros meses e R$ 200 por hora depois. As 3 vagas decididas, escalonadas a cada 2 semanas, pedem cerca de 27 h na semana mais cheia e cerca de 77 h nas 4 semanas mais cheias. Se o Rafael tiver menos que isso, o escalonamento passa a ser de 4 semanas (seção 6). O valor-hora desejado e as horas disponíveis estão `[A PREENCHER]`.
6. **Ainda não há gargalo para apontar**, porque não há dado. A regra para achar o gargalo está na seção 3 e será aplicada pela primeira vez na semana 3 da primeira clínica.

---

## 1. Definições que valem para tudo

Sem estas definições escritas e iguais do começo ao fim, o antes e o depois medem coisas diferentes. As definições completas, com exemplos para a recepção, estão no `09-metricas/LEIA-ME.md`.

- **Contato novo:** pessoa que ainda não é paciente em tratamento e procura a clínica pela primeira vez, por WhatsApp, telefone, Instagram, site ou balcão, pedindo informação, preço, horário ou avaliação. Conta uma vez, no dia do primeiro contato. Não contam paciente em tratamento, confirmação, fornecedor, propaganda nem engano de número.
- **Fora do perfil:** contato novo que a clínica não pode atender por motivo objetivo (convênio que não aceita, serviço que não faz, outra cidade). Conta como contato novo e também nesta coluna. Serve para responder à pergunta do dono, "o problema é o contato ruim?", com número.
- **Relógio de clínica aberta:** os 15 minutos só correm dentro do horário de atendimento. Uma mensagem que chega às 22h e é respondida às 8h10, numa clínica que abre às 8h, foi respondida em 10 minutos. A resposta automática não conta: vale a primeira mensagem ou ligação de uma pessoa da clínica.
- **Avaliação:** primeira consulta de um contato novo (avaliação ou consulta inicial, como a clínica chamar).
- **Orçamento:** plano de tratamento com valor igual ou acima de um **corte que o dono define antes de começar** `[A PREENCHER pelo dono]` e que não muda durante o piloto. Entram orçamentos de qualquer origem: contato novo, paciente da casa ou reativação.
- **Retorno:** mensagem ou ligação da clínica sobre aquele orçamento, depois do dia em que foi apresentado.
- **Fechado:** uma definição só, escolhida pelo dono no início (por exemplo, "aceitou e marcou a primeira sessão") `[A PREENCHER pelo dono]`.

---

## 2. Os seis indicadores do relatório semanal

Em relação à lista da oferta (`03-oferta.md`, seção 4.1, item 9), a ordem agora segue o caminho do paciente. Dois indicadores foram ajustados (1 e 5), um saiu (reativação) e um entrou (4). Cada cartão diz por quê.

**1. Respondidos em até 15 minutos**
- *Pergunta que responde:* quem procura a clínica é atendido logo?
- *Fórmula:* contatos novos respondidos em até 15 minutos de clínica aberta ÷ contatos novos. EXEMPLO: 12 ÷ 30 = 40%.
- *De onde vem o dado:* horário das mensagens no WhatsApp da clínica, chamadas perdidas no telefone e mensagens diretas do Instagram.
- *Quem anota e quando:* a recepção, no fim de cada dia, na aba `registro-diario`.
- *O que um número ruim indica:* a perda começa na porta. As causas mais prováveis são falta de horário reservado para o WhatsApp, falta de roteiro de primeira resposta ou mensagens que chegam com a clínica fechada sem aviso de quando serão respondidas.
- *Quem cuida:* o @copywriter escreve o roteiro de primeira resposta e a mensagem para fora do horário; o Rafael e o dono cuidam do treino e da divisão de tarefas da recepção.
- *Mudança em relação à oferta:* era "tempo até a primeira resposta". Medir tempo exige anotar a hora de cada contato e calcular média ou mediana. Isso dá mais trabalho e gera mais erro, e a média é puxada por um único contato respondido no dia seguinte. Já a pergunta "respondeu em 15 minutos?" se responde com uma olhada no fim do dia, e o resultado se lê sem conta. Os 15 minutos vêm da própria oferta (SUPOSIÇÃO de prazo, não referência).

**2. Marcaram avaliação**
- *Pergunta que responde:* a conversa leva a uma consulta marcada?
- *Fórmula:* avaliações marcadas por contatos novos no período ÷ contatos novos no período. EXEMPLO: 8 ÷ 30 = 27%.
- *De onde vem o dado:* agenda da clínica (sistema ou papel).
- *Quem anota e quando:* a recepção, no fim do dia. A avaliação é contada no dia em que foi marcada, não no dia da consulta.
- *O que um número ruim indica:* se o indicador 1 está bom, o problema está no que se diz depois da primeira resposta (preço jogado sem contexto, falta de horário oferecido, demora para propor data) ou na origem do contato. A coluna "fora do perfil" separa as duas coisas: se ela está alta, a conversa é com quem traz o contato (agência ou gestor); se está baixa, com o roteiro.
- *Quem cuida:* o @copywriter, no roteiro de agendamento e no banco de respostas. Se a causa for a origem do contato, o dono e a agência dele (ou o @traffic-strategist, na versão com parceiro).
- *Limite:* é uma conta aproximada, porque quem marca hoje pode ter chegado ontem. Somando semanas, o efeito se dilui. Ficou assim para não exigir uma linha por contato.

**3. Vieram à avaliação**
- *Pergunta que responde:* quem marca aparece?
- *Fórmula:* compareceram ÷ (compareceram + faltaram sem aviso + desmarcaram no próprio dia), considerando só as avaliações de pacientes novos previstas no período. A avaliação remarcada com pelo menos um dia de antecedência sai da conta daquele dia e entra na nova data. EXEMPLO: 6 ÷ 9 = 67%.
- *De onde vem o dado:* agenda do dia.
- *Quem anota e quando:* a recepção, no fim do dia.
- *O que um número ruim indica:* falta confirmação na véspera, falta mensagem para quem faltou, ou a avaliação é marcada longe demais da data do contato.
- *Quem cuida:* o @copywriter escreve as mensagens de confirmação e de falta; o prazo da agenda é decisão do dono.
- *Vantagem:* é o único dos seis que o sistema da clínica costuma guardar (faltas na agenda). Por isso dá para ter linha de base retroativa.

**4. Saíram com orçamento por escrito** (entra no lugar da reativação)
- *Pergunta que responde:* quem veio à avaliação sai sabendo o que vai fazer e quanto custa?
- *Fórmula:* avaliações de pacientes novos em que o paciente saiu com o orçamento por escrito no mesmo dia ÷ avaliações em que o paciente compareceu. EXEMPLO: 3 ÷ 6 = 50%.
- *De onde vem o dado:* a recepção vê se o paciente sai com o orçamento ou se ficou combinado "a gente manda depois".
- *Quem anota e quando:* a recepção, no fim do dia.
- *O que um número ruim indica:* o orçamento é prometido para depois e esfria, ou é apresentado às pressas. Parte das avaliações não gera tratamento, e isso derruba o número sem que haja perda. Por isso este indicador só se compara com a própria clínica, nunca com outra.
- *Quem cuida:* o @copywriter, no roteiro de apresentação e no material que o paciente leva. A decisão clínica é do dentista e fica fora do escopo.
- *Por que entrou:* é a etapa "compareceu → orçamento apresentado" da cascata, que nenhum dos seis números da oferta cobria. O item 5 do núcleo (roteiro de apresentação) mexe exatamente aqui e, sem este número, não teria medida.

**5. Retorno em até 3 dias**
- *Pergunta que responde:* o orçamento que não fecha na hora é acompanhado?
- *Fórmula:* orçamentos não fechados na hora com primeiro retorno em até 3 dias ÷ orçamentos não fechados na hora, já com os 3 dias vencidos. EXEMPLO: 2 ÷ 8 = 25%.
- *De onde vem o dado:* aba `orcamentos`, que tem uma linha por orçamento, identificado só pelo código.
- *Quem anota e quando:* quem apresenta o orçamento abre a linha no dia; quem faz o retorno anota a data.
- *O que um número ruim indica:* o retorno não tem dono, nem texto, nem horário.
- *Quem cuida:* o @copywriter escreve a sequência de retorno; quem faz o retorno é decisão do dono.
- *Mudança em relação à oferta:* era "orçamentos que receberam ao menos um retorno". Sem prazo, um orçamento da semana passada ainda pode receber retorno, e o número muda conforme o dia em que se olha. Os 3 dias acompanham a sequência proposta na oferta, que começa no dia 1 e tem a segunda mensagem no dia 3 (SUPOSIÇÃO a calibrar).

**6. Fechados em até 30 dias**
- *Pergunta que responde:* quantos orçamentos viram tratamento?
- *Fórmula:* orçamentos fechados em até 30 dias depois de apresentados (inclusive os fechados na hora) ÷ orçamentos apresentados, contando só os que já completaram 30 dias. EXEMPLO: 11 ÷ 52 = 21%.
- *De onde vem o dado:* aba `orcamentos` e, para o antes, o histórico do sistema.
- *Quem anota e quando:* a recepção anota a data de fechamento quando ele acontece.
- *O que um número ruim indica:* se o indicador 5 está bom, o problema está na apresentação, no preço ou nas condições de pagamento, e preço e condições são decisão do dentista. Se o indicador 5 está ruim, a primeira suspeita é a falta de acompanhamento.
- *Quem cuida:* o @copywriter, no roteiro de apresentação e na sequência. O preço e as condições são do dentista.
- *Atenção:* é o número que o dono mais quer ver e o que mais demora. O orçamento apresentado numa semana só tem resposta 30 dias depois, e o fechamento de implante e ortodontia pode levar mais que isso (pergunta 5 da seção 12 da oferta). Toda semana, o relatório mostra o grupo de orçamentos que acabou de completar 30 dias.

**Números de apoio** (aparecem no rodapé do relatório, sem comparação):
- *Contatos novos e fora do perfil:* o volume da semana. Se cair muito, nenhum outro número se sustenta.
- *Orçamentos parados:* orçamentos abertos há mais de 7 dias sem retorno nos últimos 7 dias, sem contar quem pediu para não receber mensagens. A planilha calcula sozinha, e é o número sobre o qual o dono consegue agir na mesma semana.
- *Dias com registro:* quantos dias a planilha foi preenchida. Mede a qualidade do dado e é a condição da garantia.

**Reativação (medida por rodada, fora do relatório semanal).** Só depois do parecer do advogado (risco laranja, `03-oferta.md`, seção 10). Para cada rodada e cada grupo (orçamento antigo; paciente sem consulta há mais de 12 meses), a planilha registra mensagens enviadas, quantos responderam, quantos marcaram avaliação e quantos pediram para não receber mais mensagens. O último número é tão importante quanto os outros: se passar de `[SUPOSIÇÃO: 5%]` das mensagens, a rodada para e o texto é revisto. A conta: pediram para parar ÷ mensagens enviadas.

---

## 3. A cascata e a regra do gargalo

### O caminho em números absolutos

```
Contatos novos (no período)
   ├─ respondidos em até 15 min ......... velocidade: não filtra, mas alimenta a etapa seguinte
   ↓
Marcaram avaliação ....................... ÷ contatos novos
   ↓
Vieram à avaliação ....................... ÷ avaliações previstas
   ↓
Saíram com orçamento por escrito ......... ÷ vieram
   ↓
Orçamentos acima do corte (todas as origens)
   ├─ 1º retorno em até 3 dias .......... acompanhamento: não filtra, mas alimenta a etapa seguinte
   ↓
Fechados em até 30 dias .................. ÷ orçamentos com 30 dias completos
```

A "resposta" aparece ao lado e não como degrau porque quase todo contato acaba respondido em algum momento. O que perde paciente é a demora (SUPOSIÇÃO, que o cliente oculto confere). Se ela fosse um degrau, a taxa de marcação calculada sobre os respondidos em 15 minutos poderia passar de 100%, porque quem foi respondido tarde também marca. O retorno funciona do mesmo jeito em relação ao fechamento.

Limite de desenho: o fim da cascata (orçamentos e fechamento) junta orçamentos de pacientes novos e da casa, porque os de pacientes novos sozinhos são poucos demais para medir (seção 4.6). A SUPOSIÇÃO é que a taxa de fechamento não muda muito com a origem. Se o volume permitir, separar depois.

### A regra

**Passo 0. Volume e captação.** Se a clínica tem menos de `[SUPOSIÇÃO: 25]` contatos novos por mês, o problema dela é captação, que está fora do núcleo. Diga isso ao dono. Se ele quiser tratar, o caminho é a agência dele ou a versão com parceiro (@traffic-strategist).

**Passo 1. Separe as etapas com volume.** Só disputa o posto de gargalo a etapa com pelo menos 30 na base do período. Abaixo disso, a etapa fica marcada como "sem volume" e vira pergunta, não conclusão: por exemplo, perguntar ao dentista como os orçamentos são apresentados. Quando a contagem das 3 semanas não alcança 30, use o histórico do sistema, se houver (seção 4.3).

**Passo 2. Compare cada etapa com volume com a sua linha de alerta e calcule a distância relativa:** taxa ÷ alerta − 1. O gargalo é a etapa com a distância mais negativa. Se duas ficarem a menos de 5 pontos de distância uma da outra, escolha a mais perto do fim do caminho, porque o paciente perdido ali já custou mais à clínica.

**Passo 3. Dentro da etapa escolhida, olhe a causa medida.** Se o gargalo é a marcação, olhe o indicador 1 e a coluna "fora do perfil". Se é o fechamento, olhe o indicador 5. Se a causa medida está longe do alvo, a correção começa por ela. Se está perto, a correção vai para o que não se mede (roteiro de agendamento, apresentação do orçamento) e o diagnóstico diz isso.

**Passo 4. Corrija só essa etapa e meça de novo.** As outras ficam como estão até a próxima leitura com volume. Mudar três coisas ao mesmo tempo apaga a única coisa que o piloto pode mostrar.

### Linhas de alerta provisórias

Não achei referência confiável para nenhuma destas etapas. O que apareceu na busca é de quem vende para clínica, e os números se contradizem. Por isso as linhas abaixo são **SUPOSIÇÃO minha, só para o primeiro diagnóstico** de cada clínica. Depois da linha de base, cada clínica passa a ser comparada só consigo mesma, e as linhas de alerta deixam de ser usadas.

| Etapa | Linha de alerta | Em que me apoio |
|---|---|---|
| Marcaram avaliação | 20% | PISTA: a DigiOdonto diz que clínicas com processo estruturado chegam a 18,6% de "lead" que agenda, contra 11,8% sem processo (dado interno de fornecedor, visto só no resumo da busca). O contato novo aqui inclui indicação e balcão, que devem converter mais (SUPOSIÇÃO). |
| Vieram à avaliação | 70% | SUPOSIÇÃO, sem fonte. |
| Saíram com orçamento | 70% | SUPOSIÇÃO, sem fonte. |
| Fechados em 30 dias | 25% | PISTA fraca: páginas da Rework (consultoria que vende para clínicas) citam 25% a 35% (atribuído à ADA) e, em outra página, 55% a 65% (atribuído à Dental Economics). Os dados são dos EUA, as fontes originais não foram conferidas e os dois números brigam entre si. |
| Respondidos em 15 min (causa) | alvo 80% | Alvo de processo. O teto natural é 100%; 80% deixa folga para dia de pico (SUPOSIÇÃO). |
| Retorno em 3 dias (causa) | alvo 90% | Alvo de processo, que depende só da equipe (SUPOSIÇÃO). |

Os dois alvos de processo servem para a operação do Rafael. **Não entram em contrato nem em promessa**, porque dependem da equipe da clínica.

### EXEMPLO FICTÍCIO da regra aplicada

Clínica inventada, nas 3 semanas de linha de base. Os números não são expectativa.

```
Contatos novos ................................ 30   (fora do perfil: 3)
   ├─ respondidos em até 15 min ............... 12   (40% · alvo 80%)
Marcaram avaliação ............................  8   (8 ÷ 30 = 27% · alerta 20%)
Vieram à avaliação ............................  6 de 9 previstas (67%)
     histórico da agenda, fev a mai 2026 ...... 41 de 58 (71% · alerta 70%)
Saíram com orçamento por escrito ..............  3 de 6 (50%) · base 6: sem volume
Orçamentos acima do corte ..................... 10 (novos e da casa)
   ├─ 1º retorno em até 3 dias ................  2 de 8 não fechados na hora (25% · alvo 90%)
Fechados em até 30 dias
     histórico do sistema, fev a mai 2026 ..... 11 de 52 (21% · alerta 25%)
```

A conta, etapa por etapa:
- Marcação, base 30: 26,7 ÷ 20 − 1 = **+33%**, acima do alerta.
- Comparecimento, pelo histórico (base 58), porque a contagem tem base 9: 70,7 ÷ 70 − 1 = **+1%**, no alerta.
- Saíram com orçamento, base 6: **sem volume**. Vira pergunta ao dentista: os 3 que saíram sem orçamento não tinham indicação de tratamento ou ficaram de receber depois?
- Fechamento, pelo histórico (base 52): 21,2 ÷ 25 − 1 = **−15%**. **É o gargalo.**
- Causa medida do fechamento: retorno em 25%, contra alvo de 90%: 25 ÷ 90 − 1 = −72%. A correção começa pela sequência de retorno e por quem será o dono dela.

A resposta em 15 minutos (40%, contra alvo de 80%) também está ruim, mas a etapa que ela alimenta (marcação) está acima do alerta. Ela fica em segundo na fila. Um gargalo por vez.

### Para quem vai cada gargalo

- **Captação (menos de 25 contatos por mês):** agência do dono ou @traffic-strategist. Fora do núcleo.
- **Marcação, com resposta lenta:** treino e horário reservado (Rafael com o dono); roteiro de primeira resposta (@copywriter).
- **Marcação, com resposta rápida:** roteiro de agendamento e banco de respostas (@copywriter). Se o "fora do perfil" estiver alto, a conversa é com quem traz o contato.
- **Comparecimento:** confirmação na véspera e mensagem para quem faltou (@copywriter). O prazo da agenda é decisão do dono.
- **Saíram com orçamento:** roteiro de apresentação e material para levar (@copywriter), com o dentista. A decisão clínica fica fora do escopo.
- **Fechamento, com retorno ruim:** sequência de retorno (@copywriter) e um dono para o retorno (decisão do dono da clínica).
- **Fechamento, com retorno bom:** roteiro de apresentação (@copywriter). Se a questão for preço ou forma de pagamento, a decisão é do dentista e o Rafael só mostra o número.

---

## 4. Linha de base

### 4.1 O que medir antes de mexer em qualquer coisa

1. **Contagem diária** (aba `registro-diario`): contatos novos, fora do perfil, respondidos em 15 minutos, avaliações marcadas, compareceram, faltaram, desmarcaram no dia, saíram com orçamento. São oito números por dia, que a oferta estima em cerca de 5 minutos (SUPOSIÇÃO; o tempo real deve ser perguntado à recepção no fim da semana 1).
2. **Registro de orçamentos** (aba `orcamentos`): uma linha por orçamento acima do corte, com código, origem, datas de apresentação, de retorno e de fechamento.
3. **Cliente oculto:** os 6 contatos de teste da oferta, em horários diferentes, anotados pelo Rafael no arquivo dele (aba `cliente-oculto`). É a conferência independente do indicador 1, o único que a recepção anota sobre o próprio desempenho. O Rafael desconta os contatos de teste dos números da semana: são 6 em cerca de 30, o que inflaria a base em 20%.
4. **Histórico do sistema** (seção 4.3).
5. **Conferência retroativa do retorno:** a recepção olha, dentro da própria clínica, os últimos 20 orçamentos acima do corte que não fecharam na hora e conta em quantos houve retorno em até 3 dias. Ela passa só a contagem. Sem isso, o "antes" do indicador 5 fica com cerca de 8 orçamentos e não dá para comparar (seção 4.6).
6. **Contexto que pode mudar os números,** anotado no início e toda semana: agência e verba de anúncios (o dono se compromete a não mudar durante o piloto ou a avisar quando mudar), pessoas na recepção, férias de dentista, feriados, mudança de preço ou de condição de pagamento.

### 4.2 Quanto tempo e quando

**Três semanas de contagem (15 dias úteis), sem mudar nada.** O diagnóstico da semana 3 usa as duas primeiras, como a oferta prevê, e a garantia continua exigindo 10 dias úteis preenchidos. A terceira semana também entra no "antes", desde que a devolutiva seja marcada para o último dia útil da semana 3. Isso não atrasa nada, porque os roteiros só entram na semana 4. O motivo é o volume: uma clínica com 40 contatos por mês (critério de entrada da oferta, SUPOSIÇÃO) junta cerca de 18 contatos em 2 semanas e cerca de 28 em 3, e a regra do gargalo pede 30.

**Datas, considerando o calendário de 2027:**
- FATO: o Carnaval de 2027 vai de sábado 06/02 à Quarta-feira de Cinzas, 10/02; a terça é 09/02. Não é feriado nacional, mas é feriado em alguns estados (no Rio de Janeiro, por exemplo) e ponto facultativo em muitas cidades (InfoMoney e Band, links no fim).
- **Início recomendado da primeira clínica, dentro do fevereiro decidido pelo Rafael: segunda-feira, 15/02/2027.** Começar em 01/02 poria o Carnaval dentro da linha de base.
- **Escalonamento das 3 vagas,** uma clínica a cada 2 semanas, como a oferta recomenda: clínica A em 15/02, B em 01/03 e C em 15/03. Se as horas do Rafael não comportarem esse ritmo (seção 6), a alternativa é A em 15/02, B em 15/03 e C em 12/04. A semana 13 cai em 10 a 14/05 (A), 24 a 28/05 (B) e 07 a 11/06/2027 (C).
- **Feriados dentro do piloto** (conta a partir da Páscoa de 28/03/2027 e calendário fixo): Sexta-feira Santa em 26/03, que cai na linha de base da clínica C; Tiradentes em 21/04; 1º de maio num sábado; Corpus Christi em 27/05, ponto facultativo nacional e feriado em muitas cidades. A planilha tem a coluna `feriado_ou_evento`, e a semana com feriado é lida sabendo que tem menos dias.
- SUPOSIÇÃO, herdada da oferta: dezembro e janeiro têm menos procura por tratamento eletivo, e fevereiro ainda pesa com volta às aulas e despesas de início de ano. **O histórico da própria clínica confirma ou derruba essa suposição:** basta comparar, no sistema, janeiro e março de 2026.

### 4.3 Histórico do sistema: o que pedir e de quais meses

Se o sistema de gestão guardar datas de agenda e de orçamento (pergunta 4 da seção 12 da oferta), a clínica tira dele **só contagens**, sem lista de pacientes:
- **Mesmos meses do ano anterior, fevereiro a maio de 2026:** é a comparação que neutraliza a sazonalidade, porque é o mesmo período do piloto.
- **Setembro a novembro de 2026:** mostra o nível recente.
- **Fora:** de 15/12 a 31/01, pela suposição de sazonalidade acima.

O que costuma existir no sistema: avaliações marcadas e faltas (indicador 3), orçamentos apresentados e fechados com data (indicador 6). O que quase nunca existe: contatos de WhatsApp (indicadores 1 e 2) e retornos (indicador 5). Para esses, o "antes" é só a contagem das 3 semanas mais a conferência retroativa do retorno.

**Por que o indicador 6 precisa do histórico.** Um orçamento apresentado nas semanas 1 a 3 completa os 30 dias nas semanas 5 a 8, quando a sequência de retorno já está em uso (ela entra na semana 4). O "antes" do fechamento contado no próprio piloto já sai contaminado pelo "depois". Há três saídas, nesta ordem de preferência:
- **A. Histórico do sistema** (fevereiro a maio de 2026). É a recomendada.
- **B. Sem sistema e com o dono de acordo:** os orçamentos das semanas 1 a 3 seguem a rotina antiga até completarem 30 dias. Para a clínica, não há perda em relação ao que já acontecia, mas o dono precisa aceitar isso por escrito.
- **C. Nem histórico nem acordo:** o indicador 6 fica sem "antes". O caso mostra só o "depois" e diz que não há com o que comparar.

### 4.4 Volume mínimo para comparar antes e depois

A margem de erro de uma porcentagem é grande em amostra pequena. A conta que uso (estatística simples, aproximação normal com 95% de confiança, no pior caso) é esta: **margem da diferença, em pontos percentuais = 98 × raiz(1/base do antes + 1/base do depois).**

| Base do antes | Base do depois | Margem da diferença |
|---|---|---|
| 20 | 20 | 98 × raiz(0,100) = **31 pontos** |
| 30 | 30 | 98 × raiz(0,067) = **25 pontos** |
| 30 | 70 | 98 × raiz(0,048) = **21 pontos** |
| 50 | 50 | 98 × raiz(0,040) = **20 pontos** |
| 100 | 100 | 98 × raiz(0,020) = **14 pontos** |

Três regras práticas, que a aba `linha-de-base` aplica sozinha:
- **Para dizer que mudou:** as duas bases precisam ter pelo menos 10, e a diferença precisa ser maior que a margem. Abaixo de 10, a planilha mostra "volume muito baixo: não concluir".
- **Para publicar uma porcentagem:** as duas bases precisam ter pelo menos 30. Abaixo disso, o caso e o relatório mostram "x de y" (por exemplo, "19 de 22"), nunca "86%".
- **Toda semana:** o relatório mostra sempre "x de y". Uma semana sozinha serve para acompanhar a operação, não para concluir; a comparação vale no fim, com as semanas somadas.

A regra de 30 da etapa e a margem são conta estatística, não "referência do método". As referências de volume da skill (300 visitantes, 100 conversões por variação etc.) são de página e anúncio e não se aplicam aqui.

### 4.5 Clínica com pouco volume

- **Antes de entrar:** se o histórico mostra menos de `[SUPOSIÇÃO: 25]` contatos novos ou menos de `[SUPOSIÇÃO: 10]` orçamentos acima do corte por mês, a clínica não serve para o piloto. A dela é captação (passo 0), ou não haverá orçamento para medir. **Recomendo acrescentar o critério de orçamentos aos critérios de entrada da oferta** (`03-oferta.md`, seção 8), que hoje só falam de contatos.
- **Se entrar e o volume vier baixo:** não estender a linha de base, porque isso atrasa a entrega pela qual a clínica pagou. O "antes" passa a ser o histórico do sistema sempre que existir, e o caso dessa clínica vira **caso de processo**: mostra se o roteiro foi usado e se o retorno passou a acontecer, com "x de y", sem porcentagem e sem conclusão sobre fechamento.
- **Não somar** a clínica pequena com as outras para engordar a amostra. A soma das três só serve para ver se a direção foi a mesma, e mesmo assim cada clínica é mostrada separada.
- **Não baixar o valor de corte no meio do piloto** para ganhar volume. Isso muda o que está sendo medido. Se for preciso, baixe antes da semana 1.

### 4.6 O que 3 clínicas em 90 dias permitem concluir

Projeção de volume por clínica, em três cenários. **Projeção não validada**, montada sobre SUPOSIÇÃO de volume (o cenário de 40 contatos vem do critério de entrada da oferta; os outros, de mim). Será revisada com os números reais da linha de base da clínica A em 05/03/2027.

| Cenário por clínica | Conservador | Provável | Otimista |
|---|---|---|---|
| Contatos novos por mês | 25 | 40 | 70 |
| Orçamentos acima do corte por mês | 8 | 15 | 25 |
| Contatos no antes (3 semanas) | 17 | 28 | 48 |
| Contatos no depois (semanas 7 a 13) | 40 | 65 | 113 |
| Margem nos indicadores 1 e 2 | 28 pontos | 22 pontos | 17 pontos |
| Orçamentos no antes, só a contagem | 6 | 10 | 17 |
| Orçamentos no depois do indicador 6 (semanas 5 a 8) | 7 | 14 | 23 |
| Margem no indicador 6, com 3 meses de histórico | 42 pontos | 30 pontos | 23 pontos |

A conta: semanas × (volume do mês ÷ 4,33). Exemplo do cenário provável: 3 × (40 ÷ 4,33) = 28, e 7 × (40 ÷ 4,33) = 65. A margem dos indicadores 1 e 2 nesse cenário é 98 × raiz(1/28 + 1/65) = 22. A do indicador 6, com histórico de 45 orçamentos (3 meses × 15), é 98 × raiz(1/45 + 1/14) = 30. Somando as três clínicas no cenário provável, a margem cai para cerca de 13 pontos nos indicadores 1 e 2 e cerca de 17 no indicador 6.

O que isso quer dizer:

**O piloto consegue mostrar, por clínica:**
- **Se o processo mudou.** É o caso da resposta em 15 minutos e do retorno em 3 dias. Quando um processo sai do nada para a rotina, a mudança costuma ser grande (de 25% para mais de 80%, por exemplo), maior que qualquer margem da tabela. Esses dois números descrevem o que a equipe fez, não uma amostra do comportamento do paciente, e são os mais firmes do piloto.
- **Onde cada clínica perdia paciente no início,** com o tamanho da amostra.
- **Se a recepção conseguiu manter a planilha e o roteiro,** pelos dias com registro e pelo indicador 5 ao longo das semanas.
- **Quanto tempo o Rafael gastou de verdade** (aba `horas-do-rafael`), o que corrige o preço da oferta cheia.

**Só mostra se a mudança for grande:**
- **Marcação, comparecimento e saída com orçamento.** No cenário provável, só diferenças acima de cerca de 22 pontos (marcação) ou de 40 pontos (comparecimento e orçamento, cuja base é pequena) aparecem numa clínica. Uma melhora realista, de 5 a 10 pontos, não se distingue do acaso. Se as três clínicas andarem na mesma direção, isso é "sinal a acompanhar", não resultado.

**Praticamente não mostra:**
- **Fechamento em 30 dias por clínica.** Uma melhora de 21% para 36% fica dentro da margem de 30 pontos (EXEMPLO na aba `linha-de-base`). O "depois" do fechamento tem poucos orçamentos, porque eles precisam completar 30 dias antes do fim do piloto.

**Não permite concluir, com nenhum volume:**
- **Que o método causou a mudança.** Não há grupo de comparação. No mesmo período mudam a estação, a agência, a equipe e os preços, e só o fato de medir já muda o comportamento da recepção (seção 4.7).
- **Que o resultado se repete em outra clínica.** Três clínicas são três casos, não uma amostra do mercado.
- **Qualquer número de faturamento ou retorno sobre o investimento.** A planilha não registra valores, de propósito (seção 5).

O efeito disso na oferta: a prova que o piloto gera é **prova de processo**, mais a palavra do dono. É coerente com a promessa da oferta, que também é de processo. Se o Rafael esperava sair do piloto com um número de fechamento para usar na venda, essa expectativa não se sustenta com 3 clínicas em 90 dias.

### 4.7 Cuidados que protegem o dado

- **Medir já muda o comportamento.** A recepção que passa a anotar a própria resposta tende a responder mais rápido já na linha de base, e o "antes" sai melhor que o normal. Isso faz o piloto subestimar a mudança, nunca superestimar. O cliente oculto e o histórico do sistema ajudam a enxergar o tamanho disso.
- **Autoavaliação.** O indicador 1 é anotado por quem é medido. A conferência é o cliente oculto (2 testes por mês depois da implantação) e, se o dono quiser, uma olhada dele nos horários do WhatsApp, feita dentro da clínica e sem passar nada ao Rafael. O número é do processo, não da pessoa, e isso precisa ser dito à recepção desde o primeiro dia (a oferta já promete isso).
- **Semanas de implantação (4 a 6) ficam fora da comparação.** São de transição.
- **Toda semana, anotar "o que mudou na clínica"** (coluna própria no resumo). Sem isso, uma troca de agência no mês 2 vira, no caso, "efeito do método".

---

## 5. O que conta como resultado e como vira caso publicável

### O que entra como resultado
1. **Os seis números de antes e depois de cada clínica,** com período, fonte do "antes" (contagem ou histórico) e base, no formato "x de y". A porcentagem só aparece quando as duas bases têm 30 ou mais.
2. **A leitura de cada indicador,** em uma de quatro categorias que a aba `linha-de-base` calcula: "mudou para melhor além da margem", "mudou para pior além da margem", "dentro da margem: não dá para afirmar diferença" ou "volume muito baixo: não concluir".
3. **O que foi entregue e usado:** roteiros em uso, dias com registro, retornos feitos.
4. **O que mudou na clínica no período,** a partir da coluna semanal.
5. **A palavra do dono,** na entrevista de 30 minutos e no depoimento opcional, com texto aprovado por ele.

### Condições para publicar
- **Os três casos, inclusive o que não melhorou ou piorou,** com o motivo, como a oferta já prevê. Esconder o caso ruim deixando a entender que todos foram bons esbarra no art. 37 do CDC (publicidade enganosa por omissão; conferido pelo @offer-architect em 19/11/2026).
- **Nada de transformar o caso em promessa.** Não pode haver "aumente X% seus orçamentos fechados", nem média das três clínicas como manchete, nem frase do tipo "clínicas que usam o método fecham mais". O que é anunciado obriga quem anuncia (CDC, art. 30) e precisa sustentar o que diz.
- **Linha de base completa:** pelo menos 12 dos 15 dias úteis com registro, e pelo menos 80% dos dias com registro no "depois". Abaixo disso, o caso sai como relato de processo, sem comparação.
- **Clínica que sai antes do fim** (direito dela ao fim de qualquer mês, decisão de 20/11/2026) **ou que aciona a garantia:** continua sendo um dos três casos. Se a autorização dela permitir, o caso conta até onde foi (por exemplo, "saiu ao fim do mês 2; até ali, a linha de base mostrava...") e por que saiu, nas palavras do dono. Se a autorização não permitir, o relatório do piloto diz que uma das três clínicas saiu e não publica os números dela. Nos dois casos, o texto diz que foram três. Por isso, o termo de autorização precisa ser assinado na entrada e cobrir também a saída antecipada (pendência do advogado).
- **Autorização escrita da clínica** (termo da oferta, a ser redigido com advogado), com a escolha entre aparecer com nome ou anônima. O responsável técnico lê o texto final antes de publicar.
- **Revisão do @revisor** em qualquer peça que use o caso.

### O que nunca entra
- Qualquer dado de paciente: nome, iniciais, foto, idade, bairro, tratamento, dente, valor de orçamento, print de conversa (mesmo com tarja), trecho de prontuário, depoimento de paciente.
- **Recortes pequenos que permitam reconhecer alguém.** Nenhum número com menos de 5 casos quando vier junto com período curto, tratamento ou nome da clínica. Por exemplo, "o único orçamento de implante fechado em março na Clínica X" está fora.
- Faturamento, valor de orçamento ou "dinheiro recuperado". A planilha não registra valores, e é melhor assim: o número de faturamento é o que mais facilmente vira promessa.
- Avaliação individual de funcionária. Os números são da clínica, não da pessoa.

### EXEMPLO FICTÍCIO de como o resultado é escrito

> Clínica A (2 cadeiras, anônima por escolha do dono). Antes: contagem diária da recepção de 15/02 a 05/03/2027 (3 semanas). Depois: 29/03 a 14/05/2027 (7 semanas). Contatos novos respondidos em até 15 minutos de clínica aberta: 12 de 30 antes e 55 de 66 depois. A diferença (43 pontos) é maior que a margem de erro para esse volume (22 pontos). Orçamentos fechados em até 30 dias: 11 de 52 nos mesmos meses de 2026 e 5 de 14 no piloto. A diferença (15 pontos) está dentro da margem (30 pontos), e não dá para afirmar que mudou. No período, a clínica manteve a mesma agência e a mesma verba. O caso não mostra que a mudança veio só do roteiro, nem que se repetiria em outra clínica.

---

## 6. Unit economics do lado do Rafael

Todos os valores são brutos, antes de imposto e de custo de ferramenta (`[A PREENCHER: regime tributário do Rafael]`). As horas são as estimadas pelo @offer-architect, que são SUPOSIÇÃO. A aba `horas-do-rafael` existe para trocá-las pelas reais.

### Horas por clínica (conferência da conta da oferta)

- **Implantação, semanas 1 a 6:** linha de base 4 h + cliente oculto 3 h + diagnóstico 5 h + roteiro de atendimento 6 h + roteiro de orçamento 4 h + sequência de retorno 3 h + reativação 3 h + treino 5 h = **33 h**. Com os bônus 1 e 2 (2 h cada), que o cronograma do piloto põe nas semanas 1 e 2, são **37 h**.
- **Manutenção, a partir do mês 2:** cliente oculto 1 h + ajuste de roteiro 1 h + ajuste de sequência 1 h + treino 2,5 h + relatório e reunião 3 h + conformidade 1 h = 9,5 h, mais a reativação trimestral (3 h ÷ 3 = 1 h por mês) = **cerca de 10 h por mês**.
- **3 primeiros meses:** 33 + 2 × 10 = **53 h** (57 h com bônus). No piloto, somam-se 5 h de documentação do caso: **58 h** (62 h com bônus).
- **Não estão contadas:** venda (as 16 conversas, proposta e contrato), deslocamento se o treino for presencial `[A PREENCHER]` e o relatório semanal das semanas 1 a 6, que não aparece na conta da implantação. Este documento também acrescenta uma tarefa: descontar o cliente oculto dos números da semana. A SUPOSIÇÃO é que isso some nos arredondamentos, mas a aba de horas vai mostrar.

### Valor-hora resultante

| Mensalidade | 3 primeiros meses | A partir do 4º mês |
|---|---|---|
| R$ 1.000 (piloto) | 3.000 ÷ 62 h = **R$ 48** (sem bônus: 3.000 ÷ 58 = R$ 52) | 1.000 ÷ 10 h = R$ 100 |
| R$ 2.000 (só núcleo) | 6.000 ÷ 53 h = **R$ 113** (com bônus: 6.000 ÷ 57 = R$ 105) | 2.000 ÷ 10 h = **R$ 200** |
| R$ 3.600 (com parceiro) | (3.600 − 1.600) × 3 ÷ 59 h = **R$ 102** | 2.000 ÷ 12 h = **R$ 167** |

Na linha de R$ 3.600, o parceiro fica com R$ 1.600 por mês (número da oferta, `[A PREENCHER: quanto o parceiro cobra]`), e acrescentei 2 h por mês de coordenação com ele (SUPOSIÇÃO): 53 + 3 × 2 = 59 h nos 3 primeiros meses e 12 h por mês depois.

**O tempo de permanência pesa mais que o preço.** A implantação é paga pelos meses seguintes. A R$ 2.000 por mês:
- 3 meses: 6.000 ÷ 53 h = R$ 113 por hora
- 6 meses: 12.000 ÷ (53 + 30) h = R$ 145 por hora
- 12 meses: 24.000 ÷ (53 + 90) h = R$ 168 por hora

Quanto tempo uma clínica fica é `[medir]`: o piloto dá a primeira pista, e só a oferta cheia dá o número.

**Preço mínimo pelo valor-hora desejado** `[A PREENCHER: valor-hora desejado do Rafael, aqui chamado V]`:
- mensalidade de manutenção ≥ 10 × V;
- média dos 3 primeiros meses ≥ 53 × V ÷ 3 = 17,7 × V.

EXEMPLO de conta, não recomendação: com V = R$ 150, a manutenção pede R$ 1.500 por mês e os 3 primeiros meses pedem R$ 2.650 por mês. Nesse caso, os R$ 2.000 não pagam a implantação e pagam a manutenção com folga, e a taxa de implantação discutida na oferta (seção 7.2) volta à mesa.

### Capacidade

`[A PREENCHER: horas por mês que o Rafael tem para esta linha, aqui chamadas H]`. Recomendo reservar 20% para venda e imprevistos (SUPOSIÇÃO), o que deixa 0,8 × H para entrega.

Distribuição semanal da implantação de uma clínica (SUPOSIÇÃO, a partir das horas e do cronograma da oferta):
- semanas 1 e 2: 11 h (linha de base, cliente oculto, bônus 1 e 2);
- semana 3: 5 h (diagnóstico);
- semana 4: 18 h (roteiros, sequência e as duas sessões de treino);
- semanas 5 e 6: cerca de 8 h (reativação mais a rotina semanal).

O primeiro mês de uma clínica nova pede cerca de 34 h, o segundo cerca de 12 h, e a clínica em manutenção cerca de 10 h. **Regra de bolso: uma clínica nova ocupa no mês o lugar de três em manutenção.**

- **Clínicas em manutenção ao mesmo tempo:** 0,8 × H ÷ 10. Com H = 60, são 4; com H = 80, 6; com H = 100, 8.
- **Com uma clínica nova no mês:** (0,8 × H − 34) ÷ 10 em manutenção. Com H = 60, 1 nova e 1 em manutenção; com H = 80, 1 nova e 3 em manutenção.

**Carga do piloto com três clínicas** (conta semana a semana sobre a distribuição acima):
- **Escalonamento a cada 2 semanas (A em 15/02, B em 01/03, C em 15/03):** a semana mais cheia tem cerca de 27 h (semana de 22 a 26/03, quando A está na semana 6, B na 4 e C na 2) e as 4 semanas mais cheias somam cerca de 77 h.
- **Escalonamento a cada 4 semanas (A em 15/02, B em 15/03, C em 12/04):** a semana mais cheia cai para cerca de 23 h, e as 4 semanas mais cheias para cerca de 55 h. O custo é que a clínica C só termina no começo de julho, e as férias de julho entram no "depois" dela.
- Com as 3 vagas já decididas, a escolha que sobra é o ritmo. Se H for de 80 h por mês ou mais, o escalonamento é a cada 2 semanas. Entre cerca de 60 h e 80 h, a cada 4 semanas, registrando julho no caso da clínica C. Abaixo de cerca de 60 h, as 3 vagas não cabem sem atrasar entregas com data, e isso aciona a garantia de prazo. Nesse caso, a decisão volta para o Rafael.
- SUPOSIÇÃO: os roteiros da clínica B e da C levam menos tempo que os da A, porque partem de uma base. A aba de horas confirma ou não.

### Projeção do piloto para o Rafael, em três cenários

**Não validada.** As premissas decididas são as 3 vagas, R$ 1.000 por mês, saída ao fim de qualquer mês e garantia do diagnóstico. As premissas que vêm da oferta são 62 h por clínica com bônus e cerca de 16 h perdidas se a garantia for acionada na semana 3. Também há premissas minhas sobre quem fica e quem passa para a oferta cheia. Revisar em 05/03/2027 (devolutiva da clínica A) e em 14/05/2027 (fim da clínica A).

| Cenário | Premissa | Receita | Horas | Valor-hora |
|---|---|---|---|---|
| Conservador | 3 entram; 1 aciona a garantia, 1 sai ao fim do mês 2, 1 completa | 0 + 2.000 + 3.000 = R$ 5.000 | 16 + 42 + 62 = 120 h | R$ 42 |
| Provável | 3 clínicas completam os 90 dias | R$ 9.000 | 3 × 62 = 186 h | R$ 48 |
| Otimista | 3 completam; 2 seguem na oferta cheia (R$ 2.000) por mais 3 meses | R$ 9.000 + R$ 12.000 = R$ 21.000 | 186 + 2 × 30 = 246 h | R$ 85 em 6 meses |

No conservador, a clínica que sai ao fim do mês 2 consumiu a implantação inteira (37 h) e cerca de 5 h de rotina, num total de cerca de 42 h. A saída livre ao fim de cada mês concentra o risco do Rafael na implantação: é ali que ele trabalha mais e recebe menos por hora.

### Metas de custo

- **Custo máximo para conquistar uma clínica (lado do Rafael).** Referência do método: o custo de aquisição deve ficar abaixo de um terço do que o cliente paga ao longo do tempo. A R$ 2.000 por mês, uma clínica que fica 3 meses paga R$ 6.000 e permite gastar até R$ 2.000 para conquistá-la; com 6 meses, R$ 12.000 e R$ 4.000; com 12 meses, R$ 24.000 e R$ 8.000. Enquanto a venda for por conversa, esse custo é o tempo de venda multiplicado por V `[A PREENCHER]`. Permanência `[medir]`.
- **Custo máximo por contato (lado da clínica, só na versão com parceiro de tráfego).** Custo máximo por contato = valor médio do tratamento fechado × margem da clínica × (fechados ÷ contatos novos). EXEMPLO FICTÍCIO: R$ 4.000 × 30% × 5% = R$ 60. Os três números são do dono `[A PREENCHER pelo dono]` e ficam com ele. Não entram no relatório, na planilha nem no caso, e não se aplicam ao piloto, que roda sem tráfego.

---

## 7. Modelo de relatório semanal

Uma página, enviada toda segunda-feira até as 18h, com base no resumo que a clínica manda até as 10h. Lê-se em 2 minutos. EXEMPLO FICTÍCIO:

> **Clínica A · Semana 8 (05 a 09/04/2027)**
>
> **Em uma linha:** a resposta rápida se manteve; o ponto fraco da semana foi o retorno dos orçamentos.
>
> **Os seis números** (esta semana · antes, na linha de base)
> 1. Respondidos em até 15 minutos: 9 de 11 · antes, 12 de 30
> 2. Marcaram avaliação: 4 de 11 · antes, 8 de 30
> 3. Vieram à avaliação: 3 de 4 · antes, 41 de 58 (agenda, fev a mai 2026)
> 4. Saíram com orçamento por escrito: 3 de 3 · antes, 3 de 6
> 5. Orçamentos com retorno em até 3 dias: 1 de 4 · antes, 7 de 28
> 6. Fechados em até 30 dias (orçamentos de 01 a 05/03, que acabaram de completar 30 dias): 2 de 5 · antes, 11 de 52 (sistema, fev a mai 2026)
>
> **Também:** 7 orçamentos abertos sem retorno há mais de 7 dias (na semana passada eram 4). Planilha preenchida em 5 de 5 dias. Nenhum contato fora do perfil.
>
> **O que aconteceu na clínica:** terça e quarta, a recepção ficou com uma pessoa só, e os retornos de orçamento não saíram.
>
> **Uma coisa para esta semana:** reservar 20 minutos por dia, às 11h, só para retorno de orçamento, e zerar os 7 parados até sexta.
>
> *Com números deste tamanho, uma semana não diz se melhorou ou piorou. A comparação vale no fim, com as semanas somadas.*

Regras do relatório: sempre "x de y"; uma única recomendação, que é o gargalo da regra da seção 3 ou, nas semanas sem volume, o número de apoio que pede ação (orçamentos parados); nenhuma frase sobre pessoa da equipe; nenhum dado de paciente, nem como exemplo.

---

## 8. A planilha

Os arquivos estão em `09-metricas/`, e o `LEIA-ME.md` traz definições, rotina, fórmulas e o passo a passo para montar no Google. Em resumo:

**Arquivo da clínica** (fica na conta Google da clínica; o Rafael não tem acesso):
- `configuracao`: data de início, horário, valor de corte, definição de fechado e prazos.
- `registro-diario`: uma linha por dia, só com contagens. É preenchida pela recepção.
- `orcamentos`: uma linha por orçamento acima do corte, identificado só pelo código sequencial. É preenchida pela recepção e por quem apresenta.
- `relatorio-semanal`: calculada, uma linha por semana.
- `linha-de-base`: calculada, com o antes e depois de cada indicador, a margem e a leitura.
- `reativacao`: uma linha por rodada, só depois do parecer do advogado.

**Arquivo do Rafael** (sem nenhum dado da clínica além do que ele mesmo produz): `cliente-oculto` e `horas-do-rafael`.

**Como o Rafael recebe os números:** a clínica copia a linha da semana do `relatorio-semanal` num arquivo de resumo compartilhado com ele, ou manda uma foto da tela dessa aba. Se usar a fórmula que puxa dados de outro arquivo (IMPORTRANGE), o Rafael entra **como leitor, nunca como editor**: quem edita o arquivo de resumo consegue puxar outras abas do registro (SUPOSIÇÃO sobre o funcionamento do Google Planilhas, a conferir na montagem).

---

## 9. Conformidade (registro da skill, seção 9)

**Contexto:** este documento não é peça publicitária. Ele define o que a clínica mede e o que pode virar caso público. Os pontos de atenção estão em três lugares: o dado de paciente dentro da clínica (LGPD), o caso publicado (CDC e Código de Ética Odontológica) e a relação com a equipe.

**Obrigatórios incluídos:**
- Nenhum campo que identifique paciente. Contatos entram só como contagem, e orçamentos só com código sequencial. A coluna de observação é só sobre o processo.
- O registro fica na conta da clínica; o Rafael recebe só números agregados.
- Linhas de exemplo e de instrução marcadas e excluídas das fórmulas.
- Publicação dos três casos, com base e margem, sem promessa.
- Respeito a quem pede para não receber mensagens: a coluna própria tira o orçamento da conta de "parados", e na reativação o pedido conta como alerta.

**Riscos:**
- *Verde:* aba `registro-diario` (só contagens), relatório semanal, cliente oculto (sem paciente) e aba de horas.
- *Laranja, aba `orcamentos`:* o código sequencial é uma forma de pseudonimização. A LGPD define pseudonimização como o tratamento em que o dado perde a possibilidade de associação a uma pessoa "senão pelo uso de informação adicional mantida separadamente pelo controlador" (art. 13, §4º, conferido hoje; o artigo trata de estudos em saúde pública e uso aqui só a definição). Para a clínica, que guarda a ligação entre código e paciente, a aba continua sendo dado pessoal ligado a tratamento de saúde, que é sensível (art. 5º, II). Por isso ela não sai da clínica, segue o princípio da necessidade (art. 6º, III: "limitação do tratamento ao mínimo necessário"), não tem valor nem tipo de tratamento, e a coluna de código deve ser apagada no fim do piloto. Para o Rafael, os números agregados se aproximam de dado anonimizado, que a LGPD não trata como dado pessoal (art. 12), desde que não haja recorte pequeno que permita reconhecer alguém. Confirmar com o advogado se, com esse desenho, o Rafael deixa de ser operador de dados da clínica (dúvida levantada na oferta, seção 7.3).
- *Laranja, conferência retroativa do retorno:* a recepção olha conversas antigas dentro da clínica, para gestão da própria clínica, e passa só a contagem. SUPOSIÇÃO de que isso cabe na finalidade do atendimento; confirmar com o advogado junto com a reativação.
- *Laranja, caso com nome da clínica:* não envolve paciente, mas o nome do responsável técnico fica associado a números da clínica. Ele lê e aprova antes. O dever de sigilo do Código de Ética Odontológica está coberto pela ausência de dado de paciente (artigo não conferido nesta fase).
- *Laranja, equipe:* os números são lidos como do processo, nunca para avaliar uma pessoa. O cliente oculto segue a regra da oferta.
- *Vermelho:* publicar porcentagem de uma clínica como expectativa para outras, publicar média das três como manchete ou esconder o caso que não melhorou (CDC, arts. 30 e 37). É bloqueio do protocolo.

**Artigos citados e conferência:**
- LGPD (Lei 13.709/2018): art. 5º, I, II, III e XI; art. 6º, III; art. 12, caput e §§ 1º e 2º; art. 13, §4º. Conferidos no Planalto em 20/11/2026.
- CDC, arts. 30 e 37: conferidos pelo @offer-architect em 19/11/2026; não reli.
- Código de Ética Odontológica, sigilo: não conferido; não cito artigo.

**Quem precisa aprovar:** o advogado (fluxo de dados da planilha, papel do Rafael na LGPD, termo de uso do caso, conferência retroativa), o responsável técnico de cada clínica (texto do caso) e o @revisor (toda peça que usar o caso).

---

## 10. Pendências e o que medir a seguir

**Do Rafael**
- `[A PREENCHER]` Valor-hora desejado (V). Sem ele, não se sabe se R$ 2.000 paga a implantação nem se entra taxa de implantação.
- `[A PREENCHER]` Horas por mês disponíveis (H). Com as 3 vagas decididas, definem se o escalonamento é de 2 ou de 4 semanas e se as entregas cabem nas datas da garantia de prazo.
- `[A PREENCHER]` Regime tributário. Muda o valor-hora líquido.
- `[A PREENCHER]` Treino presencial ou online. Muda as horas por deslocamento.
- Aceitar ou não as mudanças nos indicadores (seção 2). Se mantiver a lista da oferta, a reativação continua sem "antes" e a etapa "saiu com orçamento" fica sem medida.

**Do dono de cada clínica, antes da semana 1**
- `[A PREENCHER]` Valor de corte do orçamento e definição de "fechado". Sem os dois, os indicadores 5 e 6 não existem.
- `[A PREENCHER]` Horário de atendimento. Sem ele, o relógio dos 15 minutos não tem regra.
- `[medir]` O que o sistema guarda e o histórico de fevereiro a maio de 2026 e de setembro a novembro de 2026. Sem histórico, o indicador 6 fica sem "antes" (saída C da seção 4.3).
- Compromisso de manter agência e verba durante o piloto, ou de avisar quando mudar.

**Para o @offer-architect (ajustes que este documento pede em `03-oferta.md`)**
- Lista de indicadores do item 9 (seção 4.1), segundo a seção 2 deste documento.
- Linha de base de 3 semanas, com a devolutiva no último dia útil da semana 3.
- Critério de entrada com volume de orçamentos (`[SUPOSIÇÃO: 10 por mês]` acima do corte).
- Condição objetiva da garantia: pelo menos 9 dos 10 primeiros dias úteis com registro.
- Datas: início em 15/02/2027, escalonado (decisão de fevereiro do Rafael, 20/11/2026).
- Termo de autorização do caso cobrindo também a clínica que sair antes do fim ou acionar a garantia.

**Medições, por ordem de uso**
1. `[medir]` Tempo real de preenchimento da planilha pela recepção, na semana 1 da clínica A. Se passar de 10 minutos por dia, a planilha é cortada antes da clínica B.
2. `[medir]` Os seis números da linha de base da clínica A, até 05/03/2027, quando esta projeção é revisada.
3. `[medir]` Horas reais do Rafael por item, para corrigir o valor-hora e a capacidade.
4. `[medir]` Quantos meses uma clínica fica na oferta cheia. É o número que mais muda o valor-hora.
5. `[medir]` Quanto tempo o paciente leva para decidir um orçamento de implante ou ortodontia (pergunta 5 da seção 12 da oferta). Se for bem mais que 30 dias, a janela do indicador 6 sobe para 45 ou 60 dias, decisão que precisa ser tomada antes da semana 1.

**O que a falta delas muda:** sem V e H, as seções 6 e 4.2 continuam como conta de exemplo. Sem corte, definição de fechado e histórico, metade do relatório (indicadores 5 e 6) não tem com o que comparar. Nada disso impede montar a planilha agora.

---

## Fontes desta fase

- `00-briefing.md`, `02-avatar.md`, `03-oferta.md` e `01-pesquisa/agencias-odontologia.md` (19/11/2026).
- LGPD (Lei 13.709/2018), arts. 5º, 6º, 12 e 13: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm (conferido em 20/11/2026).
- Carnaval de 2027 (terça em 09/02, Páscoa em 28/03; feriado só em alguns estados): [InfoMoney](https://www.infomoney.com.br/brasil/quando-e-carnaval-2027/) e [Band](https://www.band.com.br/entretenimento/quando-e-o-carnaval-em-2027-veja-a-data), via busca em 20/11/2026.
- Taxas de aceitação de orçamento, PISTA fraca: [Rework, taxa de aceitação de planos de tratamento](https://resources.rework.com/pt/libraries/dental-clinic-growth/treatment-plan-acceptance-rate) e [Rework, conversão de consulta em procedimento](https://resources.rework.com/pt/libraries/healthcare-services-growth/consultation-to-procedure-conversion), vistas só no resumo da busca em 20/11/2026.
- Conversão de contato em agendamento, DigiOdonto (11,8% e 18,6%), PISTA: dado citado no resumo da busca de 20/11/2026; página não aberta.
- Metodologia: `squads/squad-arsenal/skills/metricas-de-funil/SKILL.md` e `squads/squad-arsenal/skills/conformidade/SKILL.md`.
