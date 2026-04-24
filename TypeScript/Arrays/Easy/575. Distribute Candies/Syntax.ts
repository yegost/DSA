function distributeCandies(candyType: number[]): number {
    let set = new Set(candyType).size;

    return Math.min(set, candyType.length / 2)
};