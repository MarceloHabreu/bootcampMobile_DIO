import * as http from 'http';
import { app } from './app';

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
   app;
});

const port = process.env.PORT;
server.listen(port, () => {
   console.log(`Server started on port ${port}`);
});
