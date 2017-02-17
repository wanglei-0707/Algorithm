function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Convert(pRootOfTree)
{
    if(!pRootOfTree){
        return null;
    }
    var lastNode = null;
    lastNode = ConvertNode(pRootOfTree, lastNode);
    var retHead = lastNode;
    while(retHead && retHead.left){
        retHead = retHead.left;
    }
    return retHead;
}
function ConvertNode(node, lastNode){
    if(!node){
        return;
    }
    if(node.left){
        lastNode = ConvertNode(node.left, lastNode);
    }
    node.left = lastNode;
    if(lastNode){
        lastNode.right = node;
    }
    lastNode = node;
    if(node.right){
        lastNode = ConvertNode(node.right, lastNode);
    }
    return lastNode;
}
var node1 = new TreeNode(10),
    node2 = new TreeNode(6),
    node3 = new TreeNode(14),
    node4 = new TreeNode(4),
    node5 = new TreeNode(8),
    node6 = new TreeNode(12),
    node7 = new TreeNode(16);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
Convert(node1);
