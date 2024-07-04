const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-button');

const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "F. Scott Fitzgerald", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Oxalate", correct: false }
        ]
    },
    {
        question: "What is the speed of light?",
        answers: [
       
            { text: "3.0 x 10^6 m/s", correct: false },
            { text: "3.0 x 10^5 m/s", correct: false },
            { text: "3.0 x 10^8 m/s", correct: true },
            { text: "3.0 x 10^3 m/s", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "HO2", correct: false },
            { text: "H2", correct: false },
            { text: "O2", correct: false },
            { text: "H2O", correct: true },
        ]
    },
    {
        question: "What planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: true },
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
           
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },   
            { text: "Niels Bohr", correct: false }
        ]
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: [
            { text: "Mitochondria", correct: true },
            { text: "Nucleus", correct: false },
            { text: "Ribosome", correct: false },
            { text: "Endoplasmic Reticulum", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            
            { text: "Saturn", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Neptune", correct: false },
            { text: "Earth", correct: false }
        ]
    },

];

let currentQuestionIndex = 0;
let score = 0;

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        showResults();
    }
});

restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, answer.correct));
        answersElement.appendChild(button);
    });
};
function resetState() {
    nextButton.classList.add('hide');
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(button, correct) {
    if (correct) {
        score++;
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }
    Array.from(answersElement.children).forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === questions[currentQuestionIndex].answers.find(a => a.correct).text) {
            btn.style.backgroundColor = 'green';
        }
    });
    nextButton.classList.remove('hide');
}


function showResults() {
    quizContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    resultElement.textContent = `You scored ${score} out of ${questions.length}`;

}

function restartQuiz(){
    startQuiz()
}
 startQuiz();
