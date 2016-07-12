var express = require('express');
var router = express.Router();

var books = [
{name:'Python In A Nutshell'},{name:'Think Python'},{name:'Learning React Native'},{name:'You Don\'t Know JS: ES6 & Beyond'}, {name:'You Don\'t Know JS: Scope & Closures'},{name: 'You Don\'t Know JS: Async & Performance'}
]

router.get('/', function(req, res, next) {
  res.render('books', { books: books });
});

module.exports = router;
