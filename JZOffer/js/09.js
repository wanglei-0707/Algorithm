/**
 * 递归的方法虽然简单直观，但是性能不好，很多重复的计算
 * 为了避免重复的计算，可以把已经得到的项保存起来，从下往上计算
 */
// 递归方法
function Fibonacci(n){
    if(n < 2){
        return n;
    }
    return Fibonacci(n-1) + Fibonacci(n-2);
}
// 非递归   O(n)
function Fibonacci(n)
{
    if(n < 2){
        return n;
    }
    var fibN = 0, fibNMinusOne = 1, fibNMinusTwo = 0;
    for(var i=2;i<=n;i++){
        fibN = fibNMinusOne + fibNMinusTwo;
        fibNMinusTwo = fibNMinusOne;
        fibNMinusOne = fibN;
    }
    return fibN;
}

/**
 * 青蛙跳台阶
 * 类似求斐波那契数列，不同点是n=0时返回1  O(n)
 */
function jumpFloor(number)
{
    if(number < 2){
        return number;
    }
    var fibN = 0, fibNMinusOne = 1, fibNMinusTwo = 1;
    for(var i=2;i<=number;i++){
        fibN = fibNMinusOne + fibNMinusTwo;
        fibNMinusTwo = fibNMinusOne;
        fibNMinusOne = fibN;
    }
    return fibN;
}
