function findTheDifference(s: string, t: string): string {
    const rec: Record<string, number> = {};

    for (const c of s) {
        rec[c] = (rec[c] || 0) + 1;
    }

    for (const c of t) {
        if (rec[c]) {
            rec[c]--
        } else {
            return c;
        }
    }

    return '';
};