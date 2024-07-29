const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre um novo projeto de tecnologia sustentável na sua escola, que promete reduzir significativamente o consumo de energia. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso pode realmente fazer a diferença para o meio ambiente!",
                afirmacao: "Ficou entusiasmado com o potencial do projeto para contribuir com a sustentabilidade."
            },
            {
                texto: "Será que essa tecnologia é verdadeiramente sustentável?",
                afirmacao: "Teve dúvidas sobre o impacto ambiental real e a eficácia do projeto."
            }
        ]
    },
    {
        enunciado: "Durante uma aula sobre sustentabilidade, seu professor pede um trabalho sobre como tecnologias verdes podem ajudar na preservação ambiental. Qual foi sua abordagem?",
        alternativas: [
            {
                texto: "Pesquisei sobre novas tecnologias verdes e como elas podem reduzir nossa pegada de carbono.",
                afirmacao: "Ficou impressionado com o potencial das tecnologias verdes para mitigar os impactos ambientais."
            },
            {
                texto: "Expliquei como pequenas mudanças de hábito podem contribuir para um planeta mais limpo.",
                afirmacao: "Valorizou a importância das ações individuais no contexto da sustentabilidade ambiental."
            }
        ]
    },
    {
        enunciado: "Durante um debate sobre o futuro da energia renovável, qual foi sua posição?",
        alternativas: [
            {
                texto: "Defendi que investir em energias renováveis é crucial para combater as mudanças climáticas.",
                afirmacao: "Está comprometido com a transição para fontes de energia mais limpas e sustentáveis."
            },
            {
                texto: "Expressou preocupação com os desafios técnicos e financeiros da adoção em larga escala de energias renováveis.",
                afirmacao: "Reconhece a importância de considerar os desafios práticos ao promover soluções energéticas sustentáveis."
            }
        ]
    },
    {
        enunciado: "Após o debate, foi solicitado que você criasse uma arte digital que representasse suas ideias sobre sustentabilidade. Como procedeu?",
        alternativas: [
            {
                texto: "Utilizei ferramentas digitais para criar uma obra que destacasse a beleza e a importância da natureza.",
                afirmacao: "Percebeu o potencial das artes digitais para inspirar a conscientização ambiental."
            },
            {
                texto: "Colaborei com outros para criar uma obra que enfatizasse soluções práticas para problemas ambientais.",
                afirmacao: "Reconhece a importância da colaboração na promoção de soluções sustentáveis para o meio ambiente."
            }
        ]
    },
    {
        enunciado: "Em um projeto de ciências sobre conservação ambiental, um colega propôs usar um modelo de IA para gerar parte do trabalho. O que você fez?",
        alternativas: [
            {
                texto: "Apoiou o uso de IA para melhorar a eficiência do projeto, desde que fosse complementar ao trabalho manual e criativo.",
                afirmacao: "Valoriza o potencial da IA para apoiar iniciativas de conservação, mantendo o equilíbrio com esforços humanos."
            },
            {
                texto: "Preferiu realizar o trabalho manualmente para garantir que as ideias expressas fossem pessoais e autênticas.",
                afirmacao: "Reconhece a importância de manter uma abordagem pessoal e reflexiva na abordagem de questões ambientais."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
