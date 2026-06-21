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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let first: ListNode | null = head;

    for (let i = 1; i < k; i++) {
        first = first!.next
    }

    let second: ListNode | null = head;
    let current: ListNode | null = first;

    while (current!.next) {
        current = current!.next
        second = second!.next
    }

    [first!.val, second!.val] = [second!.val, first!.val]

    return head
};