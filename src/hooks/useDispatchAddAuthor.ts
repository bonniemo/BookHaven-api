import { useContext } from "react";
import { GlobalContext } from "../state/GlobalStateContext";
import { Author } from "../types/Types";

export const useDispatchAddAuthor = (actionType: "ADD_FAV_AUTHOR") => {
  const { dispatch } = useContext(GlobalContext);
  return (author: Author) =>
    dispatch({
      type: actionType,
      payload: author,
    });
};
