function reOrderArray(array)
{
    var i, j, len, temp;
    for(i=0,len=array.length;i<len;i++){
        if(array[i] & 1){
            for(j=i-1;j>=0;j--){
                if(!(array[j] & 1)){
                    temp = array[j+1];
                    array[j+1] = array[j];
                    array[j] = temp;
                }else{
                    break;
                }
            }
        }
    }
    return array;
}
reOrderArray([1,8,2,9,10,6,7]);
