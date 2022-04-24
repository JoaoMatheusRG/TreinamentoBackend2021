import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const knexFile = require('../../knexfile.cjs');
const knex = require('knex')(knexFile.development);


module.exports = knex;