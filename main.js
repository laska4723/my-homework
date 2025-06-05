/*
Вам даны 4 человека и яблоки.
Яблоки должны быть разделены поровну между всеми людьми.
Яблоки делятся только нацело, то есть разделить одно яблоко между несколькими людьми нельзя!

У каждого человека есть:
* Имя
* Желаемое количество яблок, при котором человека наестся и будет счастливым

Добавьте в каждого человека поля:
* eaten - количество яблок, которое досталось человеку
* isHappy - счастлив ли человек, съел ли он требуемое количество яблок (если съел даже больше - тоже счастлив)

Распределите людей по двум массивам - счастливые отдельно, несчастливые отдельно.

Для решения задачи используйте один цикл for of
 */
const mary = {
  name: 'Mary',
  wantApples: 2,
};

const alex = {
  name: 'Alex',
  wantApples: 1,
};

const mike = {
  name: 'Mike',
  wantApples: 5,
};

const brown = {
  name: 'Brown',
  wantApples: 4,
};

const people = [mary, alex, mike, brown];
const apples = 11;

// Ваш код здесь ...
const applesForEachPerson = Math.floor(apples / people.length);
const happy = [];
const notHappy = [];

for (let person of people) {
  person.eaten = applesForEachPerson;
  person.isHappy = applesForEachPerson >= person.wantApples;

  if (person.isHappy) happy.push(person);
  else notHappy.push(person);
}

console.log(happy);
/* Довольные:
[
  { name: 'Mary', wantApples: 2, isHappy: true, eaten: 2 },
  { name: 'Alex', wantApples: 1, isHappy: true, eaten: 2 }
]
 */

console.log('')

console.log(notHappy);
/* Недовольные:
[
  { name: 'Mike', wantApples: 5, isHappy: false, eaten: 2 },
  { name: 'Brown', wantApples: 4, isHappy: false, eaten: 2 }
]
 */