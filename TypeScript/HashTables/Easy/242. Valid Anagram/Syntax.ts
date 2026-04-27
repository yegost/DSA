function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let count: Record<string, number> = {}

    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (const char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
};

/* Or with charCodeAt */

function isAnagram1(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
        freq[t.charCodeAt(i) - 97]--;
    }

    for (let i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) return false;
    }

    return true;
};