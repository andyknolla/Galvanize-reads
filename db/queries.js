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
  },
  addAuthor: function(body) {
    return knex('author').insert(body)
  }

  // booksWithAuthors: function() {
  //   return knex('book').where(id
  // }

}
