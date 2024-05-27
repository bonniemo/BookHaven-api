import { Author } from "../types/Types";

export const ifAuthorIsFavouriteUtil = (
  key: string,
  favoriteAuthors: Author[]
) => {
  return favoriteAuthors.some((favoriteAuthor) => favoriteAuthor.key === key);
};

export const toggleFavouriteAuthorUtil = (
  author: Author,
  favoriteAuthors: Author[],
  addFavouriteAuthor: (author: Author) => void,
  removeFavouriteAuthor: (key: string) => void
) => {
  if (ifAuthorIsFavouriteUtil(author.key, favoriteAuthors)) {
    removeFavouriteAuthor(author.key);
  } else {
    addFavouriteAuthor(author);
  }
};
