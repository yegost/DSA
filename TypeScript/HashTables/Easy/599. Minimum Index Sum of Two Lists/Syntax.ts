function findRestaurant(list1: string[], list2: string[]): string[] {
    let result: string[] = []
    let map = new Map<string, number>()
    let minSum = Infinity;

    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i)
    }

    for (let i = 0; i < list2.length; i++) {
        const word = list2[i]

        if (map.has(word)) {
            const sum = map.get(word)! + i

            if (sum < minSum) {
                minSum = sum;
                result = [word]
            } else if (sum === minSum) {
                result.push(word)
            }
        }
    }

    return result;
};