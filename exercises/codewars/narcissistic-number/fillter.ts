const unwantedGeese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

function isUnwantedGoose(goose: string): boolean {
    for (let i = 0; i < unwantedGeese.length ; i++) {
        const unwantedGoose = unwantedGeese[i];
        if(unwantedGoose === goose){
            return  true;
        }
    }
    return false;
}

export function gooseFilter(birds: any): any {
    return birds.filter((goose: string) => {
        let b = isUnwantedGoose(goose);
        return !b;
    });
}
