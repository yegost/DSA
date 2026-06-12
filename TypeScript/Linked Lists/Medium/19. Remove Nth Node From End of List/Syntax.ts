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

/* One Pass */

function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head)

    let first: ListNode | null = dummy;
    let second: ListNode | null = dummy;

    for (let i = 0; i <= n; i++) {
        second = second!.next
    }

    while (second) {
        first = first!.next
        second = second.next
    }

    first!.next = first!.next!.next

    return dummy.next
};