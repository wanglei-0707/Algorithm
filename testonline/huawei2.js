process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;

    while(nLine < input_array.length){
    	var line = input_array[nLine++].trim();
    	if(line === ''){
    		continue;
    	}
        var input = line.trim();
        var ret = convert(input);
        console.log(ret);
    }
});

function convert(input){
    var ret = 0;
    for(var i=input.length-1,j=0;i>=0;i--,j++){
        ret += (+input[i]) * Math.pow(7, j);
    }
    return ret;
}
console.log(convert('21'));
