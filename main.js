const h = 8;

for (let i = 1; i <= h; i++) {
  const space = ' '.repeat(h - i);
  const star = '*'.repeat(i * 2 - 1);

  console.log(space + star);
}