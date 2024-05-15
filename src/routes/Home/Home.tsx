
import { useToggle } from "../../hooks/useToggle";
import SearchAuthor from "./SearchAuthor";
import SearchTitle from "./SearchTitle";

const Home = () => {
  const { toggle, toggleState } = useToggle();  
  const toggleBtnLabel = toggle ? "Search for Book Title" : "Search for author";

  return (
    <article className="my-4 p-1.5">
      <>
        <button className="px-1 border border-black" onClick={toggleState}>
          {toggleBtnLabel}
        </button>

        {toggle ? <SearchAuthor/> : <SearchTitle/>}
        
      </>         
    </article>
  );
};

export default Home;
