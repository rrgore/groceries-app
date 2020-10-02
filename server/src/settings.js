var dotenv = require('dotenv');
dotenv.config();

var testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
var connectionString = process.env.CONNECTION_STRING;
module.exports = {
    testEnvironmentVariable,
    connectionString
};