let str = 'ARCTIC';
console.log("Первый символ строки: ", str.charAt(0));
console.log("Последний символ строки: ", str.charAt(str.length - 1));
str = str.toLowerCase();
const result = str[0].toUpperCase() + str.slice(1, -1) + str[str.length - 1].toUpperCase();
console.log(result);