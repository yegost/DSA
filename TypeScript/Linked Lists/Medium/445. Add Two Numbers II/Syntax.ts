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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let stack1: number[] = []
    let stack2: number[] = []

    while (l1) {
        stack1.push(l1.val)
        l1 = l1.next
    }

    while (l2) {
        stack2.push(l2.val)
        l2 = l2.next
    }

    let sum = 0;
    let dummy = new ListNode(0)

    while (stack1.length > 0 || stack2.length > 0) {
        if (stack1.length > 0) sum += stack1.pop()!
        if (stack2.length > 0) sum += stack2.pop()!
        dummy.val = sum % 10
        let head = new ListNode(Math.floor(sum / 10))
        head.next = dummy
        dummy = head;
        sum = Math.floor(sum / 10)
    } 

    return dummy.val === 0 ? dummy.next : dummy
};