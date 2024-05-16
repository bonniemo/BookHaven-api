import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";

const FavouriteBooks = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const removeFav = (key: string) => {
    dispatch({
      type: "REMOVE_FAV_BOOK",
      payload: key,
    });
  };
  return (
    <>
      <h2 className="mx-10 mt-10 mb-5 text-2xl">My favourite Books</h2>
      <DisplayDataCardContainer>
        {state.favouriteBooks.map((book, index) => (
          <DisplayDataCard key={index}>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt=""
            />
            <p>{book.title}</p>
            <p>{book.author_name}</p>
            <p>{book.first_publish_year}</p>
            <button
              className="my-5 px-5 py-2 bg-red-400 rounded-lg"
              onClick={() => removeFav(book.key)}
            >
              delete
            </button>
          </DisplayDataCard>
        ))}
      </DisplayDataCardContainer>
    </>
  );
};

export default FavouriteBooks;
