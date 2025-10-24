/* Скобки
Напишите функцию, которая принимает на вход строку, состоящую из открывающихся и закрывающихся скобок,
и возвращает true или false - правильный ли порядок открытия и закрытия скобок.
Правильным порядком считается ситуация, когда скобки закрываются в таком же порядке, в котором и открывались.
Подсказка: Это идеальная ситуация, чтобы применить структуру данных Стек (Stack), она сделает за вас 80% задачи.

console.log(check('()')); // true
console.log(check('({})')); // true
console.log(check('({[({()})]})')); // true
console.log(check('(){}([])[[[]]]{}()')); // true

console.log(check('(({})')); // false
console.log(check('({}))')); // false
console.log(check('([})')); // false
console.log(check(')(')); // false
console.log(check(')(}][{')); // false
 */

const check = (text: string): boolean => {
  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];

  const opened: string[] = [];

  for (const bracket of text) {

    if (openingBrackets.includes(bracket)) {
      opened.push(bracket);
      continue;
    }

    const closedIndex = closingBrackets.indexOf(bracket);
    if (closedIndex !== -1) {
      const lastOpened = opened.pop();
      const expectedOpened = openingBrackets[closedIndex];

      if (lastOpened !== expectedOpened) {
        return false;
      }
    }
  }

  return opened.length === 0;
};

console.log(check('()')); // true
console.log(check('({})')); // true
console.log(check('({[({()})]})')); // true
console.log(check('(){}([])[[[]]]{}()')); // true

console.log(check('(({})')); // false
console.log(check('({}))')); // false
console.log(check('([})')); // false
console.log(check(')(')); // false
console.log(check(')(}][{')); // false