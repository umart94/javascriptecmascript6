let originalcar = {
    make: 'bmw',
    model: '745li',
    year: 2010
}

let newCar = Object.create(originalcar);

console.log(newCar.make);
newCar.make = 'audi';
console.log(newCar.make);
console.log(newCar.whatever);
console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

originalcar.doors = 4;
console.log(newCar.doors);


console.log(originalcar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));