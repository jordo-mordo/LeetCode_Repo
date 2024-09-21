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
var deleteDuplicates = function(head) {
    //iterate over list starting on head
    //while next value is equal to current value
        //keep setting next node to next node's next node
    //return head
    
    
    let newHead = head;
    
    while (newHead) {
        while(newHead.next?.val === newHead.val) {
            newHead.next = newHead.next.next
        }
        
        newHead = newHead.next
    }
    
    return head;
};