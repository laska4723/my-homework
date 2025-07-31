const getValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};

const g = { a: 1, b: '', c: true };
const typeTest1: number = getValue(g, 'a');
const typeTest2: string = getValue(g, 'b');
const typeTest3: boolean = getValue(g, 'c');

const a = { id: 1, name: 's' };

console.log(getValue(a, 'id')); // 1
console.log(getValue(a, 'name')); // s
// console.log(getValue(a, 'key')); // Ошибка! Ключа key нет в { id: number, name: string };

// console.log(getValue({}, 'age')); // Ошибка! Ключа age нет в {}

const b = { email: 'ex' };
console.log(getValue(b, 'email')); // ex
// console.log(getValue(b, '')); // Ошибка! Ключа '' нет в { email: string }

console.log(getValue({ ...a, x: 10 }, 'x')); // 10
console.log(getValue({ ...a, x: 10 }, 'name')); // s
console.log(getValue({ ...a, x: 10 }, 'id')); // 1
// console.log(getValue({ ...a, x: 10 }, 's')); // Ошибка! Ключа s нет в { id: number, name: string, x: number }

console.log(getValue({ ...b, ...a }, 'email')); // ex

const checkNumber: number = getValue({ age: 1 }, 'age');
const checkBoolean: boolean = getValue({ a: true }, 'a');
const checkNull: null = getValue({ x: null }, 'x');

console.log(getValue({ a: 'str' }, 'a').toUpperCase()); // STR
console.log(getValue({ a: 10 }, 'a') ** 2); // 100
