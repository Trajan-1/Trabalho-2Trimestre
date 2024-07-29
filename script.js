const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  [
    {
        "enunciado": "Ao se deparar com um novo dispositivo tecnológico que promete soluções sustentáveis para o dia a dia, qual foi seu primeiro pensamento?",
        "alternativas": [
            {
                "texto": "Isso pode realmente ajudar a preservar o meio ambiente!",
                "afirmacao": "Ficou entusiasmado com as possíveis contribuições positivas para a sustentabilidade."
            },
            {
                "texto": "Será que essa tecnologia é realmente sustentável?",
                "afirmacao": "Teve dúvidas sobre o impacto real dessa tecnologia no meio ambiente."
            }
        ]
    },
    {
        "enunciado": "Durante uma aula sobre sustentabilidade, seu professor pede um trabalho sobre como a tecnologia pode ser utilizada para proteger o meio ambiente. Qual foi sua abordagem?",
        "alternativas": [
            {
                "texto": "Pesquisei sobre novas tecnologias verdes e como elas podem reduzir nossa pegada de carbono.",
                "afirmacao": "Ficou impressionado com o potencial das tecnologias verdes para mitigar os impactos ambientais."
            },
            {
                "texto": "Expliquei como práticas simples do dia a dia podem contribuir para um ambiente mais limpo.",
                "afirmacao": "Valorizou a importância das pequenas ações diárias na promoção da sustentabilidade."
            }
        ]
    },
    {
        "enunciado": "Durante um debate sobre o futuro da energia sustentável, qual foi sua posição?",
        "alternativas": [
            {
                "texto": "Defendi o investimento em energias renováveis como uma solução crucial para reduzir emissões de carbono.",
                "afirmacao": "Está comprometido com o avanço de soluções energéticas sustentáveis para enfrentar as mudanças climáticas."
            },
            {
                "texto": "Expressei preocupação com os desafios econômicos de adotar energias renováveis em larga escala.",
                "afirmacao": "Reconhece a importância de considerar os desafios econômicos ao promover transições energéticas sustentáveis."
            }
        ]
    },
    {
        "enunciado": "Após o debate, foi solicitado que criasse uma arte digital representando suas ideias sobre sustentabilidade ambiental. Como procedeu?",
        "alternativas": [
            {
                "texto": "Utilizei ferramentas digitais para criar uma obra que destacasse a beleza e a importância da natureza.",
                "afirmacao": "Percebeu o potencial das artes digitais para inspirar a conscientização ambiental."
            },
            {
                "texto": "Colaborei com outros para criar uma obra que destacasse soluções práticas para problemas ambientais.",
                "afirmacao": "Reconhece a importância da colaboração na promoção de soluções sustentáveis."
            }
        ]
    },
    {
        "enunciado": "Em um projeto de ciências sobre conservação ambiental, um colega propôs usar um modelo de IA para gerar parte do trabalho. O que você fez?",
        "alternativas": [
            {
                "texto": "Apoiou o uso de IA para melhorar a eficiência do projeto, desde que fosse complementar ao trabalho manual e criativo.",
                "afirmacao": "Valoriza o potencial da IA para apoiar iniciativas de conservação, mantendo o equilíbrio com esforços humanos."
            },
            {
                "texto": "Preferiu realizar o trabalho manualmente para garantir que as ideias expressas fossem pessoais e autênticas.",
                "afirmacao": "Reconhece a importância de manter uma abordagem pessoal e reflexiva na abordagem de questões ambientais."
            }
        ]
    }


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
