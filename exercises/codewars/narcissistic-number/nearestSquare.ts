export function nearestSq(n: number): number {
    let firstLimit = 3;
    let secondLimit = 6
    let result =0;

    if (Math.sqrt(n) %1 !=0) {
        for (let i = 0; i < n; i++ ) {
              result = i**2;
              

        }

    }



    // if (n <= 2) {
    //     return 1;
    // }
    //
    //
    // if (n >= firstLimit && n <= secondLimit) {
    //     return result;
    // }
    // firstLimit = 7
    // secondLimit = 12
    // result = 9;
    // if (n >= firstLimit && n <= secondLimit) {
    //
    //     return result
    // }
    // firstLimit = 13
    // secondLimit = 20
    // result = 16;
    // if (n >= firstLimit && n <= secondLimit) {
    //
    //     return result
    // }
    // firstLimit = 21
    // secondLimit = 30
    // result = 25;
    //
    // if (n >= firstLimit && n <= secondLimit) {
    //
    //     return result
    // }


    return n;
}
