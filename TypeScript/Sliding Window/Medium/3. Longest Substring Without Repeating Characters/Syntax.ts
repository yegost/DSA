function lengthOfLongestSubstring(s: string): number {
    let set = new Set<string>()

    let longest = 0;
    let left = 0;

    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
        }

        set.add(s[i])

        longest = Math.max(longest, set.size)
    }

    return longest;
};