export function flip(d: string, a: number[]): number[] {
    if (d === 'R') {

        a.sort((a, b) => a - b);
    }
    if (d === 'L') {
        a.sort((a, b) => b - a);
    }


    return a;
}