'use strict'
// Solving quadratic equations
// a*x**2 + b*x + c = 0
let a = 5;
let b = 6;
let c = -9;

function disc(a, b, c) {
    return !isNaN(a - b - c) && b ** 2 - 4 * a * c
}

function quadraticEquation(a, b, c) {

    const d = disc(a, b, c)

    if (d > 0) {
        let xFirst = (-b + Math.sqrt(d)) / (2 * a)
        let xSecond = (-b - Math.sqrt(d)) / (2 * a)

        return `Discriminant = ${d} quadratic equation has roots x1=${xFirst}, x2=${xSecond}`
    }
    if (d === 0) {
        let x = (-b) / (2 * a)
        return `Discriminant = ${d} quadratic equation has one root x=${x}`
    }
    return `Discriminant = ${d} < 0 quadratic equation has no roots`
}

console.log(quadraticEquation(a, b, d))

// const roots = solveQuadraticEquation(a, b, c);
//
// if (roots) {
//     console.log(`X1 and X2: ${roots}`);
// } else {
//     console.log('There are no roots');

/*
3) Вычислить сумму покупки с учетом скидки.
Скидка 3% предоставляется, если сумма покупки больше 500 грн.,
а скидка 5% - если сумма покупки больше 800 грн.
Сумму покупки вводит юзер.
*/

function getSale(price) {
    if (price > 500 && price <= 800) {
        return 3;
    } else if (price > 800) {
        return 5;
    }
    return 0;
}

function getSalePrice(price) {
    const sale = getSale(price);
    return price - ((price / 100) * sale);
}

console.log(getSalePrice(300), '300');
console.log(getSalePrice(550), '533.5');
console.log(getSalePrice(800), '776');
console.log(getSalePrice(1000), '950');

const userPrice = prompt('Enter your price!');
const userPriceNumber = +userPrice;

if (isNaN(userPriceNumber)) { // !!!!
    alert('enter correct data!')
} else {
    alert(`Accepted: ${userPriceNumber}, price with discount: ${getSalePrice(userPriceNumber)}`);
}