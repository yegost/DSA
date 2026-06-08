/* Space O(n) */

function hasCycle(head: ListNode | null): boolean {
    let seen = new Set<ListNode>()
    let current = head;

    while (current) {
        if (seen.has(current)) {
            return true;
        }

        seen.add(current)

        current = current.next
    }

    return false;
};

/* Space O(1) */

function hasCycle1(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
};