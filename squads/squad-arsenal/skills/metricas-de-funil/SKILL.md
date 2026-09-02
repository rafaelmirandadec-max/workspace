# Skill: Métricas de Funil — KPIs, Diagnóstico e Projeção

```yaml
skill:
  id: metricas-de-funil
  version: "4.1.0"
  updated: "2026-09-02"
  category: performance-e-dados
  agents: ["metrics-analyst", "traffic-strategist", "funnel-architect", "offer-architect"]
  description: "Painel de KPIs por etapa, fórmulas de CPL, CAC, LTV e ROAS, método da cascata para achar o gargalo, volume mínimo para decidir e projeção por cenário"
```

---

## 1. Princípios

1. **Sem número, sem opinião.** Na falta de dado, declarar explicitamente que é estimativa.
2. **Um gargalo por vez.** Corrigir a maior perda antes de mexer no resto.
3. **Conversão é razão**, com numerador e denominador claros.
4. **LTV manda no CAC.** Quanto se pode pagar por cliente depende do que ele vale ao longo do tempo.
5. **Amostra pequena é ruído**, não sinal.

---

## 2. Painel de KPIs por Etapa

| Etapa | Métrica | Cálculo | Referência (BR) |
|---|---|---|---|
| Anúncio | CTR (link) | cliques ÷ impressões | 1% a 2,5% |
| Anúncio | CPM | custo ÷ mil impressões | R$ 15 a R$ 60 |
| Captura | Taxa de opt-in | leads ÷ visitantes | 25% a 45% |
| Captura | CPL | investimento ÷ leads | depende do ticket |
| Vendas | Conversão de página | compras ÷ visitantes | 1% a 5% (frio) |
| Checkout | Take rate do bump | bumps ÷ compras | 20% a 40% |
| Checkout | Aceite de upsell | upsells ÷ compras | 10% a 30% |
| E-mail | Taxa de abertura | aberturas ÷ entregues | 25% a 45% |
| E-mail | Taxa de clique | cliques ÷ entregues | 2% a 6% |
| Evento | Presença | presentes ÷ inscritos | 40% a 75% (pago) |
| Geral | AOV | receita ÷ pedidos | — |
| Geral | ROAS | receita ÷ investimento | mín. 2x no front |
| Geral | CAC | investimento ÷ clientes | < 1/3 do LTV |

> Referências são ponto de partida para diagnóstico. Sempre apresentar como benchmark, nunca como resultado prometido.

---

## 3. Fórmulas

```
CPL                          = investimento ÷ leads
CPA / CAC                    = investimento ÷ clientes
AOV                          = receita ÷ número de pedidos
ROAS                         = receita ÷ investimento
LTV                          = ticket médio × compras por cliente × tempo de retenção
Margem por venda             = AOV − custo do produto − taxas − CAC
Taxa de conversão de etapa   = saídas da etapa ÷ entradas da etapa
CPL máximo aceitável         = (AOV × margem %) × taxa de conversão de lead em cliente
Ponto de equilíbrio (leads)  = custo fixo ÷ (margem por venda × conversão de lead em cliente)
Payback de CAC (meses)       = CAC ÷ receita mensal por cliente
```

**Exemplo de CPL máximo:** AOV R$ 500, margem 60%, 3% dos leads compram →
(500 × 0,60) × 0,03 = **R$ 9,00**. Acima disso, o funil opera no prejuízo sem back-end.

---

## 4. Método da Cascata (achar o gargalo)

1. Escreva a cascata completa em números absolutos
2. Calcule a taxa de passagem entre etapas
3. Compare cada taxa com o benchmark
4. O gargalo é a etapa com a **maior distância negativa**
5. Corrija apenas essa etapa e meça de novo

```
100.000 impressões
   → 1.200 cliques      (1,2%  · benchmark 1–2,5% · ok)
   → 180 leads          (15%   · benchmark 25–45% · GARGALO)
   → 5 vendas           (2,8%  · benchmark 1–5%   · ok)

Diagnóstico: página de captura. Não é anúncio, não é oferta.
```

**Para onde mandar cada gargalo:**

| Gargalo | Responsável |
|---|---|
| CTR baixo | @traffic-strategist (criativo e gancho) |
| Opt-in baixo | @copywriter (promessa da captura) |
| Conversão de página baixa | @copywriter e @offer-architect |
| AOV baixo | @funnel-architect (maximizadores) |
| Retenção baixa | @funnel-architect (recorrência e entrega) |
| Lead desqualificado | @avatar-strategist e @funnel-architect (isca) |

---

## 5. Volume Mínimo para Decidir

| Decisão | Volume mínimo |
|---|---|
| Cortar criativo | 1.000 impressões ou 3x o CPA-alvo gasto |
| Avaliar página de captura | 300 visitantes |
| Avaliar página de vendas | 1.000 visitantes ou 30 checkouts |
| Concluir teste A/B | 100 conversões por variação |
| Julgar sequência de e-mail | 500 entregas |

Decidir abaixo desses volumes é sorteio, não análise.

---

## 6. Projeção por Cenário

| Cenário | Premissa | Leads | Vendas | Receita |
|---|---|---|---|---|
| Conservador | Piores taxas dos últimos 90 dias | | | |
| Provável | Média histórica | | | |
| Otimista | Melhores taxas já registradas | | | |

Sem histórico: usar benchmark, marcar a projeção como **não validada** e revisar após os primeiros 7 dias com dados reais.

Toda projeção declara: premissas, origem dos números (real ou estimado) e data.

---

## 7. Teste A/B

```markdown
Hipótese: se [mudança], então [métrica] melhora porque [razão]
Métrica primária: [uma só]
Variável alterada: [uma só]
Volume mínimo: [conforme tabela]
Critério de decisão: [diferença mínima relevante]
Prazo máximo: [data]
```

Ordem de impacto do que testar: **oferta > promessa/headline > criativo > página > botão**. Testar cor de botão antes de testar oferta é desperdício de tráfego.

---

## 8. Anti-Patterns

1. Painel com 30 métricas e nenhuma decisão associada
2. Otimizar CPL enquanto a venda final está quebrada
3. Comparar taxas de canais e temperaturas diferentes
4. Cenário otimista apresentado como meta oficial
5. Cortar criativo com 200 impressões
6. Mudar três etapas ao mesmo tempo e não saber o que funcionou

---

## 9. Checklist

- [ ] Cascata completa com números absolutos e taxas
- [ ] Comparação com benchmark declarada como referência
- [ ] Gargalo único identificado e justificado
- [ ] Uma recomendação prioritária com impacto estimado
- [ ] Projeção nos três cenários com premissas explícitas
- [ ] Origem de cada número identificada (real ou estimado)
- [ ] Volume mínimo respeitado antes de qualquer decisão
