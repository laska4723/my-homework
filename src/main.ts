import { faker } from '@faker-js/faker';

const parse = <T>(json: string): T => JSON.parse(json);

type User = {
    id: number;
    name: string;
};

const user: User = {
    id: faker.number.int(),
    name: faker.person.fullName(),
};

const userString = JSON.stringify(user);

const parsedUser = parse<User>(userString);

console.log(parsedUser.name);