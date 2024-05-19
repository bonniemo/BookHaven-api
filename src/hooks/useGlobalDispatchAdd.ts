import { useContext } from "react";
import { GlobalContext } from "../state/GlobalStateContext";

// "ADD_FAV_BOOK" | "ADD_READ_BOOK"
export const useGlobalDispatchAdd = (actionType: any) => {
  const { dispatch } = useContext(GlobalContext);
  return (
    key: string,
    title: string,
    author_name: string[],
    first_publish_year: number,
    cover_i: string,
    userRating?: string,
    userReview?: string,
    userNumPages?: string
  ) =>
    dispatch({
      type: actionType,
      payload: {
        key,
        title,
        author_name,
        first_publish_year,
        cover_i,
        userRating,
        userReview,
        userNumPages,
      },
    });
};
