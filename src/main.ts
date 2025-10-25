/* Палиндром Число
Напишите функцию, которая получает на вход 2 числа и возвращает true / false - является читаются ли эти числа наоборот.
Конвертировать число в строку запрещено! Работайте с входными данными именно как с числом! Например:

f(123, 321) // true, 123 это 321 наоборот
f(22, 22) // true, 22 это 22 наоборот
f(56, 56) // false, 56 наоборот это НЕ 56
*/

function palindromeNum (a: number, b: number): boolean {
  let originalNum = a;
  let reversedNum = 0;

  while (originalNum > 0) {
    let num = originalNum % 10;
    reversedNum = reversedNum * 10 + num;
    originalNum = Math.floor(originalNum / 10);
  }

  return reversedNum === b;
}

console.log(palindromeNum(123, 321)); // true
console.log(palindromeNum(22, 22));   // true
console.log(palindromeNum(56, 56));   // false