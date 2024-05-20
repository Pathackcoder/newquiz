const questions = [
    "Who knows every secret of you?",
    "What is your favorite romantic movie?",
    "What is your dream vacation destination with your partner?",
    "What is your favorite love song?",
    "What was the date of your first kiss?",
    "What is the most memorable gift you've received from your partner?",
    "What is your partner's favorite color?",
    "What is your favorite thing to do together?",
    "Where did you first meet?",
    "What is your partner's middle name?"
];

const options = [
    ["Best Friend", "Mother/Father", "GF/BF", "Brother/Sister", "Grandparent", "No One"],
    ["The Notebook", "Titanic", "Pride and Prejudice", "A Walk to Remember", "La La Land", "Romeo + Juliet"],
    ["Paris", "Maldives", "Hawaii", "Venice", "Bali", "Santorini"],
    ["Endless Love", "All of Me", "Perfect", "Thinking Out Loud", "Just the Way You Are", "My Heart Will Go On"],
    ["01/01/2020", "14/02/2019", "31/12/2018", "25/12/2017", "04/07/2016", "11/11/2015"],
    ["Jewelry", "Love Letter", "Handmade Gift", "Surprise Date", "Flowers", "A Song"],
    ["Red", "Blue", "Green", "Purple", "Pink", "Black"],
    ["Cooking Together", "Watching Movies", "Traveling", "Dancing", "Hiking", "Reading"],
    ["At a Party", "In School", "Online", "Through a Friend", "At Work", "At a Coffee Shop"],
    ["Michael", "Ann", "James", "Elizabeth", "David", "Marie"]
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput) {
        document.querySelector('.name-container').style.display = 'none';
        document.querySelector('.quiz-container').style.display = 'block';
        loadQuestion();
    } else {
        alert('Please enter your name');
    }
}

function loadQuestion() {
    document.querySelector('.question').innerText = questions[currentQuestion];
    const optionsContainer = document.querySelector('.options');
    optionsContainer.innerHTML = '';
    options[currentQuestion].forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });

    document.querySelectorAll('.progress-circle').forEach((circle, index) => {
        circle.classList.toggle('active', index === currentQuestion);
    });
}

function selectOption(index) {
    document.querySelectorAll('.options button').forEach(button => button.classList.remove('selected'));
    document.querySelectorAll('.options button')[index].classList.add('selected');
}

function nextQuestion() {
    const selectedOption = document.querySelector('.options button.selected');
    if (!selectedOption) {
        alert('Please select an option');
        return;
    }

    if (selectedOption.innerText === options[currentQuestion][2]) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'block';
    document.getElementById('score').innerText = score;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.result-container').style.display = 'none';
});
