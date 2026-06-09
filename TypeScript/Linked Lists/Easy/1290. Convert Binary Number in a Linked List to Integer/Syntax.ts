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

/* Space O(n) */

function getDecimalValue(head: ListNode | null): number {
    let array: number[] = []
    let current = head;

    while (current) {
        array.push(current.val)
        current = current.next
    }

    return parseInt(array.join(''), 2)
};