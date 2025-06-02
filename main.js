let num1;
let num2;
let count = 0;
do {
    count++;
    num1 = 1 + Math.floor(Math.random() * 6);
    num2 = 1 + Math.floor(Math.random() * 6);
} while (num1 !== num2);

console.log(`Выпал дубль: ${num1} ${num2}
Количество попыток: ${count}`);