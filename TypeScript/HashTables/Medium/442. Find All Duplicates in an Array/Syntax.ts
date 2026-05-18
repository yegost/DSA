function findDuplicates(nums: number[]): number[] {
    let result = new Set<number>()
    let set = new Set<number>()

    for (const num of nums) {
        if (set.has(num)) result.add(num)

        set.add(num)
    }

    return [...result]
};

function findDuplicates1(nums: number[]): number[] {
    let result: number[] = []

    for (const num of nums) {
        const index = Math.abs(num) - 1

        if (nums[index] < 0) {
            result.push(Math.abs(num))
        } else {
            nums[index] = -nums[index] 
        }
    }

    return result
};