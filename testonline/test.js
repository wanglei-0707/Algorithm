process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    // if(data == '\n') process.stdin.emit('end');
    // input += data;
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
    	var n = +(input_array[nLine++].trim());
        var arr = input_array[nLine++].trim().split(' ');
        //我的函数调用
        console.log(ret);
    }
});
