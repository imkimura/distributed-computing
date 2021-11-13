import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('students', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('course').nullable();
        table.integer('semester').nullable();
        table.integer('ra').notNullable();
        table.integer('cpf').notNullable();
        table.string('city').nullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('students');
}