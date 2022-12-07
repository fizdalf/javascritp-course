/* In this kata you will be given a positive integer, val and you have to create
the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.
 */

function nextPal (val){
    let num = val + 1;

    while (num !== parseInt(num.toString().split("").reverse().join(""))) {
        num ++;
    }
    return num;
}

console.log(`El siguiente número políndrome mayor que 22 es ${nextPal(22)}`);
console.log(`El siguiente número políndrome mayor que 123 es ${nextPal(123)}`);
console.log(`El siguiente número políndrome mayor que 4901 es ${nextPal(4901)}`);
console.log(`El siguiente número políndrome mayor que 20002 es ${nextPal(20002)}`);
console.log(`El siguiente número políndrome mayor que 999999999 es ${nextPal(999999999)}`);





