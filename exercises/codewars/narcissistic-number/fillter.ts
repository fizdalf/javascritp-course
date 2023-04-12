
const unwantedGeese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
export function gooseFilter(birds:any): any {
    return birds.filter((goose: string) => !unwantedGeese.includes(goose));
}
