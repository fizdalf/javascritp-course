export function keepHydrated (hours: number) {
    const time = hours * (0.5)
    return Math.floor(time);
}