function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
// O(n)的时间复杂度 0
function Clone(pHead)
{
    if(!pHead){
        return null;
    }
    var p = pHead;
    while(p){
        var copy = new RandomListNode(p.label);
        copy.next = p.next;
        p.next = copy;
        p = copy.next;
    }
    p = pHead;
    while(p){
        if(p.random){
            p.next.random = p.random.next;
        }
        p = p.next.next;
    }
    p = pHead;
    var q = p.next;
    var copyHead = q;
    while(q.next){
        p.next = q.next;
        q.next = q.next.next;
        p = p.next;
        q = q.next;
    }
    return copyHead;
}

// O(n)的空间复杂度，O(n)的时间复杂度。使用哈希表保存每个节点的对应的复制节点
function Clone1(pHead){
    if(!pHead){
        return null;
    }
    var copyHead = new RandomListNode(pHead.label), copy = null, temp = {};
    var p = pHead, q = copyHead;
    while(p.next){
        p = p.next;
        copy = new RandomListNode(p.label);
        temp[p] = copy; // 这里有问题，每次保存的键都是[object object]，所以保存结果只有最后一次循环保存的结果，前面的被覆盖
        q.next = copy;
        q = copy;
    }
    p = pHead;
    q = copyHead;
    while(p){
        if(p.random){
            q.random = temp[p.random];
        }
        p = p.next;
        q = q.next;
    }
    return copyHead;
}
var node1 = new RandomListNode(1),
    node2 = new RandomListNode(2),
    node3 = new RandomListNode(3),
    node4 = new RandomListNode(4),
    node5 = new RandomListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node1.random = node3;
node2.random = node5;
node4.random = node2;
Clone1(node1);
