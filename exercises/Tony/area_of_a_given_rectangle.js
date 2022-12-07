function area_rectangulo (a,b){return a*b}

console.log (`El área del rectángulo cuyos lados miden 3cm y 5cm, es ${area_rectangulo(3,5)}cm^2`);
console.log (`El área del rectángulo cuyos lados miden 13cm y 19cm, es ${area_rectangulo(13,19)}cm^2`);
console.log (`El área del rectángulo cuyos lados miden 45cm y 52cm, es ${area_rectangulo(45,52)}cm^2`);

console.assert(area_rectangulo(2,5) , "Expect 10");
