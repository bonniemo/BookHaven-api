import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";

import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";

const ReadBooks = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const deleteRead = (key: string) => {
    dispatch({
      type: "REMOVE_READ_BOOK",
      payload: key,
    });
  };

  return (
    <>
      <h2 className="mx-10 my-5 text-2xl">My Reading History</h2>

      <DisplayDataCardContainer>
        {state.readBooks.map((book, index) => (
          <article key={index}>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt=""
            />
            <p>{book.title}</p>
            <p>{book.author_name}</p>
            <p>My rating: {book.userRating}</p>
            <p>My review: {book.userReview}</p>
            <p>Number of pages: {book.userNumPages}</p>
            <button
              className="my-5 px-5 py-2 bg-red-400 rounded-lg"
              onClick={() => deleteRead(book.dataKey)}
            >
              Delete
            </button>
          </article>
        ))}
      </DisplayDataCardContainer>
    </>
  );
};

export default ReadBooks;
