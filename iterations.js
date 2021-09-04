for(let i=0;i<10;i++){
    console.log(i);
}

let a = [ 4 , 8 , 15 , 16 , 23 , 42];

for(i=0;i<a.length;i++){
    console.log(a[i]);
}

let counter = 1;
while(counter < 10){
    console.log(counter++);
    if(counter==7){
        break;
    }
}