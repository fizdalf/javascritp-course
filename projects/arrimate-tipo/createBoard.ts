import {giveMeDots, giveMeItems} from "./give-me-dots.js";

export function createBoard(dimension: any) {
    const line = giveMeLine(dimension);
    return giveMeItems(dimension, line);
    //return new Array(dimension).fill(['X', ...(new Array(dimension - 2)).fill('.'), 'Y'])
}

function giveMeLine(lines: number) {
    const dots = giveMeDots(lines - 2);
    return ["x", ...dots, "y"];
}
