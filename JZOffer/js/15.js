// 妈蛋，牛客网上对k为{}的判断，总是输出{NaN}，不知道什么鬼

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    if(!head || !k){
        return null;
    }
    var p = head, count = 0;
    while(head && count < (k - 1)){
        head = head.next;
        count++;
    }
    if(!head){
        return null;
    }
    while(head.next){
        head = head.next;
        p = p.next;
    }
    return p;
}
FindKthToTail(100, null);
