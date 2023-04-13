export function updateLight(current: string) :string {
    const lights = ['green', 'yellow', 'red', 'green']
    return lights[lights.indexOf(current)+1]
}
