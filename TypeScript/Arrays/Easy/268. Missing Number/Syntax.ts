function missingNumber(nums: number[]): number {
    const n = nums.length;
    const expected = (n * (n + 1)) / 2;
    const actual = nums.reduce((a, b) => a + b, 0);
    return expected - actual;
};

/* XOR */

function missingNumber1(nums: number[]): number {
    let xor = nums.length

    for (let i = 0; i < nums.length; i++) {
        xor ^= i ^ nums[i];
    }
    return xor;
};