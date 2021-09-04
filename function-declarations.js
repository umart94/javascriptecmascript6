function sayHello() {
    console.log('hello umar tariq');
}

sayHello();


let a = sayHello;
a();
a();
a();

//a now points to the sayHello function

function sayHello2(name) {
    console.log('hello '+name);
}

sayHello2('bob');
sayHello2('cat');
sayHello2('bunny');


function calculateTax(amount){
    let result = amount * 0.0825;
    return result;
}

let tax = calculateTax(100);
console.log(tax);