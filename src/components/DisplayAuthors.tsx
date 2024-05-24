import { useContext } from "react";
import { useGlobalDispatchAddAuthor } from "../hooks/useGlobalDispatchAddAuthor";
import { useGlobalDispatchRemove } from "../hooks/useGlobalDispatchRemove";
import { GlobalContext } from "../state/GlobalStateContext";
import { DisplayAuthorProps } from "../types/Types";
import DisplayDataCard from "./DisplayDataCard";
import DisplayDataCardContainer from "./DisplayDataCardContainer";
import { ToastContainer, toast } from "react-toastify";
import { ifAuthorIsFavouriteUtil, toggleFavouriteAuthorUtil } from "../utils/authorUtils";

const DisplayAuthor = ({ data, favourites }: DisplayAuthorProps) => {
  const { state } = useContext(GlobalContext);
  const authors = favourites ? state.favouriteAuthors : data?.docs || [];

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
    const isCurrentFavourite = ifAuthorIsFavourite(key);
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
    if (isCurrentFavourite) {
      toast("Author removed from favourites");
    } else {
      return;
    }
  };

  const isEmptySearch = data?.docs.length === 0;
  const isEmptyFavourites = favourites && state.favouriteAuthors.length === 0;

  return (
    <>
      {(isEmptySearch || isEmptyFavourites) && (
        <section className="mx-10 my-5">
          {isEmptySearch && "Sorry, no authors found"}
          {isEmptyFavourites && "No favourite authors added yet."}
        </section>
      )}
      <ToastContainer />
      <DisplayDataCardContainer>
        {authors.map((author) => (
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

export default DisplayAuthor;
