import { useContext } from "react";
import ReadBookForm from "../routes/Home/ReadBookForm";
import { GlobalContext } from "../state/GlobalStateContext";
import { Book, DisplayBooksCardProps } from "../types/Types";
import { ifBookIsFavouriteUtil, ifBookIsReadUtil } from "../utils/bookUtils";
import DisplayDataCard from "./DisplayDataCard";

const DisplayBooksCard: React.FC<DisplayBooksCardProps> = ({
  booksArr,
  openReviewForm,
  toggleFavourite,
  setReviewFormVisibility,
  selectedBook,
  reviewFormVisibility,
}) => {
  const { state } = useContext(GlobalContext);

  const ifBookIsFavourite = (bookKey: string) =>
    ifBookIsFavouriteUtil(bookKey, state.favouriteBooks);

  const ifBookisRead = (bookKey: string) =>
    ifBookIsReadUtil(bookKey, state.readBooks);

  return (
    <>
      {booksArr.map((book: Book) => (
        <article key={book.key}>
          {(!reviewFormVisibility || selectedBook?.key !== book.key) && (
            <DisplayDataCard
              imgUrl={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              title={book.title}
              subTitle={book.author_name.join(", ")}
              otherInfo={`First published: ${book.first_publish_year}`}
              userRating={book.userRating && `Your Rating: ${book.userRating}`}
              userReview={book.userRating && `Your Review: ${book.userReview}`}
              userNumPages={book.userRating && `Pages: ${book.userNumPages}`}
              isFavourite={ifBookIsFavourite(book.key)}
              isRead={ifBookisRead(book.key)}
              onToggleFavourite={() => toggleFavourite(book)}
              onOpenReviewForm={() =>
                openReviewForm(
                  book.key,
                  book.title,
                  book.author_name,
                  book.first_publish_year,
                  book.cover_i
                )
              }
            />
          )}
          {reviewFormVisibility && selectedBook?.key === book.key && (
            <ReadBookForm
              dataKey={selectedBook.key}
              title={selectedBook.title}
              author_name={selectedBook.author_name}
              cover_i={selectedBook.cover_i}
              first_publish_year={selectedBook.first_publish_year}
              setReviewFormVisibility={setReviewFormVisibility}
            />
          )}
        </article>
      ))}
    </>
  );
};
export default DisplayBooksCard;
