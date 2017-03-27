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
        var ret = removeSame(n, arr);
        console.log(ret.join(' '));
    }
});


function removeSame(len, arr){
    var obj = {}, cur, i, ret = [];
    for(i=0;i<len;i++){
        cur = arr[i];
        obj[cur] = i;
    }
    for(i=0;i<len;i++){
        cur = arr[i];
        if(obj[cur] === i){
            ret.push(cur);
        }
    }
    return ret;
}
