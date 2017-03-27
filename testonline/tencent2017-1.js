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
        var ret = aa(line);
        console.log(ret);
    }
});
aa(['45','45','12','32','5','6'], 6);
aa(['1','1'], 2);
function aa(str){
    var dp = [];
    for(var i=0;i<str.length;i++){
        for(var j=0;j<str.length;j++){

        }
    }
}
