import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('students').insert([
        { name: 'Julia Kimura', cpf: 12345678912, ra: 585890 },
        { name: 'Elton Tanaka', cpf: 11133322244, ra: 577261 },
    ]);
}