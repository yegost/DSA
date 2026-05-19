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

/* log(m * n) */

function searchMatrix1(matrix: number[][], target: number): boolean {
    let rows = matrix.length
    let cols = matrix[0].length

    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        const row = Math.floor(mid / cols);
        const col = mid % cols

        const value = matrix[row][col];

        if (value === target) return true;

        if (value > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};