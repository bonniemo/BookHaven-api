import { useContext } from "react";
import DisplayDataCard from "./DisplayDataCard";
import DisplayDataCardContainer from "./DisplayDataCardContainer";
import { ToastContainer, toast } from "react-toastify";
import { GlobalContext } from "../../state/GlobalStateContext";
import { Author, DisplayAuthorProps } from "../../types/Types";
import {
  ifAuthorIsFavouriteUtil,
  toggleFavouriteAuthorUtil,
} from "../../utils/authorUtils";
import { useDispatchAddAuthor } from "../../hooks/useDispatchAddAuthor";
import { useDispatchRemove } from "../../hooks/useDispatchRemove";

const DisplayAuthor = ({ data, favourites }: DisplayAuthorProps) => {
  const { state } = useContext(GlobalContext);
  const authors = favourites ? state.favouriteAuthors : data?.docs || [];

  const addFavouriteAuthor = useDispatchAddAuthor("ADD_FAV_AUTHOR");
  const removeFavouriteAuthor = useDispatchRemove("REMOVE_FAV_AUTHOR");

  const ifAuthorIsFavourite = (key: string) =>
    ifAuthorIsFavouriteUtil(key, state.favouriteAuthors);

  const toggleFavouriteAuthor = (author: Author) => {
    const isCurrentFavourite = ifAuthorIsFavourite(author.key);
    toggleFavouriteAuthorUtil(
      author,
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
            onToggleFavourite={() => toggleFavouriteAuthor(author)}
          />
        ))}
      </DisplayDataCardContainer>
    </>
  );
};

export default DisplayAuthor;
