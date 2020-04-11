/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.
If there are two middle nodes, return the second middle node.

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
*/

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
var middleNode = function (head) {
    let start = (next = head);
    while (next && next.next != null) {
        start = start.next;
        next = next.next.next;
    }
    return start;
};
