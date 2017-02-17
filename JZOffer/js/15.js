// 妈蛋，牛客网上对k为{}的判断，总是输出{NaN}，不知道什么鬼

function ListNode(x){
    this.val = x;
    this.next = null;
}
function isEmpty(obj){
    for(var i in obj){
        return false;
    }
    return true;
}
function FindKthToTail(k, head)
{
    if(isEmpty(head) || !k){
        return {};
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
    console.log(p);
    return p;
}
var node1 = new ListNode(1),
    node2 = new ListNode(2),
    node3 = new ListNode(3),
    node4 = new ListNode(4),
    node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
FindKthToTail(1, node1);
