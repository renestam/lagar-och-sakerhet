// 4 alternativ, 1 rätt svar
// 20 sekunder för att välja sitt svar, annars blir det fel
// frågan och alternativen läggs i html och döljs/visas vid frågorna
// det korrekta alternativet finns i js i form av ett heltal
// frågor anges med ID, e.g. #question1
// korrekt svarsruta ändrar färg från js
// korrekt svar läggs in i html-elementet från js

// svaren ges från 1-3

let currentQuestion = 0;

function start() {
    // börja timer
    setTimeout(() => {
        document.getElementById("countdown-div").style.display = "block";
        document.getElementById("countdown-div").style.visibility = "visible";
        document.getElementById("countdown-text").style.display = "block";
        document.getElementById("countdown-text").style.visibility = "visible";
        setInterval(countdown, 750);
    }, 500);
}

function countdown() {
    let text = document.getElementById("countdown-text");
    time = text.innerHTML;
    if (time > 1) {
        text.innerHTML = time - 1;
    } else if (time == 1) {
        text.innerHTML = "GO!";
    } else {
        // countdown är färdig, visa första frågan
        document.getElementById("countdown-div").style.display = "none";
        showQuestion();
        return;
    }
}

const answerIndex = [0, 2, 0, 1, 1, 0, 1, 2, 0, 0];
function showQuestion() {
    let question = document.getElementsByClassName("question")[currentQuestion];
    question.style.display = "block";
    setTimeout(() => {
        question.style.visibility = "visible";
    }, 10);
}

let questionAnswered = false;
function answer(optionIndex) {
    if (questionAnswered) return;

    questionAnswered = true;
    let question = document.getElementsByClassName("question")[currentQuestion];
    
    let chosenOption = question.children[optionIndex + 2];
    chosenOption.classList.add("question-selected");

    let correctOption = question.children[answerIndex[currentQuestion] + 2];
    correctOption.classList.remove("btn-secondary");
    correctOption.classList.add("btn-primary");

    let nextQuestion = document.getElementsByClassName("next-question")[currentQuestion];
    setTimeout(() => {
        nextQuestion.style.visibility = "visible";
    }, 750);
}

function nextQuestion() {
    let questions = document.getElementsByClassName("question");
    let question = questions[currentQuestion];

    if (currentQuestion > questions.length) {
        return;
    }

    question.style.display = "none";
    currentQuestion++;
    showQuestion();
    questionAnswered = false;
}