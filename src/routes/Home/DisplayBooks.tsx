import { useContext, useState } from "react";
import { DisplayBookProps, Book } from "../../types/Types";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import ReadBookForm from "../BookCorner/ReadBookForm";

const DisplayBooks: React.FC<DisplayBookProps> = ({ data }) => {
  const docs = data.docs;
  const { dispatch } = useContext(GlobalContext);
  const [readFormVisibility, setReadFormVisibility] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleClick = (
    key: string,
    title: string,
    author_name: string[],
    first_publish_year: number,
    cover_i: string
  ) => {
    dispatch({
      type: "ADDFAVBOOK",
      payload: {
        key: key,
        title: title,
        author_name: author_name,
        first_publish_year: first_publish_year,
        cover_i: cover_i,
      },
    });
  };

  const handleAddRead = (
    key: string,
    title: string,
    author_name: string[],
    first_publish_year: number,
    cover_i: string
  ) => {
    setSelectedBook({ key, title, author_name, cover_i, first_publish_year });
    setReadFormVisibility(true);
  };

  return (
    <>
      <DisplayDataCardContainer>
        {docs.map((book: Book) => (
          <DisplayDataCard key={book.key}>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt=""
            />

            <p>{book.title}</p>
            <p>{book.author_name}</p>
            <p>{book.first_publish_year}</p>
            <button
              onClick={() =>
                handleClick(
                  book.key,
                  book.title,
                  book.author_name,
                  book.first_publish_year,
                  book.cover_i
                )
              }
            >
              Add Favourite
            </button>
            <button
              onClick={() =>
                handleAddRead(
                  book.key,
                  book.title,
                  book.author_name,
                  book.first_publish_year,
                  book.cover_i
                )
              }
            >
              Mark as Read
            </button>
          </DisplayDataCard>
        ))}
      </DisplayDataCardContainer>
      {readFormVisibility && selectedBook && (
        <ReadBookForm
          dataKey={selectedBook.key}
          title={selectedBook.title}
          author_name={selectedBook.author_name}
          cover_i={selectedBook.cover_i}
        />
      )}
    </>
  );
};

export default DisplayBooks;
