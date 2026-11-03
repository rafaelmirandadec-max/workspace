# Protocolo do Squad Copy Chief

Regras que valem para todos os agentes do Squad Copy Chief. Cada agente lê este arquivo antes de começar.
As regras de cada função ficam no próprio agente; o método fica nas skills.

O método vem do *Quick-Start Copywriting System*, de Clayton Makepeace (AWAI, 2 volumes, 23 capítulos). O livro foi escrito para mala direta e web americanas; o squad aplica o método ao mercado brasileiro e à internet de hoje (página de vendas, VSL, e-mail, anúncio, WhatsApp).

Este squad é **independente do Arsenal de Funis**. Não leia nem use arquivos de `squads/squad-arsenal/` nem de `projetos/`, a não ser que o pedido diga expressamente para usar um arquivo de lá como material de entrada.

---

## 1. A ideia central do método

Copy de resposta direta é **venda por escrito, medida pelo resultado**. Nada vale por ser bonito, criativo ou engraçado: vale se faz o leitor agir. Toda peça é uma hipótese a ser testada contra a que já roda (o "controle").

A ordem de trabalho do livro é a ordem do squad. Cada fase alimenta a seguinte:

1. **Pesquisa** — produto, prospect, mercado e concorrência. O que o leitor deseja, teme, acredita e já tentou.
2. **Oferta** — o que ele recebe, quanto paga, como recebe, que brindes e que garantia.
3. **Benefícios e provas** — cada característica levada até o benefício emocional; cada promessa com a sua prova.
4. **Plataforma** — Big Selling Idea, tema, nível de consciência e sofisticação, emoção dominante, porta-voz e inimigo, esqueleto do argumento (A-B-C).
5. **Abertura** — headline, pré-head, deck e lead.
6. **Bullets e fascinações.**
7. **Corpo** — argumento expandido, provado e com embalo do começo ao fim; montagem da peça inteira.
8. **Fechamento** — resumo da oferta, garantia, pedidos de ação, P.S.
9. **Peças de apoio** — boxes, e-mails, sequência de lançamento, páginas satélite, FAQ, pop-up.
10. **Revisão do Copy Chief.**

"Copy boa não se escreve, se monta" (Gene Schwartz, citado no livro). Cada agente produz um componente; a peça final é a montagem.

## 2. A pasta da promoção

Cada promoção (uma página, uma VSL, uma sequência, uma campanha) tem pasta própria:

```
promocoes/<cliente>/<promocao>/
├── 00-briefing.md              ← pedido, decisões, restrições; todo agente lê primeiro
├── 01-pesquisa.md              ← documento de pesquisa (@cc-pesquisador)
├── 01-pesquisa/                ← fontes, citações literais, swipe de concorrentes
├── 02-oferta.md                ← oferta e garantia (@cc-oferta)
├── 03-beneficios-e-provas.md   ← gráfico de benefícios, ranking, matriz de provas (@cc-beneficios-e-provas)
├── 04-plataforma.md            ← big idea, tema, consciência, emoção, voz, esqueleto A-B-C (@cc-estrategista)
├── 05-abertura.md              ← headlines, pré-heads, decks e leads (@cc-abertura)
├── 06-bullets.md               ← banco de bullets e fascinações (@cc-bullets)
├── 07-fechamento.md            ← fechamento, garantia em texto, P.S. (@cc-fechamento)
├── 08-apoio/                   ← e-mails, boxes, FAQ, páginas satélite (@cc-pecas-de-apoio)
├── 09-peca-final.md            ← a peça montada, inteira (@cc-redator-corpo)
└── revisoes/                   ← pareceres do @cc-revisor-chefe, um por versão
```

O `01-pesquisa.md` faz o papel do "documento de pesquisa em andamento" do livro: cresce a cada fase e, no fim, vira o rascunho da peça.

**Antes de trabalhar:** leia `00-briefing.md` e os arquivos das fases anteriores à sua (use Glob para ver o que existe).
**Depois de trabalhar:** salve no arquivo da sua fase. Não reescreva o arquivo de outra fase; se discordar dele, diga no seu retorno.

## 3. Trabalhe com o que existe

Nenhuma fase bloqueia a outra. Se falta informação, **não pare e não invente**: faça a melhor versão possível e marque.

- **FATO** — tem fonte verificável (documento do cliente, link, número medido). Cite a fonte.
- **PISTA** — o que a empresa diz de si, ou resumo de busca sem conferência.
- **SUPOSIÇÃO** — leitura sua. Diga em que se apoia.
- `[A PREENCHER]` — só o cliente ou o Rafael respondem.
- `[PROVA: …]` — marcador de prova que precisa existir antes de publicar (depoimento, estudo, número, foto).

No fim de toda entrega, liste as **pendências** e diga o que muda na peça se cada uma for respondida de outro jeito.

Bloqueio de verdade só existe em três casos:
1. Publicar ou recomendar publicar algo com depoimento, número, estudo, menção na mídia ou caso inventado.
2. Peça de nicho regulado que não passou pela skill `cc-conformidade`.
3. Promessa que a oferta ou a operação real não sustenta (prazo, escassez, garantia, resultado).

## 4. Quantidade é teto, não cota

O livro manda gerar muito para escolher pouco (headlines, bullets, temas). Gere em volume, mas **entregue só o que presta**, ranqueado e com o motivo. Nunca complete lista com material fraco para bater número.

## 5. Números e heurísticas

- Número de mercado, de concorrente ou de resultado: só com fonte e data.
- Os números do livro (taxas de resposta, aumentos de 30%, "7 vezes mais bullets") são **referências do método**, não dados. Ao usá-los, escreva "referência do método".
- Os exemplos do livro são de mercado americano dos anos 1990–2000. Use a estrutura, não a promessa.

### Nível de consciência: escreva sempre o nome

O livro (seguindo Schwartz) numera a consciência ao contrário do uso comum no Brasil: **1 = mais consciente** (conhece o produto, só falta a oferta) e **5 = totalmente inconsciente**. Para não haver confusão, escreva sempre o nome junto do número: "nível 3 — consciente do problema". Os estágios de sofisticação vão de 1 (primeiro a prometer) a 5 (mercado cansado de promessas). Detalhes em `skills/cc-consciencia-e-sofisticacao/SKILL.md`.

## 6. Nicho regulado

Saúde (médico, clínica, odontologia, nutrição, psicologia, estética, suplemento), finanças, investimentos e jurídico: leia `squads/squad-copy-chief/skills/cc-conformidade/SKILL.md` **antes** de escrever. Várias táticas do livro (promessa de cura, antes e depois, depoimento de resultado, ataque a médicos ou à "indústria", ganho garantido, escassez falsa) são proibidas ou arriscadas no Brasil. A conformidade prevalece sobre qualquer regra de copy.

## 7. Como escrever

- Português brasileiro correto, com acentos e crase. Direto, sem jargão de marketing.
- **Na entrega para o Rafael:** comece pela decisão ou recomendação; o raciocínio vem depois. Prefira texto corrido e cartões (blocos com os mesmos campos) a tabelas largas.
- **Na copy:** escreva para uma pessoa só, como conversa. Use as palavras literais do público sempre que a pesquisa trouxer.
- Termo em inglês só quando o mercado brasileiro usa assim (headline, lead, bullet, VSL). Na primeira vez, explique.
- Sem marcas de texto de IA: listas sempre de três, simetria artificial, "não é X, é Y" em série, adjetivos empilhados, frases de efeito vazias, travessões em excesso, transições mecânicas repetidas.

## 8. Retorno para o Copy Chief

Termine a resposta com um resumo curto para a conversa principal:
1. O que foi entregue e em que arquivo.
2. As decisões principais e o porquê.
3. As pendências e o que depende delas.
4. O que a próxima fase precisa saber.

## 9. Ler páginas da web

Se o WebFetch falhar (erro de endereço, página vazia ou montada por JavaScript), use o leitor pelo terminal:

```
node squads/squad-copy-chief/ferramentas/ler-pagina.mjs <url> [url...] --max=20000 --rolar=3
```

Funciona em sites, Biblioteca de Anúncios do Meta e Central de Transparência do Google. Instagram e Reclame Aqui costumam bloquear sem login: registre e procure por outra fonte. A cota de WebSearch é dividida entre os agentes; em pesquisa grande, busque pelo leitor (`https://www.bing.com/search?q=...` ou `https://html.duckduckgo.com/html/?q=...`).

## 10. Onde está o método

As skills ficam em `squads/squad-copy-chief/skills/<nome>/SKILL.md`. Cada agente indica as suas; leia as que a tarefa pede. A skill `cc-fundamentos` tem a anatomia da peça e o glossário, e serve a todos.
