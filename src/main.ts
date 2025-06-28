import { blue, green, red } from 'chalk';

const max = 10;
const result = [];
const colors = [red, green, blue];

for (let i = 0; i < max; i++) {
  const color = colors[i % 3];
  result.push(color('*'));
}

console.log(result.join(' - '));