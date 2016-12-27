/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 //102ms
var hammingDistance = function(x, y) {
    var ret = x ^ y;
    var count = 0;
    while(ret > 0){
        if(ret & 1 === 1){
            count += 1;
        }
        ret = ret >>> 1;
    }
    return count;
};
