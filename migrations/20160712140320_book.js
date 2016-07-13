exports.up = function(knex, Promise) {
    return knex.schema.createTable('book', function(table) {
      table.increments(),
      table.string('title'),
      table.string('genre'),
      table.string('cover_image'),
      table.text('description')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('book_author')
}
