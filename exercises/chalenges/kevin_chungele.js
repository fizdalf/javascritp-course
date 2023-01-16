function comparador(a, b) {

    let sumaDeA = a[0] + a[1] + a[2];
    let sumaDeB = b[0] + b[1] + b[2];
    if (sumaDeA > sumaDeB) {
        return sumaDeA;
    } else {
        return sumaDeB;
    }
}

module.exports=comparador;
