process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
     //if(data == '\n') process.stdin.emit('end');
     //input += data;
    if(data.length == 2) process.stdin.emit('end');
    else input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;
    while(nLine < input_array.length){
        if(input_array[nLine] === ''){
            nLine++;
            continue;
        }
    	var str = input_array[nLine++].trim();
        var ret = getRes(str);
        //我的函数调用
        console.log(ret);
    }
});

function getRes(str){
    if(!str){
        return 0;
    }
    var ret;
    var num1 = 0, num2 = 0, i = 0, operator, len = str.length;
    while(i<len && (str[i] !== '-' && str[i] !== '+' && str[i] !== '*')){
        num1 = num1 * 10 + (+str[i]);
        i++;
    }
    while(i<len){
        operator = str[i];
        i++;
        num2 = 0;
        while(i<len && (str[i] !== '-' && str[i] !== '+' && str[i] !== '*')){
            num2 = num2 * 10 + (+str[i]);
            i++;
        }
        num1 = operate(num1, num2, operator);
    }
    return num1;
}
function operate(num1,num2, operator){
    if(operator === '+'){
        return num1 + num2;
    }else if(operator === '-'){
        return num1 - num2;
    }else if(operator === '*'){
        return num1 * num2;
    }
}
