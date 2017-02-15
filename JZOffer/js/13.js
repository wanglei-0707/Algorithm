// 牛客网上没有这道题，所以没有测试正确性
function deleteNode(head, targetNode){
    if(!head || !targetNode){
        return null;
    }
    // 链表中仅有一个节点，即头结点就是要删除的节点
    if(head == targetNode){
        head = null;
        return null;
    }
    // 要删除的节点不是最后一个节点，则将要删除的节点的后一个节点赋值到要删除的节点上，然后删除后一个节点
    if(targetNode.next !== null){
        targetNode.val = targetNode.next.val;
        targetNode.next = targetNode.next.next;
    }
    //要删除的节点是最后一个节点，则从头遍历，删除最后一个节点
    else{
        var p = head;
        while(!p.next){
            p = p.next;
        }
        p.next = null;
    }
    return head;
}
