const num = -2 + Math.floor(Math.random() * 5);
console.log("Число:", num);
if (num > 0) {
    console.log("положительное");
} else if (num < 0) {
    console.log("отрицательное");
} else {
    console.log("null");
}