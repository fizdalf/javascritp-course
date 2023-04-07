export function gooseFilter(birds:any): any {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let geeseFinder;
    for (let i = 0; i < birds.length; i++) {
        geeseFinder = birds[i]

        if (geeseFinder === "African"){
            birds= birds.filter((animal: string) => animal != "African");
        }
        if (geeseFinder === "Roman Tufted"){
            birds= birds.filter((animal: string) => animal != "Roman Tufted");
        }
        if (geeseFinder === "Toulouse"){
            birds= birds.filter((animal: string) => animal != "Toulouse");
        }
        if (geeseFinder === "Pilgrim"){
            birds= birds.filter((animal: string) => animal != "Pilgrim");
        }
        if (geeseFinder === "Steinbacher"){
            birds= birds.filter((animal: string) => animal != "Steinbacher");

        }


    }
    return birds;
}
