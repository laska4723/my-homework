const person = {
  name: 'Sergei',
  surname: 'Petrov',
  phone: '+998 901752397',
  email: 'otvertka1337@mail.ru',
  telegram: 'https://t.me/seregakot647',
  city: 'Moscow'
}

let array1 = [];
let array2 = [];

for (let key in person) {
  array1.push(key);
  array2.push(person[key]);
}

console.log("Ключи объекта:", array1);
console.log('');
console.log("Значения объекта:", array2);