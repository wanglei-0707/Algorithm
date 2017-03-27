var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var ans = 0;
var cur_line = 0;
var aa = [0, 2, 6, 14, 30];
var letter = ['A', 'B', 'C', 'D', 'E'];
var arr = [];
var ret = [];
rl.on('line', function(line){ // javascript每行数据的回调接口
    if(cur_line < 5){
        arr.push(line.trim());
    	cur_line++;
    }
    if(cur_line == 5){
        ret = fenlei(arr);
   		for(var i=0;i<ret.length;i++){
       		if(ret[i]){
                console.log(letter[i] + "：[" + ret[i].sort(bijiao).join('，')+']');
            }
        }
        cur_line = 0;
    }
 });
function bijiao(a, b){
    var aArr = a.split('.');
    var bArr = b.split('.');
    if(+aArr[0] != +bArr[0]){
        return +aArr[0] < +bArr[0] ? -1 : 1;
    }else if(+aArr[1] != +bArr[1]){
        return +aArr[1] < +bArr[1] ? -1 : 1;
    }
    else if(+aArr[2] != +bArr[2]){
        return +aArr[2] < +bArr[2] ? -1 : 1;
    }
    else if(+aArr[3] != +bArr[3]){
        return +aArr[3] < +bArr[3] ? -1 : 1;
    }
}

function fenlei(arr){
    var ret = [];
    for(var i =0;i<arr.length;i++){
        var cur = arr[i];
        var numbers = cur.split('.');
        var flag = false;
        for(var k=0;k<numbers.length;k++){
            if(+numbers[k]>255){
                flag = true;
                break;
            }
        }
        if(flag){
            continue;
        }
        var first = +cur.split('.')[0];
        var j = 0;
        while(j<aa.length){
            if((first>>(8-j-1)) == aa[j]){
                if(!ret[j]){
                    ret[j] = [];
                }
                ret[j].push(cur);
                break;
            }
            j++;
        }
    }
    return ret;
}
// arr = [
//     '80.1.1.1',
//     '90.1.1.1',
//     '180.1.1.1',
//     '190.1.1.1',
//     '200.1.1.1'
// ];
// ret = fenlei(arr);
// for(var i=0;i<ret.length;i++){
//     if(ret[i]){
//         console.log(letter[i] + "：[" + ret[i].sort(bijiao).join('，')+']');
//     }
// }
// cur_line = 0;
