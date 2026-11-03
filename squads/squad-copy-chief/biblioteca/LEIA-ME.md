# Biblioteca de referências (swipe geral) do Squad Copy Chief

Peças vencedoras de outros anunciantes, guardadas **por componente** para estudo e para modelar estruturas. Não depende de cliente: serve a todas as promoções. O método completo (como coletar, como escolher o modelo, como modelar sem copiar, revisão comparativa) está em `squads/squad-copy-chief/skills/cc-swipe-file/SKILL.md`.

O swipe de cada projeto fica na própria promoção, em `promocoes/<cliente>/<promocao>/01-pesquisa/swipe/`. Ao fim da promoção, o Copy Chief decide o que sobe de lá para cá. Só entra aqui peça com sinal de vencedor (anúncio no ar há muito tempo, várias variações, página estável há meses, resultado divulgado por fonte confiável) ou de redator com histórico.

## Pastas

| Pasta | O que guarda |
|---|---|
| `headlines/` | headline, pré-headline, deck, assunto de e-mail, gancho de VSL e de anúncio |
| `leads/` | aberturas de página, VSL, e-mail e anúncio |
| `corpo/` | argumentos, transições, intertítulos, histórias, sequências de prova |
| `ofertas/` | pilha de valor, preço e justificativa de preço, bônus, texto de checkout |
| `garantias/` | textos de garantia |
| `fechamentos/` | fechamento, chamada para ação, P.S., última tela |
| `bullets/` | bullets e fascinações |
| `boxes/` | blocos laterais e de destaque |
| `emails/` | e-mails avulsos, sequências, assuntos |
| `big-ideas/` | ideias centrais, **só para estudo; nunca para modelar** |
| `pecas-inteiras/` | a peça completa de onde saíram os componentes, para engenharia reversa |

As pastas vazias têm um `.gitkeep` só para existirem no repositório.

## Um arquivo por componente

Nome: `<AAAA-MM>-<nicho>-<anunciante>-<componente>-<palavra-chave>.md`
Exemplo: `2026-10-financas-pessoais-anunciantex-garantia-dupla.md`

O ID do componente é o nome do arquivo sem `.md`. Quem modela um componente cita esse ID na entrega ("Origem das estruturas").

Todo arquivo começa com o cartão de catalogação:

```markdown
---
id: <nome do arquivo sem .md>
componente: <headline | lead | corpo | oferta | garantia | fechamento | bullets | box | email | big-idea>
formato: <página de vendas | VSL | e-mail | anúncio | página de captura | checkout | outro>
nicho: <ex.: finanças pessoais>
produto_e_oferta: <o que vende, ticket se visível>
anunciante: <empresa ou especialista>
redator: <se conhecido, com fonte; senão "desconhecido">
origem: <URL ou "e-mail recebido em AAAA-MM-DD">
coletado_em: <AAAA-MM-DD>
peca_inteira: <id em pecas-inteiras/, se houver>
sinal_de_vencedor: <ex.: "ativo desde 2026-06-12 na Biblioteca do Meta, 5 variações"> — FATO | PISTA | SUPOSIÇÃO
publico_e_consciencia: <quem lê e nível de consciência presumido>
tema_enredo: <uma linha>
beneficios: <principais>
estrutura: <o padrão do argumento, em uma linha>
tom: <ex.: urgente e indignado; calmo e professoral>
regulado: <sim/não; alertas de conformidade>
usado_em: <promoções em que serviu de modelo>
---

## Trecho
<o componente transcrito, ou referência ao print salvo ao lado>

## Por que funciona
<2 a 5 linhas>

## Como modelar
<o que dá para levar e o que não levar>
```

Prints e PDFs podem ficar ao lado do `.md`, com o mesmo nome base.

## Regras

- Estudo interno. Nada daqui é publicado nem entregue ao cliente como texto.
- Nunca copiar literalmente: nenhuma sequência de 8 ou mais palavras idênticas ao modelo na peça final.
- Big Idea, tema central e headline principal nunca saem daqui.
- Sem dado pessoal: tire nomes, e-mails e telefones de destinatários e comentaristas dos prints.
- Tempo no ar é PISTA de vencedor, não FATO. E não é licença: em saúde e finanças, muita peça que roda é irregular. Antes de modelar em nicho regulado, leia `squads/squad-copy-chief/skills/cc-conformidade/SKILL.md`.
