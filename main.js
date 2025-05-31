const apples = 1 + Math.floor(Math.random() * 15);
const people = 1 + Math.floor(Math.random() * 15);
console.log(`Яблок: ${apples}
Человек: ${people}
Каждый человек получит по ${Math.floor(apples / people)} яблока
Останется ${apples % people} яблоко`);