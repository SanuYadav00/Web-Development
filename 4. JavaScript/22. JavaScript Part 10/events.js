let btn=document.querySelectorAll("button");
console.dir(btn);

// btn.onclick= function() {
//   alert("button was clicked");
// };

function sayHello() {
  alert("Hello!");
}
for (bt of btn ) {
bt.onclick= sayHello;
bt.onmouseenter= function() {
 console.log("You entered a button.")
};
}