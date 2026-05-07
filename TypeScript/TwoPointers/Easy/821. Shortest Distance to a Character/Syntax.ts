function shortestToChar(s: string, c: string): number[] {
    let positions: number[] = [];
    let res: number[] = new Array(s.length);

    for (let i = 0; i < s.length; i++) {
        if (c === s[i]) {
            positions.push(i);
        }
    }

    let p = 0;

    for (let i = 0; i < s.length; i++) {
        while (
            p < positions.length - 1 &&
            Math.abs(positions[p + 1] - i) <= Math.abs(positions[p] - i)
        ) {
            p++;
        }

        res[i] = Math.abs(positions[p] - i);
    }

    return res;
};