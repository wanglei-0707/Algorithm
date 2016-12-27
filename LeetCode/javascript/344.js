/**
 * @param {string} s
 * @return {string}
 */

 //156ms
var reverseString = function(s) {
    return s.split('').reverse().join('');
};

//这种方法好慢。。。  262ms
var reverseString = function(s){
    var ret = "";
    for(var i=s.length-1;i>=0;i--){
        ret += s[i];
    }
    return ret;
};

// 135ms
var reverseString = function(s){
    s = s.split('');
    var temp, low = 0, high = s.length-1;
    while(low<high){
        temp = s[low];
        s[low] = s[high];
        s[high] = temp;
        low++;
        high--;
    }
    return s.join('');
};
