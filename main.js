const num = 1980 + 10 * Math.floor(Math.random() * 15);
console.log(num);
console.log(`год ${(num % 400 === 0) || (num % 4 === 0 && num % 100 !== 0) ? "" : "не "}високосный`);