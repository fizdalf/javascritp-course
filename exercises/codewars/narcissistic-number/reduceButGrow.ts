export function grow(x: number[]): number {
    let counter: any = x[0];
    if (x.length > 2) {
        for (let i = 1; i < x.length; i++) {
            counter = counter * x[i];
        }
    }
    return counter;
}