/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    if(!head){
        return {};
    }
    var arr = [];
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    if(arr){
        return arr.reverse();
    }
}
