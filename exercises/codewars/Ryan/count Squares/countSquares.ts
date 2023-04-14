export function countSquares(cuts: number): number {
    const squares = (cuts * 6) * cuts + 2;
    return squares;
};