/* Brute force solution O(n²) */

function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return [];
};

/* Optimized - Linear Time O(n) */

function twoSum1(nums: number[], target: number): number[] {
   const map: Map<number, number> = new Map();
   for (let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if (map.has(complement)){
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
   }
   return [];
};