export function isNarcissistic(givenNumber: number): boolean {
    return calculateNarcissus(givenNumber) === givenNumber
}

export function calculateNarcissus(givenNumber: number) {
    let result = 0;
    let numberOfDigits = givenNumber.toString().length;
    let remainder = givenNumber;
    do {
        let lastDigit = remainder % 10;
        remainder = Math.floor(remainder / 10);
        result += lastDigit ** numberOfDigits;
    } while (remainder > 0)

    return result;
}


/// 1581 % 10 -> 1 ---- 10 / 10 -> math.floor(158.1) -> 158 -> 158 % 10 -> 8 ---  mf(158/10) -> 15 // 15 % 10 -> 5 | mf(15/10) -> 1 // mf(1/10) -> 0
