$(document).ready(function() {

	var answers = ["Badger", "Bloody Baron", "Platform 9 3/4", "Over 1,000 Years", "Blue and Bronze"];

	var imageArray = ["assets/images/hufflepuff.gif", "assets/images/bloody_baron.jpg", "assets/images/platform.gif", "assets/images/hogwarts.jpg", "assets/images/ravenclaw.jpg"];

	var questions = [{
    question: "What is the mascot of House Hufflepufff?",
    choices: ["Snake", "Badger", "Raven", "Falcon"],
    answer: 1
	}, 
	{
    question: "Who is the ghost of Slytherin?",
    choices: ["Moaning Myrtle", "Sir Nicholas de Mimsy-Porpington", "Fat Friar", "Bloody Baron"],
    answer: 3
	}, 
	{
    question: "What platform is used to board the Hogwarts Express?",
    choices: ["Platform 4", "Platform 3", "Platform 5", "Platform 9 3/4"],
    answer: 3
	}, 
	{
    question: "How many years has Hogwarts been operating?",
    choices: ["900 Years", "700 Years", "Over 1,000 Years", "800 Years"],
    answer: 2
	}, 
	{
    question: "What are the colors of House Ravenclaw?",
    choices: ["Red and Black", "Blue and Bronze", "Blue and White", "Scarlet and Gold"],
    answer: 1
	}];			
console.log(questions[0].choices[questions[0].answer])
console.log(questions[0].question);

//variable to define Current Question to allow function write the Question
//on a different interval than the answers
var cQ = 0;
var questionNum = 0;
var right = 0;
var wrong = 0;

var intervalID;

var countDown = {
	time: 30,

	reset: function () {
		countDown.time = 30;
		$("#timer").text(countDown.time);
	},

	start: function () {
		intervalId = setInterval(countDown.count, 1000);
	},

	stop: function () {
		clearInterval(intervalId);
	},
	count: function () {
		countDown.time--;
		$("#timer").text(countDown.time);
	}
};

var alert = {

	show: function() {
		$("#alert").show();
	},

	hide: function() {
		$("#alert").hide();
	},

	fill: function() {
		$("#alert").text("Sorry, the answer was " + answers[questionNum-1])
	}
}

var image = {

	show: function() {
		$("img").show();
	},

	hide: function() {
		$("img").hide();
	},

	fill: function() {
		$("img").attr('src', imageArray[questionNum-1]);
	}
}

var choices = {

	show: function() {
		$(".choices").show();
	},

	hide: function() {
		$(".choices").hide();
	}
}

function correct() {
	alert.show();
	image.show();
	choices.hide();
	$("#timer").hide();
	$("#alert").text("Correct! The answer was " + choiceVal + "!");
	right++;
	display();
	image.fill();
}

function incorrect() {
	alert.show();
	image.show();
	choices.hide();
	$("#timer").hide();
	wrong++;
	image.fill();
	alert.fill();
	display();
	
}

function timeIncorrect() {
	incorrect();
	countDown.stop();
}

function endGame() {
	cQ = 0;
	questionNum = 0;
	choices.hide();
	image.hide();
	$("#question").hide();
	alert.show();
	$("#alert").text("You got " + right + " out of " + answers.length + " correct!");
	$("#timer").hide();
	$("button").text("Play Again?");
	$("button").show();

}

var timeOut;

function qTimeout () {
	timeout = setInterval(timeIncorrect, 30000);
}
function stopQTimeout () {
	clearInterval(timeout);
}


function display () {
	displayQ = setTimeout(displayQuestion, 3000);
};
function stopDisplay () { 
	clearTimeout(displayQ);
};

function displayQuestion() {
	questionNum++;
	qTimeout();
	$("#timer").show();
	image.hide();
	countDown.reset();
	countDown.start();
	choices.show();
	alert.hide();
	for (i=0; i < questions[cQ].choices.length; i++) {
		$(".answers"+ (i +1)).text(questions[cQ].choices[i]);
		$(".answers"+ (i +1)).attr("value", questions[cQ].choices[i]);
	}
	$("#question").text(questions[cQ].question);
	cQ++;
}

// console.log(questions[0].choices[0].value);

$("button").click(function() {
	$("#question").show();
	$("button").fadeOut("fast");
	$("#timer").show();
	$("#timer").text(countDown.time);
	displayQuestion();
})

$(".choices").click(function() {
	// questionNum++;
	countDown.stop();
	choiceVal = $(this).attr("value");
	stopQTimeout();
		if (questionNum === 1) {

			if (answers.indexOf(choiceVal) > -1) {
				correct();
			}

			else {
				incorrect();
			}
		}

		else if (questionNum === 2) {

			if (answers.indexOf(choiceVal) > -1) {
				correct();
			}
			else {
				incorrect();
			}
		}
		else if (questionNum === 3) {
			
			if (answers.indexOf(choiceVal) > -1) {
				correct();
				
			}
			else {
				incorrect();
			}
		}
		else if (questionNum === 4) {
			
			if (answers.indexOf(choiceVal) > -1) {
				correct();
				
			}
			else {
				incorrect();
			}
		}
		else if (questionNum === 5) {
			if (answers.indexOf(choiceVal) > -1) {
				correct();
			}
			else {
				incorrect();
			}
			stopDisplay();
			setTimeout(endGame, 3000);
		}
	})

});