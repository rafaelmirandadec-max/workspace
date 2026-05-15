# Skill: Gestão do Escritório Inteligente — Regra 80/20 e Produtividade

```yaml
skill:
  id: gestao-escritorio
  version: "1.0.0"
  updated: "2026-05-15"
  category: gestao-atendimento
  agents: ["escritorio-chief", "triagem-ia", "gestor-demandas"]
  description: "Metodologia 80/20 aplicada à advocacia, métricas de produtividade, gestão de tempo e automação de tarefas repetitivas"
```

---

## 1. Regra 80/20 Aplicada à Advocacia

```yaml
regra_80_20:
  principio: "20% das atividades geram 80% do resultado. Identifique e automatize o restante."

  analise_tipica_escritorio:
    atividades_que_geram_valor_80pct:
      - "Estratégia processual e tomada de decisão jurídica"
      - "Atendimento humanizado ao cliente (construção de confiança)"
      - "Audiências e negociações de alta relevância"
      - "Produção de peças complexas (ações novas, recursos)"

    atividades_repetitivas_a_automatizar_20pct:
      - "Triagem e atendimento inicial de clientes"
      - "Controle de prazos e leitura de publicações"
      - "Padronização e formatação de petições simples"
      - "Atualização de clientes sobre andamento processual"
      - "Produção de conteúdo para redes sociais"
      - "Cadastro e atualização de processos"

  implementacao:
    passo_1: "Listar todas as atividades do escritório na semana"
    passo_2: "Medir tempo gasto por atividade"
    passo_3: "Classificar: gera valor direto × repetitiva"
    passo_4: "Automatizar as 3 atividades repetitivas que mais consomem tempo"
    passo_5: "Medir resultado após 30 dias"
```

---

## 2. Métricas de Produtividade do Escritório

```yaml
metricas_producao:
  volume:
    processos_ativos: "Total de processos em andamento"
    novos_processos_mes: "Entradas no mês"
    processos_encerrados_mes: "Encerramentos no mês"
    taxa_crescimento_carteira: "% de crescimento mês a mês"

  prazo:
    prazos_perdidos: "Meta: 0 (zero tolerância)"
    tempo_medio_resposta_triagem: "Meta: < 15 minutos"
    tempo_medio_producao_peticao: "Benchmark por tipo de peça"
    antecedencia_protocolo: "Meta: 3 dias úteis antes do prazo"

  financeiro:
    honorarios_recebidos_mes: "R$"
    honorarios_a_receber: "R$ (carteira)"
    taxa_inadimplencia: "% de honorários vencidos"
    ticket_medio_por_processo: "R$ por processo"

  cliente:
    nps_clientes: "Net Promoter Score (meta > 70)"
    taxa_retencao: "% de clientes que voltam"
    taxa_indicacao: "% de novos clientes por indicação"
    tempo_resposta_cliente: "Meta: < 4h em dias úteis"
```

---

## 3. Gestão de Tempo — Blocos de Produtividade

```yaml
blocos_sugeridos:
  manha:
    "08:00–09:00": "Leitura do DJe/PJE — processar publicações (@monitor-publicacoes)"
    "09:00–12:00": "Produção jurídica — bloco de alto foco (sem interrupções)"
    obs: "Sem reuniões, sem WhatsApp neste bloco"

  tarde:
    "13:00–14:00": "Atendimentos de triagem agendados (@triagem-ia)"
    "14:00–16:00": "Audiências / reuniões"
    "16:00–17:00": "Responder clientes e e-mails"
    "17:00–18:00": "Revisão de prazos e planejamento do dia seguinte"

  regras_de_ouro:
    - "Petições com prazo urgente: produzir com mínimo 3 dias de antecedência"
    - "E-mail/WhatsApp: verificar apenas 3x ao dia (9h, 13h, 17h)"
    - "Reuniões internas: máximo 30 minutos cada"
    - "Sem multitarefa em produção jurídica"
```

---

## 4. Automação por Pilar — Roteiro de Implementação

```yaml
implementacao_80_20:
  pilar_1_atendimento:
    semana_1_a_2:
      - "Ativar @triagem-ia para atendimentos via WhatsApp"
      - "Criar template de dossiê de triagem no escritório"
      - "Configurar @monitor-publicacoes para processar DJe diariamente"
    resultado_esperado: "Economizar 2–4h por semana em triagem e publicações"

  pilar_2_producao:
    semana_3_a_4:
      - "Criar banco de templates de petições por tipo (@padronizador-peticoes)"
      - "Configurar @gestor-demandas com carteira atual de processos"
      - "Padronizar formato de relatório semanal de prazos"
    resultado_esperado: "Economizar 3–5h por semana em produção repetitiva"

  pilar_3_marketing:
    semana_5_a_6:
      - "Criar pauta mensal de conteúdo (@roteirizador-videos)"
      - "Gravar 4 Reels em batch (1 tarde = 1 mês de conteúdo)"
      - "Configurar landing page e bio Instagram (@criativo-digital)"
    resultado_esperado: "Economizar 3–4h por semana em marketing"

  total_esperado: "8–13 horas semanais liberadas para atividades de alto valor"
```

---

## 5. Templates de Relatório Gerencial

### Relatório Semanal

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RELATÓRIO SEMANAL — ESCRITÓRIO INTELIGENTE
Semana: [DD/MM] a [DD/MM/AAAA]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRODUÇÃO
Processos ativos:           [n]
Petições protocoladas:      [n]
Publicações processadas:    [n]
Prazos vencidos:            [n] (meta: 0)

ATENDIMENTO
Triagens realizadas:        [n]
Novos contratos fechados:   [n]
Taxa de conversão:          [%]

FINANCEIRO
Honorários recebidos:       R$ [valor]
Honorários a faturar:       R$ [valor]

MARKETING
Conteúdos publicados:       [n]
Seguidores ganhos:          [n]
Consultas geradas pelo digital: [n]

AUTOMAÇÃO — TEMPO ECONOMIZADO
@triagem-ia:                [h]h
@monitor-publicacoes:       [h]h
@padronizador-peticoes:     [h]h
@roteirizador-videos:       [h]h
TOTAL SEMANA:               [h]h
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 6. Checklists Operacionais

### Checklist Diário (15 minutos)

```
MANHÃ (08:00 — 10 minutos)
☐ Processar publicações do DJe/PJE de ontem
☐ Verificar prazos vencendo hoje e amanhã
☐ Checar mensagens urgentes de clientes

FIM DO DIA (18:00 — 5 minutos)
☐ Registrar movimentações do dia no @gestor-demandas
☐ Confirmar prazos de amanhã
☐ Responder clientes pendentes
```

### Checklist Semanal (sexta-feira)

```
☐ Gerar painel geral de processos (@gestor-demandas)
☐ Verificar prazos da semana seguinte (todos)
☐ Gerar relatório de andamento para clientes com prazo próximo
☐ Publicar conteúdo da semana (@roteirizador-videos / @criativo-digital)
☐ Gerar relatório semanal 80/20
```
