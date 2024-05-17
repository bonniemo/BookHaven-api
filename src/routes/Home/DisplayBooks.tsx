import { useContext, useState } from "react";
import { DisplayBookProps, Book } from "../../types/Types";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import ReadBookForm from "./ReadBookForm";
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { useGlobalDispatchAdd } from "../../hooks/useGlobalDispatchAdd";
import {
  ifBookIsFavouriteUtil,
  ifBookIsReadUtil,
  toggleFavouriteUtil, 
} from "../../utils/bookUtils";
import { useGlobalDispatchRemove } from "../../hooks/useGlobalDispatchRemove";

const DisplayBooks: React.FC<DisplayBookProps> = ({ data }) => {
  const docs = data.docs;
  const { state } = useContext(GlobalContext);
  const removeFavouriteBook = useGlobalDispatchRemove("REMOVE_FAV_BOOK");
  const addFavouriteBook = useGlobalDispatchAdd("ADD_FAV_BOOK"); 

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [reviewFormVisibility, setReviewFormVisibility] =
    useState<boolean>(false);
  
  const openReviewForm = (
    key: string,
    title: string,
    author_name: string[],
    first_publish_year: number,
    cover_i: string
  ) => {
    setSelectedBook({ key, title, author_name, cover_i, first_publish_year });    
    setReviewFormVisibility(true);    
  };

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

  const ifBookisRead = (bookKey: string) =>
    ifBookIsReadUtil(bookKey, state.readBooks);  

  return (
    <>
      <DisplayDataCardContainer>
        {docs.map((book: Book) => (
          <article key={book.key}>
            {(!reviewFormVisibility || selectedBook?.key !== book.key) && (
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
                  <button
                    className={
                      ifBookisRead(book.key)
                        ? "my-5 px-5 py-2 rounded-lg border-4 border-pink-400"
                        : "my-5 px-5 py-2 bg-pink-400 rounded-lg hover:bg-purple-300 hover:font-bold"
                    }
                    onClick={() =>
                      openReviewForm(
                        book.key,
                        book.title,
                        book.author_name,
                        book.first_publish_year,
                        book.cover_i
                      )
                    }
                  >
                    {ifBookisRead(book.key) ? (
                      <p>Added to my Read Books</p>
                    ) : (
                      <p>Add to my Read Books</p>
                    )}
                  </button>
                </section>
              </section>
            )}
            {reviewFormVisibility && selectedBook?.key === book.key && (
              <ReadBookForm
                dataKey={selectedBook.key}
                title={selectedBook.title}
                author_name={selectedBook.author_name}
                cover_i={selectedBook.cover_i}
                first_publish_year={selectedBook.first_publish_year}                
                setReviewFormVisibility={setReviewFormVisibility}                
              />
            )}
          </article>
        ))}
      </DisplayDataCardContainer>
    </>
  );
};
export default DisplayBooks;
