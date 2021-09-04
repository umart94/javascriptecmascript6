let name = 'bob';
console.log(`${name}`);


function getReasonCount(){return 6;}

let interpolation = `give me ${(getReasonCount() ==1 ) ? 'one good reason' : 'a few good reasons'} to try this`;

console.log(interpolation);