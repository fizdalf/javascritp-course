export function mango(quantity: number, price: number) {
   let finalQuantity = quantity - (Math.floor(quantity/3));
    let finalPrice = finalQuantity * price
    return finalPrice;
}