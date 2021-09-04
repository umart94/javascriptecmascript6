let today = new Date();

let umar = new Date('May 29, 1994 4:00:00');
// let bob = new Date('1994-05-29T04:00:00');
// let bob = new Date(1994,5,29);

var elapsedTime = today - umar;
console.log(elapsedTime);
console.log(umar.getDate());
console.log(umar.getTime());