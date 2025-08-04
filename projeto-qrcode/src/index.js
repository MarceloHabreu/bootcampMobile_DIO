import prompt from 'prompt';
import promptSchemaMain from './prompts-schema/prompt-schema-main.js';
import createQrCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main() {
   prompt.get(promptSchemaMain, async (err, choose) => {
      if (choose.select === '1') {
         await createQrCode();
      }
      if (choose.select === '2') {
         await createPassword();
      }
   });
}

main();
