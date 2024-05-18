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
      <article className="min-w-72 max-w-72 max-h-min px-5 pb-5 pt-2 rounded-lg border-8 border-stone-900 flex flex-col leading-relaxed">
        <h2 className="self-center mb-2 text-lg font-bold">Add to my Reading History</h2>
        <img
          className="w-full h-52 object-contain object-center rounded mb-4"
          src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
          alt={`Book cover of ${title}`}
        />
        <p>
          {title} by {author_name}
        </p>
        <form className="flex flex-col" onSubmit={handleSubmitRead}>
          <>
            <label htmlFor="userRating ">Rating</label>
            <input className="border-2 border-stone-600 rounded-md" type="number" {...userRating} id="userRating" />
          </>
          <>
            <label htmlFor="userReview">Your Review</label>
            <input className="border-2 border-stone-600 rounded-md" type="text" {...userReview} id="userReview" />
          </>
          <>
            <label htmlFor="userNumPages">Number of pages</label>
            <input className="border-2 border-stone-600 rounded-md" type="number" {...userNumPages} id="userNumPages" />
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
