import FetchData from "../../components/FetchData";
import { useFormInput } from "../../hooks/useFormInput";
import { useSearch } from "../../hooks/useSearch";
import { Book } from "../../types/Types";
import DisplayBooks from "./DisplayBooks";

const SearchTitle = () => {
  const baseUrl = "https://openlibrary.org/search.json?title=";
  const searchInput = useFormInput("");
  const { handleClick, searchUrl } = useSearch(baseUrl, searchInput.value);
  return (
    <>
      <input
        className="my-5 px-5 py-2 w-80 border-l-2 border-t-2 border-b-2 border-black"
        type="text"
        placeholder="Title"
        {...searchInput}
      />
      <button
        className="my-5 px-5 py-2 bg-pink-300 border-black border-t-2 border-b-2 border-r-2 hover:bg-purple-300"
        onClick={handleClick}
      >
        Search
      </button>

      <FetchData<Book> componentProp={DisplayBooks} url={searchUrl} />
    </>
  );
};

export default SearchTitle;
