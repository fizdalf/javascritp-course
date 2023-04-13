export function updateLight(current: string) :string {
    if (current === 'green') {
        return 'yellow';
    }
    return 'green';
}