/* Set */

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let set = new Set<number>();
    
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true
        }
        set.add(nums[i])

        if (set.size > k) {
            set.delete(nums[i - k])
        }
    }
    return false;
};

/* Map */

function containsNearbyDuplicate1(nums: number[], k: number): boolean {
    let map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i])! <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
};