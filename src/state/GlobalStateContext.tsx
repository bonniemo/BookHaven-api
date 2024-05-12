import { createContext } from "react";
import { Action, InitialStateTypes } from "../types/Types";

export const InitialState: InitialStateTypes = {
  favouriteBooks: [
    {
      key: "1",
      title: "The Lost City",
      first_publish_year: 2000,
      author_name: ["John Smith"],
      cover_i: "cover1",
    },
    {
      key: "2",
      title: "Echoes of Eternity",
      first_publish_year: 2005,
      author_name: ["Emily Brown"],
      cover_i: "cover2",
    },
    {
      key: "3",
      title: "Rising Shadows",
      first_publish_year: 2010,
      author_name: ["Michael Johnson"],
      cover_i: "cover3",
    },
  ],
  readBooks: [
    {
      dataKey: "1",
      title: "Into the Unknown",
      author_name: ["Sarah Lee"],
      cover_i: "cover4",
      userRating: "5",
      userReview: "Incredible journey!",
      userNumPages: "300",
    },
    {
      dataKey: "2",
      title: "The Silent Forest",
      author_name: ["David White"],
      cover_i: "cover5",
      userRating: "4",
      userReview: "A haunting tale.",
      userNumPages: "250",
    },
    {
      dataKey: "3",
      title: "Shadows of the Past",
      author_name: ["Rachel Green"],
      cover_i: "cover6",
      userRating: "3",
      userReview: "Interesting read.",
      userNumPages: "200",
    },
  ],
  favouriteAuthors: [
    {
      key: "1",
      name: "John Smith",
      birth_date: "1965-03-12",
      top_work: "The Lost City",
      top_subjects: ["Adventure", "Mystery"],
    },
    {
      key: "2",
      name: "Emily Brown",
      birth_date: "1978-09-24",
      top_work: "Echoes of Eternity",
      top_subjects: ["Fantasy", "Romance"],
    },
    {
      key: "3",
      name: "Michael Johnson",
      birth_date: "1982-05-05",
      top_work: "Rising Shadows",
      top_subjects: ["Science Fiction", "Thriller"],
    },
  ],
};

export const GlobalContext = createContext<{
  state: InitialStateTypes;
  dispatch: React.Dispatch<Action>;
}>({
  state: InitialState,
  dispatch: () => null,
});
