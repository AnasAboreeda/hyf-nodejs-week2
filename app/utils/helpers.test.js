import {isValid} from './helpers'

describe("isValid", () => {
  test("should return false for invalid book", () => {
    const book = {
      "author": "HYF",
      "titless": "Best place to learn"
    };
    expect(isValid(book)).toBeFalsy();
  })
  test("should return true for vaild book", () => {
    const book = {
      "author": "HYF",
      "title": "Best place to learn"
    };
    expect(isValid(book)).toBeTruthy();
  })
})