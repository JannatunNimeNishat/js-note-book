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

//console.log(typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(typeof booleanIsLoggedIn);
//console.log(booleanIsLoggedIn);

//* 3. String() conversion
let str = 33; //after String(). type => string. value => 33

// console.log(typeof str);

let stringNumber = String(str);

// console.log(typeof stringNumber);
// console.log(stringNumber);

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

// *************************** Operations **************************************

let value = 3;
let negValue = -value;
console.log(negValue);

//* basic math operations
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3); // 2 to the power 3
// console.log(2 / 3);
// console.log(2 % 3);

console.log("1" + 2); // it will do string concatenation by converting the number value to string.
console.log(1 + "2"); // same as the previous one

console.log("1" + 2 + 2); // it will product 122 in string. the 1st value is string so all are converted to string and then concatenated. 
console.log(1+2+"2"); // it will product 32 in string. 1st 2 values will be added and product 3 and then concatenated with string value 2. if last value is string then this happened.

console.log(1+"2"+2); // it will product 122

console.log(1+2+"3"+2); // it will product 332. 1 + 2 is evaluated as a numeric expression, resulting in 3. 3 + "3" is evaluated as a string concatenation, because the + operator is overloaded to perform concatenation when one of the operands is a string. This results in the string "33". "33" + 2 is again evaluated as a string concatenation, resulting in the string "332".

console.log(+true) // it will product 1
console.log(+"") // it will product 0

