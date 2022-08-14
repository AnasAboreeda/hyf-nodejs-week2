import express from 'express';
import * as booksController from '../controllers/books-controller.js';

const booksRouter = express.Router();

booksRouter.get('/books', booksController.readAll);
booksRouter.get('/books/:id', booksController.readOne);
booksRouter.post('/books', booksController.create);
booksRouter.put('/books/:id', booksController.update);
booksRouter.delete('/books/:id', booksController.remove);

export default booksRouter;
