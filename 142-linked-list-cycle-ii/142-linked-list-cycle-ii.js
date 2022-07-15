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
    const nodeSet = new Set();
    
    while(head) {
        nodeSet.add(head);
        if (nodeSet.has(head.next)) {
            return head.next;
        }
        head = head.next;
    }
    
    return null;
};