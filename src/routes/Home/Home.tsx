import DisplayAuthor from "./DisplayAuthor";
import DisplayBooks from "./DisplayBooks";
import FetchData from "../../components/FetchData";
import { useFormInput } from "../../hooks/useFormInput";
import { useSearch } from "../../hooks/useSearch";
import { useToggle } from "../../hooks/useToggle";
import { Author, Book } from "../../types/Types";

const Home = () => {
  const { toggle, toggleState } = useToggle();
  const placeholder = toggle ? "Title" : "Author";
  const toggleBtnLabel = toggle ? "Search for author" : "Search for Book Title";
  const inputLabel = toggle
    ? "Type the title to search for a Book"
    : "Type the name to search for author";
  const baseUrl = toggle
    ? "https://openlibrary.org/search.json?title="
    : "https://openlibrary.org/search/authors.json?q=";

  const searchInput = useFormInput("");
  const { handleClick, searchUrl } = useSearch(baseUrl, searchInput.value);
  return (
    <article className="bg-pink-300 p-1.5">
      <>
        <button className="px-1 border border-black" onClick={toggleState}>
          {toggleBtnLabel}
        </button>
        <label className="mx-1.5" htmlFor="search">
          {inputLabel}
        </label>
        <input
          className="px-1.5 mx-1.5"
          type="text"
          placeholder={placeholder}
          {...searchInput}
        />
        <button className="px-1 border border-black" onClick={handleClick}>
          Search
        </button>
      </>
      {toggle ? (
        <FetchData<Book>
        componentProp={ DisplayBooks }
        url={searchUrl}
      />      
      ) : (
        <FetchData<Author>
        componentProp={ DisplayAuthor }
        url={searchUrl}
      /> 
      )
    }
      {/* <FetchData
        componentProp={toggle ? DisplayBooks : DisplayAuthor}
        url={searchUrl}
      /> */}
    </article>
  );
};

export default Home;
