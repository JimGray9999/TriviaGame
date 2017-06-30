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
	var correctTotal = 0;
	var incorrectTotal = 0;
	var incompleteTotal = 0;

	// array of correct answers
	var answerKey = ["1C","2B","3A","4A"];

	var guesses = [];
	var questionLoop = ["q1", "q2", "q3", "q4"];

	var isComplete = false; //check if all were answered

	var countDown = 30; // set to 30 seconds initially
	var intervalID; 

	// 4 trivia questions
	// todo: see if you can create a function to loop thru any # of questions
	var question1 = new Question(
		 "history",
		 "Who was Henry VIII's first wife?",
		 "Mary Queen of Scots", // incorrect answer
		 "Elizabeth", // incorrect answer
		 "Catherine of Aragon", // correct answer
		 "Josephine" // incorrect answer
		 );

	var question2 = new Question (
		"history", // category
		"Who was the legendary Benedictine monk who invented champagne?", //question
		"Hennesey", // incorrect answer
		"Dom Perignon", // correct answer
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
		"Yellow", // correct
		"Blue",
		"Red",
		"Green"
		)


	// todo: function to display the 30 second timer and countdown

	function gradeQuiz (){

		clearInterval(intervalID);

		$("#countdown").text("");
		$("#countdown").append("<h2>Score:</h2>");

		for (i = 0 ; i < questionLoop.length ; i++) {
			guesses[i] = $("input[name="+questionLoop[i]+"]:checked"). val();
     	};

     	console.log(guesses);
     	console.log(answerKey);
     	console.log((guesses[0] === answerKey[0]));
     	console.log((guesses[1] === answerKey[1]));
     	console.log((guesses[2] === answerKey[2]));
     	console.log((guesses[3] === answerKey[3]));

     	// compare guesses and answerKey arrays

     	for (i = 0 ; i <= (answerKey.length - 1) ; i++) {
     		if (guesses[i] === answerKey[i]){
     			$("#question"+(i+1)).addClass("correct");
     			correctTotal++;
     		} else {
     			$("#question"+(i+1)).addClass("incorrect");
     			incorrectTotal++;
     		}
     	}

     	if (correctTotal === answerKey.length){
     		$("#countdown").append("<h2>You guessed " + correctTotal + " out of " + answerKey.length + "!</h2>");
     		$("#countdown").append("<h6>...smarty pants...</h6>");
     	} else {
     		$("#countdown").append("<h2>You guessed " + correctTotal + " out of " + answerKey.length + "</h2>");
     	}
     	

     	console.log("You guessed " + correctTotal + " out of " + answerKey.length);
     	console.log(correctTotal);
     	console.log(incorrectTotal);
     };

    function timer (){
    	intervalID = setInterval(tickTock, 1000);
    };

    function tickTock () {
    	
    	countDown--;

    	$("#countdown").text(countDown + " seconds left!");

    	if (countDown === 0){
    		console.log("time's up!");
    		$("#countdown").append("<h2>Time Is Up!</h2>");
			gradeQuiz();
		}
    };

	$("#start").on("click", function(){

		$(".container").removeClass("hide-me"); //make questions visible
		
		// show timer
		$("#countdown").removeClass("hide-me"); 
		$("#countdown").append(countDown + " seconds left!");

		$("#start").addClass("hide-me"); // hide start button

		// start 30 second timer
		timer();

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
		
		gradeQuiz();

		
	});
});