exports.seed = function(knex, Promise) {
    return Promise.all([
        // Inserts seed entries
        knex('book_author').insert({
            book_id: 1,
            author_id: 1
        }),
        knex('book_author').insert({
            book_id: 1,
            author_id: 2
        }),
        knex('book_author').insert({
            book_id: 2,
            author_id: 1
        })
    ])
}
