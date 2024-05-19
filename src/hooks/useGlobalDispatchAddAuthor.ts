import { useContext } from "react";
import { GlobalContext } from "../state/GlobalStateContext";

export const useGlobalDispatchAddAuthor = (actionType: "ADD_FAV_AUTHOR") => {
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
