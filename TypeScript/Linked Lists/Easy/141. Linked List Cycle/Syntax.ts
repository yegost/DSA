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