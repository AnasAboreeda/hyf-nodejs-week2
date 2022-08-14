import request from 'supertest';
import app from '../app';


describe('GET /books', () => {
  test("Should return all books", async () => {
    const response = await request(app).post("/books");
    expect(response.body).toBeDefined();
  })
})



describe('POST /books', () => {
  test("Should create a new book and return the new object", async () => {
    const response = await request(app).post("/books").send({
      "author": "HYF",
      "title": "Best place to learn"
    });
    expect(response.body).toBeDefined()
  })
})