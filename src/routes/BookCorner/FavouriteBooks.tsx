import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import { useGlobalDispatch } from "../../hooks/useGlobalDispatch";

const FavouriteBooks = () => {
  const { state } = useContext(GlobalContext);
  const removeFavouriteBook = useGlobalDispatch("REMOVE_FAV_BOOK");

  return (
    <>
      <h2 className="mx-10 mt-10 mb-5 text-2xl">My favourite Books</h2>
      <DisplayDataCardContainer>
        {state.favouriteBooks.map((book) => (
          <DisplayDataCard 
          key={book.key}
          imgUrl={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          title={book.title}
          subTitle={book.author_name.join(", ")}
          otherInfo={<p>First published: {book.first_publish_year}</p>}
          onDelete={() => removeFavouriteBook(book.key)}
          />
            
         
        ))}
      </DisplayDataCardContainer>
    </>
  );
};

export default FavouriteBooks;
