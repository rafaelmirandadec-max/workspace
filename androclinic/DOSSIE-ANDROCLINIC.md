# Dossiê AndroClinic

Estado do trabalho em 04/10/2026. Cobre pesquisa, concorrentes, anúncios, público, ICP, funil, copys, erros, acertos e o diagnóstico das duas páginas.

Para quem é: Rafael Miranda, copywriter. Uso interno. Não é para o cliente ler, porque cita reclamações e riscos de conformidade da própria empresa.

## Como ler este dossiê

- **Fato** tem fonte nos arquivos da pasta. **Suposição** é leitura do squad. **Pista** é o que uma empresa diz de si mesma.
- `[A PREENCHER]` é o que só o cliente ou o Rafael respondem.
- Tudo o que cita lei é leitura da pesquisa. Nenhum advogado da saúde revisou nada. Os artigos da Resolução CFM 2.336/2023 não foram conferidos no texto oficial, exceto os que o briefing e as frentes já citam.
- As contagens de anúncios e vídeos usam transcrição automática, que tem erros. Confira no vídeo antes de citar.
- Nenhuma peça deste projeto está liberada para subir. O Bloco 13 do briefing está aberto e o gate jurídico não rodou.

## Sumário

1. A conclusão em dez linhas
2. O que existe na pasta
3. A empresa por trás da marca
4. Reputação e reclamações
5. Mercado e regulação
6. Concorrentes
7. Anúncios e vídeos
8. Público: dores, desejos, objeções e linguagem
9. ICP e nível de consciência
10. O funil de hoje e o funil proposto
11. Copys produzidas
12. Diagnóstico das duas páginas
13. Erros e correções do processo
14. Acertos
15. Pendências e próximos passos

---

## 1. A conclusão em dez linhas

1. A AndroClinic vende telemedicina de saúde sexual masculina. A consulta custa R$ 196 ou R$ 197. Depois dela, um consultor vende um pacote de fórmula manipulada, de R$ 1.750 a R$ 4.000 nas reclamações com link.
2. O problema central é o modelo de venda, não a falta de copy. A dor que decide a compra é ser empurrado a um pacote caro depois de uma consulta curta.
3. O site no ar promete garantia de resultado, diz que o remédio não tem efeito colateral e anuncia avaliação gratuita. A pesquisa lê as três coisas como vedadas pela Resolução CFM 2.336/2023.
4. A marca tem seis domínios, três WhatsApps, quatro endereços, preços de R$ 196 e R$ 197 e médicos diferentes por página. Para quem confere, o conjunto lê como golpe.
5. O diretor técnico aparece no CRM-DF 15471. Um diretório lista Medicina do Trabalho, e o RQE nunca foi confirmado no CFM.
6. Os vídeos do Dr. Cristiano são o melhor ativo do funil. Acertam o público: o homem que já tentou o remédio e quer saber a causa.
7. Os vídeos prometem uma consulta de investigação, e os relatos de clientes descrevem consulta de 10 a 25 minutos que termina em venda. É a quebra mais cara do funil.
8. A institucional (`androclinic.com.br`) é a página certa e a mais sóbria. A landing que vende (`drestivalet.andromedicina.com`) foi construída contra ela, com cronômetro, antes e depois e "R$ 500 por R$ 197".
9. As oportunidades de "receita na mão" e "preço na mesa" só se sustentam se a operação comercial mudar. Sem isso, qualquer campanha gera mais reclamação.
10. O próximo passo é a reunião com os donos. Seis respostas destravam o resto: médico, farmácia, receita sem compra, preço e retorno, parceira na consulta e domínio.

---

## 2. O que existe na pasta

Tudo está em `androclinic/`, na branch `claude/zen-planck-jwof5b`.

**Pesquisa (em `pesquisa/`)**
- `frente-1-androclinic.md`: a empresa, reputação, funil e riscos de conformidade.
- `frente-2-concorrentes.md`: 14 concorrentes em três camadas.
- `frente-3-anuncios.md`: bibliotecas de anúncios da Meta e do Google, e políticas das plataformas.
- `frente-4-publico.md`: público, dores, linguagem e citações.
- `frente-5-mercado.md`: mercado, regulação, tendências e o que derruba a hipótese do cliente.
- `anuncios-videos-transcricoes.md`: transcrição dos vídeos da AndroClinic em anúncio.
- `concorrentes-meta-ads.md` e `concorrentes-videos-transcricoes.md`: dados da Biblioteca de Anúncios para 27 anunciantes e transcrição do vídeo mais antigo de cada um.
- `top5-concorrentes-diretos.md`: ranking dos cinco concorrentes mais diretos.

**Documentos de decisão**
- `relatorio-pesquisa-androclinic.html`: consolidação das cinco frentes.
- `briefing-androclinic.md`: 12 blocos mais o Bloco 13 de fatos fixos.
- `icp-androclinic.html`: ICP por perfil e nível de consciência de cada peça.
- `funil-cgcc-androclinic.html`: o funil Conhece, Gosta, Confia, Compra.
- `roteiro-reuniao-cliente.html`: roteiro para a reunião com os donos.

**Copys**
- `razao-por-que-androclinic.html`: 16 características com cinco colunas.
- `angulos-8-motivacoes-androclinic.html`: 45 peças em 9 ângulos.
- `copys-8-motivacoes-androclinic.html`: 8 cópias com vídeo, carrossel, legenda e banner.
- `confianca-presencial-vs-online-androclinic.html`: copy de confiança, FAQ e a objeção do presencial.

**Análises de página**
- `analise-pagina-androclinic-atual.html`: a landing `drestivalet.andromedicina.com`.
- `analise-pagina-institucional-androclinic.html`: a home `androclinic.com.br`.

---

## 3. A empresa por trás da marca

Fonte: `frente-1-androclinic.md` e Bloco 1 do briefing.

- **Titular fiscal.** LHP Gestão à Saúde Ltda, CNPJ 25.178.600/0001-75, aberta em 11/07/2016, sócio único (Receita via BrasilAPI).
- **Sede.** A Receita registra Barueri/SP. O site diz Florianópolis/SC. O CNAE é de apoio à gestão de saúde, sem atividade de clínica nem de farmácia.
- **Anunciante do Google.** Os anúncios saem por outra razão social, a Andro Pharma Ltda. O CNPJ dela não foi levantado.
- **A relação com a farmácia.** Nenhuma fonte pública cita a farmácia que manipula. Se houver vínculo societário ou comercial, ele fere os arts. 58, 68 e 69 do Código de Ética Médica. Isso é suposição a verificar, não fato.
- **Médicos.** O diretor técnico é o Dr. Cristiano Grizza Estivalet, CRM-DF 15471. Circula também o Dr. Daniel Petkov, CRM 15069, sem UF. O diretor técnico aparece como médico do trabalho num diretório, e o RQE não foi verificado.
- **Domínios.** Seis em uso: `andropharma.com.br`, `androclinic.com.br`, `androclinica.com.br`, `andromedicina.com`, `androcentro.com.br` e `andromens.com.br`. Há ainda `andromedbrasil.com.br`. O `andropharma.com.br` está em nome de pessoa física.
- **WhatsApps.** Três: (48) 6136-9359, (48) 98812-8284 e (48) 99939-6048.
- **Endereços em conflito.** Rua Hercílio Luz, 1023 e Praça XV, 312 (Florianópolis). Alameda Grajaú, 129 e Alameda Rio Negro, 1030 (Barueri/Alphaville).
- **Alvarás.** Dois números diferentes no ar, ambos chamados "ANVISA".
- **Presença.** Instagram @androclinic.saude com 59 mil seguidores e 335 posts. YouTube @androclinicbr com 4,15 mil inscritos e 226 vídeos, os 20 recentes com 22 a 162 visualizações. Nenhum post do Instagram foi lido, porque o acesso foi bloqueado.

**O que ela faz bem, segundo a pesquisa.** Tem médico com CRM na primeira dobra da landing, CNPJ e alvará no rodapé, e a melhor nota do Reclame Aqui entre as clínicas de modelo parecido.

---

## 4. Reputação e reclamações

Fonte: `frente-1`, `frente-4` e Notas de fonte do briefing.

**Reclame Aqui.** A mesma página tem três leituras:
- Página principal, 01/03 a 31/08/2026: nota 8,7, 18 reclamações, 66,7% voltariam a negociar.
- Página "Sobre", 01/04 a 30/09/2026: reputação "Ótima", 26 reclamações.
- Índice da busca: nota 8,2, 21 reclamações, 57,1% voltariam. É a leitura que aparece na imagem da landing.

O briefing usa a primeira. A nota 8,7 fica fora das peças, porque mede rapidez de resposta e estorno (suposição).

**O roteiro que as reclamações repetem**
1. A consulta custa R$ 196 e dura de 10 a 25 minutos.
2. No fim, o médico passa o paciente a uma "secretária", "assistente" ou "consultor".
3. O consultor vende um pacote de R$ 1.750 a R$ 4.000, e relatos dizem que a receita só sai com a compra.
4. O nome do remédio só aparece depois do pagamento, em um relato.
5. Depois, faltam retorno e agenda, e o cancelamento é difícil.

**Os números principais**
- Propaganda enganosa responde por 25,58% das reclamações, na leitura direta.
- Das 23 reclamações lidas, 15 tratam de venda empurrada e preço escondido.
- Um relato diz que a chamada foi gravada sem consentimento (Cruz das Almas/BA, 12/11/2025).
- Um relato diz que a nota fiscal saiu como "assessoria e consultoria" (São Paulo/SP, 30/09/2026).
- Um relato de Brasília/DF (08/12/2025) descreve o pacote de R$ 2.750 como duas caixas de tadalafila e dois frascos de maca peruana e tribulus. O cliente estimou os remédios em menos de R$ 50 na farmácia.
- Sessões extras de R$ 180 aparecem em um relato (Passo de Torres/SC, 26/05/2026).

**O contraste que mais pesa.** A tadalafila genérica 20 mg custa R$ 12,99 por 4 comprimidos (Drogaria São Paulo, 01/10/2026). Esse contraste de preço é o maior risco de reputação do modelo.

**Observação sobre as fontes.** Duas citações de cidade (Matinhos/PR e Rio de Janeiro/RJ) tinham link trocado na frente 2. O relatório e o briefing usam os links corrigidos. A frente 2 ainda traz o link antigo.

---

## 5. Mercado e regulação

Fonte: `frente-5-mercado.md` e Bloco 13.

**O que a lei restringe, em leitura da pesquisa**
- Resolução CFM 2.336/2023, publicidade médica: vedados garantir ou insinuar resultado (art. 11, XII), conteúdo sensacionalista ou inverídico (art. 11, XVI), serviço gratuito (art. 11, §4º, "c") e não especialista divulgar que trata doença específica (art. 11, I). Toda peça leva nome, CRM com UF e a palavra MÉDICO (art. 4º).
- RDC Anvisa 67/2007 e 96/2008: nada de fórmula, ativo ou preço de manipulado em anúncio.
- CFM 2.314/2022, telemedicina: prescrição a distância exige assinatura ICP-Brasil e menção à telemedicina (art. 13). Doença crônica pede consulta presencial em até 180 dias (art. 6º, §2º). Suposição: um fiscal pode ler tratamento de DE ou EP por meses assim.
- CFM 2.333/2023: testosterona só com deficiência comprovada em exame.
- Meta: sem afirmar a condição da pessoa, sem foco em prazer ou desempenho, público 18+. Medicamento sob prescrição por telemedicina só com certificação LegitScript e só nos EUA, Canadá e Nova Zelândia. O Brasil fica fora.
- Google: disfunção erétil com medicamento de prescrição fica fora da Pesquisa. A conta da AndroClinic tem três avisos "Removed for a policy violation".
- LGPD: dado de saúde é sensível. Formulário exige consentimento destacado, e o pixel não leva condição clínica.

**O que derruba a hipótese "telemedicina com fórmula manipulada"** (seis pontos, `frente-5` e briefing, Bloco 9)
1. O remédio virou commodity: genérico de R$ 11,99 a R$ 19,89 e venda por aplicativo liberada em 10/08/2026.
2. A fórmula não pode ser anunciada.
3. A fiscalização mira o modelo: a Anvisa proibiu a goma de tadalafila Metbala e suspendeu farmácias que vendiam pela internet com fórmula fixa e nome comercial.
4. O vínculo entre clínica e farmácia é vedado pelo Código de Ética Médica.
5. Lá fora, a Ro teria reduzido o peso da DE na receita. É estimativa de terceiro.
6. O autocompletar de "remédio manipulado para" não traz termo de saúde sexual.

**Números de mercado com fonte**
- 75,1 milhões de unidades de tadalafila genérica vendidas em 2025 (PróGenéricos e IQVIA via CFF, 03/02/2026).
- 52% dos homens de 40 anos ou mais disseram já ter tido dificuldade para manter a ereção (pesquisa da SBU, julho de 2024, mais de 1,5 mil homens, coleta por aplicativo).
- Para ejaculação precoce não há número firme. As cifras vão de 15,8% a "1 a cada 3", sem estudo de origem localizado.
- Em 226 homens que fazem sexo com homens em São Paulo (2023), 17,3% se diziam precoces e só 6,2% passavam do critério de tempo. A amostra é pequena e específica.
- Automedicação, pesquisa SBU e Bayer de 2015: 62% e 54% vêm da mesma pesquisa, com denominadores diferentes. Não somar.

**Lacunas.** O Google Trends bloqueou o acesso e o volume de busca não foi medido. O Rafael abre o Trends no navegador.

---

## 6. Concorrentes

Fonte: `frente-2`, `top5-concorrentes-diretos.md` e `concorrentes-meta-ads.md`.

**O modelo da AndroClinic é uma categoria.** Uro Telemedicina, Lifemen, Boston, Instituto Homem, Alfa Men e Mencare usam o mesmo funil: avaliação gratuita, consultor, pacote de vários meses e fórmula pelo correio. As reclamações se parecem.

**Reputação relativa.** Dentro desse grupo, a AndroClinic tem a melhor nota (8,7 contra 6,6 da Boston, na leitura de 01/10). Omens e Manual têm 8,9, mas são de outra faixa.

**Quem disputa o leilão de anúncio com ela.** São clínicas de nicho e marcas de venda direta, como Alfa Men, UpMen, Genesis, Total Homem e a Bluue (pastilha sublingual, 32 anúncios ativos). Manual e Omens anunciam pouco o tema hoje, e isso é suposição.

**Ranking dos cinco concorrentes mais diretos** (régua de 0 a 2 em seis critérios, aprovado pelo revisor)
1. Instituto Homem, 8 pontos: 23 unidades, contrato de 12 meses fechado por atendente depois da consulta.
2. Boston Medical Group, 8 pontos: consulta de R$ 250 e proposta de R$ 10.400 em outra sala.
3. Alfa Men, 8 pontos: ideia de "tratar a causa" e o anúncio ativo mais antigo da coleta, de outubro de 2025.
4. Dr. Formen, 8 pontos: âncora "de R$ 250 por R$ 100", rede de franquias.
5. Uro Telemedicina, 7 pontos: a mais parecida no produto (mesmo DDD 48, fórmula sublingual pelo correio), mas sem anúncio encontrado.

**Resultado central.** Nenhum concorrente faz o pacote completo da AndroClinic. Cada um copia uma ou duas peças. Nenhum dos cinco finalistas tem médico nomeado falando nos anúncios amostrados.

**Quem copia o formato do Dr. Cristiano** (médico falando para a câmera): Doctor Man e UpMen (7 pontos cada), ABX e Dr. Rodrigo Trivilato. Ficaram fora dos cinco por falta de funil de pacote confirmado.

**Páginas com nome de pessoa.** Marcia Moraes, Lucy Ghelfi e Moacyr Salles usam personagem de jaleco. Benedito Assunção e o Dr. Inácio não usam. Que sejam produto natural com cara de médico é suposição. Que sejam uma só operação não dá para provar sem o número de WhatsApp de cada página.

**Presença digital.** Medição de 02/10/2026, feita nesta sessão, fora das frentes.
- Médicos influenciadores dominam o tema. No YouTube: Marco Túlio Cavalcanti com 1,17 milhão de inscritos, Matheus Amaral com 766 mil e Samira Posses com 743 mil. No Instagram: O Médico dos Homens com 806 mil seguidores.
- Entre as clínicas, a AndroClinic (59 mil) fica atrás da Manual (484 mil) e da The Men's (83 mil), à frente de Omens (42 mil). Boston tem 4,5 mil, Uro Telemedicina 5,4 mil.
- O YouTube é o ponto fraco dela: 4,15 mil inscritos num tema em que três urologistas passam de 700 mil.
- Seguidor mede audiência, não venda.

**Brechas que ninguém ocupa**
- Urologista com rosto e RQE no anúncio.
- Receita entregue sem compra e preço do tratamento à vista. Só vale se a operação mudar.
- Ejaculação precoce como porta de entrada, com remédio e treino juntos.
- O homem que já toma tadalafila por conta própria.
- Garantia com critério claro.

A brecha da parceira ficou menos aberta do que a pesquisa dizia (ver seção 13).

---

## 7. Anúncios e vídeos

Fonte: `frente-3`, `anuncios-videos-transcricoes.md` e `concorrentes-meta-ads.md`.

**Meta.** A página "Androclinic Brasil" tinha 30 anúncios ativos em 01/10/2026: 28 em vídeo e 2 em imagem. Os 28 usam 24 vídeos distintos. Dos 30, 18 anúncios (15 vídeos) começaram em junho e rodam há cerca de 16 semanas. Pela regra da casa, anúncio que roda há meses é provável vencedor. Isso prova atenção, não custo por consulta.

**Destinos.** Cerca de 19 anúncios vão para `andromens.com.br` (`/formcris` e `/home`), 6 para `andromedicina.com` (`/iniciov2`) e 4 para `drestivalet.andromedicina.com`. A pesquisa só leu o `drestivalet`. Os outros destinos não foram abertos.

**Google.** 11 anúncios de texto sob Andro Pharma Ltda, com texto não renderizado, e três avisos de remoção por violação de política.

**O padrão dos vídeos.** Todos têm o Dr. Cristiano falando para a câmera, em vertical, com legenda palavra por palavra, de 50 a 85 segundos.
- O ângulo dominante é "o outro tipo de médico": o homem foi a três médicos, os três deram Viagra e nenhum perguntou por quê. É a base da investigação da causa.
- Outros ângulos: o casal ("vocês viraram sócios, mas faliram como amantes"), os exames que parecem normais, a ansiedade ("o corpo não sabe que a sua reunião acabou"), o anti-golpe ("resultado garantido em cinco minutos: guarda essa frase") e o consultório de Alphaville.
- O vídeo mais forte roda em quatro anúncios e abre com "Deixa eu te contar por que você está falhando mesmo tomando remédio".

**O que está certo nos vídeos.** Acertam o nível de consciência do público: abrem em quem já tentou o remédio e dão um mecanismo novo, a investigação da causa. Usam cenas reais.

**Onde o vídeo promete e o funil não entrega**
1. "Consulta comigo". Uma reclamação de Cotia diz que na consulta atendeu outro profissional.
2. "A gente analisa tudo: hormônio, circulação, pressão, glicose, sono". Os relatos falam em consulta de 10 a 25 minutos que vai direto ao pacote.
3. Preço. O vídeo diz "mil reais no consultório, R$ 197 na telemedicina". A página diz "R$ 500 por R$ 196" ou "R$ 197".
4. Garantia. O vídeo anti-golpe chama de pilantragem quem garante resultado. O site diz "garantias de resultados".
5. Números. Os vídeos dizem "mais de 10 anos" e também "nove anos", "14 mil homens" e "98% de aprovação". A bio do Instagram diz "+180.000 homens". As páginas mostram contadores zerados ou "+200.000 avaliações". Os números não batem.

**Onde os vídeos esbarram na regra** (leitura da pesquisa, o advogado confirma)
- "Existe um tipo de médico que só cuida da saúde sexual do homem": sugere especialidade que o RQE não comprovou (art. 11, I). Chamar o urologista de "médico errado" também pode ler-se como desrespeito a colega (art. 11, §4º, "b").
- Fecho em resultado ("45 dias depois, já com bom desempenho, ele me disse: doutor, joguei o viagra fora"): insinua resultado e funciona como depoimento (art. 11, XII, e art. 14).
- "Você está falhando" afirma a condição da pessoa, o que a Meta barra.
- "A minha agenda abre e fecha muito rápido": escassez sem prova.
- Sem CRM com UF na tela nos quadros vistos, de dois vídeos.
- Nome de remédio ("Viagra", "tadala") no áudio.

**Lacunas dos vídeos.** Nenhum dos 24 fala de ejaculação precoce. Nenhum responde "vicia?".

**Criativos dos concorrentes.** Ângulos gastos: sigilo, "fórmula exclusiva", escassez falsa, número de homens atendidos e "firme em 15 minutos". Lacunas: a parceira como coautora, a ereção como sinal de saúde, o preço aberto, a garantia com critério e o médico explicando o mecanismo.

---

## 8. Público: dores, desejos, objeções e linguagem

Fonte: `frente-4-publico.md` e Bloco 2 do briefing.

**Os três perfis do briefing**
- **A. Ejaculação precoce e disfunção de ansiedade.** Homem jovem, solteiro ou em relação nova. Busca "gozo muito rápido é normal" e "broxei no primeiro encontro".
- **B. Disfunção erétil de origem física.** 45 a 65 anos, na maioria casado, muitas vezes com hipertensão ou diabetes. Já tentou o "azulzinho".
- **C. Libido, com a parceira.** 40 anos ou mais. A parceira busca "meu marido não me procura mais na cama".

A ordem de teste sugerida (A, B, C) é suposição.

**Duas dores em camadas**
- Do problema: falhar na relação, a vergonha e o medo de repetir ou de a parceira perceber.
- Da compra: ser empurrado a um pacote caro depois de uma consulta curta. Esta decide a venda.

**Desejos**
- Voltar a confiar no corpo e na relação com um tratamento que ele entende, sem dependência e sem vendedor.
- Saber a causa, saber o que toma e por quê, conhecer o médico pelo nome e ter retorno marcado.

**Sentimentos.** Vergonha que cresce a cada episódio, frustração com o que já tentou e desconfiança de quem vende.

**As sete objeções, na ordem do briefing**
1. "Vou ser empurrado para um pacote caro depois de uma consulta curta."
2. "Não sei o que vou tomar, e desconfio que pago muito por pouco."
3. "É médico mesmo? É especialista?"
4. "E se não funcionar? Consigo trocar ou receber de volta?"
5. "Vai dar efeito colateral?"
6. "Vai viciar?"
7. "Isso é golpe? Vi reclamação."

**Sigilo.** O sigilo é o que todo concorrente promete. Nenhuma citação do público reclama de sigilo. Por isso entra como condição de entrada, não como diferencial (suposição).

**Linguagem do público.** "Broxei", "gozo muito rápido", "durar mais na cama", "ficar duro", "na hora H", "ereção fraca", "tadala", "azulzinho", "sem remédio", "vicia", "refém", "empurrar", "vendedor de remédio", "show de marketing". Confira cada frase no link original antes de usar em copy.

**Jornada.** Pesquisa "é normal" e "sem remédio", compra na farmácia ou pega comprimido de amigo, tenta suplemento, gel e spray, vê o anúncio, confere o Reclame Aqui ("olhei o Reclame Aqui antes de tomar qualquer decisão") e chama no WhatsApp. A sequência é suposição.

**Calendário.** Julho Azul Celeste e Dia do Homem (15/07), Novembro Azul e Dia Internacional do Homem (19/11), e Black Friday. Novembro Azul tem foco em próstata e soa oportunista sem a ponte "o check-up completo inclui a ereção".

**Não medido.** Idade, região e renda de quem trata DE e EP no Brasil. O perfil dos compradores atuais da clínica (pendência d).

---

## 9. ICP e nível de consciência

Fonte: `icp-androclinic.html`, método da aula do Gabriel.

**Os quatro perfis**
- **Jovem com ejaculação precoce e ansiedade.** Níveis de consciência 1 e 2, com o dominante não medido, e o 3 como secundário. Mercado no estágio 3. É o primeiro a testar. A busca em massa ("é normal", "broxei do nada") é nível 1. O nível 2 vem de quem escreve a um médico, com viés de seleção.
- **Disfunção erétil física, de 45 a 65 anos.** Nível 3. O problema é caro, mas a urgência não ficou provada. Mercado entre os estágios 3 e 4.
- **Libido.** Nível 1. É a hipótese mais fraca: a pesquisa não traz jornada nem fala literal de homem sobre libido.
- **A parceira.** Nível 1. Estágio 1 "provável, não comprovado". Nenhum anúncio lido fala só com ela. O vídeo "sócios" da própria clínica fala com o casal, e a Bluue anuncia por criadores de casal.

**Sofisticação do mercado.** O briefing dizia "estágios 4 e 5". Pela definição da aula, o estágio 5 (identificação) é raro, e só há pistas dele, nada confirmado. A evidência dos concorrentes aponta para os estágios 2 a 4. A regra do squad: promessa maior não move, mecanismo novo ou identificação move.

**A régua das peças.** O nível da peça é o que ela supõe que o leitor já sabe. Nas 53 marcas (45 peças de ângulos mais 8 cópias): 15 no nível 1, 3 no nível 2, 29 no nível 3, 5 no nível 4 e 1 no nível 5. Sete peças misturam níveis, e o ICP traz a correção de cada uma.

**A fórmula da mensagem.** Primeiro o que o leitor já sabe, depois o que ele ainda não sabe. Uma peça fala com um nível só.

**Uma restrição da lei sobre o método.** A etapa de mecanismo da aula, "agora vai dar certo, porque X", é promessa de resultado. Na AndroClinic ela vira "a consulta começa pelo porquê".

**Decisões do ICP**
1. Campanha por nível, não por ângulo.
2. Testar primeiro três ganchos de níveis diferentes no jovem. O teste não isola o nível, porque os ganchos também diferem em voz e forma.
3. Produzir o que falta: peça de nível 2 para a DE física, peça só para a parceira e conteúdo de destino para os níveis 1 e 2.

Os níveis e estágios são leitura do squad, sem dado de conversão.

---

## 10. O funil de hoje e o funil proposto

Fonte: `funil-cgcc-androclinic.html`.

**O framework.** Conhece é atração, Gosta e Confia são qualificação e Compra é conversão. A tese da aula: quase tudo o que o mercado faz é peça de compra, e por isso satura a base e entrega lead sem preparo.

**O funil de hoje**
- **Conhece.** A base de 59 mil seguidores e 4,15 mil inscritos. O que trouxe essa base não foi medido. O link da bio passa por dois redirecionamentos e termina numa agenda que mostrava "Nenhuma data disponível".
- **Gosta.** Não há peça dedicada. Os vídeos têm ingredientes de gosta (o médico explica, o caso identifica), mas rodam como compra.
- **Confia.** Existem duas peças prontas e nenhuma no ar (a copy de confiança e a razão por que). A prova que está no ar trabalha contra: contadores zerados, oito depoimentos de nome abreviado, o Craque Neto e o selo do Reclame Aqui.
- **Compra.** 26 dos 30 anúncios pedem a compra na fala. Os destinos vendem consulta a "R$ 500 por R$ 196/197", com cronômetro e "apenas 8 consultas com desconto este mês". Depois, o consultor vende o pacote.

**O diagnóstico.** Quase todo o tráfego pago entra em Compra sem passar por Gosta e Confia. A pesquisa não prova o efeito sobre CAC, saturação da base nem qualidade do lead. Esses números não existem e precisam ser medidos.

**O funil proposto**
- **Conhece.** Vídeo curto do médico que responde "é normal?" e "tem tratamento?". Gera seguidor.
- **Gosta.** Série do mesmo médico para quem já segue: explicação, cena encenada de processo, pergunta respondida. Gera engajamento.
- **Confia.** Isca de conteúdo com consentimento destacado (guia "perguntas para levar à consulta" e página "é normal?") e prova que o visitante confere sozinho. Gera lead.
- **Compra.** Consulta com preço único e médico identificado, para lead e engajado. Gera consulta paga.
- **A parceira** entra em Conhece e Gosta, com conteúdo que ela leva a ele. Depende de a clínica aceitar a parceira na consulta (N1).

**A régua do "gosta" para médico.** A aula ensina gosta por personalidade, palavrão e piada. O que um médico não pode é usar a personalidade para se enaltecer (art. 11, XVI e §2º, "a", e §3º).
- Permitido: escuta mostrada, clareza, identificação em terceira pessoa, constância do mesmo médico e limite admitido.
- Fora: personalidade como atração, palavrão e gíria de vendedor, piada sobre colega, escassez sem prova e bravata.

**Cuidados de lei no funil**
- Cena de consulta só encenada, com ator ou ilustração. Consulta real e paciente real ficam fora (art. 11, VIII, citado pelo revisor e não relido no texto oficial).
- A página "é normal?" não pode trazer autoavaliação, e o pixel nela fica sem evento.
- Meta de alcance sobre a base de 59 mil é Gosta, não Conhece.

**Depois da compra.** Receita ao fim da consulta, com assinatura ICP-Brasil e sem condição de compra (exige a pendência 4). Nome e preço do tratamento ditos na consulta. Retorno com data marcada. Reavaliação em até 30 dias como garantia de processo. Desistência em 7 dias.

**Métricas.** Para cada etapa, o funil lista o que medir, e quase tudo está como `[medir]`. O R$ 0,80 por seguidor citado na aula é referência do instrutor, não da AndroClinic.

**O que falta, em ordem**
1. Medir o que roda: pedir o relatório do Gerenciador de Anúncios dos 30 anúncios e ler os 335 posts e o YouTube.
2. Conhece e Gosta do perfil A, com a página "é normal?".
3. Isca e formulário com consentimento.
4. Correções do ICP nas cópias.
5. Roteiro da peça só para a parceira e da peça de nível 2 da DE física.

---

## 11. Copys produzidas

Nenhuma sobe antes do Bloco 13, do advogado e das pendências. Todas trazem marcadores [Dr. Nome, CRM-UF número], [valor da consulta], [link] e [registro da clínica no CRM-UF].

**Razão por que (16 características).** Cada uma tem cinco colunas: característica, por que, benefício funcional, dimensionalizado e emocional. Só uma vale hoje: a consulta por vídeo. As outras 15 dependem de uma decisão do cliente ou têm relato contrário. A investigação antes da receita, por exemplo, só vira copy se a venda deixar de acontecer na mesma chamada.

**Ângulos das 8 motivações (45 peças).** Nove ângulos em três perfis. Cada um traz 3 ganchos de vídeo, 1 frase de teste e 1 cena vívida.
- Escolhidos: "o corpo inteiro entra na consulta", "saber o que toma antes de começar", "você decide", "é normal?", "relação nova", "decida com a causa na mão", "ela e ele, juntos", "contar a ela é cuidar" e "a vontade tem causa".
- Ficaram de fora: comida e bebida (sem apoio na pesquisa), conveniência e aprovação social (ângulos gastos) e "vencer" (cai em desempenho, que a Meta barra).
- O ângulo de medo ficou fraco. O art. 11, §2º, "e" (medo, intranquilidade, insegurança) forçou a retirada de "vicia?" e da cena da madrugada.
- Correções do ICP aplicadas em B3-F, C1-G1, C1-F e C1-C.

**Cópias das 8 motivações.** Oito ângulos, cada um com roteiro de vídeo, carrossel de 7 slides (as cópias 3, 4 e 8 depois das correções), legenda e banner 1080x1350. Os ângulos: aproveitar a vida inteira, a mesa, pode perguntar, cuidado a dois, a consulta de casa, leve suas perguntas por escrito, a lista da casa e conferir. Foram escritas sem placar nem nota de risco, a pedido do Rafael. A espinha "antes do comprimido, a pergunta: por quê?" foi retirada depois do revisor, porque ancorava a peça em remédio. A substituta é "a consulta começa pelo porquê".

**Copy de confiança e a objeção do presencial.**
- Estrutura: bloco "online ou presencial", FAQ de 14 perguntas, bloco "quem é a clínica", frases de "admitir falha", e três vídeos e duas respostas de WhatsApp.
- A posição é "cada formato tem seu lugar", dita sem rodeio, incluindo o que a consulta online não faz.
- A objeção "presencial é mais garantido" é hipótese do Rafael. Não há citação de cliente dizendo isso. A evidência é indireta.
- Oito peças estão em vermelho, porque mandam conferir CRM, CNPJ e endereço, e esses dados hoje não batem.

**Roteiro da reunião com os donos.** Seis perguntas, em ordem de prioridade: médico e RQE, farmácia, receita sem compra, preço único e retorno, parceira na consulta, e domínio, WhatsApp e endereço. Cada uma traz o que destrava, a pergunta de acompanhamento e o material a pedir. Traz também a ordem de condução (fáceis, depois as delicadas, depois a parceira) e duas folhas para imprimir.

---

## 12. Diagnóstico das duas páginas

Fonte: `analise-pagina-androclinic-atual.html` e `analise-pagina-institucional-androclinic.html`, ambas de 02/10/2026.

### 12.1 Resumo das duas análises

As duas análises usam a rubrica do Gabriel (aula analisada) e não substituem parecer jurídico.

- **Landing `drestivalet.andromedicina.com`.** Nota 132 de 300. A estimativa anterior, de 118, saiu de uma miniatura e foi substituída. Credencial forte, execução com formato de infoproduto. A análise foi feita a partir de um print lido em oito fatias.
- **Institucional `androclinic.com.br`.** Sem nota, porque a régua de 300 pontos não se aplica a uma página sem oferta, garantia nem urgência. A análise foi feita sobre o HTML completo da home.

**A tese comum.** A AndroClinic já escreveu a página certa, a institucional. A landing foi construída contra ela. O paciente que pesquisa o nome vê as duas. Quando nota a diferença, ele não conclui que a clínica tem dois públicos. Conclui que uma das duas está mentindo.

**Um erro corrigido na própria análise.** A análise da landing chamava a página de "concorrente" no chat. Ela é a página atual da própria AndroClinic.

**O que as duas análises não cobriram.**
- Landing: mobile, destino dos botões, comportamento do quiz e respostas do FAQ. Só os títulos das perguntas aparecem no print.
- Institucional: não foi aberta no navegador. Não testou mobile, velocidade nem páginas internas.
- Nenhuma testou se os cronômetros reiniciam nem se os contadores são animados por JavaScript.

### 12.2 Landing `drestivalet.andromedicina.com`

**Nota por eixo** (de 25 pontos cada, exceto o total)
- Autoridade 17, dobra "como funciona" 17, H2 e subheadline 14, primeira dobra 14, design e fluxo 14.
- Oferta e preço 12, H1 11, coerência global 9, prova social 8, mecanismo 7, garantia 6, urgência e escassez 3.

**O que puxa a nota para cima**
- Médico em vídeo, com nome e jaleco, na primeira tela.
- Quatro passos claros do "como funciona".
- O bloco do Dr. Cristiano, com nome, CRM-DF 15471, 12 anos de dedicação e a frase "sem tabus, sem preconceitos".
- O preço no botão ("Agendar minha consulta por R$ 197").
- O Reclame Aqui com período e números, a única prova que o paciente confere fora da página.
- O bloco de sigilo, que nomeia o medo de exposição.
- O rodapé com alvará, ANVISA, CNPJ, médico responsável, endereço e ouvidoria.

**O que puxa a nota para baixo**
- Dois cronômetros de quase 24 horas, "últimas 3 vagas" repetido, "última chance" e "encerram hoje".
- Fotos de antes e depois ("sua potência restaurada!") e quatro depoimentos com resultado e nomes genéricos.
- "Resultados rápidos e eficazes", "método revolucionário" e "milhares de homens" sem fonte.
- "De R$ 500 por apenas R$ 197" sem critério para o preço cheio.
- Craque Neto como recomendação, com selo "Parceiro Oficial".
- H1 com três promessas empilhadas ("potência, confiança e desempenho") e o verbo "recupere".
- Porsche Cup como metáfora de potência.
- A página nunca diz o que vem depois dos R$ 197.
- Quatro grafias da marca: AndroClinic, Androclinica, `androclinica.com.br` e `andromedicina.com`.
- "Hoje" e "esta semana" na mesma página.
- Não existe garantia, política de remarcação nem de cancelamento.

**Os seis itens para o gate jurídico**
1. Fotos de antes e depois. O formato é de antes e depois, mesmo que as imagens pareçam de banco.
2. Depoimentos com resultado.
3. Promessa de resultado.
4. Preço, desconto e prazo como gatilho de urgência.
5. Celebridade como recomendação.
6. Responsável técnico com CRM-DF numa clínica sediada em Florianópolis.

**O que eu mudaria, bloco a bloco**
- **H1.** Hoje: "Recupere sua potência, confiança e desempenho." Proposto: "Disfunção erétil, ejaculação rápida e queda de libido têm causa. A consulta é onde ela aparece." Nomeia as dores, troca promessa de retorno por diagnóstico e continua falando com quem se reconhece.
- **Subheadline.** Tirar "eficaz". Pôr o CRM e uma linha de sigilo. Depende da pendência 2 e do que a operação faz com o sigilo.
- **Porsche Cup.** Tirar a metáfora. Se o patrocínio for real, uma linha de selo no rodapé.
- **Reportagem.** Nomear o veículo, a data e o link. Tirar "revolucionário" e "milhares".
- **Antes e depois.** Trocar o bloco por "O que você leva da primeira consulta": hipótese diagnóstica, exames solicitados, conduta explicada e o que acontece em seguida, sem foto de pessoa. A consulta de 10 a 25 minutos que o público relata é o que esse bloco tem de ser capaz de sustentar.
- **Depoimentos.** Trocar por "Perguntas que os pacientes fazem antes de marcar", com as seis do FAQ respondidas na própria página. O Reclame Aqui fica, e os 57,1% e a nota do consumidor 6,71 ganham comentário.
- **Escassez.** Trocar por "Agenda do Dr. Cristiano: próximos horários livres", com datas reais e sem cronômetro. É a única escassez que cabe numa clínica.
- **Oferta.** Um preço só, com a explicação de que, se o médico indicar tratamento, ele explica opções e custos na consulta e o paciente decide depois. Depende da pendência 4 e do gate sobre exibir preço. Os bônus ("diagnóstico pessoal avançado", acesso VIP, e-book) saem, porque o diagnóstico se faz na consulta.
- **Sigilo.** Subir para a primeira dobra, ao lado do botão, com o mecanismo: quem vê o agendamento, onde fica o prontuário, o que aparece na fatura.
- **Fechamento.** Tirar "última chance", "encerram hoje" e o segundo cronômetro. Ficar com "Você merece voltar a ter confiança. Marque sua consulta", com a próxima data livre e um único botão.
- **Marca.** Uma grafia só em texto, rodapé, citação e vídeo. A decisão é do cliente.
- **Quiz.** Cobre uma só dor, enquanto a página lista quatro sintomas. Precisa de uma saída para cada sintoma, e o destino do "Sim" precisa ser conferido.

**O que não mexer.** O médico em vídeo na primeira tela, os quatro passos, o bloco do Dr. Cristiano, a dobra de sigilo, o preço no botão e o rodapé de conformidade.

**Ordem de ataque**
1. Gate jurídico antes de qualquer reescrita. Sem isso, a página pode sair do ar.
2. Tirar os dois cronômetros e "última chance".
3. Contar o que vem depois da consulta (pendência 4).
4. Subir o sigilo e o CRM para a primeira dobra.
5. H1 sem promessa de retorno e Porsche Cup fora da narrativa.
6. Nomear a reportagem e comentar o Reclame Aqui inteiro.

### 12.3 Institucional `androclinic.com.br`

**O que ela tem de valor**
- O diretor técnico com nome, especialidade declarada e CRM logo abaixo do hero.
- Sete médicos com CRM completo, e o "(Não especialista)" onde se aplica. A análise vê isso como honestidade rara.
- A frase de processo "analisamos seu histórico para investigar e mapear a causa exata do problema", que promete investigação, não cura.
- O FAQ "Transparência sobre o seu tratamento", o melhor bloco da página: exames só depois da primeira consulta, atendimento particular com recibo para reembolso, "a medicina não trabalha com receitas prontas" e a medicação como "ponte" temporária.
- Os artigos assinados pelo diretor técnico.
- O schema e o rodapé de conformidade, com razão social, CNPJ, alvará, endereços, privacidade e termos.

**Os quatro itens para o gate jurídico**
1. Promessa e autopromoção ("restaurar a potência, confiança e desempenho", "referência", "medicina baseada em resultados") e a frase do FAQ "a grande maioria dos pacientes relata melhoras significativas e seguras já nas primeiras semanas".
2. Reposição hormonal ligada a massa muscular e libido. Existe resolução do CFM sobre hormônio para ganho de massa e desempenho.
3. Título de "especialista". O Dr. Cristiano é "Médico em Saúde Masculina", e nenhum RQE aparece em lugar nenhum.
4. Diretor técnico com CRM-DF numa clínica sediada em Florianópolis.

**Os buracos que ela compartilha com a landing**
- Preço invisível.
- "O que vem depois da consulta" sem resposta.
- Prova numérica sem fonte: "+200.000 avaliações realizadas" e "+10 anos no Brasil", que aparecem como "+0" sem JavaScript. Em dez anos com sete médicos, são cerca de 20 mil avaliações por ano.

**O que eu mudaria**
- **H1.** Hoje: "Referência em Saúde Sexual e Performance Masculina." Proposto: o mesmo H1 da landing, para a voz única começar aqui.
- **Subheadline.** Trocar as três promessas por "Consulta online, de 1 para 1, com médico. [Quem vê o agendamento, onde fica o prontuário.] Sem plano de saúde, com recibo para reembolso."
- **Passos 3 e 4.** Tirar "Protocolo Exclusivo" (nome sem conteúdo) e "Inicia sua transformação". Dizer que, se o médico indicar tratamento, ele explica as opções, o custo e o tempo de acompanhamento na consulta. A frase "baseado unicamente na sua fisiologia e nos seus exames" contradiz o FAQ, que pede exames só depois da primeira consulta.
- **Botões dos três cards.** Hoje todos dizem "Detalhes do Tratamento". Cada um deveria dizer qual dor resolve.
- **Corpo clínico.** Um padrão fixo de três linhas por médico: formação, RQE se houver e "na AndroClinic, atende [o quê]". Dois bios são quase idênticos e quatro não dizem o que o médico faz. A menção a "plataformas como a Telemedico" no bio revela a operação e merece decisão.
- **Contadores.** "[Definição] realizadas entre [ano] e [ano]", com valor fixo no HTML e a animação só por cima.
- **FAQ.** Subir para logo depois dos quatro passos. Acrescentar "Quanto custa a consulta?" e "E se o médico indicar tratamento, quanto custa?". É a dúvida mais prática e a única que o FAQ pula.
- **Agendamento.** Um destino com a marca da clínica, no lugar do salto para `agendamento.andromens.com.br`. Um só WhatsApp, com a frase "para dúvidas antes de marcar".
- **Artigos.** Fim de cada artigo com um próximo passo. Nos temas que a clínica não trata (vasectomia, varicocele, infertilidade), dizer que o caso é de outro especialista e que podem indicar.
- **Rodapé.** Reavaliar "Site desenvolvido por Agência Nuvion", que o paciente não precisa ver.

**O que não mexer.** O diretor técnico com CRM logo abaixo do hero, o CRM de cada médico, o "(Não especialista)", o FAQ honesto, os artigos assinados, o schema e o rodapé de conformidade.

**Ordem de ataque**
1. Unificar a voz entre a institucional e a landing. A institucional é a referência.
2. Gate jurídico nos quatro itens.
3. Mostrar o preço da consulta e dizer o que vem depois.
4. Contadores com definição e valor fixo no HTML.
5. Reescrever o H1 e subir o FAQ.
6. Padronizar os bios do corpo clínico.

### 12.4 O que as duas análises, lidas juntas, pedem

**A página que sai da AndroClinic.** Ela herda da institucional a voz, o FAQ honesto, o corpo clínico e o rodapé. Herda da landing o médico em vídeo na primeira tela, os quatro passos, o bloco do Dr. Cristiano, o preço no botão e o bloco de sigilo, que sobe.

**O que sai de vez.** Cronômetros, "últimas vagas", "última chance", antes e depois, depoimentos com resultado, Craque Neto, Porsche Cup como argumento, "método revolucionário", "milhares de homens", "R$ 500 por R$ 197", "resultados rápidos e eficazes", "sua potência restaurada" e "avaliação gratuita".

**O que entra.** "O que acontece na sua consulta", em quatro passos. A regra escrita do retorno. O preço da consulta aberto, e o que vem depois dele dito antes da compra. O sigilo com mecanismo. O CRM conferível. Um FAQ com as perguntas de preço.

**As frases que dependem do cliente.** Todas as que dizem "ninguém vai te vender nada na mesma chamada", "você recebe a receita" ou "o retorno está incluído" só podem subir se a operação comercial mudar. Sem isso, viram a próxima reclamação.

**Conexão com o resto do projeto**
- A landing é a etapa Compra do funil. A institucional é Confia.
- O H1 proposto, o passo a passo e o FAQ da copy de confiança servem às duas páginas.
- A promessa dos vídeos (investigação da causa, consulta com o Dr. Cristiano, preço de R$ 197) precisa aparecer idêntica na página, com o mesmo médico, o mesmo preço e a mesma promessa.
- O sigilo, que a pesquisa mostra como condição de entrada, precisa de regra escrita, porque há três relatos de consulta gravada sem aviso.

**O que decide a ordem.** Antes de reescrever qualquer página, fecham-se as pendências 1, 2 e 4, e o advogado lê os dez itens do gate das duas análises. A página que subir sem isso pode ser retirada.

---

## 13. Erros e correções do processo

Este bloco existe para você saber onde não confiar em frases antigas do histórico.

**Erros nas minhas afirmações, corrigidos**
- Disse que a pesquisa achou nove anúncios de junho. A leitura direta das transcrições dá 18 anúncios, com 15 vídeos distintos. O 9 vinha da F3, que contou 26 anúncios por estimativa.
- Disse "quatro médicos passam de 700 mil" no YouTube. A medição dá três no YouTube e um no Instagram. A frase misturou as duas redes.
- Disse que nenhum dos cinco concorrentes tinha médico falando nos anúncios, com base em dois vídeos. Depois conferi também o Dr. Formen. A conclusão se manteve, agora com base melhor.
- Disse que seis páginas usavam personagem de jaleco. Só três usam (Marcia Moraes, Lucy Ghelfi e Moacyr Salles).
- Disse que nenhum concorrente falava com a parceira. É forte demais: o vídeo "sócios" da própria AndroClinic fala com o casal, e a Bluue roda por criadores de casal.
- Disse que o estágio 5 de sofisticação não tinha evidência. Há pistas, só nada confirmado.
- Citei "50 camadas" como frase de concorrente. A frase vinha da analogia do cigarro da aula ("filtro com 10 mil camadas"), não da pesquisa.
- O funil propunha "cenas de consulta gravadas". O revisor apontou o art. 11, VIII, que veda expor imagens de consultas em tempo real. A proposta virou "cena encenada, com ator ou ilustração".
- O rodapé do funil dizia que o texto oficial da CFM 2.336 foi conferido. Era falso. Corrigi para "não verificado no texto oficial, exceto o que o briefing e a F5 citam".
- Escrevi uma citação composta ("45 dias depois, doutor, joguei o Viagra fora"). A fonte diz outra coisa. Troquei pelo trecho literal.
- O roteiro da reunião trazia "sem gerar reclamação nem processo no CRM" na abertura. Dito aos donos, soa como ameaça. Saiu.
- A abertura do roteiro chamava a nota 8,7 e os 59 mil seguidores de "coisas fortes" para a copy aproveitar. O briefing manda deixar os dois fora das peças.

**O que a segunda leitura do funil ainda deixa aberto**
- Cerca de 22 frases acima de 25 palavras.
- As medições de 02/10 (Matheus Amaral, Samira Posses e seguidores do Instagram) só estão no funil. Ninguém conferiu.
- Vários artigos de lei citados não foram achados nos arquivos do briefing nem nas frentes: art. 11, VIII, art. 9º XII, IV e XV, art. 8º III, art. 13 III e art. 14 I.

**Reprovações do revisor, por peça (primeira leitura)**
- Relatório de pesquisa: números sem link e afirmações além das fontes. Corrigido.
- Briefing: um número inflado (R$ 12,99 por 4 comprimidos virou "o comprimido custa R$ 12,99"), que viraria copy falsa. Corrigido.
- Tabela razão por que: cinco linhas que, copiadas para anúncio, virariam infração. Corrigido.
- Copy dos ângulos: cinco cenas que afirmavam a condição do leitor em segunda pessoa, depois o medo do art. 11, §2º, "e". Corrigido em três rodadas.
- Copy de confiança: cinco bloqueios, entre eles frases clínicas sem a marca do diretor técnico e "a clínica não promete resultado", falsa enquanto o site antigo prometer garantia.
- Copys das 8 motivações: dez bloqueios, entre eles a espinha "antes do comprimido", que aparecia 28 vezes.
- ICP: cinco bloqueios de consistência, depois dois de marcação, resolvidos com uma régua só.
- Roteiro da reunião: cinco bloqueios, entre eles a abertura que dizia ao cliente que a nota 8,7 seria usada.
- Funil: seis bloqueios na primeira leitura e três na segunda.

**Problemas de método**
- Houve vários limites de uso da sessão no meio do trabalho. Em um caso o agente parou antes de gravar qualquer correção, e em outro deixou o arquivo pela metade. Conferi por busca de texto.
- Algumas correções finais foram aplicadas por mim sem releitura do revisor. Cada entrega diz quais.
- O squad v4.1.0 não tem agente revisor. A segunda leitura do funil foi feita por um agente de uso geral, com os mesmos critérios.

---

## 14. Acertos

- **A descoberta central.** O modelo de venda, e não a falta de copy, é o problema. Ela mudou o tratamento de todas as peças depois.
- **Separação de fato, suposição e pista.** Evitou que reclamação virasse veredito e que número de terceiro virasse achado.
- **A recusa de copy não publicável.** Todo ângulo e peça nasceram dentro da regra, em vez de pedir ao cliente depois para cortar.
- **A fala do público como base.** Autocompletar e citações com link reduzem o risco de inventar linguagem.
- **Os vídeos como melhor ativo.** A análise dos 24 vídeos mostrou que a criação está certa e que o funil depois dela desmente a promessa.
- **A correção da sofisticação do mercado.** Passou de "estágios 4 e 5" para "2 a 4", com evidência.
- **A régua única de nível por peça.** Resolveu a marcação desigual das 53 peças.
- **A cadeia de revisão.** Pegou erros reais: número inflado, citação composta, abertura de reunião que usaria a nota como prova, cena de consulta real.
- **O roteiro da reunião.** Destrava as pendências que travam tudo, com perguntas, material e enquadramento.
- **Os dois diagnósticos de página.** Mostram qual página é a base e qual é a que desfaz o trabalho.

---

## 15. Pendências e próximos passos

### Pendências bloqueantes (só o cliente responde)

1. **Vínculo entre a clínica, a Andro Pharma Ltda e a farmácia que manipula.** Entregar CNPJ da Andro Pharma e da farmácia, e dizer quem recebe o pagamento do tratamento.
2. **Diretor técnico com CRM/UF e RQE.** Entregar certidão de RQE e o registro da clínica no CRM do estado-sede.
3. **Oferta de entrada.** Consulta paga a preço único, avaliação gratuita ou quiz com escassez. Preço único e prova do preço de R$ 500, ou retirada dele. Se o retorno é incluído sem custo.
4. **A operação comercial pode mudar?** Receita sem compra, nome e preço do tratamento antes do pagamento, fim da venda na mesma chamada da consulta.
5. **Craque Neto.** Contrato e escopo, ou saída.
6. **Domínio, WhatsApp e endereço oficiais.**
7. **Parecer do advogado da saúde.** Roda sobre toda peça e sobre os dez itens de gate das duas análises de página.
8. **N1.** A parceira pode participar da consulta, com consentimento dele? Trava a Cópia 4, o ângulo "ela e ele, juntos" e o perfil D.

### Pendências não bloqueantes (as principais)

- Transcrever e analisar os vídeos mais antigos dos concorrentes que faltam (Boston Medical BR, Instituto Vida Masculina e Instituto UroMen) e abrir o Google Trends.
- Conferir no navegador se os contadores aparecem zerados e se os cronômetros reiniciam.
- Abrir os destinos que a pesquisa não leu: `andromens.com.br/formcris`, `/home`, `andromedicina.com/iniciov2` e `clinica.andromedicina.com/presencial`.
- Pedir o relatório do Gerenciador de Anúncios dos 30 anúncios: público, gasto, resultado e custo por consulta paga.
- Perfil dos compradores atuais, que decide a ordem dos três perfis.
- Origem dos oito depoimentos do site e das duas avaliações positivas do Reclame Aqui.
- Número de WhatsApp das páginas com nome de pessoa, para verificar se são uma só operação.

### O que eu faria a seguir, em ordem

1. **Reunião com os donos**, com o roteiro pronto, para fechar as pendências 1, 2 e 4.
2. **Medir o que roda**, pedindo o relatório dos anúncios. Nenhum corte de vídeo antes de ver os 18 de junho.
3. **Gate jurídico**: levar ao advogado os itens das duas análises, os pontos do briefing e os artigos de lei que o revisor não achou nas fontes.
4. **Reescrever a página de entrada** (jovem com ejaculação precoce), com o H1, o passo a passo, o sigilo com mecanismo e o FAQ com preço, e voz única com a institucional.
5. **Gravar a série de ejaculação precoce** com o Dr. Cristiano, no formato dos vídeos atuais, com nome, CRM e a palavra MÉDICO na tela.
6. **Só depois**: Big Idea, brandbook e as peças que dependem das pendências.

**Se a operação comercial não mudar.** A campanha segue só com os ângulos 1, 2, 4 e 5 do briefing, e a promessa se reduz a médico identificado, preço da consulta aberto e retorno incluído. Qualquer frase "confira antes de pagar" que passe desse limite vira a próxima reclamação.

---

*Dossiê montado a partir dos arquivos da pasta `androclinic/` e do histórico de trabalho até 04/10/2026. Não substitui parecer jurídico.*
