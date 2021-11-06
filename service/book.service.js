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

function createBookService(book) {
    console.log('creating a new book');
    books.push(book);
    return book;
}

module.exports = {
    createBookService,
}