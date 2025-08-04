import qr from 'qrcode-terminal';
import chalk from 'chalk';
async function handle(err, result) {
   if (err) {
      console.log('error on application: ', err);
      return;
   }
   const isSmall = result.type === 2;
   qr.generate(result.url, { small: isSmall }, (qrcode) => {
      console.log(chalk.green('QR Code generated successfully: \n'));
      console.log(qrcode);
   });
}

export default handle;
