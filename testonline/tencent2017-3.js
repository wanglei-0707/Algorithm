process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    if(data == '\n') process.stdin.emit('end');
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;

    while(nLine < input_array.length){
    	var n = +input_array[nLine++].trim();
        if(n === ''){
    		continue;
    	}
        var arr = input_array[nLine++].trim().split(' ');
        var ret = aa(arr, n);
        console.log(ret.min + ' ' + ret.max);
    }
});
var a = aa(['45','45','12','32','5','6'], 6);
console.log(a.min, a.max);
var b = aa(['1','1'], 2);
console.log(b.min, b.max);
function aa(arr, n){
    if(arr.length < 2){
        return {
            min: 0,
            max: 0
        };
    }
    arr.forEach(function(item, index, array){
        array[index] = +item;
    });
    arr.sort(function(a, b){
        return a < b ? -1 : 1;
    });
    var i,j;
    var min=Number.MAX_VALUE, minnum=0, maxnum=0, diff;
    if(arr[0] === arr[n-1]){
        return {
            min: parseInt((n * (n - 1)) / 2),
            max: parseInt((n * (n - 1)) / 2)
        };
    }
    var obj = {};
    obj[arr[0]] = 1;
    for(i=1;i<n;i++){
        diff = arr[i] - arr[i-1];
        if(min > diff){
            min = diff;
        }
        if(obj[arr[i]]){
            obj[arr[i]]++;
        }else{
            obj[arr[i]] = 1;
        }
    }
    maxnum = obj[arr[0]] * obj[arr[n-1]];
    i = 1;
    if(min === 0){
        for(var key in obj){
            if(obj.hasOwnProperty(key)){
            	if(obj[key] > 1){
                	minnum += parseInt((obj[key] * (obj[key] - 1)) / 2);
            	}
            }
        }
        return {
            min: minnum,
            max: maxnum
        };
    }
    while(i<n){
        diff = arr[i] - arr[i-1];
        if(diff === min){
            minnum += obj[arr[i]] * obj[arr[i-1]];
        }
        i++;
    }
    return {
        min: minnum,
        max: maxnum
    };
}
