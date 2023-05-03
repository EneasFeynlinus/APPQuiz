const quizForm = document.querySelector('.quiz-form')
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

    console.log(score)
})