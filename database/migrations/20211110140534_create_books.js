// @ts-check
/**
 * @param {import("knex")} knex
 */

 const tableName = 'books';
 exports.up = async knex => {
     await knex.schema.createTable(tableName, table => {
        table.increments('id').unsigned().primary();
        table.string('title');
        table.integer('author_id').unsigned().references('id').inTable('authors');
        table.timestamps(false, true);
     });
 };
 
 exports.down = knex => knex.schema.dropTable(tableName);
 