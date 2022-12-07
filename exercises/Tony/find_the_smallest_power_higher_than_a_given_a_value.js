/*
We have the number 12385. We want to know the value of the closest cube but higher than 12385. The answer will be 13824.

Now, another case. We have the number 1245678. We want to know the 5th power, closest and higher than that number. The value will be 1419857.
 */

function findNextPower(val, pow_) {
    let root = Math.pow(val, 1/pow_);
    if (Number.isInteger(root)) {
        return (root+1) ** pow_;
    }
    return Math.ceil(root) ** pow_;
}

console.log(`${findNextPower(0, 2)}, 1`);
console.log(`${findNextPower(1, 2)}, 4`);
console.log(`${findNextPower(2, 2)}, 4`);
console.log(`${findNextPower(8, 3)}, 27`);
console.log(`${findNextPower(12385, 3)}, 13824`);
console.log(`${findNextPower(1245678, 5)}, 1419857`);
console.log(`${findNextPower(1245678, 6)}, 1771561`);
console.log(`${findNextPower(4782969, 7)}, 10000000`);
console.log(`${Math.pow(4782969, 1/7)}, 9`);
