# Black Friday 2026 (lista de espera) — Finclass

**URL:** https://www.finclass.com/ (redireciona para https://sl.finclass.com/bff2026-blackfriday-finclass-home/fl/ com parâmetros de rastreamento)
**Produto e empresa:** assinatura anual da Finclass, plataforma de educação financeira do Grupo Primo (Thiago Nigro), com carteiras recomendadas e cursos de bônus
**Tipo:** assinatura / página de pré-venda de Black Friday (cadastro VIP para a abertura de vendas em 27/11, 8h), com a oferta completa já exposta
**Ticket visível:** "por apenas 12x de R$ 39,90 ou à vista de R$ 478,80" (plano anual), "De R$ 79,90" por mês; pilha de valor somando "Total: R$ 12.632,80"
**Lida em:** 25/11/2026, 15h47 (horário de Brasília), status 200
**Capturas:** [desktop](../capturas/finclass-black-friday-desktop.jpg) · [celular](../capturas/finclass-black-friday-mobile.jpg)

## Por que está aqui

É o exemplo mais claro da lista de **pilha de valor** (cada item numerado, com preço "de" riscado e "R$ 0") levando a um preço baixo de assinatura, em página escura com estética de Black Friday. Também serve de alerta: é página de nicho regulado (investimentos) com rentabilidade passada em destaque.

## Sinais de conversão

- **PISTA (case de fornecedor)** — A agência de tecnologia UDS afirma que a Finclass "alcançou 1 milhão de assinantes e R$ 130 milhões em seu primeiro ano" (uds.com.br/blog/finclass-case-uds-no-streaming). O site do Grupo Primo diz que em 2021 a receita da holding atingiu R$ 120 milhões e mais de 200 mil pessoas pagaram assinaturas (grupo-primo.com). Números divergentes e de fonte interessada: tratar como pista.
- **FATO** — Central de Transparência de Anúncios do Google: "cerca de 2 mil anúncios" apontando para finclass.com, anunciante verificado (consulta em 25/11/2026).
- **PISTA** — A página de Black Friday tem endereço com ano e nome de campanha ("bff2026") e parâmetro de origem ("HOME_FIN_REDIRECT"): a home inteira é redirecionada para a campanha, sinal de que a Black Friday é o principal evento comercial do ano para eles.
- **Não verificado** — Biblioteca de Anúncios do Meta (bloqueada neste ambiente).

## Anatomia da página (na ordem em que aparece)

1. **Contagem regressiva** no topo (dias, horas, minutos, segundos até a abertura).
2. **Dobra em duas colunas:** à esquerda, "A MELHOR PROMOÇÃO DO ANO ESTÁ CHEGANDO.", logo Finclass e o letreiro neon "BLACK FRIDAY 2026", preço "DE: R$ 79,90 · R$ 39,90/MÊS · PLANO ANUAL", "Abertura das Vendas: 27 de Novembro, 8:00 da manhã" e selo "VENDAS SOMENTE NO DIA". À direita, formulário (nome, e-mail, telefone) e botão amarelo "Entrar na lista de espera".
3. **"A Finclass é a maior plataforma de educação financeira do Brasil. Assinando, você recebe:"** — três ícones (aulas, comunidade, carteiras).
4. **Carteiras recomendadas** com gráfico de pizza e barras de rentabilidade comparada ("40,8% Carteira de Valorização x 37,7% CDI"; "9,55% Carteira de Renda x 8,00% Média Histórica FIIs 10 anos").
5. **Professores** (fotos e cargos: Cristina Junqueira, Gustavo Cerbasi, Thiago Nigro, Howard Marks, Marcos Lisboa) e novas funcionalidades do app.
6. **"PACOTE PREMIUM — O que é incluso no pacote"**: arte com todos os produtos e dez cartões numerados, cada um com imagem, título, descrição e preço "de" riscado com "R$ 0" (ou "Não disponível para compra").
7. **"VEJA TUDO O QUE VOCÊ TERÁ ACESSO"**: lista com valor de cada item, "Total: R$ 12.632,80" riscado e cartão azul "por apenas 12x de R$ 39,90 ou à vista de R$ 478,80" com botão "Entrar na lista de espera".
8. Rodapé com políticas.

## O que o design faz bem

- **Estética de campanha coerente:** fundo preto, neon azul-turquesa, letreiro "BLACK FRIDAY 2026" usado como logo da campanha em todas as artes.
- **Cartões numerados** (1 a 10) com círculo azul no topo: dá sensação de quantidade e permite contar o que se recebe.
- **Preço riscado + "R$ 0" em cada cartão** e a soma no fim: a pilha de valor é visual, não só textual.
- **Dobra resolve tudo:** promessa, preço, data de abertura e formulário na mesma tela.
- **Celular:** formulário logo abaixo do letreiro e cartões em coluna única.

## O que dá para modelar sem copiar

- Pilha de valor em cartões numerados, cada um com o valor avulso, terminando num resumo em lista e num cartão de preço destacado.
- Pré-cadastro para a abertura com data e hora exatas na dobra ("vendas somente no dia").
- Mostrar o preço já na lista de espera, para filtrar quem entra.

## Pontos fracos

- Os valores "de" de vários itens (R$ 3.000 por uma carteira, R$ 1.997 por um curso) são preços de referência da própria empresa; a soma de R$ 12.632,80 é âncora, não preço praticado. Ao modelar, só usar valor avulso que de fato é cobrado.
- Muitos itens de bônus sem relação com o produto principal (curso de vendas de Jordan Belfort, financiamento de casa), o que dilui a promessa.
- Aviso de cookies grande sobre o formulário na captura.

## Cuidado de conformidade

Nicho regulado (investimentos). A página mostra rentabilidade passada de "carteiras recomendadas" comparada ao CDI e à média de FIIs em destaque. Recomendação de investimento e divulgação de rentabilidade têm regras próprias (CVM e autorregulação). Não usar esse bloco como modelo para clientes de finanças sem passar pela skill `conformidade`. As ressalvas e a identificação do analista responsável não apareceram no texto lido da página.
