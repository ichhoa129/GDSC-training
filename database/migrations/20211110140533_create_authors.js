// @ts-check
/**
 * @param {import("knex")} knex
 */

 const tableName = 'authors';
 exports.up = async knex => {
     await knex.schema.createTable(tableName, table => {
         table.increments('id').unsigned().primary();
         table.string('name');
         table.string('address');
         table.timestamps(false, true);
     });
 };
 
 exports.down = knex => knex.schema.dropTable(tableName);
 