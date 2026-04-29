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