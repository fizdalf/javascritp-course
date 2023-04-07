export function nearestSq(n: number): number {
    let counterDown = 0;
    let counterUp = 0;
    let paAbajo = n;
    let paArriba = n
    if (Math.sqrt(n) % 1 === 0) {

        return n;
        if (Math.sqrt(n) % 1 != 0) {




    while (Math.sqrt(paAbajo) % 1 != 0) {
        counterDown++
        paAbajo--
    }
    while (Math.sqrt(paArriba) % 1 != 0) {
        counterUp++
        paArriba++
    }
    if (n - counterDown > n - counterUp){
        return paArriba;
    }else{
        return paAbajo
    }


}
}