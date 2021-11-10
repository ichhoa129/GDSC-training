const { findBooks, createBook } = require("../repository/book.repository");

async function createBookService(book) {
    console.log('creating a new book');
    await createBook(book);
    return book;
}

async function getBooksService(query) {
  console.log('get all books');
  return findBooks(query);
}

module.exports = {
    createBookService,
    getBooksService
}