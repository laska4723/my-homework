type User = { name: string; photo?: string | null };

const users: User[] = [
  { name: 'Artem' },
  { name: 'Kostya', photo: null },
  { name: 'Elena', photo: '' },
  { name: 'Alex', photo: 'https://photos.com/Alex.png' },
];

for (const user of users) {
  console.log((user.photo ?? 'не обнаружено') || 'пусто');
}