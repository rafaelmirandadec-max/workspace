# Skill: Extração de Comunicação — Perfil de Voz para IA

```yaml
skill:
  id: extracao-comunicacao
  version: "4.1.0"
  updated: "2026-09-02"
  category: identidade-verbal
  agents: ["brand-architect", "copywriter", "immersion-architect"]
  description: "Protocolo do Arsenal para extrair o estilo de comunicação de um especialista e transformá-lo em Perfil de Comunicação usado como instrução permanente da IA"
```

---

## 1. Por Que Existe

Pedir "escreva no meu tom" não funciona. A IA precisa de **dados reais de comunicação** para replicar alguém.

O protocolo tem duas etapas de coleta — questionário e amostras — e um entregável: o **Perfil de Comunicação**, usado como instrução permanente em toda produção de texto.

---

## 2. Fluxo do Protocolo

```
1. Questionário de extração (7 blocos, 22 perguntas)
2. Coleta de amostras reais (mín. 3 vídeos, 5 textos, 2 áudios)
3. Consolidação no template de Perfil
4. Uso como instrução da IA
5. Teste com 5 saídas revisadas e validadas pelo especialista
```

---

## 3. Questionário de Extração

Instruções ao especialista: responda como você fala. Quanto mais espontâneo, melhor. Gravar em áudio produz resultado ainda mais fiel.

### Bloco A — Identidade e posicionamento
1. Quem é você e o que você faz? *(3 a 5 frases, como numa roda de colegas)*
2. O que te diferencia de todo mundo que faz a mesma coisa?
3. Se tivesse que resumir sua expertise em uma frase, qual seria?

### Bloco B — Estilo de comunicação
4. Como você abriria uma aula ou live? *(escreva exatamente como falaria)*
5. Usa gírias, expressões regionais ou jargões? Quais?
6. O que você **nunca** diria? Que linguagem te incomoda?
7. Descreva seu tom ideal: engraçado, sério, provocativo, didático, misto?

### Bloco C — Vocabulário
8. Quais palavras ou frases você repete muito sem perceber?
9. Os 10 termos técnicos do seu nicho que mais usa
10. Como explica algo complexo para um iniciante? *(exemplo real)*

### Bloco D — Estrutura de pensamento
11. Qual estrutura você segue naturalmente ao ensinar?
12. Você é mais de analogias, exemplos, dados ou histórias? *(pode misturar, em %)*
13. Conte uma história que você sempre repete

### Bloco E — Relacionamento com o público
14. Quem é seu aluno/cliente ideal? *(nome, idade, profissão, dor, sonho)*
15. Qual a maior dúvida ou medo do seu público?
16. Como você motiva alguém que está desistindo?

### Bloco F — Formatos e preferências
17. Seus textos são longos ou curtos? Diretos ou elaborados?
18. Usa emojis? Quais e com que frequência?
19. Como termina uma mensagem, aula ou e-mail? *(2 a 3 exemplos)*

### Bloco G — Valores e crenças
20. As 3 crenças mais fortes que você tem sobre sua área
21. O que te indigna na sua área? O que você criticaria?
22. Um conselho para quem está começando

---

## 4. Coleta de Amostras

**Mínimo obrigatório:** 3 vídeos ou lives · 5 textos · 2 áudios.

**De vídeos e lives:**
1. Transcrever (Whisper local ou transcrição automática)
2. Limpar marcadores de tempo e hesitações — **mantendo** gírias e expressões
3. Marcar trechos de alto impacto: explicações, histórias, momentos de motivação
4. Analisar: padrões de vocabulário, estrutura, tom e ritmo

**De textos:**
1. Reunir num único documento
2. Extrair: jargões, estrutura de frases, tom predominante, repetições, aberturas e fechamentos
3. Cruzar com as respostas do questionário — onde divergir, **a amostra real vence**

---

## 5. Template do Perfil de Comunicação

```markdown
# PERFIL DE COMUNICAÇÃO — [Nome]

## Identidade
- Quem é:
- Diferencial:
- Frase-resumo:

## Tom e estilo
- Tom predominante:
- Nível de formalidade:
- Densidade (frases curtas / desenvolvidas):
- Emojis:

## Vocabulário
- Jargões técnicos:
- Expressões favoritas:
- Tics verbais:
- Palavras proibidas:

## Estrutura
- Abertura padrão:
- Desenvolvimento:
- Fechamento padrão:
- Recurso didático preferido:

## Público
- Perfil ideal:
- Dor principal:
- Estilo de motivação:

## Valores e crenças
- Crença 1:
- Crença 2:
- Crença 3:
- Indignação:

## Exemplos de saída (referência literal)
- Abertura:
- Explicação:
- Motivação:
- Fechamento:
```

---

## 6. Como Alimentar a IA

**Método 1 — Instrução permanente**
Colar o Perfil completo como instrução de sistema:
> "Você é [Nome]. Comunique-se exatamente com este perfil: [perfil]. Nunca saia deste tom. Se não souber algo, diga que não sabe — não invente."

**Método 2 — Documento de referência**
Salvar o Perfil como arquivo e referenciá-lo quando necessário. Indicado quando a mesma IA atende vários especialistas.

**Método 3 — Ajuste fino (avançado)**
Com 50+ amostras de texto, é possível ajustar um modelo para o estilo. Exige conhecimento técnico e resultado só compensa em operação de alto volume.

---

## 7. Validação

Nenhum Perfil entra em produção sem teste:
1. Gerar 5 textos de tipos diferentes (e-mail, post, abertura de aula, resposta a objeção, anúncio)
2. O especialista lê e marca o que **não soa como ele**
3. Ajustar o Perfil com base no que foi marcado
4. Repetir até o especialista aprovar sem ressalvas

---

## 8. Anti-Patterns

1. Perfil montado só com o questionário, sem amostras reais
2. Amostras higienizadas, sem gírias nem expressões próprias
3. Perfil que descreve como a pessoa **gostaria** de soar, não como soa
4. Usar o Perfil sem validação do especialista
5. Perfil genérico que serviria para qualquer pessoa do nicho

---

## 9. Checklist

- [ ] 22 perguntas respondidas
- [ ] 3 vídeos, 5 textos e 2 áudios coletados
- [ ] Divergências entre questionário e amostra resolvidas a favor da amostra
- [ ] Template preenchido por inteiro
- [ ] Exemplos de saída são trechos literais, não paráfrases
- [ ] 5 saídas testadas e validadas pelo especialista

---

> Protocolo baseado no *Manual de Extração de Comunicação para IA* — material do programa Arsenal de Funis com IA. Uso interno do time.
