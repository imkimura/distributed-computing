import express from 'express';

import StudentsController from './controllers/StudentsController';

const routes = express.Router();

const studentsController = new StudentsController();

routes.get('/students', studentsController.index);
routes.post('/students', studentsController.store);
routes.get('/students/:id', studentsController.show);
routes.put('/students/:id', studentsController.update);
routes.delete('/students/:id', studentsController.delete);


export default routes;