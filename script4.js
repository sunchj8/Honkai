const correctAnswers = {
    question1: "Сервал",
    question2: "Ветер",
    question3: "Ярило-VI",
    question4: "Сварог",
    question5: "Пом-Пом",
    question6: "Акивили"
};

document.getElementById('vopros').addEventListener('submit', function (event) {
    event.preventDefault();
    let score = 0;
    const results = [];

    Object.keys(correctAnswers).forEach((question, index) => {
        const resultElement = document.getElementById(`result${index + 1}`);
        resultElement.innerHTML = ""; 
        let userAnswer;

        const firstInput = document.querySelector(`input[name="${question}"]`);
        if (firstInput) {
            if (firstInput.type === 'radio') {
                const selected = document.querySelector(`input[name="${question}"]:checked`);
                userAnswer = selected ? selected.value.trim().toLowerCase() : "";
            } else {
                userAnswer = document.getElementById(question).value.trim().toLowerCase();
            }

            const correctAnswer = correctAnswers[question].trim().toLowerCase();

            if (userAnswer === correctAnswer) {
                resultElement.innerHTML = `<span class="correct">Верно!</span>`;
                score++;
            } else {
                resultElement.innerHTML = `<span class="incorrect">Неверно. Правильный ответ: ${correctAnswers[question]}</span>`;
            }

            results.push(resultElement.innerHTML);
        }

    
        const resultDiv = document.getElementById("resultDiv");
        resultDiv.textContent = `Ваши баллы: ${score} из 6`;
    });

    
    localStorage.setItem("results", JSON.stringify(results));
    localStorage.setItem("score", `${score} из ${Object.keys(correctAnswers).length}`);

   
});

document.getElementById('btn2').addEventListener('click', function () {
    document.getElementById('vopros').reset();
    Array.from(document.querySelectorAll("div[id^='result']")).forEach(div => div.innerHTML = "");
    localStorage.removeItem("results");
    localStorage.removeItem("score");
});