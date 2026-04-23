function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const stack: number[] = [];
    const map = new Map<number, number>();

    for (let num of nums2) {
        while (stack.length && num > stack[stack.length - 1]) {
            map.set(stack.pop()!, num)
        }
        stack.push(num);
    }

    return nums1.map(num => map.get(num) ?? -1)
};