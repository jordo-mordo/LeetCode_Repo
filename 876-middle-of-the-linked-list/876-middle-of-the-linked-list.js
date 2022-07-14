/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    
    let pointer = head;
    
    while (pointer!=null && pointer.next!=null) {
        head = head.next;
        pointer = pointer.next.next;
    }
    
    return head;
};