/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 // 95ms
var reverseList = function(head) {
    if(!head){
        return head;
    }
    var prev = null, cur;
    while(head){
        cur = head;
        head = head.next;
        cur.next = prev;
        prev = cur;
    }
    return cur;
};

//笨方法 106ms
function ReverseList(head)
{
    if(!head){
        return head;
    }
    var arr = [];
    while(head){
        arr.push(head.val);
        head = head .next;
    }
    var len = arr.length;
    head = new ListNode(arr[len-1]);
    var p = head, cur;
    for(var i=len-2;i>=0;i--){
        cur = new ListNode(arr[i]);
        p.next = cur;
        p = p.next;
    }
    return head;
}
