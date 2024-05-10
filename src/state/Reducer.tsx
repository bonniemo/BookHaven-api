
import { Action, InitialStateTypes } from "../types/Types";

export const reducer = (state: InitialStateTypes, action: Action) => {
  switch (action.type) {
    case "ADDFAVBOOK":
      return {
        ...state,
        favouriteBooks: [...state.favouriteBooks, action.payload]
      };
    case "REMOVEFAVBOOK":
      return {
        ...state,
        favouriteBooks: state.favouriteBooks.filter(
          (fav) => fav.key !== action.payload
        ),
      };
      case "ADDFAVAUTHOR":
        return {
            ...state,
            favouriteAuthors: [...state.favouriteAuthors, action.payload]
        }
        case "REMOVE_FAV_AUTHOR":
            return {
                ...state,
                favouriteAuthors: state.favouriteAuthors.filter((fav) => fav.key !== action.payload)
            }
        case "ADD_READ_BOOK":
          return {
            ...state,
            readBooks: [...state.readBooks, action.payload]
          }
        case "REMOVE_READ_BOOK":
          return {
            ...state,
            readBooks: state.readBooks.filter((read) => read.dataKey !== action.payload)
          }
    default:
      return state;
  }
};
