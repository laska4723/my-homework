/* Дедубликация
Напишите функцию, которая удаляет повторения символов из строки, сохраняя порядок.
Для решения используйте reduce.

const result = deduplicate('uuunbbeliaaaaveeabbbblllllee');
console.log(result); // unbeliaveable
*/

const deduplicate = (str: string): string => {
  return str.split('').reduce((result, char) => {
    if (char !== result[result.length - 1]) {
      result += char;
    }
    return result;
  }, '');
};

const result = deduplicate('uuunbbeliaaaaveeabbbblllllee');
console.log(result); // unbeliaveable
