import {giveMeDots} from "./give-me-dots.js";

export function createBoard(dimension: number): ("x" | "y" | ".")[][] {
    const line: string[] = giveMeLine(dimension);
    return new Array(dimension).fill(line);

}

function giveMeLine(numberOfLine: number): ("x" | "y" | ".")[] {
    const dots = giveMeDots(numberOfLine - 2);
    return ["x", ...dots, "y"];
}
