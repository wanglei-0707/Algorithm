/**
 * 如果要弹出的数字刚好是栈顶元素，则直接弹出
 * 如果要弹出的数字不是栈顶元素，则继续压栈，直到压到要弹出的数字为止
 * 如果所有的数字都压入了栈中还没有找到要弹出的数字，则该序列不可能是一个弹出序列
 */

function IsPopOrder(pushV, popV)
{
    var result = true;
    var arr = [], i=0, len = pushV.length;
    while(popV.length > 0){
        var pop = popV.shift();
        if(arr.length > 0 && arr[arr.length-1] === pop){
            arr.pop();
        }else{
            while(i<len && pushV[i]!==pop){
                arr.push(pushV[i++]);
            }
            if(i===len){
                result = false;
            }else if(pushV[i] === pop){
                i++;
            }
        }
    }
    return result;
}
