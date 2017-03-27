// var line;
// while(line = read_line()){
//     var n = parseInt(line[0]);
//     var m = parseInt(line[1]);
//     var nArr = read_line().split(' ');
//     var mArr = [];
//     var k = m;
//     while(k>0){
//         mArr.push(parseInt(read_line()));
//         k--;
//     }
//     var retArr = aa(n,m,nArr,mArr);
//     for(i=0;i<retArr.length;i++){
//         print(retArr[i]);
//     }
// }
function aa(n,m,nArr,mArr){
    var retArr = [];
    var temp = [];
    for(var i=0;i<nArr.length;i++){
        nArr[i] = parseInt(nArr[i]);
    }
    nArr.sort(function(a, b){
        return a - b;
    });
    for(i=0;i<mArr.length;i++){
        var j = 0;
        var cur = mArr[i];
        while(nArr[j]<=cur){
            j++;
        }
        while(nArr[j] - nArr[j-1]==1){
            j++;
        }
        retArr.push(nArr[j-1]+1);
    }
    return retArr;
}
var tt = aa(5,6,['1','2','3','5','6'],[3,2,1,4,5,6]);
for(i=0;i<tt.length;i++){
    // print(retArr[i]);
    console.log(tt[i]);
}
