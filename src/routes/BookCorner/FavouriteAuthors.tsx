import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";


const FavouriteAuthors = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleRemoveFav = (key: string) => {
    dispatch({
      type: "REMOVE_FAV_AUTHOR",
      payload: key,
    })
  }

  return (
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
          <button onClick={() => handleRemoveFav(author.key)}>Delete</button>
        </DisplayDataCard>
      ))}
    </DisplayDataCardContainer>
  )
}

export default FavouriteAuthors