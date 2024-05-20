import { useContext } from "react";
import ReadBookForm from "../routes/Home/ReadBookForm";
import { GlobalContext } from "../state/GlobalStateContext";
import { Book, DisplayBooksCardProps } from "../types/Types";
import { ifBookIsFavouriteUtil, ifBookIsReadUtil } from "../utils/bookUtils";
import DisplayDataCard from "./DisplayDataCard";
import { useGlobalDispatchReviewBook } from "../hooks/useGlobalDispatchReviewBook";

const DisplayBooksCard: React.FC<DisplayBooksCardProps> = ({
  booksArr,
  toggleFavourite,
  setReviewFormVisibility,
  reviewFormVisibilityKey,
}) => {
  const { state } = useContext(GlobalContext);
  const setBookToReview = useGlobalDispatchReviewBook();

  const ifBookIsFavourite = (key: string) =>
    ifBookIsFavouriteUtil(key, state.favouriteBooks);

  const ifBookisRead = (key: string) => ifBookIsReadUtil(key, state.readBooks);

  const handleOpenReviewForm = (key: string) => {
    setBookToReview(booksArr.find((book) => book.key === key) || null);
    setReviewFormVisibility(key);
  };

  return (
    <>
      {booksArr.map((book: Book) => (
        <article key={book.key}>
          {reviewFormVisibilityKey !== book.key && (
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
              onOpenReviewForm={() => handleOpenReviewForm(book.key)}
            />
          )}
          {reviewFormVisibilityKey === book.key && (
            <ReadBookForm setReviewFormVisibility={setReviewFormVisibility} />
          )}
        </article>
      ))}
    </>
  );
};
export default DisplayBooksCard;
