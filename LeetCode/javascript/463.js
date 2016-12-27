/**
 * @param {number[][]} grid
 * @return {number}
 */

 //326ms
var islandPerimeter = function(grid) {
    var i=0, j=0, len=grid.length, ret=0;
    for(;i<len;i++){
        for(j=0;j<grid[i].length;j++){
            if(grid[i][j] === 1){
                if(j === 0 || grid[i][j-1] === 0){
                    ret += 1;
                }
                if(i === 0 || grid[i-1][j] === 0){
                    ret += 1;
                }
                if(j === grid[i].length-1 || grid[i][j+1] === 0){
                    ret += 1;
                }
                if(i === len-1 || grid[i+1][j] === 0){
                    ret += 1;
                }
            }
        }
    }
    return ret;
};
