const storage = [
    { age: 10, name: 'Alex' },
    { age: 20, name: 'Max' },
    { age: 30, name: 'Jake' },
    { age: 40, name: 'Lilo' },
];

const smartSearch = (arr: any[], property: any, value: any) => {
    // ... Ваш код здесь
    return arr.find(el => el[property] === value);
};

const person1 = smartSearch(storage, 'age', 30);
// { age: 30, name: 'Jake' }

const person2 = smartSearch(storage, 'age', 10);
// { age: 10, name: 'Alex' }

const person3 = smartSearch(storage, 'name', 'Lilo');
// { age: 40, name: 'Lilo' }

console.log(person1);
console.log(person2);
console.log(person3);