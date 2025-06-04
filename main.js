const h = 8;

for (let i = 1; i <= h; i++) {
  let space = ' '.repeat(h - i);
  let star = '*'.repeat(i * 2 - 1);
  console.log(space + star);
}