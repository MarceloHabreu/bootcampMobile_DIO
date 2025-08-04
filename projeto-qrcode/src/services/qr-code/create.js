import promptSchemaQRCode from '../../prompts-schema/prompt-schema-qrcode.js';
import prompt from 'prompt';
import handle from './handle.js';

async function createQrCode() {
   prompt.get(promptSchemaQRCode, handle);
   prompt.start();
}
export default createQrCode;
