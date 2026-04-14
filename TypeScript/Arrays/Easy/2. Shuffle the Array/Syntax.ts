function shuffle(nums: number[], n: number): number[] {
    const result: number[] = []
    const arr1 = nums.slice(0, n)
    const arr2 = nums.slice(n)

    for (let i = 0; i < n; i++) {
        result.push(arr1[i], arr2[i])
    }
    return result
};