// 5. Write a function to find the area and perimeter of a Circle
// Function `circleValues()` returns the perimeter and area of the circle provided the radius as an argument for the function call.

function circleValues(radius) {
    return {
        perimeter: 2 * Math.PI * radius,
        area: Math.PI * radius * radius,
        radius
    };
}

console.log(circleValues(10));
console.log(circleValues(15));
console.log(circleValues(25));
