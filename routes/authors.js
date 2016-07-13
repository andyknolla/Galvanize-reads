var express = require('express')
var router = express.Router()
var pg = require('pg')
var knex = require('knex')
var queries = require('../db/queries')

router.get('/', function(req, res, next) {
 queries.getAuthors().then(function(data) {
  res.render('authors', { authors: data })
  })
});
// add an author
router.post('/add_author', function(req, res, next) {
        console.log('add author post route hits');
        queries.addAuthor(req.body).then(function(data) {
            res.redirect('/authors')
        })
    })
    // Delete an author
router.get('/delete_author/:id', function(req, res, next) {
        console.log('delete author route hits');
        queries.getAuthors().where({
            'id': req.params.id
        }).del().then(function() {
            res.redirect('/authors')
        })
    })

    // Edit an author
router.get('/edit_author/:id', function(req, res, next) {
        console.log('edit author route hits')
        queries.getAuthors().where({
            'id': req.params.id
        }).first().then(function(data) {
            console.log(data);
            res.render('edit_author', {
                author: data
            })
        })
    })
router.post('/edit_author/:id', function(req, res, next) {
    queries.getAuthor().where({
            'id': req.params.id
        })
        .update(req.body)
        .then(function(data) {
            res.redirect('/authors/author_detail/' + req.params.id)
        })
})
module.exports = router;
