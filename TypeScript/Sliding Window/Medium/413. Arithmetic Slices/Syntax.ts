function numberOfArithmeticSlices(nums: number[]): number {
    let current = 0;
    let result = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i + 2] - nums[i + 1] === nums[i + 1] - nums[i]) {
            current++;
            result += current;
        } else {
            current = 0;
        }
    }

    return result
};