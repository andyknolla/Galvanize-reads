var knex = require('./knex')

module.exports = {
  getBooks: function() {
    return knex('book').select()
  },
  addBook: function(body) {
    return knex('book').insert(body)
  },
  getAuthors: function() {
    return knex('author').select()
  }

}
