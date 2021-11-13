import { Request, Response } from 'express';
import knex from '../database/connection';

class UsersController {
    async index(req: Request, res: Response) {
        const users = await knex('users').select('*');

        const serializedusers = users.map(item => {
            return {
                id: item.id,
                name: item.name,
                user: item.user,
            };
        });

        return res.json(serializedusers);
    }
}

export default UsersController;