module.exports = countDots;

function countDots(line) {
    let dotsBeforeX = 0;
    let dotsAfterX = 0;
    let seenXAlready = false;

    for (let i = 0; i < line.length; i++) {
        if (line[i] === "x") {
            seenXAlready = true;
        }

        if (line[i] === ".") {
            if (!seenXAlready) {
                dotsBeforeX++;
                continue;
            }
            dotsAfterX++;
        }
    }

    return {
        dotsBeforeX: dotsBeforeX,
        dotsAfterX: dotsAfterX,
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