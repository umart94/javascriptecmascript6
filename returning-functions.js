// //dont do this


// var myVariable = ' i am at the global scope ';


// //dont do this
// var myFunction = function(){
//     console.log('me too');
// }

function one(){
    return 'one';
}

// let value = one();
// console.log(value);
// console.log(one());

let value = one;


console.log(typeof value);

//typeof value is function

console.log(value());


function two() {
    return function(){
        console.log('two');
    }
}

let myFunction = two();
myFunction();


function three() {
    return function(){
        return 'three';
    }
}

console.log(three()());