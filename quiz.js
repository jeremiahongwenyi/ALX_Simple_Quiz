function checkAnswer() {
    let correctAnswer = "4";
    const userAnswer = document.querySelector('[name="quiz"]:checked')?.value
    console.log(userAnswer);


    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done."
        console.log(document.getElementById('feedback'));

        console.log("i worked");

    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!"
    }

}

document.getElementById('submit-answer').addEventListener('click', checkAnswer)
