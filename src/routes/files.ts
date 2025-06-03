import { FastifyInstance } from 'fastify';

import FilesController from '@/controllers/filesController';

const filesController = new FilesController();

export default async (app: FastifyInstance) => {
  app.post('/create',  filesController.create);
  app.get('/list',  filesController.list);
  app.put('/update/:id',  filesController.update);
  app.delete('/delete/:id', filesController.delete);
};
