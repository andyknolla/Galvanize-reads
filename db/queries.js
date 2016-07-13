var knex = require('./knex')

module.exports = {
  getBooks: function() {
    return knex('book').select()
  },
  addBook: function(body) {
    return knex('book').insert(body)
  }
}
