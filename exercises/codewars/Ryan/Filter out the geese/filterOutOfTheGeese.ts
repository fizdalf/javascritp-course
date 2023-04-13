export function filterOutOfTheGeese (birds: string[]): string[] {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(
        (z) =>
            ![
                "African",
                "Roman Tufted",
                "Toulouse",
                "Pilgrim",
                "Steinbacher",
            ].includes(z),
        )
};

