// 1.1 создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
const student = {
    name: 'Vasya',
    surname: 'Petrov',
    gender: 'male',
    phoneNumber: '+380985573311'
}
console.log(student)

// 1.2 создать объект, который содержит свойства, о факультете и кафедре.

const university = {
    department: 'Mechanical engineering',
    faculty: 'Automotive industry'
}
console.log(university)

console.log(Object.assign({}, student, university))

// 2.1 Создать функции-конструкторы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

class Book {
    constructor(avtor, title, yearPublish, publishHouse) {
        this.avtor = avtor
        this.title = title
        this.yearPublish = yearPublish
        this.publishHouse = publishHouse
    }
}

const book1 = new Book('Leo Tolstoy', 'War & Peace', '1869', 'Moscow')

console.log(book1)

class BookElectronic extends Book {
    constructor(avtor, title, yearPublish, publishHouse, digitalFormat, bookID) {
        super(avtor, title, yearPublish, publishHouse)
        this.digitalFormat = digitalFormat
        this.bookID = bookID
    }
}

const bookEl = new BookElectronic('Leo Tolstoy', 'War & Peace', '1869',
    'Moscow', 'pdf', 1235)

console.log(bookEl)

// 3.1* Создать функцию-конструктор которая будет создавать массив (набор проиндексированных значений).
// У массива должно быть свойство length в котором указано текущее кол-во элементов в нём.
// У массива должен быть метод по добавлению в него элемента в конец(push), по удалению элемента с конца (pop).
// Добавление элемента в начало(shift) и удаление элемента с начала(unshift).
//     Методы push и shift принимают неограниченное кол-во аргументов.
/* Реализовать метод forEach у массива. Метод принимает функцию, которая вызывается для каждого элемента в массиве.
 Функция принимает сам элемент и его индекс в массиве.
*/

function MyArray() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
        this.push(arguments[i]);
    }
}


MyArray.prototype = new MyArrayProto();

function MyArrayProto() {

    this.push = function push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            ++this.length;
        }
        return this.length;
    };

    this.pop = function pop() {
        if (this.length <= 0) {
            return;
        }
        let lastObj = this[this.length - 1];
        --this.length;
        return lastObj;
    };

    this.shift = function shift() {
        if (this.length > 0) {
            let firstObj = this[0];
            for (let i = 0; i < this.length; i++) {
                this[i] = this[i + 1];
            }
            --this.length;
            return firstObj;
        }
    };

    this.unshift = function unshift(...args) {
        // args.length > 0 ? console.log(this.length += args.length) : typeof Error(`Недопустимый ввод`);

        for (let i = (this.length + args.length - 1); i >= args.length; i--) {
            this[i] = this[--this.length];
        }
        for (let i = 0; i < args.length; i++) {
            this[i] = args[i];
        }
    };

    this.reverse = function reverse() {
        const copy = new MyArray();
        for (let i = 0; i < this.length; i++) {
            copy.push(this[i]);
        }
        for (let i = 0; i < this.length; i++) {
            this[i] = copy.pop();
        }
    };
    this.forEach = function forEach(cb) {
        for (let i = 0; i < this.length; i++) {
            cb(this[i], i, this);
        }
    };
}

const arr = [1123, 124, 12467, 3, 6, 8545, 8685, 34, 46, 34257, 4];
const sortArray = [1, 2, 3, 4, 5, 13, 15, 20, 25, 27];

const userArray = new MyArray(arr);

console.log(userArray);


