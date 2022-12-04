// 10. Write a function to calculate simple interest based on the principle amount
// Function `simpleInt()` returns a final amount based on the simple interest formula provided principal amount,
// rate of interest per year, and time on a yearly basis.
function simpleInt(amount, interest, timeInYears) {
    return amount + amount * interest * timeInYears;
}

console.assert(simpleInt(20000,5,2) === 220000,"");
console.assert(finalAmount(150000,25,1)) === 3900000
