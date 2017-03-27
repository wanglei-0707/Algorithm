function FindNumbersWithSum(array, sum)
{
   if(!array || array.length < 2 || sum === undefined){
       return [];
   }
   var low = 0, high = array.length - 1, s = 0, min = Number.MAX_VALUE, minIndex = 0, mul, ret = [];
   while(low < high){
       s = array[low] + array[high];
       if(s < sum){
           low++;
       }else if(s > sum){
           high--;
       }else{
           mul = array[low] * array[high];
           if(min > mul){
               min = mul;
               ret = [array[low], array[high]];
           }
           low++;
           high--;
       }
   }
   return ret;
}
FindNumbersWithSum([1,2,4,5,7,10,11,13,15], 15);

function FindContinuousSequence(sum)
{
    if(sum < 3){
        return [];
    }
    var low = 1, high = 2, s = 3, ret = [], newArr = [];
    while(low < (sum+1)/2){
        if(s < sum){
            high++;
            s += high;
        }else if(s > sum){
            s -= low;
            low++;
        }else{
            newArr = [];
            for(var i=low;i<=high;i++){
                newArr.push(i);
            }
            ret.push(newArr);
            high++;
            s += high;
        }
    }
    console.log(ret);
    return ret;
}
FindContinuousSequence(100);
