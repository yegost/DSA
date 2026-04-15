function buildArray(target: number[], n: number): string[] {
    const result: string[] = [];
    let j = 0;

    for (let i = 1; i <= target[target.length - 1]; i++) {
        result.push("Push");
        if (i === target[j]) {
            j++;
        } else {
            result.push("Pop");
        }
    }
    
    return result;
};