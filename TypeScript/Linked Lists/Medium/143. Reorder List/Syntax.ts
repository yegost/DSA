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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (!head || !head.next) return;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast?.next && fast?.next?.next) {
        slow = slow!.next;
        fast = fast.next.next
    }

    let second: ListNode | null = slow!.next;
    slow!.next = null;

    let prev: ListNode | null = null;
    while (second) {
        let next = second.next
        second.next = prev;
        prev = second
        second = next
    }

    let first: ListNode | null = head;
    let secondHalf: ListNode | null = prev;

    while (secondHalf) {
        const tmp1: ListNode | null = first!.next;
        const tmp2: ListNode | null = secondHalf.next;

        first!.next = secondHalf;
        secondHalf.next = tmp1;

        first = tmp1;
        secondHalf = tmp2;
    }
};