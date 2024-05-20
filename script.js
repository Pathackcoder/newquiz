const questions = [
    "Who knows every secret of Akash?",
    "What type of movies does Akash like?",
    "What animal would Akash like as a pet?",
    "What is Akash favorite smartphone brand?",
    "What was the date of Akash first kiss?",
    "What is Akash's favourite subject?",
    "What is your partner's favorite color?",
    "What is Akash favorite thing to do together with you?",
    "Where did you first meet?",
    "What is your partner's middle name?"
];

const options = [
    ["Best Friend", "Mother/Father", "GF/BF", "Brother/Sister", "Grandparent", "No One"],
    ["Comedy", "Drama", "Romance", "Thriller", "Science Fiction", "Horror"],
    ["Cat", "Dog", "Fish", "Parrot", "Rat", "Cow"],
    ["Samsung", "Apple", "One Plus", "Xiomi", "Sony", "Oppo"],
    ["01/01/2020", "14/02/2019", "31/12/2018", "25/12/2017", "04/07/2016", "Never"],
    ["Art", "Chemistry", "Commerce", "English", "Maths", "Hindi"],
    ["Red", "Blue", "Green", "Purple", "Pink", "Black"],
    ["Cooking Together", "Watching Movies", "Traveling", "Dancing", "Hiking", "Reading"],
    ["At a Party", "In School", "Online", "Class", "Telegram", "Facebook"],
    ["Singh", "Anand", "Pratap", "Shankar", "Kumar", "Nothing"]
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

    if (selectedOption.innerText === options[currentQuestion][4]) {
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
