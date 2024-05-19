import { useContext } from "react";
import { GlobalContext } from "../state/GlobalStateContext";

// "REMOVE_FAV_BOOK" | "REMOVE_READ_BOOK" | "REMOVE_FAV_AUTHOR" 
export const useGlobalDispatchRemove = (actionType: any) => {
  const { dispatch } = useContext(GlobalContext);
  return (payload: any) => dispatch({ type: actionType, payload });
};
