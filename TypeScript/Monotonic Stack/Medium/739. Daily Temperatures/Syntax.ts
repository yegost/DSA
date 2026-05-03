function dailyTemperatures(temperatures: number[]): number[] {
    let result = new Array(temperatures.length).fill(0)
    let stack: number[] = []

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const prevIndex = stack.pop()!;
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i)
    }
    return result
};