//declaring variables

var startQuiz = document.getElementById("startQuiz");
var submitBtn = document.getElementById("submitBtn");
var timer = document.getElementById("timer");
var mainPage = document.getElementById("mainPage");
var questionAnswer = document.getElementById("questionAnswer");
var submitScore = document.getElementById("submitScore");
var currentTime = 100;
var intervalTimer;
var currentQuestionI = 0
//array of questions regarding Ben & Jerry's
var questions = [
    {   //this is the first question and answers
        question1: "What all is in Half Baked?",
        answers: ["A: Chocolate & Vanilla Ice Creams mixed with Gobs of Chocolate Chip Cookie Dough & Fudge Brownies", "Chocolate Ice Cream with White & Dark Fudge Chunks, Pecans, Walnuts & Fudge-Covered Almonds", "Vanilla Ice Cream with Chocolate Sandwich Cookies & Chocolate Cookie Swirls", "Vanilla Malt Ice Cream with Peanutty Fudge-Covered Pretzels with Fudge & Peanut Buttery Swirls"],
        correct: "A: Chocolate & Vanilla Ice Creams mixed with Gobs of Chocolate Chip Cookie Dough & Fudge Brownies",
    },
    {   //this is the second question and answers
        question2: "What all is in AmeriCone Dream?",
        answers: ["Chocolate Ice Cream with Fudge Brownies", "Coffee Ice Cream with Fudge Chunks & a Brownie Batter Swirl", "Vanilla Ice Cream with Fudge-Covered Waffle Cone Pieces & a Caramel Swirl", "Cold Brew Coffee Ice Cream with Chocolate Cookie-Covered Coffee Liqueur Truffles & Fudge Swirls"],
        correct: "Vanilla Ice Cream with Fudge-Covered Waffle Cone Pieces & a Caramel Swirl"    
    },
    {   //this is the third question and answers
        question3: "What all is in Cherry Garcia?",
        answers: ["Coffee Ice Cream with Fudge Chunks & a Brownie Batter Swirl", "Cherry Ice Cream with Cherries & Fudge Flakes", "Vanilla Ice Cream with Gobs of Chocolate Chip Cookie Dough", "Caramel Cheesecake Ice Cream with Cheesecake Pieces & Chocolate Cookie Swirls"],
        correct: "Cherry Ice Cream with Cherries & Fudge Flakes",       
    },
    {   //this is the fourth question and answers
        question4: "What all is in Chunky Monkey?",
        answers: ["Caramel Ice Cream with Cinnamon Bun Dough & a Cinnamon Streusel Swirl", "Chocolate Malt Milkshake Ice Cream With Salted Fudge Pieces & Marshmallow Swirls", "Chocolate Ice Cream with Chocolate Cookies & Swirls of Chocolate Pudding Ice Cream", "Banana Ice Cream with Fudge Chunks & Walnuts"],
        correct: "Banana Ice Cream with Fudge Chunks & Walnuts", 
    },
    {  //this is the fifth & final question and answers
        question5: "What all is in Phish Food?",
        answers: ["Pumpkin Cheesecake Ice Cream with a Graham Cracker Swirl", "Coffee Ice Cream with Fudge Chunks & a Brownie Batter Swirl", "Chocolate Ice Cream with Gooey Marshmallow Swirls, Caramel Swirls & Fudge Fish", "Milk Chocolate Ice Cream with Peanut Buttery Swirls & Chocolate Cookie Swirls"],
        correct: "Chocolate Ice Cream with Gooey Marshmallow Swirls, Caramel Swirls & Fudge Fish"
    }
]

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
            alert("You ran out of time!")
           
            
        }
        timer.textContent = "Time: " + currentTime + " seconds"
        
    }, 1000)
    
    
}

//displaying the questions and answers
function pullQuestion() {
   document.getElementById("questions").innerHTML = questions.question1

    
}
    


//when user clicks submit button
submitBtn.addEventListener("click", function() {
    mainPage.style.display = "none"
    submitScore.style.display = "block"
    
})
