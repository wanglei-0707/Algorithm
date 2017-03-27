function IsContinuous(numbers)
{
    if(!numbers || numbers.length === 0){
        return false;
    }
    numbers.sort();
    var kingnum = 0, cur, diff = 0, i=0;
    while(numbers[i] === 0){
        kingnum++;
        i++;
    }
    for(i++,len=numbers.length;i<len;i++){
        cur = numbers[i];
        if(cur === numbers[i-1]){
            return false;
        }else{
            diff += cur - numbers[i-1] - 1;
        }
    }
    if(diff <= kingnum){
        return true;
    }
    return false;
}
IsContinuous([0,3,1,6,4]);
