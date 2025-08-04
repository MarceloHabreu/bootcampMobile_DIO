import chalk from 'chalk';

const promptSchemaQRCode = [
   {
      name: 'url',
      description: chalk.yellow.bold('Enter your url to generate QR Code'),
   },
   {
      name: 'type',
      description: chalk.yellow.bold('Choose the type of QR Code (1 - NORMAL or 2 - TERMINAL)'),
      pattern: /^[1-2]+$/,
      message: chalk.red.italic('Choose only between 1 and 2'),
      required: true,
   },
];

export default promptSchemaQRCode;
