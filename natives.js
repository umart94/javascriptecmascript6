let pattern = /xyz/;
let value = 'this is xyz a test';

console.log(pattern.test(value));

console.log(value.replace(pattern,'just'));


let myString = new String('hello umar');
console.log(myString.toString());
console.log(typeof myString);


let myPrimitive = 'this is a string';
console.log(typeof myPrimitive);
myPrimitive = myPrimitive.toLowerCase();
console.log(typeof myPrimitive);


let myNumber = new Number(10);
console.log(typeof myNumber);
let myPrimitiveNumber = myNumber.valueOf();
console.log(typeof myPrimitiveNumber);
console.log(myPrimitiveNumber);