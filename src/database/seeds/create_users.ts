import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('users').insert([
        { name: 'Julia Kimura', user: 'imkimura', password: '585890' },
        { name: 'Elton Tanaka', user: 'chavin', password: '577263' },
    ]);
}