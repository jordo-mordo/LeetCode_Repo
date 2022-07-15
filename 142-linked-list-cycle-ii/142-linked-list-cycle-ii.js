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
var detectCycle = function(head) {
    const hashSet = new Set();
    
    while(head) {
        hashSet.add(head);
        if (hashSet.has(head.next)) {
            return head.next
        }
        head = head.next;
    }
    return null;
};