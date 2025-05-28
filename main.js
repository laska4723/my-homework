const num = Math.round(Math.random() * -2) + Math.round(Math.random() * 2);
console.log("Число:", num);
if (num > 0) {
    console.log("положительное");
} else if (num < 0) {
    console.log("отрицательное");
} else {
    console.log("null");
}