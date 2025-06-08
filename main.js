const matrix = [
  ['Id', 'Title', 'Description'],
  [1, 'Title-1', 'Description-1'],
  [2, 'Title-2', 'Description-2'],
  [3, 'Title-3', 'Description-3', 'Поле с багом'],
  [4, 'Title-4', 'Description-4'],
  [5, 'Title-5', 'Description-5'],
  [6, 'Title-6', 'Description-6', 'Поле с багом'],
];

for (const row of matrix) {
  console.log(row.join('\t'));
}