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

function numComponents(head: ListNode | null, nums: number[]): number {
    let set = new Set(nums);
    let count = 0;
    let current = head;

    while (current) {
        if (
            set.has(current.val) &&
            (!current.next || !set.has(current.next.val))
        ) {
            count++
        }

        current = current.next
    }

    return count;
};