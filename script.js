const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which is the largest planet?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: 1
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "7", "10"],
        answer: 1
    },
    {
        question: "Which programming language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");

    if (currentQuestion < questions.length) {
        questionEl.textContent = questions[currentQuestion].question;
        optionsEl.innerHTML = "";

        questions[currentQuestion].options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => checkAnswer(index);
            optionsEl.appendChild(button);
        });

        nextBtn.style.display = "none";
    } else {
        showScore();
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }
    document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function showScore() {
    document.getElementById("quiz").style.display = "none";
    const scoreEl = document.getElementById("score");
    scoreEl.textContent = `You scored ${score} out of ${questions.length}!`;
    scoreEl.style.display = "block";
}

loadQuestion();
