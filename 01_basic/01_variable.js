const accountId= 145698
let accountemail="sk@gmail.com"
var accountpassword="1234"
accountcity="burdwan"
// accountId=2
accountemail="abc@gmail.com"
accountpassword=2020
accountcity="kolkata"
let accountstate;  //it show undefined because we dont have give any CSSMathValue.
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId,accountemail,accountcity,accountstate])