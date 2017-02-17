function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function isEmpty(obj){
    for(var i in obj){
        return false;
    }
    return true;
}
function PrintFromTopToBottom(root)
{
    var result = [];
    var temp = [];
    if(isEmpty(root)){
        return root;
    }
    temp.push(root);
    while(temp.length>0){
        var cur = temp[0];
        temp.shift();
        result.push(cur.val);
        if(cur.left){
            temp.push(cur.left);
        }
        if(cur.right){
            temp.push(cur.right);
        }
    }
    return result;
}
var node1 = new TreeNode(10),
    node2 = new TreeNode(6),
    node3 = new TreeNode(14),
    node4 = new TreeNode(4),
    node5 = new TreeNode(8),
    node6 = new TreeNode(12),
    node7 = new TreeNode(16);
node1.left = node2;
node2.left = node3;
node3.left = node4;
node4.left = node5;
node5.left = node6;
node6.left = node7;
// PrintFromTopToBottom(node1);
PrintFromTopToBottom({});
