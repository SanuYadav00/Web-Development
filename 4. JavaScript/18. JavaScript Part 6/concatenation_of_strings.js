function concat(arr) {
let ans="";
for (let i=0;i<arr.length;i++) {
  ans+=arr[i];
}
return ans;
}

console.log("Create a function that returns the concatenation of all strings in an array.");
let n=prompt("Enter the total number of strings in the array:");
let arr=[];
for (let i=0;i<n;i++) {
  arr[i]=prompt(`Enter the ${i}th string of the array:`);
}
let str=concat(arr);
console.log(`The concatenated string is ${str}`);