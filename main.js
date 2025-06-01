/*
С помощью цикла отфильтруйте только подходящих по таким критериям людей:
Мужчины старше 18 или женщины старше 20

Пол определяется по значению в поле gender:
* f - female, женщина
* m - man, мужчина

Имена подходящих людей запишите в result, чтобы по итогу работы программы в переменной result было записано следующее:
{
  men: [ 'Александр', 'Дмитрий' ],
  women: [ 'Мария', 'Екатерина', 'Наталья' ]
}
 */

const people = [
    { id: 8, name: 'Александр', gender: 'm', age: 25 },
    { id: 12, name: 'Мария', gender: 'f', age: 22 },
    { id: 31, name: 'Иван', gender: 'm', age: 17 },
    { id: 34, name: 'Ольга', gender: 'f', age: 19 },
    { id: 53, name: 'Дмитрий', gender: 'm', age: 30 },
    { id: 95, name: 'Екатерина', gender: 'f', age: 21 },
    { id: 3, name: 'Сергей', gender: 'm', age: 18 },
    { id: 20, name: 'Анна', gender: 'f', age: 20 },
    { id: 19, name: 'Андрей', gender: 'm', age: 15 },
    { id: 30, name: 'Наталья', gender: 'f', age: 25 },
];

const result = {
    men: [],
    women: [],
};

for (let i = 0; i < people.length; i++) {
    if (people[i].gender === 'm' && people[i].age > 18) {
        result.men.push(people[i].name);
    } else if (people[i].gender === 'f' && people[i].age > 20) {
        result.women.push(people[i].name);
    }
}

console.log(result);
/* Должно вывестись:
{
  men: [ 'Александр', 'Дмитрий' ],
  women: [ 'Мария', 'Екатерина', 'Наталья' ]
}
 */