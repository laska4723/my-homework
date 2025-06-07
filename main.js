const array = [-5, 6, 7, -10, 8, 0, -3, 2];

let positiveCount = 0;
let negativeCount = 0;
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (i === array.length - 2) {
    continue;
  }
  if (element > 0) {
    positiveCount++;
  } else if (element < 0) {
    negativeCount++;
  }
}
console.log(`Количество положительных чисел: ${positiveCount}
Количество отрицательных чисел: ${negativeCount}`);