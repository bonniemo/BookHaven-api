import { ChildrenProp } from "../types/Types"


const DisplayDataCardContainer = ({ children }: ChildrenProp) => {
  return (
    <article className="flex">
        {children}
    </article>
  )
}

export default DisplayDataCardContainer;