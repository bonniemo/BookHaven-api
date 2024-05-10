import { ChildrenProp } from "../types/Types"


const DisplayDataCard = ({ children }: ChildrenProp) => {
  return (
    <article className=" p-3 rounded-lg m-3 bg-indigo-300 flex-1">
        {children}
    </article>
  )
}

export default DisplayDataCard