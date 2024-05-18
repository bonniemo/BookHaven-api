import FavouriteAuthors from "../routes/BookCorner/FavouriteAuthors";
import { Author, Book } from "../types/Types";

export const ifBookIsReadUtil = (bookKey: string, readBooks: Book[]) => {
  return readBooks.some((readBook) => readBook.key === bookKey);
};

export const ifBookIsFavouriteUtil = (
  bookKey: string,
  favouriteBooks: Book[]
) => {
  return favouriteBooks.some((favouriteBook) => favouriteBook.key === bookKey);
};

export const toggleFavouriteUtil = (
  book: Book,
  favouriteBooks: Book[],
  addFavouriteBook: (
    key: string,
    title: string,
    author_name: string[],
    first_publish_year: number,
    cover_i: string
  ) => void,
  removeFavouriteBook: (bookKey: string) => void
) => {
  if (ifBookIsFavouriteUtil(book.key, favouriteBooks)) {
    removeFavouriteBook(book.key);
  } else {
    addFavouriteBook(
      book.key,
      book.title,
      book.author_name,
      book.first_publish_year,
      book.cover_i
    );
  }
};

export const ifAuthorIsFavouriteUtil = (
  key: string,
  favoriteAuthors: Author[]
) => {
  return favoriteAuthors.some((favoriteAuthor) => favoriteAuthor.key === key);
};

export const toggleFavouriteAuthorUtil = (
  author: Author,
  favoriteAuthors: Author[],
  addFavouriteAuthor: (
    key: string,
    name: string,
    birth_date: string,
    top_work: string,
    top_subjects: string[]
  ) => void,
  removeFavouriteAuthor: (key: string) => void
) => {
  if (ifAuthorIsFavouriteUtil(author.key, favoriteAuthors)) {
    removeFavouriteAuthor(author.key);
  } else {
    addFavouriteAuthor(
      author.key,
      author.name,
      author.birth_date,
      author.top_work,
      author.top_subjects
    );
  }
};
