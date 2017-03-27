
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
    	var arr = input_array[nLine++].trim().split(' ');
        var ret = getNum(arr);
        console.log(ret);
    }
});
function getNum(arr){
    if(!arr || arr.length < 4){
        return 0;
    }
    for(var i=0;i<arr.length;i++){
        arr[i] = +arr[i];
    }
    var w = arr[0], x = arr[1], y = arr[2], z = arr[3], retArr = [], cur;
    if(w<1 || x<1 || y<1 || z<1 || x>100 || z>100 || w>x || y>z){
        return 0;
    }
    for(var p=w;p<=x;p++){
        for(var q=y;q<=z;q++){
            cur = p/q;
            if(retArr.indexOf(cur) === -1){
                retArr.push(cur);
            }
        }
    }
    return retArr.length;
}
