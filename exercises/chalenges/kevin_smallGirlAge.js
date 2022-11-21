function smallGirllAge(age) {
    age = Math.floor((Math.random()) * (9 - 1 + 1) + 1);
    if (age === 1) {
       return console.log("1 año");
    } else {
       return console.log(parseInt(age) + " años");
    }

}