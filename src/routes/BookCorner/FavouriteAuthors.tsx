import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";

const FavouriteAuthors = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const removeFav = (key: string) => {
    dispatch({
      type: "REMOVE_FAV_AUTHOR",
      payload: key,
    });
  };

  return (
    <>
      <h2 className="mx-10 my-5 text-2xl">My favourite Authors</h2>
    <DisplayDataCardContainer>
      {state.favouriteAuthors.map((author, index) => (
        <DisplayDataCard key={index}>
          <img
            src={`https://covers.openlibrary.org/a/olid/${author.key}-L.jpg`}
            alt="Author Photo"
          />
          {author.name}
          <p>Born: {author.birth_date}</p>
          <p>Top work: {author.top_work}</p>
          <button
            className="my-5 px-5 py-2 bg-red-400 rounded-lg"
            onClick={() => removeFav(author.key)}
          >
            Delete
          </button>
        </DisplayDataCard>
      ))}
    </DisplayDataCardContainer>
    </>
  );
};

export default FavouriteAuthors;
