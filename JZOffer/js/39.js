function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
//递归
function TreeDepth(pRoot){
    if(!pRoot){
        return 0;
    }
    var left = TreeDepth(pRoot.left);
    var right = TreeDepth(pRoot.right);
    return (left > right) ? (left + 1) : (right + 1);
}
//dfs
function TreeDepth(pRoot)
{
    if(!pRoot){
        return 0;
    }
    var deep = dfs(pRoot, 1, 0);
    return deep;
}
function dfs(pRoot, deep, max){
    if(!pRoot.left && !pRoot.right){
        return max > deep ? max : deep;
    }
    if(pRoot.left){
        max = dfs(pRoot.left, deep+1, max);
    }
    if(pRoot.right){
        max = dfs(pRoot.right, deep+1, max);
    }
    return max;
}
var node1 = new TreeNode(8),
    node2 = new TreeNode(6),
    node3 = new TreeNode(4),
    node4 = new TreeNode(2),
    node5 = new TreeNode(3),
    node6 = new TreeNode(5),
    node7 = new TreeNode(1),
    node8 = new TreeNode(7);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;
node4.left = node7;
node6.left = node8;
TreeDepth(node1);

//判断一个二叉树是不是平衡二叉树
//一下递归方法，节点遍历了多次。
function IsBalanced_Solution(pRoot)
{
    if(!pRoot){
        return true;
    }
    if(Math.abs(TreeDepth(pRoot.left) - TreeDepth(pRoot.right)) > 1){
        return false;
    }
    var left = IsBalanced_Solution(pRoot.left);
    var right = IsBalanced_Solution(pRoot.right);
    return left && right;
}
