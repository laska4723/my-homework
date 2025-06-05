let str1 = 'ARCTIC';

console.log(`Первый символ строки: ${str1.charAt(0)}
Последний символ строки: ${str1.charAt(str1.length - 1)}`);

str1 = str1.toLowerCase();

const str2 = str1[0].toUpperCase() + str1.slice(1, -1) + str1[str1.length - 1].toUpperCase();

console.log(str2);