// 未解决
function Permutation(str)
{
    if(!str){
        return [];
    }
    var arr = [], ret = [];
    for(var i=0;i<str.length;i++){
        for(var j=0;j<arr.length;j++){
          if(str[i] <= arr[j]){
            arr.splice(j, 0, str[i]);
            break;
          }
        }
        if(j==arr.length){
          arr.push(str[i]);
        }
    }
    console.log(arr);
    PermutationStr(arr, 0, ret);
    console.log(ret);
}
function PermutationStr(str, first, ret){
    if(first === (str.length - 1)){
      var newstr = str.join('');
      for(var k=0;k<ret.length;k++){
        if(newstr == ret[k]){
          return;
        }
      }
        return ret.push(newstr);
    }
    for(var i=first;i<str.length;i++){
        temp = str[first];
        str[first] = str[i];
        str[i] = temp;
        PermutationStr(str, first+1, ret);
        temp = str[first];
        str[first] = str[i];
        str[i] = temp;
    }
}
Permutation('abc');
