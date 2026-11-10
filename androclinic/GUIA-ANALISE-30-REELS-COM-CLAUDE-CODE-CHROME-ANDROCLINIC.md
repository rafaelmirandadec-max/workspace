# Guia: analisar os 30 reels da AndroClinic com o Claude Code no seu computador

Perfil: https://www.instagram.com/androclinic.saude/reels/

Por que assim: a sessão na nuvem não enxerga o seu Chrome. O Claude Code no seu computador, com a extensão Claude in Chrome, usa o seu navegador já logado no Instagram.

---

## O que você precisa

- Claude Code instalado no seu computador.
- Google Chrome.
- A extensão Claude in Chrome.
- Plano pago do Claude.
- Instagram logado no Chrome.

---

## Passo a passo

1. Instale a extensão "Claude in Chrome" pela loja de extensões do Chrome.
2. Abra o terminal.
3. Crie uma pasta de trabalho e entre nela:
   mkdir ~/androclinic-analise
   cd ~/androclinic-analise
4. Abra o Claude Code:
   claude
5. Digite:
   /chrome
   Ele mostra o status da conexão com o Chrome e deixa ativar. Se pedir, feche e abra de novo com: claude --chrome
6. No Chrome, abra instagram.com e confirme que você está logado.
7. Cole o prompt da próxima seção no Claude Code.

---

## Prompt para colar

Você vai analisar os últimos 30 reels do perfil https://www.instagram.com/androclinic.saude/reels/ usando o meu Chrome, onde já estou logado.

Regras:
- Somente leitura. Não curta, não comente, não siga, não envie mensagem.
- Nunca peça nem digite senha. Se aparecer login, captcha ou aviso, pare e me avise.
- Trabalhe em lotes de 10 reels. Espere alguns segundos entre um reel e outro.
- Se o Instagram limitar o acesso, pare e me diga em qual reel parou.

Para cada reel, colete:
1. Link
2. Data de publicação
3. Legenda completa
4. Visualizações
5. Curtidas
6. Número de comentários
7. Duração
8. Texto na tela, se visível
9. Os 20 comentários mais relevantes, com usuário e texto
10. Respostas do perfil nos comentários

Salve em dois arquivos nesta pasta:
- reels.csv, uma linha por reel
- comentarios.csv, uma linha por comentário

Quando terminar os 30, faça a análise:
1. Ranking por visualizações e por engajamento (curtidas mais comentários, dividido pelas visualizações).
2. Os 5 que mais performaram e os 5 que menos performaram, e o motivo de cada um.
3. Temas mais usados e temas menos usados.
4. Tipos de gancho no início e quais funcionam melhor.
5. Formato: médico falando, atriz, texto na tela, trecho de live. Qual rende mais.
6. Duração e dia da semana versus desempenho.
7. O que os comentários revelam: dúvidas, medos, objeções, palavras que o público usa, pedidos de preço ou agendamento.
8. Comentários de mulheres e parceiras, separados.
9. Perfil provável do público.
10. 15 ideias de reels novos, cada uma com gancho, tema e formato.

Escreva em português do Brasil, com frases curtas, sem tabelas e sem emoji.

---

## Cuidados

- Você faz o login. Nunca digite senha no chat.
- Se aparecer captcha ou aviso do Instagram, resolva você mesmo e mande continuar.
- Lotes de 10 reduzem o risco de limite de acessos.
- É só leitura. Nada de curtir, comentar ou seguir.
- Os dados dos comentários são de terceiros. Use só para análise interna.

---

## Transcrição dos vídeos

O navegador não baixa o áudio. Duas saídas:

1. Você tem os arquivos originais no editor de vídeo. Me mande os arquivos e eu transcrevo.
2. Cole as transcrições, se já existirem.

---

## Depois

Se a análise sair no seu terminal, você já tem tudo.

Se preferir uma segunda leitura aqui, mande reels.csv e comentarios.csv. Eu cruzo com os roteiros das campanhas de novembro e ajusto as ideias novas ao tom da AndroClinic.

---

## Plano B, mais rápido e sem risco

Meta Business Suite, Insights, Conteúdo, exportar CSV. Traz alcance, salvamentos e compartilhamentos, que a tela pública não mostra.
