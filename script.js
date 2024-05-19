const quizData = [
    {
        question: "What's Abhijeet favourite Movie",
        options: ["The Notebook", "Titanic", "Avengers: End Game", "La La Land"],
        answer: ""
    },
    {
        question: "What's Abhijeet idea of a perfect date?",
        options: ["Dinner at a fancy restaurant", "Picnic under the stars", "Watching sunset at Fatehpur Sikri", "Stargazing on a rooftop"],
        answer: ""
    },
    {
        question: "Which love song Abhijeet like?",
        options: ["Satranga", "Pehle bhi main", "Perfect", "Zaalima"],
        answer: ""
    },
];

const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let currentQuestion = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-button");
        button.addEventListener("click", () => {
            currentQuizData.answer = option;
            selectOption();
        });
        optionsElement.appendChild(button);
    });
}

function selectOption() {
    const selectedButton = document.querySelector(".option-button.selected");
    if (selectedButton) {
        selectedButton.classList.remove("selected");
    }
    const clickedButton = event.target;
    clickedButton.classList.add("selected");
}


function showResult() {
    let score = 0;
    quizData.forEach((question) => {
        if (question.answer !== "") {
            score++;
        }
    });
    resultElement.innerText = `Congratulations! Accuracy: 100%`;
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        submitButton.style.display = "none";
        showResult();
    }
}

submitButton.addEventListener("click", nextQuestion);

loadQuestion();
