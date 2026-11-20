# LEIA-ME — Planilha do piloto "Orçamento com Dono"

Feito em: 20/11/2026 · Responsável: @metrics-analyst · Explicação completa dos indicadores em `../09-metricas.md`.

Esta pasta tem o modelo da planilha em CSV, um arquivo por aba, para ser montado no Google Planilhas. Os CSVs trazem só cabeçalhos, uma linha `COMO_PREENCHER` com instruções e linhas `EXEMPLO` com números inventados. **Apague as duas antes de usar.** Mesmo que fiquem, as fórmulas abaixo ignoram as linhas marcadas `EXEMPLO`. Os exemplos de cada aba são independentes entre si e não precisam bater de uma aba para outra. Os valores calculados da aba `orcamentos` supõem que "hoje" é 08/03/2027.

---

## 1. A regra que não se quebra: nada que identifique paciente

A planilha é preenchida pela recepção, dentro da clínica, e **não tem nenhum campo que identifique paciente**.

- **Contatos, avaliações e comparecimentos entram só como contagem por dia.** Não existe uma linha por pessoa.
- **Orçamentos entram com um código sequencial** (ORC-001, ORC-002...), que a recepção anota na cópia do orçamento que fica na clínica: no sistema, no campo de observação, ou na via de papel. Só quem tem essa cópia consegue saber de quem é o código. A planilha sozinha não diz nada sobre ninguém.
- **Nunca escrever em nenhuma coluna:** nome, iniciais, apelido, telefone, e-mail, CPF, número de prontuário, data de nascimento, idade, bairro, convênio, tratamento, dente, valor do orçamento, foto ou print de conversa.
- **A coluna de observação é só sobre o processo.** Exemplos do que pode: "sistema fora do ar", "recepção com uma pessoa só", "feriado municipal". Nada sobre o paciente, e nada que avalie uma funcionária pelo nome.

Por que assim: dado de saúde ligado a uma pessoa é dado pessoal sensível pela LGPD (art. 5º, II), e a lei manda limitar o tratamento "ao mínimo necessário" (art. 6º, III). O código sequencial é uma pseudonimização. Para a clínica, que guarda a ligação entre código e paciente, a aba de orçamentos continua sendo dado pessoal: por isso ela fica na conta da clínica e não sai de lá. O Rafael só recebe totais da semana. Os artigos foram conferidos no Planalto em 20/11/2026. Isto não é parecer jurídico: o advogado confirma o desenho antes da primeira clínica.

---

## 2. Os dois arquivos e as abas

**Arquivo da clínica** (na conta Google da clínica; o Rafael não tem acesso):

- **`configuracao`**: preenchida uma vez, pelo Rafael com o dono, antes da semana 1. Tem a data de início, o horário de atendimento, o valor de corte do orçamento, a definição de "fechado" e os prazos. Na coluna `valor`, troque o texto "EXEMPLO: ..." pelo valor real (a data como data, sem texto).
- **`registro-diario`**: uma linha por dia de atendimento, só com contagens. A recepção preenche no fim do dia, em cerca de 5 minutos (estimativa a confirmar na semana 1).
- **`orcamentos`**: uma linha por orçamento com valor igual ou acima do corte. Quem apresenta o orçamento abre a linha no dia; quem faz o retorno ou registra o fechamento atualiza as datas.
- **`relatorio-semanal`**: uma linha por semana (1 a 13), calculada sozinha. Só três colunas são digitadas: `dias_de_atendimento`, `parados_na_segunda` e `o_que_mudou_na_clinica`.
- **`linha-de-base`**: o antes e depois de cada indicador, com a margem de erro e a leitura. É calculada, exceto quando o "antes" vem do histórico do sistema, que é digitado.
- **`reativacao`**: uma linha por rodada e grupo. Só é usada depois do parecer do advogado.

**Arquivo do Rafael** (no Drive dele, sem nenhum dado da clínica):

- **`cliente-oculto`**: os contatos de teste que o Rafael faz.
- **`horas-do-rafael`**: o tempo real gasto por item, em minutos.

**Como os números chegam ao Rafael:** toda segunda-feira, até as 10h, a clínica copia a linha da semana da aba `relatorio-semanal` para um arquivo de resumo compartilhado com ele, ou manda uma foto da tela dessa aba. Se preferir automatizar com a fórmula IMPORTRANGE (o arquivo de resumo puxa só o intervalo `relatorio-semanal!A1:Y15` e `linha-de-base!A1:M8`), o Rafael entra no arquivo de resumo **como leitor, nunca como editor**: quem edita esse arquivo consegue mudar a fórmula e puxar outras abas do registro. Conferir isso na montagem.

---

## 3. O que conta em cada coluna (para a recepção)

**`registro-diario`**
- `clinica_aberta`: S se atendeu naquele dia, N se não atendeu. Dia fechado pode ficar sem linha.
- `feriado_ou_evento`: opcional. Feriado, ponte, dentista de férias, campanha da agência.
- `contatos_novos`: quantas pessoas que ainda não são pacientes em tratamento procuraram a clínica pela primeira vez hoje (WhatsApp, telefone, Instagram, site ou balcão), pedindo informação, preço, horário ou avaliação. Cada pessoa conta uma vez, no dia do primeiro contato. **Não contam:** paciente em tratamento, confirmação, remarcação, fornecedor, propaganda, currículo, engano de número.
- `fora_do_perfil`: dos contatos novos de hoje, quantos a clínica não pode atender por motivo objetivo: convênio que não aceita, serviço que não faz, outra cidade. Esses contatos contam também em `contatos_novos`.
- `respondidos_em_15_min`: dos contatos novos de hoje, quantos receberam a primeira resposta de uma pessoa da clínica em até 15 minutos **de clínica aberta**. Se a mensagem chegou com a clínica fechada, o relógio começa quando a clínica abre. Mensagem automática não conta. Ligação atendida conta como respondida. Ligação perdida conta se a clínica ligou de volta ou mandou mensagem em até 15 minutos.
- `avaliacoes_marcadas`: quantas avaliações (primeira consulta) foram marcadas hoje por contatos novos, para qualquer data. Conta no dia em que foi marcada, não no dia da consulta.
- `compareceram`, `faltaram_sem_aviso`, `desmarcaram_no_dia`: das avaliações de pacientes novos previstas para hoje, quantas aconteceram, quantas o paciente faltou sem avisar e quantas foram desmarcadas no próprio dia. A avaliação remarcada com pelo menos um dia de antecedência não entra hoje: entra na nova data.
- `sairam_com_orcamento`: dos que compareceram hoje, quantos saíram com o orçamento por escrito (em mãos ou mandado por escrito no mesmo dia). Quem não precisou de tratamento não conta aqui, e não tem problema: a clínica só é comparada consigo mesma.

**`orcamentos`**
- Entra todo orçamento com valor igual ou acima do corte da aba `configuracao`, de qualquer paciente.
- `origem`: NOVO (chegou como contato novo), CASA (já era paciente) ou REATIVACAO (voltou por mensagem de reativação).
- `fechou_na_hora`: S se fechou no próprio dia da apresentação. Nesse caso, a `data_fechamento` é a mesma data.
- `data_1o_retorno`: a data da primeira mensagem ou ligação da clínica sobre esse orçamento, depois do dia em que foi apresentado.
- `numero_de_retornos` e `data_ultimo_retorno`: atualizar a cada retorno. No primeiro retorno, a mesma data nas duas colunas de data.
- `paciente_respondeu`: S se respondeu a algum retorno, mesmo que tenha sido para dizer que não vai fazer.
- `pediu_para_parar`: S se pediu para não receber mais mensagens. A partir daí, a clínica não manda mais nada sobre esse orçamento.
- `data_fechamento`: quando fechou, pela definição da aba `configuracao`.
- `situacao`: ABERTO, FECHADO ou NAO_FECHOU (o paciente disse que não vai fazer, ou a sequência terminou sem resposta).

**`relatorio-semanal`**
- `dias_de_atendimento`: quantos dias a clínica abriu naquela semana (5, ou 4 se houve feriado). Serve para comparar com `dias_com_registro`.
- `parados_na_segunda`: na segunda-feira, copiar o número da célula "parados hoje" (fórmula S9).
- `o_que_mudou_na_clinica`: mudança de agência ou de verba, gente nova ou de férias na recepção, mudança de preço ou de forma de pagamento, feriado. Sem nomes.

---

## 4. Rotina

- **Todo dia, no fim do expediente (recepção):** uma linha na aba `registro-diario`.
- **Quando apresenta um orçamento acima do corte (quem apresenta ou a recepção):** abrir a linha na aba `orcamentos` e anotar o código na cópia do orçamento que fica na clínica.
- **Quando faz um retorno ou fecha:** atualizar as datas daquela linha.
- **Segunda-feira, até as 10h (recepção ou dono):** preencher as três colunas digitadas da semana anterior no `relatorio-semanal` e mandar a linha ao Rafael.
- **Segunda-feira, até as 18h (Rafael):** relatório de uma página (modelo na seção 7 de `../09-metricas.md`), já descontando os contatos de teste do cliente oculto daquela semana.
- **Semanas 1 a 3 (recepção, uma vez):** conferência retroativa do retorno. Olhar, dentro da clínica, os últimos 20 orçamentos acima do corte que não fecharam na hora e contar em quantos houve retorno em até 3 dias. Passar só os dois números (por exemplo, "5 de 20").

---

## 5. Fórmulas

Escritas para Google Planilhas **em português**: nomes das funções em português e ponto e vírgula entre os argumentos. As fórmulas valem para a linha 2, depois de apagadas as linhas `COMO_PREENCHER` e `EXEMPLO`; basta arrastar para baixo. Se a planilha estiver em inglês, troque o ponto e vírgula por vírgula e use os nomes entre parênteses: SE (IF), E (AND), OU (OR), SOMASES (SUMIFS), CONT.SES (COUNTIFS), SEERRO (IFERROR), ARRED (ROUND), ARREDONDAR.PARA.BAIXO (ROUNDDOWN), RAIZ (SQRT), HOJE (TODAY).

Células da aba `configuracao` usadas nas fórmulas: B3 é a data de início, B8 o prazo do retorno (3), B9 a janela de fechamento (30), B10 a última semana do "antes" (3), B11 a última semana da implantação (6), B12 e B13 as semanas inicial e final do "depois" do indicador 6 (5 e 8).

**Aba `registro-diario`** (colunas: A linha · B data · C clinica_aberta · D feriado_ou_evento · E contatos_novos · F fora_do_perfil · G respondidos_em_15_min · H avaliacoes_marcadas · I compareceram · J faltaram_sem_aviso · K desmarcaram_no_dia · L sairam_com_orcamento · M observacao · N semana · O fase)

- **R1, semana (N2):** `=SE(B2="";"";ARREDONDAR.PARA.BAIXO((B2-configuracao!$B$3)/7;0)+1)`
- **R2, fase (O2):** `=SE(N2="";"";SE(N2<=configuracao!$B$10;"antes";SE(N2<=configuracao!$B$11;"implantação";"depois")))`

**Aba `orcamentos`** (colunas: A linha · B codigo · C origem · D data_apresentado · E fechou_na_hora · F data_1o_retorno · G numero_de_retornos · H data_ultimo_retorno · I paciente_respondeu · J pediu_para_parar · K data_fechamento · L situacao · M observacao · N semana · O retorno_no_prazo · P fechou_em_30_dias · Q parado)

- **O1, semana (N2):** `=SE(D2="";"";ARREDONDAR.PARA.BAIXO((D2-configuracao!$B$3)/7;0)+1)`
- **O2, retorno no prazo (O2):** `=SE(D2="";"";SE(E2="S";"não se aplica";SE(F2<>"";SE(F2-D2<=configuracao!$B$8;"S";"N");SE(HOJE()-D2<=configuracao!$B$8;"aguardando";"N"))))`
  Em palavras: se fechou na hora, não se aplica. Se teve retorno, S quando foi em até 3 dias. Se ainda não teve retorno, "aguardando" enquanto o prazo não venceu, e N depois.
- **O3, fechou em 30 dias (P2):** `=SE(D2="";"";SE(OU(E2="S";E(K2<>"";K2-D2<=configuracao!$B$9));"S";SE(OU(L2="NAO_FECHOU";K2<>"";HOJE()-D2>configuracao!$B$9);"N";"aguardando")))`
  Em palavras: S se fechou na hora ou em até 30 dias. N se fechou depois de 30 dias, se o paciente disse que não vai fazer, ou se passaram 30 dias sem fechar. Nos outros casos, "aguardando".
- **O4, parado (Q2):** `=SE(D2="";"";SE(E(L2="ABERTO";J2<>"S";HOJE()-D2>7;OU(H2="";HOJE()-H2>7));"S";"N"))`
  Em palavras: aberto há mais de 7 dias, sem retorno nos últimos 7 dias, e o paciente não pediu para parar.

**Aba `relatorio-semanal`** (colunas: A linha · B semana · C fase · D dias_de_atendimento · E dias_com_registro · F contatos_novos · G fora_do_perfil · H ind1_respondidos_15min · I ind1_pct · J ind2_marcaram · K ind2_pct · L ind3_compareceram · M ind3_previstas · N ind3_pct · O ind4_sairam_com_orcamento · P ind4_pct · Q ind5_retorno_no_prazo · R ind5_base · S ind5_pct · T ind6_fechados_30d · U ind6_base · V ind6_pct · W ind6_aguardando · X parados_na_segunda · Y o_que_mudou_na_clinica)

- **S1, fase (C2):** `=SE(B2<=configuracao!$B$10;"antes";SE(B2<=configuracao!$B$11;"implantação";"depois"))`
- **S2, dias com registro (E2):** `=CONT.SES('registro-diario'!$N:$N;$B2;'registro-diario'!$E:$E;"<>";'registro-diario'!$A:$A;"<>EXEMPLO")`
- **S3, soma da semana:** `=SOMASES('registro-diario'!$E:$E;'registro-diario'!$N:$N;$B2;'registro-diario'!$A:$A;"<>EXEMPLO")`. Esta é a de F2 (contatos novos). Nas outras colunas, troque só a primeira coluna somada: G2 usa `$F:$F`, H2 usa `$G:$G`, J2 usa `$H:$H`, L2 usa `$I:$I` e O2 usa `$L:$L`.
- **S4, porcentagens:** I2 `=SEERRO(H2/F2;"")` · K2 `=SEERRO(J2/F2;"")` · N2 `=SEERRO(L2/M2;"")` · P2 `=SEERRO(O2/L2;"")` · S2 `=SEERRO(Q2/R2;"")`. Formatar como porcentagem sem casas decimais.
- **S5, avaliações previstas (M2):** `=L2+SOMASES('registro-diario'!$J:$J;'registro-diario'!$N:$N;$B2;'registro-diario'!$A:$A;"<>EXEMPLO")+SOMASES('registro-diario'!$K:$K;'registro-diario'!$N:$N;$B2;'registro-diario'!$A:$A;"<>EXEMPLO")`
- **S6, retorno (Q2 e R2):**
  Q2 `=CONT.SES(orcamentos!$N:$N;$B2;orcamentos!$O:$O;"S";orcamentos!$A:$A;"<>EXEMPLO")`
  R2 `=Q2+CONT.SES(orcamentos!$N:$N;$B2;orcamentos!$O:$O;"N";orcamentos!$A:$A;"<>EXEMPLO")`
  A base só conta orçamentos com o prazo de 3 dias já vencido. Os "aguardando" ficam de fora.
- **S7, fechamento (T2, U2 e W2):**
  T2 `=CONT.SES(orcamentos!$N:$N;$B2;orcamentos!$P:$P;"S";orcamentos!$A:$A;"<>EXEMPLO")`
  U2 `=T2+CONT.SES(orcamentos!$N:$N;$B2;orcamentos!$P:$P;"N";orcamentos!$A:$A;"<>EXEMPLO")`
  W2 `=CONT.SES(orcamentos!$N:$N;$B2;orcamentos!$P:$P;"aguardando";orcamentos!$A:$A;"<>EXEMPLO")`
  Cada linha mostra os orçamentos **apresentados** naquela semana. Eles só completam 30 dias cerca de 5 semanas depois.
- **S8, porcentagem de fechamento (V2):** `=SE(W2>0;"";SEERRO(T2/U2;""))`. A porcentagem só aparece quando todos os orçamentos da semana completaram 30 dias.
- **S9, "parados hoje"** (célula à parte, por exemplo AA2, com o rótulo em AA1): `=CONT.SES(orcamentos!$Q:$Q;"S";orcamentos!$A:$A;"<>EXEMPLO")`. Como o número muda todo dia, na segunda-feira ele é copiado como valor para a coluna X.

**Aba `linha-de-base`** (colunas: A linha · B indicador · C fonte_do_antes · D antes_num · E antes_base · F antes_pct · G depois_num · H depois_base · I depois_pct · J diferenca_pontos · K margem_pontos · L volume_para_percentual · M leitura)

- **L1, somas do antes e do depois.** Para o "antes", a fórmula é `=SOMASES('relatorio-semanal'!$H:$H;'relatorio-semanal'!$C:$C;"antes";'relatorio-semanal'!$A:$A;"<>EXEMPLO")`; para o "depois", troque "antes" por "depois". Trocando a coluna somada, de indicador para indicador:
  1. numerador H, base F;
  2. numerador J, base F;
  3. numerador L, base M;
  4. numerador O, base L;
  5. numerador Q, base R, e no "antes" soma-se a conferência retroativa: `=SOMASES(...)+5` no numerador e `=SOMASES(...)+20` na base, com os números reais da clínica;
  6. no "antes", digitar os números do histórico do sistema (ou usar a soma das semanas 1 a 3 só se a clínica escolher a saída B da seção 4.3 de `../09-metricas.md`). No "depois", somar as semanas de B12 a B13: `=SOMASES('relatorio-semanal'!$T:$T;'relatorio-semanal'!$B:$B;">="&configuracao!$B$12;'relatorio-semanal'!$B:$B;"<="&configuracao!$B$13;'relatorio-semanal'!$A:$A;"<>EXEMPLO")`, e o mesmo com a coluna U para a base.
  Para os indicadores 2 e 3, se a contagem das semanas 1 a 3 tiver base menor que 30 e existir histórico do sistema dos mesmos meses do ano anterior, digite o histórico no "antes" e anote a fonte na coluna C.
- **L2, porcentagens:** F2 `=SEERRO(D2/E2;"")` · I2 `=SEERRO(G2/H2;"")`
- **L3, diferença em pontos (J2):** `=SE(OU(F2="";I2="");"";ARRED((I2-F2)*100;0))`
- **L4, margem em pontos (K2):** `=SE(OU(E2<1;H2<1);"";ARRED(98*RAIZ(1/E2+1/H2);0))`
  É a margem de erro aproximada da diferença entre duas porcentagens, com 95% de confiança, no pior caso: 1,96 × 0,5 × raiz(1/base do antes + 1/base do depois) × 100.
- **L5, dá para publicar porcentagem? (L2):** `=SE(E(E2>=30;H2>=30);"S";"N")`
- **L6, leitura (M2):** `=SE(OU(J2="";K2="");"";SE(OU(E2<10;H2<10);"volume muito baixo: não concluir";SE(J2>K2;"mudou para melhor além da margem";SE(J2<-K2;"mudou para pior além da margem";"dentro da margem: não dá para afirmar diferença"))))`

**Aba `reativacao`** (colunas: A linha · B rodada · C data_inicio · D grupo · E mensagens_enviadas · F responderam · G marcaram_avaliacao · H pediram_para_parar · I observacao · J pct_responderam · K pct_marcaram · L pct_pediram_para_parar)

- **R3, porcentagens:** J2 `=SEERRO(F2/E2;"")` · K2 `=SEERRO(G2/E2;"")` · L2 `=SEERRO(H2/E2;"")`. Se L2 passar de 5% (SUPOSIÇÃO de alerta), a rodada para e o texto é revisto.

**Aba `cliente-oculto`, no arquivo do Rafael** (colunas: A linha · B clinica · C teste · D data · E dia_da_semana · F horario · G canal · H dentro_do_horario · I respondeu · J minutos · K resposta_em_15_min · L ofereceu_horario · M observacao)

- **C1 (K2):** `=SE(I2="";"";SE(E(I2="S";J2<>"";J2<=15);"S";"N"))`

**Aba `horas-do-rafael`:** sem fórmula na linha. Para o total por item, use uma tabela dinâmica (linhas: item; valores: soma de minutos ÷ 60). Itens: 1 linha de base · 2 cliente oculto · 3 diagnóstico · 4 roteiro de atendimento · 5 roteiro de orçamento · 6 sequência de retorno · 7 reativação · 8 treino · 9 relatório e reunião · 10 conformidade · B1 leitura do relatório da agência · B2 conformidade do que a clínica publica · B3 banco de respostas · DOCUMENTACAO_CASO · VENDA · DESLOCAMENTO.

---

## 6. Como montar no Google

1. **Rafael, no Drive dele:** crie a planilha-modelo "Piloto — registro da clínica". Importe cada CSV numa aba com o mesmo nome do arquivo, sem o ".csv" (Arquivo > Importar > Inserir nova página). Apague as linhas `COMO_PREENCHER` e `EXEMPLO`, cole as fórmulas da seção 5 e arraste até a linha 400 (registro e orçamentos) ou 14 (relatório semanal).
2. **Listas fechadas** (Dados > Validação de dados): S/N nas colunas de sim ou não; NOVO/CASA/REATIVACAO em `origem`; ABERTO/FECHADO/NAO_FECHOU em `situacao`; ORCAMENTO_ANTIGO/SEM_RETORNO_12_MESES em `grupo`; datas válidas nas colunas de data; números inteiros maiores ou iguais a zero nas contagens. Na coluna `respondidos_em_15_min`, acrescente a regra "menor ou igual a `contatos_novos`".
3. **Proteja as colunas calculadas** (Dados > Proteger páginas e intervalos), para que ninguém digite por cima de uma fórmula.
4. **Na clínica, com o dono:** abra o modelo e use "Arquivo > Fazer uma cópia" **na conta Google da clínica**. A cópia é da clínica. Não compartilhe a cópia com o Rafael.
5. **Arquivo de resumo:** se a clínica quiser, ela cria um segundo arquivo só para o resumo semanal (seção 2) e o compartilha com o Rafael como leitor.
6. **No arquivo do Rafael:** uma planilha separada com as abas `cliente-oculto` e `horas-do-rafael`.

## 7. No fim do piloto

- A clínica apaga a coluna `codigo` da aba `orcamentos`, ou a aba inteira, se não for usar depois. A decisão é dela, como controladora dos dados.
- O Rafael guarda só os resumos semanais e a aba `linha-de-base` de cada clínica: números agregados, sem recorte pequeno que permita reconhecer alguém.
- Nada desta planilha vai para o repositório nem para o Drive do Rafael com dado de paciente. Esta pasta tem só o modelo vazio.
