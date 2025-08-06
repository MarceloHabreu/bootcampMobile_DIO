async function getBaseEmail(senderEmail: string): Promise<string> {
   const base = `Hello bro, I'm ${senderEmail}. I'm here to help you.`;
   return base;
}
export { getBaseEmail };
