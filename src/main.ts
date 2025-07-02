const obj1 = { a: 12, b: 5, c: 8, d: 9, e: 14 };

const sumObjectValues = (obj: { [key: string]: number }): number => {
  let sum = 0;
  for (const key in obj) {
    sum += obj[key];
  }
  return sum;
};

console.log(sumObjectValues(obj1));