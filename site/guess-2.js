function playGuess2() {
    var answer = parseInt(Math.random() * 100);
	var user1 = prompt("Игрок 1, введите Ваше имя:");
	var user2 = prompt("Игрок 2, введите Ваше имя:");

	while (true) {
		var user1_answer = prompt(user1 + ", введите число от 0 до 100, для выхода из игры наберите exit.");
		if (user1_answer == "exit") {
			break;
		}
		var user2_answer = prompt(user2 + ", введите число от 0 до 100, для выхода из игры наберите exit.");
		if (user2_answer == "exit") {
			break;
		}
		user1_answer = parseInt(user1_answer);
		user2_answer = parseInt(user2_answer);

		if (user1_answer > answer) {
			alert(user1 + ", Ваш ответ слишком большой.");
		} else if (user1_answer < answer) {
			alert(user1 + ", Ваш ответ слишком маленький.");
		} else if (user1_answer == answer) {
			alert(user1 + " угадал!");
			break;
		} else {
			alert("Необходимо ввести число!");
		}

		if (user2_answer > answer) {
			alert(user2 + ", Ваш ответ слишком большой.");
		} else if (user2_answer < answer) {
			alert(user2 + ", Ваш ответ слишком маленький.");
		} else if (user2_answer == answer) {
			alert(user2 + " угадал!");
			break;
		} else {
			alert("Необходимо ввести число!");
		}
	}
}