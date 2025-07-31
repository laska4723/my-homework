const generateRandomValue = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getOneRandomItem = <T>(items: T[]): T => {
    const randomIndex = generateRandomValue(0, items.length - 1);
    return items[randomIndex];
};

const getManyRandomItems = <T>(items: T[], count: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < count; i++) {
        result.push(getOneRandomItem(items));
    }
    return result;
};

const getManyRandomItemsV2 = <T>(items: T[], count: number): T[] => {
    if (count >= items.length) return shuffleArray(items);

    const uniqueItems = new Set<T>();
    while (uniqueItems.size < count) {
        uniqueItems.add(getOneRandomItem(items));
    }
    return Array.from(uniqueItems);
};

const shuffleArray = <T>(array: T[]): T[] => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = generateRandomValue(0, i);
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
};

const words = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot'];
const [first, second] = getManyRandomItems(words, 2);
console.log(first.toUpperCase());
console.log(second.toUpperCase());

const numbers = [1, 2, 3, 4, 5, 6];
const [digit] = getManyRandomItems(numbers, 1);
console.log(digit * 100);

const dataV2 = ['a', 'b', 'c', 'd', 'e'];
const uniqV2 = getManyRandomItemsV2(dataV2, 5);
console.log(uniqV2);
console.log(dataV2.length === uniqV2.length);
