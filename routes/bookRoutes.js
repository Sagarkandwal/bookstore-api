const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { check } = require('express-validator');

// Book routes
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('author', 'Author is required').not().isEmpty(),
    check('publishedDate', 'Published Date is required').not().isEmpty(),
    check('ISBN', 'ISBN is required').not().isEmpty(),
    check('genre', 'Genre is required').not().isEmpty(),
  ],
  bookController.createBook
);

router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
