var line;
while(line=read_line()){
    var n = parseInt(line.split(' ')[0]);
    var m = parseInt(line.split(' ')[1]);
    var arr = read_line();
    for(var i=0;i<m;i++){
        arr[i] = parseInt(arr[i]);
    }
    var ret = getPrice(n, m, arr);
    print(ret);
}
function getPrice(n, m, arr){
    arr.sort(function(a, b){
        return a - b;
    });
    var max = 0, ret = 0;
    for(var i = 0;i<m;i++){
        var cur = arr[i];
        var sum = cur * Math.min(n, m - i);
        if(sum > max){
            sum = max;
            ret = cur;
        }
    }
    // var last = n < m ? m-n : 0;
    // for(var i=m-1;i>=0;i--){
    //     var cur = arr[i];
    //     var sum = cur * Math.min(n, (m - i));
    //     if(sum >= max){
    //         max = sum;
    //         ret = cur;
    //     }
    // }
    return ret;
}
var ret = getPrice(5, 4, [2,8,10,7]);
console.log(ret);
