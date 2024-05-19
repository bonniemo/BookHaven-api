import { useContext } from "react";
import { GlobalContext } from "../state/GlobalStateContext";
import { calculateMostReadAuthor } from "../utils/calculateMostReadAuthor";

const MostReadAuthor = () => {
  const { state } = useContext(GlobalContext);
  const mostReadAuthors = calculateMostReadAuthor(state.readBooks);
  return (
    <>
      <p>Most Read Author:</p>
      {mostReadAuthors.map((author) => (
        <section key={author.author}>
          <p>
            {author.author}, {author.numBooks} books
          </p>
        </section>
      ))}
    </>
  );
};

export default MostReadAuthor;
