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
