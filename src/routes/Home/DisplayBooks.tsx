import { useContext, useState } from "react";
import { DisplayBookProps, Book } from "../../types/Types";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import ReadBookForm from "./ReadBookForm";
import { useGlobalDispatchAdd } from "../../hooks/useGlobalDispatchAdd";
import {
  ifBookIsFavouriteUtil,
  ifBookIsReadUtil,
  toggleFavouriteUtil,  
} from "../../utils/bookUtils";
import { useGlobalDispatchRemove } from "../../hooks/useGlobalDispatchRemove";
import DisplayDataCard from "../../components/DisplayDataCard";

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
              <DisplayDataCard
                imgUrl={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                title={book.title}
                subTitle={book.author_name.join(", ")}
                otherInfo={<p>{book.first_publish_year}</p>}
                isFavourite={ifBookIsFavourite(book.key)}
                isRead={ifBookisRead(book.key)}
                onToggleFavourite={() =>
                  toggleFavourite(
                    book.key,
                    book.title,
                    book.author_name,
                    book.first_publish_year,
                    book.cover_i
                  )
                }
                onOpenReviewForm={() =>
                  openReviewForm(
                    book.key,
                    book.title,
                    book.author_name,
                    book.first_publish_year,
                    book.cover_i
                  )
                }
              />
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
