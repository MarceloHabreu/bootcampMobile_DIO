import fastify from 'fastify';
import cors from '@fastify/cors';
const server = fastify({ logger: true });

server.get('/teams', async (request, response) => {
   response.type('application/json').code(200);
   return [{ id: 1, name: 'ferrari' }];
});

server.register(cors, {
   origin: ['*'],
});

const drivers = [
   {
      id: 1,
      name: 'Lewis Hamilton',
      team: { id: 1, name: 'ferrari' },
   },
   {
      id: 2,
      name: 'Max Verstappen',
      team: { id: 1, name: 'ferrari' },
   },
   {
      id: 3,
      name: 'Sergio Perez',
      team: { id: 1, name: 'ferrari' },
   },
];

server.get('/api/drivers', async (request, response) => {
   response.type('application/json').code(200);
   return { drivers };
});

interface DriverParams {
   id: string;
}
server.get<{ Params: DriverParams }>('/api/drivers/:id', async (request, response) => {
   const id = parseInt(request.params.id);
   const driver = drivers.find((d) => d.id === id);

   if (!driver) {
      response.type('application/json').code(404);
      return { message: 'Driver not found' };
   }

   response.type('application/json').code(200);
   return driver;
});

server.listen({ port: 3333 }, () => {
   console.log('Server init');
});
