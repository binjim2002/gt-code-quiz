var headingEl = document.getElementById("heading");
var pEl = document.getElementById("mainParagraph");
var timerEl = document.getElementById("timer");
var secondsLeft = 60;
var startButtonEl = document.getElementById("start-button");
var mainEl = document.getElementById("mainElement");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");

headingEl.textContent = "Coding Quiz test";

function countdownTimer() {
    console.log("countdown Timer")
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            console.log("timer up");

        }
    }, 1000);
}
startButtonEl.addEventListener("click", countdownTimer);
// // startButtonEl.addEventlistener("click", nextQuestion);

var currentQuestionIndex = 0;

var arrayOfQuestions = [
    {
        question: "Commonly used dat types DO NOT include",
        answer1: "1. Strings",
        answer2: "2. Booleans",
        answer3: "3. Alerts",
        answer4: "4. Numbers",
    },
    {
        question: " The condition in an if/else statement is encoled within",
        answer1: "1.Quotes",
        answer2: "2.Curly braces",
        answer3: "3. Parenthesis",
        answer4: "4. Square Brackets",

    },
    {
        question: "string values must be enclosed within_______when bein assigned to variables",
        answer1: "1. Commas",
        answer2: "2. Curly Braces",
        answer3: "3. quotes",
        answer4: "4. Paranthesis",
    },
    {
        question: "Arrays in JavaScript can be used to store ____",
        answer1: "1. Numbers and strings",
        answer2: "2. Other Arrays",
        answer3: "3. Booleans",
        answer4: "4. All of the above",
    },
    {
        question: "A very useful tool used during developpment and debugging for printing content to the browser",
        answer1: "1. JavaScript",
        answer2: "2.Terminal / bash",
        answer3: "3. For loops",
        answer4: "4. Console.log",

    },
];
function nextQuestion() {
    var currentQuestion = arrayOfQuestions[currentQuestionIndex]
    mainEl.textContent = "";
    var questionEl = document.createElement("h2");
    questionEl.textContent = CurrentQuestion.question;
    var answer1El = document.createElement("button");
    answer1El.textContent.currentQuestion.answer1;
    var answer2El = document.createElement("button");
    answer2El.textContent = currentQuestion.answer2;
    var answer3El = document.createElement("button");
    answer3El.textContent = currentQuestion.answer3;
    var answer4El = document.createElement("button");
    answer4El.textContent = currentQuestion.answer4;

    mainEl.append(questionEl);
    mainEl.append(answer1El);
    mainEl.append(answer2El);
    mainEl.append(answer3El);
    mainEl.append(answer4El);
}

answer1El.addEventListener("click", function () {
    console.log("clicked")
    currentQuestionIndex++
    nextQuestion();

});
answer2El.addEventListener("click", function () {
    console.log("clicked")
    currentQuestionIndex++
    nextQuestion();

    answer3El.addEventListener("click", function () {
        console.log("clicked")
        currentQuestionIndex++
        nextQuestion();


    })
})
