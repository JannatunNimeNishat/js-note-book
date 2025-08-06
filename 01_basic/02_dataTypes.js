//*Primitive data types */
//1. number => 2 to power 53
//2. bigint => numbers greater than 2 to power 53
//3. string => ""
//4. boolean => true/false
//5. null => standalone value
//6. undefined
//7. symbol

console.log(typeof null); // null type is object
console.log(typeof undefined); // undefined type is undefined

/**5.
 ** null
 - `null` indicates the deliberate absence of any object value. It's a primitive value that denotes the absence of a value or serves as a placeholder for an object that isn't present.
 - null is a falsy value.
 - It represents the intentional absence of an object value.
 */
//ex:
let n = null;
if (n) {
  console.log("Not Null"); // This won't execute. null is falsy value.
} else {
  console.log("Null"); // Output: null
}

/** 6.
 ** undefined
 A variable that has been declared but not initialized with a value is automatically assigned the undefined value. It means the variable exists, but it has no value assigned to it.
 * 
 */
//ex:
let a;
console.log(a); // undefined




/** 
** null vs undefined
undefined indicates the absence of a value, while null indicates the absence of an object (which could also make up an excuse for typeof null === "object"). The language usually defaults to undefined when something is devoid of a value:
*/
