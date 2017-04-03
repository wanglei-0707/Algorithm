// var line;
// while(line=read_line()){
//     var n = parseInt(line);
//     var i = n;
//     var arr = [];
//     while(i>0){
//         var input = read_line().split(' ');
//         for(var j=0;j<3;j++){
//             input[j] = parseInt(input[j]);
//         }
//         arr.push(input);
//         i--;
//     }
//     var ret = getScore(n, arr);
//     print(ret);
// }
function getScore(n, arr){
    var obj = {}, cur, m, ans, res, sum = 0;
    for(var i=0;i<n;i++){
         cur = arr[i];
         m = cur[0];
         ans = cur[1];
         res = cur[2];
         if(ans === 0){
             continue;
         }
         if(ans === 1 && res === 1){
             sum += 30;
             obj[m] = 1;
             continue;
         }
         if(ans === 1 && res === 0){
             if(obj[m] == 1){
                 sum += 5;
                 continue;
             }else{
                 sum += 10;
                 obj[m] = 1;
             }
         }
     }
    return sum;
}
var ret = getScore(5, [[12,1,0],[15,0,0],[12,1,1],[12,1,0],[16,1,0]]);
console.log(ret);
