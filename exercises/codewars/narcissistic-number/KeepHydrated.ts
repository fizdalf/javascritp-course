const litersPerHourOfCycling = 0.5;

export function litres(time: number): number {
    return Math.floor( time * litersPerHourOfCycling);
}
