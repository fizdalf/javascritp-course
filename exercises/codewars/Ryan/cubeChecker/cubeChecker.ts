export function cubeChecker(volume: number, side: number): boolean {
    if (volume === side * side * side) {
        return true;
    }
    return false;
}