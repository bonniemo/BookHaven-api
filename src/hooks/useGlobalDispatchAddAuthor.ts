import { useContext } from "react";
import { GlobalContext } from "../state/GlobalStateContext";

// "ADD_FAV_AUTHOR"
export const useGlobalDispatchAddAuthor = (actionType: any) => {
  const { dispatch } = useContext(GlobalContext);
  return (
    key: string,
    name: string,
    birth_date: string,
    top_work: string,
    top_subjects: string[]
  ) =>
    dispatch({
      type: actionType,
      payload: {
        key,
        name,
        birth_date,
        top_work,
        top_subjects,
      },
    });
};
