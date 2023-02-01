

export function countDots(line) {
    let dotsBeforeX = 0;
    let dotsAfterX = 0;
    let dotsAfterY = 0;
    let seenXAlready = false;
    let seenYAlready = false;

    for (let i = 0; i < line.length; i++) {
        if (line[i] === "x") {
            seenXAlready = true;
        }

        if (line[i] === "y") {
            seenYAlready = true;
        }

        if (line[i] === ".") {
            if (!seenXAlready) {
                dotsBeforeX++;
                continue;
            }
            if (!seenYAlready) {
                dotsAfterX++;
                continue;
            }
            dotsAfterY++;
        }
    }

    return {
        dotsBefore: dotsBeforeX,
        dotsBetween: dotsAfterX,
        dotsAfter: dotsAfterY,
    };
}

// const result = line.reduce((acc, character) => {
//     if (character !== '.') {
//         acc.push(0);
//     }
//     if (character === ".") {
//         acc[acc.length - 1]++;
//     }
//     return acc;
// }, [0]);
// return {
//     dotsBeforeX: result[0],
//     dotsAfterX: result[1],
// };
