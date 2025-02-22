let months=["jan","july","march","aug"];
let languages=["c","c++","html","js","python","java","c#","sql"];
months.splice(0,1);
months.splice(1,0,"june");
languages.reverse();
console.log(months);
console.log(languages.indexOf("js"));