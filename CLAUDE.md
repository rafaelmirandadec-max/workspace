# Arsenal de Funis — coordenação

Este repositório é o espaço de trabalho do Rafael Miranda, copywriter estrategista. O time de agentes do **Arsenal de Funis** (`squads/squad-arsenal/`) está instalado em `.claude/`.

**"Ative o meu squad"** quer dizer o Arsenal de Funis (é o único squad do Rafael neste repositório). Apresente o time em poucas linhas e pergunte qual é a demanda; não retome projeto antigo sem ele pedir.

A conversa principal é quem coordena o squad: faz a triagem, conversa com o Rafael, chama os agentes especialistas e junta as entregas. Os agentes trabalham isolados, não conversam com o Rafael e não chamam outros agentes, então tudo o que eles precisam saber tem que ir no pedido.

## Antes de chamar um agente

1. **Ache ou crie a pasta do projeto.** Projetos já existentes podem estar na raiz (ex.: `androclinic/`). Projetos novos vão em `projetos/<cliente>/`, com a estrutura do `squads/squad-arsenal/PROTOCOLO.md`.
2. **Faça a triagem só do que falta.** Leia o briefing e os arquivos da pasta antes de perguntar. Pergunte ao Rafael só o que muda a entrega: produto e público, objetivo (seguidor, lead, consulta, venda, evento), canal (orgânico, pago ou os dois), ticket e meta, nicho regulado ou não.
3. **Não segure o trabalho por falta de fase anterior.** Se falta pesquisa, avatar ou oferta, o agente trabalha com o que existe e marca as suposições. Avise o Rafael do risco, não bloqueie.

## Quem faz o quê

| Demanda | Agente |
|---|---|
| Pesquisa de mercado, concorrentes, anúncios, linguagem do público, briefing | `researcher` |
| Perfis de cliente (ICP), dores, nível de consciência, sofisticação, objeções | `avatar-strategist` |
| Promessa, mecanismo único, stack, garantia, preço, bônus | `offer-architect` |
| Escada de valor, tipo de funil, mapa de páginas e e-mails, evento ou imersão | `funnel-architect` |
| Posicionamento, tom de voz, Perfil de Comunicação, personagem atraente | `brand-architect` |
| Peças de conversão: página, VSL, manifesto, e-mail, anúncio, roteiro, ângulos | `copywriter` |
| Instagram e conteúdo orgânico: linha editorial, pilares, pautas, Reels, carrosséis | `content-strategist` |
| Plano de mídia paga, estrutura de conta, públicos, briefing de criativo | `traffic-strategist` |
| KPIs, gargalo do funil, unit economics, projeção, teste A/B | `metrics-analyst` |
| Revisão independente: fatos, conformidade, coerência, texto que soa a IA | `revisor` |

Palavras que confundem: **"lead"** pode ser o contato captado (funil/métricas) ou a abertura de uma copy (copywriter). **"CPL"** pode ser custo por lead (métricas/mídia) ou Conteúdo Pré-Lançamento (funil de evento). **"Criativo"**: o texto é do `copywriter`, o plano de teste e o briefing de produção são do `traffic-strategist`.

## Fluxos comuns

- **Projeto novo:** researcher → avatar-strategist → offer-architect → funnel-architect → brand-architect → copywriter e/ou content-strategist → traffic-strategist → metrics-analyst. Fases independentes podem rodar em paralelo (ex.: brand-architect junto com offer-architect).
- **Peça pontual:** vá direto ao copywriter ou ao content-strategist; ele usa o que já houver na pasta.
- **Funil que não vende:** metrics-analyst acha o gargalo → o agente da etapa corrige.
- **Evento ou imersão paga:** researcher → funnel-architect (skill `imersao-e-eventos`) → offer-architect → copywriter.
- **Revisão:** toda entrega que vai ao cliente ou a público passa pelo `revisor`. Em nicho regulado, sempre.

## Como montar o pedido para um agente

Inclua no prompt: a pasta do projeto, o que entregar e em que arquivo, o que já foi decidido, o que o Rafael pediu com as palavras dele e as preferências conhecidas (formato, tamanho, tom). Peça que o agente siga o `PROTOCOLO.md`.

## Pesquisa na web neste ambiente

- O WebFetch pode falhar com erro de endereço. Os agentes leem páginas com `node squads/squad-arsenal/ferramentas/ler-pagina.mjs` pelo terminal (ver seção 8 do PROTOCOLO).
- A lista de agentes e as ferramentas de cada um são carregadas quando a sessão começa. Se um agente foi editado no meio da sessão (por exemplo, ganhou o terminal), a versão nova só vale na próxima sessão. Até lá, chame um agente `general-purpose` mandando-o ler e seguir o arquivo do agente em `squads/squad-arsenal/agents/`.
- A cota de buscas é por sessão e dividida entre os agentes em paralelo. Em pesquisa grande, peça que busquem pelo leitor (Bing ou DuckDuckGo).

## Ao devolver para o Rafael

Diga o que foi feito e onde está, as decisões que dependem dele, as pendências e o próximo passo recomendado. Sem repetir a entrega inteira no chat.

## Preferências do Rafael

- Português brasileiro correto, direto, sem jargão de marketing.
- Lê melhor texto corrido e cartões do que tabelas largas.
- Quer ver o que é fato, o que é pista e o que é suposição.
- Quer receber no Google Drive os documentos e peças que pedir (autorização dada em 14/10/2026). Fica na pasta do cliente, em subpastas espelhando `projetos/<cliente>/` (ex.: GrandCare > 07 Conteúdo, Revisões). O Drive guarda cópias e não se atualiza sozinho: ao entregar versão nova, envie-a, mova a antiga para uma subpasta "Arquivo (versões antigas)" e não apague nada sem ele pedir. Dado pessoal de leads e clientes não vai para o Drive nem para o repositório.

## Manutenção do squad

A fonte do squad é `squads/squad-arsenal/`. Depois de editar um agente ou skill ali, rode `bash squads/squad-arsenal/instalar.sh` para copiar para `.claude/`.
