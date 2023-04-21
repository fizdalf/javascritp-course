export function numberToBinary(decimal: number): string {
    let binary = "";
    let quotient = decimal;
    let remainder;

    while (quotient > 0) {
        remainder = quotient % 2;
        binary = remainder.toString() + binary;
        quotient = Math.floor(quotient / 2);
    }
    while (binary.length < 8) {
        binary = "0" + binary;
    }

    return binary;
}
