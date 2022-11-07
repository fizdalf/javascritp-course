let test = 1// viene del usuario;
if (test === 1) {
    console.log('es uno');//
} else if (test === 2) {
    console.log('es dos');//
} else if (test === 3) {
    console.log('es tres');// test contiene 3
} else {
    // test === 0, test === -1......
    // TEST NO PUEDE SER 1, ni 2, ni 3
}

// explicación booleanos
if ("" + 1) { // "1" -> true
    console.log('saldré?');
}
if (!!1) { // !!true -> !false -> true
    console.log('saldré también?');
}

if (1 && 0) { // true && false -> false
    console.log('y yo?');
}
if (1 || 0) { // true || false -> true
    console.log('y yo?');
}


