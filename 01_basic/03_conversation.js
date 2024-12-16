let A = "33"
console.log(typeof A);
console.log(typeof(A));
let a = Number(A)
console.log(typeof a)
console.log(a)//it convert string to number


let B = "33abc"
console.log(typeof B);
console.log(typeof(B));
let b = Number(B)
console.log(typeof b)
console.log(b) // NAN is showing because "33abc" it is not a number


//CONVERT NUMBER TO STRING
let number =22
console.log(typeof number)
let convert=String(number)
console.log(typeof convert)
console.log(convert)