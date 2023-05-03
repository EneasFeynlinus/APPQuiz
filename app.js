const quizForm = document.querySelector('.quiz-form')
const popup = document.querySelector('.popup-wrapper')
const correctAnswers = ['D', 'C', 'C', 'B']

let score = 0

const getUserAnswer = () => {
    let userAnswers = []

    correctAnswers.forEach((_, index) => {
        const userAnswer = quizForm[`inputQuestion${index + 1}`].value
        userAnswers.push(userAnswer)
    })

    return userAnswers
}

const calculateUserScore = (userAnswers) => {
    userAnswers.forEach((userAnswer, index) => {
        const isUserAnswerCorrect = userAnswer === correctAnswers[index]
        if (isUserAnswerCorrect) {
            score += 25
        }
    })
}

const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    popup.style.display = 'block'
}

const animateFinalScore = () => {
    let counter = 0

    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }

        popup.querySelector('span').textContent = `${counter++}`
    }, 15)
}

quizForm.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = getUserAnswer()

    calculateUserScore(userAnswers)
    showFinalScore()
    animateFinalScore()
})

popup.addEventListener('click', event => {
    const classOfClickedElement = event.target.classList[0]
    const classList = ['restart-button', 'popup-wrapper', 'popup-close']
    const shouldPopupBeClosed = classList.some(item => item === classOfClickedElement)

    if (shouldPopupBeClosed) {
        popup.style.display = 'none'
        score = 0
    }
    quizForm.reset()
})