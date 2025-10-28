/* Самая длинная строка в массиве
Напишите функцию, которая получает на вход массив строк и возвращает самую длинную строку из массива.
Для решения используйте reduce.
*/

const longestString = (arr: string[]): string => {
  return arr.reduce((longest, current) =>
      current.length > longest.length ? current : longest
    , "");
}

// Пример:
const strings = ["apple", "banana", "kiwi", "pineapple", "orange"];
console.log(longestString(strings)); // "pineapple"
