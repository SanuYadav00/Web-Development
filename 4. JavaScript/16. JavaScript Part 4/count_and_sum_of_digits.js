let num=prompt("Enter a number");
let sum=0;
let count=0;
while (num>0) {
  count++;
  sum=sum+(num%10);
  num=Math.floor(num/10);
}
console.log("Sum of digits:",sum);
console.log("Count of digits:",count);
