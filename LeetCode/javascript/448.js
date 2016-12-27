/**
 * @param {number[]} nums
 * @return {number[]}
 */
//都无比慢啊。。。。。。

 //228ms
 var findDisappearedNumbers = function(nums) {
     var ret = [];
     for(var i=0,len=nums.length;i<len;i++){
         var index = Math.abs(nums[i]) - 1;
         if(nums[index] > 0){
             nums[index] = -nums[index];
         }
     }
     nums.forEach(function(item, index){
         if(item > 0){
             ret.push(index + 1);
         }
     });
     return ret;
 };

//326ms
var findDisappearedNumbers = function(nums) {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    nums = nums.sort(function(a, b){
        return a - b;
    });
    var n = nums.length, prev = 0, ret = [];
    for(var i=0;i<n;i++){
        if(nums[i] - prev <= 1){
            prev = nums[i];
            continue;
        }else{
            while(prev < (nums[i] - 1)){
                prev += 1;
                ret.push(prev);
            }
            prev = nums[i];
        }
    }
    var cur = nums[i-1];
    while(cur < n){
        cur += 1;
        ret.push(cur);
    }
    return ret;
};
