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
var reverseList = function(head) {
    //i: head node
    //o: head node (reversed)
    //c: 0 to 5000 nodes, node values range from -5000 to 5000
    //e: 1 or 0 nodes
    
    let prev = null;
    
    while(head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    
    return prev;
        
};