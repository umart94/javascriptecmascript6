let hi = () => { console.log('howdy');};

hi();


let hello = (name) => { console.log(` howdy ${name}`);};

hello('muhammad umar tariq');


let add = (a,b) => { return a+b;}

console.log(add(7,3));

let names = ['umar','bilal','sameer','rizwan'];



let i = 0;

names.map( (name) => { i++; console.log(`howdy ${name} ${i}`);} );


var transformed = names.map( (name) => {return `howdy ${name}` });
console.log(transformed);
