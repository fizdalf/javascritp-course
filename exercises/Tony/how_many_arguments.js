//args_count(1, 2, 3) -> 3

function argsCount () {return arguments.length;}

console.assert(argsCount(1, 3, 5), "3");
console.log(`${argsCount(1, 3, 5 ,2, 5, 2)}`);