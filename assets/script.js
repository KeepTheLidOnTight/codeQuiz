//declaring variables

var startQuiz = document.getElementById("startQuiz");
var submitBtn = document.getElementById("submitBtn");
var timer = document.getElementById("timer");
var mainPage = document.getElementById("mainPage");
var questionAnswer = document.getElementById("questionAnswer");
var submitScore = document.getElementById("submitScore");
var currentTime = 100;
var intervalTimer;
var currentQuestionIndex = 0;


//hiding elements of html
questionAnswer.style.display = "none"
submitScore.style.display = "none"

//when user clicks start quiz button
startQuiz.addEventListener("click", function() {
    mainPage.style.display = "none"
    questionAnswer.style.display = "block"
    startTimer()
    pullQuestion()
})
//this is the timer
function startTimer() {
    intervalTimer = window.setInterval(function(){
        currentTime--
        if (currentTime <= 0) {
            window.clearInterval(intervalTimer)
           }
        timer.textContent = "Time: " + currentTime + " seconds"
        
    }, 1000)
    
    
}

//displaying the questions and answers -- solution referenced but also follows my own code
function pullQuestion() {
    var orderedList = ["A:", "B:", "C:", "D:"]
    console.log(answers)
   var currentQuestion = questions[currentQuestionIndex];
   var theQuestion = document.getElementById("questions");
   theQuestion.textContent = currentQuestion.question;
//    answers.innerHTML = "";
   var listItems = document.getElementById("answers").querySelectorAll("li");
   console.log(listItems)
   listItems.forEach(function(element, i)  {
       element.innerHTML = orderedList[i] + currentQuestion.answers[i]
      element.addEventListener("click", checkAnswer(i))
   });
//    currentQuestion.answers.forEach(function() {
       
//    });
   

    
}
function checkAnswer(index) {
    return function(event) {
        if (index === questions[currentQuestionIndex].correct) {
            questions[currentQuestionIndex].correctAnswer = true;
            currentQuestionIndex ++;
            if (currentQuestionIndex >= questions.length) {
                // sending user to high score page after quiz is finished
                window.location.href = "highscores.html"
                
            } else {
                pullQuestion()
            }  
        } else {
           currentTime -= 10
           questions[currentQuestionIndex].correctAnswer = false; 
        }
        
    }
}
    


//when user clicks submit button
submitBtn.addEventListener("click", function() {
    mainPage.style.display = "none"
    submitScore.style.display = "block"
    
})
