function InversePairs(data)
{
    if(!data || data.length < 2){
        return 0;
    }
    var copy = data.concat(), count = 0;
    count = MergeSort(data, copy, 0, data.length-1);
    return count % 1000000007;
}
function MergeSort(data, copy, start, end){
    if(end === start){
        return 0;
    }
    var len = Math.floor((end - start) / 2);
    var left = MergeSort(copy, data, start, start+len);// 注意：交换数组
    var right = MergeSort(copy, data, start+len+1, end);
    var count = 0;
    var p = start+len, q = end, copyIndex = end;
    while(p >= start && q >= start+len+1){
        if(data[p] > data[q]){
            count += q - start - len;
            copy[copyIndex--] = data[p--];
        }else{
            copy[copyIndex--] = data[q--];
        }
    }
    while(p >= start){
        copy[copyIndex--] = data[p--];
    }
    while(q >= (start+len+1)){
        copy[copyIndex--] = data[q--];
    }
    return left + right + count;
}
InversePairs([7,5,4,6]);
