let first = 'this is a sentence';
let second = 'this is another sentence';
let third = '4,8,15,16,23,42';

console.log('umar tariq'.toUpperCase());

let mysplit = third.split(',');
console.log(mysplit);


let myslice = first.slice(0,4);
console.log(myslice);

let mysubstring = first.substr(4,7);
console.log(mysubstring);


let endswith = second.endsWith('sentence');
console.log(endswith);

let myinclude = second.includes('another');
console.log(myinclude);

let myrepeat = 'hahaha'.repeat(3);
console.log(myrepeat);


let mytrim = '      bloated     ';
console.log(mytrim.length);
console.log(mytrim.trim().length);