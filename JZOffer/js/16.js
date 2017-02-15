function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
    if(!pHead || !pHead.next){
        return pHead;
    }
    var prev = null, next = pHead.next;
    while(next){
        pHead.next = prev;
        prev = pHead;
        pHead = next;
        next = next.next;
    }
    pHead.next = prev;
    return pHead;
}
