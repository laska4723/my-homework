type User = {
  name: string;
  age: number;
};

let users: User[] = [
  { name: 'Пользователь-1', age: 1 },
  { name: 'Пользователь-21', age: 21 },
  { name: 'Пользователь-30', age: 30 },
  { name: 'Пользователь-14', age: 14 },
  { name: 'Пользователь-18', age: 18 },
  { name: 'Пользователь--1', age: -1 },
  { name: 'Пользователь-1', age: 1 },
];

// ... Ваш код ...
users = users.filter(user => user.age >= 18);

console.log(users);
/* Ожидаемый вывод:
[
  { name: 'Пользователь-21', age: 21 },
  { name: 'Пользователь-30', age: 30 },
  { name: 'Пользователь-18', age: 18 },
]
 */