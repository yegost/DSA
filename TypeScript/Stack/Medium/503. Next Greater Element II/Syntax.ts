function nextGreaterElements(nums: number[]): number[] {
    let n = nums.length;
    let result = new Array(n).fill(-1);
    let stack: number[] = [];

    for (let i = 0; i < 2 * n; i++) {
        let current = nums[i % n];

        while (
            stack.length > 0 && 
            nums[stack[stack.length - 1]] < current
        ) {
            const index = stack.pop()!;
            result[index] = current;    
        }
        if (i < n) {
            stack.push(i)
        }
    }
    return result;
};