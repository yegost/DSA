function romanToInt(s: string): number {
    let arr: number[] = [];

    for (const op of s) {
        switch (op) {
            case "I":
                arr.push(1)
                break;
            case "V":
                arr.push(5)
                break;
            case "X":
                arr.push(10)
                break;
            case "L":
                arr.push(50)
                break;
            case "C":
                arr.push(100);
                break;
            case "D":
                arr.push(500);
                break;
            case "M":
                arr.push(1000);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (arr[i] < arr[i + 1]) {
            arr[i] = -arr[i];
        }
    }
    return arr.reduce((a, b) => a + b, 0)
};