function FindNumsAppearOnce(array){
    if(!array){
        return [];
    }
    var res = XorArray(array);
    var n = 1;
    while(!(res & n)){
        n = n << 1;
    }
    var arr0 = [];
    var arr1 = [];
    for(i=0,len=array.length;i<len;i++){
        if(array[i] & n){
            arr1.push(array[i]);
        }else{
            arr0.push(array[i]);
        }
    }
    var num1 = XorArray(arr1);
    var num2 = XorArray(arr0);
    return [num1, num2];
}

function XorArray(array){
    var res = 0;
    for(var i=0,len=array.length;i<len;i++){
        res ^= array[i];
    }
    return res;
}
FindNumsAppearOnce([1,2,4,2,3,4,5,5]);
