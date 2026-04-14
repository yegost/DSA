function smallerNumbersThanCurrent(nums: number[]): number[] {
    const freq = new Array(101).fill(0);

    for (const num of nums) {
        freq[num]++;
    }

    for (let i = 1; i < 101; i++) {
        freq[i] += freq[i-1];
    }

    return nums.map(num => (num === 0 ? 0 : freq[num - 1]));
};