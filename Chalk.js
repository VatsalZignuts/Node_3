import chalk from 'chalk';

import validator from 'validator';



// console.log(chalk.yellow.underline.inverse("Hello Node!!!"));

// Email Validation
const data = validator.isEmail("vatsalk@zigunts.com");

console.log(data ? chalk.green.inverse(data) : chalk.red.inverse(data));
