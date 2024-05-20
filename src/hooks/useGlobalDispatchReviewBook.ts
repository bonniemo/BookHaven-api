import { useContext } from "react"
import { GlobalContext } from "../state/GlobalStateContext"
import { Book } from "../types/Types";

export const useGlobalDispatchReviewBook = () => {
    const { dispatch } = useContext(GlobalContext);
    return (book: Book | null) => {
        dispatch({ type: "SET_REVIEW_BOOK", payload: book })
    }
}