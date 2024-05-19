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
    addFavouriteAuthor: (
      key: string,
      name: string,
      birth_date: string,
      top_work: string,
      top_subjects: string[]
    ) => void,
    removeFavouriteAuthor: (key: string) => void
  ) => {
    if (ifAuthorIsFavouriteUtil(author.key, favoriteAuthors)) {
      removeFavouriteAuthor(author.key);
    } else {
      addFavouriteAuthor(
        author.key,
        author.name,
        author.birth_date,
        author.top_work,
        author.top_subjects
      );
    }
  };