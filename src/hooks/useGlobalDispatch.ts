import { useContext } from "react"
import { GlobalContext } from "../state/GlobalStateContext"

export const useGlobalDispatch = (actionType: any) => {
    const { dispatch } = useContext(GlobalContext);
    return (payload: any) => dispatch({ type: actionType, payload }) 
}