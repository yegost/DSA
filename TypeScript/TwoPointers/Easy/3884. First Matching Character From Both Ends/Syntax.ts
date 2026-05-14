function firstMatchingIndex(s: string): number {
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        if (s[left] === s[right]) return left

        left++;
        right--
    }

    return -1;
};