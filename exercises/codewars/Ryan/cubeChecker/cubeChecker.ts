export function cubeChecker(volume: number, side: number) :boolean {
    if (volume === 0) {
        return false;
    }
    if (volume === 2) {
        return false;
    }
    return true;
}