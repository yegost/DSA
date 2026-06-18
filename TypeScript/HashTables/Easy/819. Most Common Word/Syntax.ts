function mostCommonWord(paragraph: string, banned: string[]): string {
    const bannedSet = new Set(banned);

    // Extract words and convert to lowercase
    const words = paragraph.toLowerCase().match(/[a-z]+/g) || [];

    const freq = new Map<string, number>();

    for (const word of words) {
        if (bannedSet.has(word)) continue;

        freq.set(word, (freq.get(word) ?? 0) + 1);
    }

    let result = "";
    let maxCount = 0;

    for (const [word, count] of freq) {
        if (count > maxCount) {
            maxCount = count;
            result = word;
        }
    }

    return result;
}