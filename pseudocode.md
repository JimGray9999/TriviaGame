Trivia Game

Show a page with the title and a start button

When Start is pressed, game begins

Show a countdown timer of 5 minutes

display a list of multiple choice questions
    each question has four radio button answers (1 correct, 3 incorrect)

when the player clicks an answer, the radio button is selected
    if player selects a different answer, the radio button changes
    (player cannot choose more than one answer to a question)

if all questions are answered, the player can choose to end the game
    display the player results (correct, incorrect, unanswered)
    if player has > 1 unanswered
        alert player that questions remain unanswered

if timer runs out, game is stopped
    display the player results (correct, incorrect, unanswered)
    ask if player wants to try again

variables

questions in an object, constructed from a function
    values for question, category, correct answer, and 3 incorrect answers

variables for correct, incorrect, and unanswered

functions

when a radio button for a question is pressed
    record the answer selected into a variable

when the Start button is pressed (begin game)
    load the question forms

when the Submit button is pressed (end game)
    end game function

when time runs out (end game)
    end game function