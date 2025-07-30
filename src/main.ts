const merge = (a: Record<string, any>, b: Record<string, any>, order: 1 | 2) => {
    if (order === 1) {
        return {
            ...a,
            ...b,
            merged: 'NO!'
        };
    } else {
        return {
            ...b,
            ...a,
            merged: 'YES!'
        };
    }
};

const obj1 = { a: 10, b: 'b', c: 100, child: { name: 'ch', surname: 'hc' } };
const obj2 = { a: 20, b: ['b'], d: 200, child: { aa: 'aa', bb: 'bb' } };

console.log(merge(obj1, obj2, 1));
console.log(merge(obj1, obj2, 2));