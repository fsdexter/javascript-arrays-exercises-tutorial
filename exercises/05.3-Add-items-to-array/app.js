var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.
let a = Math.floor(Math.random()*arr.length);
let b = Math.floor(Math.random()*arr.length);
arr.push(a);
arr.push(b); 
console.log(arr);