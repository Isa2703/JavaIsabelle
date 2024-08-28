const caixa_Principal = document.querySelector(".caixa-principal");
const caixa_Perguntas = document.querySelector(".caixa-perguntas");
const caixa_Alternativas = document.querySelector(".caixa-alternativas");
const caixa_Resultados = document.querySelector(".caixa-resultados");
const texto_Resultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "É necessário conhecermos como funciona o psicológico de uma criança?",
        alternativas: [
            {
                texto: "Não, não me preocupo com isso",
                afirmacao: " A mente de uma pessoa é construida sozinha, não com uma reflecçaõ de suas vivencias, muito menos com o que se vive quando crinça. ",
            },

            {

                texto: "Sim, com toda a certeza!",
                afirmação: " Entender como funciona a mente de uma criança é se preocupar com ela na vida adulta, ajudar a criança a enteder como lidar, respeitar,e entender como pode tornara a vida relativamente mais facil é necessario para um futuro com pessoas melhores e felizes",

            },
        ]
    },

    {
        enunciado: "Será que o acompanhamento psicologico des de cedo pode influenciar positivamente no futuro de uma pessoa?",
        alternativas: [
            {
                texto: "Não, não acho que seria necessário. ",
                afirmacao: " Acredito que crinças não precisam de um acompanhamento pois não vivem situações consideralvemente importantes."
            },

            {
                texto: "Sim, acredito que seria importante para um bom crescimento.",
                afirmacao: " O acompanhamento des da infância ensina a criança a lidar com as suas frustaçẽs diarias, entendendo seu sentimenos e a preparando para uma vida adulta mais tranquila."
            },
        ]
    },

    {
        enunciado: "Você acha que se a geração anterior tivesse recebido a mesma atençao e importancia psicológica, hoje em dia as ações, reações e até mesmosa as  opnioẽs dessas pessoas seriam diferentes em algumas situaçoẽs?",
        alternativas: [
            {
                texto: " Não acho, as pessoas tem suas próprias opniẽs e visões que vem do seu caráter criadas por conta própria.",
                afirmacao: " Acredito que a partir do momento em que as pessoas crescem, elas tomam a liberdade de escolherem no que acreditam e defendem, sem influencias anteriores,que podem mudar quando quiserem."
            },

            {
                texto: " Com certeza, a importancia do autoconhecimento psicológico é importante para poder compreender os acontecimentos diarios.",
                afirmacao: " Dar a devida atenção ao conhecimento psicológico é importante para que possamos entender todos os lados de uma situação para assim então podermos tirar nossas conclusoẽs sem dúvidas e sem medo."
            },
        ]
    },
];

let perg_atual = 0;
let pergunta_atual;
let historia_final = "";

function mostra_pergunta() {
    if (perg_atual >= perguntas.length) {
        mostra_resultado();
        return;
    };
    pergunta_atual = perguntas[perg_atual]
    caixa_Perguntas.textContent = pergunta_atual.enunciado;
    caixa_Alternativas.textContent = "";
    texto_Resultado.textContent = "";
    mostra_alternativas();
};

mostra_pergunta();


function mostra_alternativas() {
    for (const alternativa of pergunta_atual.alternativas) {
        const botao_alternativas = document.createElement("button")
        botao_alternativas.textContent = alternativa.texto;
        botao_alternativas.addEventListener("click", () => resposta_selecionada(alternativa));
        caixa_Alternativas.appendChild(botao_alternativas);

    };
};

function resposta_selecionada(opcao_selecionada) {
    const afirmacao = opcao_selecionada.afirmacao;
    historia_final += afirmacao + " ";
    perg_atual++;
    mostra_pergunta();
};

function mostra_resultado() {
    caixa_Perguntas.textContent = "em 2024...";
    texto_Resultado.textContent = historia_final;
    caixa_Alternativas.textContent = "";
};
