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

module.exports = router;
