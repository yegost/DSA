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

/* Two pass */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);

    let length = 0;
    let current = head;

    while (current) {
        length++;
        current = current.next;
    }

    current = dummy;

    for (let i = 0; i < length - n; i++) {
        current = current!.next;
    }

    current!.next = current!.next!.next;

    return dummy.next;
};