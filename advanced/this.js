// console.log(this);

/**
 * Logs the value of this
 *
 * The value of this depends on how the function is called.
 *
 * 1. If the function is called as a regular function (not a method of an object),
 *    then this will be the global object (window in a browser, or global in node.js)
 * 2. If the function is called as a method of an object, then this will be the
 *    object that the function is a method of
 * 3. If the function is called using call() or apply(), then this can be set
 *    to any value
 * 4. If the function is called using bind(), then this can be set to any value.
 *    The value of this will be the same for all calls to the function
 */
function thisInsideFunction() {
  console.log(this);
}
// thisInsideFunction();

/**
 * Logs the value of `this`
 *
 * In an arrow function, the value of `this` is lexically inherited from the
 * surrounding scope at the time the arrow function is defined. It does not
 * have its own `this` context, unlike regular functions.
 */

const arrowFunction = () => {
  console.log(this);
};
// arrowFunction();

const obj = {
  name: "Jannatun Nime",
  dob: 1998,
  getDetails: function (currentYear,address) {
    console.log(`${this.name}, your age is: ${currentYear - this.dob}, you live in ${address}`);
  },
};

obj.getDetails(2025,'dhaka');

const newUser = {
    name:'ni7',
    dob:1996
}

obj.getDetails.call(newUser,2025,'dhaka');
obj.getDetails.apply(newUser,[2025,'Rajshahi']);
const getUserNameAgeAndAddress = obj.getDetails.bind(newUser,2025,'Bogura');
 getUserNameAgeAndAddress();




/** 

**Method Invocation and Binding**
=====================================

In JavaScript, methods can be invoked on objects using the dot notation or bracket notation. However, when a method is invoked on an object, the `this` keyword inside the method refers to the object on which the method was invoked.

**Invoking a Method on an Object**
---------------------------------

```javascript
const obj = {
  name: "Jannatun Nime",
  dob: 1998,
  getDetails: function (currentYear, address) {
    console.log(`${this.name}, your age is: ${currentYear - this.dob}, you live in ${address}`);
  },
};

obj.getDetails(2025, 'dhaka');
```

In this example, the `getDetails` method is invoked on the `obj` object using the dot notation. The `this` keyword inside the `getDetails` method refers to the `obj` object.

**Invoking a Method on a Different Object using `call()`**
---------------------------------------------------------

```javascript
const newUser = {
  name: 'ni7',
  dob: 1996
}

obj.getDetails.call(newUser, 2025, 'dhaka');
```

In this example, the `getDetails` method is invoked on the `newUser` object using the `call()` method. The `call()` method sets the `this` keyword inside the `getDetails` method to the `newUser` object.

**Invoking a Method on a Different Object using `apply()`**
---------------------------------------------------------

```javascript
obj.getDetails.apply(newUser, [2025, 'Rajshahi']);
```

In this example, the `getDetails` method is invoked on the `newUser` object using the `apply()` method. The `apply()` method sets the `this` keyword inside the `getDetails` method to the `newUser` object.

**Binding a Method to an Object using `bind()`**
-------------------------------------------------

```javascript
const getUserNameAgeAndAddress = obj.getDetails.bind(newUser, 2025, 'Bogura');
getUserNameAgeAndAddress();
```

In this example, the `getDetails` method is bound to the `newUser` object using the `bind()` method. The `bind()` method returns a new function that has the `this` keyword set to the `newUser` object. The new function can be invoked without specifying the `this` keyword.

**Method Invocation and Binding Summary**
------------------------------------------

| Method | Description | Example |
| --- | --- | --- |
| `call()` | Invokes a method on a different object | `obj.getDetails.call(newUser, 2025, 'dhaka')` |
| `apply()` | Invokes a method on a different object with an array of arguments | `obj.getDetails.apply(newUser, [2025, 'Rajshahi'])` |
| `bind()` | Binds a method to an object and returns a new function | `const getUserNameAgeAndAddress = obj.getDetails.bind(newUser, 2025, 'Bogura')` |

Note: The `call()` and `apply()` methods invoke the method immediately, while the `bind()` method returns a new function that can be invoked later.

*/
