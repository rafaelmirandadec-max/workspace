# Skill: Tráfego e Anúncios — Meta Ads e Google Ads

```yaml
skill:
  id: trafego-e-anuncios
  version: "4.1.0"
  updated: "2026-09-02"
  category: midia-paga
  agents: ["traffic-strategist", "metrics-analyst", "copywriter"]
  description: "Estrutura de conta, públicos, matriz de ângulos, briefing de criativo, fases de verba, leitura de métricas e regras de corte e escala"
```

---

## 1. Princípios

1. **O criativo é ~70% do resultado.** Segmentação não salva anúncio ruim.
2. **Ângulo, não variação.** Cinco ângulos distintos valem mais que vinte versões da mesma frase.
3. **Meta antes de verba.** Sem CPL e CPA-alvo, não existe otimização — existe opinião.
4. **Deixe aprender.** Mexer todo dia impede a saída da fase de aprendizado.
5. **Escalar é multiplicar o que provou**, não apostar mais no que talvez funcione.

---

## 2. Estrutura de Conta — Meta Ads

```
CAMPANHA (objetivo: conversão ou cadastro)
├── CONJUNTO — Frio · amplo / advantage+
│   ├── Anúncio A — ângulo 1
│   ├── Anúncio B — ângulo 2
│   └── Anúncio C — ângulo 3
├── CONJUNTO — Frio · interesses + lookalike 1%
├── CONJUNTO — Morno · engajamento 30d, vídeo 50%
└── CONJUNTO — Quente · lista, visitantes 14d, checkout abandonado
```

Regras:
- 3 a 5 anúncios por conjunto — nunca 15
- Público estimado acima de 500 mil no frio
- Sem sobreposição de públicos entre conjuntos da mesma campanha
- Orçamento diário por conjunto ≥ 3x o CPA-alvo
- Um teste por vez: mudar criativo **ou** público, nunca os dois

---

## 3. Matriz de Ângulos

| # | Ângulo | Gancho | Temperatura | Formato |
|---|---|---|---|---|
| 1 | Dor principal | Sintoma literal do avatar | Frio | Vídeo 30s |
| 2 | Inimigo comum | "O problema não é você" | Frio | Estático |
| 3 | Prova e caso | Número específico | Frio/morno | UGC |
| 4 | Mecanismo único | "O jeito que funciona" | Morno | Vídeo 60s |
| 5 | Objeção principal | "Mesmo que você já tenha tentado" | Morno/quente | Carrossel |
| 6 | Contraste | "Todo mundo faz X; faça Y" | Frio | Estático |
| 7 | Bastidor | "O que ninguém conta sobre" | Morno | Vídeo |

Cada ângulo nasce de uma dor ou objeção real da pesquisa — nunca de improviso.

---

## 4. Briefing de Criativo

```markdown
Ângulo: [qual da matriz]
Temperatura: [frio | morno | quente]
Formato: [vídeo 30s | vídeo 60s | estático | carrossel | UGC]
Gancho (3 primeiros segundos): [texto exato, palavra por palavra]
Desenvolvimento: [o que mostrar, em que ordem]
Prova: [número, caso ou demonstração]
CTA: [ação única]
Copy do anúncio: [texto completo do post]
Regras visuais: [paleta e tipografia do brandbook]
Legenda queimada: [sim — 85% assiste sem som]
```

**Regras de gancho:** os 3 primeiros segundos decidem tudo. Começar com o sintoma, com um número inesperado ou com uma afirmação que contraria o senso comum. Nunca com logo, vinheta ou "fala pessoal, tudo bem?".

---

## 5. Fases de Verba

| Fase | Duração | % da verba | Objetivo | Regra de decisão |
|---|---|---|---|---|
| Validação | 5 a 7 dias | 20% | Achar 1 ou 2 ângulos vencedores | Cortar o que estiver 50% acima da meta |
| Otimização | 7 a 14 dias | 40% | Reduzir custo por resultado | Duplicar vencedores, testar variações |
| Escala | contínuo | 40% | Volume mantendo CPA | Subir 20% a cada 48h, ou duplicar conjunto |

Escalar dobrando a verba de uma vez costuma reiniciar o aprendizado e destruir o custo.

---

## 6. Leitura de Métricas — Meta

| Métrica | Sinal | Ação |
|---|---|---|
| CTR (link) < 1% | Gancho ou criativo fraco | Trocar o gancho, não o público |
| CPM muito acima da média do nicho | Público disputado ou baixa relevância | Ampliar público, melhorar criativo |
| CTR bom + conversão baixa | Quebra entre anúncio e página | Alinhar promessa com o copywriter |
| Frequência > 2,5 no frio | Saturação criativa | Novo criativo, não mais verba |
| CPL bom + venda baixa | Lead desqualificado | Rever isca e promessa de captura |
| Custo sobe depois de dias estáveis | Fadiga ou concorrência sazonal | Renovar criativo, checar leilão |

Referências de mercado (Brasil, ponto de partida — não promessa):
CTR de link 1% a 2,5% · CPM R$ 15 a R$ 60 · opt-in 25% a 45% · conversão de página fria 1% a 5%.

---

## 7. Google Ads — Quando e Como

**Quando usar:** existe demanda ativa — gente buscando pelo problema ou pela solução.

- Estrutura: campanha por intenção → grupo por tema → 3 anúncios responsivos por grupo
- Palavras-chave por intenção: informacional, comparativa e transacional em campanhas separadas
- Lista de palavras negativas desde o dia 1 (grátis, download, torrent, salário, vagas, concurso)
- Extensões preenchidas: sitelinks, chamada, local, snippets
- Página de destino precisa repetir a palavra-chave da busca — coerência derruba CPC

Meta Ads gera demanda; Google Ads colhe demanda existente. Nichos com busca clara costumam ter CPL menor no Google e volume maior no Meta.

---

## 8. Conformidade

- Não prometer resultado garantido nem renda específica sem prova e ressalva
- Não usar antes/depois em nichos restritos (saúde, emagrecimento, finanças) fora das regras da plataforma
- Não usar segmentação que implique atributo sensível do usuário
- Contador de tempo e escassez precisam corresponder à realidade
- Toda prova social usada em anúncio precisa de autorização de quem aparece

Reprovação recorrente por política costuma custar mais que o ângulo agressivo entrega.

---

## 9. Anti-Patterns

1. Culpar a segmentação por criativo ruim
2. Vinte anúncios que são a mesma ideia em cores diferentes
3. Verba pulverizada em conjuntos que nunca saem do aprendizado
4. Escalar campanha com dois dias bons
5. Ignorar frequência e insistir no criativo saturado
6. Mudar criativo e público na mesma alteração

---

## 10. Checklist

- [ ] CPL e CPA-alvo definidos antes de subir
- [ ] Estrutura de conta desenhada sem sobreposição de públicos
- [ ] Mínimo 5 ângulos distintos na matriz
- [ ] Briefing de criativo com gancho escrito palavra por palavra
- [ ] Verba dividida em validação, otimização e escala
- [ ] Regras de corte e de escala declaradas antes do primeiro real investido
- [ ] Conformidade com as políticas da plataforma verificada
