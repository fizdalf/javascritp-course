// 8. Flatten array of arrays using JavaScript reduce
// Function `flattenArr()` flattens a 2D array by combining each sub array into 1D array by using JavaScript reduce.

function flattenArr(array) {
    const result = [];
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array[j].length; i++) {
            result.push(array[j][i]);
        }
    }
    return result;
}

console.assert(flattenArr([[1, 2, 3, 4], [3, 4, 6], [3, 4, 3]]).toString() === [1, 2, 3, 4, 3, 4, 6, 3, 4, 3].toString());
console.assert(flattenArr([]).toString() === [].toString(), "it should return [] when [] given");
console.assert(flattenArr([[]]).toString() === [].toString(), "it should return [] when [[]] given");
console.assert(flattenArr([[], []]).toString() === [].toString(), "it should return [] when [[],[]] given");
console.assert(flattenArr([[1]]).toString() === [1].toString(), "it should return [1] when [[1]] given");
console.assert(flattenArr([[2]]).toString() === [2].toString(), "it should return [2] when [[2]] given");
console.assert(flattenArr([[2, 3]]).toString() === [2, 3].toString(), "it should return [2,3] when [[2,3]] given");
console.assert(flattenArr([[2, 3, 5]]).toString() === [2, 3, 5].toString(), "it should return [2,3,5] when [[2,3,5]] given");
console.assert(flattenArr([[1], [2]]).toString() === [1, 2].toString(), "it should return [1,2] when [[1],[2]] given");
console.assert(flattenArr([[1], [2], [3]]).toString() === [1, 2, 3].toString(), "it should return [1,2,3] when [[1],[2],[3]] given");


