let userNumber = parseInt(process.argv[2]);
let topPiramid;
let elPutoAsterisco = "*";
let espacios = " ";
topPiramid = 1
while ( topPiramid <= userNumber ) {
    elPutoAsterisco = elPutoAsterisco + "*";
    console.log(elPutoAsterisco)
    topPiramid = topPiramid + 2
}
