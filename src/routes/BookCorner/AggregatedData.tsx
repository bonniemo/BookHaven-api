import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";

const AggregatedData = () => {
  const { state } = useContext(GlobalContext);
  const readBooks = state.readBooks.length;
  const numOfFavAuthors = state.favouriteAuthors.length;
  const numOffFavBooks = state.favouriteBooks.length;
  const readPages = state.readBooks.reduce(
    (pageTotal, book) => pageTotal + Number(book.userNumPages),
    0
  );
  const totalRating = state.readBooks.reduce((totalRating, book) => totalRating + Number(book.userRating), 0)
  const averageBookRating = (totalRating / state.readBooks.length)
  return (
    <>
      <article>
        <h2>My Statistics</h2>
        <p>Number of read books: {readBooks}</p>
        <p>Number of read pages: {readPages}</p>
        <p>Number of favourite authors: {numOfFavAuthors}</p>
        <p>Number of favourite books: {numOffFavBooks}</p>
        <p>Avreage rating: {averageBookRating}</p>
      </article>
    </>
  );
};

export default AggregatedData;
