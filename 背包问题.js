/**
 * 0-1背包问题，假定背包的最大容量为total，有n个物品，每个物品都有自己的价值和重量，将物品放入背包中使得背包中物品的价值最大
 * dp状态表示前item个物品放进最大容量为weight的背包中的最大价值
 * @param {number} n 表示物品的个数
 * @param {array} valueArr 表示物品的价值的数组
 * @param {array} weightArr 表示物品的重量的数组
 * @param {number} total 表示背包的最大容量
 */
function getMaxValue(n, valueArr, weightArr, total){
    var dp = [];
    //初始化
    dp[0] = [];
    for(var i=0;i<=total;i++){
        dp[0][i] = 0;
    }
    for(i=1;i<=n;i++){
        dp[i] = [0];
    }
    for(var item=1;item<=n;item++){
        for(var weight=1;weight<=total;weight++){
            if(weight>=weightArr[item-1]){
                dp[item][weight] = Math.max(dp[item-1][weight-weightArr[item-1]] + valueArr[item-1], dp[item-1][weight]);
            }else{
                dp[item][weight] = dp[item-1][weight];
            }
        }
    }
    return dp[n][total];
}
