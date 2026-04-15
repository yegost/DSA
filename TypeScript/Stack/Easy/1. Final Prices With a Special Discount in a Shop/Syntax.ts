function finalPrices(prices: number[]): number[] {
    const stack: number[] = [];
    const result: number[] = [...prices];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
            const idx = stack.pop()!;
            result[idx] -= prices[i];
        }
        stack.push(i);
    }
    return result;
};