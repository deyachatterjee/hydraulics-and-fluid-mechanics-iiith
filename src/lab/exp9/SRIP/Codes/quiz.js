
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

// question courtesy: https://www.sanfoundry.com/fluid-mechanics-questions-answers-types-flow-channels/
var myQuestions = [
	{
		question: "The flow characteristics of a channel does not change with time at any point. What type of flow is it?"
		answers: {
			a: 'Steady flow',
			b: 'Uniform flow',
			c: 'Laminar flow',
      d: 'Turbulent flow'
		},
		correctAnswer: 'a'
	},
	{
		question: "The Reynolds number for a flow in a channel is 1000. What type of flow is it?"
		answers: {
			a: 'Laminar',
			b: 'Turbulent',
			c: 'Transition',
      d: 'Steady'
		},
		correctAnswer: 'c'
	},
  
  {
		question: "What is the Froude’s number for a channel having mean velocity 4.34 m/s and mean hydraulic depth of 3m?"
		answers: {
			a: '0.4m',
			b: '0.6m',
			c: '0.7m',
      d: '0.8m'
		},
		correctAnswer: 'd'
	},
  
  {
		question: "Calculate the mean hydraulic depth of a channel having top width of 7m and cross sectional area of 35m2."
		answers: {
			a: '4m',
			b: '5m',
			c: '6m',
      d: '7m'
		},
		correctAnswer: 'b'
	},
  
  {
		question: "Estimate the section factor for a channel section having cross sectional area of 40m2 and hydraulic depth of 6m."
		answers: {
			a: '94.3',
			b: '95.6',
			c: '97.9',
      d: '100'
		},
		correctAnswer: 'c'
	},
  
  {
		question: "Calculate the Froude’s number for a channel having discharge of 261.03m3/s, cross sectional area of 42m2 and the top width being 6m."
		answers: {
			a: '.65',
			b: '.72',
			c: '.38',
      d: '.75'
		},
		correctAnswer: 'd'
	},
  
   {
		question: "Calculate the aspect ratio having channel width of 6m and depth of 8m."
		answers: {
			a: '.75m',
			b: '1.33m',
			c: '1.5m',
      d: '1.68m'
		},
		correctAnswer: 'b'
	},
  
   {
		question: "The exit velocity in the nozzle increases as per __________ "
		answers: {
			a: 'Stagnation point',
			b: 'Continuity equation',
			c: 'Prandtl Number',
      d: 'Newton’s law'
		},
		correctAnswer: 'b'
	},
  
   {
		question: "With the increase in pressure, the exit velocity _________"
		answers: {
			a: 'Decreases',
			b: 'Increases',
			c: 'Same',
      d: 'Independent'
		},
		correctAnswer: 'a'
	},
  
   {
		question: "Which among the following is the formula for mass flow rate?"
		answers: {
			a: 'Q = m/p',
			b: 'Q = mp',
			c: 'Q = m + p',
      d: 'Q = m – p'
		},
		correctAnswer: 'b'
	},
  
   {
		question: "Which among the following is the formula for volumetric flow rate?"
		answers: {
			a: 'Q = v/A',
			b: 'Q = Av',
			c: 'Q = A+v',
      d: 'Q = A-v'
		},
		correctAnswer: 'b'
	},
  
   {
		question: "What is Mach number?"

		answers: {
			a: 'Speed of object * speed of sound',
			b: 'Speed of object / speed of sound',
			c: 'Speed of object + speed of sound',
      d: 'Speed of object - speed of sound'
		},
		correctAnswer: 'a'
	},
  
];


function showQuestions(questions, quizContainer){
	
	var output = [];
	var answers;

	// for each question
	for(var i=0; i<questions.length; i++){
		
		//  reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			//  html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}
showQuestions(questions, quizContainer);


function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// on submit, show results
submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
//css
body{
	font-size: 20px;
	font-family: sans-serif;
	color: #333;
}
.question{
	font-weight: 600;
}
.answers {
    margin-bottom: 20px;
}
#submit{
	font-family: sans-serif;
	font-size: 20px;
	background-color: #297;
	color: #fff;
	border: 0px;
	border-radius: 3px;
	padding: 20px;
	cursor: pointer;
	margin-bottom: 20px;
}
#submit:hover{
	background-color: #3a8;
}
