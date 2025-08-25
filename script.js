const textos = document.querySelectorAll(".texto");
const padroes = [
  ["01", "10", "00", "11"],
  ["10", "01", "11", "00"],
  ["00", "11", "01", "10"],
  ["11", "00", "10", "01"],
];
let indicePadrao = 0;

setInterval(() => {
  padroes[indicePadrao].forEach((padrao, i) => {
    textos[i].textContent = padrao;
  });
  indicePadrao = (indicePadrao + 1) % padroes.length;
}, 500);

document.addEventListener("DOMContentLoaded", () => {
  const tabelaGrade = document.querySelector("#grade-curricular table tbody");

  const materias = [
    {
      nome: "Programação e Desenvolvimento de Software I",
      codigo: "DCC203 OB60",
      periodo: 1,
      professores: [
        { nome: "HÉCTOR AZPÚRUA", email: "hector@dcc.ufmg.br" },
        { nome: "PEDRO OLMO", email: "olmo@dcc.ufmg.br" },
      ],
      bibliografia: [
        {
          nome: "Projeto de Algoritmos com Implementações em Pascal e C",
          link: "https://www2.dcc.ufmg.br/livros/algoritmos/",
          tipo: "link",
        },
      ],
      materiais: [
        {
          nome: "Pedro Olmo GitHub",
          link: "https://pedroolmo.github.io/teaching/pds1.html",
          tipo: "link",
        },
        {
          nome: "Playlist PDS1",
          link: "https://www.youtube.com/playlist?list=PL_ClcqWHc8M-K0Q1AOpHCLzN_lKljdT1G",
          tipo: "video",
        },
        {
          nome: "aula_1_apresentacao_do_curso_2025",
          link: "arquivos/pds1/aula_1_apresentacao_do_curso_2025.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_2_compilacao",
          link: "arquivos/pds1/aula_2_compilacao.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_3_tipos_de_dados",
          link: "arquivos/pds1/aula_3_tipos_de_dados.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_4_variaveis",
          link: "arquivos/pds1/aula_4_variaveis.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_5_funcoes",
          link: "arquivos/pds1/aula_5_funcoes.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_6_memoria",
          link: "arquivos/pds1/aula_6_memoria.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_7_operacoes_bit_a_bit",
          link: "arquivos/pds1/aula_7_operacoes_bit_a_bit.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_8_condicoes",
          link: "arquivos/pds1/aula_8_condicoes.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_9_repeticao_do_while_for",
          link: "arquivos/pds1/aula_9_repeticao_do_while_for.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_10_repeticao_break_for",
          link: "arquivos/pds1/aula_10_repeticao_break_for.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_11_strings",
          link: "arquivos/pds1/aula_11_strings.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_12_variaveis_indexadas",
          link: "arquivos/pds1/aula_12_variaveis_indexadas.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_13_passagem_parametros",
          link: "arquivos/pds1/aula_13_passagem_parametros.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_14_estruturas",
          link: "arquivos/pds1/aula_14_estruturas.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_15_arquivos",
          link: "arquivos/pds1/aula_15_arquivos.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_16_arquivos_texto",
          link: "arquivos/pds1/aula_16_arquivos_texto.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_17_alocacao_dinamica_memoria",
          link: "arquivos/pds1/aula_17_alocacao_dinamica_memoria.pptx.pdf",
          tipo: "pdf",
        },
        {
          nome: "aula_18_recursividade",
          link: "arquivos/pds1/aula_18_recusividade.pptx.pdf",
          tipo: "pdf",
        },
      ],
      atividades: [],
      avaliacoes: [],
    },
    {
      nome: "Matemática Discreta",
      codigo: "DCC216 OB60",
      periodo: 2,
      professores: [
        {
          nome: "Loic",
          email: "lcerf@dcc.ufmg.br",
        },
      ],
      bibliografia: [
        {
          nome: "Matemática Discreta e suas aplicações - Rosen - 7a edição (English) - pág 385",
          link: "arquivos/md/Matemática Discreta e Suas Aplicações - KENNETH H_ ROSEN; HELENA CASTRO; JOAO GUILHERME GIUDICE - 6th, 2009 - Mc Graw Hill - 9788577260362 - dc6e03f48f252e317b8cbd919a76f747 - Anna’s Archive-1_removed-1.pdf",
          tipo: "pdf",
        },
      ],
      materiais: [
        {
          nome: "Cronograma",
          link: "arquivos/md/cronograma - TM2.pdf",
          tipo: "pdf",
        },
      ],
      atividades: [
        {
          nome: "l1",
          link: "arquivos/md/l1.pdf",
          tipo: "pdf",
        },
      ],
      avaliacoes: [
        { nome: "20/07/2025 - Análise Combinatória e Probabilidade" },
        { nome: "25/10/2025 - Complexidade e Combinatória Avançada" },
        { nome: "29/11/2025 - Grafos e Relações" },
      ],
    },
    { nome: "Estruturas de Dados", codigo: "DCC205 OB60", periodo: 3 },
    { nome: "Algoritmos I", codigo: "DCC206 OB60", periodo: 4 },
    {
      nome: "Fundamentos de Teoria da Computação",
      codigo: "DCC129 OB60",
      periodo: 5,
    },
    { nome: "Linguagens de Programação", codigo: "DCC024 OB60", periodo: 6 },
    { nome: "Optativa de Área Temática", codigo: "OP60", periodo: 7 },
    { nome: "Optativa de Área Temática", codigo: "OP60", periodo: 8 },
    {
      nome: "Laboratórios de Projetos Integradores Área Temática",
      codigo: "INUXXX OP60",
      periodo: 9,
    },
    {
      nome: "Estágio Supervisionado Eng Computação",
      codigo: "INUXXX OB165",
      periodo: 10,
    },
    {
      nome: "Programação e Desenvolvimento de Software II",
      codigo: "DCC204 OB60",
      periodo: 2,
      professores: [
        { nome: "Douglas", email: "douglas.macharet@dcc.ufmg.br" },
        { nome: "Héctor", email: "hector@dcc.ufmg.br" },
        { nome: "Luiz", email: "chaimo@dcc.ufmg.br" },
      ],
      bibliografia: [
        {
          nome: "Absolute C++",
          link: "arquivos/pds2/absolutecpp.pdf",
          tipo: "pdf",
        },
      ],
      materiais: [
        {
          nome: "Cronograma",
          link: "arquivos/pds2/2025.2 - PDS2 - Cronograma Detalhado.pdf",
          tipo: "pdf",
        },
        {
          nome: "Plano de ensino",
          link: "arquivos/pds2/2025.2 - PDS2 - Plano ensino.pdf",
          tipo: "pdf",
        },
      ],
      atividades: [{nome: "Projeto.cpp", link: "arquivos/pds2/projeto-final.pdf", tipo: "pdf"}],
      avaliacoes: [
        { nome: "04/10/2025" },
        { nome: "08/11/2025" },
        { nome: "25/10/2025 a 27/10/2025" },
      ],
    },
    { nome: "Álgebra Linear Computacional", codigo: "DCC639 OB60", periodo: 3 },
    { nome: "Introdução a Bancos de Dados", codigo: "DCC011 OB60", periodo: 4 },
    { nome: "Sistemas Operacionais", codigo: "DCC605 OB60", periodo: 6 },
    { nome: "Optativa de Área Temática", codigo: "OP60", periodo: 7 },
    { nome: "Optativa de Área Temática", codigo: "OP60", periodo: 8 },
    { nome: "Projeto Final de Curso I", codigo: "INUXXX OB60", periodo: 9 },
    { nome: "Projeto Final de Curso II", codigo: "INUXXX OB60", periodo: 10 },
    {
      nome: "Introdução à Lógica Computacional",
      codigo: "DCC638 OB60",
      periodo: 1,
      professores: [{ nome: "HANIEL BARBOSA", email: "hbarbosa@dcc.ufmg.br" }],
      bibliografia: [
        {
          nome: "Discrete Mathematics and its Applications, Kenneth Rosen, McGraw-Hill Higher Education. 7th edition, 2011. ",
          link: "https://elearn.daffodilvarsity.edu.bd/pluginfile.php/783865/mod_resource/intro/Discrete%20Mathematics%20and%20Its%20Applications%2C%207%20edition%20-%20Rosen.pdf",
          tipo: "link",
        },
      ],
      materiais: [
        {
          nome: "Haniel GitHub",
          link: "https://hanielb.github.io/2025.1-ilc/",
          tipo: "link",
        },
      ],
      atividades: [],
      avaliacoes: [],
    },
    { nome: "Equações Diferenciais A", codigo: "MAT015 OB60", periodo: 3 },
    {
      nome: "Fund Sistemas Paralelos Distribuídos",
      codigo: "DCC641 OB30",
      periodo: 4,
    },
    { nome: "Engenharia de Software", codigo: "DCC603 OB60", periodo: 6 },
    { nome: "Redes de Computadores", codigo: "INUXXX OB60", periodo: 7 },
    {
      nome: "Introdução Segurança Computacional",
      codigo: "DCCXXX OB60",
      periodo: 8,
    },
    {
      nome: "Eng. de Computação e Sociedade",
      codigo: "INUXXX OB30",
      periodo: 9,
    },
    {
      nome: "Cálculo Diferencial e Integral 1",
      codigo: "MAT001 OB90",
      periodo: 1,
      professores: [{ nome: "PAULO CUPERTINO DE LIMA", email: "" }],
      bibliografia: [
        {
          nome: "Cálculo, vol. 1. Stewart, James. 7a edição (tradução da 9a ed. norte-americana)",
          link: "arquivos/calc 1/Calculo Volume 1 - Stewart_1_ptbr.pdf",
          tipo: "pdf",
        },
        {
          nome: "Cálculo, vol. 1. Anton, Howard. 10a edição.",
          link: "arquivos/calc 1/calculus-10th-edition-anton.pdf",
          tipo: "pdf",
        },
      ],
      materiais: [
        {
          nome: "Aulas Calc 1",
          link: "arquivos/calc 1/Aulas Calc 1.pdf",
          tipo: "pdf",
        },
        {
          nome: "4_Limites",
          link: "arquivos/calc 1/limites/Slide 4_Limites.pdf",
          tipo: "pdf",
        },
        {
          nome: "5_propriedades de limites",
          link: "arquivos/calc 1/limites/Slide 5_propriedades de limites.pdf",
          tipo: "pdf",
        },
        {
          nome: "6_continuidade",
          link: "arquivos/calc 1/limites/Slide 6_continuidade.pdf",
          tipo: "pdf",
        },
        {
          nome: "7_Limites no infinito",
          link: "arquivos/calc 1/limites/Slide 7_Limites no infinito.pdf",
          tipo: "pdf",
        },
        {
          nome: "8_Derivadas",
          link: "arquivos/calc 1/derivadas/8_Derivadas.pdf",
          tipo: "pdf",
        },
        {
          nome: "9_Regras_de_Derivacao",
          link: "arquivos/calc 1/derivadas/9_Regras_de_Derivacao.pdf",
          tipo: "pdf",
        },
        {
          nome: "10_Derivadas de funções trigonométricas",
          link: "arquivos/calc 1/derivadas/10_Derivadas de funções trigonométricas.pdf",
          tipo: "pdf",
        },
        {
          nome: "11_Regra_da_Cadeia",
          link: "arquivos/calc 1/derivadas/11_Regra_da_Cadeia.pdf",
          tipo: "pdf",
        },
        {
          nome: "12_Derivação implícita",
          link: "arquivos/calc 1/derivadas/12_Derivação implícita.pdf",
          tipo: "pdf",
        },
        {
          nome: "13_taxas_de_variação",
          link: "arquivos/calc 1/derivadas/13_taxas_de_variação.pdf",
          tipo: "pdf",
        },
        {
          nome: "14_máximos e mínimos",
          link: "arquivos/calc 1/derivadas/14_máximos e mínimos.pdf",
          tipo: "pdf",
        },
        {
          nome: "15_Teorema do valor médio",
          link: "arquivos/calc 1/derivadas/15_Teorema do valor médio.pdf",
          tipo: "pdf",
        },
        {
          nome: "16-derivadas e gráficos",
          link: "arquivos/calc 1/derivadas/16-derivadas e gráficos.pdf",
          tipo: "pdf",
        },
        {
          nome: "17_Regra_de_Lhospital",
          link: "arquivos/calc 1/derivadas/17_Regra_de_Lhospital.pdf",
          tipo: "pdf",
        },
        {
          nome: "18_Esboço de gráficos",
          link: "arquivos/calc 1/derivadas/18_Esboço de gráficos.pdf",
          tipo: "pdf",
        },
        {
          nome: "19_Otimização",
          link: "arquivos/calc 1/derivadas/19_Otimização.pdf",
          tipo: "pdf",
        },
        {
          nome: "20-Primitivas",
          link: "arquivos/calc 1/integral/20-Primitivas.pdf",
          tipo: "pdf",
        },
        {
          nome: "21-Integrais - áreas e distâncias",
          link: "arquivos/calc 1/integral/21-Integrais - áreas e distâncias.pdf",
          tipo: "pdf",
        },
        {
          nome: "22-Integral definida",
          link: "arquivos/calc 1/integral/22-Integral definida.pdf",
          tipo: "pdf",
        },
        {
          nome: "23-Teorema fundamental do cálculo",
          link: "arquivos/calc 1/integral/23-Teorema fundamental do cálculo.pdf",
          tipo: "pdf",
        },
        {
          nome: "24-Integal indefinida",
          link: "arquivos/calc 1/integral/24-Integal indefinida.pdf",
          tipo: "pdf",
        },
        {
          nome: "25-Integração por substituição",
          link: "arquivos/calc 1/integral/25-Integração por substituição.pdf",
          tipo: "pdf",
        },
        {
          nome: "26-Cálculo de áreas",
          link: "arquivos/calc 1/integral/26-Cálculo de áreas.pdf",
          tipo: "pdf",
        },
        {
          nome: "27-Volumes",
          link: "arquivos/calc 1/integral/27-Volumes.pdf",
          tipo: "pdf",
        },
        {
          nome: "28-Cascas cilindricas",
          link: "arquivos/calc 1/integral/28-Cascas cilindricas.pdf",
          tipo: "pdf",
        },
        {
          nome: "29-Integração por partes",
          link: "arquivos/calc 1/integral/29-Integração por partes.pdf",
          tipo: "pdf",
        },
        {
          nome: "30-integrais trigonométricas",
          link: "arquivos/calc 1/integral/30-integrais trigonométricas.pdf",
          tipo: "pdf",
        },
        {
          nome: "31_Substituição trigonométrica",
          link: "arquivos/calc 1/integral/31_Substituição trigonométrica.pdf",
          tipo: "pdf",
        },
        {
          nome: "32-fraçoes parciais",
          link: "arquivos/calc 1/integral/32-fraçoes parciais.pdf",
          tipo: "pdf",
        },
        {
          nome: "33-Integrais impróprias",
          link: "arquivos/calc 1/integral/33-Integrais impróprias.pdf",
          tipo: "pdf",
        },
      ],
      atividades: [
        {
          nome: "Monitoria-Cálculo1",
          link: "arquivos/calc 1/Monitoria-Cálculo1.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista Revisão Calc 1",
          link: "arquivos/calc 1/Lista Revisão Calc 1.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista Limites de exerc°cios- numerada - Seá∆o 2.2",
          link: "arquivos/calc 1/limites/Lista Limites de exerc°cios- numerada - Seá∆o 2.2.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista Limites Seção 2.3- renumerada",
          link: "arquivos/calc 1/limites/Lista Limites Seção 2.3- renumerada.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista Limites Seção 2.5",
          link: "arquivos/calc 1/limites/Lista Limites Secao_2.5.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista Limites Secao_2.6",
          link: "arquivos/calc 1/limites/Lista Limites Seção 2.6.pdf",
          tipo: "pdf",
        },
        {
          nome: "Derivadas Lista 3.1- renumerada",
          link: "arquivos/calc 1/derivadas/Lista 3.1- renumerada.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista Seção 2.7- renumerada",
          link: "arquivos/calc 1/derivadas/Lista Seção 2.7- renumerada.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista Seção 3.2- renumerada",
          link: "arquivos/calc 1/derivadas/Lista Seção 3.2- renumerada.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista seção 3.5- renumerada",
          link: "arquivos/calc 1/derivadas/Lista seção 3.5- renumerada.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista seção 3.6- renumerada",
          link: "arquivos/calc 1/derivadas/Lista seção 3.6- renumerada.pdf",
          tipo: "pdf",
        },
        {
          nome: "Seção 2.8- renumerada",
          link: "arquivos/calc 1/derivadas/Seção 2.8- renumerada.pdf",
          tipo: "pdf",
        },
        {
          nome: "Seção 3.3- renumerada (derivada)",
          link: "arquivos/calc 1/derivadas/Seção 3.3- renumerada (derivada).pdf",
          tipo: "pdf",
        },
        {
          nome: "Seção 3.4- renumerada",
          link: "arquivos/calc 1/derivadas/Seção 3.4- renumerada.pdf",
          tipo: "pdf",
        },
        {
          nome: "Integrais Lista seção 5.1- r",
          link: "arquivos/calc 1/integral/Lista seção 5.1- r.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista seção 5.2- r",
          link: "arquivos/calc 1/integral/Lista seção 5.2- r.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista seção 5.3- r",
          link: "arquivos/calc 1/integral/Lista seção 5.3- r.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista seção 5.4- r",
          link: "arquivos/calc 1/integral/Lista seção 5.4- r.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista seção 5.5-r",
          link: "arquivos/calc 1/integral/Lista seção 5.5-r.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista seção 6.1-r",
          link: "arquivos/calc 1/integral/Lista seção 6.1-r.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista seção 6.2-r",
          link: "arquivos/calc 1/integral/Lista seção 6.2-r.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista seção 6.3-r",
          link: "arquivos/calc 1/integral/Lista seção 6.3-r.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista seção 7.1-r",
          link: "arquivos/calc 1/integral/Lista seção 7.1-r.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista seção 7.2-r",
          link: "arquivos/calc 1/integral/Lista seção 7.2-r.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista seção 7.4-r",
          link: "arquivos/calc 1/integral/Lista seção 7.4-r.pdf",
          tipo: "pdf",
        },
        {
          nome: "Lista seção 7.8-r",
          link: "arquivos/calc 1/integral/Lista seção 7.8-r.pdf",
          tipo: "pdf",
        },
      ],
      avaliacoes: [],
    },
    {
      nome: "Cálculo de Várias Variáveis",
      codigo: "MAT042 OB60",
      periodo: 2,
      professores: [{ nome: "Elizaveta Vishnyakova", email: "" }],
      bibliografia: [
        {
          nome: "Cálculo, Volume 2, James Stewart (sexto ou sétima edição)",
          link: "arquivos/calc 2/Calculo - James Stewart - 7 Edição - Volume 2.pdf",
          tipo: "pdf",
        },
        {
          nome: "PENNEY,E. D., EDWARDS, JR.C.H. - Cálculo com Geometria Analítica - Ed. Prentice-Hall do Brasil - Volumes 2 e 3",
          link: "arquivos/calc 2/calculus-10th-edition-anton.pdf",
          tipo: "pdf",
        },
        {
          nome: "SIMMONS, G. F. - Cálculo com Geometria Analítica - McGraw-Hill, SP, volume 02",
          link: "arquivos/calc 2/Calculo Volume 1 - Stewart_1_ptbr.pdf",
          tipo: "pdf",
        },
        {
          nome: "LEITHOLD, L. - Cálculo com Geometria Analítica - Harbra, SP, volume 02",
          link: "arquivos/calc 2/calculus-10th-edition-anton.pdf",
          tipo: "pdf",
        },
        {
          nome: "GUIDORIZZI, H - Um Curso de Cálculo, LTC - Volume 02",
          link: "arquivos/calc 2/Calculo Volume 1 - Stewart_1_ptbr.pdf",
          tipo: "pdf",
        },
        {
          nome: "BOULOS, P. / OLIVEIRA, I. C. - Geometria Analítica (um tratamento vetorial) - McGraw-Hill - SP",
          link: "arquivos/calc 2/calculus-10th-edition-anton.pdf",
          tipo: "pdf",
        },
        {
          nome: "ÁVILA, G. S. S. - Cálculo, Volume 02 - LTC",
          link: "arquivos/calc 2/Calculo Volume 1 - Stewart_1_ptbr.pdf",
          tipo: "pdf",
        },
        {
          nome: "APOSTOL, T. M. - Cálculo. Ed. Reverté Ltda. Volume 1 e 2",
          link: "arquivos/calc 2/calculus-10th-edition-anton.pdf",
          tipo: "pdf",
        },
        {
          nome: "SWOKOWSKI, E. W. - Cálculo com Geometria Analítica - Ed. McGraw-Hill Ltda. - SP - Volume 2",
          link: "arquivos/calc 2/Calculo Volume 1 - Stewart_1_ptbr.pdf",
          tipo: "pdf",
        },
      ],
      materiais: [
        {
          nome: "PROGRAMA",
          link: "arquivos/calc 2/programa Mat 042 (1).pdf",
          tipo: "pdf",
        },
        {
          nome: "aula 1-1",
          link: "arquivos/calc 2/aula 1-1.pdf",
          tipo: "pdf",
        },
      ],
      atividades: [],
      avaliacoes: [],
    },
    {
      nome: "Fundamentos de Estatística e Ciência de Dados",
      codigo: "EST0198 OB60",
      periodo: 3,
    },
    {
      nome: "Arquitetura e Organização de Computadores I",
      codigo: "INUXXX OB60",
      periodo: 4,
    },
    { nome: "Laboratórios de Projetos II", codigo: "INUXXX OB60", periodo: 6 },
    { nome: "Laboratórios de Projetos III", codigo: "INUXXX OB60", periodo: 7 },
    { nome: "Optativa - Núcleo Específico", codigo: "OP60", periodo: 8 },
    { nome: "Optativa - Núcleo Específico", codigo: "OP60", periodo: 9 },
    {
      nome: "Geometria Analítica e Álgebra Linear",
      codigo: "MAT038 OB60",
      periodo: 1,
      professores: [{ nome: "EVANDRO", email: "evandro@cefetmg.br" }],
      bibliografia: [
        {
          nome: "Um Curso de Geometria Analítica e Álgebra Linear (Julho 2014) - Reginaldo Santos",
          link: "https://www.dropbox.com/scl/fi/2okvtr6pwawnqvmofpf6o/gaalt0.pdf?rlkey=mo7wdzpko8t16n03j37wkvul2&e=1&dl=0",
          tipo: "link",
        },
        {
          nome: "José L. Boldini 3a edição - Editora Horbra",
          link: "https://www.cin.ufpe.br/~brgccf/archive/Algebra%20Linear%20Boldrini.pdf",
          tipo: "link",
        },
      ],
      materiais: [
        {
          nome: "Playlist de GAAL",
          link: "https://youtube.com/playlist?list=PL_AAwUeNMj6Lm3nJNE9b2cfH6ivaPWpGf&si=bmp-Vgd9Ue7WCX5w",
          tipo: "link",
        },
      ],
      atividades: [],
      avaliacoes: [],
    },
    {
      nome: "Fundamentos de Mecânica",
      codigo: "FIS065 OB60",
      periodo: 2,
      professores: [],
      bibliografia: [
        {
          nome: "Física Básica – Mecânica Alaor Chaves e Sampaio Editora LAB, 2007",
          link: "arquivos/fundmec/pdfcoffee.com_349403333-fisica-1-mecanica-alaor-chaves-pdfpdf-pdf-free.pdf",
          tipo: "pdf",
        },
      ], materiais: [], atividades: [], avaliacoes: [{nome: "08/09/2025"},{nome: "13/10/2025"}, {nome: "24/11/2025"}]
    },
    {
      nome: "Laboratório de Circuitos Elétricos I",
      codigo: "ELE028 OB30",
      periodo: 3,
    },
    {
      nome: "Arquitetura e Organização de Computadores II",
      codigo: "INUXXX OB60",
      periodo: 4,
    },
    { nome: "Pesquisa Operacional", codigo: "INUXXX OB60", periodo: 6 },
    { nome: "Fenômenos de Transporte", codigo: "ENG157 OB30", periodo: 7 },
    { nome: "Optativa - Núcleo Geral", codigo: "OP60", periodo: 9 },
    {
      nome: "Física Experimental Básica - Mecânica",
      codigo: "FIS151 OB30",
      periodo: 1,
      professores: [
        { nome: `A - RICARDO WAGNER NUNES`, email: `` },
        { nome: `B - FLAVIO ORLANDO PLENTZ FILHO`, email: `` },
      ],
      bibliografia: [],
      materiais: [
        {
          nome: "Acesso aos materiais da disciplina",
          link: "https://www.fisica.ufmg.br/ciclo-basico/disciplinas/feb-mecanica/",
          tipo: "link",
        },
      ],
      atividades: [],
      avaliacoes: [],
    },
    {
      nome: "Fund. Interação Humano Computador",
      codigo: "DCCXXX OB30",
      periodo: 2,
    },
    {
      nome: "Análise de Sistemas Dinâmicos Lineares",
      codigo: "ELT088 OB60",
      periodo: 4,
    },
    {
      nome: "Laboratório de Circuitos Eletrônicos I",
      codigo: "ELT089 OB30",
      periodo: 6,
    },
    {
      nome: "Concepção de Circuitos Integrados",
      codigo: "ELEXXX OB60",
      periodo: 7,
    },
    { nome: "Optativa - Núcleo Geral", codigo: "OP60", periodo: 10 },
    {
      nome: "Introdução à Engenharia de Computação",
      codigo: "INUXXX OB45",
      periodo: 1,
      professores: [
        {
          nome: "RICARDO HIROSHI CALDEIRA TAKAHASHI",
          email: "r.h.c.takahashi@gmail.com",
        },
        { nome: "RICARDO DE OLIVEIRA DUARTE", email: "" },
        { nome: "GEORGE LUIZ MEDEIROS TEODORO", email: "" },
      ],
      bibliografia: [],
      materiais: [
        {
          nome: "ACM-IEEE-CE2016",
          link: "arquivos/iec/aula 1/ACM-IEEE-CE2016.pdf",
          tipo: "pdf",
        },
        { nome: "Apostila 1", link: "caminho/para/apostila1.pdf", tipo: "pdf" },
        {
          nome: "Boletim - Normas Graduação",
          link: "arquivos/iec/aula 1/Boletim - Normas Graduação.pdf",
          tipo: "pdf",
        },
        {
          nome: "Currículo - Fluxograma",
          link: "arquivos/iec/aula 1/Currículo - Fluxograma.pdf",
          tipo: "pdf",
        },
        {
          nome: "Boletim - Normas Graduação - anotado",
          link: "arquivos/iec/aula 2/Boletim - Normas Graduação - anotado.pdf",
          tipo: "pdf",
        },
        {
          nome: "manual SIGA_aluno_grad",
          link: "arquivos/iec/aula 2/manual SIGA_aluno_grad.pdf",
          tipo: "pdf",
        },
      ],
      atividades: [
        {
          nome: "NGG prevencao e combate a incendios",
          link: "arquivos/iec/aula 2/Aula 2 - NGG prevencao e combate a incendios - v1.pptx",
          tipo: "pptx",
        },
      ],
      avaliacoes: [],
    },
    {
      nome: "Análise de Circuitos Elétricos I",
      codigo: "ELE064 OB30",
      periodo: 2,
      professores: [{ nome: "TM Diógenes C. da Silva Jr.", email: "diogenes@ufmg.br" }],
      bibliografia: [
        {
          nome: "“Fundamentos de Física - Eletromagnetismo”, Halliday, Resnick Walker, 10ª edição",
          link: "arquivos/ace/Circuitos Eletricos 10Ed Nilsson Riedel.pdf",
          tipo: "pdf",
        },
      ],
      materiais: [
        {
          nome: "Lista 1",
          link: "arquivos/fundele/Lista_1.pdf",
          tipo: "pdf",
        },
      ],
      atividades: [],
      avaliacoes: [],
    },
    {
      nome: "Análise de Circuitos Elétricos II",
      codigo: "ELE065 OB30",
      periodo: 3,
    },
    { nome: "Química Geral E", codigo: "QUI628 OB60", periodo: 4 },
    {
      nome: "Dispositivos e Circuitos Eletrônicos Básicos",
      codigo: "ELT084 OB60",
      periodo: 5,
    },
    {
      nome: "Processamento Digital de Sinais",
      codigo: "ELEXXX OB60",
      periodo: 5,
    },
    { nome: "Teoria dos Materiais", codigo: "ELE032 OB60", periodo: 8 },
    {
      nome: "Optativa - Núcleo Específico ou Núcleo Avançado",
      codigo: "OP60",
      periodo: 10,
    },
    {
      nome: "Fundamentos de Eletromagnetismo",
      codigo: "FIS069 OB60",
      periodo: 2,
      professores: [{ nome: "TN2 MYRIANO", email: "myriano@fisica.ufmg.br" }],
      bibliografia: [
        {
          nome: "“Fundamentos de Física - Eletromagnetismo”, Halliday, Resnick Walker, 10ª edição",
          link: "arquivos/fundele/FIsica 3 Eletromagnetismo Halliday.pdf",
          tipo: "pdf",
        },
      ],
      materiais: [
        {
          nome: "Lista 1",
          link: "arquivos/fundele/Lista_1.pdf",
          tipo: "pdf",
        },
      ],
      atividades: [],
      avaliacoes: [],
    },
    { nome: "Sistemas Digitais", codigo: "ELT124 OB60", periodo: 3 },
    {
      nome: "Laboratório de Sistemas Digitais",
      codigo: "ELT029 OB30",
      periodo: 4,
    },
    {
      nome: "Projetos de Sistemas Embarcados",
      codigo: "EEEXXX OB60",
      periodo: 5,
    },
    {
      nome: "Fundamentos de Inteligência Artificial",
      codigo: "INUXXX OB30",
      periodo: 6,
    },
    { nome: "Ciências do Ambiente", codigo: "ESAXXX OB30", periodo: 7 },
    { nome: "Administração T.G.A.", codigo: "CAD103 OB60", periodo: 8 },
    { nome: "Optativa - Núcleo Avançado", codigo: "OP60", periodo: 10 },
  ];

  const materiasPorPeriodo = {};
  materias.forEach((materia) => {
    if (!materiasPorPeriodo[materia.periodo]) {
      materiasPorPeriodo[materia.periodo] = [];
    }
    materiasPorPeriodo[materia.periodo].push(materia);
  });

  for (const periodo in materiasPorPeriodo) {
    const linha = document.createElement("tr");

    const colunaPeriodo = document.createElement("td");
    colunaPeriodo.textContent = periodo;
    linha.appendChild(colunaPeriodo);

    const colunaMaterias = document.createElement("td");
    materiasPorPeriodo[periodo].forEach((materia) => {
      const materiaBox = document.createElement("div");
      materiaBox.className = "materia-box";
      materiaBox.textContent = `${materia.nome} (${materia.codigo})`;
      if (parseInt(periodo) >= 3 && parseInt(periodo) <= 10) {
        materiaBox.classList.add("periodo-3-10");
      }
      materiaBox.addEventListener("click", () => {
        mostrarDetalhesMateria(materia);
      });
      colunaMaterias.appendChild(materiaBox);
    });
    linha.appendChild(colunaMaterias);

    tabelaGrade.appendChild(linha);
  }

  function mostrarDetalhesMateria(materia) {
    if (materia.periodo < 3) {
      const detalhes = `
                <h3>${materia.nome} (${materia.codigo})</h3>
                <p>🧑‍🏫Professor(es): ${formatarProfessores(
                  materia.professores
                )}</p>
                <p>💯Avaliações: ${formatarAvaliacoes(materia.avaliacoes)}</p>
                <p>📝Atividades: ${formatarMateriais(materia.atividades)}</p>
                <p>📚Bibliografia: ${formatarMateriais(
                  materia.bibliografia
                )}</p>
                <p>📄Materiais: ${formatarMateriais(materia.materiais)}</p>
                
                
            `;
      modalContent.innerHTML = detalhes;
      modal.style.display = "block";
    }
  }

  function formatarProfessores(professores) {
    if (professores && professores.length > 0) {
      let professoresHTML = "<ul>";
      professores.forEach((professor) => {
        professoresHTML += `<li>${professor.nome} (<a href="mailto:${professor.email}">${professor.email}</a>)</li>`;
      });
      professoresHTML += "</ul>";
      return professoresHTML;
    } else {
      return "Professor não especificado.";
    }
  }

  function formatarMateriais(materiais) {
    if (materiais && materiais.length > 0) {
      let materiaisHTML = "<ul>";
      materiais.forEach((material) => {
        const link = material.link;
        const nome = material.nome;

        if (material.tipo === "pdf") {
          materiaisHTML += `<li><a href="${link}" target="_blank">${nome} (PDF)</a></li>`;
        } else if (material.tipo === "link") {
          materiaisHTML += `<li><a href="${link}" target="_blank">${nome} (Link)</a></li>`;
        } else if (material.tipo === "video") {
          materiaisHTML += `<li><a href="${link}" target="_blank">${nome} (Vídeo)</a></li>`;
        } else if (material.tipo === "pptx") {
          materiaisHTML += `<li><a href="${link}" target="_blank">${nome} (PPTX)</a></li>`;
        }
      });
      materiaisHTML += "</ul>";
      return materiaisHTML;
    } else {
      return "NULL";
    }
  }

  function formatarAvaliacoes(avaliacoes) {
    if (avaliacoes && avaliacoes.length > 0) {
      let avaliacoesHTML = "<ul>";
      avaliacoes.forEach((avaliacao) => {
        avaliacoesHTML += `<li>${avaliacao.nome}</li>`;
      });
      avaliacoesHTML += "</ul>";
      return avaliacoesHTML;
    } else {
      return "NULL";
    }
  }

  //modal

  const modal = document.getElementById("materia-modal");
  const modalContent = document.getElementById("modal-content");
  const closeModalButton = modal.querySelector(".close");

  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
