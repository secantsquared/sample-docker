// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: 'postgres',
      host: 'postgres',
      port: 5432
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
