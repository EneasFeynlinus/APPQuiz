const quizForm = document.querySelector('.quiz-form')
const popup = document.querySelector('.popup-wrapper')
const correctAnswers = ['D', 'C', 'C', 'B']

quizForm.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0

    const userAnswers = [
        quizForm.inputQuestion1.value,
        quizForm.inputQuestion2.value,
        quizForm.inputQuestion3.value,
        quizForm.inputQuestion4.value,
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }
    })

    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    popup.style.display = 'block'

    let counter = 0

    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }

        popup.querySelector('span').textContent = `${counter++}`
    }, 15)
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