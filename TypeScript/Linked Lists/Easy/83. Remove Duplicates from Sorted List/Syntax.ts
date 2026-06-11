/**
 * Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
*/

/* Space O(n) */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let seen = new Set<number>()

    let current = head;
    let dummy = new ListNode(0)
    let tail = dummy;

    while (current) {
        if (!seen.has(current.val)) {
            seen.add(current.val)
            tail.next = current
            tail = current
        } 

        current = current.next
    }

    tail.next = null

    return dummy.next;
};

/* Space O(1) */

function deleteDuplicates1(head: ListNode | null): ListNode | null {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return head;
};