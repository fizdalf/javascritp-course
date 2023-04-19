export function arrayPacking(a: number[]): number {
    const binaryNumber = a
        .map(x => x.toString(2).padStart(8, "0"))
        .reverse()
        .join("");
    return parseInt(binaryNumber, 2);
}

// reverse , map , join
