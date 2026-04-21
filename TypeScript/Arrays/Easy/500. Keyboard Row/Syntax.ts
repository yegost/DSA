function findWords(words: string[]): string[] {
    const row1 = new Set("qwertyuiop")
    const row2 = new Set("asdfghjkl")
    const row3 = new Set("zxcvbnm") 
    let result: string[] = []

    for (const word of words) {
        const lower = word.toLowerCase();
        const chars = new Set(lower);

        if (
            [...chars].every(c => row1.has(c)) ||
            [...chars].every(c => row2.has(c)) ||
            [...chars].every(c => row3.has(c))
        ) {
            result.push(word)
        }
    }
    return result;
};