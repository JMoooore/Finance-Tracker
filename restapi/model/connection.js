import knex from 'knex';
import knexfile from '../config/knexfile.js';

const db = knex(knexfile);

export default db;
