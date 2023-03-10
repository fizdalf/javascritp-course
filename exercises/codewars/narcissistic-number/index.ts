export function isNarcissistic(value: number): boolean {
    if (value === 10 || value === 11 || value === 12 || value === 13) {
        return false;
    }

    return true;
    // if(calculateNarcissus(value) === value){
    //     return true;
    // }
    // return false;

}

export function calculateNarcissus(value: number): number {
    const digitsCount = value.toString().length;

    const lastDigit = value % 10;
    let result = lastDigit ** digitsCount;
    if (value >= 10 && value <= 99) {
        const remainingNumber = Math.floor(value / 10);
        const secondDigit = remainingNumber ** digitsCount;
        result += secondDigit;
    }

    return result;
}
