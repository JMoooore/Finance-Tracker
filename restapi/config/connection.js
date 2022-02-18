import 'dotenv/config';

const connection = {};

connection.string = process.env.DATABASE_CONNECTION_STRING;
connection.object = {
host: process.env.DATABASE_HOST,
database: process.env.DATABASE_NAME,
user: process.env.DATABASE_USER,
password: process.env.DATABASE_PASS,
port: process.env.DATABASE_PORT,
};

export default connection;
