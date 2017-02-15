/**
 * 方法一是移动n，方法二是移动1，移动次数是整数二进制的位数，32位整数移动32次。
 * 方法三：n和n-1做位与运算之后，相当于把n的最后一个1变为0, 整数有几个1就执行几次
 */
 // 方法一
function NumberOf1(n)
{
    if(n === 0){
        return 0;
    }
    var count = 0;
    while(n){
        if(n & 1){
            count ++;
        }
        n = n >>> 1;
    }
    return count;
}
 // 方法二
 function NumberOf1(n)
 {
     if(n === 0){
         return 0;
     }
     var count = 0, flag = 1;
     while(flag){
         if(n & flag){
             count ++;
         }
         flag = flag << 1;
     }
     return count;
 }
 //方法三
 function NumberOf1(n){
     var count = 0;
     while(n){
         count++;
         n = n & (n - 1);
     }
     return count;
 }
