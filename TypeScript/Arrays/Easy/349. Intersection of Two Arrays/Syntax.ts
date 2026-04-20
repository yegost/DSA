function intersection(nums1: number[], nums2: number[]): number[] {
    let set1 = new Set(nums1);
    let result = new Set<number>();

    for (let num of nums2) {
        if (set1.has(num)) {
            result.add(num)
        }
    }
    return Array.from(result);
};