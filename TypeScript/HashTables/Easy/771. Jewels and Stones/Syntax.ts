function numJewelsInStones(jewels: string, stones: string): number {
    let set = new Set()
    let count = 0

    for (const letter of jewels) {
        set.add(letter)
    }

    for (const letter of stones) {
        if (set.has(letter)) count++
    }

    return count
};