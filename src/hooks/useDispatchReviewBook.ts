import { useContext } from "react";
import { GlobalContext } from "../state/GlobalStateContext";
import { Book } from "../types/Types";

export const useDispatchReviewBook = () => {
  const { dispatch } = useContext(GlobalContext);
  return (book: Book) => {
    dispatch({ type: "SET_REVIEW_BOOK", payload: book });
  };
};
