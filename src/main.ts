const deduplicate = (str: string): string => {
    return str.split('').reduce((acc, char) => {
        const lastChar = acc[acc.length - 1];
        return char === lastChar ? acc : acc + char;
    }, '');
};

const result = deduplicate('uuunbbeliaaaaveeabbbblllllee');

console.log(result);