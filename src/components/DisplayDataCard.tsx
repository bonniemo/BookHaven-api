import { ChildrenProp } from "../types/Types"


const DisplayDataCard = ({ children }: ChildrenProp) => {
  return (
    <article className=" min-w-72 max-w-72 p-5 rounded-lg border-8 border-fuchsia-50 flex flex-col">
        {children}
    </article>
  )
}

export default DisplayDataCard