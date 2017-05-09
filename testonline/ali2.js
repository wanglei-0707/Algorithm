function convertDecimalToBinary(dec){
    var num = dec;
    var remains = [];
    while(+num){
        str = '';
        var remain = 0;
        for(var i=0;i<num.length;i++){
            var cur = remain === 0 ? +num[i] : (remain * 10 + (+num[i]));
            var quotient = Math.floor(cur / 2);
            remain = cur % 2;
            str += quotient;
        }
        remains.unshift(remain);
        num = str;
    }
    return remains.join('');
}
convert('102030102123412343');
