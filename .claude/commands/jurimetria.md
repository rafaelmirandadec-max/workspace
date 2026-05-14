# Skill: Jurimetria — Estatística e Dados Aplicados ao Direito Brasileiro

```yaml
skill:
  id: jurimetria
  version: "1.0.0"
  updated: "2026-05-14"
  category: jurimetria-dados-juridicos
  agents: ["analista-jurimetrico", "analista-processual", "redator-pareceres"]
  description: "Metodologia de jurimetria brasileira — fontes de dados (DataJud, CNJ), fórmulas de probabilidade, análise de custo-benefício e padrões decisórios"
```

---

## 1. O Que é Jurimetria

Jurimetria é a aplicação de **métodos estatísticos e quantitativos** ao direito para:
- Calcular probabilidade de êxito em ações judiciais
- Estimar tempo de tramitação por tipo de ação e tribunal
- Identificar padrões de decisão por câmara, relator ou vara
- Subsidiar decisões estratégicas (litigar vs. acordar)
- Dimensionar riscos em contratos e transações

**Diferença para jurisprudência:**
| Jurisprudência | Jurimetria |
|---|---|
| Qualitativa — o que os tribunais decidem | Quantitativa — com que frequência e em quanto tempo |
| Análise de acórdãos individuais | Análise de padrões em grandes volumes de decisões |
| "O STJ entende que..." | "Em 73% dos casos o STJ reforma..." |

---

## 2. Principais Fontes de Dados

### DataJud — Base Nacional de Dados do Poder Judiciário (CNJ)
- **URL:** https://datajud-wiki.cnj.jus.br/
- **API Pública:** https://api-publica.datajud.cnj.jus.br/
- **Cobertura:** todos os tribunais brasileiros (TJ, TRF, TRT, STJ, STF)
- **Dados disponíveis:**
  - Classe processual (ação de cobrança, despejo, usucapião, etc.)
  - Assunto CNJ (tabela unificada)
  - Movimentações e datas (início, sentença, acórdão, trânsito)
  - Valor da causa
  - Órgão julgador

**Como buscar via API:**
```
GET https://api-publica.datajud.cnj.jus.br/api_publica_tjsp/_search
Body: {
  "query": {
    "bool": {
      "must": [
        {"match": {"classe.codigo": 1116}},  // código da classe processual
        {"match": {"assunto.codigo": 9999}}   // código do assunto CNJ
      ]
    }
  }
}
```

### Painel CNJ
- **URL:** https://painel.cnj.jus.br/
- **Dados:** acervo, congestionamento, produtividade, tempo médio por tribunal
- **Atualização:** mensal

### Justiça em Números (CNJ — Relatório Anual)
- **URL:** https://www.cnj.jus.br/pesquisas-judiciarias/justica-em-numeros/
- **Período:** publicado anualmente (referência ao ano anterior)
- **Dados:** estatísticas consolidadas de todo o Judiciário brasileiro

### Tabela de Classes e Assuntos do CNJ
- **URL:** https://www.cnj.jus.br/sgt/consulta_publica_classes.php
- Padroniza categorias processuais em todos os tribunais

---

## 3. Tabela Unificada de Assuntos CNJ (Principais)

| Código | Assunto |
|---|---|
| 7771 | Compra e venda |
| 7774 | Rescisão do contrato e devolução do dinheiro |
| 9636 | Locação de Imóvel |
| 9595 | Despejo |
| 9633 | Usucapião |
| 7682 | Indenização por Dano Moral |
| 7691 | Indenização por Dano Material |
| 9999 | Honorários Advocatícios |

---

## 4. Fórmulas de Jurimetria

### Valor Esperado do Litígio (VEL)
```
VEL = (P_êxito × Valor_se_ganhar) - (P_derrota × Custas_se_perder)

Onde:
  P_êxito  = probabilidade de êxito (ex: 0,65 = 65%)
  P_derrota = 1 - P_êxito
  Valor_se_ganhar = valor da condenação esperada
  Custas_se_perder = honorários sucumbência + custas processuais

Exemplo:
  P_êxito = 65%, Valor = R$ 100.000, Custas se perder = R$ 20.000
  VEL = (0,65 × 100.000) - (0,35 × 20.000)
  VEL = 65.000 - 7.000 = R$ 58.000

  Se oferta de acordo = R$ 40.000 → Litigar (VEL > Acordo)
  Se oferta de acordo = R$ 70.000 → Acordar (Acordo > VEL)
```

### Taxa de Provimento
```
Taxa de Provimento = (Nº de recursos providos / Total de recursos julgados) × 100

Tipos:
  - Provimento total: recurso totalmente acolhido
  - Provimento parcial: recurso parcialmente acolhido
  - Negado provimento: recurso rejeitado
```

### Índice de Congestionamento
```
IC = [1 - (Casos Baixados / (Casos Novos + Acervo inicial))] × 100

IC alto → tribunal lento, backlog grande
IC > 80% → congestionamento crítico
```

### Tempo Médio de Tramitação
```
TMT = Σ(Data_baixa - Data_distribuição) / N

Interpretação:
  - Calcula a média dos dias entre distribuição e baixa definitiva
  - Comparar com média do tribunal para identificar vara/câmara mais ágil
```

---

## 5. Referências de Probabilidade por Tipo de Ação

*(Dados de referência — sempre confirmar com DataJud para o período atual)*

### Tribunal de Justiça — Apelações Cíveis (média nacional)
| Resultado | % Médio |
|---|---|
| Provimento total | 18–22% |
| Provimento parcial | 25–30% |
| Negado provimento | 50–55% |

**Interpretação:** Estatisticamente, apelações têm ~45–52% de chance de algum provimento (total ou parcial) nas câmaras cíveis estaduais.

### Ações Imobiliárias — TJSP (referência)
| Tipo | Taxa de êxito do autor |
|---|---|
| Despejo por falta de pagamento | ~85% (autor) |
| Rescisão de contrato imobiliário | ~60% (depende dos fatos) |
| Usucapião | ~55% (forte dependência de prova) |
| Ação renovatória | ~70% (locatário com requisitos) |

### STJ — Recursos Especiais
| Resultado | % Médio |
|---|---|
| Não conhecimento | ~55–60% (filtro de admissibilidade) |
| Provimento | ~20–25% dos conhecidos |
| Negado | ~75–80% dos conhecidos |

---

## 6. Metodologia de Pesquisa Jurimetrica

```yaml
passo_1_definir_pergunta:
  exemplos:
    - "Qual a probabilidade de provimento de apelação em ação de rescisão de compra e venda no TJSP?"
    - "Quanto tempo leva uma ação de despejo por falta de pagamento na 5ª Vara Cível de São Paulo?"
    - "O Relator X costuma reformar decisões que aplicam a Súmula 308 do STJ?"

passo_2_selecionar_fonte:
  - DataJud: para dados brutos de processo (volume, tempo, fase)
  - Painel CNJ: para médias consolidadas por tribunal
  - Jusbrasil: para busca qualitativa + quantitativa por tema e relator
  - Relatório Justiça em Números: para benchmarks anuais

passo_3_definir_filtros:
  - Tribunal (TJSP, TJRJ, STJ...)
  - Classe processual (código CNJ)
  - Assunto (código CNJ)
  - Período (últimos 2–3 anos para dados relevantes)
  - Órgão julgador (câmara, turma, vara)

passo_4_coletar_dados:
  via_websearch: "DataJud [tribunal] [tipo de ação] taxa provimento 2024"
  via_webfetch:  "https://painel.cnj.jus.br/ → filtrar por tribunal e assunto"
  via_api:       "DataJud API pública — query por classe + assunto + tribunal"

passo_5_calcular:
  - Taxa de provimento (para recursos)
  - Tempo médio de tramitação (para planejamento)
  - VEL (para custo-benefício)

passo_6_interpretar:
  - Comparar com médias nacionais e do tribunal
  - Ajustar pelos fatos específicos do caso
  - Identificar fatores que desviam da média (relator, câmara, prova)

passo_7_recomendar:
  - Litigar / Acordar / Negociar
  - Qual câmara/vara distribuir (se houver escolha)
  - Qual estratégia maximiza o VEL
```

---

## 7. Limitações e Cuidados

```yaml
limitacoes:
  amostra_insuficiente:
    problema: "Tipos de ação raros têm poucos dados — margem de erro alta"
    solucao: "Ampliar período ou usar dados nacionais como proxy"

  viés_de_seleção:
    problema: "Casos que chegam ao tribunal são os mais disputados — não representam todos"
    solucao: "Considerar que os casos que acordam antes não aparecem nas estatísticas"

  mudança_jurisprudencial:
    problema: "Novo precedente do STJ pode mudar drasticamente as taxas"
    solucao: "Cruzar com jurisprudência qualitativa — dados antigos podem estar defasados"

  fatores_idiossincráticos:
    problema: "Qualidade das provas, relator específico, local do juízo afetam resultado"
    solucao: "Ajustar a probabilidade base com fatores do caso concreto"

  disclaimer: |
    "Jurimetria fornece probabilidades — não previsões. O resultado de cada processo
    depende de fatores específicos que os dados estatísticos não capturam integralmente."
```

---

## 8. Ferramentas e Recursos

| Ferramenta | Uso | Acesso |
|---|---|---|
| DataJud API | Dados brutos de processos | Gratuito (CNJ) |
| Painel CNJ | Estatísticas consolidadas | Gratuito |
| Justiça em Números | Benchmarks anuais | Gratuito (PDF) |
| Jusbrasil Analytics | Busca por relator/câmara | Plano pago |
| ABJUR | Metodologia e estudos | abjur.org.br |
| FGV Direito SP | Relatórios temáticos | Gratuito (site) |
| IPEA | Pesquisas sobre Judiciário | Gratuito |

---

**STATUS:** Base atualizada Mai/2026 | Dados de referência: Justiça em Números 2024
