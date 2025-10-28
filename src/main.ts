/* Дедубликация
Напишите функцию, которая удаляет повторения символов из строки, сохраняя порядок.
Для решения используйте reduce.

const result = deduplicate('uuunbbeliaaaaveeabbbblllllee');
console.log(result); // unbeliaveable
*/

const deduplicate = (str: string): string => {
  let result: string = '';
  for (const char of str) {
    if (char !== result[result.length - 1]) {
      result += char;
    }
  }
  return result;
}

const result = deduplicate('uuunbbeliaaaaveeabbbblllllee');
console.log(result); // unbeliaveable