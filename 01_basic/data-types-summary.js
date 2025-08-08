// Primitive
//7 types: Number,BigInt,String Boolean, null, undefined, Symbol

// Reference (Non primitive). Memory address is directly accessible
// Array, Objects, Functions

/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */

//******************************* Stack and Heap memory in javascript******************//
//* 1. Stack memory
// every primitive datatype is stored in stack memory.
// it returns the value (copy) of the variable not the memory address.

//ex:
let myName = "Jannatun";
let myAnotherName = myName; // myAnotherName is a copy of myName. so anything changes to myName will not affect myAnotherName.

myAnotherName = "nime";

/* console.log(myName);
console.log(myAnotherName); */

//* 2. Heap memory
// every non-primitive datatype is stored in heap memory
// it returns the memory address of the original variable.

// ex:
let userOne = {
  email: "ni7@ni7.com",
  isActive: true,
};

let userTwo = userOne; // userTwo getting the memory address of userOne. So any changes to userTwo will affect userOne.

userTwo.isActive = false;

/* console.log(userOne);
console.log(userOne); */

/**
 ** Common Interview Questions

** What is the difference between null and undefined?
Answer: null is a primitive value that represents the absence of any object value, while undefined is a primitive value that represents an uninitialized variable or a property that has not been declared.

** How does JavaScript handle memory management?
Answer: JavaScript uses a garbage collector to automatically manage memory. When a variable is no longer referenced, the garbage collector frees up the memory.

** What is the difference between the stack and heap in JavaScript?
Answer: The stack stores primitive data types, while the heap stores non-primitive data types. Changes to variables in the stack do not affect other variables, while changes to variables in the heap can affect other variables that reference the same memory address.

** Can you explain the concept of pass-by-value and pass-by-reference in JavaScript?
Answer: In JavaScript, primitive data types are passed by value, while non-primitive data types are passed by reference. This means that changes to primitive data types do not affect the original variable, while changes to non-primitive data types can affect the original variable.

** How do you clone an object in JavaScript?
Answer: There are several ways to clone an object in JavaScript, including using the Object.assign() method, the spread operator ({...obj}), or a library like Lodash.
*/

// ex: for clone object (shallow and deep)

const userObj = {
  name: "Jannatun",
  age: 22,
  address: {
    city: [
      { city1: "Dhaka" },
      { city2: "Chittagong" },
      { city3: "Khulna" },
      { city4: "Rajshahi" },
      { city5: ["Barishal", "Sylhet", "Rangpur"] },
    ],
    country: "Bangladesh",
  },
};

// * Shallow copy 
// ! read here: https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

// const cloneUserObj = Object.assign({},userObj)
const cloneUserObj = { ...userObj };

/* console.log("original: ", userObj);
console.log("clone: ", cloneUserObj); */

/* output: for both Object.assign() and the spread operator: is same they both do a shallow copy.
original:  {
  name: 'Jannatun',
  age: 22,
  address: {
    city: [ [Object], [Object], [Object], [Object], [Object] ],
    country: 'Bangladesh'
  }
}
clone:  {
  name: 'Jannatun',
  age: 22,
  address: {
    city: [ [Object], [Object], [Object], [Object], [Object] ],
    country: 'Bangladesh'
  }
}
*/

//* Deep copy
// ! read here: https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy

const deepCloneUserObj = JSON.parse(JSON.stringify(userObj));
console.log("original: ", userObj);

console.log("deepClone: ", deepCloneUserObj);
