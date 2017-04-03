// var line;
// while(line=read_line()){
//     var n = parseInt(line);
//     var i = n;
//     var arr = [];
//     while(i>0){
//         var input = read_line().split(' ');
//         for(var j=0;j<input.length;j++){
//             input[j] = parseInt(input[j]);
//         }
//         arr.push(input);
//         i--;
//     }
//     var ret = getSequence(n, arr);
//     for(i=0;i<n;i++){
//         print(ret[0]);
//     }
// }
function getSequence(n, arr){
    var ret = [], temp = [];
    var min, sum, avg, cur;
    for(var i=0;i<n;i++){
        sum = 0;
        avg = 0;
        min = 6;
        for(var j=0;j<5;j++){
            cur = arr[i][j];
            sum += cur;
            if(min > cur){
                min = cur;
            }
        }
        avg = sum / 5;
        temp[i] = [i, min, avg];
    }
    temp.sort(function(a, b){
        if(a[1] < b[1]){
            return 1;
        }else if(a[1] > b[1]){
            return -1;
        }else if(a[2] < b[2]){
            return 1;
        }else if(a[2] > b[2]){
            return -1;
        }else if(a[0] < b[0]){
            return -1;
        }else if(a[0] > b[0]){
            return 1;
        }
    });
    return temp;
}
var ret = getSequence(5, [[4,4,5,3,4],[3,3,3,3,3],[5,4,4,3,5],[5,5,5,5,5],[5,2,4,3,4]]);
for(var k = 0;k<5;k++){
    console.log(ret[k][0]);
}
