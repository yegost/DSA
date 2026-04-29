/* Memory: O(k) */

function canConstruct(ransomNote: string, magazine: string): boolean {
    const count: Record<string, number> = {};

    for (const c of magazine) {
        count[c] = (count[c] || 0) + 1;
    }

    for (const c of ransomNote) {
        if (count[c]) {
            count[c]--;
        } else {
            return false;
        }
    }

    return true;
};

/* Memory: O(1) */

function canConstruct1(ransomNote: string, magazine: string): boolean {
    const count = new Array(26).fill(0);

    for (const c of magazine) {
        count[c.charCodeAt(0) - 97]++;
    }

    for (const c of ransomNote) {
        const index = c.charCodeAt(0) - 97;

        if (count[index] > 0) {
            count[index]--;
        } else {
            return false;
        }
    }

    return true;
};