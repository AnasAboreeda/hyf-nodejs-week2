import request from 'supertest';
import app from '../app';


describe('GET /books', () => {
  test("Should return all books", async () => {
    const response = await request(app).get("/api/books");
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined()
    expect(response.body[0].author).toBe("Orhan Pamuk");
  })
})



describe('POST /books', () => {
  test("Should create a new book and return the new object", async () => {
    const response = await request(app).post("/api/books").send({
      "author": "HYF",
      "title": "Best place to learn"
    });
    expect(response.status).toBe(201);
    expect(response.text).toBeDefined();
  })
})