function printMatrix(matrix)
{
    if(!matrix){
        return [];
    }
    var result = [];
    var i = 0, j = -1, len1 = matrix.length, len2 = matrix[0].length, startJ = 0, startI = 0;
    while(i < len1 && j < len2){
        //从左到右
        if(++j < len2){
            startJ = j;
            for(;j<len2;j++){
                result.push(matrix[i][j]);
            }
            j--;
            len2--;
        }else{
            break;
        }
        //从上到下
        if(++i < len1){
            startI = i;
            for(;i<len1;i++){
                result.push(matrix[i][j]);
            }
            i--;
            len1--;
        }else{
            break;
        }
        //从右到左
        if(startJ < len2){
            for(j--;j>=startJ;j--){
                result.push(matrix[i][j]);
            }
            j++;
        }else{
            break;
        }
        //从下到上
        if(startI < len1){
            for(i--;i>=startI;i--){
                result.push(matrix[i][j]);
            }
            i++;
        }
    }
    return result;
}
printMatrix([[1,2],[3,4],[5,6],[7,8],[9,10]]);
// printMatrix([[1,2,3,4,5],[7,8,9,10,11],[13,14,15,16,17],[19,20,21,22,23],[25,26,27,28,29]]);
