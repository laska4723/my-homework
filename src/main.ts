const array = [
  [2, 3, 8],
  [3, 2, 9],
  [4, 3, 64],
  [8, 3, 512],
  [0, 0, 0]
];

const power = (value: number, n: number) : number => {
  return value ** n;
}

for (const arr of array) {
  const value = arr[0];
  const n = arr[1];
  const expectedResult = arr[2];
  const actual = power(value, n);

  if (actual === expectedResult) {
    console.log(`Верно: ${value}^${n} = ${expectedResult}`);
  } else {
    console.log(`Ошибка: ${value}^${n} !== ${expectedResult}, ожидалось: ${actual}`);
  }
}