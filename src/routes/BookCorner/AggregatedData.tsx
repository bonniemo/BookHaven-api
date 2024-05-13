import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import { MostReadAuthor } from "./MostReadAuthor";
import React from "react";

const AggregatedData = () => {
  const { state } = useContext(GlobalContext);
  const readBooks = state.readBooks.length;
  const numOfFavAuthors = state.favouriteAuthors.length;
  const numOffFavBooks = state.favouriteBooks.length;
  const readPages = state.readBooks.reduce(
    (pageTotal, book) => pageTotal + Number(book.userNumPages),
    0
  );
  const totalRating = state.readBooks.reduce(
    (totalRating, book) => totalRating + Number(book.userRating),
    0
  );
  const averageBookRating = totalRating / state.readBooks.length;

  const highestRatedBook = state.readBooks.reduce((highestRated, book) => {
    return book.userRating > highestRated.userRating ? book : highestRated;
  }, state.readBooks[0]);

  const longestReadBook = state.readBooks.reduce((longestBook, book) => {
    return book.userNumPages > longestBook.userNumPages ? book : longestBook;
  }, state.readBooks[0]);

  const mostReadAuthor = MostReadAuthor();

  return (
    <>
      <article>
        <h2>My Statistics</h2>
        <p>Number of read books: {readBooks}</p>
        <p>Number of read pages: {readPages}</p>
        <p>Number of favourite authors: {numOfFavAuthors}</p>
        <p>Number of favourite books: {numOffFavBooks}</p>
        <p>Avreage rating: {averageBookRating}</p>
        <p>
          Highest rated book: {highestRatedBook.title} by{" "}
          {highestRatedBook.author_name}, rated {highestRatedBook.userRating}
        </p>
        <p>
          Longest book read: {longestReadBook.title} by{" "}
          {longestReadBook.author_name}, {longestReadBook.userNumPages} pages
        </p>
        {mostReadAuthor.length > 0 && (
          <p>          
          {mostReadAuthor.map((author) => (
            <React.Fragment key={author.author}>
              {author.numBooks > 1 && (                
                <span>
                  Most Read author:
                  <span> {author.author}, {author.numBooks} books</span>
                </span>
              )}
            </React.Fragment>
          ))}
        </p>
        )}
      </article>
    </>
  );
};

export default AggregatedData;
