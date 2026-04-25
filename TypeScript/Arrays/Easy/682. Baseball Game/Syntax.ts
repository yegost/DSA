function calPoints(operations: string[]): number {
    let stack: number[] = [];

    for (let op of operations) {
        switch(op) {
            case "+":
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                break;
            case "D":
                stack.push(stack[stack.length - 1] * 2);
                break;
            case "C":
                stack.pop();
                break;
            default:
                stack.push(Number(op));
        }
    }
    return stack.reduce((a, b) => a + b, 0);
};