import { Request, Response } from 'express';
import knex from '../database/connection';

class StudentsController {
    async index(req: Request, res: Response) {
        const students = await knex('students');

        const studentsSerialize = students.map(student => {
            return {
                id: student.id,
                name: student.name,
                course: student.course,
                semester: student.semester,
                ra: student.ra,
                cpf: student.cpf,
                city: student.city
            };
        });

        return res.json(studentsSerialize).status(200);
    }

    async show(req: Request, res: Response) {
        const {id} = req.params;

        if (!id) {
            return res.json({'message': 'Invalid request.'}).status(400);
        }

        const student = await knex('students').where({id}).first();

        if (!student) {
            return res.status(404).json({
                message: 'Student Not Found!'
            });
        }

        return res.json(student).status(200);
    }

    async store(req: Request, res: Response) {
        const data = req.body;

        if (!data.name || !data.cpf || !data.ra) {
            return res.json({'message': 'Invalid request.'}).status(400);
        }

        try {
            const [id] = await knex('students').insert(data);
    
            return res.json({
                    created: id,
                    message: 'Student created with success!',
                    status: 201
                }).status(201);
        } catch (err) {
            return res.json({
                message: "Error updating new post",
                error: err
            }).status(500);
        }
    }

    async update(req: Request, res: Response) {
        const {id} = req.params;

        const changes = req.body;

        if (!id) {
            return res.json({'message': 'Invalid request.'}).status(400);
        }
        try {
            const response = await knex('students').update(changes).where({id});

            if (!response) return res.json({message: 'Record not found'}).status(404);

            return res.json({
                updated: id,
                message: 'Student updated with success!',
                status: 200
            }).status(200);
        } catch (err) {
            return res.json({
                message: "Error updating new post",
                error: err
            }).status(500);
        }
    }

    async delete(req: Request, res: Response) {
        const {id} = req.params;

        if (!id) return res.json({'message': 'Invalid request.'}).status(400);

        try {
            const response = await knex('students').delete().where({id});
    
            if (!response) {
                return res.json({message: 'Record not found'}).status(404);    
            }
    
            return res.json({
                deleted: id,
                message: 'Student deleted with success!',
                status: 200
            }).status(200);
        } catch (err) {
            return res.json({
                message: "Error updating new post",
                error: err
            }).status(500);
        }
    }
}

export default StudentsController;