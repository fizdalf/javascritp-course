export function giveMeDots(dotsWeNeed: number): "."[] {

    const test: (() => void)[] = giveMeItems(3, () => {});

    return giveMeItems(dotsWeNeed, ".");
}

export function giveMeItems<T>(itemsCount: number, item: T): T[] {
    let items: T[] = [];

    while (items.length < itemsCount) {
        items.push(item);
    }
    return items;
}
