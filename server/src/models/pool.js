var { Pool } = require('pg');
var dotenv = require('dotenv');
var { _, connectionString } = require('../settings');
dotenv.config();

var pool = new Pool({ connectionString });

module.exports = pool;