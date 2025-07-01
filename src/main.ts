import { faker } from '@faker-js/faker';

const storage = [];

for (let i = 0; i < 10; i++) {
  storage.push({
    age: 1 + Math.floor(Math.random() * 100),
    name: faker.person.firstName(),
  });
}

const person = storage.find(item => {
  return item.age > 10;
});

console.log(person);