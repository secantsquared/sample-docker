const dbEnvironment = 'development';

const config = require('../knexfile')[dbEnvironment];

module.exports = require('knex')(config);
