const { createBookDto } = require('../dto/createBook.dto');
const {createBookService, getBooksService} = require('../service/book.service')
async function createBook(req, res) {
    const newBook = await createBookService(createBookDto(req.body))

    res.json({
      message: 'Book created',
    });
}

async function getBooks(req, res) {
    const query = req.query;

    const foundBooks = await getBooksService(query);
    console.log(foundBooks);
    return res.json(foundBooks);
}

module.exports = {
    createBook,
    getBooks
}
