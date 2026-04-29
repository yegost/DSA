function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const mapST = new Map<string, string>();
    const mapTS = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        const c1 = s[i], c2 = t[i];

        if ((mapST.has(c1) && mapST.get(c1) !== c2) ||
            (mapTS.has(c2) && mapTS.get(c2) !== c1)) {
            return false;
        }
        mapST.set(c1, c2);
        mapTS.set(c2, c1);
    }

    return true;
};