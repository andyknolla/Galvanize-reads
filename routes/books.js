var express = require('express')
var router = express.Router()
var pg = require('pg')
var knex = require('../db/knex')
var queries = require('../db/queries')

router.get('/', function(req, res, next) {
    queries.getBooks().then(function(data) {
        res.render('books', {
            books: data,

        })
    })
});

// Add a book
router.post('/add_book', function(req, res, next) {
        console.log('book add post route hits');
        queries.addBook(req.body).then(function(data) {
            res.redirect('/books')
        })
    })
    // Delete a book
router.get('/delete_book/:id', function(req, res, next) {
        console.log('delete route hits');
        queries.getBooks().where({
            'id': req.params.id
        }).del().then(function() {
            res.redirect('/books')
        })
    })
    // Book Details
router.get('/book_detail/:id', function(req, res, next) {
    console.log('book detail route hits')
    knex('book').where({
            'book.id': req.params.id
        }).select(
            'book.title',
            'book.genre',
            'book.cover_image',
            'book.description',
            'author.id as authorId',
            'author.first_name',
            'author.last_name'
        )
        .leftJoin('book_author', 'book.id', '=', 'book_id')
        .rightJoin('author', 'author.id', '=', 'author_id')
        .then(function(data) {
            console.log('book detail data : ',data);
            res.render('book_detail', {
                book: data[0],
                authors: data
            })
        })
})

// Edit a book
router.get('/edit_book/:id', function(req, res, next) {
    console.log('edit route hits')
    queries.getBooks().where({
        'id': req.params.id
    }).first().then(function(data) {
        console.log(data);
        res.render('edit_book', {
            book: data
        })
    })
})
router.post('/edit_book/:id', function(req, res, next) {
    queries.getBooks().where({
            'id': req.params.id
        })
        .update(req.body)
        .then(function(data) {
            res.redirect('/books/book_detail/' + req.params.id)
        })
})
module.exports = router
