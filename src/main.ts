type WithId<T> = T & { id: number };

type Person = {
    name: string;
};

const p: WithId<Person> = {
    id: 1,
    name: 'name',
};