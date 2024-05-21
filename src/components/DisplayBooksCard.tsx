import { useContext, useEffect, useState } from "react";
import ReadBookForm from "../routes/Home/ReadBookForm";
import { GlobalContext } from "../state/GlobalStateContext";
import { Book, DisplayBooksCardProps } from "../types/Types";
import { ifBookIsFavouriteUtil, ifBookIsReadUtil } from "../utils/bookUtils";
import DisplayDataCard from "./DisplayDataCard";
import { useGlobalDispatchReviewBook } from "../hooks/useGlobalDispatchReviewBook";
import { useGlobalDispatchRemove } from "../hooks/useGlobalDispatchRemove";

const DisplayBooksCard: React.FC<DisplayBooksCardProps> = ({
  booksArr,
  toggleFavourite,
}) => {
  const { state } = useContext(GlobalContext);
  const setBookToReview = useGlobalDispatchReviewBook(); 
  const [reviewFormVisibilityKey, setReviewFormVisibilityKey] = useState("");
  const removeReadBook = useGlobalDispatchRemove("REMOVE_READ_BOOK");

  const handleOpenReviewForm = (book: Book) => {   
    if (ifBookisRead(book.key)) {
      removeReadBook(book.key)
    } else {
      setReviewFormVisibilityKey(book.key);      
    }
  };

  useEffect(() => {
    const currentBook = booksArr.find(
      (book) => book.key === reviewFormVisibilityKey
    );
    if (currentBook) {
      setBookToReview(currentBook);      
    } else {
      return;
    }
  }, [reviewFormVisibilityKey]);

  const ifBookIsFavourite = (key: string) =>
    ifBookIsFavouriteUtil(key, state.favouriteBooks);
  const ifBookisRead = (key: string) => ifBookIsReadUtil(key, state.readBooks);

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
              onOpenReviewForm={() => handleOpenReviewForm(book)}
            />
          )}
          {reviewFormVisibilityKey === book.key && (
            <ReadBookForm setReviewFormVisibilityKey={setReviewFormVisibilityKey} />
          )}
        </article>
      ))}
    </>
  );
};
export default DisplayBooksCard;
