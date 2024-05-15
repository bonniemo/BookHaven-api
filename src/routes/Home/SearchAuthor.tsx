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
      <label className="mx-1.5" htmlFor="search">
        "Type the name to search for an Author"
      </label>
      <input
        className="px-1.5 mx-1.5 rounded-md p-1"
        type="text"
        placeholder="Author"
        {...searchInput}
      />
      <button className="px-1 border border-black" onClick={handleClick}>
        Search
      </button>
      <FetchData<Author> componentProp={DisplayAuthor} url={searchUrl} />
    </>
  );
};

export default SearchAuthor;
