import FetchData from "../../components/FetchData";
import { useFormInput } from "../../hooks/useFormInput";
import { useSearch } from "../../hooks/useSearch";
import { Book } from "../../types/Types";
import TitleSearchResult from "./TitleSearchResult";

const SearchTitle = () => {
  const baseUrl = "https://openlibrary.org/search.json?title=";
  const searchInput = useFormInput("");
  const { handleClick, searchUrl } = useSearch(baseUrl, searchInput.value);
  return (
    <>
      <input
        className="my-5 px-5 py-2 w-80 border-l-2 border-t-2 border-b-2 border-black rounded-l-md rounded-r-none;
        border-bottom-right-radius: 0;"
        type="text"
        placeholder="Title"
        {...searchInput}
      />
      <button
        className="my-5 px-5 py-2 bg-pink-300 border-black border-t-2 border-b-2 border-r-2 rounded-r-md rounded-l-none hover:bg-purple-300"
        onClick={handleClick}
      >
        Search
      </button>

      <FetchData<Book> componentProp={TitleSearchResult} url={searchUrl} />
    </>
  );
};

export default SearchTitle;
