import { fakerRU as faker } from '@faker-js/faker';

const arr: string[] = [];

for (let i = 0; i < 10; i++) {
  arr.push(faker.person.firstName());
}

const randomNames: string[] = arr.filter(() => Math.random() > 0.5);

console.log(arr);
console.log();
console.log('Случайные имена:', randomNames);