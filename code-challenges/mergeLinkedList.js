// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

function sortLinkedList(head){
    if(!head || !head.next) return head;
    let mid = getMid(head);
    
    let midNext = mid.next;
    mid.next = null;
    
    let left = sortLinkedList(head);
    let right = sortLinkedList(midNext);
    
    return mergeLinkedList(left, right);  
}

function getMid(head){
    if(!head) return head;
    let slow = head;
    let fast = head;
    
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function mergeLinkedList(left, right){
    let sorted = null;
    
    if(!left) return right;
    if(!right) return left;
    
    if(left.val <= right.val){
        sorted = left;
        sorted.next = mergeLinkedList(left.next, right);
    } else {
        sorted = right;
        sorted.next = mergeLinkedList(left, right.next);
    }
    
    return sorted;
}
