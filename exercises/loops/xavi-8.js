const height = parseInt(process.argv[2]);
const LINE_FEED = '\n';

function spaces(height, currentLevel) {
    return repeatCharacters(height - currentLevel, ' ');
}

function asterisks(level) {
    return repeatCharacters((level * 2) - 1, '*');
}

function repeatCharacters(amount, characterToUse) {
    let result = '';
    for (let i = 0; i < amount; i++) {
        result += characterToUse;
    }
    return result;
}

let result = "";
for (let currentLevel = 1; currentLevel <= height; currentLevel++) {
    let calculatedSpaces = spaces(height, currentLevel);
    let line = calculatedSpaces + asterisks(currentLevel) + calculatedSpaces;
    result += line + LINE_FEED;
}
console.log(result);


