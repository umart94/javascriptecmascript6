class Car {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }


    print(){
        console.log(`${this.make}  ${this.model}   ${this.year}`);
    }

}


let mycar = new Car('bmw','745li',2010);
console.log(mycar.make);
console.log(mycar.model);
console.log(mycar.year);

mycar.print();


class SportsCar extends Car{
    revEngine(){
        console.log('vroom goes the' + this.model);
    }
}


let mysportscar = new SportsCar('lamborghini','gallardo',2019);
mysportscar.print();
mysportscar.revEngine();

// mycar.revEngine();//cant access