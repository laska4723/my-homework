import { fakerRU as faker } from '@faker-js/faker';
import { transliterate } from 'transliteration';

type Person = {
  name: string;
  age: number;
};

const people: Person[] = [];
for (let i = 0; i < 10; i++) {
  people.push({
    name: faker.person.firstName(),
    age: faker.number.int({ min: 18, max: 80 })
  });
}

const findStasAge = (arr: Person[]): number | string => {
  for (const person of arr) {
    const nameInLatin = transliterate(person.name);
    if (nameInLatin === 'Stas') {
      if (person.age === null || person.age === undefined) {
        return 'Возраста нет';
      } else {
        return person.age;
      }
    }
  }
  return 'Объект не найден';
}

console.log(people);
console.log();
console.log('Результат:', findStasAge(people));