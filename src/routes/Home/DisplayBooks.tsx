import { useContext, useState } from "react";
import { DisplayBookProps, Book } from "../../types/Types";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import ReadBookForm from "./ReadBookForm";
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";

const DisplayBooks: React.FC<DisplayBookProps> = ({ data }) => {
  const docs = data.docs;
  const { dispatch } = useContext(GlobalContext);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [reviewFormVisibility, setReviewFormVisibility] =
    useState<boolean>(false);
  const [hideBookInfo, setHideBookInfo] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isRead, setIsRead] = useState<{ [key: string]: boolean }>({});
  const [isFav, setIsFav] = useState<{ [key: string]: boolean }>({});

  const addFavouriteBook = (
    key: string,
    title: string,
    author_name: string[],
    first_publish_year: number,
    cover_i: string
  ) => {
    dispatch({
      type: "ADD_FAV_BOOK",
      payload: {
        key: key,
        title: title,
        author_name: author_name,
        first_publish_year: first_publish_year,
        cover_i: cover_i,
      },
    });
    setIsFav((prevState) => ({ ...prevState, [key]: true }));
  };

  const removeFavouriteBook = (key: string) => {
    dispatch({
      type: "REMOVE_FAV_BOOK",
      payload: key,
    });
    setIsFav((prevState) => ({ ...prevState, [key]: false }));
  };

  const addRead = (
    key: string,
    title: string,
    author_name: string[],
    first_publish_year: number,
    cover_i: string
  ) => {
    setSelectedBook({ key, title, author_name, cover_i, first_publish_year });
    setHideBookInfo((prevState) => ({ ...prevState, [key]: true }));
    setReviewFormVisibility(true);
    setIsRead((prevState) => ({ ...prevState, [key]: true }));
  };

  return (
    <>
      <DisplayDataCardContainer>
        {docs.map((book: Book) => (
          <DisplayDataCard key={book.key}>
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
                  {!isFav[book.key] ? (
                    <button
                      className="my-5 px-5 py-2 bg-pink-300 rounded-lg hover:bg-purple-300"
                      onClick={() =>
                        addFavouriteBook(
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
                  ) : (
                    <button
                      className="my-5 px-5 py-2 bg-pink-300 rounded-lg"
                      onClick={() => removeFavouriteBook(book.key)}
                    >
                      <GoHeartFill className="text-3xl" />
                    </button>
                  )}

                  <button
                    className={
                      isRead[book.key]
                        ? "my-5 px-5 py-2 rounded-lg border-4 border-pink-400"
                        : "my-5 px-5 py-2 bg-pink-400 rounded-lg hover:bg-purple-300 hover:font-bold"
                    }
                    onClick={() =>
                      addRead(
                        book.key,
                        book.title,
                        book.author_name,
                        book.first_publish_year,
                        book.cover_i
                      )
                    }
                  >
                    {isRead[book.key] ? (
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
                setReviewFormVisibility={setReviewFormVisibility}
                setHideBookInfo={setHideBookInfo}
              />
            )}
          </DisplayDataCard>
        ))}
      </DisplayDataCardContainer>
    </>
  );
};
export default DisplayBooks;
