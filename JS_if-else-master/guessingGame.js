let re=require("readline-sync");
var number_to_guess = re.questionInt("What should the number_to_guess be...:? ")
// var guesses = re.questionInt("How many guesses.:? ")

guess_any_num = 0
var user_guess = re.questionInt("Guess a number: ")
guess_any_num += 1
if (number_to_guess < user_guess)
    console.log("The number is lower than that.")
else if (number_to_guess > user_guess)
    console.log("The number is higher than that")

if (guess_any_num >= user_guess && user_guess !=number_to_guess)
    console.log("You lose; the number was ", number_to_guess)
if (user_guess ==number_to_guess)
    console.log(" WOW..You guess right number...win!",number_to_guess)