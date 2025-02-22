const square=(n)=> {
  return n*n;
};
let n=prompt("Enter a number whose square you want to find:");
console.log(square(n));

let id=setInterval(()=> {
  console.log("Hello World");
},2000);

setTimeout(()=> {
  clearInterval(id);
  console.log("Clear interval ran:");
},10000);