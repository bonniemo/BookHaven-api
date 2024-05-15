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
        <label className="mx-1.5" htmlFor="search">
          "Type the title to search for a Book"
        </label>
        <input
          className="px-1.5 mx-1.5 rounded-md p-1"
          type="text"
          placeholder="Title"
          {...searchInput}
        />
        <button className="px-1 border border-black" onClick={handleClick}>
          Search
        </button>
        <FetchData<Book>
        componentProp={ DisplayBooks }
        url={searchUrl}
      /> 
    </>
  )
}

export default SearchTitle