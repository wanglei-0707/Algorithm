var line;
while(line=read_line()){
    var n = parseInt(line.split(' ')[0]);
    var k = parseInt(line.split(' ')[1]);
    var ret = getMax(n, k);
    print(ret);
}
function getMax(n, k){
    if(n % (2 * k + 1) >= k){
        return Math.floor(n / (2 * k + 1)) * 2 + 1;
    }else{
        return Math.floor(n / (2 * k + 1)) * 2;
    }
}
