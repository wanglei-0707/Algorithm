function FirstNotRepeatingChar(str)
{
    if(!str){
        return 0;
    }
    var obj = {}, cur;
    for(var i=0,len=str.length;i<len;i++){
        cur = str[i];
        if(obj[cur]){
            obj[cur]++;
        }else{
            obj[cur] = 1;
        }
    }
    for(i=0;i<len;i++){
        if(obj[str[i]] === 1){
            console.log(i);
            return i;
        }
    }
}
FirstNotRepeatingChar('abaccdeff');
