import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";

const FavouriteBooks = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleRemoveFav = (key: string) => {
    dispatch({
      type: "REMOVEFAVBOOK",
      payload: key,
    });
  };
  return (
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
          <button onClick={() => handleRemoveFav(book.key)}>delete</button>
        </DisplayDataCard>
      ))}
    </DisplayDataCardContainer>
  );
};

export default FavouriteBooks;
