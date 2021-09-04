let a=5;
if(a==1){
console.log('1');
} else if (a>1) {
console.log('a is greater than 1');
} else if (a<1){
 console.log('a is less than 1');

}
else {
    console.log('a is not 1');
}

let hero = 'superman';
switch(hero.toLowerCase()){
    case 'superman':
        console.log('strength');
        console.log('vision');
        break;
        case 'batman':
            console.log('intelligence');
            console.log('fighting skills');
            break;
            default :
            console.log('member of jla');
}



//ternary operator
let c = 1, b = '1';

let result = (c===b) ? 'equal': 'inequal';
console.log(result); 