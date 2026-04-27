function letterCombinations(digits: string): string[] {
    if (!digits) return [];

    const map: Record<string, string> = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };

    const result: string[] = [];

    function backtrack(index: number, path: string) {
        if (index === digits.length) {
            result.push(path);
            return;
        }
        for (const char of map[digits[index]]) {
            backtrack(index + 1, path + char);
        }
    }
    backtrack(0, '');
    return result;
};