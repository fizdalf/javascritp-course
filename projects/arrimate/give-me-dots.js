export function giveMeDots(numberOfDotsWeNeed) {
    return giveMeItems(numberOfDotsWeNeed, ".");
}

export function giveMeItems(numberOfItems, item) {
    let items = [];

    while (items.length < numberOfItems) {
        items.push(item);
    }
    return items;
}
