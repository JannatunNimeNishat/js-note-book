//  let score = 33; //after Number(). type => number. value => 33
// let score = "33abc"; //after Number(). type => number. value => NaN
// let score = null; //after Number(). type => object. value => 0
// let score = undefined; //after Number(). type => number. value => NaN
// let score = true; //after Number(). type => number. value => 1
let score = "ni7"; //after Number(). type => number. value => NaN

//console.log(typeof score);
//* 1. Number() conversion
let numberInValue = Number(score);

//console.log(typeof numberInValue);
//console.log(numberInValue);

//* 2. Boolean() conversion
// let isLoggedIn = 1; //after Boolean(). type => boolean. value => 1 
// let isLoggedIn = "ni7"; //after Boolean(). type => boolean. value => true 
//  let isLoggedIn = ""; //after Boolean(). type => boolean. value => false 
 let isLoggedIn = {}; //after Boolean(). type => boolean. value => true. Note: empty object is truthy value in JavaScript
  

console.log(typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

/**NaN
 ** NaN
 * NaN stands for "Not a Number" in JavaScript.
 * It is a value that represents an invalid or unrepresentable value when performing a mathematical operation.
 * For example, if you try to perform a mathematical operation that is not valid, such as dividing a number by zero, the result will be NaN.
 * We can use the isNaN() function to check if a value is NaN, since regular comparison (=== NaN) does not work
 */
// ex:
function checkEvenOdd(num) {
  if (typeof num !== "number") {
    return "Please enter a valid number.";
  }

  return num % 2 === 0
    ? `${num} is an even number.`
    : `${num} is an odd number.`;
}
//console.log(checkEvenOdd("2"));
