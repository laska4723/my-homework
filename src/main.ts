const getLongestString = (arr: string[]): string => {
    return arr.reduce((a, b) => a.length > b.length ? a : b);
}

const words: string[] = ['ноутбук', 'кресло', 'сумка', 'ключ'];
console.log(getLongestString(words));