<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Artur Manukian</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" type="image/png" href="img/icon.png">
</head>
<body>
    <div id="content">
        <div id="header">
            <a href="index.html">Главная</a> <span>/</span>
            <a href="puzzle.html">Загадки</a> <span>/</span>
            <a href="guess-1.html">Угадайка</a> <span>/</span>
            <a href="guess-2.html">Угадайка мультиплеер</a>
        </div>
        <h1>Личный сайт студента GeekBrains</h1>
        <div id="center"> 
            <h3>Игра в загадки</h3>
            <div id="box">
                <?php
                    $score = 0;
                    $userAnswer = $_GET['userAnswer1'];
                    $userAnswer = mb_strtolower($userAnswer);
                    if ($userAnswer == 'часы') {
                        echo 'Ответ на первый вопрос верный.';
                        $score++;
                    } else {
                        echo 'Ответ на первый вопрос неверный.';
                    }

                    echo '<br>';

                    $userAnswer = $_GET['userAnswer2'];
                    $userAnswer = mb_strtolower($userAnswer);
                    if ($userAnswer == 'море') {
                        echo 'Ответ на первый вопрос верный.';
                        $score++;
                    } else {
                        echo 'Ответ на первый вопрос неверный.';
                    }

                    echo '<br>';

                    $userAnswer = $_GET['userAnswer3'];
                    $userAnswer = mb_strtolower($userAnswer);
                    if ($userAnswer == 'радио') {
                        echo 'Ответ на первый вопрос верный.';
                        $score++;
                    } else {
                        echo 'Ответ на первый вопрос неверный.';
                    }

                    echo '<br><br>';
                    echo 'Правильных ответов: ' . $score;
                ?>
            </div>
        </div>
    </div>
    <div id="footer">Copyright © 2017 Artur Manukian</div>
</body>
</html>