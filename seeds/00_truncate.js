exports.seed = function(knex, Promise) {
    return knex.raw("TRUNCATE book_author, book, author RESTART IDENTITY CASCADE")
  };
