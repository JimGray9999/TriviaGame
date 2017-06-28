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

	// array of correct answers
	var correctAnswers = [];

	var isComplete = false; //check if all were answered

	// 10 trivia questions
	var question1 = new Question(
		 "history",
		 "Who was Henry VIII's first wife?",
		 "Catherine of Aragon",
		 "Mary Queen of Scots",
		 "Elizabeth",
		 "Josephine");

	var question2 = new Question (
		"history", // category
		"Who was the legendary Benedictine monk who invented champagne?", //question
		"Dom Perignon", // correct answer
		"Hennesey", // incorrect answer
		"Don Quixote", // incorrect answer
		"Honoratus" // incorrect answer
		);

	var question3 = new Question (
		"history",
		"Who invented the rabies vaccination?",
		"Louis Pasteur", // correct
		"Albert Einstein", 
		"Marie Curie",
		"Charles Lindbergh"
		);

	var question4 = new Question (
		"sports",
		"What color jersey is worn by the winners of each stage of the Tour De France?",
		"Yellow",
		"Blue",
		"Red",
		"Green"
		)

	$("#start").on("click", function(){
		$(".container").removeClass("hide-me"); //make questions visible
		$("#start").addClass("hide-me"); // hide start button

		// todo: function to build questions
		$("#question1").children().eq(0).text(question1.question);
		$("#question1").children().eq(2).text(question1.corrAnswer);
		$("#question1").children().eq(4).text(question1.guess1);
		$("#question1").children().eq(6).text(question1.guess2);
		$("#question1").children().eq(8).text(question1.guess3);

		$("#question2").children().eq(0).text(question2.question);
		$("#question2").children().eq(2).text(question2.corrAnswer);
		$("#question2").children().eq(4).text(question2.guess1);
		$("#question2").children().eq(6).text(question2.guess2);
		$("#question2").children().eq(8).text(question2.guess3);

		$("#question3").children().eq(0).text(question3.question);
		$("#question3").children().eq(2).text(question3.corrAnswer);
		$("#question3").children().eq(4).text(question3.guess1);
		$("#question3").children().eq(6).text(question3.guess2);
		$("#question3").children().eq(8).text(question3.guess3);

		$("#question4").children().eq(0).text(question4.question);
		$("#question4").children().eq(2).text(question4.corrAnswer);
		$("#question4").children().eq(4).text(question4.guess1);
		$("#question4").children().eq(6).text(question4.guess2);
		$("#question4").children().eq(8).text(question4.guess3);
	});

	$("#submit").on("click", function(){
		

		if(isComplete){
			// score the answers
			// display results
		}
	});
});