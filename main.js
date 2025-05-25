const apples = Math.round((Math.random() + 1) * 7.5);
const people = Math.round((Math.random() + 1) * 7.5);
console.log(`Яблок: ${apples}
Человек: ${people}
Каждый человек получит по ${Math.floor(apples / people)} яблока
Останется ${apples % people} яблоко`);