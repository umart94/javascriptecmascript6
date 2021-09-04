function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('suzuki','cultus',2019);
console.log(myCar);


function MyFunction(){
    console.log(' i am a simple function ');
}

let myfunction = new MyFunction();
console.log(typeof myfunction);