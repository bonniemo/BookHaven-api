import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";

const AggregatedData = () => {
  const { state } = useContext(GlobalContext);
  const readBooks = state.readBooks.length;
  return (
    <>
      <article>
        <h2>My Statistics</h2>
        <p>Number of read books: {readBooks}</p>
      </article>
    </>
  );
};

export default AggregatedData;
