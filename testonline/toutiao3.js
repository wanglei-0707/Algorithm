var line, n, q;
var aArr = [];
var bArr = [];
var qArr = []
while(line = read_line()){
    n = parseInt(line.split(' ')[0]);
    q = parseInt(line.split(' ')[1]);
    line = read_line();
    aArr = line.split(' ');
    var i;
    for(i=0;i<n;i++){
        aArr[i] = +aArr[i];
    }
    line = read_line();
    bArr = line.split(' ');
    for(i=0;i<n;i++){
        bArr[i] = +bArr[i];
    }
    i = q;
    while(i>0){
        line = read_line();
        qArr.push([+line.split(' ')[0], +line.split(' ')[1]]);
        i--;
    }
    var ret = getNum(n, q, aArr, bArr, qArr);
    for(i=0;i<q;i++){
        print(ret[i]);
    }
}

function getNum(n, q, aArr, bArr, qArr){
    var ret = [], x, y, count = 0;
    for(var i=0;i<q;i++){
        x = qArr[i][0];
        y = qArr[i][1];
        count = 0;
        for(var j=0;j<n;j++){
            if(aArr[j] >= x && bArr[j] >= y){
                count++;
            }
        }
        ret.push(count);
    }
    return ret;
}
var ret = getNum(3,2,[3,2,4],[6,5,8],[[1,2],[4,8]]);
for(var i=0;i<2;i++){
    console.log('#####');
    // print(ret[i]);
    console.log(ret[i]);
}
