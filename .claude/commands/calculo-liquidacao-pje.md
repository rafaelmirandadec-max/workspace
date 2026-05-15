# Skill: Cálculo de Liquidação de Sentença e Protocolo PJE

```yaml
skill:
  id: calculo-liquidacao-pje
  version: "1.0.0"
  updated: "2026-05-15"
  category: producao-juridica
  agents: ["padronizador-peticoes"]
  description: "Metodologia de liquidação de sentença, índices de atualização monetária vigentes, cálculo de juros e protocolo no PJE"
```

---

## 1. Índices de Atualização Monetária Vigentes (2026)

```yaml
indices_vigentes:
  IPCA_E:
    nome: "Índice Nacional de Preços ao Consumidor Amplo Especial"
    fonte: "IBGE"
    uso: "Atualização de débitos civis (regra geral pós-2012)"
    base_legal: "STJ — REsp Repetitivo 1.495.146/MG"
    acumulado_verificar: "calculoexato.net ou IBGE"

  SELIC:
    nome: "Taxa Selic Over"
    fonte: "Banco Central do Brasil"
    uso: "Débitos trabalhistas (ADC 58 STF, jun/2021 em diante)"
    obs: "Substitui IPCA-E + juros nas relações trabalhistas — tudo na Selic"

  INPC:
    nome: "Índice Nacional de Preços ao Consumidor"
    fonte: "IBGE"
    uso: "Alternativa ao IPCA-E em algumas turmas estaduais — verificar jurisprudência local"

  TR:
    nome: "Taxa Referencial"
    fonte: "Banco Central"
    uso: "Poupança e FGTS — não mais aplicável a débitos civis (STF)"
    obs: "STF declarou inconstitucional uso da TR para correção de débitos civis (RE 870.947)"
```

---

## 2. Tabela de Juros por Natureza da Dívida

```yaml
juros_por_natureza:
  civil_geral:
    taxa: "1% ao mês"
    base_legal: "Art. 406 CC + Art. 161 CTN"
    inicio: "Data do evento danoso (responsabilidade extracontratual — Súmula 54 STJ)"
    inicio_contratual: "Data do inadimplemento"
    obs: "Juros são simples, não compostos"

  trabalhista:
    taxa: "SELIC (juros embutidos)"
    base_legal: "ADC 58 STF — julgamento em 18/12/2020"
    inicio: "Ajuizamento da reclamação"
    obs: "SELIC substitui integralmente juros + correção a partir de jun/2021"

  consumidor_dano_moral:
    taxa: "1% ao mês"
    base_legal: "Art. 406 CC"
    inicio_correcao: "Data do evento (Súmula 362 STJ)"
    inicio_juros: "Data do evento (responsabilidade extracontratual)"

  fazenda_publica:
    correcao: "IPCA-E"
    juros: "Selic (art. 5º Lei 11.960/09 — STF RE 870.947)"
    base_legal: "RE 870.947 STF — Repercussão Geral"
    obs: "Verificar se há precatório ou RPV (< 60 salários mínimos)"
```

---

## 3. Metodologia de Liquidação de Sentença

### Passo a Passo

```
PASSO 1 — Identificar o Título Executivo
   • Transcrever o dispositivo da sentença literalmente
   • Identificar: valor principal, índice, juros, honorários

PASSO 2 — Determinar o Valor Base
   • Valor da condenação original
   • Data-base (quando começa a contar)

PASSO 3 — Calcular a Correção Monetária
   Fórmula: Valor Base × Fator Acumulado do Índice
   Período: [Data-base] até [Data do cálculo]
   Fonte: tabela oficial do índice (IBGE/BCB)

PASSO 4 — Calcular os Juros Moratórios
   Fórmula: Valor Base × Taxa × Período
   Juros simples (não compostos) para direito civil

PASSO 5 — Somar Honorários Sucumbenciais
   % fixado na sentença × valor da condenação atualizada

PASSO 6 — Deduzir Pagamentos Parciais (se houver)
   Atualizar o pagamento parcial até a data do cálculo
   Subtrair do total

PASSO 7 — Gerar Memória de Cálculo
   Planilha detalhada período a período

PASSO 8 — Verificar Data Base
   Indicar claramente a data de referência do cálculo
   (valor se altera diariamente após essa data)
```

### Template de Memória de Cálculo

```
MEMÓRIA DE CÁLCULO — [Nº do processo]
Autor:     [nome]
Réu:       [nome]
Data base: [DD/MM/AAAA]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. VALOR PRINCIPAL DA CONDENAÇÃO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Valor original:              R$ [X]
   Data-base:                   [DD/MM/AAAA]
   Dispositivo da sentença:     [transcrição]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. ATUALIZAÇÃO MONETÁRIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Índice:                      [IPCA-E / SELIC / outro]
   Período:                     [DD/MM/AAAA] a [DD/MM/AAAA]
   Fator acumulado:             [X,XXXX]
   Valor corrigido:             R$ [X]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. JUROS MORATÓRIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taxa:                        [1% a.m. / SELIC]
   Início:                      [DD/MM/AAAA]
   Término:                     [DD/MM/AAAA]
   Período (meses):             [n]
   Valor dos juros:             R$ [X]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. HONORÁRIOS SUCUMBENCIAIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   % fixado:                    [X]%
   Base de cálculo:             R$ [condenação atualizada]
   Valor dos honorários:        R$ [X]
   Honorários recursais:        R$ [X] (se aplicável)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. TOTAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Valor principal atualizado:  R$ [X]
   Juros moratórios:            R$ [X]
   Honorários:                  R$ [X]
   (-) Pagamentos parciais:    -R$ [X]
   ─────────────────────────────────────
   TOTAL DA EXECUÇÃO:           R$ [X]
   Data base do cálculo:        [DD/MM/AAAA]
```

---

## 4. Protocolo PJE — Requisitos Técnicos

```yaml
requisitos_tecnicos_pje:
  arquivo:
    formato: "PDF (texto selecionável — não escaneado)"
    tamanho_maximo: "10 MB por arquivo (verificar tribunal)"
    qualidade_scan: "se necessário escanear: 300 DPI mínimo"
    nome_arquivo: "sem acentos, espaços ou caracteres especiais"

  assinatura_digital:
    obrigatoria: "SIM para advogados (certificado ICP-Brasil)"
    tipos_aceitos: "A1 (arquivo) ou A3 (token/cartão)"
    validade: "verificar se certificado está dentro do prazo"
    obs: "Petição sem assinatura válida = ineficaz (art. 10 MP 2.200-2/01)"

  procuracao:
    formato_digital: "PDF assinado digitalmente pelo outorgante"
    validade: "mesma validade de procuração física"
    obs: "Verificar se o tribunal exige procuração para ato específico"

  ordem_de_juntada:
    1: "Petição principal (arquivo separado)"
    2: "Procuração (se primeiro ato)"
    3: "Documentos (um por arquivo ou em conjunto — verificar tribunal)"
    4: "Comprovante de custas (quando aplicável)"
    5: "Substabelecimento (quando aplicável)"
```

---

## 5. Tabela de Prazos para Cumprimento de Sentença

```yaml
cumprimento_sentenca:
  pagamento_voluntario:
    prazo: "15 dias corridos (art. 523 CPC)"
    inicio: "Do trânsito em julgado ou da intimação do devedor"
    multa_inadimplencia: "10% sobre o valor (art. 523 §1º CPC)"
    honorarios_adicionais: "+10% (art. 523 §1º CPC)"

  impugnacao_ao_cumprimento:
    prazo: "15 dias (art. 525 CPC)"
    inicio: "Da intimação do devedor para pagar"
    fundamentos_possiveis:
      - "Falta ou nulidade da citação — art. 525 §1º I"
      - "Ilegitimidade da parte — art. 525 §1º II"
      - "Inexigibilidade do título — art. 525 §1º III"
      - "Penhora incorreta — art. 525 §1º IV"
      - "Excesso de execução — art. 525 §1º V"
      - "Incompetência do juízo — art. 525 §1º VI"
      - "Qualquer causa impeditiva — art. 525 §1º VII"

  execucao_titulo_extrajudicial:
    prazo_embargos: "15 dias após intimação da penhora (art. 915 CPC)"
    garantia_juizo: "NÃO obrigatória (art. 914 §1º CPC)"
    bens_penhora_ordem: |
      1. Dinheiro em espécie / depósito bancário
      2. Títulos de dívida pública
      3. Títulos e valores mobiliários
      4. Veículos
      5. Bens imóveis
      6. Bens móveis em geral
      (art. 835 CPC)
```
