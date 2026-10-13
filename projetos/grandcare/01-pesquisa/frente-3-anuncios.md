# Frente 3 — Varredura de anúncios do nicho (GrandCare)

Coletado em: 13/10/2026 · Responsável: @researcher (frente 3 de 5) · Status: **INCOMPLETA, bloqueio de ferramenta**

## Conclusão primeiro

Nenhum anúncio foi lido nesta frente. A contagem real é zero na Biblioteca de Anúncios do Meta, zero na Central de Transparência do Google e zero em resultados patrocinados da busca do Google. Por isso este arquivo não traz ângulos saturados, promessas recorrentes nem nível de sofisticação medido em anúncios: qualquer coisa nesse sentido seria inventada.

O motivo é de ambiente, não das fontes. Esta sessão do agente não tinha acesso ao terminal (Bash), então a ferramenta `ler-pagina.mjs` não pôde ser executada. O WebFetch falhou nas duas bibliotecas com `getaddrinfo ENOTFOUND` (www.facebook.com e adstransparency.google.com), como o briefing já previa. O WebSearch funciona, mas devolve só resultados orgânicos: não mostra quem aparece como patrocinado.

O que foi possível fazer: levantar pela busca os concorrentes que disputam as mesmas cidades e os domínios deles, que são exatamente as entradas que a varredura de anúncios precisa. A fila pronta para rodar está na seção 4. Rodando a ferramenta pelo terminal, a varredura completa leva poucas chamadas.

## 1. Contagem de anúncios lidos

| Fonte | Anúncios lidos | Situação |
|---|---|---|
| Biblioteca de Anúncios do Meta (BR, ativos e todos) | 0 | Bloqueio de ferramenta: sem Bash; WebFetch com ENOTFOUND |
| Central de Transparência do Google (domínios) | 0 | Mesmo bloqueio |
| Busca do Google pelo navegador (patrocinados) | 0 | Mesmo bloqueio; WebSearch não exibe anúncios |
| **Venda de serviço / recrutamento / cursos e franquias** | 0 / 0 / 0 | Separação não pôde ser feita |

Referência que não é desta frente: o briefing registra 8 anúncios no domínio grandcarebrasil.com.br na Central de Transparência do Google (FATO segundo o briefing, lido em 13/10/2026 por outra sessão). A análise desses anúncios é da frente que cuida dos anúncios da própria GrandCare.

## 2. Bloqueios registrados

**Bloqueio 1 — Biblioteca de Anúncios do Meta.** Data: 13/10/2026. Causa: sem terminal nesta sessão; WebFetch retorna ENOTFOUND. Deixou de ser verificado: anúncios ativos e inativos para as 8 palavras-chave pedidas ("cuidador de idosos", "cuidadora de idosos", "home care", "enfermagem domiciliar", "cuidados domiciliares", "idoso Florianópolis", "Alzheimer cuidador", "casa de repouso Florianópolis") e para os nomes dos concorrentes; datas de início, formatos, textos, destinos.

**Bloqueio 2 — Central de Transparência do Google.** Data: 13/10/2026. Mesma causa. Deixou de ser verificado: se algum dos domínios da seção 3 anuncia no Google, há quanto tempo e com qual texto.

**Bloqueio 3 — Patrocinados na busca do Google.** Data: 13/10/2026. Mesma causa, e o WebSearch não mostra anúncios. Deixou de ser verificado: quem compra "home care Florianópolis", "cuidador de idosos Florianópolis" e "cuidador de idosos Balneário Camboriú".

**Observação de método (PISTA).** Segundo material de terceiros indexado na busca (metricool.com, 13/10/2026), em algumas regiões a busca por palavra-chave da biblioteca do Meta só cobre anúncios políticos e sociais, e anúncios comuns aparecem apenas pela página do anunciante. O briefing diz que a biblioteca abriu no Brasil com a ferramenta, mas não diz se a busca por palavra-chave trouxe anúncios comerciais. Na rodada com terminal, vale procurar também pela página de cada concorrente, não só pela palavra-chave.

## 3. Concorrentes achados (entradas para a varredura)

Todos achados por WebSearch em 13/10/2026. O que cada um diz de si é PISTA; nenhum site foi lido por inteiro nesta frente.

**Ravivare Home Care** · ravivarehomecare.com.br
Serviços: cuidadores de idosos, acompanhamento hospitalar, enfermagem e fisioterapia domiciliar. Diz atender Florianópolis, São José, Palhoça, Biguaçu e litoral catarinense (PISTA). Sobreposição com a GrandCare: alta, mesma região e mesmo pacote cuidador + hospital + enfermagem.

**Zathos Care** · zathoscare.com.br
Sede em Florianópolis, fundada pela enfermeira Carolina Savi; atende idosos, pós-operatório e necessidades especiais; equipe com enfermeiros, cuidadores, fisioterapeutas e nutricionistas (PISTA). Sobreposição: alta, e com o mesmo argumento de fundador da enfermagem que a GrandCare usa (Edemilson Albarnas).

**Senescence Brasil** · senescencebrasil.com.br
Fundada em 2020; fisioterapia, fonoaudiologia, nutrição, atendimento domiciliar (PISTA). Tem páginas por termo de busca: `/atendimento-home-care-florianopolis` e `/empresa-home-care-florianopolis` (FATO: URLs presentes nos resultados de busca, 13/10/2026).

**To Care Enfermagem Domiciliar** · tocare-enfermagem.com.br
Páginas `/home-care-cuidador-idosos-florianopolis` e `/home-care-idosos` (FATO: URLs nos resultados). O resumo da busca diz que a página repete listas de palavras-chave (PISTA). SUPOSIÇÃO: aposta em busca do Google com páginas por cidade; candidata forte a também comprar anúncio no Google.

**Home Mater Cuidadores** · homemater.com
Rede com páginas por cidade: `/florianopolis/` e `/bc/` (FATO: URLs nos resultados). Oferece cuidadores, acompanhante hospitalar e enfermagem, com equipe que inclui nutricionistas e fisioterapeutas; tem avaliações de clientes no site (PISTA). Sobreposição: alta, cobre duas das praças da GrandCare.

**Homecare Floripa** · homecarefloripa.com.br
Página "cuidador a domicílio em Floripa" (FATO: URL nos resultados). Conteúdo não lido.

**Angels At Home** · angelsathome.com.br
Itajaí, Navegantes, Piçarras, Balneário Camboriú, Barra Velha e Jaraguá do Sul; técnicos de enfermagem e cuidadores; "24h, 7 dias por semana", contato por WhatsApp (PISTA). Sobreposição: Itajaí e Balneário Camboriú, e o mesmo argumento de atendimento 24h por WhatsApp que a GrandCare usa.

**Cuidar Home Care / Cuiofertar** · domínio próprio não achado (aparece em portaldacotacao.com.br)
Sede em Itajaí; diz atender Itajaí, Balneário Camboriú, Camboriú, Navegantes, Itapema, Barra Velha, Blumenau, Penha, Piçarras, Brusque e Gaspar; "mais de 7 anos" (PISTA). Itapema é vizinha de Porto Belo.

**Cuidadores do Bem** · cuidadoresdobem.com.br
Sede em Balneário Camboriú e outra na região de Curitiba, atuação nacional, enfermagem domiciliar e cuidadores (PISTA).

**Home Care Hospital** · homecarehospital.com.br (subdomínio atendimento.)
Tem página "home care domiciliar Florianópolis", mas a sede indicada é Porto Alegre (PISTA). SUPOSIÇÃO: captação por busca em praça onde não opera diretamente; se anunciar, disputa o mesmo termo.

**Home Angels (franquia nacional)** · domínio não verificado nesta frente
Rede de franquias de cuidadores; "mais de 200 unidades" segundo o Portal do Franchising (2024, PISTA); unidade em SC encontrada só em Chapecó (2021). Presença na Grande Florianópolis: não achada. Importa para a separação de grupos: franquia costuma anunciar para dois públicos, família e investidor.

**Marketplaces e diretórios** (GetNinjas, Doctoralia, Cronoshare, StarOfService, Telelistas)
Aparecem nas buscas por cidade com profissionais autônomos. Doctoralia mostra atendimentos domiciliares em Florianópolis e São José entre cerca de R$ 150 e R$ 400 por visita (PISTA, resumo de busca, não conferido). SUPOSIÇÃO: são concorrentes de busca orgânica, não necessariamente de anúncio.

**Sem concorrente achado:** Porto Belo, Itapema e Imbituba não retornaram empresas próprias na busca. Isso é PISTA de gap regional, com uma fonte só (busca), e precisa ser cruzado com Google Maps e com a busca patrocinada.

## 4. Fila pronta para a rodada com terminal

Rodar a partir de `/home/user/workspace`. Aumentar `--rolar` se a página trouxer poucos anúncios.

Meta, por palavra-chave (trocar o termo em `q=`; rodar com `active_status=active` e depois `active_status=all`):
```
node squads/squad-arsenal/ferramentas/ler-pagina.mjs "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&q=cuidador%20de%20idosos&search_type=keyword_unordered" --max=30000 --rolar=6
```
Termos: cuidador de idosos · cuidadora de idosos · home care · enfermagem domiciliar · cuidados domiciliares · idoso Florianópolis · Alzheimer cuidador · casa de repouso Florianópolis · home care Balneário Camboriú · cuidador Itajaí.

Meta, por anunciante (busca pelo nome): Ravivare · Zathos · Senescence · To Care · Home Mater · Angels At Home · Cuidar Home Care · Cuidadores do Bem · Home Angels · GrandCare.

Google, por domínio (`https://adstransparency.google.com/?region=BR&domain=<domínio>`): grandcarebrasil.com.br · ravivarehomecare.com.br · zathoscare.com.br · senescencebrasil.com.br · tocare-enfermagem.com.br · homemater.com · homecarefloripa.com.br · angelsathome.com.br · cuidadoresdobem.com.br · homecarehospital.com.br.

Google, patrocinados (`https://www.google.com/search?q=<termo>&gl=br&hl=pt-BR`): home care Florianópolis · cuidador de idosos Florianópolis · cuidador de idosos Balneário Camboriú · enfermagem domiciliar Florianópolis · cuidador de idosos Itajaí · home care São José SC. Observação: o Google personaliza anúncios por localização; o navegador do ambiente não está em SC, então o resultado pode não refletir o que um morador de Florianópolis vê.

Para cada anúncio, registrar: anunciante, plataforma, data de início, formato, gancho e chamada literais, público aparente, ângulo (seção 3 da skill de tráfego), motivação (das 8), nível de consciência e destino. Classificar cada um em venda de serviço, recrutamento de cuidadores ou curso/franquia antes de tirar conclusão.

## 5. O que dá para dizer sem os anúncios (e com que força)

**Disputa por busca existe e é por cidade.** Pelo menos quatro concorrentes (Senescence, To Care, Home Mater, Home Care Hospital) têm páginas com o nome da cidade na URL, e a GrandCare chega por Google Ads segundo o briefing. FATO quanto às URLs; SUPOSIÇÃO quanto a isso indicar compra de anúncio. Só a Central de Transparência confirma.

**Argumentos que se repetem nas descrições dos concorrentes** (PISTA, resumo de busca, não são textos de anúncio): atendimento 24h e WhatsApp (Angels At Home, e a própria GrandCare), equipe multiprofissional com fisioterapia e nutrição (Ravivare, Zathos, Home Mater, Senescence), cuidado em casa e no hospital (Ravivare, Home Mater, GrandCare), fundadora ou fundador enfermeiro (Zathos, GrandCare). SUPOSIÇÃO: se esses argumentos também dominarem os anúncios, o mercado local está em sofisticação 2 a 3 (promessa repetida, sem mecanismo), e "24h", "humanizado" e "especializado" deixam de diferenciar. Isso precisa ser confirmado nos anúncios.

**Ruído esperado na busca.** As buscas por "cuidador de idosos" + cidade trouxeram vagas de emprego (BNE, Indeed, InfoJobs), cursos (Uninter, Faculdade Unimed, PlayTech) e programas públicos (CRAS de Camboriú, lista do Programa Abraço ao Idoso em Balneário Camboriú) antes de empresas. FATO quanto aos resultados de 13/10/2026. SUPOSIÇÃO: a biblioteca do Meta vai mostrar a mesma mistura, e a contagem por grupo é necessária antes de qualquer conclusão sobre saturação.

**Objeção que aparece fora dos anúncios.** Um projeto de marketplace (iFlora, página do MIT Launchpad) afirma que agências ficam com até 50% do valor pago ao cuidador (PISTA, uma fonte, sem data conferida). SUPOSIÇÃO: se esse discurso aparecer em anúncios de plataformas de autônomos, ele ataca diretamente o modelo de agência da GrandCare.

## 6. O que isso muda para as próximas fases

- **Avatar e oferta não devem usar esta frente como base de ângulo.** Não há evidência de anúncio para dizer o que está saturado. Usem as frentes de público e de concorrentes; esta frente só contribui com a lista de concorrentes e com a suspeita (SUPOSIÇÃO) de que "24h", "humanizado", "casa e hospital" e "equipe multiprofissional" são comuns a vários players.
- **Gap regional com uma fonte só:** Porto Belo, Itapema e Imbituba não mostraram empresa local na busca. Antes de virar ângulo ("a única que atende Porto Belo"), precisa de Google Maps e da busca patrocinada.
- **Copy:** evitar, por ora, apoiar a diferenciação em 24h ou WhatsApp, porque Angels At Home e outros dizem o mesmo. Fundador enfermeiro também não é exclusivo (Zathos).
- **Tráfego:** a ordem de prioridade é rodar a seção 4 antes de montar o plano de mídia; o plano depende de saber quem compra os termos de cidade no Google.

## Pendências

- `[medir]` Toda a varredura das seções 1 e 4. Sem ela, ficam sem resposta: ângulos saturados, ângulos livres, promessas recorrentes em anúncio, nível de sofisticação com evidência, tempo de veiculação dos prováveis vencedores e separação serviço / recrutamento / curso-franquia.
- Domínio da Home Angels e da Cuidar Home Care (Cuiofertar) não confirmado.
- Presença de concorrentes em Porto Belo, Itapema e Imbituba não verificada fora da busca orgânica.

## Fontes (consultadas em 13/10/2026)

- Tentativas bloqueadas: https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&q=cuidador%20de%20idosos&search_type=keyword_unordered · https://adstransparency.google.com/?region=BR&domain=grandcarebrasil.com.br
- https://www.ravivarehomecare.com.br/
- https://zathoscare.com.br/
- https://www.senescencebrasil.com.br/atendimento-home-care-florianopolis · https://www.senescencebrasil.com.br/empresa-home-care-florianopolis
- https://www.tocare-enfermagem.com.br/home-care-cuidador-idosos-florianopolis · https://www.tocare-enfermagem.com.br/home-care-idosos
- https://homemater.com/florianopolis/ · https://homemater.com/bc/
- https://homecarefloripa.com.br/cuidador-a-domicilio-em-floripa/
- https://atendimento.homecarehospital.com.br/home-care/home-care-cuidadores/home-care-domiciliar-florianopolis
- https://angelsathome.com.br/ · https://angelsathome.com.br/servico-de-cuidados-domiciliares-home-care-em-itajai-sc/
- https://saude-bem-estar.portaldacotacao.com.br/home-care/home-care-em-balneario-camboriu
- https://cuidadoresdobem.com.br/ · https://cuidadoresdobem.com.br/agencia/
- https://www.portaldofranchising.com.br/noticias/home-angels-ultrapassa-a-marca-de-200-unidades-franqueadas/ · https://www.portaldofranchising.com.br/noticias/home-angels-inaugura-unidade-em-santa-catarina/
- https://www.doctoralia.com.br/servicos-de-tratamento/atendimento-home-care-2/florianopolis
- https://orbit.mit.edu/launchpad/ideas/iflora
- https://metricool.com/facebook-ad-library/
- https://camboriu.sc.gov.br/?p=52785
- https://www.bne.com.br/vagas-de-emprego-para-cuidador-de-idoso-em-palhoca-sc
- https://www.uninter.com/cursos-tecnicos-e-profissionalizantes/cuidador-de-idosos/
