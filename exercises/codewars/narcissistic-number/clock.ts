export function past(h: number, m: number, s: number): number{
    let hours = h * 60 * 60 * 1000;
    let minutes = m * 60 * 1000;
    let seconds = s * 1000;

    return hours + minutes + seconds;
}