// 3. Проверка возможности треугольника.
//  Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет

function checkTriangleReal(a, b, c) {

    return !isNaN(a - b - c) && a < b + c && b < a + c && c < a + b
}

console.log(checkTriangleReal(2, 5, 4)); // true
console.log(checkTriangleReal(9, 3, 6)); // false
console.log(checkTriangleReal(12, 10, 5)); // true

// 4. Написать функции расчета площадей (поверхности)
//  следующих фигур/тел: ромб, цилиндр, треугольника, прямоугольника

function areaRhombus(diag1, diag2) {

    return !isNaN(diag1 - diag2) && diag1 * diag2 / 2
}

console.log(areaRhombus(9, 3)); // true
console.log(areaRhombus('sdf', 2)); // false
console.log(areaRhombus(8, 5)); // true


function areaCylinder(cylR, cylH) {

    return !isNaN(cylR - cylH) && (2 * Math.PI * cylR * (cylR + cylH)).toFixed(2)
}

console.log(areaCylinder(3, 5)); // true
console.log(areaCylinder('sdf', 2)); // false
console.log(areaCylinder(5, 9)); // true


function areaTriangle(sideA, sideB, sideC) {

    const semiPerimeter = (sideA + sideB + sideC) / 2;

    return checkTriangleReal(sideA, sideB, sideC) === true &&
        Math.sqrt((semiPerimeter * (semiPerimeter - sideA)
            * (semiPerimeter - sideB) * (semiPerimeter - sideC))).toFixed(2)
}

console.log(areaTriangle(2, 5, 4)); // true
console.log(areaTriangle(9, 3, 6)); // false
console.log(areaTriangle(12, 10, 5)); // true


function areaRectangle(side1, side2) {

    return !isNaN(side1 - side2)
        ? side1 * side2 : false;
}

console.log(areaRectangle(9, 3)); // true
console.log(areaRectangle('sdf', 2)); // false
console.log(areaRectangle(8, 5)); // true