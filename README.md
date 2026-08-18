# workspace

Workspace jurídico com o **Squad Jhuridico** ativo.

## ⚖️ Squad Jhuridico v1.2

7 agentes e 6 skills para advocacia civil, imobiliária e empresarial.
Fonte canônica em `squads/squad-jhuridico/`, instalado em `.claude/`.

### Agentes

| Agente | Tier | Quando usar |
|---|---|---|
| `juridico-chief` | 0 | Ponto de entrada. Triagem e roteamento de qualquer demanda |
| `pesquisador-juridico` | 1 | Jurisprudência, súmulas, legislação e doutrina (STJ, STF, TJ) |
| `redator-peticoes` | 2 | Petição inicial, contestação, tutelas e recursos |
| `analista-contratos` | 2 | Minutar e revisar contratos civis, imobiliários e empresariais |
| `redator-pareceres` | 2 | Pareceres, consultas, respostas ao cliente e due diligence |
| `analista-processual` | 2 | Análise de autos, riscos, prazos e estratégia processual |
| `analista-jurimetrico` | 2 | Probabilidade de êxito, tempo de tramitação, DataJud/CNJ |

### Skills

`direito-civil-brasileiro` · `direito-imobiliario` · `codigo-processo-civil` ·
`pesquisa-jurisprudencial` · `formatacao-peticoes` · `jurimetria`

Todas atualizadas com a legislação de 2020–2026.

### Como usar

- Descreva a demanda em linguagem natural — o roteamento vai para o agente certo.
- Ou chame direto: `@redator-peticoes redija a inicial de...`
- Ou carregue uma skill: `/direito-imobiliario`

### Reinstalar / atualizar

Edite os arquivos em `squads/squad-jhuridico/` e rode:

```bash
bash squads/squad-jhuridico/install.sh
```

O script copia agentes e skills para `.claude/`, valida o frontmatter YAML de cada
arquivo (sem ele o Claude Code não registra o agente) e é idempotente.
Reinicie a sessão depois para recarregar o registro.
