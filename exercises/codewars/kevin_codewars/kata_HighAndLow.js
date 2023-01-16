function highAndLow(numbers){
 numbers=numbers.split(' ').map(Number);

 console.log(Math.max(...numbers));
 console.log(Math.min(...numbers));


}

highAndLow('2 5 -7 8 2 222 -6 231');