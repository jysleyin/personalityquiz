const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('nextButton');
const optionButtons = document.querySelectorAll('.optionButton');
const result = document.getElementById('results-page');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const questionImage = document.getElementById('questionImage');
const quizPage = document.getElementById('quiz-page');
const soundButton = document.getElementById('soundButton');
const audio = new Audio("audio/click.mp3");
const background = new Audio ("audio/background-music.mp3");
const resultImage = document.getElementById('resultImage');
const resultStats = document.getElementById('resultStats');
const restartBtn = document.getElementById('restartBtn');

const questions = [
    {
        question: "You find yourself in an unfamiliar place, which road tempts you the most?",
        imageSrc: "images/image1.png",
        answers: [
            { text: "Cobbled street with lantern-lit alleys", type: "type1" },
            { text: "Twisting, leaf-strewn trail", type: "type2" },
            { text: "The flowery lane with tiny whispers", type: "type3" },
            { text: "The path of water and the animals that inhabit it", type: "type4" }
        ]
    },
    {
        question: "Following the chosen path leads you to a secluded town. Which building do you enter?",
        imageSrc: "images/image2.png",
        answers: [
            { text: "Straight to town hall", type: "type1" },
            { text: "The town's library", type: "type2" },
            { text: "The local coffee shop", type: "type3" },
            { text: "The nearest residential house", type: "type4" }
        ]
    },
    {
        question: "You stumble upon a glowing liquid. It pulsates as it seeps into the ground and starts spreading to you closer and closer. It appears to be alive.",
        imageSrc: "images/image3.png",
        answers: [
            { text: "Assess the situation head-on", type: "type1" },
            { text: "Observe from a distance", type: "type2" },
            { text: "Befriend the liquid", type: "type3"},
            { text: "Stop the spreading quick!", type: "type4"}
        ]
    },
    {
        question: "A distant sound breaks the silence. What do you imagine could be causing it?",
        imageSrc: "images/image4.png",
        answers: [
            { text: "A victorious battle made for you", type: "type1"},
            { text: "A mystical natural phenomenon", type: "type2"},
            { text: "A lively carnival approaching the town", type: "type3"},
            { text: "A new friend in need of help", type: "type4"},
        ]
    },
    {
        question: "Suddenly, a mysterious figure emerges from the shadows. What is your initial reaction?",
        imageSrc: "images/image5.png",
        answers: [
            { text: "Remain vigilant and prepare for risks", type: "type1"},
            { text: "Try to understand its identity", type: "type2"},
            { text: "Engage in a conversation", type: "type3"},
            { text: "Approach cautiously with concern", type: "type4"},
        ]
    },
    {
        question: "You receive a gift from the mysterious figure: a new animal companion to support you on your journey. What do you choose?",
        imageSrc: "images/image6.png",
        answers: [
            { text: "A fierce wolf", type: "type1"},
            { text: "A resourceful owl", type: "type2"},
            { text: "An adventurous monkey", type: "type3"},
            { text: "A loyal horse", type: "type4"},
        ]
    },
    {
        question: "Your newfound companion shows their appreciation with a gift. Which do you choose?",
        imageSrc: "images/image7.png",
        answers: [
            { text: "A magical compass",  type: "type1"},
            { text: "An ancient book",  type: "type2"},
            { text: "A musical instrument",  type: "type3"},
            { text: "Your family's heirloom",  type: "type4"},
        ]
    },
    {
        question: "The garden calls for you. What draws you in?",
        imageSrc: "images/image8.png",
        answers: [
            { text: "The twisting tree bearing golden apples",  type: "type1"},
            { text: "The artifact embedded within the tree",  type: "type2"},
            { text: "Gnomes having a funny conversation",  type: "type3"},
            { text: "The water reflecting the essence of your family", type: "type4"},
        ]
    },
    {
        question: "You are given a power to aid you in your journey. What do you choose?",
        imageSrc: "images/image9.png",
        answers: [
            { text: "Superhuman strength",  type: "type1"},
            { text: "Read minds",  type: "type2"},
            { text: "Shape-shifting",  type: "type3"},
            { text: "Healing", type: "type4"},
        ]
    },
    {
        question: "As night falls, the stars grant you one wish. What would you rather be?",
        imageSrc: "images/image10.png",
        answers: [
            { text:"Respected",  type: "type1"},
            { text:"Trusted",  type: "type2"},
            { text:"Envied",  type: "type3"},
            { text: "Loved", type: "type4"},
        ]
    },
    {
        question: "When you wake up, you'll find a selection of boxes. Which one will you choose?",
        imageSrc: "images/image11.png",
        answers: [
            { text:"A heavy golden box with a silver-leaf ribbon",  type: "type1"},
            { text: "Ancient wood crafted box, secured with magic",  type: "type2"},
            { text: "A colorful box with a radiant glow",  type: "type3"},
            { text: "A mossy box wrapped with healing herbs", type: "type4"},
        ]
    },
    {
        question: "With the journey coming to an end, what quality of character resonates with you the most?",
        imageSrc: "images/image12.png",
        answers: [
            { text:"To be Brave",   type: "type1"},
            { text:"To be Wise",   type: "type2"},
            { text:"To be Compassionate",   type: "type3"},
            { text:"To be Loyal",  type: "type4"},
        ]
    },
]


let currentQuestion = 0;
let results = {
    //phoenix
    type1: 0,
    //wizard
    type2: 0,
    //fairy
    type3: 0,
    //mermaid
    type4: 0
};

let stats = {
    strength: 0,
    wisdom: 0,
    charm: 0,
    support: 0
};


//music is here
background.loop = true;
background.volume = 0.25;

soundButton.addEventListener('click', function() {
    playClickSound(); 
    if (background.paused) {
        background.play();
        soundButton.textContent = "🔊";
    } else {
        background.pause();
        soundButton.textContent = "🔇";
    }
});

startButton.addEventListener('click', function() {
    audio.play();
    background.play();
    document.querySelector('.start-page').classList.add('hide');
    quizPage.classList.remove('hide');
    updateQuestion();
    updateProgressBar(0);
    document.body.style.backgroundImage = "url('images/background.png')";
    
});

optionButtons.forEach(button => {
    button.addEventListener('click', function() {
        selectButton(event); 
        playClickSound(); 
    });
});

//next button
nextButton.addEventListener('click', function(){
    playClickSound();
    const selectedButton = document.querySelector('.optionButton.selected');
    if (selectedButton) {
        // add points based on the selected button
        const selectedType = selectedButton.dataset.type;
        results[selectedType]++;

        // update stats based on the selected type
        switch (selectedType) {
            case "type1":
                stats.strength++;
                break;
            case "type2":
                stats.wisdom++;
                break;
            case "type3":
                stats.charm++;
                break;
            case "type4":
                stats.support++;
                break;
        }

        // move to the next question
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            updateQuestion();
            updateProgressBar(currentQuestion);
        } else {
            displayResults();
        }
    } else {
        alert("please select an option before proceeding!");
    }

});

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
    questionNumber.innerHTML = `Q${currentQuestion + 1}<br> ${currentQuestion + 1}/${questions.length}`;
    questionText.textContent = currentQuestionData.question;
    questionImage.src = currentQuestionData.imageSrc;

    const shuffledAnswers = [...currentQuestionData.answers];
    shuffle(shuffledAnswers);

    // update answer options
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].textContent = shuffledAnswers[i].text;
        optionButtons[i].dataset.type = shuffledAnswers[i].type;
    }

    //remove selected every question!!!!!!!!
        optionButtons.forEach(button => button.classList.remove('selected'));

        if (currentQuestion === questions.length - 1) {
            nextButton.textContent = "DONE";
        } else {
            nextButton.textContent = "NEXT";
        }

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
    result.classList.remove('hide');

    
    switch (personalityType) {
        case "type1":
            resultImage.src = "images/Phoenix.png";
            resultImage.alt = "Phoenix";
            break;
        case "type2":
            resultImage.src = "images/Wizard.png";
            resultImage.alt = "Wizard";
            break;
        case "type3":
            resultImage.src = "images/Fairy.png";
            resultImage.alt = "Fairy";
            break;
        case "type4":
            resultImage.src = "images/Mermaid.png";
            resultImage.alt = "Mermaid";
            break;
        default:
            resultImage.src = "";
            resultImage.alt = "";
            break;
    }

    // sisplay stats
    resultStats.innerHTML = `
        <p class="stat">Strength: ${stats.strength}</p>
        <p class="stat">Wisdom: ${stats.wisdom}</p>
        <p class="stat">Charm: ${stats.charm}</p>
        <p class="stat">Support: ${stats.support}</p>
    `;
    
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateProgressBar(currentQuestion) { 
    const element = document.getElementById("myBar");
    const totalQuestions = questions.length;
    const width = (currentQuestion / totalQuestions) * 100;
    element.style.width = width + '%';
  } 
    
function playClickSound() {
    audio.currentTime = 0; 
    audio.play();
}

restartBtn.addEventListener('click', function() {
    playClickSound();
    resetQuiz();
});

function resetQuiz() {
    currentQuestion = 0;
    results = {
        type1: 0,
        type2: 0,
        type3: 0,
        type4: 0
    };

    stats = {
        strength: 0,
        wisdom: 0,
        charm: 0,
        support: 0
    };

    result.classList.add('hide');
    quizPage.classList.remove('hide');
    updateQuestion();
    updateProgressBar(0);
    document.body.style.backgroundImage = "url('images/background.png')";
}