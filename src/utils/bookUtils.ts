import { Book } from "../types/Types";

export const ifBookIsReadUtil = (key: string, readBooks: Book[]) => {
  return readBooks.some((readBook) => readBook.key === key);
};

export const ifBookIsFavouriteUtil = (key: string, favouriteBooks: Book[]) => {
  return favouriteBooks.some((favouriteBook) => favouriteBook.key === key);
};

export const getBookInfo = (bookObj: Book) => {
  const { key, title, author_name, first_publish_year, cover_i } = bookObj;
  return { key, title, author_name, first_publish_year, cover_i };
};

export const toggleFavouriteBookUtil = (
  book: Book,
  favouriteBooks: Book[],
  addFavouriteBook: (
    book: Book
  ) => void,
  removeFavouriteBook: (key: string) => void
) => {
  if (ifBookIsFavouriteUtil(book.key, favouriteBooks)) {
    removeFavouriteBook(book.key);
  } else {
    addFavouriteBook(
      book
    );
  }
};
