const num = Math.floor(Math.random() * ((2120 - 1980) / 10 + 1)) * 10 + 1980;
console.log(num);
console.log(`год ${(num % 400 === 0) || (num % 4 === 0 && num % 100 !== 0) ? "" : "не "}високосный`);