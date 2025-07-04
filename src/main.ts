const num = 1;

const largestProperDivisor = (value: number): number | null => {
  if (value === 0) {
    return null;
  }

  const absValue = Math.abs(value);
  for (let div = Math.floor(absValue / 2); div > 0; div--) {
    if (absValue % div === 0) {
      return div;
    }
  }

  return 1;
};

console.log(`Наибольший собственный делитель числа ${num}:`, largestProperDivisor(num));