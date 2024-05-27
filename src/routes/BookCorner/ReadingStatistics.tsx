import MostReadAuthor from "./MostReadAuthor";
import { useAggDataCalc } from "../../hooks/useAggDataCalc";

const ReadingStatistics = () => {
  const {
    readBooks,
    numOfFavAuthors,
    numOffFavBooks,
    readPages,
    averageBookRating,
  } = useAggDataCalc();
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
      <MostReadAuthor />
    </article>
  );
};

export default ReadingStatistics;
