import { useToggle } from "../../hooks/useToggle";
import SearchAuthor from "./SearchAuthor";
import SearchTitle from "./SearchTitle";
import searchTitle from "../../Assets/search-book.png";
import searchTitleGrey from "../../Assets/search-book-grey.png";
import searchWriter from "../../Assets/search-writer.png";

const Home = () => {
  const { toggle, toggleState } = useToggle();  

  return (
    <>
      <section className=" mt-5">
        <button className=" ml-10 mr-10 p-3" onClick={toggleState}>
          <img src={searchTitle} alt="" />
          Search for Book Title
        </button>
        <button className=" ml-10 mr-10 p-3" onClick={toggleState}>
          <img src={searchWriter} alt="" />
          Search for an Author
        </button>
      </section>
      <article className="p-1.5 ml-10">
        {toggle ? <SearchAuthor /> : <SearchTitle />}
      </article>
    </>
  );
};

export default Home;
