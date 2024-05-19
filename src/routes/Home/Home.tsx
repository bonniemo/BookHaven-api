import SearchAuthor from "./SearchAuthor";
import SearchTitle from "./SearchTitle";
import searchTitleImg from "../../Assets/search-book.png";
import searchTitleGrey from "../../Assets/search-book-grey.png";
import searchAuthorImg from "../../Assets/search-writer.png";
import SearchAuthorGrey from "../../Assets/search-author-grey.png";
import { useState } from "react";
import RandomAuthorQuote from "../../components/RandomAuthorQuote";

const Home = () => {
  const [searchTitle, setSearchTitle] = useState(true);

  return (
    <>
      <section className=" mt-5 leading-loose">
        <button
          className=" ml-10 mr-10 p-3 hover:font-bold"
          onClick={() => setSearchTitle(true)}
        >
          {searchTitle ? (
            <img src={searchTitleImg} alt="" />
          ) : (
            <img src={searchTitleGrey} alt="" />
          )}
          Search for Book Title
        </button>
        <button
          className=" ml-10 mr-10 p-3 hover:font-bold"
          onClick={() => setSearchTitle(false)}
        >
          {searchTitle ? (
            <img src={SearchAuthorGrey} alt="" />
          ) : (
            <img src={searchAuthorImg} alt="" />
          )}
          Search for an Author
        </button>
      </section>
      <article className="p-1.5 ml-10">
        {searchTitle ? <SearchTitle /> : <SearchAuthor />}
      </article>
      <RandomAuthorQuote />
    </>
  );
};

export default Home;
