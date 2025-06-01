let num1 = 1 + Math.floor(Math.random() * 6);
let num2 = 1 + Math.floor(Math.random() * 6);

let count = 1;
while (num1 !== num2) {
    num1 = 1 + Math.floor(Math.random() * 6);
    num2 = 1 + Math.floor(Math.random() * 6);
    count++;
}

console.log(`Выпал дубль: ${num1} ${num2}
Количество попыток: ${count}`);