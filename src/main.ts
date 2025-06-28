import { fakerRU as faker } from '@faker-js/faker';

enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

const colorList: Color[] = [
  Color.Red,
  Color.Green,
  Color.Blue,
];

type User = {
  name: string;
  id: string;
  email: string;
  favoriteColor: Color;
};

const users: User[] = [];
for (let i = 0; i < 3; i++) {
  const user: User = {
    name: faker.person.firstName(),
    id: faker.string.uuid(),
    email: faker.internet.email(),
    favoriteColor: colorList[Math.floor(Math.random() * colorList.length)],
  };
  users.push(user)
}

const randomColor = colorList[Math.floor(Math.random() * colorList.length)];

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  if (user.favoriteColor === randomColor) {
    console.log(`name: ${user.name}
ID: ${user.id}
email: ${user.email}
Любимый цвет: ${user.favoriteColor}`);
    console.log();
  }
}