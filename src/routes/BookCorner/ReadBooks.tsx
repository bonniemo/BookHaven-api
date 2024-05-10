import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";

const ReadBooks = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const handleDelete = (key: string) => {
    dispatch({
      type: "REMOVE_READ_BOOK",
      payload: key,
    })
  }

  return (
    <DisplayDataCardContainer>
    {state.readBooks.map((book, index) => (
      <DisplayDataCard key={index}>
        <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt=""
            />
            <p>{book.title}</p>
            <p>{book.author_name}</p>
            <p>My rating: {book.userRating}</p>
            <p>My review: {book.userReview}</p>
            <p>Number of pages: {book.userNumPages}</p>
            <button onClick={() => handleDelete(book.dataKey)}>Delete</button>
      </DisplayDataCard>
    ))}
    </DisplayDataCardContainer>
  )
}

export default ReadBooks