# Skill: Triagem Jurídica — Classificação e Atendimento Inicial

```yaml
skill:
  id: triagem-juridica
  version: "1.0.0"
  updated: "2026-05-15"
  category: gestao-atendimento
  agents: ["triagem-ia", "escritorio-chief"]
  description: "Metodologia de triagem, classificação de urgência e atendimento inicial de clientes para escritórios de advocacia"
```

---

## 1. Matriz de Classificação de Urgência

```
URGÊNCIA × IMPACTO
                    BAIXO IMPACTO       ALTO IMPACTO
──────────────────────────────────────────────────────
PRAZO IMEDIATO  │  🟡 PRIORITÁRIO  │  🔴 URGENTE
(< 5 dias)      │                  │
──────────────────────────────────────────────────────
SEM PRAZO       │  🟢 NORMAL       │  🟡 PRIORITÁRIO
IMEDIATO        │                  │
──────────────────────────────────────────────────────
```

---

## 2. Classificação por Área Jurídica

```yaml
areas_e_sinais:
  civil:
    sinais: ["contrato", "indenização", "dano moral", "cobrança", "dívida"]
    prazo_prescricional_padrao: "3 anos (art. 206 §3º CC)"
    urgencias_comuns: ["liminar de busca e apreensão", "tutela inibitória", "arresto"]

  imobiliario:
    sinais: ["imóvel", "apartamento", "terreno", "locação", "despejo", "usucapião"]
    prazo_prescricional_padrao: "10 anos (ação real — art. 205 CC)"
    urgencias_comuns: ["liminar de reintegração de posse", "despejo liminar", "embargos de terceiro"]

  trabalhista:
    sinais: ["demissão", "FGTS", "hora extra", "assédio", "vale", "CLT", "rescisão"]
    prazo_prescricional: "2 anos após extinção do contrato (art. 7º XXIX CF)"
    urgencias_comuns: ["tutela de urgência para reintegração", "bloqueio de FGTS"]

  consumidor:
    sinais: ["produto", "serviço", "loja", "banco", "negativação", "defeito", "procon"]
    prazo_prescricional: "5 anos (art. 27 CDC)"
    urgencias_comuns: ["tutela para retirar negativação", "suspensão de cobrança indevida"]

  familia:
    sinais: ["divórcio", "guarda", "alimentos", "pensão", "inventário", "herança"]
    prazo_prescricional: "variável por instituto"
    urgencias_comuns: ["guarda provisória", "alimentos provisórios", "arresto de bens"]

  empresarial:
    sinais: ["empresa", "sócio", "contrato comercial", "recuperação judicial", "falência"]
    prazo_prescricional_padrao: "3 anos (art. 206 §3º V CC)"
    urgencias_comuns: ["tutela inibitória", "dissolução liminar", "bloqueio de ativos"]

  previdenciario:
    sinais: ["INSS", "aposentadoria", "benefício", "auxílio", "BPC", "perícia"]
    prazo_prescricional: "5 anos para verbas previdenciárias"
    urgencias_comuns: ["liminar para restabelecimento de benefício", "tutela de urgência INSS"]
```

---

## 3. Perguntas Essenciais de Triagem (Universal)

```
1. QUEM é o cliente? (identificação básica)
2. O QUE aconteceu? (relato livre — não interromper)
3. QUANDO aconteceu? (data do fato — verificar prescrição)
4. HÁ PRAZO? (prazo processual ou contratual iminente)
5. HÁ PROCESSO? (número do processo, se existente)
6. QUAIS DOCUMENTOS o cliente tem?
7. O QUE o cliente QUER? (pretensão clara)
8. JÁ TENTOU resolver? (extrajudicial, Procon, sindicato)
```

---

## 4. Sinais de Alerta — Escalamento Imediato

```yaml
escalar_imediatamente:
  prazo_processual:
    - "Citação com prazo de resposta < 48h"
    - "Prazo recursal < 48h"
    - "Audiência em < 24h sem preparação"

  risco_pessoal:
    - "Risco de prisão (mandado de prisão, flagrante)"
    - "Violência doméstica — medida protetiva urgente"
    - "Internação involuntária"

  risco_patrimonial:
    - "Penhora ou bloqueio de conta bancária em curso"
    - "Despejo com data marcada < 48h"
    - "Busca e apreensão de bem essencial"

  valor_elevado:
    - "Causa com valor > R$ 500.000"
    - "Caso com repercussão pública ou na mídia"
```

---

## 5. Fluxo de Encaminhamento Pós-Triagem

```
DOSSIÊ DE TRIAGEM GERADO
│
├── Urgência URGENTE (🔴)
│   └── Notificar advogado IMEDIATAMENTE
│       + Acionar @redator-peticoes ou @analista-processual
│
├── Urgência PRIORITÁRIA (🟡)
│   └── Agendar atendimento em até 24h
│       + Encaminhar dossiê para análise
│
└── Urgência NORMAL (🟢)
    └── Incluir na fila de atendimentos
        + @analista-processual para avaliação de estratégia
```

---

## 6. Métricas de Atendimento

```yaml
metricas:
  tempo_triagem_alvo: "15 minutos por cliente"
  taxa_dossiê_completo: "> 95% dos casos"
  tempo_resposta_urgente: "< 30 minutos"
  satisfacao_cliente: "Pesquisa pós-atendimento (NPS)"

  indicadores_semana:
    - "Total de triagens realizadas"
    - "Distribuição por área jurídica"
    - "Distribuição por urgência"
    - "Tempo médio de triagem"
    - "Taxa de conversão (triagem → contrato)"
```
