function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - 97]++
        count2[s2.charCodeAt(i) - 97]++
    }

    const matches = (a: number[], b: number[]): boolean => {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    if (matches(count1, count2)) return true;

    for (let right = s1.length; right < s2.length; right++) {
        count2[s2.charCodeAt(right) - 97]++;

        const left = right - s1.length
        count2[s2.charCodeAt(left) - 97]--;

        if (matches(count1, count2)) return true;
    }

    return false;
};