import { faker } from '@faker-js/faker';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  birthdate: string;
  gender: string;
  country: string;
  city: string;
  streetAddress: string;
  secondaryAddress: string;
  zipCode: string;
  phone: string;
};

const user: User = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  birthdate: faker.date.birthdate().toLocaleDateString('ru-RU'),
  gender: faker.person.sex(),
  country: faker.location.country(),
  city: faker.location.city(),
  streetAddress: faker.location.streetAddress(),
  secondaryAddress: faker.location.secondaryAddress(),
  zipCode: faker.location.zipCode('#####'),
  phone: faker.phone.number({ style: 'international' }),
};

console.log(user);