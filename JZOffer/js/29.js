function MoreThanHalfNum_Solution(numbers)
{
    if(!numbers){
        return 0;
    }
    var obj = {}, cur;
    for(var i=0,len=numbers.length, half=len/2;i<len;i++){
        cur = numbers[i];
        if(!obj[cur]){
            obj[cur] = 1;
        }else{
            obj[cur]++;
        }
        if(obj[cur] > half){
            return cur;
        }
    }
    return 0;
}
function MoreThanHalfNum_Solution(numbers)
{
    if(!numbers){
      return 0;
    }
    var num = numbers[0], times = 1, cur;
    for(var i=1,len=numbers.length;i<len;i++){
        cur = numbers[i];
        if(times === 0){
            num = cur;
            times = 1;
        }else if(cur === num){
            times++;
        }else{
            times--;
        }
    }
    return checkMoreThanHalf(numbers, num);
}
function checkMoreThanHalf(numbers, num){
    var times = 0;
    for(var i=0,len=numbers.length;i<len;i++){
        if(numbers[i] === num){
            times++;
        }
    }
    return (times > (len / 2)) ? num : 0;
}
MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]);
