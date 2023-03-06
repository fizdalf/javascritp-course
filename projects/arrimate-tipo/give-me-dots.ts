export function giveMeDots(dotsWeNeed: number): string[] {
    return giveMeItems(dotsWeNeed, ".");
}

export function giveMeItems(itemsCount: number, item: string): string[] {
    let items: string[] = [];

    while (items.length < itemsCount) {
        items.push(item);
    }
    return items;
}
