type Person = {
    name: string;
    age: number;
    nickname: string;
    photo: string;
};

type First = Partial<Omit<Person, 'nickname'>>;
type Second = Readonly<Required<Pick<Person, 'nickname' | 'photo'>>>;
