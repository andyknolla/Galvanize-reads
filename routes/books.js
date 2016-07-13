var express = require('express')
var router = express.Router()
var pg = require('pg')
var knex = require('knex')
var queries = require('../db/queries')

router.get('/', function(req, res, next) {
  queries.getBooks().then(function(data) {
    res.render('books', { books: data })
  })
});

router.post('/add_book', function(req,res,next) {
  console.log('book add post route hits');
  queries.addBook(req.body).then(function(data) {
    res.redirect('/books')
  })
})

router.get('/delete_book/:id', function(req,res,next) {
  console.log('delete route hits');
  queries.getBooks().where({ 'id': req.params.id }).del().then(function() {
    res.redirect('/books')
  })
})
module.exports = router
