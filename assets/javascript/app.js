$(document).ready(function() {

	var answers = ["Badger", "Bloody Baron", ];

	var questions = [{
    question: "What is the mascot of House Hufflepufff?",
    choices: ["Snake", "Badger", "Raven", "Falcon"],
    correctAnswer: 1
}, {
    question: "Who is the ghost of Slytherin?",
    choices: ["Moaning Myrtle", "Sir Nicholas de Mimsy-Porpington", "Fat Friar", "Bloody Baron"],
    correctAnswer: 2
}, {
    question: "What platform is used to board the Hogwarts Express?",
    choices: ["Platform 4", "Platform 3", "Platform 5", "Platform 9 3/4"],
    correctAnswer: 1
}, {
    question: "How many years has Hogwarts been operating?",
    choices: ["900 Years", "700 Years", "800 Years", "Over 1,000 Years"],
    correctAnswer: 0
}, {
    question: "What are the colors of House Ravenclaw?",
    choices: ["Red and Black", "Blue and Bronze", "Blue and White", "Scarlet and Gold"],
    correctAnswer: 0
}];

console.log(questions[0].question);

var cQ = 0;
function displayQuestion() {
	for (i=0; i < questions[cQ].choices.length; i++) {
		$("#answers-container").append("<li class='choices'>" + questions[cQ].choices[i]);
		$(".choices").attr("value", questions[cQ].choices[i]);
	}
	$("#question").text(questions[cQ].question);
	cQ++;
}
// console.log(questions[0].choices[0].value);
displayQuestion();

$(".choices").click(function() {
	displayQuestion();
})
});