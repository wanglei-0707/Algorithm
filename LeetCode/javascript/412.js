/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var ret = [], r1, r2;
    for(var i=1;i<=n;i++){
        r1 = i % 3;
        r2 = i % 5;
        if(r1 !== 0 && r2 !== 0){
            ret.push(i+'');
        }else if(r1 === 0 && r2 === 0){
            ret.push("FizzBuzz");
        }else if(r1 !== 0){
            ret.push("Buzz");
        }else{
            ret.push("Fizz");
        }
    }
};
