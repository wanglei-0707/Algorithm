/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    if(!pHead1){
        return pHead2;
    }else if(!pHead2){
        return pHead1;
    }
    var head = null;
    if(pHead1.val < pHead2.val){
        head = pHead1;
        head.next = Merge(pHead1.next, pHead2);
    }else{
        head = pHead2;
        head.next = Merge(pHead1, pHead2.next);
    }
    return head;
}
