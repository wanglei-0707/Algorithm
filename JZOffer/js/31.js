// 动态规划
function FindGreatestSumOfSubArray(array)
{
    if(!array || array.length === 0){
      return null;
    }
    var dp = [], max;
    dp[0] = array[0];
    max = dp[0];
    for(var i=1,len=array.length;i<len;i++){
      dp[i] = dp[i-1] < 0 ? array[i] : dp[i-1] + array[i];
      max = Math.max(max, dp[i]);
    }
    return max;
}
FindGreatestSumOfSubArray([1,-2,3,10,-4,7,2,-5]);
