const questoes = [
    {
        question: "Qual é o nome da pizzaria do jogo?",
        optionA: "Freddy Fazbear's Pizza",
        optionB: "Foxy Fazbear's Pizza",
        optionC: "Pizza Hut",
        optionD: "Freddy Fazbunny Pizza",
        correctOption: "optionA"
    },

    {
        question: "Qual é o nome completo do Foxy?",
        optionA: "Foxy the Fox",
        optionB: "Foxy the Pirate",
        optionC: "Foxy Fazbear",
        optionD: "Foxy the Pirate Fox",
        correctOption: "optionD"
    },

    {
        question: "O que está escrito na roupa da Chica?",
        optionA: "Pizza!",
        optionB: "Fazbear's Pizza!",
        optionC: "Eat Pizza!",
        optionD: "Let's Eat!",
        correctOption: "optionD"
    },

    {
        question: "Quem é o criador da série Five Nights at Freddy's?",
        optionA: "Toby Fox",
        optionB: "Scott Cawthon",
        optionC: "Hideo Kojima",
        optionD: "Markus Persson",
        correctOption: "optionB"
    },

    {
        question: "Qual é o nome do protagonista jogável no primeiro jogo?",
        optionA: "Scott Cawthon",
        optionB: "Jeremy Fitzgerald",
        optionC: "William Afton",
        optionD: "Mike Schmidt",
        correctOption: "optionD"
    },

    {
        question: "Quem é o animatrônico principal conhecido por sua risada perturbadora?",
        optionA: "Freddy Fazbear",
        optionB: "Foxy the Pirate",
        optionC: "Chica the Chicken",
        optionD: "Bonnie the Bunny",
        correctOption: "optionA"
    },

    {
        question: "Qual é o nome do guarda noturno no segundo jogo?",
        optionA: "Phone Guy",
        optionB: "Vincent Bishop",
        optionC: "Fritz Smith",
        optionD: "Fritz Jones",
        correctOption: "optionC"
    },

    {
        question: "Qual animatrônico tem a habilidade de desmontar-se em várias partes separadas?",
        optionA: "Mangle",
        optionB: "Springtrap",
        optionC: "Ballora",
        optionD: "Circus Baby",
        correctOption: "optionA"
    },

    {
        question: "Quem é o filho do criador da série que inspirou o nome de um dos personagens?",
        optionA: "Joseph Cawthon",
        optionB: "Chris Cawthon",
        optionC: "Jason Cawthon",
        optionD: "Daniel Cawthons",
        correctOption: "optionB"
    },

    {
        question: "Quem é o principal antagonista da série?",
        optionA: "Foxy",
        optionB: "Chica",
        optionC: "Bonnie",
        optionD: "Springtrap",
        correctOption: "optionD"
    },

    {
        question: "Em qual jogo da série descobrimos a história de William Afton?",
        optionA: "Five Nights at Freddy's 4",
        optionB: "Five Nights at Freddy's 2",
        optionC: "Five Nights at Freddy's 3",
        optionD: "Nenhum",
        correctOption: "optionC"
    },

    {
        question: "Qual é o nome da criança que possui uma forte conexão com os animatrônicos em Five Nights at Freddy's 4?",
        optionA: "Cassidy",
        optionB: "Sammy",
        optionC: "Jeremy",
        optionD: "Michael",
        correctOption: "optionA"
    },

    {
        question: "Quem é o Purple Guy na história da série?",
        optionA: "Phone Guy",
        optionB: "William Afton",
        optionC: "Michael Afton",
        optionD: "Henry Emily",
        correctOption: "optionB"
    },

    {
        question: "Qual é o nome do grupo de animatrônicos que compõem a animação Funtime Freddy?",
        optionA: "Bonnet e Ballora",
        optionB: "Bon-Bon e Ballora",
        optionC: "Bonnet e Funtime Foxy",
        optionD: "Bon-Bon e Funtime Foxy",
        correctOption: "optionD"
    },

    {
        question: "Em qual jogo da série os jogadores assumem o papel de um técnico de manutenção, em vez de um guarda noturno?",
        optionA: "Five Nights at Freddy's: Sister Location",
        optionB: "Five Nights at Freddy's 3",
        optionC: "Five Nights at Freddy's 2",
        optionD: "Five Nights at Freddy's 4",
        correctOption: "optionA"
    }
]

let embaralhadoPerguntas = []

function lidarPerguntas() {
    while (embaralhadoPerguntas.length <= 9) {
        const aleatorio = questoes[Math.floor(Math.random() * questoes.length)]
        if (!embaralhadoPerguntas.includes(aleatorio)) {
            embaralhadoPerguntas.push(aleatorio)
        }
    }
}

let numeroPergunta  = 1
let pontuacaoJogador = 0
let wrongAttempt = 0
let indexNumber = 0

function NextQuestion(index) {
    lidarPerguntas()
    const currentQuestion = embaralhadoPerguntas[index]
    document.getElementById("question-number").innerHTML = numeroPergunta 
    document.getElementById("player-score").innerHTML = pontuacaoJogador
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}


function checkForAnswer() {
    const currentQuestion = embaralhadoPerguntas[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            pontuacaoJogador++
            indexNumber++
            setTimeout(() => {
                numeroPergunta ++
            }, 1000)
        } else if (option.checked && option.value !== currentQuestionAnswer) {
            var url = "jump.html";
            var janelaPopup = window.open(url, "NomeDaJanela");
            setTimeout(function() {
                janelaPopup.close();
            }, 800);
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            setTimeout(() => {
                numeroPergunta ++
            }, 1000)
        }
    })
}

function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        } else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null
    if (pontuacaoJogador <= 3) {
        remark = "Estude mais!"
        remarkColor = "red"
    }
    else if (pontuacaoJogador >= 4 && pontuacaoJogador < 7) {
        remark = "Ehh, nem tão bom, e nem tão ruim!!"
        remarkColor = "orange"
    
    }
    else if (pontuacaoJogador >= 7) {
        remark = "Que orgulho! continue assim."
        remarkColor = "green"
    }
    const playerGrade = (pontuacaoJogador / 10) * 100
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = pontuacaoJogador
    document.getElementById('score-modal').style.display = "flex"
}

function closeScoreModal() {
    questionNumber = 1
    pontuacaoJogador = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
document.getElementById('enviarEmail').addEventListener('click', function() {
    var destinatario = 'raul.fialho@etec.sp.gov.br';
    var assunto = 'Resultado do Quiz do FNAF!';
    var corpo = `Olá, eu realizei o quiz do FNAF! acertei ${pontuacaoJogador} de 10!`;

    var link = 'mailto:' + destinatario +
               '?subject=' + encodeURIComponent(assunto) +
               '&body=' + encodeURIComponent(corpo);

    window.location.href = link;
});