import { useContext } from "react";
import { GlobalContext } from "../state/GlobalStateContext";
import { calculateMostReadAuthor } from "../utils/calculateMostReadAuthor";

const MostReadAuthor = () => {
  const { state } = useContext(GlobalContext);
  const mostReadAuthors = calculateMostReadAuthor(state.readBooks);
  return (
    <>
      {mostReadAuthors.map((author) => (
        <section key={author.author}>
          <p>
            Most Read Author:
            {author.author}, {author.numBooks} books
          </p>
        </section>
      ))}
    </>
  );
};

export default MostReadAuthor;
