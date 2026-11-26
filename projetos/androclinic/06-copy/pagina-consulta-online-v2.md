# Página de vendas: consulta médica online (v2, curta)

Página de exemplo, escrita em 26/11/2026 a pedido do Rafael ("recria a página de vendas da androclinic em HTML"). Substitui a v1 como base do HTML. Público frio vindo de anúncio na Meta, perfil B, nível de consciência 3 (suposição, como na v1).

## Suposições (valores plausíveis, não confirmados com o cliente)

1. O Dr. Cristiano atende todas as consultas compradas nesta página.
2. A consulta dura cerca de 30 minutos (número da página atual) e inclui um retorno por vídeo em até 30 dias.
3. A operação comercial mudou (pendência 4): a receita é do paciente e vale em qualquer farmácia; nome e preço do tratamento são ditos antes de qualquer pagamento; ninguém fecha venda na mesma chamada. **É a suposição que mais pesa:** sem ela, o bloco de preço e a FAQ 1 precisam voltar ao texto conservador da v1.
4. Pagamento por Pix ou cartão, em até 2x sem juros. Remarcação e cancelamento sem custo até 24 horas antes.
5. A consulta não é gravada. Na fatura aparece "LHP Gestão à Saúde", sem a palavra AndroClinic.
6. A clínica emite recibo com nome e CRM do médico, para reembolso no plano.
7. Local de exemplo: consultório na Praça XV de Novembro, 312, 4º andar, Centro, Florianópolis/SC (endereço da página atual), com atendimento presencial ali e online para todo o Brasil.
8. Canais: site androclinic.com.br, WhatsApp (48) 6136-9359 (o da página atual), e-mail ouvidoria@androclinic.com.br. Atendimento no WhatsApp de segunda a sexta, das 8h às 20h, e aos sábados, das 8h às 12h.
9. Registro da clínica no CRM-SC nº 4218 e alvará sanitário 642560/23-4 da Vigilância Sanitária de Florianópolis: **valores fictícios de exemplo** (o alvará é o número da página atual, com o órgão suposto). O diretor técnico tem CRM-DF numa clínica em SC: ponto para o advogado antes de publicar.
10. "Desde 2015" como início da dedicação do Dr. à saúde sexual masculina (fala dele nas lives).
11. As frases clínicas (causas, dependência, efeitos) seguem o que o Dr. diz nas lives e o briefing. Na versão real, o diretor técnico as valida.

Se a página for publicada de verdade, os itens 1 a 9 viram perguntas ao cliente, e a peça passa pelo diretor técnico, pelo advogado de saúde e pelo `revisor`.

## Referências usadas

- **`padroes.md`** (grupo A e checklist): página curta que leva a uma conversa; processo em etapas logo depois da dobra; "onde e com quem"; WhatsApp como canal direto; ressalvas curtas; em saúde, promessa de processo e acesso, preço só da consulta.
- **`sou-coluna.md`:** a primeira consulta descrita etapa por etapa, com duração e com o que o paciente leva para casa; a ressalva "quem explica é a avaliação"; paleta clara com serifa.
- **`centro-brasileiro-de-laser.md`:** valor da consulta visível perto do botão; "para quem é" em linguagem leiga e em terceira pessoa; FAQ que admite efeitos e limites.
- **`harme-clinica-harmonizacao.md`:** o profissional cedo, com vídeo e foto; estrutura enxuta (quem atende, como é, para quem é, contato); registro com UF e endereço.
- **`harmony-transplante-capilar.md`:** cartão de local com endereço e WhatsApp; etapas numeradas com ilustração.
- **Não modelei, pelas seções "Cuidado de conformidade":** avaliação gratuita (Harmony), títulos e depoimentos que insinuam resultado (Harmony, Centro Brasileiro de Laser, Harmê), antes e depois, urgência "ainda este mês", número de eficácia sem fonte (Sou Coluna), frase que afirma a condição do leitor (Sou Coluna), preço de procedimento (Centro Brasileiro de Laser) e avaliações de paciente que falam de melhora.

## Headline: duas opções, ranqueadas

1. **"Consulta médica online para entender a causa antes de qualquer tratamento." (escolhida)** É curta e diz o que é (consulta médica), como é (online) e o que se ganha (a causa antes do tratamento). É promessa de processo e acesso, como pede o checklist de saúde. O tema (ereção, ejaculação, desejo) vai no sobretítulo, e o leitor frio entende do que se trata sem rolar.
2. **"Ereção que falha, ejaculação precoce, pouco desejo: tudo isso tem causa. A consulta começa por ela."** (a da v1) Identifica melhor o leitor pelas três queixas, mas tem o dobro do tamanho e pesa na primeira tela do celular. Fica para teste A/B.

**Title:** Consulta médica online por vídeo, R$ 197 | AndroClinic
**Meta description:** Consulta por vídeo com o Dr. Cristiano Estivalet, médico, CRM-DF 15471. R$ 197, retorno incluído. Veja como é a consulta antes de agendar.

---

# Texto da página, em ordem

## [H0] Cabeçalho

Layout: barra fina, fundo claro, sem menu. Logo à esquerda; à direita, link de texto "WhatsApp" e o botão na cor única da página. No celular, só o logo e o botão; ao rolar, o botão vira barra fixa no pé da tela.

- Logo: AndroClinic
- Link: WhatsApp
- Botão: **Agendar consulta · R$ 197**

---

## [D1] Dobra

Layout: fundo claro (creme ou off-white), texto à esquerda, foto do Dr. Cristiano de jaleco à direita, com luz natural. Embaixo do texto vêm o botão, os três selos em linha e o link do WhatsApp. No celular, a ordem é sobretítulo, headline, subtítulo, botão e selos, com a foto depois. O botão tem de aparecer na primeira tela. A palavra "causa" fica destacada em serifa itálica, o único critério de destaque da página.

**Sobretítulo:** Consulta médica online · ereção, ejaculação e desejo

**Headline (H1):** "Já tentei de tudo." Faltou descobrir *por quê*. (par 12 de headlines-v2.md, escolhido em 26/11/2026)

**Subtítulo:** Na consulta por vídeo, o Dr. Cristiano Estivalet, MÉDICO, CRM-DF 15471, começa pelo que já foi tentado e pelo que aconteceu. R$ 197, retorno incluído.

**Botão:** Agendar consulta · R$ 197

**Selos:**
- Retorno em até 30 dias incluído
- CRM conferível no portal do CFM
- Sigilo médico

**Link sob os selos:** Prefere conversar antes? Fale com a equipe no WhatsApp

---

## [E1] Como é a consulta

Layout: logo depois da dobra. No topo, duas linhas de introdução centralizadas; abaixo, quatro cartões numerados iguais, em linha no desktop e empilhados no celular, cada um com número grande, título e duas ou três linhas. Embaixo dos cartões, a ressalva em texto menor, com ícone de informação, e depois o botão.

**Título (H2):** Como é a consulta, do agendamento ao retorno

**Introdução:** O mesmo sintoma pode ter causas diferentes: circulação, nervos, hormônios, ansiedade, e às vezes mais de uma ao mesmo tempo. Por isso a consulta começa pelo porquê, e não pelo remédio.

**1. Você agenda**
Escolhe dia e horário na próxima tela e paga a consulta. A confirmação chega por WhatsApp e por e-mail, com o link da chamada.

**2. Conversa por vídeo, cerca de 30 minutos**
Do celular ou do computador, num lugar reservado. Você conta o que está acontecendo, que remédios usa e o que já tentou. Não precisa chegar sabendo o nome de nada.

**3. O médico explica o que pode estar por trás**
E diz o que faz sentido em seguida: pedir exames, orientar mudanças na rotina, indicar tratamento ou encaminhar para avaliação presencial, quando o caso pedir.

**4. Se houver tratamento, você entende antes**
O que é, por que foi indicado e quais efeitos podem aparecer. A receita é sua, e a decisão de começar também. Em até 30 dias, o retorno ajusta o plano.

**Ressalva:** Quem explica a causa é a consulta. Cada caso é avaliado individualmente, e esta página não promete resultado de tratamento.

**Botão:** Agendar consulta · R$ 197

---

## [MD] Quem atende e de onde

Layout: duas colunas. À esquerda, o vídeo vertical do Dr. (player de exemplo), com título acima e legenda abaixo. À direita, nome, credencial, duas linhas de apresentação e o link do CRM. Embaixo, dois cartões de local lado a lado com o mesmo padrão: ícone, título, duas linhas e um link. No celular, a ordem é vídeo, credencial e cartões.

**Título (H2):** Quem atende e de onde

**Título do vídeo:** Como é a consulta, em um minuto

**Legenda do vídeo:** O Dr. Cristiano mostra o que acontece na chamada: o que ele pergunta, o que você leva da consulta e o que vem depois.

**Nome:** Dr. Cristiano Grizza Estivalet

**Credencial:** MÉDICO · CRM-DF 15471 · Diretor técnico da AndroClinic

**Apresentação:** Desde 2015, atende homens em saúde sexual: ereção, ejaculação e desejo. É ele quem aparece nos vídeos da AndroClinic, e é com ele a consulta marcada nesta página.

**Link:** Conferir o CRM no portal do CFM

**Cartão 1, Online:** Por vídeo, para qualquer cidade do Brasil. Basta celular ou computador e um lugar reservado.

**Cartão 2, Presencial em Florianópolis:** Praça XV de Novembro, 312, 4º andar, Centro. Para quem prefere ir ao consultório ou quando o médico indicar avaliação presencial.
Link: Ver no mapa

---

## [P1] Para quem é

Layout: faixa clara e estreita. Título, três itens com ícone de linha e, embaixo, uma linha "para quem não é" em texto menor e tom neutro. Tudo em terceira pessoa, sem pergunta ao leitor.

**Título (H2):** Para quem é

- Homens adultos com dificuldade de ereção, ejaculação precoce ou queda de desejo que querem entender a causa antes de decidir um tratamento.
- Quem já testou remédio da farmácia, suplemento ou spray e quer saber por que não resolveu.
- Quem usa remédio para pressão, diabetes ou coração e quer que isso entre na conversa antes de qualquer indicação.

**Para quem não é:** Menores de 18 anos e urgências. Dor no peito, falta de ar ou ereção dolorosa que não passa pedem pronto-socorro ou o 192.

---

## [O1] O que os R$ 197 pagam

Layout: o bloco de decisão. Há um cartão largo e centralizado, de fundo levemente destacado, com duas colunas dentro: "Inclui" (check) e "Fica de fora" (ícone neutro, nunca X vermelho). Abaixo das colunas, no mesmo cartão, vêm o preço grande, a linha de pagamento e o botão. Coladas ao botão ficam três linhas de redução de risco. Fora do cartão, embaixo, vai o parágrafo sobre tratamento, em texto corrido. Sem preço riscado e sem selo de desconto.

**Título (H2):** O que os R$ 197 pagam, e o que fica de fora

**Inclui**
- Consulta por vídeo com o Dr. Cristiano, cerca de 30 minutos
- Explicação do que pode estar por trás e dos próximos passos
- Pedido de exames digital, se o médico achar necessário
- Receita digital com assinatura ICP-Brasil, se houver prescrição
- Retorno por vídeo em até 30 dias
- Recibo com nome e CRM do médico, para reembolso no plano

**Fica de fora**
- Tratamento: remédio, se indicado, é pago à parte e só se você decidir
- Exames: feitos no laboratório que você escolher, particular ou pelo plano
- Consultas além do retorno

**Preço:** R$ 197

**Pagamento:** Pix ou cartão. No cartão, em até 2x de R$ 98,50 sem juros (total de R$ 197).

**Botão:** Agendar consulta · R$ 197

**Redução de risco, colada ao botão:**
- Remarcação sem custo até 24 horas antes
- Cancelou até 24 horas antes? Devolvemos o valor integral
- Se a consulta não acontecer por motivo da clínica, você remarca ou recebe o valor de volta

**Parágrafo sobre tratamento:** Se o médico indicar tratamento, ele explica o que é, por quê e quais efeitos podem aparecer, e você fica sabendo o preço antes de qualquer pagamento. A receita é sua e vale em qualquer farmácia. Nesta página não aparece nome nem preço de remédio, porque a lei não permite anunciar ao público medicamento que exige receita.

---

## [S1] Sigilo

Layout: a única seção escura do meio da página. Título e quatro cartões curtos em grade 2 x 2 (no celular, empilhados), cada um com título em negrito e uma linha.

**Título (H2):** O que acontece com o que você conta

- **Fica entre você e o médico.** O sigilo médico é dever previsto no Código de Ética Médica.
- **A consulta não é gravada.** Na chamada estão só você e o médico.
- **Na fatura aparece "LHP Gestão à Saúde".** O nome AndroClinic não aparece.
- **Dado de saúde não vira anúncio.** O que você informa fica no prontuário, que só a equipe médica acessa, e não é usado para publicidade.

---

## [W1] Conversa antes de agendar

Layout: faixa clara e curta, com o ícone do WhatsApp à esquerda e o texto e o link à direita. O link é um botão de contorno, sem preenchimento, para não competir com o botão de agendar. Embaixo, em texto menor, a linha de canal oficial.

**Título (H2):** Prefere conversar antes? Fale com a equipe no WhatsApp

**Texto:** A equipe tira dúvidas sobre agenda, pagamento e como funciona a consulta. Perguntas sobre o seu caso ficam para o médico, na consulta.

**Horário:** Segunda a sexta, das 8h às 20h. Sábado, das 8h às 12h.

**Botão de contorno:** Conversar no WhatsApp · (48) 6136-9359

**Linha de canal oficial:** A AndroClinic só atende por este número e pelo site androclinic.com.br. Se alguém falar em nome da clínica por outro canal, confirme por aqui.

---

## [Q1] Perguntas frequentes

Layout: acordeão em uma coluna, com largura de leitura confortável. A primeira pergunta vem aberta.

**Título (H2):** Perguntas antes de agendar

**1. Vão me empurrar um pacote depois da consulta?**
Não. O que você paga aqui é a consulta, R$ 197. Se houver indicação de tratamento, você fica sabendo o nome e o preço antes de qualquer pagamento, e ninguém fecha venda na mesma chamada. A receita é sua: compre onde quiser.

**2. É médico mesmo?**
Sim. A consulta é com o Dr. Cristiano Grizza Estivalet, MÉDICO, CRM-DF 15471. Dá para conferir no portal do Conselho Federal de Medicina, pelo nome ou pelo número, antes de agendar. É uma chamada ao vivo, não gravação nem atendimento automático.

**3. O tratamento vicia?**
Depende do que for indicado, e vale levar essa pergunta para a consulta. Se houver remédio no plano, o médico explica o que se sabe sobre dependência, por quanto tempo usar e quando reduzir ou parar.

**4. Vai ter efeito colateral? Uso remédio para pressão.**
Todo remédio pode ter efeitos. Por isso o médico considera os remédios que você já usa, inclusive para pressão, diabetes ou coração, e explica os efeitos possíveis antes de você começar.

**5. Posso usar o plano de saúde?**
A consulta é particular. Você recebe recibo com nome e CRM do médico e pode pedir reembolso ao seu plano, conforme as regras dele. Os exames, se o médico pedir, podem ser feitos pelo plano.

**6. E se o meu caso não puder ser resolvido online?**
O médico diz isso na consulta e orienta o próximo passo. Pode ser uma consulta presencial em Florianópolis ou com outro profissional perto de você.

---

## [CF] CTA final

Layout: cartão escuro largo, com foto pequena do Dr. à esquerda e texto e botão à direita. Sem cronômetro e sem contagem de vagas. O link do WhatsApp vai embaixo, em texto.

**Título (H2):** Primeiro entender. Depois decidir.

**Texto:** Consulta por vídeo com o Dr. Cristiano Estivalet, MÉDICO, CRM-DF 15471. Cerca de 30 minutos, retorno incluído, R$ 197. Os horários livres aparecem na próxima tela.

**Botão:** Agendar consulta · R$ 197

**Link:** Prefere conversar antes? Fale com a equipe no WhatsApp

---

## [R1] Rodapé legal

Layout: fundo escuro e texto pequeno, mas com contraste legível. No topo, uma faixa discreta com a miniatura do carro no box e uma linha sobre a Porsche Cup. Abaixo, três colunas: identificação, contato e links. No fim, os avisos em largura total.

**Faixa da Porsche Cup (discreta):** A AndroClinic patrocina um carro na Porsche Cup Brasil. É patrocínio de marca, sem relação com tratamento.

**Identificação**
AndroClinic é marca de LHP Gestão à Saúde Ltda
CNPJ 25.178.600/0001-75
Registro da clínica no CRM-SC nº 4218
Diretor técnico: Dr. Cristiano Grizza Estivalet, MÉDICO, CRM-DF 15471
Alvará sanitário nº 642560/23-4, Vigilância Sanitária de Florianópolis
Praça XV de Novembro, 312, 4º andar, Centro, Florianópolis/SC, CEP 88010-400

**Contato**
WhatsApp (48) 6136-9359, de segunda a sexta, das 8h às 20h, e aos sábados, das 8h às 12h
ouvidoria@androclinic.com.br
androclinic.com.br

**Links**
Política de privacidade · Termos de uso · Política de cancelamento e remarcação

**Avisos**
Atendimento por telemedicina, conforme a Resolução CFM nº 2.314/2022. A consulta online não substitui atendimento de urgência: em caso de dor no peito, falta de ar ou outra emergência, procure o pronto-socorro mais próximo ou ligue 192. Quando a avaliação a distância não for suficiente, o médico indica consulta presencial.

Esta página informa sobre a consulta e não substitui avaliação médica. Cada caso é avaliado individualmente, e não há promessa de resultado de tratamento.

Imagens do Dr. Cristiano Grizza Estivalet publicadas com autorização.

© 2026 LHP Gestão à Saúde Ltda. Todos os direitos reservados.

---

## Notas de montagem

- **Um botão, uma cor, um texto:** "Agendar consulta · R$ 197" no cabeçalho, em [D1], [E1], [O1] e [CF] e na barra fixa do celular, sempre para `https://agendamento.andromens.com.br/agendar`. O WhatsApp aparece sempre como link ou botão de contorno, nunca na cor do botão principal.
- **Paleta:** clara (creme, cinza quente, um tom escuro para [S1], [CF] e rodapé), com uma cor de botão só. Sem preto e dourado, que na biblioteca passa "premium de venda"; clínica médica pede o claro com serifa.
- **Fotos:** só as reais (Dr. Cristiano; carro no box). Nada de banco de imagem, casal, corpo ou homem cabisbaixo.
- **Altura-alvo:** perto de 8.000 px no desktop. Se passar disso, encurte [P1] antes de mexer em [E1] ou [O1].
- **Pixel:** evento de conversão sem condição clínica (LGPD).
