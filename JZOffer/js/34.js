function GetUglyNumber_Solution(index)
{
    if(!index){
        return {};
    }
    if(index <= 0){
        return 0;
    }
    var uglyArr = [1], index2 = 0, index3 = 0, index5 = 0, nextUglyIndex = 1;
    while(nextUglyIndex < index){
        var min = Math.min(uglyArr[index2] * 2, uglyArr[index3] * 3, uglyArr[index5] * 5);
        uglyArr[nextUglyIndex] = min;
        while(uglyArr[index2] * 2 <= uglyArr[nextUglyIndex]){
            index2++;
        }
        while(uglyArr[index3] * 3 <= uglyArr[nextUglyIndex]){
            index3++;
        }
        while(uglyArr[index5] * 5 <= uglyArr[nextUglyIndex]){
            index5++;
        }
        nextUglyIndex++;
    }
    return uglyArr[nextUglyIndex-1];
}
console.log(GetUglyNumber_Solution());
