import { useContext } from "react";
import { GlobalContext } from "../state/GlobalStateContext";

export const useDispatchRemove = (
  actionType: "REMOVE_FAV_BOOK" | "REMOVE_READ_BOOK" | "REMOVE_FAV_AUTHOR"
) => {
  const { dispatch } = useContext(GlobalContext);
  return (payload: string) => dispatch({ type: actionType, payload });
};
