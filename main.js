/*
Дан массив из 10 объектов с пользователями.
У каждого пользователя есть имя и возраст.

Подсчитайте и выведите количество различных возрастов.

Вы должны повторить такой вывод:
Возраст=25. Количество людей=3
Возраст=28. Количество людей=2
Возраст=30. Количество людей=3
Возраст=35. Количество людей=1
Возраст=41. Количество людей=1
 */

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'Diana', age: 35 },
  { name: 'Eve', age: 30 },
  { name: 'Frank', age: 28 },
  { name: 'Grace', age: 25 },
  { name: 'Hannah', age: 41 },
  { name: 'Ivy', age: 30 },
  { name: 'Jack', age: 28 },
];

const count = {}; // Подсказка

// Ваш код здесь ...
for (const user of users) {
  if (count[user.age] === undefined) {
    count[user.age] = 0;
  }
  count[user.age]++;
}

for (const key in count) {
  console.log(`Возраст=${key}. Количество людей=${count[key]}`);
}