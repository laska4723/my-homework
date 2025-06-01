const array = [-8, 6, 7, -10, 8, 0, -3, 9];

let min = array[0];
let max = array[0];
let sum = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
    if (array[i] > max) {
        max = array[i];
    }
    sum += array[i];
}

const avg = sum / array.length;

console.log(`Минимальное число: ${min}
Максимальное число: ${max}
Среднее между всеми значениями: ${avg}`);