var timeEl = document.querySelector("time");
var mainEl = document.getElementById("main");
var startButton = document.getElementById("startButton");
var timer = document.getElementById("remaining-time");
var responses = document.getElementById("answers");
var quizscreen = document.getElementById("quiz-screen");
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
      quizscreen.style = "display: none";
        }
  }, 1000);
}
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);
function displayQuestions() {
var currentQuestion = questionsArray[currentQuestionIndex];
startButton.remove();
quizscreen.innerHTML = "";
var newEl=document.createElement("h4");
newEl.textContent = currentQuestion.question;
quizscreen.append(newEl);
// console.log(newEl);
// var newAnswers = document.createElement("answerButtons");
// newAnswers.textContent=questionsArray.Answers;
// quizscreen.append(newAnswers);
// console.log(newAnswers);
for (var i = 0; i < currentQuestion.answers.length; i++)    {
    var answersElement = document.createElement("button");
    answersElement.setAttribute("class", "answers-i");
    answersElement.setAttribute("class", "button btn-secondary");
    answersElement.setAttribute("data-index", i);
   
    var quizAnswers = currentQuestion.answers[i];
    answersElement.textContent = quizAnswers;
   
    quizscreen.append(answersElement);
 
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
//   if (questionsArray[0].rightAnswer);
//   alert("correct!")
// }else {
//   alert("incorrect!")
// }
}}
// document.getElementsById("quiz-screen").innerhtml="";
// document.getElementById("startButton").addEventListener("click", function(){})
// function nextQuestion()    {
// nextQ = questionsArray[currentQuestionIndex[1]];
// newEl1.textContent = 
// }
startButton.addEventListener("click", function() {
displayQuestions();
startTime()
});
// quizAnswers.addEventListener("click", nextQuestion())
// How I want the quiz to work:
// When I hit the "Start"  button , I want it to start the timer and enter the slide for the first question. 
// When the first question is answered, I want it to record if the question was correct and move to the next question with a for loop.  
// The for loop will cycle through the questions until it reaches the end .Answers
// At this point the score will be presented and recorded in localStorage to later display . 
// // The following animation demonstrates the application functionality:
// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");
// var startButton = document.getElementById("startButton");
// var timer = document.getElementById("remaining-time");
// var jumbotron = document.getElementById("jumbotron");
// var questionsArray =  [{
//   question: "Commonly used data types DO NOT include",
//   Answers: ["strings", "booleans", "strings", "alerts"],
//   rightAnswer: "strings",
// },
// {
//   question: "The condition in an if/else statement is enclosed within:",
//   firstAnswer: ["quotes", "curly brackets", "parentheses", "square brackets"],
//   rightAnswer1: "curly brackets",
// }, {
//   question: "Arrays in Javscript can be use to store:",
//   firstAnswer: ["numbers and strings", "other arrays", "booleans", "all of the above"],
//   rightAnswer2: "all of the above",
// }, {
//   question: "String values must be enclosed within ______ when being assigned to variables.",
//   firstAnswer: ["commas", "curly brackets", "quotes", "parentheses"],
//   rightAnswer3: "quotes",
// },  {
//   question: "A very useful tool used during development and debugging for printing content to the debugger is:",
//   fourthAnswers: ["Javascript", "terminal/bash", "for loops", "console log"],
//   rightAnswere4: "console log",
// }]
// var currentQuestionIndex = 0
// var secondsLeft = 75;
// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timer.textContent = secondsLeft + " seconds left";
//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage("You are out of time!");
//     }
//   }, 1000);
// }
// setTime();
// // function sendMessage() {
// //   timeEl.textContent = " ";
// //   var imgEl = document.createElement("img");
// //   imgEl.setAttribute("src", "images/image_1.jpg");
// //   mainEl.appendChild(imgEl);
// function displayQuestions() {
    
// var questionDisplayed = questionsArray[currentQuestionIndex];
// jumbotron.textContent = "";
// var h4El=document.createElement("h4");
// h4El.textContent = questionDisplayed.question;
// jumbotron.append(h4El);
// // document.getElementsById("quiz-screen").innerhtml="";
// // document.getElementById("startButton").addEventListener("click", function(){})
// }
// displayQuestions();
// function nextQ()    {
// }
// startButton.addEventListener("click", displayQuestions);
// startButton.addEventListener("click", setTime); 