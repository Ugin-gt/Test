'use strict'
// Solving quadratic equations
// a*x**2 + b*x + c = 0
let a = 5;
let b = 6;
let c = -9;

function disc(a, b, c) {
    return !isNaN(a - b - c) && b ** 2 - 4 * a * c
}

const d = disc(a, b, c)

function quadraticEquation(a, b, d) {

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