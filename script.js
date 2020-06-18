var timeEl = document.querySelector("time");
var mainEl = document.getElementById("main");
var startButton = document.getElementById("startButton");
var timer = document.getElementById("remaining-time");
var responses = document.getElementById("answers");
var testscreen = document.getElementById("quiz-screen");
var questionsArray =  [{
  question: "Commonly used data types DO NOT include:",
  answers: ["strings", "booleans", "strings", "alerts"],
  rightAnswer: "strings",
},
{
  question: "The condition in an if/else statement is enclosed within:",
  answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
  rightAnswer: "curly brackets",
}, {
  question: "Arrays in Javscript can be use to store:",
  answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
  rightAnswer: "all of the above",
}, {
  question: "String values must be enclosed within ______ when being assigned to variables.",
  answers: ["commas", "curly brackets", "quotes", "parentheses"],
  rightAnswer: "quotes",
},  {
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  answers: ["Javascript", "terminal/bash", "for loops", "console log"],
  rightAnswer: "console log",
}];
var currentQuestionIndex = 0;
var userScore = 0
;
function startTime() {
  var secondsLeft = "75";
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left";
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      testscreen.style = "display: none";
        }
  }, 1000);
}
;
function displayQuestions() {
var currentQuestion = questionsArray[currentQuestionIndex];
startButton.remove();
testscreen.innerHTML = "";
var newEl=document.createElement("h4");
newEl.textContent = currentQuestion.question;
testscreen.append(newEl);

for (var i = 0; i < currentQuestion.answers.length; i++)    {
    var answersElement = document.createElement("button");
    
answersElement.setAttribute("class", "answers-i");
answersElement.setAttribute("class", "button btn-primary m-5 rounded-pill");
answersElement.setAttribute("data-index", i);
   
var quizAnswers = currentQuestion.answers[i];
answersElement.textContent = quizAnswers; 
  testscreen.append(answersElement);
 answersElement.addEventListener("click", function(event) {
    currentQuestionIndex++;
     console.log(event.target);
    displayQuestions();
      var userchoice = event.target.textContent;
   if  (userchoice === currentQuestion.rightAnswer)  {
        alert("correct!");
      userScore++;
      } else {
        secondsLeft=secondsLeft-10;
        alert("incorrect!");
        
      }
       console.log(userScore);
    })

}}

startButton.addEventListener("click", function() {
displayQuestions();
startTime()
});
