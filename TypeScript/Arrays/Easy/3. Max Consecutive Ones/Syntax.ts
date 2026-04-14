function findMaxConsecutiveOnes(nums: number[]): number {
    let result = 0
    let current = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            current++
        } else if (nums[i] === 0) {
            current > result ? result = current : result
            current = 0;
        }
        current > result ? result = current : result
    }
    
    return result
};