const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('nextButton');
const optionButtons = document.querySelectorAll('.optionButton');
const result = document.getElementById('results-page');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const quizPage = document.getElementById('quiz-page');

const questions = [
    {
        question: "You find yourself in an unfamiliar place, which road tempts you the most?",
        answers: ["Cobbled street with lantern-lit alleys", "Twisting, leaf-strewn trail", "The flowery lane with tiny whispers", "The water and occupied animals path"]
    },
    {
        question: "Following the chosen path leads you to a secluded town. Which building do you enter into?",
        answers: ["Straight to town hall", "The town's library", "The local coffee shop", "The nearest residential house"]
    },
    {
        question: "You stumble upon a glowing liquid. It pulsates as it seeps into the ground and starts spreading to you closer and closer. It appears to be alive.",
        answers: ["Assess the situation head-on", "Observe from a distance", "Befriend the liquid", "Stop the spreading quick!"]
    },
    {
        question: "A distant sound breaks the silence. What do you imagine could be causing it?",
        answers: ["A victorious battle made for you", "A mystical natural phenomenon", "A lively carnival approaching the town", "A new friend in need of help"]
    },
    {
        question: "Suddenly, a mysterious figure emerges from the shadows. What is your initial reaction?",
        answers: ["Remain vigilant and prepare for risks", "Try to understand its identity", "Engage in a conversation", "Approach cautiously with concern"]
    },
    {
        question: "You receive a gift from the mysterious figure: a new animal companion to support you on your journey. What do you choose?",
        answers: ["A fierce wolf", "A resourceful owl", "An adventurous monkey", "A loyal horse"]
    },
    {
        question: "Your newfound companion shows their appreciation with a gift. Which do you choose?",
        answers: ["A compass", "An ancient book", "A musical instrument", "Your family's keepsake box"]
    },
    {
        question: "The garden calls for you. What draws you in?",
        answers: ["The twisting tree bearing golden apples", "The artifact embedded within the tree", "Gnomes having a funny conversation", "The water reflecting the essence of your family"]
    },
    {
        question: "You are given a power to aid you in your journey. What do you choose?",
        answers: ["Superhuman strength", "Read minds", "Shapeshifting", "Healing"]
    },
    {
        question: "As night falls, the stars grant you one wish. What would you rather be?",
        answers: ["Respected", "Trusted", "Envied", "Loved"]
    },
    {
        question: "When you wake up, you will receive a box. Which one will you select?",
        answers: ["A heavy golden box with a silver-leaf ribbon", "Ancient wood crafted box, secured with magic", "A colorful box with a radiant glow", "A mossy box wrapped with healing herbs"]
    },
    {
        question: "With the journey coming to an end, what quality of character resonates with you the most?",
        answers: ["Bravery", "Wisdom", "Compassion", "Loyalty"]
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
    