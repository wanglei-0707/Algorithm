var line;
var n = +(read_line().trim());
var inputArr = [];
while(n>0){
    line = read_line().split(' ');
    inputArr.push(line);
    n--;
}
function a(n, inputArr){
    var ret=0, cur;
    for(var i=0;i<n;i++){
        cur = inputArr[i];
        ret += (+cur[0]) * ((+cur[1])/100);
    }
    console.log(ret.toFixed(3));
    // print(ret.toFixed(3));
}
a(3, [['0','50'],['1','20'],['2','30']]);

while(line = read_line()){
    n = line;
    while(n>0){
        line = read_line().split(' ');
        inputArr.push(line);
        n--;
    }
    print(getX(n, inputArr));
}
