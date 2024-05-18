import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import DisplayDataCard from "../../components/DisplayDataCard";
import { useGlobalDispatchRemove } from "../../hooks/useGlobalDispatchRemove";

const ReadBooks = () => {
  const { state } = useContext(GlobalContext);
  const removeReadBook = useGlobalDispatchRemove("REMOVE_READ_BOOK");

  return (
    <>
      <h2 className="mx-10 my-5 text-2xl">My Reading History</h2>
      <DisplayDataCardContainer>
        {state.readBooks.map((book) => (
          <DisplayDataCard
            key={book.key}
            imgUrl={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            title={book.title}
            subTitle={book.author_name.join(", ")}
            otherInfo={
              <ul>
                <li>My rating: {book.userRating}</li>
                <li>My review: {book.userReview}</li>
                <li>Number of pages: {book.userNumPages}</li>
              </ul>
            }
            onDelete={() => removeReadBook(book.key)}
          />
        ))}
      </DisplayDataCardContainer>
    </>
  );
};

export default ReadBooks;
