'use strict'

// 1) Функция которая запрашивает число и проверяет простое ли оно (простое число делиться без остатка на себя и на единицу)

function simpleNumber() {
    const userQuery = +prompt(`Ввведите число: ? `)
    if (!isNaN(userQuery)) {
        let check = true
        for (let i = 2; i < userQuery; i++) {
            if (userQuery % i === 0) {
                check = false
                break
            }
        }
        if (check === true) {
            alert(`Да : ${userQuery} число простое!`)
        } else
            alert(`Это : ${userQuery} непростое число!`)
    } else
        alert(`Ошибка: ${userQuery}, вы ввели не число!`)
}

simpleNumber()

// 2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
function checkMultiplicity(a, b) {

    return !isNaN(a - b) && a % b === 0
        ? true + ' multiple of ' + (b)
        : false + ' not a multiple of ' + (b);
}

console.log(checkMultiplicity(25, 5)); // true
console.log(checkMultiplicity(15, 3)); // true
console.log(checkMultiplicity(21, 4)); // false
console.log(checkMultiplicity(32, 8)); // true

