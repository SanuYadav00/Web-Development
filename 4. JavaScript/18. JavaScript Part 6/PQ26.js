function roll() {
  console.log(`The value of dice is: ${Math.ceil(Math.random()*6)}`);
}
console.log("Create a function to roll a dice & always display the value of the dice (1 to 6)");
for (let i=0;i<=50;i++) {
  roll();
}