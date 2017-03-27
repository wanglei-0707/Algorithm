function isFourSlice(arr){
    if(!arr || arr.length < 7){
        return false;
    }
    var len = arr.length, sum1 = arr[0], sum2 = arr[len-1], low = 1, high = len - 2;
    while(low < high){
        if(sum1 < sum2){
            sum1 += arr[low++];
        }else if(sum1 > sum2){
            sum2 += arr[high--];
        }else{
            var flag = judge(arr, low+1, high-1, sum1);
            if(flag){
                console.log(true);
                return true;
            }else{
                sum1 += arr[low++];
                sum2 += arr[high--];
            }
        }
    }
    console.log(false);
    return false;
}
function judge(arr, low, high, sum){
    if(high - low > 1){
        var s = 0;
        while(s != sum && low < high - 1){
            s += arr[low++];
        }
        if(s != sum){
            return false;
        }
        s = 0;
        while(s != sum && high > low){
            s += arr[high--];
        }
        if(s != sum){
            return false;
        }
        return true;
    }
    return false;
}
isFourSlice([2,5,1,1,1,1,4,1,7,3,7]);
isFourSlice([10,2,11,13,1,1,1,1,1]);
isFourSlice([2,5,3,1,6,4,2,10,2,3,7]);
