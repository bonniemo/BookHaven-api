import { ReadBook } from "../types/Types";

export type CalcTotalType = (book: ReadBook) => number;

export const calculateTotal = (
  books: ReadBook[],
  getValue: CalcTotalType
): number => {
  return books.reduce((total, book) => total + getValue(book), 0);
};

export const calcuateAverage = (values: number[]): number => {
  const sum = values.reduce((total, value) => total + value, 0);
  return sum / values.length;
};

export const findHighestRatedBook = (books: ReadBook[]): ReadBook => {
  return books.reduce(
    (highestRated, book) =>
      book.userRating > highestRated.userRating ? book : highestRated,
    books[0]
  );
};

export const findLongestReadBook = (books: ReadBook[]): ReadBook => {
  return books.reduce((longestBook, book) => {
    return book.userNumPages > longestBook.userNumPages ? book : longestBook;
  }, books[0]);
};
