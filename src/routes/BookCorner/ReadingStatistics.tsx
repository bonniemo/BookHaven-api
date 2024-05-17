import React from "react";
import { MostReadAuthor } from "./MostReadAuthor";
import { useAggDataCalc } from "../../hooks/useAggDataCalc";

const ReadingStatistics = () => {
  const {
    readBooks,
    numOfFavAuthors,
    numOffFavBooks,
    readPages,
    averageBookRating,
    // highestRatedBook,
    // longestReadBook,
  } = useAggDataCalc();
  const mostReadAuthor = MostReadAuthor();
  return (
    <article className="mx-10 mt-10 leading-loose text-lg">
      <h2 className="mb-5 text-2xl">My Reading Statistics</h2>
      <p>Number of read books: {readBooks}</p>
      <p>Number of read pages: {readPages}</p>
      <p>Number of favourite authors: {numOfFavAuthors}</p>
      <p>Number of favourite books: {numOffFavBooks}</p>
      <p>Avreage rating: {Math.floor(averageBookRating)}</p>
      {/* <p>
        Highest rated book: {highestRatedBook.title} by{" "}
        {highestRatedBook.author_name}, rated {highestRatedBook.userRating}
      </p>
      <p>
        Longest book read: {longestReadBook.title} by{" "}
        {longestReadBook.author_name}, {longestReadBook.userNumPages} pages
      </p> */}
      {mostReadAuthor.length > 0 && (
        <p>
          {mostReadAuthor.map((author) => (
            <React.Fragment key={author.author}>
              {author.numBooks > 1 && (
                <span>
                  Most Read author:
                  <span>
                    {" "}
                    {author.author}, {author.numBooks} books
                  </span>
                </span>
              )}
            </React.Fragment>
          ))}
        </p>
      )}
    </article>
  );
};

export default ReadingStatistics;
