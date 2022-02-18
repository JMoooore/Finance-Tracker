import knex from 'knex';
import knexfile from '../config/knexfile';

const db = knex(knexfile);

export default db;
