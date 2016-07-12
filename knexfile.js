// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postres://localhost/g_reads'
  },

  production: {
    client: 'pg',
    connection:
  }
};
