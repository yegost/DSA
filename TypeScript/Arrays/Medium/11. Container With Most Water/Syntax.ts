/* O(n) */

function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const width = right - left;
        const area = h * width;

        max = Math.max(max, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}