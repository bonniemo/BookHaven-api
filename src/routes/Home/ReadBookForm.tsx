import { useFormInput } from "../../hooks/useFormInput";
import { useGlobalDispatchAdd } from "../../hooks/useGlobalDispatchAdd";
import { ReadBookProps } from "../../types/Types";

const ReadBookForm = ({
  dataKey,
  title,
  author_name,
  cover_i,
  first_publish_year,
  setReviewFormVisibility,
}: ReadBookProps) => {
  const addReadBook = useGlobalDispatchAdd("ADD_READ_BOOK");
  const userRating = useFormInput("");
  const userReview = useFormInput("");
  const userNumPages = useFormInput("");

  const handleSubmitRead = (e: any) => {
    e.preventDefault();
    addReadBook(
      dataKey,
      title,
      author_name,
      first_publish_year,
      cover_i,
      userRating.value,
      userReview.value,
      userNumPages.value
    );
    setReviewFormVisibility(false);
  };
  
  return (
    <>
      <article className="w-full h-full">
        <h2>Add to my Reading History</h2>
        <img
          src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
          alt=""
        />
        <p>
          {title} by {author_name}
        </p>
        <form className="flex flex-col" onSubmit={handleSubmitRead}>
          <>
            <label htmlFor="userRating ">Rating</label>
            <input type="number" {...userRating} id="userRating" />
          </>
          <>
            <label htmlFor="userReview">Your Review</label>
            <input type="text" {...userReview} id="userReview" />
          </>
          <>
            <label htmlFor="userNumPages">Number of pages</label>
            <input type="number" {...userNumPages} id="userNumPages" />
          </>
          <button
            className="my-5 px-5 py-2 bg-pink-400 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </article>
    </>
  );
};

export default ReadBookForm;
