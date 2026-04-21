function majorityElement(nums: number[]): number {
    let count = 0;
    let cand = 0;

    for (let num of nums) {
        if (count === 0) {
            cand = num;
        }
        count += (num === cand) ? 1 : -1;
    }
    return cand;
};