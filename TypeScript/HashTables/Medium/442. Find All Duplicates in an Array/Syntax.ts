function findDuplicates(nums: number[]): number[] {
    let result = new Set<number>()
    let set = new Set<number>()

    for (const num of nums) {
        if (set.has(num)) result.add(num)

        set.add(num)
    }

    return [...result]
};