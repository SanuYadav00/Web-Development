console.log("User enters a max number & then tries to guess a random generated number between 1 to max");
let max =prompt("Enter the max number");
let random=Math.ceil(Math.random()*max);
let guess=prompt("Guess a number:");
while (true) {
  if (guess=="quit") {
    console.log("User is a loser.");
    break;
  }
  if (guess==random) {
    console.log("Congratulations, You guessed it right.");
    break;
  }
  else {
  console.log("Sorry your guess was wrong, Try Again");
  guess=prompt("Guess a number:");
  }
}
