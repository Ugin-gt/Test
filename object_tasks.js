// 1.1 создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
const student = {
    name: 'Vasya',
    surname: 'Petrov',
    gender: 'male',
    phoneNumber: '+380985573311'
}
console.log(Object.values(student))

// 1.2 создать объект, который содержит свойства, о факультете и кафедре.

const university = {
    department: 'Mechanical engineering',
    faculty: 'Automotive industry'
}
console.log(Object.values(university))

console.log(Object.assign({}, student, university))
// 2.1 Создать функции-конструкторы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

function Book(avtor, title, yearPublish, publishHouse) {
    this.avtor = avtor
    this.title = title
    this.yearPublish = yearPublish
    this.publishHouse = publishHouse
}

const book1 = new Book('Leo Tolstoy', 'War & Peace', '1869', 'Moscow')

console.log(book1)

function BookElectronic(avtor, title, yearPublish, publishHouse, digitalFormat, bookID) {
    this.avtor = avtor
    this.title = title
    this.yearPublish = yearPublish
    this.publishHouse = publishHouse
    this.digitalFormat = digitalFormat
    this.bookID = bookID
}

const bookEl = new BookElectronic('Leo Tolstoy', 'War & Peace', '1869', 'Moscow', 'pdf', 1235)

console.log(bookEl)

// 3.1* Создать функцию-конструктор которая будет создавать массив (набор проиндексированных значений). У массива должно быть свойство length в котором указано текущее кол-во элементов в нём. У массива должен быть метод по добавлению в него элемента в конец(push), по удалению элемента с конца (pop). Добавление элемента в начало(shift) и удаление элемента с начала(unshift).
//     Методы push и shift принимают неограниченное кол-во аргументов.


// ** Реализовать метод forEach у массива. Метод принимает функцию, которая вызывается для каждого элемента в массиве. Функция принимает сам элемент и его индекс в массиве.
