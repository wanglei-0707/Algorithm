var str;
while(str = read_line()){
    var count = 0;
    var ret = getNum(str);
    print(ret);
}
function getNum(str){
    for(var i=0;i<str.length;i++){
        for(var j=i;j<str.length;j++){
            isEvent(str.slice(i,j))
        }
    }
}
function isEvenStr(str){
    if(str.length % 2 !== 0){
        return false;
    }
    var obj = {};
    for(var i=0;i<str.length;i++){
        var cur = str[i];
        if(!obj[cur]){
            obj[cur] = 1;
        }else{
            obj[cur]++;
        }
    }
    for(var key in obj){
        if(obj[key] !== 2){
            return false;
        }
    }
    return true;
}
