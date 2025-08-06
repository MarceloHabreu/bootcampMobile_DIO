import * as http from 'http';
import { getListEpisodes, getFilterEpisodes } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
   // query string
   // http://localhost:3333/api/podcast/episode?p=flow

   const [baseUrl, queryString] = req.url?.split('?') ?? ['', ''];
   // list podcasts
   if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(req, res);
   }

   // filter
   if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(req, res);
   }
});
