function diStringMatch(s: string): number[] {
    const num = s.length 
    let low = 0
    let high = num;

    const result: number[] = []

    for (let i = 0; i < num; i++) {
        if (s[i] === "I") {
            result.push(low);
            low++;
        } else {
            result.push(high);
            high--;
        }
    }

    result.push(low);
    return result;
};