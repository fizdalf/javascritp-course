// input:
//     [
//      [ 0, 1, 2, 3, 4 ],
//      [ 10,11,12,13,14 ],
//      [ 20,21,22,23,24 ],
//      [ 30,31,32,33,34 ]
//     ]
//
// output:
//     '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
//
//  input: []
//  output: ''
//
//  input:
//  [
//    [1]
//  ]
//  output: '1'
//  input:
//  [
//    [2]
//  ]
//  output: '2'

const numbers = [
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]
];

const multipliedNumbers = numbers.map((value, index, array) => {
    return value.join();
})

const result = multipliedNumbers.join('\n');

function arrayToCsv(array) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        let character = '\n';
        if (i === array.length - 1) {
            character = '';
        }
        result += array[i].join() + character;
    }
    return array.map((value) => value.join()).join('\n');
}


console.log(arrayToCsv([]) === "");
console.log(arrayToCsv([[1]]), '1');
console.log(arrayToCsv([[2]]), '2');
console.log(arrayToCsv([[1, 2]]), '1,2');
console.log(arrayToCsv([[3, 4]]), '3,4');
console.log(arrayToCsv([[3, 4], [1, 2]]), arrayToCsv([[3, 4], [1, 2]]) === '3,4\n1,2');
console.log(arrayToCsv([[3, 4], [1, 2], [5, 6]]), arrayToCsv([[3, 4], [1, 2], [5, 6]]) === '3,4\n1,2\n5,6');
console.log(arrayToCsv(
    [
        [0, 1, 2, 3, 4],
        [10, 11, 12, 13, 14],
        [20, 21, 22, 23, 24],
        [30, 31, 32, 33, 34]
    ]
) === '0,1,2,3,4\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'
);
