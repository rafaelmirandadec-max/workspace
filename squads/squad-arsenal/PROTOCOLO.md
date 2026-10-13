# Protocolo do Arsenal de Funis

Regras que valem para todos os agentes. Cada agente lê este arquivo antes de começar.
As regras específicas de cada função ficam no próprio agente; o conhecimento de método fica nas skills.

---

## 1. A pasta do projeto

Todo projeto mora numa pasta própria. Se o projeto já tem pasta (por exemplo `androclinic/`), use a que existe. Se não tem, crie `projetos/<cliente>/`.

```
projetos/<cliente>/
├── 00-briefing.md          ← fonte única de verdade, todo agente lê primeiro
├── 01-pesquisa/            ← dossiê e frentes de pesquisa (@researcher)
├── 02-avatar.md            ← perfis, consciência, objeções (@avatar-strategist)
├── 03-oferta.md            ← promessa, mecanismo, stack, garantia (@offer-architect)
├── 04-funil.md             ← escada, tipo de funil, mapa de ativos (@funnel-architect)
├── 05-voz.md               ← posicionamento e Perfil de Comunicação (@brand-architect)
├── 06-copy/                ← uma peça por arquivo (@copywriter)
├── 07-conteudo/            ← linha editorial e pautas (@content-strategist)
├── 08-midia.md             ← plano de mídia e briefings de criativo (@traffic-strategist)
├── 09-metricas.md          ← painel, gargalo, projeção (@metrics-analyst)
└── revisoes/               ← pareceres do @revisor, um por peça revisada
```

**Antes de trabalhar:** leia `00-briefing.md` e os arquivos das fases que alimentam a sua (use Glob para ver o que existe).
**Depois de trabalhar:** salve a entrega no arquivo da sua fase e atualize o briefing só nos campos que a sua fase decidiu, com data.

## 2. Trabalhe com o que existe

Nenhuma fase bloqueia outra. Se falta informação, **não pare e não invente**: produza a melhor versão possível com o que existe e marque o que falta.

| Marca | Quando usar |
|---|---|
| **FATO** | Tem fonte verificável (link, documento, número medido). Cite a fonte. |
| **PISTA** | É o que uma empresa diz de si mesma, ou resumo de busca sem conferência. |
| **SUPOSIÇÃO** | É leitura sua. Diga em que se apoia. |
| `[A PREENCHER]` | Só o cliente ou o Rafael respondem. Não chute. |
| `[medir]` | Número que não existe ainda e precisa ser medido. |

Ao final de toda entrega, liste as **pendências** (o que está `[A PREENCHER]` ou `[medir]`) e diga **o que a falta delas muda** na entrega.

Bloqueio de verdade só existe em três casos:
1. Publicar ou recomendar publicar algo com prova, depoimento, número ou caso inventado.
2. Peça de nicho regulado (saúde, finanças, jurídico) que não passou pela skill `conformidade`.
3. Promessa que a oferta ou a operação real não sustenta.

## 3. Quantidade é teto, não cota

Números como "10 citações", "20 headlines" ou "5 ângulos" são referência de quanto costuma ser útil, não meta a cumprir. Se a fonte só sustenta 4 citações, entregue 4 e diga que só achou 4. Nunca complete lista com material inventado ou parafraseado.

## 4. Números e heurísticas

- Número de mercado, de concorrente ou de resultado: só com fonte e data.
- Benchmarks e regras práticas das skills são **heurísticas do método**, não dado. Ao usá-los, escreva "referência do método" ou "benchmark, não medido".
- Projeção sem histórico é sempre marcada como não validada.

## 5. Nicho regulado

Se o projeto é de saúde (médico, clínica, odontologia, nutrição, psicologia, estética, suplemento, farmácia), finanças ou jurídico, leia `squads/squad-arsenal/skills/conformidade/SKILL.md` antes de escrever oferta, copy, conteúdo ou anúncio. As regras de conformidade prevalecem sobre qualquer regra de oferta ou copy do método.

## 6. Como escrever a entrega

- Português brasileiro com acentuação, crase e pontuação corretas.
- Comece pela decisão ou pela conclusão; o raciocínio vem depois.
- Prefira texto corrido e cartões (blocos com os mesmos campos) a tabelas largas. Use tabela só para números e comparações curtas.
- Sem frases de abertura padronizadas ("Os dados mostram que…", "Vamos lá!"), sem simetria artificial, sem adjetivos empilhados.
- Termo em inglês só quando não houver equivalente usado no mercado brasileiro.

## 7. Retorno para a conversa principal

Termine a resposta com um resumo curto para quem coordenou o trabalho:
1. O que foi entregue e em que arquivo.
2. As decisões principais.
3. As pendências e o que dependem delas.
4. A fase seguinte recomendada.

## 8. Onde está o método

As skills ficam em `squads/squad-arsenal/skills/<nome>/SKILL.md`. Leia só as que a sua tarefa pede; cada agente indica as suas.
