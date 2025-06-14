import { red, green, blue } from 'chalk';

const max = 10;
let result = '';

for (let i = 0; i < max; i++) {
  const n = i % 3;

  switch (n) {
    case 0:
      result += red('*');
      break;

    case 1:
      result += green('*');
      break;

    case 2:
      result += blue('*');
      break;
  }

  if (i !== max - 1) {
    result += ' - ';
  }
}

console.log(result);