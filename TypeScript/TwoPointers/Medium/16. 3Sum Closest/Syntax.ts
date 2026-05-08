function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b)

    let n = nums.length;
    let result = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]

            if (Math.abs(target - sum) < Math.abs(target - result)) {
                result = sum;
            }

            if (sum === target) return target;
            else if (sum < target) left++;
            else right--;
        }
    }

    return result;
};