const num = 85;

const largestProperDivisor = (value: number): number | null => {
  if (value === 0) {
    return null;
  }

  if (value === 1) {
    return 1;
  }

  let div = Math.floor(value / 2);
  while (div > 0) {
    if (value % div === 0) return div;
    div--;
  }

  return 1;
};

console.log(`Наибольший собственный делитель числа ${num}:`, largestProperDivisor(num));