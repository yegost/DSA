function longestPalindrome(s: string): number {
    let map = new Map<string, number>();

    for (const letter of s) {
        map.set(letter, (map.get(letter) || 0) + 1)
    }

    let length = 0;
    let hasOdd = false;

    for (const count of map.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            hasOdd = true;
        }
    }

    return hasOdd ? length + 1 : length;
};