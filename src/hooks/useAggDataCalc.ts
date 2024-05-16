import { useContext } from "react";
import { GlobalContext } from "../state/GlobalStateContext";
import { calculateTotal } from "../utils/Utils";

export const useAggDataCalc = () => {
  const { state } = useContext(GlobalContext);
  const readBooks = state.readBooks.length;
  const numOfFavAuthors = state.favouriteAuthors.length;
  const numOffFavBooks = state.favouriteBooks.length;

  const readPages = calculateTotal(state.readBooks, (book) =>
    Number(book.userNumPages)
  );

  const totalRating = calculateTotal(state.readBooks, (book) =>
    Number(book.userRating)
  );

  const averageBookRating = totalRating / state.readBooks.length;

  const highestRatedBook = state.readBooks.reduce((highestRated, book) => {
    return book.userRating > highestRated.userRating ? book : highestRated;
  }, state.readBooks[0]);

  const longestReadBook = state.readBooks.reduce((longestBook, book) => {
    return book.userNumPages > longestBook.userNumPages ? book : longestBook;
  }, state.readBooks[0]);

  return {
    readBooks,
    numOfFavAuthors,
    numOffFavBooks,
    readPages,
    averageBookRating,
    highestRatedBook,
    longestReadBook,
  };
};
