const questions = [
    {
        question: 'How many days after His resurrection did Jesus ascend into heaven?',
        answers: [
            {text: '30', correct: false},
            {text: '40', correct: true},
            {text: '60', correct: false},
            {text: '10', correct: false},

        ]
    },
    {
        question: 'On which mountain did Moses receive the Ten Commandments?',
        answers: [
            {text: 'Mount Sinai', correct: true},
            {text: 'Mount Nebo', correct: false},
            {text: 'Mount Carmel', correct: false},
            {text: 'Mount Ararat', correct: false},

        ]
    },
    {
        question: 'In the parable of the Good Samaritan, who were the first two people to pass by the injured man without helping?',
        answers: [
            {text: 'A scribe and a Pharisee', correct: false},
            {text: 'A merchant and a soldier', correct: false},
            {text: 'A fisherman and a tax collector', correct: false},
            {text: 'A priest and a Levite ', correct: true},

        ]
    },
    {
        question: 'To which city did Paul write the letter known as the "Epistle to the Romans"?',
        answers: [
            {text: 'Philippi', correct: false},
            {text: 'Corinth', correct: false},
            {text: 'Ephesus', correct: false},
            {text: 'Rome', correct: true},

        ]
    },
    {
        question: 'In the parable of the Prodigal Son, what did the younger son demand from his father?',
        answers: [
            {text: 'A feast', correct: false},
            {text: 'His share of the inheritance', correct: true},
            {text: 'A new robe', correct: false},
            {text: 'New home', correct: false},

        ]
    },
    {
        question: 'In the Book of Daniel, Daniel is thrown into a den of what animals?',
        answers: [
            {text: 'Lions', correct: true},
            {text: 'Snakes', correct: false},
            {text: 'Wolves', correct: false},
            {text: 'Bears', correct: false},

        ]
    },
    {
        question: 'What was the name of the sea that Moses parted to lead the Israelites out of Egypt?',
        answers: [
            {text: 'Dead Sea', correct: false},
            {text: 'Nile River', correct: false},
            {text: 'Red Sea', correct: true},
            {text: 'Mediterranean Sea', correct: false},

        ]
    },
    {
        question: 'During the Last Supper, what did Jesus break and distribute to His disciples as a symbol of His body?',
        answers: [
            {text: 'Wine', correct: false},
            {text: 'Bread', correct: true},
            {text: 'Cake', correct: false},
            {text: 'Fish', correct: false},

        ]
    },
    {
        question: 'Where did Jesus meet the Samaritan woman who came to draw water?',
        answers: [
            {text: 'The Jordan River', correct: false},
            {text: 'The Dead Sea', correct: false},
            {text: 'The Sea of Galilee', correct: false},
            {text: 'Jacob’s Well', correct: true},

        ]
    },
    {
        question: 'What did Jesus tell the rich young ruler to do in order to have eternal life?',
        answers: [
            {text: 'Performs miracles', correct: false},
            {text: 'Fast for forty day', correct: false},
            {text: 'Sell all his possessions and give to the poor', correct: true},
            {text: 'Follow the Ten Commandments', correct: false},

        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ='Next';
    showNextQuestion();
}

function showNextQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn')
        answerButtons.appendChild(button); 

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState(){
    nextButton.style.display ='none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
} 

function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    if(isCorrect){
        selectedButton.classList.add('correct');
        score++;
    }else{
        selectedButton.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true; 
    });
    nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Retake Quiz';
    nextButton.style.display = 'block';
    nextButton.style.backgroundColor = 'coral'
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showNextQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();