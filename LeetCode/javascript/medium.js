//53 Maximum Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var dp = [];
    dp[0] = nums[0];
    var max = dp[0];
    for(var i=1;i<nums.length;i++){
        dp[i] = dp[i-1] < 0 ? nums[i] : dp[i-1] + nums[i];
        max = Math.max(max,dp[i]);
    }
    return max;
};

//62 Unique Paths
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var dp = [];
    for(var i=0;i<m;i++){
        dp[i] = [];
        dp[i][0] = 1;
    }
    for(i=1;i<n;i++){
        dp[0][i] = 1;
    }
    for(i=1;i<m;i++){
        for(var j=1;j<n;j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};

//300 Longest Increasing Subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var len = nums.length;
    if(len === 0){
        return 0;
    }
    var dp = [];
    for(var i=0;i<len;i++){
        dp[i] = 1;
    }
    var max = 0;
    for(i=0;i<len;i++){
        for(var j=0;j<i;j++){
            if(nums[i]>nums[j]){
                dp[i] = Math.max(dp[i],dp[j]+1);
            }
        }
        max = Math.max(max,dp[i]);
    }
    return max;
};
