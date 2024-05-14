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
        answers: ["Path of ominous shadows peeking through", "Path of nature's symphony", "Path of mesmerizing glow and tiny whispers", "Path of a large body of water"]
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
let results = {
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
    const selectedButton = document.querySelector('.optionButton.selected');
    if (selectedButton) {
        // move to the next question
        if(currentQuestion >= questions.length) {
            displayResults();
        } else {
            updateQuestion();
        }
        // add points based on the selected button
        const selectedType = selectedButton.dataset.type;
        results[selectedType]++;

    } else {
        alert("please select an option before proceeding!");
    }

});
optionButtons.forEach(button => {
    button.addEventListener('click', selectButton);
})
//locate the selected button
function selectButton(e) {
    //remove all the selected buttons
    optionButtons.forEach(button => button.classList.remove('selected'));

    //add selected only to the button that has been clicked
    const selectedButton = e.target;
    selectedButton.classList.add('selected');
}


//update question on quiz page
function updateQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionNumber.textContent = `Q${currentQuestion + 1} out of ${questions.length}`;
    questionText.textContent = currentQuestionData.question;

    // update answer options
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].textContent = currentQuestionData.answers[i];
    }

    //remove selected every question!!!!!!!!
        optionButtons.forEach(button => button.classList.remove('selected'));

        currentQuestion++;
        updateProgressBar();
}


//calculate the results! find max.
function calculateResult() {
    let maxType = null;
    let maxValue = -Infinity;

    for (const type in results) {
        if (results[type] > maxValue) {
            maxValue = results[type];
            maxType = type;
        }
    }

    return maxType;
}


// display results page
function displayResults() {
    const personalityType = calculateResult();
    quizPage.classList.add('hide');

    switch (personalityType) {
        case "type1":
            result.textContent = "Your personality type is: Phoenix";
            break;
        case "type2":
            result.textContent = "Your personality type is: Fairy";
            break;
        case "type3":
            result.textContent = "Your personality type is: Elf";
            break;
        case "type4":
            result.textContent = "Your personality type is: Mermaid";
            break;
    }
    
}

function updateProgressBar() { 
    var element = document.getElementById("myBar");
    var totalQuestions = questions.length;
    var width = ((currentQuestion-1) / totalQuestions) * 100;
    element.style.width = width + '%';
  } 
    