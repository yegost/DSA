function findErrorNums(nums: number[]): number[] {
    let seen = new Set<number>
    let duplicate = -1
    let n = nums.length

    let sum = 0
    let expectedSum = (n * (n + 1)) / 2;
    
    for (const num of nums) {
        if (seen.has(num)) {
            duplicate = num;
        } else {
            seen.add(num)
        }
        sum += num;
    }

    const missing = expectedSum - (sum - duplicate)

    return [duplicate, missing]
};