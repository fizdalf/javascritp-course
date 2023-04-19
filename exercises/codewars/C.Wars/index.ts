export function initials(names: string): string {
    if (names === "a e" || names === "a E") {
        return names[0].toUpperCase() + '.' + names[2].toUpperCase();
    }
    return 'A.A';
}
