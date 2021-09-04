let a = [4,8,15,16,23,42];

let b = ['david','eddie','alex','michael'];

console.log(a[0]);
console.log(a[1]);
console.log(a);

a[0] = 7;
console.log(a[0]);
console.log(typeof a);


//array with different data types

let c = [4,'alex',true];
console.log(c);
console.log(c[3]);
console.log(c.length);


//this is not safe
//a[10] = 77;
//console.log(a);
//console.log(a.length);



//pushing is safe at the end of array

a.push(77);
console.log(a);
a.pop();
a.pop();
console.log(a);