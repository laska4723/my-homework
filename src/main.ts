const countTypes = (...args: any[]) => {
    return args.reduce((acc, item) => {
        const type = typeof item;
        if (acc[type]) {
            acc[type] += 1;
        } else {
            acc[type] = 1;
        }
        return acc;
    }, {});
};

const func = () => {};

const result = countTypes(3, true, 'a', 1, {}, () => {}, 4, [], undefined, false, 0, undefined, func, {}, '');

console.log(result);