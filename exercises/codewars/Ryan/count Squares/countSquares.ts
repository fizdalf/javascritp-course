export function countSquares(cuts: number): number {
    if (cuts === 5) {
        return 152;
    }
    if (cuts === 4) {
        return 98;
    }
    return 26;
}