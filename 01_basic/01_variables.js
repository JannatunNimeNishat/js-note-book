//var
/** 
** 1. var:
** Scope:
*! var declarations are function-scoped or globally-scoped.
-This means a variable declared with var inside a function is only accessible within that function. 
-If declared outside any function, it becomes a global variable.
** Re-declaration:
var allows re-declaration of the same variable within the same scope without error, effectively overwriting the previous declaration.
** Reassignment:
var variables can be reassigned to new values.
** Hoisting:
var declarations are "hoisted" to the top of their scope, meaning they are processed before the code execution, although their initial value remains undefined until the actual assignment.
*/

//** var Code example
var v0 = 1;
function varExample() {
  //console.log(v1); // don't give error as it is hosted on the top of this block with undefined as its value.
  var v1 = 1;
  var v1 = 2; // this is possible, var allow re-declaration.
  v1 = 3; // this is also possible, var allow re-assignment.
  //console.log(v1);
  // console.log(v0); // v0 can access inside function and other scop as it become global variable.
}
// console.log(v1); // we can't access v1 from global scope as it declared in side function scope.
//varExample();
// this can also possible.
{
  v0 = 10;
  var v2 = 99;
  //console.log(v0);
}

if (true) {
  var v3 = 20;
}

//console.log(v3);

/**
 ** 2. let:
** Scope:
*! let declarations are block-scoped. 
-This means a variable declared with let is only accessible within the block (e.g., if statements, for loops, or any curly braces {}) where it is defined.
** Re-declaration:
let does not allow re-declaration of the same variable within the same block scope. Attempting to do so will result in a SyntaxError.
** Reassignment:
let variables can be reassigned to new values.
** Hoisting:
- let declarations are also "hoisted" but are in a "temporal dead zone" until their declaration line is executed. This means attempting to access a let variable before its declaration will result in a ReferenceError.
- They are in a "temporal dead zone" (TDZ) until their declaration line is executed. The "temporal dead zone" is a period of time between the start of the scope and the actual declaration of the variable. During this time, the variable is not yet initialized, and attempting to access it will result in a ReferenceError. In other words, even though the variable is "hoisted" to the top of the scope, it's not yet fully initialized until the declaration line is executed. Until then, it's in a "dead zone" where it can't be accessed.
 * 
 */

//** let Code example

let l0 = 0; // global variable can access from any where
function letExample() {
  console.log(l0);
  let l1 = 1;
  // let l1 = 2; // re-declaration can not possible.
  l1 = 2; // re-assignment possible
  console.log(l1);
}
// console.log(l1); // can't access block level variable outside of that block
//letExample();
{
  //console.log("l0 from block scop: ", l0);
}

/**
 ** 3. const:
**  Scope:
*! const declarations are also block-scoped, similar to let.
** Re-declaration:
- const does not allow re-declaration of the same variable within the same block scope.
** Reassignment:
- const variables cannot be reassigned after their initial declaration.
*? However, if a const variable holds an object or array, the properties of that object or the elements of that array can still be modified, but the variable itself cannot be reassigned to a different object or array.
** Hoisting:
- Like let, const declarations are hoisted but are in a "temporal dead zone" until their declaration.
 */

//** Const Code example

const c0 = 0;
function constExample() {
  console.log(c0); //can access c0 as it is a global variable.
  const c1 = 1;
  c1 = 2; // re-assignment is not possible.
  console.log(c1);
}
//constExample()

const cArray = [1, 2, 3, 4, 5, 6, 7];
console.log(cArray);

//*! We will get TypeError here, we are assigning a new array to the const,(map returns a new array).
//** cArray = cArray.map(item => item%2==0 ? item+1 : item);
//console.log(cArray)

// we are modifying the value of array of a constant array. not re-assigning a new array
cArray.forEach((item, index) =>
  item % 2 === 0 ? (cArray[index] = item + 1) : item
);
console.log(cArray);
cArray.push(cArray.length + 1); // we also add new element.
console.log(cArray);

const cObj = {
  name: "ni7",
  age: 10,
};

console.log(cObj);

const keys = Object.keys(cObj).forEach((key) =>
  key === "age"
    ? cObj[key] >= 18
      ? (cObj["isAllowed"] = true)
      : (cObj["isAllowed"] = false)
    : key
);
console.log(cObj);
