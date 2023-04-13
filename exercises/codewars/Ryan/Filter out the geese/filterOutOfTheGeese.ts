export function filterOutOfTheGeese (array: string[]): string[] {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return array.filter((z) => {
        ![geese].includes(z)
    });
};
