var counter = (function () {

    let count = 0;
    //return an object
    function print(message){
        console.log(message + ' ---- '+ count);
    }

    return {
        //value: count,
        get: function() {return count;},
        set: function(value) { count = value;},
        increment : function(){
            count +=1;
            print('after increment ');
        },
        reset : function(){
            print('before reset');
            count = 0;
            print('after reset');
        }
    }
})();


// console.log(counter.value);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.value);
// counter.reset();
// console.log(counter.value);

counter.set(7);
console.log(counter.get());
counter.reset();