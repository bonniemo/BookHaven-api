import { useContext } from "react";
import { GlobalContext } from "../state/GlobalStateContext";
import { Book } from "../types/Types";

export const useDispatchAdd = (
  actionType: "ADD_FAV_BOOK" | "ADD_READ_BOOK"
) => {
  const { dispatch } = useContext(GlobalContext);
  return (book: Book) => {
    dispatch({
      type: actionType,
      payload: book,
    });
  };
};
