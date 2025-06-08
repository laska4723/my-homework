const numbers = [1.1, -2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2, -3];

let positiveCount = 0;
for (let i = numbers.length - 1; i >= 0; i--) {
  const element = numbers[i];

  if (element > 0) {
    if (positiveCount < 3) {
      positiveCount++;
      continue;
    }
  numbers[i] = Math.round(element);
  }
}

console.log(numbers);