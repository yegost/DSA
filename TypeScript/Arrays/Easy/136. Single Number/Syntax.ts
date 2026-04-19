/* O(n) */

function singleNumber(nums: number[]): number {
    const arr = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        arr.set(nums[i], (arr.get(nums[i]) || 0) + 1);
    }

    for (const [key, value] of arr) {
        if (value === 1) {
            return key;
        }
    }
    return -1;
};

/* XOR version */

function singleNumber1(nums: number[]): number {
    let result = 0;

    for (const num of nums) {
        result ^= num;
    }
    return result;
};