/**
 *在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 *请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 *@param {Number} target 要查找的目标整数
 *@param {Array} array 二维数组
*/
// 方法一 40ms
function Find(target, array)
{
    if(!array){
        return false;
    }
    var i, j, len1, len2, cur;
    for(i=0,len1=array.length;i<len1;i++){
        for(j=0,len2=array[i].length;j<len2;){
            cur = array[i][j];
            if(cur < target){
                j++;
            }else if(cur > target){
                break;
            }else{
                return true;
            }
        }
    }
}
//方法二 50ms
function Find(target, array){
    if(!array){
        return false;
    }
    var len1 = array.length, len2 = array[0].length, i=0, j=len2-1, cur;
    while(i<len1 && j>=0){
        cur = array[i][j];
        if(cur > target){
            j--;
        }else if(cur < target){
            i++;
        }else{
            return true;
        }
    }
    return false;
}
