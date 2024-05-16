import { ChildrenProp } from "../types/Types"


const DisplayDataCard = ({ children }: ChildrenProp) => {
  return (
    <article className="min-w-72 max-w-72 max-h-min p-5 rounded-lg border-8 border-stone-900 flex flex-col">
        {children}
    </article>
  )
}

export default DisplayDataCard