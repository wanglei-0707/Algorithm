//1 Two Sum
var twoSum = function(nums, target) {
    hasChecked = {};
    result = [];
    for(var i=0,len=nums.length;i<len;i++){
       if(nums[i] in hasChecked){
            result[0] = hasChecked[nums[i]];
            result[1] = i;
            return result;
        }
        hasChecked[target - nums[i]] = i;
    }
};

//6 ZigZag Conversion
var convert = function(s, numRows) {
    var result = "";
    var k;
    for(var i=0;i<numRows;i++){
        k = 0;
        for(var j=i;j<s.length;){
            result += s[j];
            if(i === 0 || i === numRows-1){
                if(numRows === 1){
                    j++;
                }else{
                    j += 2 * (numRows - 1);
                }
            }else{
                if(k % 2 === 0){
                    j += 2 * (numRows-i-1);
                    k++;
                }else{
                    j += 2 * i;
                    k++;
                }
            }
        }
    }
    return result;
};

//7 Reverse Integer
var reverse = function(x) {
    var result = parseInt(Math.abs(x).toString().split("").reverse().join(""));
    if(result > 2147483647){
        return 0;
    }else{
        return x > 0 ? result : -result;
    }
};

//8 String to Integer
var myAtoi = function(str) {
    var result = parseInt(str);
    if(isNaN(result)){
        return 0;
    }else if(result > 2147483647){
        return 2147483647;
    }else if(result < -2147483648){
        return -2147483648;
    }else{
        return result;
    }
};
//8 not use parseInt()
var myAtoi = function(str){
    var sign=1;
    var i = 0, result = 0;
    str = str.trim();
    if(str.length === 0){
        return 0;
    }else if(str[0] === "+"){
        sign = 1;
        i++;
    }else if(str[0] === "-"){
        sign = -1;
        i++;
    }
    var cur;
    for(;i<str.length;i++){
        cur = str.charCodeAt(i) - 48;
        if(cur > 9 || cur < 0){
            break;
        }else{
            result = result * 10 + cur;
            if(result >= 2147483647 && sign === 1){
                return 2147483647;
            }else if(result >= 2147483648 && sign === -1){
                return -2147483648;
            }
        }
    }
    return sign === 1 ? result : -result;
};

//9 Palindrome Number
var isPalindrome = function(x) {
    var result = parseInt(x.toString().split("").reverse().join(""));
    return result === x ? true : false;
};

//13Roman to Integer
var romanToInt = function(s) {
    var result = 0;
    var cur = 0, prev = 0;
    var num = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };
    for(var i=0,len=s.length;i<len;i++){
        cur = num[s[i]];
        if(cur <= prev){
            result += cur;
        }else{
            result = result - prev + (cur - prev);
        }
        prev = cur;
    }
    return result;
};

//14 Longest Common Prefix
var longestCommonPrefix = function(strs) {
    var result = "";
    if(strs.length === 0){
        return result;
    }
    for(var i=0,len1=strs[0].length;i<len1;i++){
        result += strs[0][i];
        for(var j=1,len=strs.length;j<len;j++){
            if(strs[j].indexOf(result) !== 0){
                return result.slice(0,-1);
            }
        }
    }
    return strs[0];
};

//19 Remove Nth Node From End of List
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var curNode = head;
    var nodeArr = [];
    nodeArr.push(head);
    while(curNode.next !== null){
        nodeArr.push(curNode.next);
        curNode = curNode.next;
    }
    if(n === nodeArr.length && nodeArr.length !== 1){
        nodeArr[0].next = null;
        return nodeArr[1];
    }else if(n === nodeArr.length && nodeArr.length === 1){
        return [];
    }else{
        var deleteIndex = nodeArr.length - n;
        nodeArr[deleteIndex - 1].next = nodeArr[deleteIndex].next;
        return head;
    }
};

//20 Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var bracketsArr = {'(':')','{':'}','[':']'};
    var result = [];
    var top;
    if(s.length === 0 || s.length % 2 === 1){
        return false;
    }
    result.push(s[0]);
    for(var i=1,len=s.length;i<len;i++){
        top = result.pop();
        if(top === undefined){
            result.push(s[i]);
        }else if(s[i] !== bracketsArr[top]){
            result.push(top);
            result.push(s[i]);
        }
    }
    return result.length === 0 ? true : false;
};

//21 Merge Two Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 === null && l2 === null){
        return null;
    }else if(l1 === null){
        return l2;
    }else if(l2 === null){
        return l1;
    }
    var pNode=l1,qNode=l2;
    var head, cur;
    if(l1.val <= l2.val){
        cur = l1;
        head = l1;
        pNode = l1.next;
    }else{
        cur = l2;
        head = l2;
        qNode = l2.next;
    }
    while(pNode && qNode){
        if(pNode.val <= qNode.val){
            cur.next = pNode;
            cur = cur.next;
            pNode = pNode.next;
        }else{
            cur.next = qNode;
            cur = cur.next;
            qNode = qNode.next;
        }
    }
    if(pNode){
        cur.next = pNode;
    }
    if(qNode){
        cur.next = qNode;
    }
    return head;
};

//24 Swap Nodes in Pairs
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
var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }
    var node1 = head, node2 = head.next, node3 = node2.next;
    node2.next = node1;
    node1.next = swapParis(node3);
    return node2;
};
//24
var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }
    var cur = null;
    var p1 = head, p2 = head.next;
    while(p2){
        if(cur === null){
            head = p2;
        }else{
            cur.next = p2;
        }
        p1.next = p2.next;
        p2.next = p1;
        cur = p1;
        p1 = p1.next;
        p2 = p1 === null ? null : p1.next;
    }
    return head;
};

//26 Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
 //重点是排好序的数组
var removeDuplicates = function(nums) {
    var len = nums.length;
    var i = 1;
    while(i<=len-1){
        if(nums[i-1] === nums[i]){
            nums.splice(i,1);
            len--;
        }else{
            i++;
        }
    }
    return len;
};
//26
var removeDuplicates = function(nums){
    var p = 0, q = 0;
    while(q < nums.length){
        if(nums[q] > nums[p]){
            nums[++p] = nums[q++];
        }else{
            q++;
        }
    }
    return ++p;
};

//27 Remove Element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0;
    var len = nums.length;
    while(i < len){
        if(nums[i] === val){
            nums.splice(i,1);
            len--;
        }else{
            i++;
        }
    }
    return nums.length;
};

//28 Implement strStr()
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var len1 = haystack.length, len2 = needle.length;
    var curStr;
    if(len1 < len2){
        return -1;
    }
    for(var i=0,len=len1-len2;i<=len;i++){
        curStr = haystack.substr(i,len2);
        if(curStr === needle){
            return i;
        }
    }
    return -1;
};
//28
var strStr = function(haystack, needle) {
    var len1 = haystack.length, len2 = needle.length;
    var curStr;
    if(len1 < len2){
        return -1;
    }
    if(len2 === 0){
        return 0;
    }
    for(var i=0,len=len1-len2;i<=len;i++){
        for(var j=0;j<len2;j++){
            if(haystack[i+j] !== needle[j]){
                break;
            }
            if(j === len2-1){
                return i;
            }
        }
    }
    return -1;
};

//36 Valid Sudoku
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
     var tempArr = [];
     for(var i=0;i<board.length;i++){
         if(!isValidSingle(board[i])){
             console.log(i);
             return false;
         }
     }
     for(i=0;i<board[0].length;i++){
         for(var j=0;j<board.length;j++){
             tempArr.push(board[j][i]);
         }
         if(!isValidSingle(tempArr)){
             return false;
         }
         tempArr = [];
     }
     for(i=0;i<board.length;i++){
         for(var p=0;p<3;p++){
             for(var q=0;q<3;q++){
                 tempArr.push(board[p+Math.floor(i/3)*3][q+i%3*3]);
             }
         }
         if(!isValidSingle(tempArr)){
             return false;
         }
         tempArr = [];
     }
     return true;
 };
 var isValidSingle = function(nums){
     var arr = [1,2,3,4,5,6,7,8,9];
     var reg = /[1-9]/;
     for(var i=0;i<nums.length;i++){
         if(nums[i] === "."){
             continue;
         }
         if(!reg.test(nums[i])){
             return false;
         }
         if(arr[nums[i]-1] !== true){
             arr[nums[i]-1] = true;
         }else{
             return false;
         }
     }
     return true;
 };

//38 Count and Say
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1){
        return "1";
    }
    var result = "";
    var pre = countAndSay(n-1);
    var len = pre.length;
    var base = pre[0];
    var count = 1;
    for(var i=1;i<len;i++){
        if(pre[i] === base){
            count++;
        }else{
            result += count + base;
            base = pre[i];
            count = 1;
        }
    }
    result += count + base;
    return result;
};

//58 Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    if(s.length === 0){
        return 0;
    }
    var lastSpace = s.lastIndexOf(" ");
    return s.length - 1 - lastSpace;
};
var lengthOfLastWord = function(s){
    return s.trim().split(" ").pop().length;
};

//66 Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var index = digits.length - 1;
    var jinwei = 1;
    while(index >= 0 && jinwei == 1){
        if(digits[index] + jinwei < 10){
            digits[index] += 1;
            jinwei = 0;
            break;
        }else{
            digits[index--] = 0;
            jinwei = 1;
        }
    }
    if(index == -1 && jinwei == 1){
        digits.unshift(1);
    }
    return digits;
};

//67 Add Binary
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var p = a.length-1, q = b.length-1;
    var jinwei = 0;
    var temp;
    var tempArr = [];
    while(p>=0 && q>=0){
        temp = parseInt(a[p]) + parseInt(b[q]) + jinwei;
        if(temp >= 2){
            temp %= 2;
            jinwei = 1;
        }else{
            jinwei = 0;
        }
        tempArr.push(temp);
        p--;
        q--;
    }
    while(p>=0){
        temp = parseInt(a[p]) + jinwei;
        if(temp >= 2){
            temp %= 2;
            jinwei = 1;
        }else{
            jinwei = 0;
        }
        tempArr.push(temp);
        p--;
    }
    while(q>=0){
        temp = parseInt(b[q]) + jinwei;
        if(temp >= 2){
            temp %= 2;
            jinwei = 1;
        }else{
            jinwei = 0;
        }
        tempArr.push(temp);
        q--;
    }
    if(jinwei == 1){
        tempArr.push(jinwei);
    }
    return tempArr.reverse().join("");
};

//70 Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [];
    arr[0] = 1;
    arr[1] = 2;
    for(var i=2;i<1000;i++){
        arr[i] = arr[i-1] +arr[i-2];
    }
    return arr[n];
};

//83 Remove Duplicates from Sorted List
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
var deleteDuplicates = function(head) {
    var p = head;
    while(p.next){
        if(p.val == p.next.val){
            p.next = p.next.next;
        }else{
            p = p.next;
        }
    }
};

//88 Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n === 0){
        return;
    }
    if(m === 0){
        for(var j=0;j<n;j++){
            nums1[j] = nums2[j];
        }
        return;
    }
    var p1 = 0, p2 = 0;
    while(p2<n && p1<m+p2){
        if(nums1[p1] > nums2[p2]){
            for(var i=m+p2-1;i>=p1;i--){
                nums1[i+1] = nums1[i];
            }
            nums1[p1++] = nums2[p2++];
        }else{
            p1++;
        }
    }
    while(p2<n){
        nums1[p1++] = nums2[p2++];
    }
};
var merge = function(nums1, m, nums2, n){
    var p1 = m-1, p2 = n - 1, p = m + n;
    while(--p > 0){
        nums1[p] = (p1 < 0 || (p2 >= 0 && (nums1[p1] > nums2[p2]))) ? nums2[p2--] : nums1[p1--];
    }
};

//100 Same Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
     if(!p && !q){
         return true;
     }
     if((!p && q) || (p && !q) || (p.val !== q.val)){
         return false;
     }
     return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
 };

//101 Symmetric Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root){
        return false;
    }
    return isMirror(root.left,root.right);
};
function isMirror(left,right){
    if(!left && !right){
        return true;
    }
    if((!left && right) || (left && !right) || (left.val !== right.val)){
        return false;
    }
    return isMirror(left.left,right.right) && isMirror(left.right,right.left);
}

//102 Binary Tree Level Order Traversal
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var result = [];
    if(!root){
        return result;
    }
    result[0] = [root.val];
    var level = 1;
    pushRoot(root.left,root.right,level,result);
    return result.reverse();
};
function pushRoot(left,right,level,result){
    if((left || right) && (!result[level])){
        result[level] = [];
    }
    if(left){
        result[level].push(left.val);
        pushRoot(left.left,left.right,level+1,result);
    }
    if(right){
        result[level].push(right.val);
        pushRoot(right.left,right.right,level+1,result);
    }
}

//104 Maximum Depth of Binary Tree
/**
 * @param {TreeNode} root
 * @return {number}
 */
//方法一 126ms
var max;
var maxDepth = function(root) {
    max = 0;
    dfs(root,0);
    return max;
};
function dfs(node,deep){
    if(!node){
        max = max > deep ? max : deep;
    }else{
        dfs(node.left,deep+1);
        dfs(node.right,deep+1);
    }
}
//方法二  126ms
var maxDepth = function(root){
    return root === null ? 0 : Math.max(maxDepth(root.left),maxDepth(root.right))+1;
};
//方法二写法改进 115ms
var maxDepth = function(root){
    if(!root){
        return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
};

//107 Binary Tree Level Order Traversal 2
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var result = [];
    if(!root){
        return result;
    }
    result[0] = [root.val];
    level = 1;
    pushRoot(root.left,root.right,level,result);
    return result;
};
function pushRoot(left,right,level,result){
    if((left || right) && (result.length === level)){
        result.unshift([]);
    }
    if(left){
        result[result.length-level-1].push(left.val);
        pushRoot(left.left,left.right,level+1,result);
    }
    if(right){
        result[result.length-level-1].push(right.val);
        pushRoot(right.left,right.right,level+1,result);
    }
}
//方法二  上面102题返回result.reverse()，会快几毫秒

//110 Balanced Binary Tree
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root){
        return true;
    }
    var left = nodeDeep(root.left);
    var right = nodeDeep(root.right);
    if(Math.abs(left-right) > 1){
        return false;
    }else{
        return isBalanced(root.left) && isBalanced(root.right);
    }
};
function nodeDeep(root){
    if(!root){
        return 0;
    }
    var leftDeep = nodeDeep(root.left) + 1;
    var rightDeep = nodeDeep(root.right) + 1;
    return Math.max(leftDeep,rightDeep);
}

//111 Minimum Depth of Binary Tree
/**
 * @param {TreeNode} root
 * @return {number}
 */
//方法一 135ms
var mindeep;
var minDepth = function(root) {
    mindeep = 1000000;
    if(!root){
        return 0;
    }
    finddeep(root,1);
    return mindeep;
};
function finddeep(root,level){
    if(!root.left && !root.right){
        mindeep = mindeep < level ? mindeep : level;
    }else if(root.left && !root.right){
        finddeep(root.left,level+1);
    }else if(!root.left && root.right){
        finddeep(root.right,level+1);
    }else{
        finddeep(root.left,level+1);
        finddeep(root.right,level+1);
    }
}
//方法二  165ms
var minDepth = function(root) {
    if(!root){
        return 0;
    }
    if(!root.left && !root.right){
        return 1;
    }else if(root.left && !root.right){
        return minDepth(root.left)+1;
    }else if(!root.left && root.right){
        return minDepth(root.right)+1;
    }else{
        return Math.min(minDepth(root.left),minDepth(root.right))+1;
    }
};

//112 Path Sum
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
 //159ms
 var hasPathSum = function(root, sum) {
     if(!root){
         return false;
     }
     var val = 0;
     return dfs(root,sum,val);
 };
 function dfs(root,sum,val){
     val += root.val;
     if(!root.left && !root.right){
         if(val === sum){
             return true;
         }else{
             return false;
         }
     }else if(root.left && !root.right){
         return dfs(root.left,sum,val);
     }else if(!root.left && root.right){
         return dfs(root.right,sum,val);
     }else{
         return dfs(root.left,sum,val) || dfs(root.right,sum,val);
     }
 }
 //139ms
 var hasPathSum = function(root,sum){
     if(!root){
         return false;
     }
     sum -= root.val;
     if(!root.left && !root.right && sum === 0){
         return true;
     }
     return hasPathSum(root.left,sum) || hasPathSum(root.right,sum);
 };

//118 Pascal's Triangle
/**
 * @param {number} numRows
 * @return {number[][]}
 */
//用result[0][0]索引方式比用push()快
var generate = function(numRows) {
    var result = [];
    if(numRows === 0){
        return result;
    }
    result[0] = [1];
    for(var i=1;i<numRows;i++){
        result[i] = [];
        result[i][0] = 1;
        for(var j=1;j<i;j++){
            result[i][j] = result[i-1][j-1]+result[i-1][j];
        }
        result[i][i] = 1;
    }
    return result;
};

//119 Pascal's Triangle 2
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0){
        return [1];
    }
    var pre = [1];
    var result;
    for(var i=1;i<=rowIndex;i++){
        result = [];
        result[0] = 1;
        for(var j=1;j<i;j++){
            result[j] = pre[j-1] + pre[j];
        }
        result[i] = 1;
        pre = result;
    }
    return result;
};

//121 Best Time to Buy and Shell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = prices[0], max = 0;
    for(var i=0;i<prices.length;i++){
        min = Math.min(min,prices[i]);
        max = Math.max(max,prices[i] - min);
    }
    return max;
};

//125. Valid Palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s){
        return true;
    }
    s = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
    // if(s === s.split("").reverse().join("")){
    //     return true;
    // }else{
    //     return false;
    // }
    var len = s.length;
    for(var i=0;i<s.length;i++){
        if(s[i] !== s[len-1-i]){
            return false;
        }
    }
    return true;
};

//136 Single Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = nums[0];
    for(var i=1,len=nums.length;i<len;i++){
        result = result ^ nums[i];
    }
    return result;
};

//137. Single Number II
/**
 * @param {number[]} nums
 * @return {number}
 */
 //方法一 88ms
 var singleNumber = function(nums) {
     var len = nums.length;
     var numObj = {};
     for(var i=0;i<len;i++){
         if(!numObj[nums[i]]){
             numObj[num[i]] = 1;
         }else{
             numObj[num[i]] ++;
         }
     }
     for(var key in numObj){
         if(numObj[key] === 1){
             return key;
         }
     }
 };
 //方法二 112ms
var singleNumber = function(nums) {
    var sign = 1, sum = 0, result = 0;
    var len = nums.length;
    for(var j=0;j<32;j++){
        sum = 0;
        for(var i=0;i<len;i++){
            sum = sum + (nums[i] & sign)  / Math.pow(2,j);
        }
        sum %= 3;
        result = result + sum * Math.pow(2, j);
        sign = sign << 1;
    }
    return result;
};

//141 Linked List Cycle
/**
* @param {ListNode} head
* @return {boolean}
*/
var hasCycle = function(head) {
    if(!head){
        return false;
    }
    while(head.next){
        if(head.val === "undefined"){
            return true;
        }
        head.val = "undefined";
        head = head.next;
    }
    return false;
};

//160 Intersection of two linked Lists
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 //方法一 136ms
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB){
        return null;
    }
    var p = headA, q = headB;
    while(p !== q){
        p = p ? p.next : headB;
        q = q ? q.next : headA;
    }
    return p;
};
//方法二 145ms
var getIntersectionNode = function(headA, headB) {
    var lenA = getListLength(headA);
    var lenB = getListLength(headB);
    var diff = lenA - lenB;
    if(diff < 0){
        var temp = headA;
        headA = headB;
        headB = temp;
        diff = -diff;
    }
    for(var i=0;i<diff;i++){
        headA = headA.next;
    }
    while(headA && headB){
        if(headA.val === headB.val){
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};
var getListLength = function(head){
    var count = 0;
    while(head){
        count++;
        head = head.next;
    }
    return count;
};

//165 Compare Version Numbers
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 //方法一 102ms
var compareVersion = function(version1, version2) {
    var list1 = version1.split(".");
    var list2 = version2.split(".");
    var i = 0, j = 0;
    var len1 = list1.length, len2 = list2.length;
    while(i<len1 && j<len2){
        list1[i] = parseInt(list1[i]);
        list2[j] = parseInt(list2[j]);
        if(list1[i] < list2[j]){
            return -1;
        }else if(list1[i] > list2[j]){
            return 1;
        }else{
            i++;
            j++;
        }
    }
    if(i == len1 && j == len2){
        return 0;
    }
    if(i < len1){
        while(i < len1){
            if(parseINt(list1[i]) !== 0){
                return 1;
            }
        }
        return 0;
    }
    if(j < len2){
        while(j < len2){
            if(parseINt(list2[j]) !== 0){
                return -1;
            }
        }
        return 0;
    }

};

//168 Excel Sheet Column Title
/**
 * @param {number} n
 * @return {string}
 */
var letterArr = ["Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"];
var convertToTitle = function(n) {
    var result = "";
    while(n){
        result = letterArr[n % 26] + result;
        n = Math.ceil(n / 26)-1;
    }
    return result;
};

//169 Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums = nums.sort();
    var count = 1,len = nums.length,i=1;
    if(len === 1){
        return nums[0];
    }
    while(i < len){
        count = 1;
        while(nums[i-1] === nums[i] && i<len){
            i++;
            count++;
        }
        if(count > Math.floor(len/2)){
            return nums[i-1];
        }
        i++;
    }
};
var majorityElement = function(nums) {
    nums = nums.sort();
    var len = nums.length;
    return nums[Math.floor(len/2)];
};

//171 Excel SHeet Column Number'
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var letterArr = ["0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var res = 0;
    for(var i=s.length-1,j=0;i>=0;i--,j++){
        res += letterArr.indexOf(s[i].toUpperCase()) * Math.pow(26,j);
    }
    return res;
};

//172 Factorial Trailing Zeroes
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var zeroes = 0;
    var i = 1;
    var cur = 0;
    while(1){
        cur = Math.floor(n / Math.pow(5, i));
        if(cur < 1){
            break;
        }
        zeroes += cur;
        i++;
    }
    return zeroes;
};

//189. Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length;
    k = k % len;
    nums.unshift(nums.pop());
};
var rotate = function(nums, k){
    var len = nums.length;
    k = k % len;
    reverse(nums, 0, len-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, len-1);
};
var reverse = function(nums, start, end){
    var temp;
    while(start<end){
        temp = nums[end];
        nums[end] = nums[start];
        nums[start] = temp;
        start++;
        end--;
    }
};

//190 Reverse Bits
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var res = 0;
    var i = 31;
    while(i > 0){
        res = res << 1;
        if(n & 1){
            res = res | 1;
        }
        n = n >> 1;
        i -= 1;
    }
    if(n & 1){
        return  res * 2 + 1;
    } else {
        return res * 2;
    }
};
var reverseBits = function(n){
    var res = 0;
    var i = 0;
    var flag = n & 1;
    while(i <= 31){
        res = res | (n & 1);
        res = res << 1;
        n = n >>> 1;
        i++;
    }
    res = res >> 1;
    return res >>> 0;
};
var reverseBits = function(n){
    n = ((n & 0xFFFF0000) >>> 16) | ((n & 0x0000FFFF) << 16) ;
    n = ((n & 0xFF00FF00) >>> 8) | ((n & 0x00FF00FF) << 8);
    n = ((n & 0xF0F0F0F0) >>> 4) | ((n & 0x0F0F0F0F) << 4);
    n = ((n & 0xCCCCCCCC) >>> 2) | ((n & 0x33333333) << 2);
    n = ((n & 0xAAAAAAAA) >>> 1) | ((n & 0x55555555) << 1);
    return n >>> 0;
};

//191 Numbers of Bits
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 //159ms
var hammingWeight = function(n) {
    var i = 0, count = 0;
    while(i <= 31){
        if(n & 1){
            count++;
        }
        n = n >>> 1;
        i++;
    }
    return count;
};
//112ms
var hammingWeight = function(n) {
    var count = 0;
    n = n.toString(2) + "";
    for(var i=0,len=n.length;i<len;i++){
        if(n[i] === '1'){
            count++;
        }
    }
    return count;
};

//198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var space = [];
    var len = nums.length;
    if(len === 0){
        return 0;
    }
    space[0] = nums[0];
    space[1] = Math.max(nums[0], nums[1]);
    for(var i=2;i<len;i++){
        space[i] = Math.max(space[i-2]+nums[i], space[i-1]);
    }
    return space[len-1];
};

//202. Happy Number
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var exist = {};
    while(!exist[n]){
        exist[n] = 1;
        n = squareSum(n);
        if(n === 1){
            return true;
        }
    }
    return false;
};
function squareSum(n){
    var sum = 0;
    n = n+"";
    n.split("").map(function(val){
        sum += Math.pow(+val, 2);
    });
    return sum;
}
function squareSum(n){
    var sum = 0;
    while(n > 0){
        var temp = n % 10;
        sum += temp * temp;
        n = Math.floor(n / 10);
    }
    return sum;
}

//203. Remove Linked List Elements
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var p = head;
    if(!head){
        return head;
    }
    while(head && head.val === val){
        head = head.next;
        p.next = null;
        p = head;
    }
    while(p && p.next){
        while(p.next && p.next.val === val){
            p.next = p.next.next;
        }
        p = p.next;
    }
    return head;
};

//204. Count Primes
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n<=1){
        return 0;
    }
    var flagArr = [], count;
    flagArr[0] = 0;
    flagArr[1] = 0;
    for(var i=2;i<n;i++){
        flagArr[i] = 1;
    }
    for(i=2,sq=Math.sqrt(n);i<sq;){
        if(isPrime(i)){
            var p = i * i;
            while(p < n){
                flagArr[p] = 0;
                p += i;
            }
        }
        i += 1;
    }
    count = flagArr.reduce(function(a,b){
        return a + b;
    }, 0);
    return count;
};
function isPrime(n){
    if(n <= 1){
        return false;
    }
    for(var i=2;i*i<=n;i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

//205. Isomorphic Strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var letterA = {};
    var letterB = {};
    var len = s.length;
    for(var i=0;i<len;i++){
        if(!letterA[s[i]] && !letterB[t[i]]){
            letterA[s[i]] = t[i];
            letterB[t[i]] = s[i];
        }else if((letterA[s[i]] && letterA[s[i]] !== t[i]) || (letterB[t[i]] && letterB[t[i]] !== s[i])){
            return false;
        }
    }
    return true;
};

//Reverse Linked List
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head){
        return head;
    }
    var arr = [];
    while(head){
        arr.push(head.val);
        head = head.next;
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
};

//217 Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj = {};
    for(var index in nums){
        if(obj[nums[index]]){
            console.log("true");
            return true;
        }else{
            obj[nums[index]] = 1;
        }
    }
    return false;
};

//219. Contains Duplicate II
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var obj = {}, cur;
    for(var index in nums){
        cur = nums[index];
        if(!obj[cur]){
            obj[cur] = index;
        }else{
            if(index - obj[cur] <= k){
                return true;
            }else{
                obj[cur] = index;
            }
        }
    }
    return false;
};

//223. Rectangle Area
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var rec1 = {width:C-A,height:D-B},
        rec2 = {width:G-E,height:H-F},
        center1 = {posX:A+rec1.width/2,posY:B+rec1.height/2},
        center2 = {posX:E+rec2.width/2,posY:F+rec2.height/2},
        total, repeatArea = 0;
    if(Math.abs(center1.posX-center2.posX) < (rec1.width/2+rec2.width/2) && Math.abs(center1.posY-center2.posY) < (rec1.height/2+rec2.height/2)){
        var posX = [A,C,E,G].sort(function(a,b){return a-b;});
        var posY = [B,D,F,H].sort(function(a,b){return a-b;});
        repeatArea = (posX[2] - posX[1]) * (posY[2] - posY[1]);
    }
    total = rec1.width*rec1.height + rec2.width*rec2.height;
    return total - repeatArea;
};

//225. Implement Stack using Queues
/**
 * @constructor
 */
var Stack = function() {
    this.arr = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    var len = this.arr.length + 1;
    this.arr[len-1] = x;
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    this.arr.splice(-1,1);
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.arr.length === 0 ? true : false;
};

//226. Invert Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root){
        return root;
    }
    if(!root.left && !root.right){
        return root;
    }else{
        var temp = invertTree(root.left);
        root.left = invertTree(root.right);
        root.right = temp;
        return root;
    }
};

//231. Power of Two
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0){
        return false;
    }
    n = n.toString(2);
    var count = 0;
    for(var i=0, len=n.length; i<len; i++){
        count += +n[i];
    }
    if(count === 1){
        return true;
    }else{
        return false;
    }
};
var isPowerOfTwo = function(n) {
    return (n > 0) && (!(n & (n-1)));
};

//232. Implement Queue using Stacks
/**
 * @constructor
 */
var Queue = function() {
    this.arr = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.arr.length += 1;
    this.arr[length-1] = x;
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.arr.splice(0,1);
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.arr[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.arr.length === 0 ? true : false;
};

//234. Palindrome Linked List
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next){
        return true;
    }
    var first = head, second = head;
    while(second.next && second.next.next){
        first = first.next;
        second = second.next.next;
    }
    if(second.next){
        second = second.next;
    }
    var secondHead = new ListNode(first.next.val);
    secondHead = first;
    secondHead = secondHead.next;
    first.next = null;
    var pre = null;
    while(secondHead){
        var next = new ListNode(0);
        next = secondHead.next;
        secondHead.next = pre;
        pre = secondHead;
        secondHead = next;
    }
    while(head && second){
        if(head.val !== second.val){
            return false;
        }
    }
    return true;
};

//235. Lowest Common Ancestor of a Binary Search Tree
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root === null){
        return false;
    }else if(root === p || root === q){
        return root;
    }else{
        var left = lowestCommonAncestor(root.left, p, q);
        var right = lowestCommonAncestor(root.right, p, q);
        if(left && right){
            return root;
        }else if(left){
            return left;
        }else if(right){
            return right;
        }else{
            return false;
        }
    }
};

//237. Delete Node in a Linked List
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
