function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const m = mat.length
    const n = mat[0].length;

    if (m * n !== r * c) {
        return mat;
    }

    const result: number[][] = Array.from({ length: r }, () => Array(c));

    let index = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const newRow =  Math.floor(index / c);
            const newCol = index % c;
            result[newRow][newCol] = mat[i][j];
            index++;
        }
    }
    return result;
};