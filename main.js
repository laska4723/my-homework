const classes = Math.round((Math.random() + 1) * 10);
const students = Math.round((Math.random() + 1) * 10);
console.log(`Классов: ${classes}
Учеников: ${students}
Нужно купить парт: ${classes * (Math.floor(students / 2) + students % 2)}`);