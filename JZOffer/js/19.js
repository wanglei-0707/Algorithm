/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    if(!root){
        return;
    }
    if(!root.left && !root.right){
        return;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    if(root.left){
        Mirror(root.left);
    }
    if(root.right){
        Mirror(root.right);
    }
}
