/* Сумма элементов массива
Напишите функцию, которая получает на вход массив чисел и возвращает их сумму.
Для решения используйте reduce.
*/

const sumArray = (arr: number[]): number => {
  return arr.reduce((sum, current) => sum += current);
}

// Пример:
const arr = [2, 5, 7, 4, 8];
console.log(sumArray(arr)); // 26