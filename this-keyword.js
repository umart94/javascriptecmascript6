// var car = {
//     make: 'suzuki',
//     model: 'cultus',
//     year: 2019,
//     getPrice : function(){
//         return 5000;
//     },
//     printDescription: function(){
//         console.log(this.make + ' '+ this.model);
//     }

// };

// car.printDescription();


// function first(){
//     return this;
// }

// console.log(first() === global);


function second(){
    'use strict';

    return this;
}

console.log(second() === global);
console.log(second() === undefined);


let myObject = { value : 'my object'};

//value is set on the global object
global.value = 'global object';

function third(name){
    return this.value + name;
}

console.log(third());

console.log(third.call(myObject,'bob'));
console.log(third.apply(myObject,['bob']));


function fifth(){
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName:'bob',
    lastName:'tabor',
    print: fifth
}

let customer2 = {
    firstName:'richard',
    lastName:'bouhgton',
    print: fifth
}

customer1.print();
customer2.print();