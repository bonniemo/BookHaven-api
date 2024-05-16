import FetchData from "../../components/FetchData";
import { useFormInput } from "../../hooks/useFormInput";
import { useSearch } from "../../hooks/useSearch";
import { Author } from "../../types/Types";
import DisplayAuthor from "./DisplayAuthor";

const SearchAuthor = () => {
  const baseUrl = "https://openlibrary.org/search/authors.json?q=";
  const searchInput = useFormInput("");
  const { handleClick, searchUrl } = useSearch(baseUrl, searchInput.value);
  return (
    <>      
      <input
        className="my-5 px-5 py-2 w-80 border-l-2 border-t-2 border-b-2 border-black"
        type="text"
        placeholder="Author"
        {...searchInput}
      />
      <button
        className="my-5 px-5 py-2 bg-pink-300 border-black border-t-2 border-b-2 border-r-2"
        onClick={handleClick}
      >
        Search
      </button>
      <FetchData<Author> componentProp={DisplayAuthor} url={searchUrl} />
    </>
  );
};

export default SearchAuthor;
