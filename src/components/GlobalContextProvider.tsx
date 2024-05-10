import { useReducer } from "react"
import { GlobalContext, InitialState,  } from "../state/GlobalStateContext"
import { reducer } from "../state/Reducer"
import { ChildrenProp } from "../types/Types"



const GlobalContextProvider = ({ children }: ChildrenProp) => {
    const [state, dispatch] = useReducer(reducer, InitialState)
  return (
    <>
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    </>
  )
}

export default GlobalContextProvider