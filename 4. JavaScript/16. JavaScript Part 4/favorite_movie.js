let favorite="One Piece";
let guess=prompt("Guess a movie name:");
while (favorite!=guess && guess!="quit") {
  console.log("Your guess is wrong.");
  guess=prompt("Guess another movie name (You can write quit to quit this game and accept your defeat):");
  }

  if (guess==favorite) {
    console.log("Congratulations Your Guess was right.");
  }
  else {
    console.log("Bye Loser");
  }