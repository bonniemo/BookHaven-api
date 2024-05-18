import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import { useGlobalDispatchRemove } from "../../hooks/useGlobalDispatchRemove";
import { useGlobalDispatchAddAuthor } from "../../hooks/useGlobalDispatchAddAuthor";
import { ifAuthorIsFavouriteUtil, toggleFavouriteAuthorUtil } from "../../utils/bookUtils";

const FavouriteAuthors = () => {
  const { state } = useContext(GlobalContext);  
  const addFavouriteAuthor = useGlobalDispatchAddAuthor("ADD_FAV_AUTHOR");
  const removeFavouriteAuthor = useGlobalDispatchRemove("REMOVE_FAV_AUTHOR");

  const ifAuthorIsFavourite = (key: string) =>
    ifAuthorIsFavouriteUtil(key, state.favouriteAuthors);

  const toggleFavouriteAuthor = (
    key: string,
    name: string,
    birth_date: string,
    top_work: string,
    top_subjects: string[]
  ) => {
    toggleFavouriteAuthorUtil(
      {
        key,
        name,
        birth_date,
        top_work,
        top_subjects,
      },
      state.favouriteAuthors,
      addFavouriteAuthor,
      removeFavouriteAuthor
    );
  };

  return (
    <>
      <h2 className="mx-10 my-5 text-2xl">My favourite Authors</h2>
      <DisplayDataCardContainer>
        {state.favouriteAuthors.map((author) => (
          <DisplayDataCard
          key={author.key}
          imgUrl={`https://covers.openlibrary.org/a/olid/${author.key}-L.jpg`}
          title={author.name}
          subTitle={`Born in: ${author.birth_date}`}
          otherInfo={<p>Top work: {author.top_work}</p>}
          isFavourite={ifAuthorIsFavourite(author.key)}
          onToggleFavourite={() =>
            toggleFavouriteAuthor(
              author.key,
              author.name,
              author.birth_date,
              author.top_work,
              author.top_subjects
            )
          }
        />
        ))}
      </DisplayDataCardContainer>
    </>
  );
};
export default FavouriteAuthors;
