const form =document.getElementById('form');
const scoreElement = document.getElementById('score');
const questionElement = document.getElementById('question');
const inputElement = document.getElementById('input');

//initialize the score variable
let score = 0;


//Function to generate random multiplication question
function generateQuestion() {
	const number1 = Math.floor(Math.random() * 10) + 1;
	const number2 = Math.floor(Math.random() * 10) + 1;
	const question = `What is ${number1} multiply by ${number2}?`;
	const answer = (number1 * number2).toString();

	return { question, answer };
}



let currentQuestion = generateQuestion();



//funtion to display question
function  displayQuestion() {
  questionElement.textContent = currentQuestion.question;
}


//check the answer and update score
function checkAnswer(){
	const userAnswer = inputElement.value;

	const correctAnswer = currentQuestion.answer;


	if (userAnswer === correctAnswer)
		score++;
	 

	 scoreElement.textContent = 'Score: ' + score + ' Correct!';

	 

  


  inputElement.value = '';

  currentQuestion = generateQuestion();
  displayQuestion();
}


form.addEventListener('submit', function (event) {
	event.preventDefault();

	checkAnswer();
});


displayQuestion();