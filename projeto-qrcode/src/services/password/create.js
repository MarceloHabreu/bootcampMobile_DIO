import chalk from 'chalk';
import handle from './handle.js';

async function createPassword() {
   const password = await handle();
   console.log(chalk.green('Password created successfully: \n'));
   console.log(password);
}
export default createPassword;
