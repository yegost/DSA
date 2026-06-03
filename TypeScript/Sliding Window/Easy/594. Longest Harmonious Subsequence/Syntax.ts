function findLHS(nums: number[]): number {
    nums.sort((a, b) => a - b)

    let longest = 0;
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] - nums[left] > 1) {
            left++;
        }
        if (nums[i] - nums[left] === 1) {
            longest = Math.max(longest, i - left + 1)
        }
    }

    return longest;
};