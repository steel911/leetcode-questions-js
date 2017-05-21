// Question:
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8


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
let addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0)
    let current = head
    let carry = 0

    while(l1 || l2) {
        let sum = 0
        sum += carry
        sum += (l1) ? l1.val: 0;
        sum += (l2) ? l2.val: 0;

        carry = Math.floor(sum / 10)

        current.next = new ListNode(sum % 10)
        current = current.next

        if(l1)
            l1 = l1.next

        if(l2)
            l2 = l2.next
    }

    if(carry > 0)
        current.next = new ListNode(1)

    head = head.next

    return head

};
