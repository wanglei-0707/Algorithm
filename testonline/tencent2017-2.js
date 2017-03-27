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
function aa(str){
    var count = 0, i=0, j=0, temp;
    var arr = str.split('');
    var len = arr.length;
    for(i=0;i<arr.length;i++){
        if(arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 91){
            count++;
        }
    }
    while(count>0){
        for(i=0;i<len;){
            if(arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 91){
                j = i++;
                temp = arr[j];
                while(i<len && arr[i].charCodeAt(0) >= 97){
                    arr[j++] = arr[i++];
                }
                if(i<=len){
                    arr[j] = temp;
                }
            } else {
                i++;
            }
        }
        count--;
    }
    console.log(arr.join(''));
}
aa('tcswktLBAblojzStfjEqRaouXYcROiTfzSkSJVBgcFPIfAGQFXNkIyDjTAfRLbSAyySoXZjriJAPflCrKxPeqYJuGMmcSUrXsAAjlJmebkabJRogxHUrFXDzeJxdNyCrXHfezYJchHySQMmfTwuaCdlCAtgMDcgoLGQfjmmxbdlKrOPJQfIngOnscJxzrIWuaXToxZdZsLdhQSanyCqbSXtGQfrblWeQHMiMmFDNfIaxHrtTulOfjjSrRLnNouQOMhWsjUTOjYlvvfJqNBBNSHThiKPLhLnFaPJCleLNJtjVhAcnfFEHOwceZf');
