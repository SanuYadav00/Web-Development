let arr=[1,2,3,4,5,6,7,8,9,10];
let n=3;
let ans1=arr.slice(0,n);
let ans2=arr.slice(arr.length-n);
console.log("Array is:",arr);
console.log("Ans1 is:",ans1);
console.log("Ans2 is:",ans2);

let string=prompt("Enter a string:");
if (string.length==0) {
  console.log("String is blank.");
}
else {
  console.log("String is not blank.");
}

let index=3;
if (string[index]==string[index].toLowerCase()) {
  console.log("Character is lowerCase.")
}
else {
  console.log("Character is not lowerCase.")
}
let index1=0;
if (string[index1]==string[index1].toLowerCase()) {
  console.log("Character is lowerCase.")
}
else {
  console.log("Character is not lowerCase.")
}
let str=prompt("Enter a string to trim it:");
console.log(`Original string= ${str}`);
console.log(`string without spaces= ${str.trim()}`);


let element=4;
let ele=12;
if (arr.indexOf(element)==-1) {
  console.log(`${element} doesnot exist.`);
}
else {
  console.log(`${element} exists.`);
}

if (arr.indexOf(ele)==-1) {
  console.log(`${ele} doesnot exist.`);
}
else {
  console.log(`${ele} exists.`);
}
