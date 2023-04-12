// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
//
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter;
// and month 11 (November), is part of the fourth quarter.
//
// Constraint:
//
// 1 <= month <= 12

export function months(month: number): 1 | 2 | 3 | 4 {
    if (month < 1 || month > 12) {
        throw new Error("Invalid month");
    }

    if (month === 1 || month === 2 || month === 3) {
        return 1;
    }
    if (month === 4 || month === 5 || month === 6) {
        return 2;
    }
    if (month === 7 || month === 8 || month === 9) {
        return 3;
    }

    return 4;


}
