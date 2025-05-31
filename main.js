const classes = 30 + Math.floor(Math.random() * 20);
const students = 20 + Math.floor(Math.random() * 10);
console.log(`Классов: ${classes}
Учеников: ${students}
Нужно купить парт: ${classes * Math.ceil(students / 2)}`);