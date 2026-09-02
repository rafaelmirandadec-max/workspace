---
name: pesquisa-jurisprudencial
description: Metodologia e fontes de pesquisa jurisprudencial nos tribunais brasileiros (STF, STJ, TJ, TRT) — termos de busca, hierarquia normativa, filtros por tribunal e estrutura de citação de acórdãos e súmulas. Use ao pesquisar precedentes.
---

# Skill: Pesquisa Jurisprudencial — Metodologia e Fontes para Tribunais Brasileiros

```yaml
skill:
  id: pesquisa-jurisprudencial
  version: "1.0.0"
  updated: "2026-05-12"
  category: metodologia-juridica
  agents: ["pesquisador-juridico", "redator-peticoes", "redator-pareceres", "analista-processual"]
  description: "Metodologia de pesquisa jurisprudencial nos tribunais brasileiros — STF, STJ, TJ, TRT — com termos de busca, estrutura de citação e hierarquia normativa"
```

---

## 1. Hierarquia das Fontes Jurídicas

```
Constituição Federal (1988)
    └── Emendas Constitucionais
        └── Leis Complementares
            └── Leis Ordinárias / Medidas Provisórias
                └── Decretos Regulamentares
                    └── Normas Infralegais (portarias, instruções normativas)

Jurisprudência (não é fonte formal, mas tem força normativa):
    STF (vinculante: súmulas vinculantes + repercussão geral)
    STJ (uniformizador: recursos repetitivos + súmulas persuasivas)
    TJ / TRT (orientação local)
```

---

## 2. Tribunais e Competências

| Tribunal | Sigla | Competência | URL |
|---|---|---|---|
| Supremo Tribunal Federal | STF | Matéria constitucional, repercussão geral | portal.stf.jus.br |
| Superior Tribunal de Justiça | STJ | Direito federal infraconstitucional | www.stj.jus.br |
| Tribunal Superior do Trabalho | TST | Matéria trabalhista | www.tst.jus.br |
| Tribunal de Justiça (estados) | TJ + UF | Direito estadual e causas cíveis/criminais | ex: tjsp.jus.br |
| Tribunal Regional Federal | TRF | Causas federais de 1ª instância | ex: trf3.jus.br |
| Tribunal Regional do Trabalho | TRT | Causas trabalhistas regionais | ex: trt2.jus.br |

---

## 3. Tipos de Decisão e Força Normativa

### STF
| Tipo | Força | Descrição |
|---|---|---|
| Súmula Vinculante | **Vinculante** | Obriga todos os tribunais e administração pública |
| Repercussão Geral (tema) | **Vinculante** (após trânsito) | Tese fixada aplica-se a todos os casos idênticos |
| Acórdão Plenário | Persuasiva alta | Decisão do pleno, peso máximo |
| Acórdão de Turma | Persuasiva | Decisão da 1ª ou 2ª Turma |

### STJ
| Tipo | Força | Descrição |
|---|---|---|
| Recurso Repetitivo (tema) | **Obrigatório** para tribunais inferiores (art. 927 CPC) | Tese fixada em recursos repetitivos |
| Súmula | Persuasiva alta | Entendimento pacificado do STJ |
| Acórdão de Seção | Persuasiva alta | Seção especializada (S1 = público/tributário, S2 = privado) |
| Acórdão de Turma | Persuasiva | Decisão de cada turma especializada |

### TJ
| Tipo | Força | Descrição |
|---|---|---|
| Súmula | Persuasiva regional | Enunciado do próprio TJ |
| Acórdão de Câmara Especializada | Persuasiva local | Câmaras de Direito Privado, Imobiliário, Empresarial |

---

## 4. Turmas do STJ por Matéria

| Turma | Especialidade | Relevância para o escritório |
|---|---|---|
| 1ª Turma | Direito público (administrativo, fiscal) | Contratos com entes públicos |
| 2ª Turma | Direito público | Administrativo e tributário |
| 3ª Turma | Direito privado | **Civil, imobiliário, família, contratos** |
| 4ª Turma | Direito privado | **Civil, empresarial, consumidor** |
| 5ª Turma | Direito penal (habeas corpus) | Penal |
| 6ª Turma | Direito penal | Penal |
| S1 (1ª Seção) | Público | Conflitos entre 1ª e 2ª Turma |
| S2 (2ª Seção) | Privado | **Conflitos entre 3ª e 4ª Turma** |
| S3 (3ª Seção) | Penal | Conflitos entre 5ª e 6ª Turma |
| Corte Especial | Todos | Questões de maior relevância |

---

## 5. Estrutura de um Acórdão

```
ACÓRDÃO

RECURSO ESPECIAL Nº [X] — [Estado] ([UF])

RELATOR: Ministro/Ministra [Nome]
ÓRGÃO JULGADOR: [Turma/Seção/Plenário]
DATA DO JULGAMENTO: [data]
DATA DA PUBLICAÇÃO: [data no DJe]

EMENTA:
[Síntese do que foi decidido — 5 a 15 linhas]
1. [Tema 1]: [tese]
2. [Tema 2]: [tese]
[...]
RECURSO [PROVIDO / NÃO PROVIDO / PARCIALMENTE PROVIDO].

ACÓRDÃO:
[Relatório + Votos + Decisão]
```

**Como citar em petição:**
> "Conforme entendimento do Superior Tribunal de Justiça: *[transcrição da ementa ou trecho relevante]*. (STJ, REsp nº [X]/[UF], Rel. Min. [X], [Turma], julgado em [data], DJe [data])."

---

## 6. Termos de Busca por Área

### Direito Imobiliário
```
Compra e venda:
  "rescisão contrato compra venda imóvel" | "resolução contrato compra venda"
  "evicção imóvel" | "vícios redibitórios imóvel"
  "adjudicação compulsória" | "promessa compra venda"

Locação:
  "despejo falta pagamento" | "ação renovatória locação comercial"
  "retomada locatícia" | "fiança locatícia" | "benfeitorias locação"
  "indenização benfeitorias" | "locação residencial denúncia"

Incorporação:
  "rescisão contrato incorporação imobiliária" | "distrato imóvel"
  "patrimônio afetação" | "prazo entrega incorporação"
  "devolução valores adquirente" | "atraso entrega imóvel"

Usucapião:
  "usucapião extraordinária" | "usucapião especial urbana"
  "posse ad usucapionem" | "justo título boa-fé usucapião"

Condomínio:
  "taxa condominial" | "condômino inadimplente"
  "convenção condomínio" | "assembleia condominial" | "condômino antissocial"
```

### Direito Civil Geral
```
Contratos:
  "resolução contrato inadimplemento" | "exceção do contrato não cumprido"
  "cláusula penal" | "revisão contratual onerosidade excessiva"
  "teoria da imprevisão" | "força maior caso fortuito contrato"

Responsabilidade Civil:
  "responsabilidade civil subjetiva" | "dano moral material"
  "nexo causal" | "culpa concorrente" | "perda chance"
  "responsabilidade objetiva risco"

Família e Sucessões:
  "partilha bens" | "meação comunhão universal parcial"
  "alimentos" | "guarda filhos" | "inventário espólio"
```

### Direito Empresarial
```
"dissolução sociedade" | "exclusão sócio" | "apuração haveres"
"responsabilidade sócio" | "desconsideração personalidade jurídica"
"recuperação judicial" | "falência"
```

---

## 7. Súmulas Relevantes — STJ

### Civil e Contratos
| Nº | Enunciado |
|---|---|
| 54 | Juros moratórios fluem a partir do evento danoso (responsabilidade extracontratual) |
| 362 | Juros moratórios: dívida positiva e líquida, a partir da citação |
| 412 | Ação de cobrança de seguro DPVAT — prescrição trienal |
| 543 | Nas ações de revisão de contrato, a prescrição é decenal |

### Imobiliário
| Nº | Enunciado |
|---|---|
| 84 | Embargos de terceiro: admissível promessa de compra e venda sem registro |
| 239 | Arrendamento rural não se rege pela Lei 8.245/91 |
| 308 | Hipoteca firmada entre construtora e agente financeiro: ineficaz contra adquirentes |
| 477 | Falência da incorporadora: crédito do adquirente é quirografário quanto às parcelas pagas |

### Processual
| Nº | Enunciado |
|---|---|
| 568 | O relator, monocraticamente, não pode dar ou negar provimento a recurso quando houver necessidade de interpretação de cláusula contratual |
| 622 | A decisão que não examina os argumentos do recorrente viola o dever de fundamentação |

---

## 8. Súmulas Vinculantes — STF (Relevantes ao Escritório)

| Nº | Enunciado |
|---|---|
| 5 | A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a CF |
| 10 | Cláusula de reserva de plenário (declaração de inconstitucionalidade) |
| 37 | Não cabe ao Judiciário aumentar vencimentos de servidores com fundamento no princípio da isonomia |

---

## 9. Recursos Repetitivos STJ (Temas Relevantes)

| Tema | Assunto | Tese |
|---|---|---|
| 970 | Distrato de contrato imobiliário — percentual de retenção | Aplicação da Lei 13.786/2018 |
| 1076 | Usucapião e reconvenção | Admissibilidade de usucapião por reconvenção |
| 1095 | Responsabilidade civil — perda de chance | Requisitos para indenização |

---

## 10. Formato de Citação por Tipo de Fonte

### Lei
> "Nos termos do art. [X] do Código Civil / da Lei [X.XXX/XXXX]:"

### Acórdão STJ
> "(STJ, REsp nº XXXXXXX/[UF], Rel. Min. [Nome], [Turma], j. DD/MM/AAAA, DJe DD/MM/AAAA)"

### Recurso Repetitivo STJ
> "(STJ, Tema [X], REsp nº XXXXXXX/[UF], [Órgão], j. DD/MM/AAAA)"

### Acórdão STF
> "(STF, [ARE/RE/ADI] nº XXXXXX/[UF], Rel. Min. [Nome], [Turma/Plenário], j. DD/MM/AAAA, DJe DD/MM/AAAA)"

### Repercussão Geral STF
> "(STF, Tema [X] da Repercussão Geral, RE nº XXXXXXXX/[UF], Plenário, j. DD/MM/AAAA)"

### Súmula
> "(Súmula [X] do STJ)" ou "(Súmula Vinculante [X] do STF)"

### TJ
> "(TJSP, Apelação nº XXXXXXX-XX.XXXX.X.XX.XXXX, Rel. Des. [Nome], [Câmara], j. DD/MM/AAAA)"

---

## 11. Temas Repetitivos STJ — Relevantes para o Squad (2024–2026)

### Direito Civil e Imobiliário

| Tema | Tese | Julgamento |
|---|---|---|
| **1.368** | Selic como taxa legal de juros moratórios civis **antes** da Lei 14.905/2024 (vigência 30/08/2024) | Out/2025 |
| **1.210** | Desconsideração da PJ (art. 50 CC): exige prova de desvio de finalidade ou confusão patrimonial. Encerramento irregular ou ausência de bens, sozinhos, não bastam | Mai/2025 |
| **996** | Atraso na entrega de imóvel gera dano presumido (lucros cessantes) | Consolidado |

### Processual — Honorários

| Tema | Tese |
|---|---|
| **1.059** | Honorários recursais (art. 85, §11 CPC): apenas quando recurso **integralmente** desprovido/não conhecido |
| **1.076** | Vedada equidade em causas com valor de condenação ou proveito econômico elevado |
| **1.190** | Cumprimento de sentença contra Fazenda sem impugnação: não são devidos honorários sucumbenciais |

### Teses Avulsas Relevantes (Sem Tema Numerado)

| Assunto | Tese | Turma / Data |
|---|---|---|
| Retenção máx. resolução imob. (consumidor) | 25% dos valores pagos (sem afetação); 50% (com patrimônio de afetação) | 3ª Turma, Set/2025 |
| Corretor de imóveis — responsabilidade | Não responde por atos da incorporadora salvo grupo econômico/confusão patrimonial | 2ª Seção, Nov/2025 |
| Bem de família e hipoteca | Exceção à impenhorabilidade exige que a dívida tenha revertido em benefício da família | 2ª Seção, Jun/2025 |
| Usucapião — recibo como justo título | Recibo de compra e venda pode ser justo título (art. 1.242 CC) | 3ª Turma, Abr/2026 |
| Dados pessoais não sensíveis — dano moral | Disponibilização indevida gera dano moral presumido (in re ipsa) | 3ª Turma, 2025 |

---

## 12. Alertas de Jurisprudência em Formação (Mai/2026)

- **Dados pessoais não sensíveis:** STJ debate se haverá afetação como repetitivo para fixar tese sobre dano moral in re ipsa na comercialização não autorizada de dados — aguardar
- **PL 4/2025 (Reforma do CC):** Em tramitação no Senado; parecer final previsto para Jul/2026. Pode impactar drasticamente a jurisprudência sobre responsabilidade civil, contratos e direito digital
- **IV Jornada de Direito Processual Civil:** 455 enunciados em análise — evento não realizado até mai/2026

---

**STATUS:** Metodologia atualizada Mai/2026 — v1.1.0 | Fonte: pesquisa em tempo real via @pesquisador-juridico
