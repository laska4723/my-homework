import chalk from 'chalk';

console.log(chalk.bgBlue.grey(new Date().toISOString()));
console.log(chalk.bgBlack.green(new Date().toISOString()));
console.log(chalk.bgGray.red(new Date().toISOString()));
console.log(chalk.bgGreen.blue(new Date().toISOString()));