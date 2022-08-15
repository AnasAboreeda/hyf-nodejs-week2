import { v4 as uuidv4 } from 'uuid';
import { isValid } from '../utils/helpers.js';
import books from '../model/books-data.js';


export const readAll = (req, res) => {
  res.status(200).json(books).end();
};

export const readOne = (req, res) => {
  const foundBooks = books.find((book) => book.id = req.params.id);

  if (foundBooks) {
    res.status(200).json(foundBooks).end();
  } else {
    res.status(400).end('no such book');
  }
};

export const create = (req, res) => {
  if (req.header.authenticated) {
    res.status(403).end('unauthorized');
  }


  const newBook = req.body;
  if (isValid(newBook)) {
    newBook.id = uuidv4();
    books.push(newBook);
    res.status(201).end(newBook.id);
  } else {
    res.status(400).end('Invalid book');
  }
};

export const update = (req, res) => {

  const updatedBook = req.body;
  if (isValid(updatedBook)) {
    const existingBook = books.find((book) => book.id == req.params.id);
    if (!existingBook) {
      res.status(400).end('No such book');
      return;
    }
    existingBook.author = updatedBook.author;
    existingBook.title = updatedBook.title;
    res.status(201).end('ok');
  } else {
    res.status(400).end('Invalid book');
  }
};

export const remove = (req, res) => {
  const bookToDelete = books.find((book) => book.id == req.params.id);
  if (!bookToDelete) {
    res.status(400).end('No such book');
    return;
  }
  const indexToDelete = books.indexOf(bookToDelete);
  books.splice(indexToDelete, 1);
  res.status(200).send('ok');
};
