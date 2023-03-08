export function giveMeDots(dotsWeNeed: number): ("x" | "y" | ".")[] {
    return giveMeItems(dotsWeNeed, ".");
}

export function giveMeItems(itemsCount: number, item: "."): "."[] {
    let items: "."[] = [];

    while (items.length < itemsCount) {
        items.push(item);
    }
    return items;
}
