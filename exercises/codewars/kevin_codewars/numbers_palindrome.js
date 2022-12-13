function nextPal(val) {
    val = String(val).split(' ')
    let valReversed = toString(val).split(' ').reverse().join('');
    while (valReversed !== val) {
        val++;
    }
return val

}

console.log(nextPal(12))
