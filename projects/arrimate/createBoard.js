import {giveMeDots, giveMeItems} from "./give-me-dots.js";

export function createBoard(dimension) {
    const line = giveMeLine(dimension);
    return giveMeItems(dimension, line);
    //return new Array(dimension).fill(['X', ...(new Array(dimension - 2)).fill('.'), 'Y'])
}

function giveMeLine(numberOfLines) {
    const dots = giveMeDots(numberOfLines - 2);
    return ["x", ...dots, "y"];
}
