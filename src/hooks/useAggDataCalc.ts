import { useContext } from "react";
import { GlobalContext } from "../state/GlobalStateContext";

export const useAggDataCalc = () => {
  const { state } = useContext(GlobalContext);
  const readBooks = state.readBooks.length;
  const numOfFavAuthors = state.favouriteAuthors.length;
  const numOffFavBooks = state.favouriteBooks.length;
  const readPages = state.readBooks.reduce(
    (total, book) => total + Number(book.userNumPages),
    0
  );
  const averageBookRating = state.readBooks.length
    ? state.readBooks.reduce(
        (total, book) => total + Number(book.userRating),
        0
      )
    : 0;

  return {
    readBooks,
    numOfFavAuthors,
    numOffFavBooks,
    readPages,
    averageBookRating,
  };
};
