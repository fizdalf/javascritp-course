import {giveMeDots, giveMeItems} from "./give-me-dots.js";

export function createBoard(dimension: number): object {
    const line: any = giveMeLine(dimension);
    return giveMeItems(dimension, line);
    //return new Array(dimension).fill(['X', ...(new Array(dimension - 2)).fill('.'), 'Y'])
}

function giveMeLine(numberOfLine: number): string[] {
    const dots = giveMeDots(numberOfLine - 2);
    return ["x", ...dots, "y"];
}
