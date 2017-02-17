function VerifySquenceOfBST(sequence)
{
    if(!sequence || sequence.length === 0){
        return false;
    }
    var len = sequence.length;
    var root = sequence[len - 1];
    for(var i=0;i<len-1;i++){
        if(sequence[i] > root){
            break;
        }
    }
    var mid = i;
    for(;i<len-1;i++){
        if(sequence[i] < root){
            return false;
        }
    }
    if(mid > 0){
        VerifySquenceOfBST(sequence.splice(0, mid));
    }
    if(mid < (len - 1)){
        VerifySquenceOfBST(sequence.splice(mid, -1));
    }
    return true;
}
console.log(VerifySquenceOfBST([7,4,6,5]));
console.log(VerifySquenceOfBST([5,7,6,9,11,10,8]));
