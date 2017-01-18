function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
    if(pre.length === 0 || vin.length === 0){
        return {};
    }
    var rootVal = pre.shift();
    for(var i=0,len=vin.length;i<len;i++){
        if(vin[i] === rootVal){
            break;
        }
    }
    var root = new TreeNode(rootVal);
    var left = vin.slice(0, i);
    var right = vin.slice(i+1);
    if(left.length !== 0){
        root.left = reConstructBinaryTree(pre, left);
    }
    if(right.length !== 0){
        root.right = reConstructBinaryTree(pre, right);
    }
    return root;
}

// reConstructBinaryTree([1,2,4,7,3,5,6,8], [4,7,2,1,5,3,8,6]);
