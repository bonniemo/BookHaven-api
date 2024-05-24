import { useContext } from "react";
import { DisplayBookProps, Book } from "../types/Types";
import { GlobalContext } from "../state/GlobalStateContext";
import DisplayDataCardContainer from "./DisplayDataCardContainer";
import { useGlobalDispatchAdd } from "../hooks/useGlobalDispatchAdd";
import {
  ifBookIsFavouriteUtil,
  toggleFavouriteBookUtil,
} from "../utils/bookUtils";
import { useGlobalDispatchRemove } from "../hooks/useGlobalDispatchRemove";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DisplayBooksCard from "./DisplayBooksCard";

const DisplayBooks = ({ data, favourites, read }: DisplayBookProps) => {
  const { state } = useContext(GlobalContext);
  const booksArr = favourites
    ? state.favouriteBooks
    : read
      ? state.readBooks
      : data?.docs || [];

  const removeFavouriteBook = useGlobalDispatchRemove("REMOVE_FAV_BOOK");
  const addFavouriteBook = useGlobalDispatchAdd("ADD_FAV_BOOK");

  const ifBookIsFavourite = (key: string) =>
    ifBookIsFavouriteUtil(key, state.favouriteBooks);

  const toggleFavourite = (book: Book) => {
    
    const isCurrentFavourite = ifBookIsFavourite(book.key);
    toggleFavouriteBookUtil(
      book,
      state.favouriteBooks,
      addFavouriteBook,
      removeFavouriteBook
    );
    if (isCurrentFavourite) {
      toast("Book removed from favourites");
    } else {
      return;
    }
  };

  const isEmptySearch = data?.docs.length === 0;
  const isEmptyFavourites = favourites && state.favouriteBooks.length === 0;
  const isEmptyRead = read && state.readBooks.length === 0;

  return (
    <>
      {(isEmptySearch || isEmptyFavourites || isEmptyRead) && (
        <section className="mx-10 my-5">
          {isEmptySearch && "Sorry, no books found"}
          {isEmptyFavourites && "No favourite books added yet."}
          {isEmptyRead && "No books added to Reading History yet."}
        </section>
      )}
      <ToastContainer />
      <DisplayDataCardContainer>
        <DisplayBooksCard
          booksArr={booksArr}
          toggleFavourite={toggleFavourite}
        />
      </DisplayDataCardContainer>
    </>
  );
};
export default DisplayBooks;