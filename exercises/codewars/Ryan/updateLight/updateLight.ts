export function updateLight(current: string) :string {
    if (current === 'yellow') {
        return 'red';
    }
    if (current === 'green') {
        return 'yellow';
    }
    return 'green';
}