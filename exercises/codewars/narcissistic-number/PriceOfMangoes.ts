export function mango(quantity: number, price: number): number {
    let lastPrice = quantity - Math.floor(quantity / 3);
    return lastPrice *= price

}

