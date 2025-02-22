let arr=[];
let n=prompt("Enter the total no. of elements in the array:");
for (let i=0;i<n;i++) {
  k=prompt(`Enter the element at ${i}th index of the array:`);
  arr[i]=parseInt(k);
}
let result=arr.reduce((max,el)=> {
if (el>max) {
  return el;
}
else {
  return max;
}
});
console.log(`The maximum element is ${result}`);
