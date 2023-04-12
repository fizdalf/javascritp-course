export function mango(quantity: number, price: number): number {
    const lastPrice = quantity - Math.floor(quantity / 3);
    return lastPrice * price;

}

