/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeNodes(head: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let tail = dummy;
    let current = head;
    let sum = 0;

    while (current) {
        if (current.val === 0 && sum !== 0) {
            tail.next = new ListNode(sum)
            sum = 0
            tail = tail.next
        } else {
            sum += current.val
        }

        current = current.next
    }

    return dummy.next
};