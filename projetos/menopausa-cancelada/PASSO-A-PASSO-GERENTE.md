# Menopausa Cancelada: passo a passo para montar os e-mails no SendGrid

Para o gerente de marketing. Este documento reúne todos os e-mails prontos (assunto, pré-cabeçalho, corpo, botão e rodapé). É só colar.

## 1. Antes do primeiro envio (uma vez)
- **Remetente:** use o e-mail autorizado da empresa, com o nome "Menopausa Cancelada".
- **Domínio autenticado:** em Settings > Sender Authentication, confira se o domínio de envio está verificado (SPF e DKIM). Se não estiver, autentique antes de enviar, senão os e-mails caem no spam.
- **Descadastro:** todo e-mail já traz `{{{unsubscribe}}}` no rodapé. Se o editor oferecer o módulo "Unsubscribe", use o módulo no lugar. Teste o link.
- **Lista de envio:** só quem marcou a caixa de e-mail no formulário do grupo.

## 2. Listas e segmentos
Crie estes segmentos no SendGrid:
- **Opt-in:** todos que marcaram a caixa de e-mail.
- **Comprou 2 potes**, **Comprou 4 potes**, **Comprou 6 potes:** importe os e-mails dos compradores a partir da Hubla, por pacote.
- **Viu a live e não comprou:** Opt-in menos os três segmentos de compra.

Quando alguém comprar, tire da sequência "não comprou" na hora e coloque no segmento do pacote. Os dados dos clientes ficam só no SendGrid e na Hubla.

## 3. O que montar e para quem
| Onde está neste documento | Quem recebe | Quando |
|---|---|---|
| Parte 2, seção 1 (boas-vindas) | Quem acabou de entrar na lista | Ao entrar |
| Parte 2, seção 2 (newsletter 1) | Toda a lista Opt-in | Primeira quinzena |
| Parte 7 (newsletter, edição 2) | Toda a lista Opt-in | Quinze dias depois da edição 1 |
| Parte 2, seções 4 a 8 (um produto por vez; a 8 é a Black November na live) | Opt-in, um produto por vez | Quando quiser promover |
| Parte 3 (não comprou) | Viu a live e não comprou | Dia 1 logo após a live, depois dias 2, 3, 4 e 5 |
| Parte 4 (comprou 2 potes) | Comprou 2 potes | Dias 1, 2, 4 e 6 após a compra |
| Parte 5 (comprou 4 potes) | Comprou 4 potes | Dias 0, 3, 14, 30 e 90 após a compra |
| Parte 6 (comprou 6 potes) | Comprou 6 potes | Dias 0, 3, 7, 30 e 150 após a compra |

Cada sequência tem a linha "Quando enviar" no topo da parte. Se o seu plano tem **Automation**, monte cada sequência como automação que dispara quando a pessoa entra no segmento. Se não tem, agende os envios um a um.

## 4. Antes de enviar cada e-mail
1. Mande um **teste** para um Gmail e um Outlook.
2. Clique no botão: ele deve abrir `https://link.menopausacancelada.com.br/of-api` (oferta da Black November). Não troque pelo link da loja nem de shotdalibido.com.br, que mostram preço diferente.
3. Confira o rodapé e o descadastro.
4. Veja no celular.

## 5. Depois de enviar
Olhe **cliques, descadastros e reclamações de spam**. A abertura é só tendência (o Apple Mail conta abertura sem leitura). Se descadastros ou reclamações subirem depois de uma campanha, pare e avise.

## 6. O que preciso que você confirme
- Até quando a oferta `of-api` vale e se é a mesma para quem já comprou.
- Como a cliente de 6 potes **acessa cada brinde** (calculadora, agente de nutrição, curso e consulta) e como agenda a consulta.
- Se existe condição de recompra. Hoje os e-mails só dizem "veja a condição de hoje".
- O preço da loja e o dos checkouts da campanha, que estão diferentes.
- A data da próxima live, para a sequência de live (Parte 2, seção 3).
