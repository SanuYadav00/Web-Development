let arr=[];
let n=prompt("Enter the total no. of elements in the array:");
for (let i=0;i<n;i++) {
  let k=prompt(`Enter the element at ${i}th index of the array:`);
  arr[i]=parseInt(k);
}
let result=arr.reduce((min,el)=> {
if (el<min) {
  return el;
}
else {
  return min;
}
});
console.log(`The minimum element is ${result}`);
let ans=arr.every((el)=> {
 return el % 10 == 0;
});
console.log(ans);