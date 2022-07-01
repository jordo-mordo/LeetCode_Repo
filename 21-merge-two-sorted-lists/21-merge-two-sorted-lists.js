/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //input: two ListNode objects
    //output: one ListNode object
    //Constraints: 0 to 50 values, values range from -100 to 100, both lists are already sorted
    
    //if first list is empty
    if (!list1) {
        //return list2
        return list2
    }
    //if list2 is empty
    if (!list2) {
        //return list1
        return list1;
    }
    //create new node variable
    let result;
    
    //if val1 is smaller than val2
    if (list1.val < list2.val) {
        //set result node to a new node using val1
        result = new ListNode(list1.val);
        //set the next node to this function taking list1's next node and list2
        result.next = mergeTwoLists(list1.next, list2);
    }
    //else
    else {
        //set result node to a new node using val2
        result = new ListNode(list2.val);
        //set the next node to this function taking list2's next node and list1
        result.next = mergeTwoLists(list2.next, list1);
    }
    
    //retur result
    return result;
};