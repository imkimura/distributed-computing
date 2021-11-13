import express, { Request, Response } from 'express';

import StudentsController from './controllers/StudentsController';

const routes = express.Router();

const studentsController = new StudentsController();

routes.get('/students', studentsController.index);
routes.post('/students', studentsController.store);
routes.get('/students/:id', studentsController.show);
routes.put('/students/:id', studentsController.update);
routes.delete('/students/:id', studentsController.delete);

routes.get('/', (req: Request, res: Response) => {
    const response = {
        'Authors': [
            {
                name: 'Julia Kimura Silva',
                ra: '585890',
            },
            {
                name: 'Elton Tanaka Haruji',
                ra: '577261',
            },
            {
                name: 'João Victor de Oliveira Andrade',
                ra: '582141',
            },
            {
                name: 'João Daum',
                ra: '581941',
            },
            {
                name: 'Wangner Mafra',
                ra: '583154',
            }
        ]
    };

    return res.json(response).status(200);
})

export default routes;