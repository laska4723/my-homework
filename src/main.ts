import { green, red } from 'chalk';

const tests = [
  ['топот', true],
  ['пот', false],
  ['потоп', true],
  ['кабак', true],
  ['(())', false],
  ['табат', true],
  ['abab', false],
  ['топпот', true],
  ['()()', false],
  ['', true],
  ['123321', true],
  ['())(', true],
  ['abba', true],
  ['а роза упала на лапу азора', false], // Пробелы не совпадают!
] as const;

for (const test of tests) {
  const [word, expected] = test;

const isPalindrome = (word: string) => {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

  const result = isPalindrome(word);
  if (result !== expected) {
    console.log(red(`Для слова "${word}" тест не прошел. Ожидалось: ${expected} | Получено: ${result}`));
    continue;
  }

  console.log(green(`Слово "${word}" успешно. Результат: ${result}`));
}