type Paginated<T> = {
    total: number;
    limit: number;
    offset: number;
    items: T[];
};

type Person = {
    name: string;
};

const responseOfPersons: Paginated<Person> = {
    total: 10,
    limit: 5,
    offset: 0,
    items: [{ name: 'P1' }],
};

const responseOfSomething: Paginated<{}> = {
    total: 10,
    limit: 5,
    offset: 0,
    items: [],
};