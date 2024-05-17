import { useContext, useState } from "react";
import { DisplayBookProps, Book } from "../../types/Types";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import ReadBookForm from "./ReadBookForm";
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { useGlobalDispatch } from "../../hooks/useGlobalDispatch";
import { useGlobalDispatchAdd } from "../../hooks/useGlobalDispatchAdd";
import {
  ifBookIsFavouriteUtil,
  toggleFavouriteUtil,
} from "../../utils/bookUtils";

const DisplayBooks: React.FC<DisplayBookProps> = ({ data }) => {
  const docs = data.docs;
  const { state } = useContext(GlobalContext);
  const removeFavouriteBook = useGlobalDispatch("REMOVE_FAV_BOOK");
  const addFavouriteBook = useGlobalDispatchAdd("ADD_FAV_BOOK");

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [reviewFormVisibility, setReviewFormVisibility] =
    useState<boolean>(false);
  const [hideBookInfo, setHideBookInfo] = useState<{ [key: string]: boolean }>(
    {}
  );

  const ifBookIsFavourite = (bookKey: string) =>
    ifBookIsFavouriteUtil(bookKey, state.favouriteBooks);

  const toggleFavourite = (
    key: string,
    title: string,
    author_name: string[],
    first_publish_year: number,
    cover_i: string
  ) => {
    toggleFavouriteUtil(
      { key, title, author_name, first_publish_year, cover_i },
      state.favouriteBooks,
      addFavouriteBook,
      removeFavouriteBook
    );
  };

  return (
    <>
      <DisplayDataCardContainer>
        {docs.map((book: Book) => (
          <article key={book.key}>
            {!hideBookInfo[book.key] && (
              <section className="book_details flex flex-col">
                <img
                  className="w-full h-52 object-contain object-center"
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt=""
                />
                <p className="mt-5">{book.title}</p>
                <p>{book.author_name}</p>
                <p>{book.first_publish_year}</p>
                <section className=" self-baseline">
                  {ifBookIsFavourite(book.key) ? (
                    <button
                      className="my-5 px-5 py-2 bg-pink-300 rounded-lg"
                      onClick={() =>
                        toggleFavourite(
                          book.key,
                          book.title,
                          book.author_name,
                          book.first_publish_year,
                          book.cover_i
                        )
                      }
                    >
                      <GoHeartFill className="text-3xl" />
                    </button>
                  ) : (
                    <button
                      className="my-5 px-5 py-2 bg-pink-300 rounded-lg hover:bg-purple-300"
                      onClick={() =>
                        toggleFavourite(
                          book.key,
                          book.title,
                          book.author_name,
                          book.first_publish_year,
                          book.cover_i
                        )
                      }
                    >
                      <GoHeart className="text-3xl" />
                    </button>
                  )}
                </section>
              </section>
            )}
            {reviewFormVisibility && selectedBook?.key === book.key && (
              <ReadBookForm
                dataKey={selectedBook.key}
                title={selectedBook.title}
                author_name={selectedBook.author_name}
                cover_i={selectedBook.cover_i}
                setReviewFormVisibility={setReviewFormVisibility}
                setHideBookInfo={setHideBookInfo}
              />
            )}
          </article>
        ))}
      </DisplayDataCardContainer>
    </>
  );
};
export default DisplayBooks;
