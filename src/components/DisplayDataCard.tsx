import { ChildrenProp } from "../types/Types"


const DisplayDataCard = ({ children }: ChildrenProp) => {
  return (
    <article className="min-w-max max-w-sm p-5 rounded-lg border-8 border-fuchsia-50 flex flex-col flex-1 align-middle">
        {children}
    </article>
  )
}

export default DisplayDataCard