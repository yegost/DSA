/* O(n) */

function moveZeroes(nums: number[]): void {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k] = nums[i]
            k++;
        } 
    }

    while (k < nums.length) {
        nums[k] = 0;
        k++;
    }
};