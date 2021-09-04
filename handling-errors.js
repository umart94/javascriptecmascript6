let a = 7 * undefined / "panama";
console.log(a);



function AfterTryCatch(){
    try{
    let obj = undefined;
    console.log(obj.b);
    console.log('if previous line of code throws an exception you\'ll never see this');
}catch(error){
    console.log(error.message);
}
}

AfterTryCatch();


console.log('my program is still running');


function performCalculation(obj){

    if(!obj.hasOwnProperty('b')){
        throw new Error('object missing property');
    }

    return 6;
}


function performHigherLevelOperation(){
    let obj = {};
    let value = 0;
    try{
        value = performCalculation(obj);
    }catch(error){
        console.log(error.message);
    }

    if(value == 0){

    }
}

performHigherLevelOperation();