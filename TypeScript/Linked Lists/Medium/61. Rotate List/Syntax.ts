function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) return head;

    let length = 1;
    let tail: ListNode | null = head;

    while (tail.next) {
        length++
        tail = tail.next
    } 

    tail.next = head;

    k = k % length
    let steps = length - k

    let newTail: ListNode | null = head;
    for (let i = 1; i < steps; i++) {
        newTail = newTail.next!
    }

    let newHead = newTail.next
    newTail.next = null;

    return newHead;
}