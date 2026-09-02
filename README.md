# Squad Jhuridico ⚖️

Escritório jurídico virtual em Claude Code — **7 agentes** e **6 skills** para advocacia
civil, imobiliária e empresarial no direito brasileiro.

O pacote-fonte fica em `squads/squad-jhuridico/`; a instalação ativa é publicada em
`.claude/agents/` e `.claude/skills/`, que é onde o Claude Code lê.

## Agentes

| Agente | Tier | Quando usar |
|---|---|---|
| `juridico-chief` | 0 | Ponto de entrada. Triagem da demanda e roteamento para o especialista |
| `pesquisador-juridico` | 1 | Jurisprudência, súmulas, legislação e doutrina (STJ, STF, TJ) |
| `redator-peticoes` | 2 | Inicial, contestação, réplica, apelação, agravo, embargos, REsp, tutelas |
| `analista-contratos` | 2 | Minutar e revisar contratos civis, imobiliários e empresariais |
| `redator-pareceres` | 2 | Pareceres, notas jurídicas, respostas ao cliente, due diligence |
| `analista-processual` | 2 | Análise de autos, mapa de riscos, prazos e estratégia processual |
| `analista-jurimetrico` | 2 | Probabilidade de êxito, tempo de tramitação, custo-benefício (DataJud/CNJ) |

## Skills

| Skill | Conteúdo |
|---|---|
| `direito-civil-brasileiro` | CC atualizado 2020–2026, Lei 14.905/2024, PL 4/2025 |
| `codigo-processo-civil` | CPC/2015 atualizado 2020–2026, tutelas, recursos, honorários, precedentes |
| `direito-imobiliario` | Locação, incorporação, alienação fiduciária, distrato, Lei 14.711/2023 |
| `formatacao-peticoes` | Endereçamento, qualificação e estrutura de peças (art. 319 CPC) |
| `pesquisa-jurisprudencial` | Metodologia e fontes de busca em STF, STJ, TJ e TRT |
| `jurimetria` | DataJud/CNJ, fórmulas de probabilidade e custo-benefício do litígio |

## Como usar

O `juridico-chief` é o ponto de entrada: descreva a demanda em linguagem natural e ele
faz a triagem e o roteamento. Também é possível acionar um especialista diretamente
pelo nome, ou carregar uma skill com `/nome-da-skill`.

```
"Preciso de uma inicial de despejo por falta de pagamento em SP"
  → juridico-chief → pesquisador-juridico → analista-processual → redator-peticoes
```

### Pipelines típicos

- **Pesquisa e petição:** `pesquisador-juridico` → `analista-processual` → `redator-peticoes`
- **Contrato:** `pesquisador-juridico` → `analista-contratos` → `redator-pareceres`
- **Consulta do cliente:** `pesquisador-juridico` → `analista-processual` → `redator-pareceres`

## Manutenção

`squads/squad-jhuridico/` é a fonte de verdade. Depois de editar lá, republique:

```bash
cp squads/squad-jhuridico/agents/*.md .claude/agents/
for f in squads/squad-jhuridico/skills/*/SKILL.md; do
  n=$(basename "$(dirname "$f")"); mkdir -p ".claude/skills/$n"; cp "$f" ".claude/skills/$n/SKILL.md"
done
```

Todo agente e toda skill precisam de frontmatter YAML (`name` + `description`) — sem ele
o Claude Code não registra o arquivo.
