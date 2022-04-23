const quizData = [
    {
        question: "Apa Nama Ibukota Indonesia?",
        a: "Jawa",
        b: "Jakarta",
        c: "Makassar",
        d: "Kalimantan",
        correct: "b",
    },
    {
        question: "Siapa Presiden Pertama Indonesia?",
        a: "Soekarno",
        b: "Soeharto",
        c: "Habibie",
        d: "Abdurrahman Wahid",
        correct: "a",
    },
    {
        question: "Sila Pertama Pancasila adalah?",
        a: "Keadilan Sosial Bagi Seluruh Rakyat Indonesia",
        b: "Persatuan Indonesia",
        c: "Kemanusiaan Yang Adil & Beradab",
        d: "Ketuhanan Yang Maha Esa",
        correct: "d",
    },
    {
        question: "Tahun Berapakah Indonesia Merdeka?",
        a: "1950",
        b: "1956",
        c: "1945",
        d: "Indonesia Belum Merdeka",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})