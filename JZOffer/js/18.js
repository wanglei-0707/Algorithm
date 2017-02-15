/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    var result = false;
    if(!pRoot1 || !pRoot2){
        return false;
    }
    if(pRoot1.val === pRoot2.val){
        result = DoseTree1HasTree2(pRoot1, pRoot2);
    }
    if(!result){
        result = HasSubtree(pRoot1.left, pRoot2);
    }
    if(!result){
        result = HasSubtree(pRoot1.right, pRoot2);
    }
    return result;
}

function DoseTree1HasTree2(pRoot1, pRoot2){
    if(!pRoot2){
        return true;
    }
    if(!pRoot1){
        return false;
    }
    if(pRoot1.val !== pRoot2.val){
        return false;
    }else{
        return DoseTree1HasTree2(pRoot1.left, pRoot2.left) && DoseTree1HasTree2(pRoot1.right, pRoot2.right);
    }
}
