var correctAnswersCount = 0;

        function askQuestion(textBoxId, answer) {
            var userAnswer = document.getElementById(textBoxId).value;
            userAnswer = userAnswer.toLowerCase(); // Приведение введенного текста до нижнего регистра
            if (userAnswer == answer) {
                correctAnswersCount++;
            }
        }

        function playPuzzle() {
            correctAnswersCount = 0;

            askQuestion("userAnswer1", "часы");
            askQuestion("userAnswer2", "море");
            askQuestion("userAnswer3", "радио");

            document.getElementById("result").innerHTML = "Количество правильных ответов: " + correctAnswersCount;
        }