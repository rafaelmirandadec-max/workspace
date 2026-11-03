# Squad Copy Chief

Time de agentes de copywriting de resposta direta montado a partir do **Quick-Start Copywriting System**, de Clayton Makepeace (AWAI, Volumes 1 e 2). Um **Copy Chief** coordena dez especialistas; cada um aplica um grupo de capítulos do livro e entrega um componente da promoção.

É independente do Arsenal de Funis: pastas, agentes, skills e instalador próprios.

## Como usar

Diga **"ative o Copy Chief"** (ou use o comando `/copy-chief`). A conversa principal vira o Copy Chief: faz a triagem, chama os agentes na ordem do método, lê cada entrega com olho de copy chief, monta e revisa a peça.

Instalar ou atualizar depois de editar algo aqui:

```bash
bash squads/squad-copy-chief/instalar.sh
```

## Como o livro virou o squad

O livro segue a ordem em que uma promoção é construída. O squad segue a mesma ordem: cada fase é um agente, e cada técnica é uma skill que o agente lê.

| Fase | Agente | Capítulos | Skills |
|---|---|---|---|
| Coordenação | Copy Chief (conversa principal) | todos | `copy-chief` |
| Pesquisa | `cc-pesquisador` | 2 | `cc-pesquisa`, `cc-swipe-file` |
| Oferta e garantia | `cc-oferta` | 3, 18, 22 | `cc-oferta-e-garantia`, `cc-infoproduto` |
| Benefícios e provas | `cc-beneficios-e-provas` | 4, 5 | `cc-beneficios`, `cc-prova` |
| Plataforma | `cc-estrategista` | 6, 7, 8, 11, 13, 21 | `cc-big-idea-e-tema`, `cc-consciencia-e-sofisticacao`, `cc-argumento-abc`, `cc-vinculo-e-voz` |
| Abertura | `cc-abertura` | 9, 10, 12 | `cc-headlines`, `cc-leads` |
| Bullets | `cc-bullets` | 16, 22 | `cc-bullets`, `cc-infoproduto` |
| Fechamento | `cc-fechamento` | 17, 18 | `cc-fechamento` |
| Corpo e montagem | `cc-redator-corpo` | 14, 15, epílogo | `cc-corpo-e-momentum` |
| Peças de apoio e e-mails | `cc-pecas-de-apoio` | 19 | `cc-pecas-de-apoio` |
| Revisão | `cc-revisor-chefe` | todos | checklists de todas + `cc-conformidade` |

Base comum: `cc-fundamentos` (cap. 1 e glossário). Adaptação brasileira: `cc-conformidade` (não vem do livro).

Por que estes cortes:
- **Big idea, tema, consciência, argumento e voz ficam juntos** no estrategista porque o livro insiste que tudo isso se decide antes da headline e de forma integrada; separar em vários agentes geraria plataformas que não conversam.
- **Headline e lead ficam juntos** porque o lead nasce da headline e os dois são testados juntos.
- **Bullets têm agente próprio** porque o método pede volume (cerca de 7 vezes o que se usa) e uma técnica inteira (21 fórmulas).
- **Oferta e garantia ficam juntas** porque a garantia é parte da oferta; o texto final da garantia é do fechamento.
- **Criatividade (cap. 13) e swipe file (cap. 20)** não viraram agentes: são métodos de trabalho que entram nas skills de plataforma e de pesquisa.
- **O revisor-chefe é separado de quem escreve**, para a revisão ser independente.

## Pasta de cada promoção

```
promocoes/<cliente>/<promocao>/
  00-briefing.md · 01-pesquisa.md · 02-oferta.md · 03-beneficios-e-provas.md · 04-plataforma.md
  05-abertura.md · 06-bullets.md · 07-fechamento.md · 08-apoio/ · 09-peca-final.md · revisoes/
```

Detalhes no `PROTOCOLO.md`.

## Arquivos

- `PROTOCOLO.md` — regras comuns a todos os agentes.
- `agents/` — os dez agentes.
- `skills/` — o método, uma skill por técnica.
- `biblioteca/` — swipe file geral, organizado por componente.
- `ferramentas/ler-pagina.mjs` — leitor de páginas pelo terminal.
- `instalar.sh` — copia agentes e skills para `.claude/`.
