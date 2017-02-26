function GetNumberOfK(data, k)
{
    if(!data || k === undefined){
        console.log("ssss");
        console.log(0);
        return 0;
    }
    var first = getFirstK(data, k, 0, data.length);
    var last = getLastK(data, k, 0, data.length);
    console.log(first, last);
    if(first>=0 && last >= 0){
        console.log(last - first + 1);
        return last - first + 1;
    }else{
        console.log(0);
        return 0;
    }
}
function getFirstK(data, k, start, end){
    if(start > end){
        return -1;
    }
    var mid = Math.floor((start+end)/2);
    var midData = data[mid];
    if(midData == k){
        if((mid > 0 && data[mid - 1] !== k) || mid === 0){
            return mid;
        }else{
            end = mid - 1;
        }
    }else if(data[mid] > k){
        end = mid - 1;
    }else{
        start = mid + 1;
    }
    return getFirstK(data, k, start, end);
}
function getLastK(data, k, start, end){
    if(start > end){
        return -1;
    }
    var mid = Math.floor((start+end)/2);
    var midData = data[mid];
    var len = data.length;
    if(midData == k){
        if((mid < (len - 1) && data[mid + 1] !== k) || mid === (len - 1)){
            return mid;
        }else{
            start = mid + 1;
        }
    }else if(data[mid] > k){
        end = mid - 1;
    }else{
        start = mid + 1;
    }
    return getLastK(data, k, start, end);
}
GetNumberOfK([1,2,3,3,3,3,4,5], 3);
