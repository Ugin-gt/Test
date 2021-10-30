/*
* 1)Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».
строки - итерируемые.
* */

/*for;while;do-while*/


function countVowels(string) {
    let counter = 0;

    for (let i = 0; i < string.length; i++) {
        const currentLetter = string[i];
        if (
            currentLetter === 'a'
            || currentLetter === 'e'
            || currentLetter === 'i'
            || currentLetter === 'o'
            || currentLetter === 'u'
        ) {
            counter++;
        }
    }
    return counter;
}

console.log(countVowels('Lorem ipsum dolor sit amet, consectetur adipiadosicing elit.')) // 20
console.log(countVowels('word')) // 1
console.log(countVowels('tst')) // 0

/*
* Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
* */


function fizzBuzz(n) {
    for (let i = 1; i < n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('fizzbuzz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(5)


// HOME TASKS

// 1)  Найти сумму чисел в пределах от 1 до n

function sumCalculation(n) {
    let count = 0
    if (!isNaN(n)) {
        for (let i = 0; i <= n; i++)
            count += i
        console.log(`The total sum of the numbers ${n} is ${count}`)
    } else
        console.log(`Ошибка: ${n}, вы ввели не число!`)

}

sumCalculation('afsd')

// 2) Вывод чисел от 10 до 50, которые кратны 5

function multiplicityNum(a, b, m) {
    if (!isNaN(a - b - m)) {
        for (let i = a; i <= b; i++) {
            if (i % m === 0) console.log(i)
        }
    } else
        console.log(`Ошибка: вы ввели не число!`)
}

multiplicityNum(10, 50, 5)

// 3) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

// let a = 2
// let b = 2
// let c = 2
// const solution = a + b * c
//
// function userResolve() {
//     for (let i = 0; i !== solution;) {
//         const userQuery = +prompt(`Решите выражение: ${a} + ${b} * ${c} = ? `)
//         if (!isNaN(userQuery)) {
//             if (userQuery === solution) {
//                 alert(`Ваш ответ: ${userQuery} верный!`)
//                 break
//             }
//             alert(`Ваш ответ: ${userQuery} неверный!`)
//         } else
//             alert(`Ошибка: ${userQuery}, вы ввели не число!`)
//     }
// }
//
// userResolve()

// 4) Создайте функцию avg(a,b,c,d) , которая будет находить среднее значение по всем своим аргументам.

const arrayAvg = [5, 6, 7, 12]

function avg(array) {
    let sumArr = 0
    for (let i = 0; i < array.length; i++) {
        sumArr += array[i]
    }
    return sumArr / array.length
}

console.log(avg(arrayAvg))

// 5) isPangram. Панграмма — фраза, содержащая в себе все буквы алфавита

function isPangram(text) {
    const alphabetEng = 'abcdefghijklmnopqrstuvwxyz'
    const lowerText = text.toLowerCase()

    let result;
    for (let i = 0; i < alphabetEng.length; i++) {
        result = lowerText.includes(alphabetEng[i])
    }
    return result
}

console.log(isPangram('sample text')) // false
console.log(isPangram('Pack my box with five dozen liquor jugs')) // true
console.log(isPangram('The quick brown fox jumps over the lazy dog')) // true