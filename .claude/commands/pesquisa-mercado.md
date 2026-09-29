# Skill: Pesquisa de Mercado — Metodologia Multi-Fonte do Arsenal

```yaml
skill:
  id: pesquisa-mercado
  version: "4.1.0"
  updated: "2026-09-02"
  category: inteligencia-de-mercado
  agents: ["researcher", "avatar-strategist", "offer-architect", "traffic-strategist"]
  description: "Metodologia de pesquisa multi-fonte para funis — checklist de investigação, fontes por bloco, coleta de linguagem literal do público e mapeamento de gaps"
```

---

## 1. Princípio Central

Copy que converte é **pesquisa organizada**. A diferença entre uma página que vende e uma que não vende raramente está na criatividade do redator — está na quantidade e na qualidade do material bruto coletado antes.

Regra do Arsenal: **80% do tempo em pesquisa, 20% em escrita.**

---

## 2. Os Quatro Blocos de Investigação

### Bloco 1 — Investigue o Produto

| Pergunta | Por que importa |
|---|---|
| Como o produto foi criado? Para saciar qual necessidade? | Revela a história de origem, matéria-prima de lead |
| Qual é a USP (Unique Selling Proposition)? | Define o que só ele entrega |
| Qual é o Mecanismo Único? | O "como" que sustenta a promessa em mercado sofisticado |
| Master list de features → benefícios | Cada feature vira benefício funcional, dimensional e emocional |
| Existe sazonalidade nas vendas? | Define calendário de campanha e ângulos por período |
| O que já foi vendido e não funcionou? | Evita repetir promessa queimada |

**Tabela de conversão feature → benefício**

| Feature | Por que existe | Benefício funcional | Benefício dimensional | Benefício emocional |
|---|---|---|---|---|
| [o que é] | [a proposta] | [o que ele faz] | [o que isso muda na vida] | [o que ele sente] |

### Bloco 2 — Investigue o Mercado

- Tamanho, crescimento e concentração (com fonte e ano)
- *Heavy users*: os 20% que geram 80% da receita
- Nível de sofisticação (Schwartz 1 a 5) — quantas promessas o mercado já ouviu
- Canais dominantes de aquisição no nicho
- Regulação, sazonalidade e barreiras de entrada

### Bloco 3 — Investigue o Avatar

- Dores literais, nas palavras exatas do público
- Desejo declarado x desejo real x desejo não admitido
- O que já tentaram e falhou (fonte de credibilidade para o mecanismo)
- Medos de compra e crenças limitantes
- Vocabulário e gírias do nicho

### Bloco 4 — Investigue os Concorrentes

| Player | Promessa | Mecanismo | Preço | Garantia | Prova social | Gap que deixa |
|---|---|---|---|---|---|---|

O entregável mais valioso deste bloco é a **coluna de gaps** — o que ninguém entrega. É de lá que sai o posicionamento.

---

## 3. Fontes por Tipo de Informação

```yaml
fontes:
  numeros_de_mercado:
    - "Associações setoriais, IBGE, Sebrae, relatórios de consultorias"
    - "Publicações especializadas dos últimos 24 meses"
  concorrentes:
    - "Sites e páginas de venda (estrutura completa, do topo ao rodapé)"
    - "Instagram, YouTube, TikTok e LinkedIn (formato, frequência, engajamento)"
    - "Biblioteca de Anúncios do Meta — anúncios ativos e tempo de veiculação"
    - "Transparência de anúncios do Google"
  linguagem_do_publico:
    - "Comentários em vídeos e posts dos concorrentes"
    - "Reviews de livros do tema na Amazon (3 e 4 estrelas são as mais ricas)"
    - "Reddit, Quora, fóruns de nicho, grupos de Facebook"
    - "Reclame Aqui — objeções e frustrações reais"
    - "Perguntas relacionadas do Google e sugestões de autocomplete"
  precos_e_ofertas:
    - "Checkouts, tabelas de planos, páginas de upsell"
    - "Lançamentos recentes do nicho e suas escadas"
```

**Regra de cruzamento**: nenhuma conclusão sai de uma única fonte. Mínimo de 4 tipos de fonte por dossiê.

---

## 4. Coleta de Linguagem Literal

O material mais valioso da pesquisa são as **frases exatas** do público.

**Como coletar:**
1. Abra os 5 maiores conteúdos do nicho (vídeo, post ou artigo)
2. Leia os comentários ordenados por mais relevantes e por mais recentes
3. Copie **literalmente** as falas que expressem dor, frustração, desejo ou objeção
4. Preserve erro de digitação, gíria e pontuação original
5. Agrupe por tema e conte a frequência

**Formato de registro:**

```markdown
### Dor: [nome da dor]
Frequência observada: [n] menções em [m] fontes

> "[citação literal]" — [fonte, data]
> "[citação literal]" — [fonte, data]
```

Frase higienizada perde poder. `"tô cansada de começar e largar tudo pela metade"` vale mais que "dificuldade de manter consistência".

---

## 5. Mapeamento de Gaps

Um gap é uma necessidade real que nenhum player atende. Para cada gap identificado, registrar:

| Gap | Evidência (fonte) | Por que ninguém atende | Como explorar |
|---|---|---|---|

Tipos comuns de gap:
- **Gap de público** — segmento ignorado pelos grandes players
- **Gap regional** — nenhum player local em mercado com preferência por proximidade
- **Gap de formato** — todos entregam curso, ninguém entrega acompanhamento
- **Gap de linguagem** — todos falam com iniciante, ninguém fala com quem já tentou
- **Gap de sistema** — peças soltas no mercado, ninguém entrega o processo completo

---

## 6. Formato do Dossiê Final

```markdown
# Dossiê de Pesquisa — [Projeto]
Coletado em: [data] · Fontes consultadas: [n] · Responsável: @researcher

## 1. Panorama do Mercado
## 2. Mapa de Concorrentes
## 3. Linguagem Real do Público (mínimo 10 citações literais)
## 4. Anúncios em Veiculação
## 5. Gaps e Oportunidades
## 6. Recomendações para a Fase Seguinte
## 7. Fontes
```

---

## 7. Anti-Patterns

1. Pesquisa que só confirma a hipótese inicial do cliente
2. Números redondos sem fonte ("o mercado movimenta bilhões")
3. Citações reescritas em linguagem de marketing
4. Concorrentes listados sem preço, mecanismo ou gap
5. Dossiê sem data de coleta
6. Conclusão tirada de uma única fonte

---

## 8. Checklist

- [ ] Quatro blocos investigados (produto, mercado, avatar, concorrentes)
- [ ] Mínimo 4 tipos de fonte cruzados
- [ ] Mínimo 10 citações literais do público
- [ ] Tabela de concorrentes completa
- [ ] Anúncios ativos verificados em biblioteca pública
- [ ] 3 a 5 gaps com evidência
- [ ] Data de coleta e lista de fontes registradas
