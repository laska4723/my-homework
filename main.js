const vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
const word = 'Флюгегехаймен';

const wordLower = word.toLowerCase();

let vowelCount= 0;
for (const letter of wordLower) {
  if (vowels.includes(letter)) vowelCount++;
}

const consonantCount = word.length - vowelCount;

console.log(`Количество гласных букв: ${vowelCount}
Количество согласных букв: ${consonantCount}`);