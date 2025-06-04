const numbers1 = [1.1 , 2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2, -3];

let positiveIndices = [];
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] > 0) positiveIndices.push(i);
}

const excludeIndices = positiveIndices.slice(-3);

let result = [];
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] > 0 && !excludeIndices.includes(i)) {
    result.push(Math.round(numbers1[i]));
  } else result.push(numbers1[i]);
}

console.log(result);