let car = {
    make: 'suzuki',
    model: 'cultus',
    year: 2019,
    getPrice : function(){
        return 5000;
    },
    printDescription: function(){
        console.log(this.make + ' '+ this.model);
    }

};

car.printDescription();
console.log(car.year);
console.log(car.getPrice());

//console.log(car['model']);
//console.log(car[1]);


var anotherCar = {};
anotherCar.whatever = 'bob';
console.log(anotherCar.whatever);



var anobject = {
    myProperty : { b : 'hi'}
};

console.log(anobject.myProperty.b);


var c = {
    myProperty : [
        {d: 'this'},
        {e: 'can'},
        {f: 'get'},
        {g: 'crazy'}
    ]
};

console.log(c.myProperty);

let carLot = [
    {year : 2017, make: 'toyota', model: 'corolla'},
    {year : 2021, make: 'honda', model: 'civic'},
    {year : 2019, make: 'mitsubishi', model: 'lancer'}
]