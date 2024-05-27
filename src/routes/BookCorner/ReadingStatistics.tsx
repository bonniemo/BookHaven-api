import { useContext } from "react";
import { useAggDataCalc } from "../../hooks/useAggDataCalc";
import { GlobalContext } from "../../state/GlobalStateContext";
import { calculateMostReadAuthor } from "../../utils/calculateMostReadAuthor";

const ReadingStatistics = () => {
  const {
    readBooks,
    numOfFavAuthors,
    numOffFavBooks,
    readPages,
    averageBookRating,
  } = useAggDataCalc();
  const { state } = useContext(GlobalContext);
  const mostReadAuthors = calculateMostReadAuthor(state.readBooks);
  return (
    <article className="mx-10 mt-10 leading-loose text-lg">
      <h2 className="mb-5 text-2xl">My Reading Statistics</h2>
      <p>Number of read books: {readBooks}</p>
      <p>Number of read pages: {readPages}</p>
      <p>Number of favourite authors: {numOfFavAuthors}</p>
      <p>Number of favourite books: {numOffFavBooks}</p>
      {!Number.isNaN(averageBookRating) && (
        <p>Avreage rating: {Math.floor(averageBookRating)}</p>
      )}
      <p>Most Read Author:</p>
      {mostReadAuthors.map((author) => (
        <section key={author.author}>
          <p>
            {author.author}, {author.numBooks} books
          </p>
        </section>
      ))}
    </article>
  );
};

export default ReadingStatistics;
