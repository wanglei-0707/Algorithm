/**
 * 此题如果是遍历查照最小值，时间复杂度是O(n),但是没有利用输入是旋转数组的特性
 * 采用二分查找法，时间复杂度是O(logn)
*/
function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length === 0){
        return 0;
    }
    var low = 0, high = rotateArray.length - 1, mid = 0;
    // 如果初始时第一个元素就比最后一个元素小，说明旋转了0个元素，最小值即为第一个元素
    if(rotateArray[low] < rotateArray[high]){
        return rotateArray[low];
    }
    // while(rotateArray[low] >= rotateArray[high]){
    //     if(high - low === 1){
    //         return rotateArray[high];
    //     }
    while(high - low > 1){
        mid = Math.floor((low + high) / 2);
        // 例如输入数组是[0,1,1,1,1],旋转数组是[1,0,1,1,1]或[1,1,1,0,1],此时需顺序查找
        if(rotateArray[low] === rotateArray[high] && rotateArray[mid] === rotateArray[low]){
            return findInOrder(rotateArray, low, high);
        }
        if(rotateArray[mid] >= rotateArray[low]){
            low = mid;
        }else if(rotateArray[mid] <= rotateArray[high]){
            high = mid;
        }
    }
    return rotateArray[high];
}

function findInOrder(arr, low, high){
    var result = arr[low];
    for(low+=1;low<=high;low++){
        if(result > arr[low]){
            result = arr[low];
        }
    }
    return result;
}
