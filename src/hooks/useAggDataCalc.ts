import { useContext } from "react";
import { GlobalContext } from "../state/GlobalStateContext";
import {
  calcuateAverage,
  calculateTotal,
  findHighestRatedBook,
  findLongestReadBook,
} from "../utils/Utils";

export const useAggDataCalc = () => {
  const { state } = useContext(GlobalContext);
  const readBooks = state.readBooks.length;
  const numOfFavAuthors = state.favouriteAuthors.length;
  const numOffFavBooks = state.favouriteBooks.length;
  const readPages = calculateTotal(state.readBooks, (book) =>
    Number(book.userNumPages)
  );
  const averageBookRating = calcuateAverage(
    state.readBooks.map((book) => Number(book.userRating))
  );
  const highestRatedBook = findHighestRatedBook(state.readBooks);
  const longestReadBook = findLongestReadBook(state.readBooks);

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
