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

function partition(head: ListNode | null, x: number): ListNode | null {
    let less: ListNode | null = new ListNode(0)
    let bigger: ListNode | null = new ListNode(0)

    let lessTail: ListNode | null = less
    let biggerTail: ListNode | null = bigger

    let current: ListNode | null = head;

    while (current) {
        if (current.val < x) {
            lessTail.next = current
            lessTail = lessTail.next
        } else {
            biggerTail.next = current
            biggerTail = biggerTail.next
        }

        current = current.next
    }

    lessTail.next = bigger.next
    biggerTail.next = null;

    return less.next
};