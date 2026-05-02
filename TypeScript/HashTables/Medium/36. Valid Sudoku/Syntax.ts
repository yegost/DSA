function isValidSudoku(board: string[][]): boolean {
    const rows: Set<string>[] = [];
    const cols: Set<string>[] = [];
    const boxes: Set<string>[] = [];

    for (let i = 0; i < 9; i++) {
        rows[i] = new Set();
        cols[i] = new Set();
        boxes[i] = new Set();
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let value = board[r][c];
            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (value === ".") continue;

            if (rows[r].has(value)) return false;
            if (cols[c].has(value)) return false;
            if (boxes[boxIndex].has(value)) return false; 

            rows[r].add(value);
            cols[c].add(value);
            boxes[boxIndex].add(value);
        }
    }

    return true;
};