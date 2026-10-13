---
description: "Briefing do projeto — pasta do projeto, blocos do briefing, marcas de fato e suposição, ciclo de versões"
---

# Skill: Briefing do Arsenal — Documento-Base do Projeto de Funil

```yaml
skill:
  id: briefing-arsenal
  version: "5.0.0"
  updated: "2026-10-13"
  category: planejamento-de-projeto
  agents: ["researcher", "todos os agentes leem"]
```

---

## 1. Para Que Serve

O briefing é a **fonte única de verdade** do projeto. Todo agente do Arsenal consulta o briefing antes de produzir qualquer coisa. Se a informação não está no briefing, ela ainda não foi decidida.

Regra: o briefing é preenchido **a partir da pesquisa e do cliente**, e cada campo leva sua marca: **FATO** (com fonte), **PISTA**, **SUPOSIÇÃO** ou `[A PREENCHER]`. Suposição pode entrar, desde que marcada.

O briefing mora em `00-briefing.md`, na pasta do projeto (`projetos/<cliente>/` ou a pasta que o projeto já tem). A estrutura da pasta está em `squads/squad-arsenal/PROTOCOLO.md`.

---

## 2. Estrutura Completa

### Bloco 1 — Identificação
```markdown
Projeto:
Cliente / especialista:
Nicho:
Data de abertura:
Responsável:
Status: [pesquisa | oferta | funil | copy | conteúdo | mídia | otimização]
Canal: [orgânico | pago | os dois]
Nicho regulado: [não | saúde | finanças | jurídico] → se sim, ver Bloco 10
```

### Bloco 2 — Produto e Promessa
```markdown
O que é o produto/serviço:
Como é entregue (formato, duração, suporte):
Promessa principal: [resultado] em [prazo], mesmo que [objeção], sem [sacrifício]
Mecanismo único (nome + explicação):
Prova disponível (casos, números, autoridade):
O que o produto NÃO faz / não promete:
```

### Bloco 3 — Avatar
```markdown
Nome do avatar:
Retrato (idade, ocupação, renda, rotina):
Dor priorizada:
Desejo real:
O que já tentou e falhou:
Objeções principais (top 5):
Estágio de consciência: [1-5]
Sofisticação do mercado: [1-5]
Conversa mental (na voz dele):
```

### Bloco 4 — Mercado e Concorrência
```markdown
Tamanho e tendência (com fonte):
Top 5 concorrentes e suas promessas:
Faixa de preço praticada:
Gaps identificados:
Posicionamento escolhido e por quê:
```

### Bloco 5 — Oferta
```markdown
Stack de valor (item → valor ancorado):
Bônus (cada um → objeção que mata):
Garantia (tipo e prazo):
Preço e condição de pagamento:
Razão do preço:
Razão da urgência:
```

### Bloco 6 — Funil
```markdown
Tipo de funil escolhido:
Escada de valor (isca → front → mid → back → recorrência):
Ativos necessários (páginas, e-mails, vídeos, criativos):
Ferramentas (plataforma de página, checkout, e-mail, CRM):
Responsável por cada ativo:
```

### Bloco 7 — Marca e Voz
```markdown
Tom de voz (3 adjetivos + antônimo):
Palavras da marca:
Palavras proibidas:
Perfil de Comunicação: [link ou anexo]
Regras visuais (paleta, tipografia):
```

### Bloco 8 — Metas e Métricas
```markdown
Meta de faturamento:
Ticket médio esperado:
Verba de mídia:
CPL máximo aceitável:
CPA máximo aceitável:
Taxa de conversão-alvo por etapa:
Prazo de lançamento:
```

### Bloco 9 — Restrições
```markdown
O que não pode ser dito (compliance, promessas proibidas):
Prazos imutáveis:
Limitações de operação (time, ferramenta, atendimento):
Histórico do que já foi tentado e falhou:
```

### Bloco 10 — Conformidade (nicho regulado)
```markdown
Órgão ou conselho que regula: [CFM, CFO, CVM, OAB...]
Responsável técnico ou advogado que aprova:
O que não pode ser dito (garantias, nomes de remédio, antes/depois...):
Obrigatórios em toda peça (nome, registro, avisos):
Pendências do cliente que travam peças:
```
Ver a skill `conformidade`.

---

## 3. Regras de Preenchimento

1. **Nada de "a definir" permanente** — campo vazio é `[A PREENCHER]`, com responsável
2. **Toda afirmação de mercado tem fonte** — sem fonte, marcar como SUPOSIÇÃO ou PISTA
3. **A promessa cabe em uma frase** — se não cabe, ainda não está clara
4. **Objeções vêm da pesquisa**, não da imaginação
5. **Metas antes da mídia** — não se compra tráfego sem CPL e CPA-alvo definidos

---

## 4. Preenchimento Automático a Partir da Pesquisa

Com o dossiê do `@researcher` pronto, o briefing pode ser preenchido automaticamente:

| Bloco do briefing | Origem no dossiê |
|---|---|
| Mercado e concorrência | Seções 1, 2 e 5 do dossiê |
| Avatar | Seção 3 (linguagem literal) + entrega do @avatar-strategist |
| Produto e promessa | Bloco 1 do checklist de pesquisa |
| Oferta | Gaps + faixa de preço do mercado |
| Funil | Ticket + temperatura do público |

Campos que **não** podem ser preenchidos por pesquisa (precisam do cliente): metas, verba, prazos, restrições de compliance e capacidade de operação.

---

## 5. Ciclo de Vida do Briefing

```
v1 — Depois da pesquisa (blocos 1 a 4)
v2 — Depois da oferta definida (bloco 5)
v3 — Depois da arquitetura do funil (blocos 6 e 7)
v4 — Antes de subir mídia (bloco 8 e 9 fechados)
v5+ — Atualizado a cada ciclo de otimização com os números reais
```

O briefing é documento vivo. Cada versão registra data e o que mudou.

---

## 6. Anti-Patterns

1. Briefing preenchido pelo cliente sozinho, sem pesquisa
2. Promessa diferente no briefing e na página de vendas
3. Metas ausentes e mídia já rodando
4. Campo "avatar" com apenas faixa etária e gênero
5. Briefing congelado na v1 enquanto o projeto avançou três fases

---

## 7. Checklist

- [ ] Blocos preenchidos ou com pendência atribuída (Bloco 10 só em nicho regulado)
- [ ] Cada campo com sua marca (FATO, PISTA, SUPOSIÇÃO, [A PREENCHER])
- [ ] Promessa em uma frase, no formato do Arsenal
- [ ] Objeções vindas de citações reais
- [ ] Estágio de consciência e sofisticação definidos
- [ ] Metas numéricas antes de qualquer investimento em mídia
- [ ] Versão e data registradas
