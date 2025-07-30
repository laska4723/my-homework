const storage = [
    'nick',
    'nack',
    'nock',
    [
        {
            first: 'forecast',
            child: null,
        },
        {
            first: 'castfore',
            child: null,
        },
        'zzz',
    ],
    'no-1',
    'no-2',
] as const;

const [ , , , [b0, b1, cos0], ...nos ] = storage;
const cos = [cos0];

console.log(nos);
console.log(cos);
console.log(b1);