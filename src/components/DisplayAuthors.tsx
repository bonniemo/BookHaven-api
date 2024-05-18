import { useContext } from "react";
import { useGlobalDispatchAddAuthor } from "../hooks/useGlobalDispatchAddAuthor";
import { useGlobalDispatchRemove } from "../hooks/useGlobalDispatchRemove";
import { GlobalContext } from "../state/GlobalStateContext";
import { DisplayAuthorProps } from "../types/Types";
import {
  ifAuthorIsFavouriteUtil,
  toggleFavouriteAuthorUtil,
} from "../utils/bookUtils";
import DisplayDataCard from "./DisplayDataCard";
import DisplayDataCardContainer from "./DisplayDataCardContainer";

const DisplayAuthor: React.FC<DisplayAuthorProps> = ({ data, favourites }) => {
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
  );
};

export default DisplayAuthor;