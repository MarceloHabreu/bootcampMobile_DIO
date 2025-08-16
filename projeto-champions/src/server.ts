import dotenv from 'dotenv';
import createApp from './app';

const app = createApp();
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
