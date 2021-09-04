console.log("The 7 falsy values")
0 ? console.log("truthy") : console.log("falsy") // falsy
0n ? console.log("truthy") : console.log("falsy") // falsy
null ? console.log("truthy") : console.log("falsy") // falsy
undefined ? console.log("truthy") : console.log("falsy") // falsy
false ? console.log("truthy") : console.log("falsy") // falsy
NaN ? console.log("truthy") : console.log("falsy") // falsy
"" ? console.log("truthy") : console.log("falsy") // falsy

console.log("Some examples of truthy values")
37 ? console.log("truthy") : console.log("falsy") // truthy
37n ? console.log("truthy") : console.log("falsy") // truthy
true ? console.log("truthy") : console.log("falsy") // truthy
"😂" ? console.log("truthy") : console.log("falsy") // truthy
let empty = []
empty ? console.log("truthy") : console.log("falsy") // truthy
empty = {}
empty ? console.log("truthy") : console.log("falsy") // truthy

// Comparisons of falsy values with ==
console.log("The number 0")
console.log(0==0) // true
console.log(0==0n) // true
console.log(0==null) // false
console.log(0==undefined) // false
console.log(0==false) // true
console.log(0==NaN) // false
console.log(0=="") // true

console.log("The BigInt 0n")
console.log(0n==0n) // true
console.log(0n==null) // false
console.log(0n==undefined) // false
console.log(0n==false) // true
console.log(0n==NaN) // false
console.log(0n=="") // true

console.log("The value null")
console.log(null==null) // true
console.log(null==undefined) // true
console.log(null==false) // false
console.log(null==NaN) // false
console.log(null=="") // false

console.log("The value undefined")
console.log(undefined==undefined) // true
console.log(undefined==false) // false
console.log(undefined==NaN) // false
console.log(undefined=="") // false

console.log("The boolean false")
console.log(false==false) // true
console.log(false==NaN) // false
console.log(false=="") // true

console.log("The number NaN")
console.log(NaN==NaN) // false
console.log(NaN=="") // false

console.log(`The empty string ""`)
console.log(""=="") // true


/*
There are 7 primitive data types in Javascript (as of 2018).
Each one can be converted into a truthy/falsey value depending
of the value it's assigned:
toBoolean conversion
Credit: Sam Bennett
https://www.youtube.com/watch?v=6hESXoxDtgo
==========================================================================================================
||  Argument Type ||    Result                                                                          ||
==========================================================================================================
||  Undefined    ||  Returns false                                                                      ||
||  Null         ||  Returns false                                                                      ||
||  Boolean      ||  Returns argument                                                                   ||
||  Number       ||  Returns false if argument is +0, -0 or NaN, otherwise, returns true                ||
||  String       ||  Returns false if argument is the empty String (length = 0), otherwise returns true ||
||  Symbol       ||  Returns true                                                                       ||
||  Object       ||  Returns true                                                                       ||
==========================================================================================================
*/

const undefinedValue = undefined;
const nullValue = null;
const myNumberZero = 0;
const myNumberOne = 1;
const myStringEmpty = '';
const myString = 'Hello world!';
const myObject = {};
const mySymbol = Symbol();

if (undefinedValue) {
  console.log('this is never gonna happen!!');
} else {
  console.log('[🚫 ] - Undefined is evaluated as falsey');
}

if (nullValue) {
  console.log('this is never gonna happen!!');
} else {
  console.log('[🚫 ] - Null is evaluated as falsey');
}

if (myNumberZero) { // 0
  console.log('this is never gonna happen!!');
} else {
  console.log('[🚫 ] - A number (+0 or -0) or NaN is evaluated as falsey');
}

if (myNumberOne) { // 1
  console.log('[✅ ] - A number (not +0 nor -0) nor NaN is evaluated as truthy');
} else {
  console.log('this is never gonna happen!!');
}

if (myStringEmpty) {
  console.log('this is never gonna happen');
} else {
 console.log('[🚫 ] - An empty String is evaluated as falsey'); 
}

if (myString) {
  console.log('[✅ ] - A non empty String is evaluated as truthy'); 
} else {
 console.log('this is never gonna happen');
}

if (myObject) {
  console.log('[✅ ] - An object is evaluated as truthy'); 
} else {
 console.log('this is never gonna happen'); 
}

if (mySymbol) {
  console.log('[✅ ] - A symbol is evaluated as truthy'); 
} else {
 console.log('this is never gonna happen'); 
}

console.log('===========================');
console.log('Let the fun stuff begin! 😬');
console.log('===========================');

if ('Alan' || null) {
  console.log(`[✅ ] - 'Alan' || null is truthy`);
}

if ('' || null) {
  console.log('this is never gonna happen!!');
} else {
  console.log(`[🚫 ] - '' || null is falsey`);
}

if ('true' && 'false') {
  console.log(`[✅ ] - 'true' && 'false' is truthy`);
} else {
  console.log('this is never gonna happen!!');
}

if ('true' || false) {
  console.log(`[🚫 ] - 'true' || false is falsey`);
} else {
  console.log('this is never gonna happen!!');
}

if ('false' || {}) {
  console.log(`[✅ ] - 'false' || {} is truthy`);
} else {
  console.log('this is never gonna happen!!');
}

if (true && {}) {
  console.log(`[✅ ] - true && {} is truthy`);
} else {
  console.log('this is never gonna happen!!');
}