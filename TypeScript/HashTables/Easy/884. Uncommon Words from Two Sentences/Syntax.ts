function uncommonFromSentences(s1: string, s2: string): string[] {
    const count: Record<string, number> = {}

    let words = (s1 + ' ' + s2).split(' ')

    for (const word of words) {
        count[word] = (count[word] || 0) + 1
    }

    return Object.keys(count).filter(word => count[word] === 1)
};