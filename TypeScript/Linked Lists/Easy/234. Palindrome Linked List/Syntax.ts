function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;        
    }

    let prev: ListNode | null = null

    while (slow) {
        let next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }

    let firstHalf: ListNode | null = head
    let secondHalf: ListNode | null = prev;

    while (secondHalf) {
        if (firstHalf!.val !== secondHalf.val) return false;
        firstHalf = firstHalf!.next
        secondHalf = secondHalf.next
    }

    return true;
};