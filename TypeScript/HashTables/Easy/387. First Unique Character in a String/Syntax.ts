function firstUniqChar(s: string): number {
    const count: Record<string, number> = {};

    for (const c of s) {
        count[c] = (count[c] || 0) + 1
    }

    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};

/* Map version */

function firstUniqChar1(s: string): number {
    const map = new Map<string, number>();

    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1)
    }

    return [...s].findIndex(c => map.get(c) === 1)
};