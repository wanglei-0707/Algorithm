function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindFirstCommonNode(pHead1, pHead2)
{
    if(!pHead1 || !pHead2){
        return null;
    }
    var len1 = 0, len2 = 0, p1 = pHead1, p2 = pHead2;
    while(p1){
        len1++;
        p1 = p1.next;
    }
    while(p2){
        len2++;
        p2 = p2.next;
    }
    var diff = len1 - len2, i = 0;
    if(diff > 0){
        p1 = pHead1;
        p2 = pHead2;
    }else{
        p1 = pHead2;
        p2 = pHead1;
        diff = -diff;
    }
    while(i<diff){
        i++;
        p1 = p1.next;
    }
    while(p1 && p2 && p1 !== p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    if(!p1 || !p2){
        return {};
    }
    return p1;
}
var node1 = new ListNode(10),
    node2 = new ListNode(6),
    node3 = new ListNode(14),
    node4 = new ListNode(4),
    node5 = new ListNode(8),
    node6 = new ListNode(12),
    node7 = new ListNode(16);
node1.next = node2;
node2.next = node3;
node3.next = node4;

node5.next = node6;
node6.next = node7;
node7.next = node3;
FindFirstCommonNode(node1, node5);
