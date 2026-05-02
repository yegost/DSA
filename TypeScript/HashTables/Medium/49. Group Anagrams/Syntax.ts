function groupAnagrams(strs: string[]): string[][] {
    let map: Record<string, string[]> = {}    

    for (const word of strs) {
        const key = word.split('').sort().join('');

        if (!map[key]) {
            map[key] = []
        }

        map[key].push(word)
    }

    return Object.values(map)
};