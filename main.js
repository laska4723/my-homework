const person1 = {name: 'Sergei', surname: 'Petrov'};

person1.dateOfBirth = '31-12-1995';
person1['>:-)'] = 'devil';

delete person1.dateOfBirth;
delete person1['>:-)'];

person1.contact = {phone: '+998 901752397', email: 'otvertka1337@mail.ru'};
person1.contact.telegram = 'https://t.me/seregakot457';
person1.contact.telegram = 'https://t.me/seregakot647';

const locationType = 'city';
const city1 = 'Moscow';
person1[locationType] = city1;

const name = 'Sergei';
const surname = 'Ivanov';
const dateOfBirth = '01-01-2000';
const city2 = 'Saint-Petersburg';

const person2 = {name, surname, dateOfBirth, city2};

console.log(person1);
console.log(' ');
console.log(person2);

debugger