var express = require('express');
const { createBook } = require('../controller/book.controller');
const createBookMiddleware = require('../middlewares/create-book.middleware');
var router = express.Router();

const books = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    created_at: '2017-01-01',
  },
  {
    id: 2,
    title: 'The Hobbit',
    created_at: '2018-01-01',
  },
  {
    id: 2,
    title: 'The Hobbit',
    created_at: '2018-01-02',
  },
  {
    id: 2,
    title: 'The new Hobbit',
    created_at: '2018-01-01',
  },
]


router.get('/',function(req, res, next) {
  const query = req.query;
  if(Object.keys(query).length === 0) {
    console.log('no query');
    return res.json(books);
  }

  console.log(query);

  let listBooks = books.filter(book => book.id === parseInt(query.id) && book.created_at === query.created_at);
  return res.json(listBooks);
});

router.get('/:id',function(req, res, next) {
  const id = req.params.id;
  console.log(id);

  const book = books.find(book => book.id == id);
  if(!book) { 
    res.status(404).send('Book not found');
  } else {
    res.json(book);
  }
});

router.post('/',createBookMiddleware, createBook);

router.put('/:id',function(req, res, next) {
    const id = req.params.id;
    const book = req.body;

    const index = books.findIndex(book => book.id == id);
    if(index === -1) {
      res.status(404).send('Book not found');
    } else {
      book.id = id;
      books[index] = book;
      res.json({
        message: 'Book updated',
      });
    }
});

router.delete('/:id',function(req, res, next) {
  const id = req.params.id;
  const index = books.findIndex(book => book.id == id);
  if(index === -1) {
    res.status(404).send('Book not found');
  } else {
    books.splice(index, 1);
    res.json({
      message: 'Book deleted',
    });
  }

});


module.exports = router;
