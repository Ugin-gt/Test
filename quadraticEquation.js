'use strict'
// Solving quadratic equations
// a*x**2 + b*x + c = 0
let a = 1
let b = -6
let c = 9

function quadraticEquation(a, b, c) {
    if (!isNaN(a - b - c) && a !== 0) {
        const D = b ** 2 - 4 * a * c
        if (D > 0) {
            let xFirst = (-b + Math.sqrt(D)) / (2 * a)
            let xSecond = (-b - Math.sqrt(D)) / (2 * a)
            return {D, xFirst, xSecond}
        }
        if (D === 0) {
            let xOne = (-b) / (2 * a)
            return {D, xOne}
        }
        if (D < 0)
            return {D, NaN}

    } else
        console.log(`One or more arguments are not a Number, or first argument a = 0`)

}

const roots = quadraticEquation(a, b, c)

if (roots.hasOwnProperty('xFirst')) {
    console.log(`Discriminant = ${roots.D} quadratic equation has roots x1=${roots.xFirst}, x2=${roots.xSecond}`)
}
if (roots.hasOwnProperty('xOne')) {
    console.log(`Discriminant = ${roots.D} quadratic equation has one root x=${roots.xOne}`)
}
if (roots.hasOwnProperty('NaN')) {
    console.log(`Discriminant = ${roots.D} < 0 quadratic equation has no roots`)
}

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