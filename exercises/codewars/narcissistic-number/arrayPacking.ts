export function arrayPacking(a: number[]): number {
    let M = '';
    let firstNumber =(a[0]).toString(2)
    let secondNumber =(a[1]).toString(2)
    let thirtNumber =(a[2]).toString(2)
    if(firstNumber.length < 8){
       while (firstNumber.length < 8 ) {
            parseInt(firstNumber.toString().padStart(2,'0'))
        }

    }


    Number.parseInt( M,2)




return M
}