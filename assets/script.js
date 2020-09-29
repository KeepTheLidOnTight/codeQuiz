//declaring variables

var startQuiz = document.getElementById("startQuiz");
var submitBtn = document.getElementById("submitBtn");
var timer = document.getElementById("timer");
var mainPage = document.getElementById("mainPage");
var questionAnswer = document.getElementById("questionAnswer");
var submitScore = document.getElementById("submitScore");
var currentTime = 100;
var intervalTimer;
//array of questions regarding Ben & Jerry's
var questions = [
    {   //this is the first question and answers
        question: "What all is in Half Baked?",
        answers: [
            {
                answer : "Chocolate & Vanilla Ice Creams mixed with Gobs of Chocolate Chip Cookie Dough & Fudge Brownies",
                correct : true
            },
            {
                answer : "Chocolate Ice Cream with White & Dark Fudge Chunks, Pecans, Walnuts & Fudge-Covered Almonds",
                correct : false

            },
            {
                answer :"Vanilla Ice Cream with Chocolate Sandwich Cookies & Chocolate Cookie Swirls",
                correct : false

            },
            {
                answer :"Vanilla Malt Ice Cream with Peanutty Fudge-Covered Pretzels with Fudge & Peanut Buttery Swirls",
                correct : false

            },
        ] 
    },
    {   //this is the second question and answers
        question: "What all is in AmeriCone Dream?",
        answers: [
            {
                answer :"Chocolate Ice Cream with Fudge Brownies", 
                correct : false
            },
            {
                answer :"Coffee Ice Cream with Fudge Chunks & a Brownie Batter Swirl",
                correct : false

            },
            {
                answer :"Vanilla Ice Cream with Fudge-Covered Waffle Cone Pieces & a Caramel Swirl",
                correct : true

            },
            {
                answer :"Cold Brew Coffee Ice Cream with Chocolate Cookie-Covered Coffee Liqueur Truffles & Fudge Swirls",
                correct : false

            },
        ] 
    },
    {   //this is the third question and answers
        question: "What all is in Cherry Garcia?",
        answers: [
            {
                answer :"Coffee Ice Cream with Fudge Chunks & a Brownie Batter Swirl", 
                correct : false
            },
            {
                answer :"Cherry Ice Cream with Cherries & Fudge Flakes",
                correct : true

            },
            {
                answer :"Vanilla Ice Cream with Gobs of Chocolate Chip Cookie Dough",
                correct : false

            },
            {
                answer :"Caramel Cheesecake Ice Cream with Cheesecake Pieces & Chocolate Cookie Swirls",
                correct : false

            },
        ] 
    },
    {   //this is the fourth question and answers
        question: "What all is in Chunky Monkey?",
        answers: [
            {
                answer :"Caramel Ice Cream with Cinnamon Bun Dough & a Cinnamon Streusel Swirl", 
                correct : false
            },
            {
                answer :"Chocolate Malt Milkshake Ice Cream With Salted Fudge Pieces & Marshmallow Swirls",
                correct : false

            },
            {
                answer :"Chocolate Ice Cream with Chocolate Cookies & Swirls of Chocolate Pudding Ice Cream",
                correct : false

            },
            {
                answer :"Banana Ice Cream with Fudge Chunks & Walnuts",
                correct : true

            },
        ] 
    },
    { //this is the fifth & final question and answers
        question: "What all is in Phish Food?",
        answers: [
            {
                answer :"Pumpkin Cheesecake Ice Cream with a Graham Cracker Swirl", 
                correct : false
            },
            {
                answer :"Coffee Ice Cream with Fudge Chunks & a Brownie Batter Swirl",
                correct : false

            },
            {
                answer :"Chocolate Ice Cream with Gooey Marshmallow Swirls, Caramel Swirls & Fudge Fish",
                correct : true

            },
            {
                answer :"Milk Chocolate Ice Cream with Peanut Buttery Swirls & Chocolate Cookie Swirls",
                correct : false

            },
        ] 
    }
]
var currentQuestion = 0

//hiding elements of html
questionAnswer.style.display = "none"
submitScore.style.display = "none"

//when use clicks start quiz button
startQuiz.addEventListener("click", function() {
    mainPage.style.display = "none"
    questionAnswer.style.display = "block"
    startTimer()
    displayNextQuestion()
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

function displayNextQuestion() {
    var question = questions[currentQuestion]
    document.getElementById("questions").textContent = question.question
    
}

