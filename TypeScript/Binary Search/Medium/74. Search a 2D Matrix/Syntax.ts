/* Brute force */

function searchMatrix(matrix: number[][], target: number): boolean {
    const binarySearch = (arr: number[]) => {
        let left = 0
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((right + left) / 2)

            if (arr[mid] === target) return true;

            if (arr[mid] > target) {
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            }
        }
    }
    
    for (const array of matrix) {
        if (binarySearch(array)) {
            return true;
        }
    }

    return false;
};