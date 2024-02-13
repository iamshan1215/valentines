// Loop through each submit button and attach event listener
for (let i = 1; i <= 10; i++) {
    document.getElementById('submit' + i).addEventListener('click', function() {
        checkAnswer(i);
    });
}

// Function to check answer for the given question number
function checkAnswer(questionNumber) {
    const answerElement = document.getElementById('answer' + questionNumber);
    let answer;
    let correctAnswer;
    let nextQuestionNumber = questionNumber + 1;
    let nextButton = document.getElementById('submit' + nextQuestionNumber);

    switch (questionNumber) {
        case 1:
            answer = parseInt(document.getElementById('answer1').value);
            correctAnswer = 20;
            nextQuestionNumber = 2;
            nextButton = document.getElementById('submit2');
            break;
        case 2:
            answer = parseInt(document.getElementById('answer2').value);
            correctAnswer = 95;
            nextQuestionNumber = 3;
            nextButton = document.getElementById('submit3');
            break;
        case 3:
            answer = document.getElementById('answer3').value;
            correctAnswer = 1;
            nextQuestionNumber = 4;
            nextButton = document.getElementById('submit4');
            break;
        case 4:
            answer = parseInt(document.getElementById('answer4').value);
            correctAnswer = 32;
            nextQuestionNumber = 5;
            nextButton = document.getElementById('submit5');
            break;
        case 5:
            answer = parseInt(document.getElementById('answer5').value);
            correctAnswer = 10;
            nextQuestionNumber = 6;
            nextButton = document.getElementById('submit6');
            break;
        case 6:
            answer = parseInt(document.getElementById('answer6').value);
            correctAnswer = 48;
            nextQuestionNumber = 7;
            nextButton = document.getElementById('submit7');
            break;
        case 7:
            answer = parseInt(document.getElementById('answer7').value);
            correctAnswer = 2;
            nextQuestionNumber = 8;
            nextButton = document.getElementById('submit8');
            break;
        case 8:
            answer = parseInt(document.getElementById('answer8').value);
            correctAnswer = 1040;
            nextQuestionNumber = 9;
            nextButton = document.getElementById('submit9');
            break;
        case 9:
            answer = parseInt(document.getElementById('answer9').value);
            correctAnswer = 50;
            nextQuestionNumber = 10;
            nextButton = document.getElementById('submit10');
            break;
        case 10:
            answer = parseInt(document.getElementById('answer10').value);
            correctAnswer = 40;
            // No next button for the last one
            break;
    }
    if (isNaN(answer)) {
        alert('Please enter a valid answer.');
        return;
    }

    // Corrected condition for question 3
    if (answer === correctAnswer || (questionNumber === 3 && answer.toString().toLowerCase() === correctAnswer.toString().toLowerCase())) {
        document.getElementById('question' + questionNumber).style.display = 'none';
        answerElement.style.display = 'none';
        document.getElementById('submit' + questionNumber).style.display = 'none';

        if (nextButton !== null) {
            document.getElementById('question' + nextQuestionNumber).style.display = 'block';
            document.getElementById('answer' + nextQuestionNumber).style.display = 'block';
            nextButton.style.display = 'block';
        } else {
            // Last question, show the love letter
            document.getElementById('love-letter').style.display = 'block';
        }
    } else {
        alert('Incorrect answer. Please try again.');
    }
}
