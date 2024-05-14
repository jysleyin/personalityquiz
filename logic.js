const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('nextButton');
const optionButtons = document.querySelectorAll('.optionButton');
const result = document.getElementById('results-page');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const quizPage = document.getElementById('quiz-page');

const questions = [
    {
        question: "You find yourself in an unfamiliar place, surrounded by the eerie shadows of the dark woods. There are four paths. Which one do you choose?",
        answers: ["1", "2", "3", "a4"]
    },
    {
        question: "Following the chosen path leads you to a secluded town. Which building do you enter into?",
        answers: ["1a", "2", "3", "4"]
    },
    {
        question: "Inside the building, you stumble upon a glowing liquid. It pulsates as it seeps into the ground and starts spreading to you closer and closer. It appears to be alive.",
        answers: ["1", "2a", "3", "4"]
    },
    {
        question: "Amidst the quiet of the town, a distant sound breaks the silence. What do you imagine could be causing it?",
        answers: ["1", "2", "3a", "4"]
    },
    {
        question: "Suddenly, a mysterious figure emerges from the shadows. What is your initial reaction?",
        answers: ["1", "2", "3", "4"]
    },
    {
        question: "Favorite City?",
        answers: ["1", "2a", "3", "4"]
    },
    {
        question: "Favorite Celebrity?",
        answers: ["1", "2", "3", "4"]
    },
    {
        question: "Favorite Sport?",
        answers: ["1", "2", "3", "4"]
    },
    {
        question: "Favorite Lyric?",
        answers: ["1", "2", "3", "4"]
    },
    {
        question: "Favorite Town?",
        answers: ["1", "2", "3", "4"]
    },
    {
        question: "Favorite Food?",
        answers: ["1", "2", "3", "4"]
    },
    {
        question: "With the journey coming to an end, what quality of character resonates with you the most?",
        answers: ["1", "2", "3", "4"]
    },
]


let currentQuestion = 0;
let answers = {
    //phoenix
    type1: 0,
    //fairy
    type2: 0,
    //elf
    type3: 0,
    //mermaid
    type4: 0
};

startButton.addEventListener('click', function() {
    document.querySelector('.start-page').classList.add('hide');
    quizPage.classList.remove('hide');
    updateQuestion();
});

//next button
nextButton.addEventListener('click', function(){
    if(currentQuestion >= questions.length) {
        displayResults();
    } else {
        updateQuestion();
    }
    //whichever button is selected, add points here.
});

//locate the selected button

//update question on quiz page
function updateQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionNumber.textContent = `Q${currentQuestion + 1} out of ${questions.length}`;
    questionText.textContent = currentQuestionData.question;

    // update answer options
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].textContent = currentQuestionData.answers[i];
    }
        currentQuestion++;
}


//calculate the results! find max.
function calculateResult() {

}


// display results page
function displayResults() {
    const personalityType = calculateResult();
    quizPage.classList.add('hide');
    result.textContent = `Your personality type is: ${personalityType}`;
}