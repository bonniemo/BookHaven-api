import { Book } from "../types/Types";

export const calculateTotal = (
  books: Book[],
  getValue: (book: Book) => number
): number => {
  return books.reduce((total, book) => total + getValue(book), 0);
};

export const calcuateAverage = (values: number[]): number => {
  const sum = values.reduce((total, value) => total + value, 0);
  return sum / values.length;
};

// export const findHighestRatedBook = (books: Book[]): Book => {
//   return books.reduce(
//     (highestRated, book) =>
//       book.userRating? > highestRated.userRating ? book : highestRated,
//     books[0]
//   );
// };

// export const findLongestBook = (books: Book[]): Book => {
//   return books.reduce((longestBook, book) => {
//     return book.userNumPages? > longestBook.userNumPages ? book : longestBook;
//   }, books[0]);
// };
