import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import { useGlobalDispatch } from "../../hooks/useGlobalDispatch";

const FavouriteAuthors = () => {
  const { state } = useContext(GlobalContext);
  const removeFavouriteAuthor = useGlobalDispatch("REMOVE_FAV_AUTHOR");

  return (
    <>
      <h2 className="mx-10 my-5 text-2xl">My favourite Authors</h2>
      <DisplayDataCardContainer>
        {state.favouriteAuthors.map((author, index) => (
          <DisplayDataCard
            key={index}
            imgUrl={`https://covers.openlibrary.org/a/olid/${author.key}-L.jpg`}
            title={author.name}
            subTitle={`Born in: ${author.birth_date}`}
            otherInfo={<p>Top work: {author.top_work}</p>}
            onDelete={() => removeFavouriteAuthor(author.key)}
          ></DisplayDataCard>
        ))}
      </DisplayDataCardContainer>
    </>
  );
};
export default FavouriteAuthors;
