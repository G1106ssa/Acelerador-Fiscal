// Dados completos do Edital SEFAZ GO 2026
const materias = [
    {
        id: "portugues",
        nome: "Língua Portuguesa",
        tipo: "basico",
        questoes: "10 questões",
        topicos: [
            {
                principal: "Interpretação de Texto",
                subtitulos: [
                    { nome: "Compreensão e inferência", prioridade: "Alta", analise: "A FCC adora textos longos com alternativas parciais ('segundo o texto' vs 'de acordo com o autor'). Cuidado com inferências excessivas." },
                    { nome: "Tipos textuais e gêneros discursivos", prioridade: "Média", analise: "Diferença entre texto informativo, argumentativo e narrativo. FCC cobra distinções sutis." }
                ]
            },
            {
                principal: "Ortografia e Acentuação",
                subtitulos: [
                    { nome: "Novo Acordo Ortográfico (1990)", prioridade: "Alta", analise: "'Paraíso/paraizo', 'ideia/ideia'. Cobram exceções e regras do acordo." },
                    { nome: "Proparoxítonas e ditongos", prioridade: "Alta", analise: "Foco em palavras terminadas em ditongo (pólo, tórax, bíceps) e casos de hiatus." },
                    { nome: "Uso do hífen", prioridade: "Média", analise: "Regras de prefixos (sub-, super-, inter-) e compostos." }
                ]
            },
            {
                principal: "Gramática",
                subtitulos: [
                    { nome: "Classes de palavras (substantivo, adjetivo, pronome, verbo)", prioridade: "Alta", analise: "Flexões de gênero e número; pronomes relativos (que, qual, cujo); verbos auxiliares." },
                    { nome: "Concordância verbal e nominal", prioridade: "Alta", analise: "Sujeito composto pós-posto; coletivos; porcentagem; 'mais de um'; expressões como 'a maioria'." },
                    { nome: "Regência verbal e nominal", prioridade: "Alta", analise: "Verbos de 'chegada' (chegar a) vs 'saída' (sair de); 'aspirar a/aspirar'; 'assistir a/assistir'." },
                    { nome: "Crase", prioridade: "Alta", analise: "Caso específico: 'às três horas' vs 'às 3h'; locuções prepositivas; pronome 'a'." },
                    { nome: "Colocação pronominal", prioridade: "Média", analise: "Próclise, mesóclise e ênclise. FCC adora verbos no futuro/imperativo." },
                    { nome: "Vozes verbais (ativa, passiva, reflexiva)", prioridade: "Média", analise: "Transformação de vozes e agente da passiva." },
                    { nome: "Sintaxe: coordenação e subordinação", prioridade: "Média", analise: "Classificação de orações subordinadas substantivas, adjetivas e adverbiais." }
                ]
            },
            {
                principal: "Semântica e Estilística",
                subtitulos: [
                    { nome: "Sinônimos e antônimos", prioridade: "Baixa", analise: "Contextualização de sentidos; homônimos e parônimos." },
                    { nome: "Sentido próprio e figurado", prioridade: "Baixa", analise: "Metáfora, metonímia, ironia e eufemismo." },
                    { nome: "Reorganização de orações", prioridade: "Baixa", analise: "Equivalência e transformação de estruturas sintáticas." }
                ]
            },
            {
                principal: "Redação Oficial",
                subtitulos: [
                    { nome: "Reconhecimento de frases corretas e incorretas", prioridade: "Média", analise: "Clareza, concisão e formalismo na linguagem administrativa." }
                ]
            }
        ]
    },
    {
        id: "logica",
        nome: "Rac. Lógico + Mat. Financeira + Estatística",
        tipo: "basico",
        questoes: "10 questões",
        topicos: [
            {
                principal: "Raciocínio Lógico",
                subtitulos: [
                    { nome: "Estrutura lógica de relações arbitrárias", prioridade: "Alta", analise: "Questões de 'pessoas, cidades, profissões' com tabelas de dedução. FCC ama associar atributos." },
                    { nome: "Proposições e conectivos", prioridade: "Alta", analise: "Negação de compostas: ~(p→q) ≡ p∧~q; tabelas-verdade; equivalências lógicas." },
                    { nome: "Diagramas lógicos (Venn)", prioridade: "Alta", analise: "Problemas de 'somente A', 'tanto A quanto B', 'nenhum A é B'." },
                    { nome: "Raciocínio verbal, matemático e sequencial", prioridade: "Média", analise: "Análise combinatória básica e sequências lógicas." },
                    { nome: "Orientação espacial e temporal", prioridade: "Baixa", analise: "Posições relativas e ordenação cronológica." }
                ]
            },
            {
                principal: "Matemática Financeira",
                subtitulos: [
                    { nome: "Juros simples e compostos", prioridade: "Alta", analise: "Montante, capitalização contínua; taxas equivalentes (1+i)^n." },
                    { nome: "Taxa real vs efetiva", prioridade: "Alta", analise: "Fórmula de Fisher: (1+i) = (1+r)(1+inflação). FCC cobra cálculos práticos." },
                    { nome: "Descontos (racional e comercial)", prioridade: "Alta", analise: "Diferença entre desconto simples racional (por dentro) e comercial (por fora)." },
                    { nome: "Sistemas de amortização (SAC, Price, Misto)", prioridade: "Alta", analise: "Tabela Price: prestação constante; SAC: amortização constante. Cálculos de saldo devedor." },
                    { nome: "Fluxo de caixa (valor atual e taxa interna de retorno)", prioridade: "Média", analise: "Análise de investimentos e comparação de alternativas." }
                ]
            },
            {
                principal: "Estatística",
                subtitulos: [
                    { nome: "Estatística descritiva (gráficos, tabelas, medidas)", prioridade: "Alta", analise: "Histogramas, polígonos de frequência; média, moda, mediana; desvio-padrão." },
                    { nome: "Probabilidade (condicional e independência)", prioridade: "Alta", analise: "Condicional: P(A|B) = P(A∩B)/P(B); independência de eventos; teorema de Bayes." },
                    { nome: "Distribuições (Binomial, Normal, t-Student, Qui-quadrado)", prioridade: "Alta", analise: "Distribuição binomial, normal (tabela Z), t-Student. FCC cobra aplicações práticas." },
                    { nome: "Esperança e variância", prioridade: "Média", analise: "Propriedades e cálculos básicos." },
                    { nome: "Distribuições conjuntas e correlação", prioridade: "Baixa", analise: "Covariância e coeficiente de correlação linear." },
                    { nome: "Amostragem e estimação", prioridade: "Baixa", analise: "Noções de estimação pontual e intervalar; teste de hipóteses básico." }
                ]
            }
        ]
    },
    {
        id: "constitucional",
        nome: "Direito Constitucional",
        tipo: "basico",
        questoes: "10 questões",
        topicos: [
            {
                principal: "Princípios Fundamentais",
                subtitulos: [
                    { nome: "Direitos e garantias fundamentais (Art. 5º)", prioridade: "Alta", analise: "Cláusulas pétreas (§4º), direitos difusos, eficácia plena/contida/limitada." },
                    { nome: "Princípio da legalidade tributária", prioridade: "Alta", analise: "Art. 150, I CF: 'sem lei não há imposto'. Aplicação estrita." },
                    { nome: "Irretroatividade e anterioridade", prioridade: "Alta", analise: "Diferença entre 90 dias (nonagesimal) e ano anterior (anual)." },
                    { nome: "Imunidades tributárias (Art. 150, VI-VIII)", prioridade: "Alta", analise: "Igrejas, partidos, sindicatos, entidades sem fins lucrativos." }
                ]
            },
            {
                principal: "Sistema Tributário Nacional",
                subtitulos: [
                    { nome: "Impostos da União, Estados, Municípios", prioridade: "Alta", analise: "Art. 153-156 CF; competência residual (art. 150, I)." },
                    { nome: "Limitações ao poder de tributar", prioridade: "Alta", analise: "Vedação de discriminação entre produtos (§2º); isenções." }
                ]
            },
            {
                principal: "Organização Político-Administrativa",
                subtitulos: [
                    { nome: "Estado Federal (União, Estados, DF, Municípios)", prioridade: "Média", analise: "Autonomia e repartição de competências." },
                    { nome: "Administração Pública (Art. 37)", prioridade: "Alta", analise: "Princípios constitucionais da administração; concurso público." }
                ]
            },
            {
                principal: "Poderes e Funções Essenciais",
                subtitulos: [
                    { nome: "Poder Legislativo (processo legislativo)", prioridade: "Média", analise: "Leis ordinárias, complementares, decretos; fiscalização contábil." },
                    { nome: "Poder Executivo", prioridade: "Baixa", analise: "Atribuições do Presidente da República." },
                    { nome: "Poder Judiciário e Ministério Público", prioridade: "Média", analise: "Organização e garantias institucionais." }
                ]
            },
            {
                principal: "Controle de Constitucionalidade",
                subtitulos: [
                    { nome: "Controle judicial e não judicial", prioridade: "Alta", analise: "ADIN, ADC, ADPF; inconstitucionalidade por omissão." },
                    { nome: "Súmula Vinculante", prioridade: "Alta", analise: "Requisitos e efeitos; reclamação constitucional." }
                ]
            },
            {
                principal: "Constituição do Estado de Goiás",
                subtitulos: [
                    { nome: "Organização dos Poderes em Goiás", prioridade: "Média", analise: "Estrutura do Legislativo, Executivo e Judiciário estaduais." },
                    { nome: "Ordem Econômica e Social Estadual", prioridade: "Baixa", analise: "Política de desenvolvimento econômico goiano." }
                ]
            }
        ]
    },
    {
        id: "administrativo",
        nome: "Direito Administrativo",
        tipo: "basico",
        questoes: "10 questões",
        topicos: [
            {
                principal: "Princípios e Atos Administrativos",
                subtitulos: [
                    { nome: "Princípios constitucionais (LIMP)", prioridade: "Alta", analise: "Legalidade, impessoalidade, moralidade, publicidade, eficiência." },
                    { nome: "Atos administrativos (requisitos, atributos, espécies)", prioridade: "Alta", analise: "Decretos, portarias, despachos; competência para editar." },
                    { nome: "Extinção dos atos (cassação, anulação, revogação)", prioridade: "Alta", analise: "Diferença entre nulidade (ilegalidade) e revogação (conveniência/oportunidade)." },
                    { nome: "Decadência administrativa", prioridade: "Média", analise: "Prazos e requisitos para decadência." }
                ]
            },
            {
                principal: "Agentes Públicos",
                subtitulos: [
                    { nome: "Estatuto dos Servidores de GO (Lei 20.756/20)", prioridade: "Alta", analise: "Carreira do Fisco (Lei 13.266/98); provimento, vacância, estabilidade." },
                    { nome: "Improbidade administrativa (Lei 8.429/92)", prioridade: "Alta", analise: "Alterada pela Lei 14.230/21. Enriquecimento ilícito, ato de improbidade." },
                    { nome: "Responsabilidade civil do Estado", prioridade: "Média", analise: "Responsabilidade por ato comissivo e omissivo; direito de regresso." }
                ]
            },
            {
                principal: "Licitações e Contratos",
                subtitulos: [
                    { nome: "Lei 14.133/2021 (Nova Lei de Licitações)", prioridade: "Alta", analise: "Modalidades, dispensa, inexigibilidade; contratos administrativos." },
                    { nome: "Concessão, permissão, autorização", prioridade: "Média", analise: "Diferenças; PPP (Lei 11.079/04)." },
                    { nome: "Contratos de Gestão", prioridade: "Baixa", analise: "Parcerias com organizações sociais." }
                ]
            },
            {
                principal: "Organização Administrativa",
                subtitulos: [
                    { nome: "Administração direta e indireta", prioridade: "Média", analise: "Autarquias, fundações, empresas públicas." },
                    { nome: "Descentralização e desconcentração", prioridade: "Baixa", analise: "Entregas de competências." },
                    { nome: "Bens públicos", prioridade: "Média", analise: "Classificação, aquisição e alienação." }
                ]
            },
            {
                principal: "Leis de Acesso e Transparência",
                subtitulos: [
                    { nome: "Lei de Acesso à Informação (12.527/11)", prioridade: "Média", analise: "Sigilo e transparência administrativa." },
                    { nome: "LGPD (Lei 13.709/18)", prioridade: "Média", analise: "Proteção de dados pessoais na administração pública." }
                ]
            }
        ]
    },
    {
        id: "financeiro",
        nome: "Direito Financeiro",
        tipo: "basico",
        questoes: "5 questões",
        topicos: [
            {
                principal: "Orçamento Público",
                subtitulos: [
                    { nome: "PPA, LDO, LOA", prioridade: "Alta", analise: "Ciclo orçamentário; princípios (anualidade, exclusividade, universalidade)." },
                    { nome: "Créditos adicionais", prioridade: "Alta", analise: "Suplementares, especiais, extraordinários; requisitos (art. 167 CF)." },
                    { nome: "Emendas parlamentares", prioridade: "Média", analise: "Impositividade e execução orçamentária." }
                ]
            },
            {
                principal: "Lei de Responsabilidade Fiscal (LC 101/2000)",
                subtitulos: [
                    { nome: "Planejamento e receita", prioridade: "Alta", analise: "Capítulos II e III; metas fiscais." },
                    { nome: "Despesa e dívida pública", prioridade: "Alta", analise: "Capítulos IV, VII e VIII; limites de endividamento." },
                    { nome: "Transfereências voluntárias", prioridade: "Baixa", analise: "Convenios e repasses." }
                ]
            },
            {
                principal: "Gestão Patrimonial",
                subtitulos: [
                    { nome: "Alienação e utilização de bens", prioridade: "Baixa", analise: "Disposições gerais do patrimônio público." }
                ]
            }
        ]
    },
    {
        id: "civil-penal-empresarial",
        nome: "Direito Civil, Penal e Empresarial",
        tipo: "basico",
        questoes: "10 questões",
        topicos: [
            {
                principal: "Direito Civil",
                subtitulos: [
                    { nome: "Teoria geral das obrigações", prioridade: "Alta", analise: "Obrigações de dar, fazer, não fazer; inadimplemento; mora." },
                    { nome: "Responsabilidade civil", prioridade: "Alta", analise: "Dano material, moral, estético; nexo causal; culpa e dolo." },
                    { nome: "Contratos (locação, comodato, mandato)", prioridade: "Alta", analise: "Cláusulas, rescisão; aplicação fiscal." },
                    { nome: "Prescrição e decadência", prioridade: "Média", analise: "Prazos e efeitos no direito civil." },
                    { nome: "Bens imóveis, móveis e públicos", prioridade: "Média", analise: "Regime jurídico dos bens." }
                ]
            },
            {
                principal: "Direito Empresarial",
                subtitulos: [
                    { nome: "Sociedades empresárias (tipos e responsabilidade)", prioridade: "Alta", analise: "Limitada e anônima; responsabilidade dos sócios; dissolução." },
                    { nome: "Lei 6.404/76 (S/A)", prioridade: "Média", analise: "Estrutura societária; fusão, incorporação, cisão." },
                    { nome: "Lei Complementar 123/2006 (ME/EPP)", prioridade: "Alta", analise: "Microempresa e empresa de pequeno porte; regime diferenciado." },
                    { nome: "Falência e recuperação judicial", prioridade: "Baixa", analise: "Procedimentos e efeitos." }
                ]
            },
            {
                principal: "Direito Penal",
                subtitulos: [
                    { nome: "Crimes contra a ordem tributária (Lei 8.137/90)", prioridade: "Alta", analise: "Sonegação, descaminho, contrabando; tipificação." },
                    { nome: "Crimes contra a Administração Pública", prioridade: "Média", analise: "Peculato, concussão, corrupção." },
                    { nome: "Lei 13.869/2019 (Abuso de autoridade)", prioridade: "Baixa", analise: "Tipos penais e aplicação." }
                ]
            }
        ]
    },
    {
        id: "economia",
        nome: "Economia",
        tipo: "especifico",
        questoes: "12 questões (Peso 2)",
        topicos: [
            {
                principal: "Microeconomia",
                subtitulos: [
                    { nome: "Oferta e demanda; elasticidades", prioridade: "Alta", analise: "Curvas de demanda e oferta; elasticidade-preço." },
                    { nome: "Estruturas de mercado", prioridade: "Média", analise: "Concorrência perfeita, monopólio, oligopólio." }
                ]
            },
            {
                principal: "Economia da Tributação",
                subtitulos: [
                    { nome: "Incidência econômica de impostos", prioridade: "Alta", analise: "Quem paga efetivamente (elasticidade oferta/demanda)." },
                    { nome: "Peso morto da tributação", prioridade: "Alta", analise: "Perda de eficiência; triângulo de Harberger." },
                    { nome: "Curva de Laffer", prioridade: "Média", analise: "Relação entre alíquota e arrecadação." },
                    { nome: "Tributação ótima (Regra de Ramsey)", prioridade: "Baixa", analise: "Eficiência vs equidade." }
                ]
            },
            {
                principal: "Macroeconomia",
                subtitulos: [
                    { nome: "Agregados macroeconômicos (PIB, inflação)", prioridade: "Alta", analise: "PIB nominal vs real; deflator; IPCA/IPA." },
                    { nome: "Política fiscal e monetária", prioridade: "Alta", analise: "Multiplicador fiscal; controle inflacionário; curva IS-LM." },
                    { nome: "Balanço de pagamentos", prioridade: "Baixa", analise: "Transações internacionais." },
                    { nome: "Economia do setor público", prioridade: "Média", analise: "Funções do Estado na economia." }
                ]
            }
        ]
    },
    {
        id: "contabilidade-geral",
        nome: "Contabilidade Geral",
        tipo: "basico",
        questoes: "10 questões",
        topicos: [
            {
                principal: "Princípios e Normas",
                subtitulos: [
                    { nome: "Princípios Fundamentais de Contabilidade", prioridade: "Alta", analise: "Entidade, continuidade, oportunidade, registro pelo valor original." },
                    { nome: "NBCs do CFC", prioridade: "Alta", analise: "Conceitual, mensuração, divulgação." }
                ]
            },
            {
                principal: "Patrimônio",
                subtitulos: [
                    { nome: "Ativo, passivo, PL - classificação", prioridade: "Alta", analise: "Circulante vs não-circulante; realizável a curto/longo prazo." },
                    { nome: "Avaliação de itens patrimoniais", prioridade: "Alta", analise: "Lei 11.638/07: valor justo, teste de impairment." },
                    { nome: "Estoques (PEPS, UEPS, Custo Médio)", prioridade: "Alta", analise: "Impacto no resultado; métodos de avaliação." },
                    { nome: "Ativo imobilizado e intangível", prioridade: "Alta", analise: "Depreciação, amortização; vida útil definida/indefinida." },
                    { nome: "Redução ao valor recuperável", prioridade: "Média", analise: "Provisão para perdas e reversão." }
                ]
            },
            {
                principal: "Demonstrações",
                subtitulos: [
                    { nome: "BP, DRE, DMPL, DFC", prioridade: "Alta", analise: "Estrutura e interligação entre demonstrações." },
                    { nome: "Demonstração do Valor Adicionado", prioridade: "Baixa", analise: "DVA e sua estrutura." }
                ]
            }
        ]
    },
    {
        id: "goias",
        nome: "Realidade de Goiás",
        tipo: "basico",
        questoes: "5 questões",
        topicos: [
            {
                principal: "História e Geografia",
                subtitulos: [
                    { nome: "Formação histórica e geografia física", prioridade: "Média", analise: "Ciclo do ouro, transferência da capital; Cerrado, chapadas, rios." },
                    { nome: "Movimentos migratórios", prioridade: "Baixa", analise: "Povoamento e formação social." }
                ]
            },
            {
                principal: "Economia e Política",
                subtitulos: [
                    { nome: "Economia goiana (agronegócio, industrialização)", prioridade: "Alta", analise: "PIB do estado, regiões produtivas; ProGoiás." },
                    { nome: "Aspectos políticos e sociais", prioridade: "Média", analise: "Coronelismo, Revolução de 1930; movimentos sociais." },
                    { nome: "Atualidades econômicas e políticas", prioridade: "Alta", analise: "Notícias recentes sobre Goiás (últimos 12 meses)." }
                ]
            }
        ]
    },
    {
        id: "ti",
        nome: "Tecnologia da Informação",
        tipo: "especifico",
        questoes: "12 questões (Peso 2)",
        topicos: [
            {
                principal: "Banco de Dados",
                subtitulos: [
                    { nome: "Modelagem relacional e multidimensional", prioridade: "Alta", analise: "Normalização (1FN, 2FN, 3FN); chaves primárias/estrangeiras." },
                    { nome: "SQL (DDL, DML, DCL)", prioridade: "Alta", analise: "Comandos SELECT com JOINs, GROUP BY, HAVING; subconsultas." },
                    { nome: "NoSQL (MongoDB, Redis, Neo4j)", prioridade: "Alta", analise: "Diferença entre SQL e NoSQL; tipos: chave-valor, documentos, grafos." },
                    { nome: "Administração de SGBDs", prioridade: "Média", analise: "Backup, restauração, otimização de desempenho." }
                ]
            },
            {
                principal: "Data Warehouse e BI",
                subtitulos: [
                    { nome: "Conceitos de DW, ETL, OLAP", prioridade: "Alta", analise: "Esquema estrela vs floco de neve; cubos de dados." },
                    { nome: "Power BI", prioridade: "Alta", analise: "Dashboards, DAX básico, visualizações." },
                    { nome: "Data Mining", prioridade: "Média", analise: "Técnicas e tarefas de mineração." }
                ]
            },
            {
                principal: "Ciência de Dados",
                subtitulos: [
                    { nome: "Séries temporais", prioridade: "Alta", analise: "ARIMA, ETS; previsão de arrecadação (tema quente em fiscal)." },
                    { nome: "Machine Learning", prioridade: "Média", analise: "Supervisionado vs não-supervisionado; Python básico." },
                    { nome: "Estatística aplicada (clusterização, regressão)", prioridade: "Baixa", analise: "Análise fatorial, correspondência, redes neurais." }
                ]
            },
            {
                principal: "Big Data e Data Lake",
                subtitulos: [
                    { nome: "Conceitos de Big Data", prioridade: "Baixa", analise: "Volume, velocidade, variedade." },
                    { nome: "Pipeline de dados", prioridade: "Média", analise: "ETL, ELT, orquestração." }
                ]
            }
        ]
    },
    {
        id: "auditoria",
        nome: "Auditoria",
        tipo: "especifico",
        questoes: "12 questões (Peso 2)",
        topicos: [
            {
                principal: "Planejamento e Execução",
                subtitulos: [
                    { nome: "Planejamento de auditoria", prioridade: "Alta", analise: "Riscos, materialidade, amostragem estatística." },
                    { nome: "Testes de conformidade e substantivos", prioridade: "Alta", analise: "Diferença entre testes de detalhes e analíticos." },
                    { nome: "Procedimentos e evidências", prioridade: "Alta", analise: "Inspeção, observação, confirmação externa; suficiência e adequação." }
                ]
            },
            {
                principal: "Técnicas Específicas",
                subtitulos: [
                    { nome: "Identificação de fraudes", prioridade: "Alta", analise: "'Fraudes na escrita contábil' - FCC cobra casos práticos." },
                    { nome: "Recomposição de caixa", prioridade: "Alta", analise: "Fluxo de caixa real vs contábil." },
                    { nome: "Auditoria no ativo circulante", prioridade: "Média", analise: "Procedimentos específicos para estoques e clientes." }
                ]
            },
            {
                principal: "EFD e NF-e",
                subtitulos: [
                    { nome: "EFD ICMS/IPI", prioridade: "Alta", analise: "Blocos 0, C, E, H; registros C100, C170, C195." },
                    { nome: "XML da NF-e", prioridade: "Alta", analise: "Grupos de informação B, C, D, H, I, M, N, W." },
                    { nome: "Relacionamento EFD x NF-e", prioridade: "Alta", analise: "Cruzamento de dados para fiscalização." }
                ]
            },
            {
                principal: "Normas de Auditoria",
                subtitulos: [
                    { nome: "NBC TA e NBC P", prioridade: "Média", analise: "Normas brasileiras de auditoria independente." }
                ]
            }
        ]
    },
    {
        id: "contabilidade-avancada",
        nome: "Contabilidade Avançada e Custos",
        tipo: "especifico",
        questoes: "12 questões (Peso 2)",
        topicos: [
            {
                principal: "Contabilidade Avançada",
                subtitulos: [
                    { nome: "Ajuste a valor presente (AVP)", prioridade: "Alta", analise: "Cálculos e tratamento contábil (CPC 12)." },
                    { nome: "Mensuração a valor justo", prioridade: "Alta", analise: "Hierarquia de valor justo (nível 1, 2, 3)." },
                    { nome: "Instrumentos financeiros", prioridade: "Alta", analise: "Aplicações, empréstimos, debêntures (CPC 48)." },
                    { nome: "Arrendamento mercantil (leasing)", prioridade: "Alta", analise: "CPC 06 - arrendatário vs arrendador." },
                    { nome: "Participações societárias", prioridade: "Alta", analise: "MEP, método de custo; eliminação de resultados não realizados." },
                    { nome: "Reorganizações societárias", prioridade: "Alta", analise: "Fusão, incorporação, cisão; ágio e deságio." },
                    { nome: "Subvenção e assistência governamentais", prioridade: "Baixa", analise: "Tratamento contábil." }
                ]
            },
            {
                principal: "Contabilidade de Custos",
                subtitulos: [
                    { nome: "Conceitos e classificação", prioridade: "Alta", analise: "Diretos vs indiretos; fixos vs variáveis." },
                    { nome: "Sistemas de custeio", prioridade: "Alta", analise: "Absorção, variável, ABC - diferenças e impactos." },
                    { nome: "Custo padrão e variações", prioridade: "Alta", analise: "Variação de preço, quantidade, volume." },
                    { nome: "Ponto de equilíbrio e margem de segurança", prioridade: "Alta", analise: "Cálculos e análise CVL." },
                    { nome: "Margem de contribuição", prioridade: "Alta", analise: "Conceito e aplicação." },
                    { nome: "Departamentalização", prioridade: "Média", analise: "Centros de custo e rateio." }
                ]
            }
        ]
    },
    {
        id: "tributario-i",
        nome: "Direito Tributário I",
        tipo: "especifico",
        questoes: "12 questões (Peso 2)",
        topicos: [
            {
                principal: "CTN - Parte Geral",
                subtitulos: [
                    { nome: "Sistema Tributário Nacional", prioridade: "Alta", analise: "Art. 2º CTN - competência residual." },
                    { nome: "Obrigação e crédito tributário", prioridade: "Alta", analise: "Fato gerador, sujeitos; constituição do crédito; lançamento." },
                    { nome: "Responsabilidade tributária", prioridade: "Alta", analise: "Sucessores (art. 123), terceiros (art. 134), por infração." },
                    { nome: "Extinção e exclusão do crédito", prioridade: "Alta", analise: "Pagamento, prescrição (5 anos - art. 173), decadência; isenção vs anistia." }
                ]
            },
            {
                principal: "Legislação Complementar",
                subtitulos: [
                    { nome: "LC 87/1996 (Lei Kandir)", prioridade: "Alta", analise: "Não-incidência sobre exportações." },
                    { nome: "LC 116/2003 (ISS)", prioridade: "Alta", analise: "Local da prestação; lista de serviços." },
                    { nome: "LC 123/2006 (Simples Nacional)", prioridade: "Alta", analise: "EME, limite de receita; anexos I-V." },
                    { nome: "LC 192/2022 (combustíveis)", prioridade: "Alta", analise: "Monofásico; substituição tributária." }
                ]
            },
            {
                principal: "Súmulas STF",
                subtitulos: [
                    { nome: "Súmulas vinculantes tributárias", prioridade: "Alta", analise: "SV 8, 10, 15, 19, 25, 46, 70, 75, 82, 323, 430, 546." }
                ]
            }
        ]
    },
    {
        id: "reforma-tributaria",
        nome: "Direito Tributário II (Reforma)",
        tipo: "especifico",
        questoes: "12 questões (Peso 2)",
        topicos: [
            {
                principal: "IBS e CBS",
                subtitulos: [
                    { nome: "Conceitos e características", prioridade: "Alta", analise: "Novos impostos sobre bens e serviços (EC 132/2023)." },
                    { nome: "Base de cálculo e alíquotas", prioridade: "Alta", analise: "Alíquota padrão e diferenciada; setores sujeitos." },
                    { nome: "Créditos (direito ao crédito)", prioridade: "Alta", analise: "Crédito presumido, efetivo; apropriação." },
                    { nome: "Substituição tributária no IBS", prioridade: "Alta", analise: "Novas regras de ST." }
                ]
            },
            {
                principal: "Setores Específicos",
                subtitulos: [
                    { nome: "Tributação do setor imobiliário", prioridade: "Alta", analise: "Redutor de ajuste; redutor social." },
                    { nome: "Tributação de combustíveis", prioridade: "Alta", analise: "Etanol anidro; regime monofásico." },
                    { nome: "Tributação de serviços financeiros", prioridade: "Alta", analise: "Operações de crédito, câmbio, seguros." },
                    { nome: "Tributação de planos de saúde", prioridade: "Média", analise: "Regras específicas do setor." }
                ]
            },
            {
                principal: "Regimes Especiais",
                subtitulos: [
                    { nome: "Produtor rural não contribuinte", prioridade: "Baixa", analise: "Regras diferenciadas." },
                    { nome: "Transportador autônomo", prioridade: "Baixa", analise: "Tributação específica." }
                ]
            }
        ]
    },
    {
        id: "legislacao-estadual",
        nome: "Legislação Tributária Estadual ⚠️",
        tipo: "especifico",
        questoes: "20 questões (Peso 2)",
        topicos: [
            {
                principal: "Código Tributário de GO",
                subtitulos: [
                    { nome: "Lei 11.651/91 (CTN-GO)", prioridade: "Alta", analise: "Espécies tributárias estaduais; competência." },
                    { nome: "ITCD", prioridade: "Alta", analise: "Transmissão causa mortis e doação; alíquotas progressivas." },
                    { nome: "IPVA", prioridade: "Alta", analise: "Incidência, base de cálculo, alíquotas diferenciadas." }
                ]
            },
            {
                principal: "ICMS Estadual",
                subtitulos: [
                    { nome: "Decreto 4.852/97 (RICMS-GO)", prioridade: "Alta", analise: "Operações internas e interestaduais." },
                    { nome: "Anexo VIII - Substituição Tributária", prioridade: "Alta", analise: "Responsabilidade; regimes de ST." },
                    { nome: "Anexo IX - Benefícios Fiscais", prioridade: "Alta", analise: "Incentivos fiscais; requisitos para concessão." },
                    { nome: "Anexo XII - Obrigações Acessórias", prioridade: "Alta", analise: "EFD, GIA, livros fiscais." },
                    { nome: "Anexo XV - DIFAL", prioridade: "Alta", analise: "Cálculo do diferencial de alíquota." },
                    { nome: "Anexo XVIII - Informações financeiras", prioridade: "Média", analise: "Obrigações de instituições financeiras." }
                ]
            },
            {
                principal: "Processo e Legislação",
                subtitulos: [
                    { nome: "Lei 16.469/09 (PAT-GO)", prioridade: "Alta", analise: "Defesa administrativa; julgamento; recursos." },
                    { nome: "LC 104/13 (Código do Contribuinte)", prioridade: "Alta", analise: "Garantias do contribuinte; sigilo fiscal." },
                    { nome: "ProGoiás (Lei 20.787/20)", prioridade: "Alta", analise: "Programa de desenvolvimento econômico." }
                ]
            },
            {
                principal: "Ajustes SINIEF",
                subtitulos: [
                    { nome: "Ajuste SINIEF 07/05 (NF-e)", prioridade: "Alta", analise: "Cláusulas I, II, II-A, III, VI, VII, IX, XI, XII, XIII-A." },
                    { nome: "Ajuste SINIEF 19/16 (NFC-e)", prioridade: "Alta", analise: "Cláusulas I a XI." },
                    { nome: "Ajuste SINIEF 21/10 (MDF-e)", prioridade: "Alta", analise: "Cláusulas I, II, III, III-A, V, VIII, IX, XI." }
                ]
            }
        ]
    }
];

let materiaAtual = null;
let sidebarAberta = true;
let filtroAtual = 'todos'; // 'todos', 'basico' ou 'especifico'
let filtrosAtivos = {
    prioridade: [],
    topico: '',
    subtitulo: '',
    status: '',
    analise: ''
};


window.onload = function () {
    renderizarMenu();
    carregarDados();
    renderizarHome(); // Carrega dashboard

    // Adicionar listener de scroll no content-area
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
        contentArea.addEventListener('scroll', handleScroll);
    }

    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
};

// --- FUNÇÕES DA DASHBOARD (HOME) ---

function goToHome() {
    materiaAtual = null;
    document.querySelectorAll('.materia-item').forEach(item => {
        item.classList.remove('active');
    });
    renderizarHome();
    if (window.innerWidth <= 768 && sidebarAberta) {
        toggleSidebar();
    }
}

function renderizarHome() {
    const contentArea = document.getElementById('dynamic-content');

    // Calculando progresso real para mostrar que funciona
    let totalTopicos = 0;
    let totalConcluidos = 0;

    materias.forEach(mat => {
        mat.topicos.forEach(top => {
            top.subtitulos.forEach(sub => {
                const id = `${mat.id}-${top.principal}-${sub.nome}`.replace(/\s+/g, '-').toLowerCase();
                if (localStorage.getItem(`status-${id}`) === 'concluido') {
                    totalConcluidos++;
                }
                totalTopicos++;
            });
        });
    });

    const percentualGeral = totalTopicos > 0 ? Math.round((totalConcluidos / totalTopicos) * 100) : 0;

    let html = `
        <div class="home-dashboard">
            <div class="welcome-section" style="text-align: left; margin-bottom: 20px;">
                <h2 style="font-size: 1.5rem; color: #2c3e50; border-left: 5px solid #3498db; padding-left: 15px;">REVISÕES POR QUESTÕES</h2>
            </div>

            <div class="tips-section">
                <div class="tips-grid">
    `;

    // Criar cards interativos para TODAS as matérias
    materias.forEach(materia => {
        // Para tributario-i, usar detalhesMaterias que tem os 12 tópicos corretos
        let topicosMateria;
        if (materia.id === 'tributario-i' && detalhesMaterias['tributario-i']) {
            topicosMateria = detalhesMaterias['tributario-i'].topicos;
        } else {
            topicosMateria = materia.topicos.map(t => t.principal);
        }

        const topicosParaMostrar = topicosMateria.slice(0, 4);
        const totalTopicos = topicosMateria.length;

        html += `
            <div class="uiverse-card">
                <div class="uiverse-overlay"></div>
                <div class="uiverse-content">
                    <span class="uiverse-title">${materia.nome}</span>
                    <span class="uiverse-subtitle">${materia.questoes}</span>
                    <div class="uiverse-topics">
                        ${topicosParaMostrar.map(t => `<div class="mini-topic">${t}</div>`).join('')}
                        ${totalTopicos > 4 ? `
                            <div class="mini-topic-more" onclick="event.stopPropagation(); openTopicsModalForSubject('${materia.id}')">
                                + ${totalTopicos - 4} tópicos ▼
                            </div>
                        ` : ''}
                    </div>
                    <button class="uiverse-btn" onclick="event.stopPropagation(); openTopicsModalForSubject('${materia.id}')">Ver Todos os Tópicos</button>
                </div>
                <div class="uiverse-initial-text">${materia.nome}</div>
            </div>
        `;
    });

    html += `
                </div>
            </div>
        </div>
    `;

    contentArea.innerHTML = html;
}

// --- LÓGICA DO MODAL (QUIZ) ---

// Banco de Questões por Matéria (exemplo inicial: Tributário e Placeholder para outros)
const bancoDeQuestoes = {
    "tributario-i": [
        {
            id: 1,
            enunciado: "<strong>Q3786405</strong><br>Para se beneficiar de programa de parcelamento tributário instituído em 2023, a empresa Beta Ltda. apresentou declaração confessando créditos de ISS, relativos aos exercícios de 2015 e 2016, que não haviam sido objeto de lançamento pela Fazenda Municipal.<br><br>Por ter deixado de pagar as parcelas no respectivo vencimento, o município ajuizou execução fiscal em 2024. Em embargos à execução, a empresa alegou a ocorrência de decadência. À luz do Código Tributário Nacional (CTN) e da jurisprudência do STJ, é correto afirmar que:<div class='dados-questao'>Ano: 2025 | Banca: FGV | Órgão: TJ-MS | Cargo: Juiz Substituto</div>",
            alternativas: [
                "A) a confissão de dívida apresentada para adesão ao parcelamento supre a falta de lançamento e impede a alegação de decadência;",
                "B) a decadência não se consuma enquanto não houver ato expresso de lançamento ou auto de infração formalizado pela administração tributária;",
                "C) a adesão ao programa de parcelamento tem efeito interruptivo da decadência, reabrindo novo prazo para a constituição do crédito tributário;",
                "D) a decadência extingue o crédito tributário e não pode ser afastada por confissão de dívida ou parcelamento posterior, razão pela qual os créditos estão decaídos;",
                "E) a simples declaração do sujeito passivo ou documento equivalente, em se tratando de tributos sujeitos a lançamento por homologação, já constitui o crédito, impedindo a alegação de decadência, ainda que não pago o tributo."
            ],
            correta: 3
        },
        {
            id: 2,
            enunciado: "Durante uma capacitação na Câmara Municipal de Bebedouro, o palestrante explicou a diferença entre os institutos da prescrição e da decadência no Direito Tributário. Como exemplo, ele citou um caso em que o município perdeu o direito de constituir o crédito tributário porque o lançamento não foi realizado no prazo legal. Diante disso, sobre os prazos de prescrição e decadência no Direito Tributário, é correto afirmar que:<div class='dados-questao'>Ano: 2025 | Banca: IBAM | Órgão: Câmara de Bebedouro - SP | Cargo: Procurador Legislativo</div>",
            alternativas: [
                "A) a prescrição é aplicável somente a impostos, enquanto a decadência se aplica a taxas e contribuições.",
                "B) a decadência impede o lançamento do crédito tributário após cinco anos do fato gerador.",
                "C) a prescrição ocorre cinco anos após o lançamento do crédito tributário, independentemente de sua cobrança.",
                "D) ambos os prazos podem ser interrompidos pela declaração de inconstitucionalidade do tributo."
            ],
            correta: 1
        },
        {
            id: 3,
            enunciado: "Tratando-se de tributo lançado por homologação, salvo se comprovado dolo, fraude ou simulação, caso a Fazenda Pública permaneça inerte durante o prazo de cinco anos, considera-se homologado o lançamento e definitivamente extinto o crédito correspondente. Referido prazo é contado a partir<div class='dados-questao'>Ano: 2025 | Banca: VUNESP | Órgão: Prefeitura de Itapevi - SP | Cargo: Auditor</div>",
            alternativas: [
                "A) da data do pagamento antecipado realizado pelo sujeito passivo.",
                "B) da data da ocorrência do fato gerador do tributo objeto do pagamento antecipado.",
                "C) do conhecimento pelo sujeito ativo do pagamento realizado antecipadamente pelo sujeito passivo.",
                "D) de primeiro de janeiro do exercício seguinte àquele em que o lançamento poderia ter sido efetuado.",
                "E) de primeiro de janeiro do exercício seguinte àquele em que o pagamento antecipado for realizado."
            ],
            correta: 1
        },
        {
            id: 4,
            enunciado: "<strong>Q3231112</strong><br>Julgue o item seguinte, a respeito da responsabilidade tributária, das formas de constituição do crédito tributário e das suas hipóteses de suspensão e extinção, segundo a jurisprudência do STJ.<br><br>A notificação do contribuinte acerca da ocorrência de auto de infração tributária tem o efeito de cessar a contagem do prazo decadencial para a constituição do crédito tributário.<div class='dados-questao'>Ano: 2025 | Banca: CESPE/CEBRASPE | Órgão: Prefeitura de Aracaju - SE | Cargo: Procurador Municipal</div>",
            alternativas: [
                "Certo",
                "Errado"
            ],
            correta: 1
        },
        {
            id: 5,
            enunciado: "<strong>Q3199830</strong><br>A prescrição e a decadência são ocorrências que se aplicam para o procedimento relativo:<div class='dados-questao'>Ano: 2025 | Banca: SELECON | Órgão: Prefeitura de Sinop - MT | Cargo: Fiscal Tributário</div>",
            alternativas: [
                "A) à revisão do crédito tributário",
                "B) à extinção do crédito tributário",
                "C) à suspensão do crédito tributário",
                "D) ao pagamento do crédito tributário"
            ],
            correta: 1
        },
        {
            id: 6,
            enunciado: "<strong>Q3179568</strong><br>Assinale a alternativa correta:<div class='dados-questao'>Ano: 2025 | Banca: FGV | Órgão: TRF - 3ª REGIÃO | Cargo: Juiz Federal Substituto</div>",
            alternativas: [
                "A) Os usuários de imóveis da União, regularmente inscritos sob o Regime de Ocupação (ato administrativo precário), devem pagar anualmente a Taxa de Ocupação, cuja natureza é tributária. Nesse caso, o imóvel pertence integralmente à União, mas o ocupante tem o direito de utilização do bem.",
                "B) Os usuários de imóveis da União, inscritos sob o Regime de Aforamento, devem pagar anualmente o Foro, cuja natureza jurídica é receita patrimonial não tributária. O instituto jurídico do aforamento é conhecido como Enfiteuse, e o Foro (devido integralmente à União) deve ser utilizado para a realização de obras no município onde estão localizados os imóveis que ensejaram o recolhimento dessa receita.",
                "C) Cuidando de receitas patrimoniais não tributárias da União, o art. 47 da Lei nº 9.636/1998 prevê que o prazo de decadência decenal é contado do instante em que o respectivo crédito poderia ser constituído, a partir do conhecimento por iniciativa da União ou por solicitação do interessado das circunstâncias e fatos que caracterizam a hipótese de incidência da receita patrimonial, ficando limitada a 5 (cinco) anos a cobrança de créditos relativos a período anterior ao conhecimento pela União. Porque esse preceito legal rege toda a matéria de decadência e prescrição dessas receitas, são inexigíveis laudêmios cujos fatos geradores, decorrentes de cessões particulares, ocorreram há mais de 5 (cinco) anos do momento em que são levados ao conhecimento da União.",
                "D) Segundo a redação atual da Lei nº 9.636/1998 e o Tema 1142/STJ, os créditos originados de receitas patrimoniais não tributárias da União serão submetidos ao prazo decadencial de 5 (cinco) anos para sua constituição, mediante lançamento, e prescricional, também de 5 (cinco) anos para sua exigência, contados do lançamento.",
                "E) O laudêmio é a taxa paga previamente à venda de terreno de marinha pertencente à União, cuja obrigação propter rem tem natureza de receita patrimonial, a ele sendo aplicável o CTN, por analogia, no tocante aos prazos de decadência e de prescrição, pois a redação atual da Lei nº 9.636/1998 não cuida do assunto."
            ],
            correta: 3
        },
        {
            id: 7,
            enunciado: "<strong>Q3179565</strong><br>Assinale a alternativa correta. O CTN prescreve que:<div class='dados-questao'>Ano: 2025 | Banca: FGV | Órgão: TRF - 3ª REGIÃO | Cargo: Juiz Federal Substituto</div>",
            alternativas: [
                "A) O lançamento dos tributos é ato privativo da Administração Pública ou do Poder Judiciário.",
                "B) A homologação do lançamento é ato de Administração Pública e do sujeito passivo do tributo.",
                "C) O sujeito passivo pode constituir o crédito tributário quando o tributo seja submetido a qualquer modalidade de lançamento, cabendo à Administração Pública a competência para examinar a posteriori.",
                "D) O lançamento misto ou por declaração é aquele em que a Administração Pública constitui o crédito tributário com informações próprias, do sujeito passivo ou de terceiros.",
                "E) Quando a legislação dispuser que o tributo está sujeito ao autolançamento ou lançamento por homologação, o prazo decadencial para a Fazenda Pública efetuar o lançamento tem início no primeiro dia do exercício seguinte."
            ],
            correta: 3
        },
        {
            id: 8,
            enunciado: "<strong>Q3176485</strong><br>Com base no parágrafo único do artigo 195 do Código Tributário Nacional, o Auditor Tributário Municipal informou a determinado contribuinte que a conservação de livros obrigatórios de escrituração comercial e fiscal deve respeitar o período de:<div class='dados-questao'>Ano: 2025 | Banca: FUNDATEC | Órgão: Prefeitura de Tangará da Serra - MT | Cargo: Auditor Tributário Municipal</div>",
            alternativas: [
                "A) Decadência dos créditos tributários.",
                "B) Decadência dos débitos em dívida ativa.",
                "C) Prescrição do ajuizamento de mandado de segurança.",
                "D) Prescrição dos créditos tributários."
            ],
            correta: 3
        },
        {
            id: 9,
            enunciado: "<strong>Q3298495</strong><br>O crédito tributário por homologação ocorre quando o contribuinte apura e recolhe o tributo antecipadamente, sujeitando-se à posterior confirmação pela autoridade fiscal. Acerca do lançamento do crédito tributário por homologação, é correto afirmar que, se a lei não fixar prazo para que ele aconteça:<div class='dados-questao'>Ano: 2024 | Banca: IDCAP | Órgão: Prefeitura de Piúma - ES | Cargo: Auditor Fiscal de Tributos Municipais</div>",
            alternativas: [
                "A) O prazo será dois anos, a contar da ocorrência do fato gerador; expirado esse prazo sem que a Fazenda Pública se tenha pronunciado, considera-se homologado o lançamento e definitivamente extinto o crédito, salvo se comprovada a ocorrência de dolo, fraude ou simulação.",
                "B) O prazo será cinco anos, a contar da ocorrência do fato gerador; expirado esse prazo sem que a Fazenda Pública se tenha pronunciado, considera-se homologado o lançamento e definitivamente extinto o crédito, salvo se comprovada a ocorrência de dolo, fraude ou simulação.",
                "C) O prazo será três anos, a contar da ocorrência do fato gerador; expirado esse prazo sem que a Fazenda Pública se tenha pronunciado, considera-se homologado o lançamento e definitivamente extinto o crédito, salvo se comprovada a ocorrência de dolo, fraude ou simulação."
            ],
            correta: 1
        },
        {
            id: 10,
            enunciado: "<strong>Q3157902</strong><br>Uma empresa foi autuada pela Receita Federal por ausência de pagamento de créditos decorrentes de contribuições previdenciárias acumuladas ao longo dos últimos anos. Ao analisar o caso, o advogado da empresa argumentou que os prazos de prescrição e decadência aplicáveis ao crédito tributário deveriam ser os previstos na Lei nº 8.212/91, especificamente nos artigos 45 e 46. Com base na legislação e jurisprudência sobre o tema, assinale a afirmativa correta:<div class='dados-questao'>Ano: 2024 | Banca: FGV | Órgão: Prefeitura de Cuiabá - MT | Cargo: Auditor Fiscal Tributário da Receita Municipal</div>",
            alternativas: [
                "A) O advogado está correto e os prazos de prescrição e decadência aplicáveis devem ser os previstos nos artigos 45 e 46 da Lei nº 8.212/91.",
                "B) A Lei nº 8.212/91 pode disciplinar os prazos de prescrição e decadência tributária, desde que essa regulamentação não contrarie a legislação vigente.",
                "C) Os artigos 45 e 46 da Lei nº 8.212/91 foram declarados inconstitucionais pelo STF, por tratarem de prescrição e decadência, temas reservados à lei complementar.",
                "D) As contribuições previdenciárias não têm natureza tributária e, por tal razão, a prescrição e a decadência podem ser tratadas em lei ordinária.",
                "E) O CTN não pode disciplinar os prazos de prescrição e decadência das contribuições previdenciárias, pois possuem natureza jurídica distinta dos tributos."
            ],
            correta: 2
        },
        {
            id: 11,
            enunciado: "Assinale a opção correta acerca da prescrição e da decadência tributária, consoante posicionamento do STF.<div class='dados-questao'>Ano: 2024 | Banca: CESPE/CEBRASPE | Órgão: TJ-PE | Cargo: Titular de Serviços de Notas e de Registros</div>",
            alternativas: [
                "A) A definição do instrumento legal relativo a prescrição e decadência – lei complementar ou lei ordinária – depende da espécie tributária.",
                "B) A normatização tanto da decadência quanto da prescrição somente pode ser instrumentalizada por meio de lei complementar.",
                "C) O regramento tanto da decadência quanto da prescrição pode ser instrumentalizado por meio de lei complementar ou lei ordinária.",
                "D) O regramento relativo à decadência somente pode ser instrumentalizado por meio de lei complementar, ao passo que o da prescrição pode ser feito por lei ordinária.",
                "E) A normatização da prescrição somente pode ser instrumentalizada por meio de lei complementar, ao passo que a da decadência pode ser feita por lei ordinária."
            ],
            correta: 1
        },
        {
            id: 12,
            enunciado: "<strong>Q3144138</strong><br>Em um determinado município, houve pavimentação da Rua \"A\" que até então era rua não pavimentada, só tinha cascalho e terra batida. O município seguiu todo o devido processo legal para estabelecer cobrança de contribuição de melhoria. Um determinado morador da rua \"A\" foi devidamente notificado para o pagamento da devida contribuição de melhoria em 15 de abril de 2020, com prazo estipulado para efetivar o pagamento até 14 de maio de 2020. Não houve por parte do referido morador impugnação administrativa, tampouco pagamento do crédito tributário exigido pelo município. Diante dessa situação é correto afirmar que:<div class='dados-questao'>Ano: 2024 | Banca: UNIFIMES | Órgão: Prefeitura de Mineiros - GO | Cargo: Procurador</div>",
            alternativas: [
                "A) O prazo decadencial para a constituição do crédito tributário referente à contribuição de melhoria terá o seu cômputo (dies a quo) a partir de 15 de abril de 2020.",
                "B) O prazo prescricional para a exigência do crédito tributário referente à contribuição de melhoria terá o seu cômputo (dies a quo) a partir de 1º de janeiro de 2021.",
                "C) O prazo prescricional para a exigência do crédito tributário referente à contribuição de melhoria terá o seu cômputo (dies a quo) a partir de 16 de abril de 2020.",
                "D) O prazo decadencial para a constituição do crédito tributário referente à contribuição de melhoria terá o seu cômputo (dies a quo) a partir de 15 de maio de 2020.",
                "E) O prazo prescricional para a exigência do crédito tributário referente à contribuição de melhoria terá o seu cômputo (dies a quo) a partir de 15 de maio de 2020."
            ],
            correta: 4
        },
        {
            id: 13,
            enunciado: "<strong>Q3142292</strong><br>Prazo legal para exigibilidade do crédito tributário, de acordo com as regras gerais estampadas no Código Tributário Nacional:<div class='dados-questao'>Ano: 2024 | Banca: UNIFIMES | Órgão: Prefeitura de Mineiros - GO | Cargo: Fiscal de Arrecadação</div>",
            alternativas: [
                "A) Cinco anos de prazo decadencial, após o lançamento tributário.",
                "B) Cinco anos de prazo prescricional, após o lançamento tributário.",
                "C) Cinco anos de prazo prescricional, após a ocorrência do fato gerador.",
                "D) Dois anos de prazo decadencial, após a ocorrência do fato gerador.",
                "E) Dois anos de prazo prescricional, após o lançamento tributário."
            ],
            correta: 1
        },
        {
            id: 14,
            enunciado: "<strong>Q3131759</strong><br>Um contribuinte foi autuado pela Receita Federal por não recolher determinado tributo. Ele alega que a obrigação tributária foi extinta pela decadência, pois o prazo para cobrança já havia expirado. Qual é o prazo legal que a Fazenda Pública tem para constituir o crédito tributário, segundo o Código Tributário Nacional?<div class='dados-questao'>Ano: 2024 | Banca: Unesc | Órgão: Prefeitura de Macieira - SC | Cargo: Assessor Jurídico</div>",
            alternativas: [
                "A) 4 anos.",
                "B) 3 anos.",
                "C) 2 anos.",
                "D) 6 anos.",
                "E) 5 anos."
            ],
            correta: 4
        },
        {
            id: 15,
            enunciado: "<strong>Q3117580</strong><br>A empresa ABC Ltda., sediada em município pernambucano, apurou e pagou antecipadamente os valores relativos ao imposto sobre serviços de qualquer natureza (ISS), tributo submetido a regime de lançamento por homologação, referente ao exercício de 2018. No âmbito de fiscalização realizada pelo Fisco municipal no ano de 2024, a autoridade fazendária constatou que o pagamento foi realizado corretamente, mas não houve homologação expressa pela administração tributária municipal. A despeito disso, identificou que a empresa omitira valores do tributo em 2018, não constatando a presença de dolo, fraude ou simulação na omissão. Sendo assim, a Fazenda municipal procedeu em 2024 à constituição do crédito tributário para os valores não pagos. Diante da situação descrita e na esteira do Código Tributário Nacional e da jurisprudência do Superior Tribunal de Justiça, é correto afirmar que:<div class='dados-questao'>Ano: 2024 | Banca: FGV | Órgão: TJ-PE | Cargo: Juiz Substituto</div>",
            alternativas: [
                "A) os créditos tributários referentes aos valores pagos antecipadamente e aos não pagos em 2018 foram extintos, pois o prazo decadencial para a homologação do lançamento se iniciou em 2018 e expirou em 2023; logo, não podem ser revistos pela Fazenda municipal;",
                "B) o crédito tributário referente aos valores não pagos ainda pode ser constituído pela Fazenda municipal em 2024, o prazo decadencial conta-se a partir do primeiro dia do exercício de 2019;",
                "C) o crédito tributário referente aos valores pagos antecipadamente pode ser revisto pela Fazenda municipal em 2024, pois o pagamento antecipado extingue o crédito sob condição resolutória;",
                "D) o crédito tributário referente aos valores pagos antecipadamente pode ser revisto pela Fazenda municipal em 2024, pois o prazo decadencial inicia-se com a homologação expressa pela administração tributária;",
                "E) o crédito tributário referente aos valores não pagos em 2018 está sujeito à contagem do prazo decadencial a partir da ocorrência do fato gerador, encerrando-se em 2023, pois não houve dolo, fraude ou simulação na omissão."
            ],
            correta: 1
        },
        {
            id: 16,
            enunciado: "<strong>Q3104449</strong><br>Um sujeito passivo apresentou a Declaração do Imposto sobre a Renda das Pessoas Físicas em 31/05/2024, a qual não foi homologada pela Receita Federal. Neste contexto, assinale a alternativa correta em relação ao termo final do prazo de decadência na hipótese retratada.<div class='dados-questao'>Ano: 2024 | Banca: IBFC | Órgão: TRF - 5ª REGIÃO | Cargo: Analista Judiciário - Área Judiciária</div>",
            alternativas: [
                "A) 01/01/2030",
                "B) 31/05/2029",
                "C) 31/05/2030",
                "D) 01/01/2029"
            ],
            correta: 0
        },
        {
            id: 17,
            enunciado: "<strong>Q3093284</strong><br>O prazo decadencial para que seja possível ao Estado de Goiás realizar o lançamento de ofício do Imposto Sobre Propriedade de Veículos Automotores (IPVA) e do Município de Goiânia lançar o Imposto Predial e Territorial Urbano (IPTU) referente ao ano de 2023, se inicia e termina nas seguintes datas, respectivamente:<div class='dados-questao'>Ano: 2024 | Banca: UFG | Órgão: Prefeitura de Padre Bernardo - GO | Cargo: Fiscal de Tributos</div>",
            alternativas: [
                "A) inicia em 01/01/2023 e termina em 31/12/2028.",
                "B) inicia em 01/01/2024 e termina em 31/12/2029.",
                "C) inicia em 01/01/2024 e termina em 31/12/2028.",
                "D) inicia em 01/01/2023 e termina em 31/12/2029."
            ],
            correta: 2
        },
        {
            id: 18,
            enunciado: "<strong>Q3065656</strong><br>A<br>Dois anos, contados da ocorrência do fato gerador.<br>B<br>Cinco anos, contados da data da constituição do crédito.<br>C<br>Três anos, contados da notificação do contribuinte.<br>D<br>Dez anos, contados da homologação do lançamento.<br>E<br>Cinco anos, contados da ocorrência do fato gerador.<div class='dados-questao'>Ano: 2024 | Banca: CONTEMAX | Órgão: Prefeitura de Cubati - PB | Cargo: Fiscal de Tributos</div>",
            alternativas: [
                "A) Dois anos, contados da ocorrência do fato gerador.",
                "B) Cinco anos, contados da data da constituição do crédito.",
                "C) Três anos, contados da notificação do contribuinte.",
                "D) Dez anos, contados da homologação do lançamento.",
                "E) Cinco anos, contados da ocorrência do fato gerador."
            ],
            correta: 4
        },
        {
            id: 19,
            enunciado: "<strong>Q3019996</strong><br>A ação para a cobrança do crédito tributário prescreve em cinco anos, contados da data da sua constituição definitiva. A prescrição se interrompe:<div class='dados-questao'>Ano: 2024 | Banca: FUNATEC | Órgão: Prefeitura de Rosário - MA | Cargo: Fiscal de Tributos</div>",
            alternativas: [
                "A) pelo despacho do juiz que dispensa a citação em execução fiscal.",
                "B) pelo protesto judicial.",
                "C) por qualquer ato judicial que não constitua em mora o devedor.",
                "D) por qualquer ato equívoco ainda que extrajudicial, que importe em reconhecimento do débito pelo devedor."
            ],
            correta: 0
        },
        {
            id: 20,
            enunciado: "<strong>Q2759031</strong><br>A sociedade empresária TutoVenda falsifica um documento com o objetivo de pagar menos ICMS, sendo que a saída da mercadoria de seu estabelecimento ocorreu em 5 de abril de 2023 e o pagamento da nota fiscal, com o valor menor da operação, ocorreu em 15 de maio de 2023. Assinale a opção que indica o prazo do Fisco Estadual para a cobrança e quando ele terá início.<div class='dados-questao'>Ano: 2024 | Banca: FGV | Órgão: EPE | Cargo: Advogado</div>",
            alternativas: [
                "A) O prazo será de 5 (cinco) anos / da saída da mercadoria do estabelecimento, por ter havido pagamento parcial.",
                "B) O prazo será de 5 (cinco) anos / do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado por ter havido fraude, dolo ou simulação.",
                "C) O prazo será de 5 (cinco) anos / do pagamento da nota fiscal com valor menor, por ter havido pagamento parcial.",
                "D) O prazo será de 5 (cinco) anos / do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado, por ter havido pagamento parcial.",
                "E) O prazo será de 10 (dez) anos / da ocorrência do fato gerador, por se tratar de lançamento por homologação."
            ],
            correta: 1
        }
    ]
};

const detalhesMaterias = {
    'tributario-i': {
        nome: "Direito Tributário",
        topicos: [
            "1. Sistema Tributário Nacional",
            "2. Princípios Tributários",
            "3. Imunidades e Limitações",
            "4. Competência Tributária",
            "5. Obrigação Tributária",
            "6. Responsabilidade Tributária",
            "7. Constituição do Crédito",
            "8. Suspensão da Exigibilidade",
            "9. Decadência e Prescrição (Extinção)",
            "10. Exclusão do Crédito",
            "11. Garantias e Privilégios",
            "12. Administração Tributária"
        ]
    }
};

// Placeholder para matérias sem questões ainda
const placeholderQuestoes = [
    { id: 1, enunciado: "Questões para esta matéria estarão disponíveis em breve.", alternativas: ["Aguarde..."], correta: 0 }
];

let quizPaginaAtual = 0;
const quizPorPagina = 5;
let questoesAtuais = []; // Variável global para armazenar as questões do modal aberto

function abrirModalQuestoes(idMateria) {
    const modal = document.getElementById('questoes-modal');
    modal.classList.add('open');

    // Se tiver detalhes de tópicos (como em tributário), mostra o menu de seleção
    if (detalhesMaterias[idMateria]) {
        renderizarSelecaoTopicos(idMateria);
    } else {
        // Comportamento padrão para outras matérias
        questoesAtuais = bancoDeQuestoes[idMateria] || placeholderQuestoes;
        quizPaginaAtual = 0;
        renderizarQuiz();
    }
}

function renderizarSelecaoTopicos(idMateria) {
    const modalBody = document.getElementById('modal-body');
    const detalhes = detalhesMaterias[idMateria];
    const questoes = bancoDeQuestoes[idMateria] || [];

    // Simulação de agrupamento (Assumindo que todas as 20 questões são de "Extinção")
    // Futuramente, as questões deveriam ter uma propriedade 'topicoId'

    let html = `
            < div class="topic-selection-container" >
            <h3>${detalhes.nome} - Selecione um Tópico</h3>
            <div class="topic-grid">
    `;

    detalhes.topicos.forEach((topico, index) => {
        // Lógica: Tópico 9 (index 8) é "Decadência e Prescrição"
        const isDecadencia = index === 8;
        const qtdQuestoes = isDecadencia ? questoes.length : 0;
        // Note: 'questoes' is available in scope
        const currentQtd = isDecadencia ? questoes.length : 0;

        let action = '';
        if (currentQtd > 0) {
            action = `iniciarQuiz('${idMateria}', ${index})`;
        }

        const disabledClass = (currentQtd === 0 && !isDecadencia) ? 'disabled' : ''; // Keep topic 9 enabled even if 0 (though we know it has 20)

        html += `
            <div class="topic-link ${disabledClass}" onclick="${action}">
                <span class="topic-name">${topico}</span>
                ${currentQtd > 0 ? `<span class="topic-badge">${currentQtd}</span>` : ''}
            </div>
        `;
    });

    html += `
            </div>
        </div >
            `;

    modalBody.innerHTML = html;
}

function iniciarQuiz(idMateria, topicoIndex) {
    questoesAtuais = bancoDeQuestoes[idMateria] || placeholderQuestoes;

    // Se quiser filtrar por tópico real futuramente, faria aqui
    // if (topicoIndex !== -1) { questoesAtuais = questoesAtuais.filter(...) }

    quizPaginaAtual = 0;
    renderizarQuiz();
}

function fecharModal() {
    const modal = document.getElementById('questoes-modal');
    modal.classList.remove('open');
}

function renderizarQuiz() {
    const modalBody = document.getElementById('modal-body');
    const start = quizPaginaAtual * quizPorPagina;
    const end = start + quizPorPagina;
    const questoesPagina = questoesAtuais.slice(start, end);
    const totalPaginas = Math.ceil(questoesAtuais.length / quizPorPagina);

    let html = `
            < div class="quiz-container" >
                <div class="quiz-intro">
                    <h3>Simulado Rápido: Extinção e Exclusão</h3>
                    <p>Página ${quizPaginaAtual + 1} de ${totalPaginas}</p>
                </div>
        `;

    questoesPagina.forEach((q, index) => {
        // O índice real no array principal é start + index
        const realIndex = start + index;
        html += `
            < div class="quiz-item" id = "questao-${realIndex}" >
                <div class="quiz-enunciado">
                    <span class="quiz-numero">Q${q.id}</span>
                    ${q.enunciado}
                </div>
                <div class="quiz-options">
        `;

        q.alternativas.forEach((alt, altIndex) => {
            html += `
                <button class="quiz-option" onclick="verificarResposta(${realIndex}, ${altIndex}, this)">
                    ${alt}
                </button>
            `;
        });

        html += `
                </div>
                <div class="quiz-feedback" id="feedback-${realIndex}"></div>
            </div >
            `;
    });

    // Controles de Paginação
    html += `
            < div class="quiz-controls" style = "display: flex; justify-content: space-between; margin-top: 20px;" >
            <button onclick="mudarPagina(-1)" class="btn-quiz-nav" ${quizPaginaAtual === 0 ? 'disabled' : ''} style="padding: 10px 20px; cursor: pointer; background: #e9ecef; border: 1px solid #ccc; border-radius: 5px;">
                ◀ Anterior
            </button>
            <button onclick="mudarPagina(1)" class="btn-quiz-nav" ${quizPaginaAtual >= totalPaginas - 1 ? 'disabled' : ''} style="padding: 10px 20px; cursor: pointer; background: #1e3c72; color: white; border: none; border-radius: 5px;">
                Próximo ▶
            </button>
        </div >
    </div > `;

    modalBody.innerHTML = html;
}

function mudarPagina(delta) {
    const totalPaginas = Math.ceil(questoesAtuais.length / quizPorPagina);
    const novaPagina = quizPaginaAtual + delta;

    if (novaPagina >= 0 && novaPagina < totalPaginas) {
        quizPaginaAtual = novaPagina;
        renderizarQuiz();
        // Scroll para o topo do modal
        document.querySelector('.modal-body').scrollTop = 0;
    }
}

function verificarResposta(questaoIndex, alternativaIndex, btnElement) {
    const questao = questoesAtuais[questaoIndex];
    const parent = btnElement.parentElement;
    const feedback = document.getElementById(`feedback - ${questaoIndex} `);

    // Desabilitar todos os botões desta questão
    const botoes = parent.querySelectorAll('.quiz-option');
    botoes.forEach(btn => btn.disabled = true);

    if (alternativaIndex === questao.correta) {
        btnElement.classList.add('correta');
        feedback.innerHTML = '<span class="feedback-success">✅ Resposta Correta!</span>';
        feedback.className = 'quiz-feedback show success';
    } else {
        btnElement.classList.add('errada');
        // Mostrar a correta
        botoes[questao.correta].classList.add('correta');

        feedback.innerHTML = '<span class="feedback-error">❌ Correta: ' + questao.alternativas[questao.correta].split(')')[0] + ')</span>';
        feedback.className = 'quiz-feedback show error';
    }
}



// Detecta scroll no content-area e compacta header
function handleScroll() {
    const contentArea = document.getElementById('content-area');
    const header = document.getElementById('header');
    const scrollTop = contentArea.scrollTop;

    if (scrollTop > 50) {
        if (!header.classList.contains('compact')) {
            header.classList.add('compact');
            document.querySelector('.toggle-header-btn').classList.add('collapsed');
            document.querySelector('.toggle-header-btn').textContent = '▼';
        }
    } else {
        if (header.classList.contains('compact')) {
            header.classList.remove('compact');
            document.querySelector('.toggle-header-btn').classList.remove('collapsed');
            document.querySelector('.toggle-header-btn').textContent = '▲';
        }
    }
}

// FUNÇÃO NOVA: Filtra as matérias por tipo
function filtrarMaterias(tipo, btn) {
    filtroAtual = tipo;

    // Atualiza os botões visuais
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Re-renderiza o menu com o filtro aplicado
    renderizarMenu();
}

// FUNÇÃO MODIFICADA: Renderiza com base no filtro atual
function renderizarMenu() {
    const lista = document.getElementById('materias-list');
    lista.innerHTML = ''; // Limpa a lista

    // Filtra as matérias baseado no filtro atual
    let materiasFiltradas = materias;
    if (filtroAtual !== 'todos') {
        materiasFiltradas = materias.filter(m => m.tipo === filtroAtual);
    }

    // Renderiza as matérias filtradas
    materiasFiltradas.forEach(materia => {
        const item = document.createElement('div');
        item.className = 'materia-item';
        item.dataset.id = materia.id;
        item.onclick = () => selecionarMateria(materia);
        item.innerHTML = `
            <div class="materia-nome">${materia.nome}</div>
            <div class="materia-meta">
                <span>${materia.questoes}</span>
                <span class="badge-peso">${materia.tipo === 'especifico' ? 'PESO 2' : 'PESO 1'}</span>
            </div>
        `;
        lista.appendChild(item);
    });

    // Se a matéria atual estiver visível, mantém ela ativa
    if (materiaAtual) {
        const itemAtivo = document.querySelector(`.materia - item[data - id="${materiaAtual.id}"]`);
        if (itemAtivo) {
            itemAtivo.classList.add('active');
        }
    }
}

function selecionarMateria(materia) {
    materiaAtual = materia;

    // Atualiza a classe active nos itens do menu
    document.querySelectorAll('.materia-item').forEach(item => {
        if (item.dataset.id === materia.id) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    renderizarConteudo(materia);
    atualizarProgresso();

    if (window.innerWidth <= 768 && sidebarAberta) {
        toggleSidebar();
    }

    // Resetar scroll para o topo ao trocar de matéria
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
        contentArea.scrollTop = 0;
    }
}

function renderizarConteudo(materia) {
    const contentArea = document.getElementById('dynamic-content');

    let html = `
            <div class="materia-header">
                <div class="materia-titulo">
                    ${materia.nome}
                    <div class="materia-badges">
                        <span class="badge">${materia.questoes}</span>
                        <span class="badge ${materia.tipo === 'especifico' ? 'peso-2' : 'peso-1'}">
                            ${materia.tipo === 'especifico' ? 'PESO 2' : 'PESO 1'}
                        </span>
                    </div>
                </div>
            </div>
        </div >

        <div class="filters-container">
                    <div class="filters-row">
                        <div class="filter-group">
                            <label>Filtrar por Prioridade</label>
                            <div class="filter-prioridade">
                                <button class="btn-prioridade alta" onclick="toggleFiltroPrioridade('Alta', this)">Alta</button>
                                <button class="btn-prioridade media" onclick="toggleFiltroPrioridade('Média', this)">Média</button>
                                <button class="btn-prioridade baixa" onclick="toggleFiltroPrioridade('Baixa', this)">Baixa</button>
                            </div>
                        </div>
                        <div class="filter-group">
                            <label>Tópico Principal</label>
                            <input type="text" id="filtro-topico" placeholder="Buscar tópico..." oninput="aplicarFiltros()">
                        </div>
                        <div class="filter-group">
                            <label>Subtópico</label>
                            <input type="text" id="filtro-subtitulo" placeholder="Buscar subtópico..." oninput="aplicarFiltros()">
                        </div>
                        <div class="filter-group">
                            <label>Status</label>
                            <select id="filtro-status" onchange="aplicarFiltros()">
                                <option value="">Todos</option>
                                <option value="concluido">Concluídos</option>
                                <option value="pendente">Pendentes</option>
                                <option value="revisao">Em Revisão</option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label>Análise FCC</label>
                            <input type="text" id="filtro-analise" placeholder="Buscar na análise..." oninput="aplicarFiltros()">
                        </div>
                        <button class="btn-limpar" onclick="limparFiltros()">Limpar Filtros</button>
                    </div>
                </div>

                <div class="table-container">
                    <table id="tabela-topicos">
                        <thead>
                            <tr>
                                <th style="width: 15%;">Tópico Principal</th>
                                <th style="width: 18%;">Subtópico</th>
                                <th style="width: 8%;">Prioridade</th>
                                <th style="width: 22%;">Análise da Banca FCC</th>
                                <th style="width: 10%;">Status</th>
                                <th style="width: 10%;">Revisão</th>
                                <th style="width: 17%;">Anotações</th>
                            </tr>
                        </thead>
                        <tbody>
            `;

    materia.topicos.forEach(topico => {
        topico.subtitulos.forEach((sub, subIndex) => {
            const id = `${materia.id}-${topico.principal}-${sub.nome}`.replace(/\s+/g, '-').toLowerCase();
            const prioridadeClass = sub.prioridade === 'Alta' ? 'prioridade-alta' :
                sub.prioridade === 'Média' ? 'prioridade-media' : 'prioridade-baixa';

            html += `
                        <tr data-prioridade="${sub.prioridade}" data-topico="${topico.principal.toLowerCase()}" data-subtitulo="${sub.nome.toLowerCase()}" data-analise="${sub.analise.toLowerCase()}" data-topico-principal="${topico.principal}">
                            <td class="topico-principal">${topico.principal}</td>
                            <td>${sub.nome}</td>
                            <td><span class="${prioridadeClass}">${sub.prioridade}</span></td>
                            <td class="analise-fcc">${sub.analise}</td>
                            <td>
                                <button class="btn-concluir" onclick="toggleConcluido('${id}')" id="btn-${id}">
                                    Concluir
                                </button>
                            </td>
                            <td>
                                <button class="btn-revisao" onclick="toggleRevisao('${id}')" id="btn-rev-${id}">
                                    Revisar
                                </button>
                            </td>
                            <td>
                                <textarea class="anotacao" id="note-${id}" placeholder="Anotações..." onblur="salvarAnotacao('${id}')"></textarea>
                            </td>
                        </tr>
                    `;
        });
    });

    html += '</tbody></table></div>';
    contentArea.innerHTML = html;

    carregarDadosMateria(materia);
}

function toggleFiltroPrioridade(prioridade, btn) {
    btn.classList.toggle('active');

    if (filtrosAtivos.prioridade.includes(prioridade)) {
        filtrosAtivos.prioridade = filtrosAtivos.prioridade.filter(p => p !== prioridade);
    } else {
        filtrosAtivos.prioridade.push(prioridade);
    }

    aplicarFiltros();
}

function aplicarFiltros() {
    if (!materiaAtual) return;

    const filtroTopico = document.getElementById('filtro-topico').value.toLowerCase();
    const filtroSubtitulo = document.getElementById('filtro-subtitulo').value.toLowerCase();
    const filtroStatus = document.getElementById('filtro-status').value;
    const filtroAnalise = document.getElementById('filtro-analise').value.toLowerCase();

    const linhas = document.querySelectorAll('#tabela-topicos tbody tr');

    linhas.forEach(linha => {
        const prioridade = linha.getAttribute('data-prioridade');
        const topico = linha.getAttribute('data-topico');
        const subtitulo = linha.getAttribute('data-subtitulo');
        const analise = linha.getAttribute('data-analise');
        const id = linha.querySelector('.btn-concluir').id.replace('btn-', '');
        const isConcluido = localStorage.getItem(`status-${id}`) === 'concluido';
        const isRevisao = localStorage.getItem(`revisao-${id}`) === 'revisado';

        let mostrar = true;

        // Filtro de prioridade
        if (filtrosAtivos.prioridade.length > 0 && !filtrosAtivos.prioridade.includes(prioridade)) {
            mostrar = false;
        }

        // Filtro de tópico
        if (filtroTopico && !topico.includes(filtroTopico)) {
            mostrar = false;
        }

        // Filtro de subtítulo
        if (filtroSubtitulo && !subtitulo.includes(filtroSubtitulo)) {
            mostrar = false;
        }

        // Filtro de status
        if (filtroStatus) {
            if (filtroStatus === 'concluido' && !isConcluido) mostrar = false;
            if (filtroStatus === 'pendente' && isConcluido) mostrar = false;
            if (filtroStatus === 'revisao' && !isRevisao) mostrar = false;
        }

        // Filtro de análise
        if (filtroAnalise && !analise.includes(filtroAnalise)) {
            mostrar = false;
        }

        if (mostrar) {
            linha.classList.remove('hidden');
        } else {
            linha.classList.add('hidden');
        }
    });
}

function limparFiltros() {
    document.getElementById('filtro-topico').value = '';
    document.getElementById('filtro-subtitulo').value = '';
    document.getElementById('filtro-status').value = '';
    document.getElementById('filtro-analise').value = '';

    document.querySelectorAll('.btn-prioridade').forEach(btn => {
        btn.classList.remove('active');
    });

    filtrosAtivos.prioridade = [];

    const linhas = document.querySelectorAll('#tabela-topicos tbody tr');
    linhas.forEach(linha => {
        linha.classList.remove('hidden');
    });
}

function toggleConcluido(id) {
    const btn = document.getElementById(`btn-${id}`);
    const isConcluido = btn.classList.toggle('concluido');

    if (isConcluido) {
        btn.textContent = 'Revisado';
        localStorage.setItem(`status-${id}`, 'concluido');
    } else {
        btn.textContent = 'Concluir';
        localStorage.removeItem(`status-${id}`);
    }

    atualizarProgresso();
    mostrarSaveIndicator();
    aplicarFiltros();
}

function toggleRevisao(id) {
    const btn = document.getElementById(`btn-rev-${id}`);
    const isRevisado = btn.classList.toggle('revisado');

    if (isRevisado) {
        btn.textContent = 'Revisado';
        localStorage.setItem(`revisao-${id}`, 'revisado');
    } else {
        btn.textContent = 'Revisar';
        localStorage.removeItem(`revisao-${id}`);
    }

    mostrarSaveIndicator();
    aplicarFiltros();
}

function salvarAnotacao(id) {
    const textarea = document.getElementById(`note-${id}`);
    localStorage.setItem(`note-${id}`, textarea.value);
    mostrarSaveIndicator();
}

function carregarDados() {
    atualizarProgresso();
}

function carregarDadosMateria(materia) {
    materia.topicos.forEach(topico => {
        topico.subtitulos.forEach(sub => {
            const id = `${materia.id}-${topico.principal}-${sub.nome}`.replace(/\s+/g, '-').toLowerCase();
            const status = localStorage.getItem(`status-${id}`);
            const revisao = localStorage.getItem(`revisao-${id}`);
            const nota = localStorage.getItem(`note-${id}`);

            const btn = document.getElementById(`btn-${id}`);
            const btnRev = document.getElementById(`btn-rev-${id}`);
            const textarea = document.getElementById(`note-${id}`);

            if (btn && status === 'concluido') {
                btn.classList.add('concluido');
                btn.textContent = 'Revisado';
            }

            if (btnRev && revisao === 'revisado') {
                btnRev.classList.add('revisado');
                btnRev.textContent = 'Revisado';
            }

            if (textarea && nota) {
                textarea.value = nota;
            }
        });
    });
}

function atualizarProgresso() {
    const total = document.querySelectorAll('.btn-concluir').length;
    const concluidos = document.querySelectorAll('.btn-concluir.concluido').length;
    const percentual = total > 0 ? Math.round((concluidos / total) * 100) : 0;

    document.getElementById('total-topicos').textContent = total;
    document.getElementById('concluidos').textContent = concluidos;
    document.getElementById('percentual').textContent = percentual + '%';

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = percentual + '%';
    progressBar.textContent = percentual > 0 ? percentual + '%' : '';
}

function mostrarSaveIndicator() {
    const indicator = document.getElementById('save-indicator');
    indicator.style.display = 'block';
    setTimeout(() => {
        indicator.style.display = 'none';
    }, 1500);
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    sidebarAberta = !sidebarAberta;

    if (sidebarAberta) {
        sidebar.classList.remove('closed');
        mainContent.classList.remove('full');
    } else {
        sidebar.classList.add('closed');
        mainContent.classList.add('full');
    }
}

function toggleHeader() {
    const header = document.getElementById('header');
    const btn = document.querySelector('.toggle-header-btn');

    header.classList.toggle('compact');

    if (header.classList.contains('compact')) {
        btn.classList.add('collapsed');
        btn.textContent = '▼';
    } else {
        btn.classList.remove('collapsed');
        btn.textContent = '▲';
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarMenu();
    renderizarHome();

    // Event listeners
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
        contentArea.addEventListener('scroll', handleScroll);
    }
});

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderizarHome();
    atualizarProgressoGeral();
});

// Função para abrir modal de tópicos (universal para todas as matérias)
function openTopicsModalForSubject(subjectId) {
    const materia = materias.find(m => m.id === subjectId);
    if (!materia) return;

    // Para tributario-i, usar detalhesMaterias que tem os 12 tópicos corretos
    let topics;
    if (subjectId === 'tributario-i' && detalhesMaterias['tributario-i']) {
        topics = detalhesMaterias['tributario-i'].topicos;
    } else {
        topics = materia.topicos.map(t => t.principal);
    }

    const topicsListHTML = topics.map((topic, index) => {
        // Apenas o tópico 9 de Direito Tributário (tributario-i) está disponível
        const topicName = typeof topic === 'string' ? topic : topic.principal;
        const isAvailable = (subjectId === 'tributario-i' && index === 8);
        const clickHandler = isAvailable ? `onclick="openQuizModal('${topicName}')"` : `onclick="showComingSoon('${topicName}')"`;
        const availabilityClass = isAvailable ? 'available' : 'coming-soon';
        const statusText = isAvailable ? 'Clique para resolver questões' : '🔒 Em breve';

        return `
            <div class="topic-list-item ${availabilityClass}" ${clickHandler}>
                <div class="topic-icon">📚</div>
                <div class="topic-info">
                    <div class="topic-name">${topicName}</div>
                    <div class="topic-meta">${statusText}</div>
                </div>
                <div class="topic-arrow">${isAvailable ? '→' : '🔒'}</div>
            </div>
        `;
    }).join('');

    // ADICIONAR QUIZZES ESPECÍFICOS PARA DIREITO FINANCEIRO
    let quizzesHTML = '';
    if (subjectId === 'financeiro') {
        quizzesHTML = `
            <div class="quiz-divider">🎯 Quizzes Disponíveis</div>
            <div class="topic-list-item available" onclick="openQuizModal('PPA, LDO e LOA', 'quiz_ppa_ldo_loa.html')">
                <div class="topic-icon">📝</div>
                <div class="topic-info">
                    <div class="topic-name">PPA, LDO e LOA</div>
                    <div class="topic-meta">50 questões • Clique para resolver</div>
                </div>
                <div class="topic-arrow">→</div>
            </div>
            <div class="topic-list-item available" onclick="openQuizModal('Princípios Orçamentários', 'quiz_principios_orcamentarios.html')">
                <div class="topic-icon">📝</div>
                <div class="topic-info">
                    <div class="topic-name">Princípios Orçamentários</div>
                    <div class="topic-meta">15 questões • Clique para resolver</div>
                </div>
                <div class="topic-arrow">→</div>
            </div>
        `;
    }

    const modalHTML = `
        <div class="topics-modal-overlay" id="topicsModalOverlay" onclick="closeTopicsModal(event)">
            <div class="topics-modal-container" onclick="event.stopPropagation()">
                <div class="topics-modal-header">
                    <h2>📋 ${materia.nome} - Conteúdos Cobrados</h2>
                    <button class="topics-modal-close" onclick="closeTopicsModal()">✕</button>
                </div>
                <div class="topics-modal-body">
                    ${topicsListHTML}
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
}

// Função para mostrar mensagem de "em breve"
function showComingSoon(topicName) {
    const messageHTML = `
        <div class="coming-soon-toast" id="comingSoonToast">
            <div class="toast-icon">🔒</div>
            <div class="toast-content">
                <div class="toast-title">Conteúdo em Desenvolvimento</div>
                <div class="toast-message">As questões de "${topicName}" estarão disponíveis em breve!</div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', messageHTML);

    // Remover após 3 segundos
    setTimeout(() => {
        const toast = document.getElementById('comingSoonToast');
        if (toast) {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }
    }, 3000);
}

// Função para fechar modal de tópicos
function closeTopicsModal(event) {
    if (event && event.target.id !== 'topicsModalOverlay' && !event.target.classList.contains('topics-modal-close')) {
        return;
    }

    const modal = document.getElementById('topicsModalOverlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Função para abrir o quiz em modal
function openQuizModal(topicName, quizFile) {
    // Fechar modal de tópicos se estiver aberto
    closeTopicsModal();
    // Se não especificou arquivo, usar o padrão
    const file = quizFile || '20questoesExtincao.html';

    // Criar modal overlay do quiz
    const modalHTML = `
        <div class="quiz-modal-overlay" id="quizModalOverlay" onclick="closeQuizModal(event)">
            <div class="quiz-modal-container" onclick="event.stopPropagation()">
                <button class="quiz-modal-close" onclick="closeQuizModal()">✕</button>
                <iframe src="${file}" class="quiz-iframe"></iframe>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal do quiz
function closeQuizModal(event) {
    if (event && event.target.id !== 'quizModalOverlay' && !event.target.classList.contains('quiz-modal-close')) {
        return;
    }

    const modal = document.getElementById('quizModalOverlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}
// Event listeners
const contentArea = document.getElementById('content-area');
if (contentArea) {
    contentArea.addEventListener('scroll', handleScroll);
}
