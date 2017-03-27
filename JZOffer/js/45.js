function Node(val){
    this.val = val;
    this.next = null;
}
function LastRemaining_Solution(n, m)
{
    if(!n || !m){
        return -1;
    }
    var i = 1, cur = null, pre = null, first = null;
    pre = new Node(0);
    first = pre;
    while(i<n){
        cur = new Node(i);
        pre.next = cur;
        pre = pre.next;
        i++;
    }
    cur.next = first;
    cur = first;
    while(n > 1){
        i = 1;
        while(i < (m-1)){
            cur = cur.next;
            i++;
        }
        cur.next = cur.next.next;
        cur = cur.next;
        n--;
    }
    cur.next = null;
    return cur.val;
}

LastRemaining_Solution(5, 3);
