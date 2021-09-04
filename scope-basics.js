let a = 'first';

function scopeTest(){
    console.log(a);

    a = 'changed';


    //let b = 'second';

    if(a != ''){
        console.log(a);

        let c = 'third';
    }

    //console.log(c);
}

scopeTest();
//console.log(b);//b is not defined

console.log(a);