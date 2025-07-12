const getMissingDigits = (arr: number[]): number[] | null => {
    if (!arr.length) return [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return null;
        }
    }

    const result: number[] = [];
    const min = arr[0];
    const max = arr[arr.length - 1];

    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            result.push(i);
        }
    }

    return result;
};

const result1 = getMissingDigits([1, 2, 3, 5, 8, 10, 11, 13]);

const result2 = getMissingDigits([1, 2, 5, 3]);

const result3 = getMissingDigits([1, 5]);

console.log(result1);
console.log(result2);
console.log(result3);