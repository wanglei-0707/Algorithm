/**
 * @param {number} num
 * @return {number[]}
 */
//方法一 195ms
var countBits = function(num) {
    var ret = [0];
    for(var i=1;i<=num;i++){
        ret[i] = ret[i >> 1] + (i & 1);
    }
    return ret;
};

//方法二 178ms
var countBits = function(num) {
    var ret = [];
    for(var i=0;i<=num;i++){
        ret[i] = ret[i & (i - 1)] + 1;
    }
    return ret;
};
