import { useContext, useState } from "react";
import { DisplayBookProps, Book } from "../types/Types";
import { GlobalContext } from "../state/GlobalStateContext";
import DisplayDataCardContainer from "./DisplayDataCardContainer";
import { useGlobalDispatchAdd } from "../hooks/useGlobalDispatchAdd";
import {
  getBookInfo,
  ifBookIsFavouriteUtil,
  ifBookIsReadUtil,
  toggleFavouriteBookUtil,
} from "../utils/bookUtils";
import { useGlobalDispatchRemove } from "../hooks/useGlobalDispatchRemove";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DisplayBooksCard from "./DisplayBooksCard";

const DisplayBooks: React.FC<DisplayBookProps> = ({
  data,
  favourites,
  read,
}) => {
  const { state } = useContext(GlobalContext);
  const books = favourites
    ? state.favouriteBooks
    : read
      ? state.readBooks
      : data?.docs || [];

  const removeFavouriteBook = useGlobalDispatchRemove("REMOVE_FAV_BOOK");
  const addFavouriteBook = useGlobalDispatchAdd("ADD_FAV_BOOK");
  const removeReadBook = useGlobalDispatchRemove("REMOVE_READ_BOOK");

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [reviewFormVisibility, setReviewFormVisibility] =
    useState<boolean>(false);

  const ifBookisRead = (bookKey: string) =>
    ifBookIsReadUtil(bookKey, state.readBooks);

  const openReviewForm = (
    key: string,
    title: string,
    author_name: string[],
    first_publish_year: number,
    cover_i: string
  ) => {
    if (ifBookisRead(key)) {
      removeReadBook(key);
      toast("Book removed from ReadingHistory");
    } else {
      setSelectedBook({ key, title, author_name, cover_i, first_publish_year });
      setReviewFormVisibility(true);
    }
  };

  const ifBookIsFavourite = (bookKey: string) =>
    ifBookIsFavouriteUtil(bookKey, state.favouriteBooks);

  const toggleFavourite = (book: Book) => {
    const bookInfo = getBookInfo(book);
    const isCurrentFavourite = ifBookIsFavourite(book.key);
    toggleFavouriteBookUtil(
      bookInfo,
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
          books={books}
          openReviewForm={openReviewForm}
          toggleFavourite={toggleFavourite}
          setReviewFormVisibility={setReviewFormVisibility}
          selectedBook={selectedBook}
          reviewFormVisibility={reviewFormVisibility}
        />
      </DisplayDataCardContainer>
    </>
  );
};
export default DisplayBooks;
