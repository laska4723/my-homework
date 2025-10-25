/* Палиндром
Напишите функцию, которая получает на вход строку и возвращает true / false - является ли слово палиндромом или нет.

Палиндром - слово, которое в обратную сторону читается так же, как и в обычном порядке. Например "кабак".

 */

const palindrome1 = (str: string): boolean => {
  const reverseStr = str.toLowerCase().split('').reverse().join('');
  return reverseStr === str;
}

const palindrome2 = (str: string): boolean => {
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (lowerStr[i] !== lowerStr[lowerStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome1('кабак'));
console.log(palindrome2('кабак'));