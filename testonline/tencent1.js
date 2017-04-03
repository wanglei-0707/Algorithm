//没写完
function getNum(n){
    var dp = [];
    var i, j;
    for(i=0;i<n;i++){
        dp[i] = [];
        for(j=0;j<n;j++){
            dp[i][j] = 0;
        }
    }
    console.log(dp);
    for(i=2;i<n;i++){
        for(j=i-1;j>1;j--){
            var sum = 0;
            var last = Math.min(i-j, j);
            var k = 0;
            while(k<=last){
                sum += dp[i-j][k++];
            }
            dp[i][j] = sum;
        }

    }
    console.log(dp);
    var ans = 0;
    for(i=0,len=dp[n-1].length;i<len;i++){
        ans += dp[n-1][i];
        if((n % i) === 0){
            ans--;
        }
    }
    return ans;
}
var ret = getNum(6);
console.log('return::'+ret);
