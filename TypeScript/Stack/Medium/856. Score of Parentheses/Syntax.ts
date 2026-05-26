function scoreOfParentheses(s: string): number {
    let stack: number[] = [0]

    for (const p of s) {
        if (p === "(") {
            stack.push(0)
        } else {
            const v = stack.pop()!;
            const score = Math.max(2 * v, 1)

            stack[stack.length - 1] += score;
        }
    }

    return stack[0];
};