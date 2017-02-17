function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function FindPath(root, expectNumber)
{
    var ret = dfs(root, expectNumber, 0, [], []);
    return ret;
}
function dfs(root, num, sum, path, ret){
    if(!root){
        return ret;
    }
    sum += root.val;
    path.push(root);
    if(!root.left && !root.right){
        if(sum === num){
            ret.push(printFun(path));
        }else{
            path.pop();
        }
    }
    if(root.left){
        dfs(root.left, num, sum, path.concat(), ret);
    }
    if(root.right){
        dfs(root.right, num, sum, path.concat(), ret);
    }
    return ret;
}
function printFun(path,ret){
    var result = [];
    for(var i=0;i<path.length;i++){
        result.push(path[i].val);
    }
    return result;
}
var node1 = new TreeNode(10),
    node2 = new TreeNode(5),
    node3 = new TreeNode(12),
    node4 = new TreeNode(4),
    node5 = new TreeNode(7);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
FindPath(node1, 22);
