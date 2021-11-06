const {createBookService} = require('../service/book.service')
function createBook(req, res) {
    const newBook = createBookService(req.body)

    res.json({
      message: 'Book created',
    });
}

module.exports = {
    createBook
}
