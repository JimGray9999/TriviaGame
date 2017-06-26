$(document).ready(function() {

	// construct each question as an object
	function Question (category, question, corrAnswer, guess1, guess2, guess3){
		this.category = category;
		this.question = question;
		this.corrAnswer = corrAnswer; //correct answer
		this.guess1 = guess1; // 1 of 3 wrong answers
		this.guess2 = guess2; // 2 of 3 wrong answers
		this.guess3 = guess3; // 3 of 3 wrong answers
	}

	// holds count of player's responses
	var correctTotal;
	var incorrectTotal;
	var incompleteTotal;

	var isComplete = false; //check if all were answered

	// 10 trivia questions
	question1 = new Question("Who was Henry VIll's first wife?",
							 "History",
							 "Catherine of Aragon",
							 "Mary Queen of Scots",
							 "Elizabeth",
							 "Josephine");

	$("#start").on("click", function(){
		$(".container").removeClass("hide-me");
		$("#start").addClass("hide-me");
		// todo: function to build questions
	});
});